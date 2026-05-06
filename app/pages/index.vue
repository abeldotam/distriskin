<script setup>
useSeoMeta({
  title: 'DISTRISKIN — Distribution Premium Beauté & Bien-être',
  ogTitle: 'DISTRISKIN — Distribution Premium Beauté & Bien-être',
  description: 'Distriskin, distributeur de marques premium pour les professionnels du soin et du bien-être : TESLAMED, NIANCE, JO ADAMS.',
  ogDescription: 'Distriskin, distributeur de marques premium pour les professionnels du soin et du bien-être : TESLAMED, NIANCE, JO ADAMS.',
  ogImage: '/images/logo-distriskin.jpeg',
})

const faq = [
  { q: 'Quelles marques distribue Distriskin ?', a: "Distriskin distribue trois marques premium en France : TESLAMED (technologie esthétique italienne avec l'appareil Ion Stream 680 Pro), NIANCE (cosmétiques et compléments alimentaires suisses haut de gamme) et JO ADAMS (extraits de parfums de niche germano-égyptiens)." },
  { q: "À qui s'adresse Distriskin ?", a: "Distriskin s'adresse exclusivement aux professionnels (B2B) : spas d'hôtels 4 étoiles, 5 étoiles et palaces, instituts de beauté premium, parfumeries sélectives, pharmacies, cliniques esthétiques et centres de médecine préventive." },
  { q: 'Distriskin couvre-t-il toute la France ?', a: "Oui. Distriskin dispose d'une équipe commerciale dédiée couvrant l'ensemble du territoire français, organisée par zones (Île-de-France, Nord-Est, Nord-Ouest et Sud) avec un commercial référent par secteur." },
  { q: 'Existe-t-il une boutique en ligne ?', a: "Oui. Le catalogue produits et les commandes sont accessibles sur la boutique en ligne distriskin-shop.com, en complément du suivi commercial assuré par l'équipe terrain." },
  { q: 'Comment devenir partenaire Distriskin ?', a: "Contactez-nous via le formulaire du site ou par téléphone au +33 6 88 40 56 45. Un commercial de votre zone vous recontacte pour évaluer ensemble vos besoins, présenter les marques pertinentes et construire une offre adaptée à votre établissement." },
]

useSchemaOrg([
  defineLocalBusiness({
    name: 'DISTRISKIN',
    description: 'Distributeur français de marques premium pour les professionnels du soin et du bien-être.',
    address: {
      streetAddress: '421 rue des Cordineaux',
      addressLocality: 'Dommartin',
      postalCode: '69380',
      addressRegion: 'Auvergne-Rhône-Alpes',
      addressCountry: 'FR',
    },
    telephone: '+33688405645',
    email: 'contact@distriskin.com',
    areaServed: 'FR',
    priceRange: '€€€',
    sameAs: ['https://www.distriskin-shop.com'],
  }),
  {
    '@type': 'FAQPage',
    mainEntity: faq.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  },
])
</script>

<template>
<!-- HERO (V3 EXACT) -->
<section class="hero">
  <div class="hero-bg"></div>
  <div class="hero-grain"></div>
  <div class="hero-content">
    <div class="hero-badge">Distribution Sélective Premium</div>
    <h1 class="hero-title">L'excellence au service<br>de la <em>beauté</em></h1>
    <p class="hero-sub">Trois marques d'exception — technologie esthétique, skincare suisse, parfumerie de niche — réunies pour transformer l'expérience de vos clientes.</p>
    <div class="hero-ctas">
      <NuxtLink to="/contact" class="btn-primary">Devenir partenaire</NuxtLink>
      <NuxtLink to="/approche" class="btn-secondary">Découvrir notre approche</NuxtLink>
    </div>
  </div>
  <div class="hero-scroll">
    <span>Explorer</span>
    <div class="scroll-line"></div>
  </div>
</section>

<!-- MARQUEE (V3 EXACT) -->
<div class="marquee-section">
  <div class="marquee-track">
    <span class="marquee-item">Spas 5 étoiles</span>
    <span class="marquee-item">Instituts de Beauté</span>
    <span class="marquee-item">Parfumeries Sélectives</span>
    <span class="marquee-item">Cliniques Esthétiques</span>
    <span class="marquee-item">Hôtels de Luxe</span>
    <span class="marquee-item">Centres de Bien-être</span>
    <span class="marquee-item">Spas 5 étoiles</span>
    <span class="marquee-item">Instituts de Beauté</span>
    <span class="marquee-item">Parfumeries Sélectives</span>
    <span class="marquee-item">Cliniques Esthétiques</span>
    <span class="marquee-item">Hôtels de Luxe</span>
    <span class="marquee-item">Centres de Bien-être</span>
  </div>
</div>

<!-- ANSWER BLOCK (AI-search citable) -->
<section class="answer-block" aria-labelledby="qa-distriskin">
  <h2 id="qa-distriskin" class="answer-block-q">Qu'est-ce que Distriskin ?</h2>
  <p class="answer-block-text">
    <strong>Distriskin</strong> est un distributeur français de marques premium dédié aux professionnels du soin et du bien-être (B2B). L'entreprise sélectionne et commercialise en France trois marques d'exception&nbsp;: <strong>TESLAMED</strong> (technologie esthétique italienne avec l'appareil Ion Stream 680 Pro, combinant trois générateurs et deux brevets internationaux), <strong>NIANCE</strong> (cosmétiques et compléments alimentaires suisses haut de gamme, avec les technologies propriétaires Swiss Glacier Complex® et FERNESSE™) et <strong>JO ADAMS</strong> (extraits de parfums de niche germano-égyptiens à 30-40&nbsp;% de concentration). Distriskin s'adresse aux spas d'hôtels 4*, 5* et palaces, aux instituts de beauté premium, aux parfumeries sélectives, aux pharmacies et aux centres de médecine préventive. L'équipe commerciale couvre l'ensemble du territoire français par zones avec un commercial dédié, et propose un accompagnement sur-mesure&nbsp;: formation, support marketing, suivi sell-out, service après-vente et boutique en ligne dédiée.
  </p>
</section>

<!-- INTRO / QUI SOMMES-NOUS -->
<section class="intro-section">
  <div class="intro-grid">
    <div>
      <p class="section-label reveal" v-reveal>Qui sommes-nous</p>
      <h2 class="section-title reveal reveal-d1" v-reveal>Un partenaire dédié<br>à <em>votre réussite</em></h2>
      <div class="gold-line reveal reveal-d1" v-reveal></div>
      <p class="section-desc reveal reveal-d2" v-reveal>Distriskin est un expert de la distribution de produits premium auprès de professionnels exigeants. Nous proposons un assortiment de marques haut de gamme accompagné d'un suivi sur mesure, pensé pour vous aider à vous différencier.</p>
      <p class="section-desc reveal reveal-d2 section-desc-spaced" v-reveal>Notre focus : le sell-out. Nous traitons nos clients comme de véritables partenaires et travaillons main dans la main pour adapter des solutions qui répondent à vos objectifs.</p>
      <div class="intro-stats reveal reveal-d3" v-reveal>
        <div><div class="stat-number">3</div><div class="stat-label">Marques d'exception</div></div>
        <div><div class="stat-number">8+</div><div class="stat-label">Experts terrain</div></div>
        <div><div class="stat-number">100%</div><div class="stat-label">Focus sell-out</div></div>
        <div><div class="stat-number">FR</div><div class="stat-label">Couverture nationale</div></div>
      </div>
    </div>
    <div class="intro-visual reveal reveal-d2" v-reveal><NuxtImg src="/images/logo-distriskin.jpeg" alt="DISTRISKIN" class="intro-visual-logo" loading="lazy" width="800" height="800" /></div>
  </div>
</section>

<!-- BRANDS -->
<section class="brands-section" id="marques">
  <div class="section-header">
    <p class="section-label reveal" v-reveal>Notre portefeuille</p>
    <h2 class="section-title reveal reveal-d1" v-reveal>Trois univers,<br>une <em>vision</em></h2>
  </div>
  <div class="brands-grid">
    <div class="brand-card" v-reveal>
      <p class="brand-origin">Technologie Esthétique</p>
      <h3 class="brand-name">TESLAMED</h3>
      <p class="brand-tagline">L'innovation au service du soin</p>
      <div class="brand-divider"></div>
      <p class="brand-desc">Technologies esthétiques avancées pour des soins du visage et du corps innovants. Des dispositifs de pointe pour des résultats visibles et mesurables dès la première séance.</p>
      <NuxtLink to="/marques/teslamed" class="brand-link">Découvrir TeslaMed →</NuxtLink>
    </div>
    <div class="brand-card reveal reveal-d1" v-reveal>
      <p class="brand-origin">Suisse — Holistique</p>
      <h3 class="brand-name">NIANCE</h3>
      <p class="brand-tagline">Le sommet du luxe cosmétique suisse</p>
      <div class="brand-divider"></div>
      <p class="brand-desc">Marque suisse holistique alliant cosmétiques très haut de gamme et compléments alimentaires novateurs. Science et nature en parfaite harmonie.</p>
      <NuxtLink to="/marques/niance" class="brand-link">Découvrir Niance →</NuxtLink>
    </div>
    <div class="brand-card reveal reveal-d2" v-reveal>
      <p class="brand-origin">Parfumerie de Niche</p>
      <h3 class="brand-name">JO ADAMS</h3>
      <p class="brand-tagline">L'art de la parfumerie rare</p>
      <div class="brand-divider"></div>
      <p class="brand-desc">Extraits de parfums de niche d'exception. Des créations olfactives uniques pour une clientèle en quête d'exclusivité et de raffinement absolu.</p>
      <NuxtLink to="/marques/joadams" class="brand-link">Découvrir Jo Adams →</NuxtLink>
    </div>
  </div>
</section>

<!-- SHOP STRIP -->
<section class="shop-strip" v-reveal>
  <div class="shop-strip-inner">
    <div class="shop-strip-text">
      <p class="shop-strip-label">Boutique en ligne</p>
      <h3 class="shop-strip-title">Découvrez l'ensemble de nos <em>marques distribuées</em> en ligne</h3>
    </div>
    <a href="https://www.distriskin-shop.com" target="_blank" rel="noopener" class="btn-primary">Accéder à la boutique ↗</a>
  </div>
</section>

<!-- APPROACH -->
<section class="approach-section">
  <div class="section-header">
    <p class="section-label reveal" v-reveal>Notre Approche</p>
    <h2 class="section-title reveal reveal-d1" v-reveal>Un accompagnement<br>à chaque <em>étape</em></h2>
  </div>
  <div class="approach-grid">
    <div class="approach-card" v-reveal>
      <div class="approach-num">01</div>
      <div class="approach-title">Différenciation</div>
      <p class="approach-text">Des produits innovants pour une expérience client unique qui vous distingue sur votre marché.</p>
    </div>
    <div class="approach-card reveal reveal-d1" v-reveal>
      <div class="approach-num">02</div>
      <div class="approach-title">Formation</div>
      <p class="approach-text">Des protocoles de soins et des formations sur mesure dispensées par nos experts en spa de luxe.</p>
    </div>
    <div class="approach-card reveal reveal-d2" v-reveal>
      <div class="approach-num">03</div>
      <div class="approach-title">Proximité</div>
      <p class="approach-text">Un commercial dédié à votre zone, qui comprend vos enjeux et adapte les solutions à votre terrain.</p>
    </div>
    <div class="approach-card reveal reveal-d3" v-reveal>
      <div class="approach-num">04</div>
      <div class="approach-title">Performance</div>
      <p class="approach-text">Focus sell-out et rentabilité. Votre succès commercial est notre indicateur de performance.</p>
    </div>
  </div>
  <div class="text-center reveal approach-cta-wrap" v-reveal>
    <NuxtLink to="/approche" class="btn-primary">En savoir plus</NuxtLink>
  </div>
</section>

<!-- CLIENTS -->
<section class="clients-section">
  <p class="section-label reveal" v-reveal>Notre Clientèle</p>
  <h2 class="section-title reveal reveal-d1" v-reveal>Des partenaires<br><em>d'exception</em></h2>
  <div class="clients-row">
    <div class="cl-type" v-reveal><div class="cl-icon">✦</div><div class="cl-name">Spas d'Hôtels<br>4* · 5* · Palaces</div></div>
    <div class="cl-type reveal reveal-d1" v-reveal><div class="cl-icon">◆</div><div class="cl-name">Instituts de Beauté<br>Premium</div></div>
    <div class="cl-type reveal reveal-d2" v-reveal><div class="cl-icon">❖</div><div class="cl-name">Parfumeries<br>Sélectives</div></div>
    <div class="cl-type reveal reveal-d3" v-reveal><div class="cl-icon">✧</div><div class="cl-name">Pharmacies &amp; Centres<br>Médecine Préventive</div></div>
  </div>
</section>

<!-- FAQ -->
<section class="faq-section">
  <div class="section-header">
    <p class="section-label" v-reveal>Questions fréquentes</p>
    <h2 class="section-title" v-reveal.d1>Tout savoir sur <em>Distriskin</em></h2>
  </div>
  <div class="faq-list">
    <details v-for="(item, i) in faq" :key="i" class="faq-item" v-reveal>
      <summary>{{ item.q }}</summary>
      <div class="faq-answer"><p>{{ item.a }}</p></div>
    </details>
  </div>
</section>

<!-- CTA -->
<section class="cta-section">
  <p class="section-label reveal" v-reveal>Travaillons Ensemble</p>
  <h2 class="section-title reveal reveal-d1 cta-title-spaced" v-reveal>Prêt à proposer<br>des produits <em>d'exception</em> ?</h2>
  <p class="section-desc reveal reveal-d2" v-reveal>Échangeons sur vos besoins et construisons ensemble une offre qui fera la différence auprès de votre clientèle.</p>
  <div class="cta-buttons reveal reveal-d3" v-reveal>
    <NuxtLink to="/contact" class="btn-primary">Nous contacter</NuxtLink>
    <a href="https://www.distriskin-shop.com" target="_blank" rel="noopener" class="btn-secondary">Accéder à la boutique en ligne ↗</a>
  </div>
</section>
</template>

<style scoped>
.section-desc-spaced { margin-top: 16px; }
.approach-cta-wrap { margin-top: 60px; }
.cta-title-spaced { margin-bottom: 24px; }
.cta-buttons { display: inline-flex; gap: 16px; flex-wrap: wrap; justify-content: center; margin-top: 8px; }
</style>
