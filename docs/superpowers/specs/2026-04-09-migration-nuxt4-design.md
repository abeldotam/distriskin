# Migration Distriskin HTML → Nuxt 4

**Date :** 2026-04-09
**Statut :** Validé

## Principe directeur

**Zéro régression visuelle.** Chaque page Nuxt doit être identique pixel pour pixel aux pages HTML actuelles. Le CSS existant est repris tel quel, pas réinterprété.

## Contexte

Le site distriskin.com est actuellement composé de 7 pages HTML statiques (~4500 lignes) avec un design system cohérent (thème sombre, palette or/noir, fonts Cormorant Garamond + Manrope). Chaque page duplique l'intégralité du CSS, de la nav et du footer.

L'objectif est de migrer vers Nuxt 4 pour :
- Éliminer la duplication (CSS, nav, footer)
- Bénéficier du routing automatique et des optimisations (fonts, images, SEO)
- Faciliter la maintenance et les évolutions futures

## Décisions techniques

| Aspect | Choix | Raison |
|--------|-------|--------|
| Framework | Nuxt 4, mode SSG (`nuxt generate`) | Site vitrine, pas besoin de serveur |
| CSS | CSS vanilla existant repris tel quel dans `main.css` global | Pixel perfect garanti, pas de Tailwind |
| Fonts | `@nuxt/fonts` (Cormorant Garamond + Manrope) | Même rendu, chargement optimisé |
| Images | `@nuxt/image` | Optimisation sans changement visuel |
| SEO | `@nuxtjs/seo` (robots, sitemap, og-image, schema-org) | SEO out-of-the-box |
| Menu mobile | Reproduction exacte du toggle `.menu-toggle` + `.nav-links.show` | Même comportement |
| Animations | Directive Vue custom reproduisant l'IntersectionObserver | Même effet reveal |
| Formulaire contact | HTML statique uniquement | Backend à connecter plus tard |

## Structure cible

```
distriskin/
├── app/
│   ├── assets/
│   │   └── css/
│   │       └── main.css              ← design system + styles globaux
│   ├── components/
│   │   ├── AppNavbar.vue             ← nav + menu mobile
│   │   ├── AppFooter.vue             ← footer
│   │   └── RevealOnScroll.vue        ← composant IntersectionObserver
│   ├── layouts/
│   │   └── default.vue               ← AppNavbar + slot + AppFooter
│   ├── pages/
│   │   ├── index.vue
│   │   ├── approche.vue
│   │   ├── equipe.vue
│   │   ├── contact.vue
│   │   ├── blog.vue
│   │   └── marques/
│   │       ├── teslamed.vue
│   │       ├── niance.vue
│   │       └── joadams.vue
│   └── app.vue
├── public/
│   ├── images/                       ← photos équipe, logo
│   └── favicon.ico
├── nuxt.config.ts
├── package.json
└── tsconfig.json
```

## Mapping des routes

| HTML actuel | Route Nuxt |
|-------------|------------|
| `pages/index.html` | `/` |
| `pages/approche.html` | `/approche` |
| `pages/equipe.html` | `/equipe` |
| `contact.html` | `/contact` |
| `pages/blog.html` | `/blog` |
| `pages/teslamed.html` | `/marques/teslamed` |
| `pages/niance.html` | `/marques/niance` |
| `pages/joadams.html` | `/marques/joadams` |

## Méthode de migration par page

Pour chaque page HTML :

1. **Extraire le CSS commun** (design system, variables, nav, footer, responsive) → `main.css`
2. **Extraire le contenu** entre `<nav>` et `<footer>` → template de la page `.vue`
3. **CSS spécifique à la page** → `<style scoped>` dans le `.vue`
4. **Scripts vanilla** (scroll nav, IntersectionObserver) → logique Vue (`ref`, `onMounted`, directives)
5. **Liens internes** (`href="teslamed.html"`) → `<NuxtLink to="/marques/teslamed">`
6. **Images** → déplacées dans `public/images/`, chemins mis à jour
7. **Meta tags** → `useHead()` ou `useSeoMeta()` dans chaque page

## Composants partagés

### AppNavbar.vue
- Reproduction exacte du HTML/CSS de la `<nav>` actuelle
- Logo DISTRISKIN avec lien vers `/`
- Liens de navigation avec dropdown "Nos Marques"
- Menu burger mobile avec toggle `.nav-links.show`
- Classe `.scrolled` ajoutée au scroll via `onMounted`
- Highlight de la page active via `useRoute()`

### AppFooter.vue
- Reproduction exacte du `<footer>` actuel
- 4 colonnes : brand, navigation, marques, contact
- Liens mentions légales et confidentialité

### RevealOnScroll
- Directive Vue `v-reveal` ou composant wrapper
- Reproduit exactement l'IntersectionObserver actuel (threshold 0.1)
- Applique `opacity: 1` et `transform: translateY(0)` à l'intersection

## Contraintes impératives

- **Pixel perfect** : aucune différence visuelle avec les HTML actuelles
- **Mobile responsive** : menu burger fonctionnel, mêmes breakpoints
- **Pas de Tailwind** : risque de dérive visuelle
- **Pas de refactoring du design** : on migre, on n'améliore pas
- **Pas de nouvelles fonctionnalités**
- **Pas de backend** pour le formulaire contact
- **Pas de blog dynamique** : reste en contenu statique

## Plan d'implémentation

### Phase 1 — Scaffolding Nuxt

1. Supprimer le dossier `nuxt/` existant
2. Initialiser un projet Nuxt 4 à la racine (`nuxi init`)
3. Installer les dépendances : `@nuxt/fonts`, `@nuxt/image`, `@nuxtjs/seo`
4. Configurer `nuxt.config.ts` (SSG, modules, fonts, site URL)
5. Déplacer les assets (images) dans `public/images/`

### Phase 2 — Design system et layout

6. Extraire le CSS commun de toutes les pages HTML → `app/assets/css/main.css`
7. Créer `app/app.vue` (point d'entrée)
8. Créer `AppNavbar.vue` avec menu mobile fonctionnel
9. Créer `AppFooter.vue`
10. Créer `app/layouts/default.vue` (navbar + slot + footer)
11. Créer la directive/composant `RevealOnScroll`

### Phase 3 — Migration des pages

12. Migrer `index.vue` (page d'accueil)
13. Migrer `approche.vue`
14. Migrer `equipe.vue`
15. Migrer `contact.vue` (formulaire statique)
16. Migrer `marques/teslamed.vue`
17. Migrer `marques/niance.vue`
18. Migrer `marques/joadams.vue`
19. Migrer `blog.vue`

### Phase 4 — Vérification et finalisation

20. Vérifier chaque page en comparaison pixel perfect avec les HTML
21. Tester le menu mobile sur toutes les pages
22. Tester le `nuxt generate` (build SSG)
23. Vérifier les meta tags SEO sur chaque page
24. Nettoyer les anciens fichiers HTML (après validation)
