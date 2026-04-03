<template>
  <div>
    <!-- HOME HERO -->
    <section class="home-hero">
      <div class="home-hero-content">
        <div class="hero-badge">Distribution Premium · Beauté · Bien-être</div>
        <h1>L'excellence au service<br>de <em>vos ambitions</em></h1>
        <p class="hero-sub">Distributeur de marques premium pour les professionnels du soin les plus exigeants. Technologie esthétique, cosmétique holistique, parfumerie de niche.</p>
        <div class="hero-cta-group">
          <NuxtLink to="/contact" class="btn-primary">Devenir partenaire</NuxtLink>
          <NuxtLink to="/approche" class="btn-outline">Découvrir notre approche</NuxtLink>
        </div>
      </div>
      <div class="hero-scroll">
        <span>Découvrir</span>
        <div class="line"></div>
      </div>
    </section>

    <!-- INTRO -->
    <section class="intro-strip">
      <div class="intro-grid">
        <div>
          <span class="section-label reveal">Qui sommes-nous</span>
          <h2 class="section-title reveal reveal-d1">Un partenaire dédié<br>à <em>votre réussite</em></h2>
          <div class="gold-line reveal reveal-d1"></div>
          <p class="section-desc reveal reveal-d2">Distriskin est un expert de la distribution de produits premium auprès de professionnels exigeants. Nous proposons un assortiment de marques haut de gamme accompagné d'un suivi sur mesure, pensé pour vous aider à vous différencier.</p>
          <p class="section-desc reveal reveal-d2" style="margin-top:1rem;">Notre focus : le sell-out. Nous traitons nos clients comme de véritables partenaires et travaillons main dans la main pour adapter des solutions qui répondent à vos objectifs.</p>
          <div class="intro-stats reveal reveal-d3">
            <div class="stat"><div class="stat-number">3</div><div class="stat-label">Marques d'exception</div></div>
            <div class="stat"><div class="stat-number">8+</div><div class="stat-label">Experts terrain</div></div>
            <div class="stat"><div class="stat-number">100%</div><div class="stat-label">Focus sell-out</div></div>
            <div class="stat"><div class="stat-number">FR</div><div class="stat-label">Couverture nationale</div></div>
          </div>
        </div>
        <div class="intro-visual reveal reveal-d2"></div>
      </div>
    </section>

    <!-- BRANDS OVERVIEW -->
    <section class="brands-overview">
      <div class="text-center">
        <span class="section-label reveal">Nos Marques</span>
        <h2 class="section-title reveal reveal-d1">Trois univers<br><em>complémentaires</em></h2>
        <div class="gold-line gold-line-center reveal reveal-d1"></div>
        <p class="section-desc reveal reveal-d2" style="margin: 0 auto;">Proposées seules ou en synergie, nos marques couvrent l'ensemble des besoins de vos clients les plus exigeants.</p>
      </div>
      <div class="brands-overview-grid">
        <div class="brand-ov-card reveal">
          <div class="brand-ov-icon">T</div>
          <div class="brand-ov-name">Teslamed</div>
          <div class="brand-ov-sub">Technologie Esthétique</div>
          <p class="brand-ov-desc">Technologies esthétiques avancées pour des soins du visage et du corps innovants. Des dispositifs de pointe pour des résultats visibles et mesurables.</p>
          <NuxtLink to="/marques/teslamed" class="brand-ov-link">Découvrir <span class="arrow"></span></NuxtLink>
        </div>
        <div class="brand-ov-card reveal reveal-d1">
          <div class="brand-ov-icon">N</div>
          <div class="brand-ov-name">Niance</div>
          <div class="brand-ov-sub">Suisse · Holistique</div>
          <p class="brand-ov-desc">Marque suisse holistique alliant cosmétiques très haut de gamme et compléments alimentaires novateurs. Science et nature en parfaite harmonie.</p>
          <NuxtLink to="/marques/niance" class="brand-ov-link">Découvrir <span class="arrow"></span></NuxtLink>
        </div>
        <div class="brand-ov-card reveal reveal-d2">
          <div class="brand-ov-icon">JA</div>
          <div class="brand-ov-name">Jo Adams</div>
          <div class="brand-ov-sub">Parfumerie de Niche</div>
          <p class="brand-ov-desc">Extraits de parfums de niche d'exception. Des créations olfactives uniques pour une clientèle en quête d'exclusivité et de raffinement absolu.</p>
          <NuxtLink to="/marques/joadams" class="brand-ov-link">Découvrir <span class="arrow"></span></NuxtLink>
        </div>
      </div>
    </section>

    <!-- APPROACH HIGHLIGHTS -->
    <section class="approach-hl">
      <div class="text-center">
        <span class="section-label reveal">Notre Approche</span>
        <h2 class="section-title reveal reveal-d1">Un accompagnement<br><em>à chaque étape</em></h2>
        <div class="gold-line gold-line-center reveal reveal-d1"></div>
        <p class="section-desc reveal reveal-d2" style="color: rgba(255,255,255,0.45); margin: 0 auto;">Bien plus qu'un distributeur, nous construisons avec vous des solutions sur mesure pour atteindre vos objectifs commerciaux.</p>
      </div>
      <div class="approach-hl-grid">
        <div class="ahl-card reveal">
          <div class="ahl-num">01</div>
          <div class="ahl-title">Différenciation</div>
          <p class="ahl-text">Des produits innovants pour une expérience client unique qui vous distingue sur votre marché.</p>
        </div>
        <div class="ahl-card reveal reveal-d1">
          <div class="ahl-num">02</div>
          <div class="ahl-title">Formation</div>
          <p class="ahl-text">Des protocoles de soins et des formations sur mesure dispensées par nos experts en spa de luxe.</p>
        </div>
        <div class="ahl-card reveal reveal-d2">
          <div class="ahl-num">03</div>
          <div class="ahl-title">Proximité</div>
          <p class="ahl-text">Un agent dédié à votre zone, qui comprend vos enjeux et adapte les solutions à votre terrain.</p>
        </div>
        <div class="ahl-card reveal reveal-d3">
          <div class="ahl-num">04</div>
          <div class="ahl-title">Performance</div>
          <p class="ahl-text">Focus sell-out et rentabilité. Votre succès commercial est notre indicateur de performance.</p>
        </div>
      </div>
      <div class="approach-hl-cta reveal">
        <NuxtLink to="/approche" class="btn-primary" style="margin-top:1rem;">En savoir plus</NuxtLink>
      </div>
    </section>

    <!-- CLIENTS -->
    <section class="clients-strip">
      <span class="section-label reveal">Notre Clientèle</span>
      <h2 class="section-title reveal reveal-d1">Des partenaires<br><em>d'exception</em></h2>
      <div class="gold-line gold-line-center reveal reveal-d1"></div>
      <div class="clients-row">
        <div class="cl-type reveal"><div class="cl-icon">✦</div><div class="cl-name">Spas d'Hôtels<br>4* · 5* · Palaces</div></div>
        <div class="cl-type reveal reveal-d1"><div class="cl-icon">◆</div><div class="cl-name">Instituts de Beauté<br>Premium</div></div>
        <div class="cl-type reveal reveal-d2"><div class="cl-icon">❖</div><div class="cl-name">Parfumeries<br>Sélectives</div></div>
        <div class="cl-type reveal reveal-d3"><div class="cl-icon">✧</div><div class="cl-name">Pharmacies & Centres<br>Médecine Préventive</div></div>
      </div>
    </section>

    <!-- CTA BANNER -->
    <section class="cta-banner">
      <span class="section-label reveal" style="color: var(--gold);">Travaillons Ensemble</span>
      <h2 class="section-title reveal reveal-d1">Prêt à proposer<br>des produits <em>d'exception</em> ?</h2>
      <p class="section-desc reveal reveal-d2">Échangeons sur vos besoins et construisons ensemble une offre qui fera la différence auprès de votre clientèle.</p>
      <NuxtLink to="/contact" class="btn-primary reveal reveal-d3">Nous contacter</NuxtLink>
    </section>
  </div>
</template>

<script setup lang="ts">
useScrollReveal()

useSeoMeta({
  title: 'DISTRISKIN — Distribution Premium Beauté & Bien-être',
  description: 'Distriskin, distributeur de marques premium pour les professionnels du soin et du bien-être : TESLAMED, NIANCE, JO ADAMS.',
})
</script>
