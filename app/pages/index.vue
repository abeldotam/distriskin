<script setup>
useSeoMeta({
  title: 'DISTRISKIN — Distribution Premium Beauté & Bien-être',
  ogTitle: 'DISTRISKIN — Distribution Premium Beauté & Bien-être',
  description: 'Distriskin, distributeur de marques premium pour les professionnels du soin et du bien-être : TESLAMED, NIANCE, JO ADAMS.',
  ogDescription: 'Distriskin, distributeur de marques premium pour les professionnels du soin et du bien-être : TESLAMED, NIANCE, JO ADAMS.',
})
</script>

<template>
<!-- HERO (V3 EXACT) -->
<section class="hero">
  <div class="hero-bg"></div>
  <div class="hero-grain"></div>
  <div class="hero-line"></div>
  <div class="hero-line"></div>
  <div class="hero-line"></div>
  <div class="hero-line"></div>
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

<!-- INTRO / QUI SOMMES-NOUS -->
<section class="intro-section">
  <div class="intro-grid">
    <div>
      <p class="section-label reveal" v-reveal>Qui sommes-nous</p>
      <h2 class="section-title reveal reveal-d1" v-reveal>Un partenaire dédié<br>à <em>votre réussite</em></h2>
      <div class="gold-line reveal reveal-d1" v-reveal></div>
      <p class="section-desc reveal reveal-d2" v-reveal>Distriskin est un expert de la distribution de produits premium auprès de professionnels exigeants. Nous proposons un assortiment de marques haut de gamme accompagné d'un suivi sur mesure, pensé pour vous aider à vous différencier.</p>
      <p class="section-desc reveal reveal-d2" v-reveal style="margin-top:16px;">Notre focus : le sell-out. Nous traitons nos clients comme de véritables partenaires et travaillons main dans la main pour adapter des solutions qui répondent à vos objectifs.</p>
      <div class="intro-stats reveal reveal-d3" v-reveal>
        <div><div class="stat-number">3</div><div class="stat-label">Marques d'exception</div></div>
        <div><div class="stat-number">8+</div><div class="stat-label">Experts terrain</div></div>
        <div><div class="stat-number">100%</div><div class="stat-label">Focus sell-out</div></div>
        <div><div class="stat-number">FR</div><div class="stat-label">Couverture nationale</div></div>
      </div>
    </div>
    <div class="intro-visual reveal reveal-d2" v-reveal><NuxtImg src="/images/logo-distriskin.jpeg" alt="DISTRISKIN" class="intro-visual-logo" loading="lazy" /></div>
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
  <div class="text-center reveal" v-reveal style="margin-top:60px;">
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

<!-- CTA -->
<section class="cta-section">
  <p class="section-label reveal" v-reveal>Travaillons Ensemble</p>
  <h2 class="section-title reveal reveal-d1" v-reveal style="margin-bottom:24px;">Prêt à proposer<br>des produits <em>d'exception</em> ?</h2>
  <p class="section-desc reveal reveal-d2" v-reveal>Échangeons sur vos besoins et construisons ensemble une offre qui fera la différence auprès de votre clientèle.</p>
  <NuxtLink to="/contact" class="btn-primary reveal reveal-d3" v-reveal>Nous contacter</NuxtLink>
</section>
</template>

<style scoped>
</style>
