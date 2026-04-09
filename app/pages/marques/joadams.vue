<script setup>
useSeoMeta({
  title: 'JO ADAMS — Extraits de parfums de niche | DISTRISKIN',
  ogTitle: 'JO ADAMS — Extraits de parfums de niche | DISTRISKIN',
  description: 'Découvrez JO ADAMS, extraits de parfums de niche distribués par Distriskin. Parfumerie haut de gamme pour points de vente premium.',
  ogDescription: 'Découvrez JO ADAMS, extraits de parfums de niche distribués par Distriskin. Parfumerie haut de gamme pour points de vente premium.',
  ogImage: '/images/logo-distriskin.jpeg',
})
</script>

<template>
<div class="page-hero"><div class="page-hero-content">
  <p class="section-label">Héritage Égyptien · Exigence Allemande</p>
  <h1 class="section-title hero-title-large">JO ADAMS<br><em>Bien plus qu'un parfum : une signature</em></h1>
  <p class="section-desc hero-desc">Une parfumerie de caractère, dédiée à celles et ceux qui recherchent l'exclusivité. Extraits de parfums d'exception, concentrations rares de 30 à 40% d'essences.</p>
</div></div>

<section class="brand-intro"><div class="brand-intro-grid">
  <div>
    <p v-reveal class="section-label">La Maison</p>
    <h2 v-reveal.d1 class="section-title">L'art de créer<br>des <em>expériences</em></h2>
    <div v-reveal.d1 class="gold-line"></div>
    <p v-reveal.d2 class="section-desc">Chez JO ADAMS, chaque fragrance est pensée comme une œuvre d'art sensorielle, un dialogue subtil entre émotion, mémoire et élégance intemporelle.</p>
    <p v-reveal.d2 class="section-desc section-desc-spaced">L'âme de la maison puise ses racines dans l'histoire de son créateur, Mahmoud Khairy, nez et fils de cultivateurs de jasmin en Égypte. De cet héritage est née une vision singulière : marier la richesse olfactive orientale à l'élégance et à la précision européennes.</p>
    <p v-reveal.d3 class="section-desc section-desc-spaced">Les parfums sont élaborés en Allemagne selon un savoir-faire artisanal d'exception, à partir d'ingrédients soigneusement sélectionnés en Égypte et dans les plus belles régions du monde.</p>
  </div>
  <div v-reveal.d2 class="brand-visual"><NuxtImg src="/images/joadams-hero.png" alt="JO ADAMS" loading="lazy" width="512" height="512" /></div>
</div></section>

<section class="stats-strip">
  <div class="stats-grid">
    <div v-reveal><div class="stat-number">30-40%</div><div class="stat-label">Concentration d'essences</div></div>
    <div v-reveal.d1><div class="stat-number">22</div><div class="stat-label">Créations référencées</div></div>
    <div v-reveal.d2><div class="stat-number">8.8</div><div class="stat-label">Note moyenne sur Parfumo</div></div>
    <div v-reveal.d3><div class="stat-number">FR</div><div class="stat-label">Exclusivité territoriale France</div></div>
  </div>
</section>

<section class="pillars">
  <div class="section-header"><p v-reveal class="section-label">Trois Piliers</p><h2 v-reveal.d1 class="section-title">Élégance, authenticité,<br><em>qualité absolue</em></h2></div>
  <div class="pillars-grid">
    <div v-reveal class="pillar"><div class="pillar-icon">◈</div><div class="pillar-title">Extraits Purs</div><p class="pillar-text">Des concentrations rares de 30 à 40% d'essences — de véritables extraits de parfum à la signature hors norme. Des composants majoritairement naturels pour une finesse exceptionnelle et une tenue remarquable.</p></div>
    <div v-reveal.d1 class="pillar"><div class="pillar-icon">◇</div><div class="pillar-title">Créations Exclusives</div><p class="pillar-text">Chaque composition révèle un équilibre parfait entre puissance et subtilité, sensualité et élégance. Des créations originales qui ne suivent aucune tendance — chaque parfum raconte une histoire unique.</p></div>
    <div v-reveal class="pillar"><div class="pillar-icon">✧</div><div class="pillar-title">Savoir-Faire Artisanal</div><p class="pillar-text">Façonnés par des maîtres parfumeurs où techniques traditionnelles et modernité se rencontrent. Les matières premières, parmi les plus nobles au monde, sont sélectionnées avec une exigence absolue.</p></div>
    <div v-reveal.d1 class="pillar"><div class="pillar-icon">○</div><div class="pillar-title">Distribution Sélective</div><p class="pillar-text">Une distribution volontairement restreinte pour préserver l'exclusivité. Proposer JO ADAMS, c'est offrir à vos clients ce qu'ils ne trouveront nulle part ailleurs.</p></div>
  </div>
</section>

<section class="collection">
  <div class="section-header"><p v-reveal class="section-label">Pour votre établissement</p><h2 v-reveal.d1 class="section-title">JO ADAMS dans <em>votre activité</em></h2></div>
  <div class="collection-grid">
    <div v-reveal class="coll-card"><div class="coll-num">01</div><div class="coll-title">Exclusivité</div><p class="coll-text">Exclusivité territoriale France. Vos clients découvrent chez vous une maison qu'ils ne trouveront nulle part ailleurs.</p></div>
    <div v-reveal.d1 class="coll-card"><div class="coll-num">02</div><div class="coll-title">Marge Attractive</div><p class="coll-text">Un positionnement prix élevé avec des marges confortables. Les extraits de niche génèrent un CA significatif par mètre linéaire.</p></div>
    <div v-reveal.d2 class="coll-card"><div class="coll-num">03</div><div class="coll-title">Fidélisation</div><p class="coll-text">Les amateurs de parfumerie de niche sont des clients fidèles qui reviennent explorer de nouvelles créations. Un cercle vertueux.</p></div>
  </div>
</section>

<section class="other-brands"><p v-reveal class="section-label">Nos Autres Marques</p><div v-reveal.d1 class="ob-row"><NuxtLink to="/marques/teslamed" class="ob-link">TESLAMED — Technologie Esthétique</NuxtLink><NuxtLink to="/marques/niance" class="ob-link">NIANCE — Cosmétique Holistique</NuxtLink></div></section>

<section class="cta-section"><p v-reveal class="section-label">Intéressé par JO ADAMS ?</p><h2 v-reveal.d1 class="section-title cta-title-spaced">Proposez l'<em>exception olfactive</em></h2><p v-reveal.d2 class="section-desc">Contactez-nous pour découvrir la collection et les conditions de partenariat.</p><NuxtLink to="/contact" v-reveal.d3 class="btn-primary">Nous contacter</NuxtLink></section>
</template>

<style scoped>
/* Page-specific: hero watermark */
.page-hero::before { content: 'JA'; position: absolute; top: 50%; right: 8%; transform: translateY(-50%); font-family: var(--serif); font-size: 300px; font-weight: 300; color: rgba(200,169,81,0.03); }
/* Page-specific: brand visual */
.brand-visual { aspect-ratio: 4/5; background: none; border: none; }
.brand-visual img { width: 50%; max-width: 220px; height: auto; filter: drop-shadow(0 0 40px rgba(200,169,81,0.15)); }
</style>
