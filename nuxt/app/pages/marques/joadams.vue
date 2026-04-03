<template>
  <div class="joadams-page">
    <div class="brand-hero">
      <div class="brand-hero-content">
        <div class="brand-cat">Parfumerie de Niche · Extraits d'Exception</div>
        <h1>JO ADAMS<br><em>L'art du parfum rare</em></h1>
        <p class="section-desc" style="color:rgba(255,255,255,0.5);">Des extraits de parfums de niche d'une intensité et d'un raffinement rares. Des créations olfactives exclusives pour une clientèle en quête d'unicité absolue.</p>
      </div>
    </div>

    <section class="brand-intro">
      <div class="brand-intro-grid">
        <div>
          <span class="section-label reveal">À propos</span>
          <h2 class="section-title reveal reveal-d1">L'exclusivité comme <em>signature</em></h2>
          <div class="gold-line reveal reveal-d1"></div>
          <p class="section-desc reveal reveal-d2">JO ADAMS incarne l'essence même de la parfumerie de niche : des créations olfactives uniques, formulées sans compromis, pour des clients qui refusent la standardisation.</p>
          <p class="section-desc reveal reveal-d2" style="margin-top:1rem;">Chaque extrait de parfum est une œuvre en soi, conçue avec les matières premières les plus nobles et les concentrations les plus élevées. Un univers olfactif qui ne ressemble à aucun autre.</p>
        </div>
        <div class="brand-visual reveal reveal-d2"></div>
      </div>
    </section>

    <section class="universe">
      <div class="text-center">
        <span class="section-label reveal">L'Univers</span>
        <h2 class="section-title reveal reveal-d1">Ce qui rend JO ADAMS <em>unique</em></h2>
        <div class="gold-line gold-line-center reveal reveal-d1"></div>
      </div>
      <div class="uni-grid">
        <div class="uni-card reveal"><div class="uni-icon">◈</div><div class="uni-title">Extraits Purs</div><p class="uni-text">Des concentrations exceptionnelles en matières premières nobles, offrant une tenue et une intensité incomparables. Le plus haut niveau de la parfumerie.</p></div>
        <div class="uni-card reveal reveal-d1"><div class="uni-icon">◇</div><div class="uni-title">Créations Exclusives</div><p class="uni-text">Des compositions originales et audacieuses qui ne suivent aucune tendance. Chaque parfum raconte une histoire et offre une identité olfactive unique.</p></div>
        <div class="uni-card reveal reveal-d2"><div class="uni-icon">○</div><div class="uni-title">Distribution Sélective</div><p class="uni-text">Une distribution volontairement restreinte pour préserver l'exclusivité. Proposer JO ADAMS, c'est offrir à vos clients ce qu'ils ne trouveront nulle part ailleurs.</p></div>
      </div>
    </section>

    <section class="for-pros">
      <div class="text-center">
        <span class="section-label reveal" style="color:var(--gold);">Pour les professionnels</span>
        <h2 class="section-title reveal reveal-d1" style="color:var(--white);">JO ADAMS dans <em>votre établissement</em></h2>
        <div class="gold-line gold-line-center reveal reveal-d1"></div>
      </div>
      <div class="fp-grid">
        <div class="fp-card reveal"><div class="fp-title">Parfumeries Sélectives</div><p class="fp-text">Complétez votre offre avec une marque de niche qui attire les connaisseurs et les collectionneurs de parfums rares. Un positionnement haut de gamme qui vous différencie des parfumeries généralistes.</p></div>
        <div class="fp-card reveal reveal-d1"><div class="fp-title">Spas &amp; Hôtels de Luxe</div><p class="fp-text">Offrez à vos clients une expérience olfactive d'exception dans votre boutique spa. JO ADAMS complète parfaitement l'univers soin et bien-être en y ajoutant une dimension sensorielle unique.</p></div>
        <div class="fp-card reveal"><div class="fp-title">Marge Attractive</div><p class="fp-text">Un positionnement prix élevé combiné à des marges confortables. Les extraits de parfums de niche sont des produits à forte valeur ajoutée qui génèrent un chiffre d'affaires significatif par mètre linéaire.</p></div>
        <div class="fp-card reveal reveal-d1"><div class="fp-title">Fidélisation Naturelle</div><p class="fp-text">Les amateurs de parfumerie de niche sont des clients fidèles qui reviennent explorer de nouvelles créations. Un cercle vertueux qui nourrit votre activité sur le long terme.</p></div>
      </div>
    </section>

    <section class="other-brands">
      <span class="section-label reveal">Nos Autres Marques</span>
      <div class="ob-row reveal reveal-d1">
        <NuxtLink to="/marques/teslamed" class="ob-link">TESLAMED — Technologie Esthétique</NuxtLink>
        <NuxtLink to="/marques/niance" class="ob-link">NIANCE — Cosmétique Holistique</NuxtLink>
      </div>
    </section>

    <section class="cta-banner">
      <span class="section-label reveal" style="color:var(--gold);">Intéressé par JO ADAMS ?</span>
      <h2 class="section-title reveal reveal-d1">Proposez l'<em>exception olfactive</em></h2>
      <p class="section-desc reveal reveal-d2">Contactez-nous pour découvrir la collection et les conditions de partenariat JO ADAMS.</p>
      <NuxtLink to="/contact" class="btn-primary reveal reveal-d3">Nous contacter</NuxtLink>
    </section>
  </div>
</template>

<script setup lang="ts">
useScrollReveal()
useSeoMeta({
  title: 'JO ADAMS — DISTRISKIN',
  description: "Découvrez JO ADAMS, parfumerie de niche d'exception distribuée par Distriskin.",
})
</script>
