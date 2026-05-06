<script setup>
useSeoMeta({
  title: 'NIANCE — Cosmétiques suisses haut de gamme | DISTRISKIN',
  ogTitle: 'NIANCE — Cosmétiques suisses haut de gamme | DISTRISKIN',
  description: 'Découvrez NIANCE, marque suisse holistique de cosmétiques très haut de gamme et compléments alimentaires. Technologie Epigen12, anti-âge premium.',
  ogDescription: 'Découvrez NIANCE, marque suisse holistique de cosmétiques très haut de gamme et compléments alimentaires. Technologie Epigen12, anti-âge premium.',
  ogImage: '/images/logo-distriskin.jpeg',
})

const faq = [
  { q: "Qu'est-ce que NIANCE ?", a: "NIANCE est une marque suisse haut de gamme spécialisée dans la cosmétique holistique et les compléments alimentaires de longévité. Elle est 100% développée et fabriquée en Suisse, présente dans plus de 30 pays, et combine soins dermocosmétiques performants et compléments ciblant l'énergie cellulaire (NAD+), les télomères et le stress oxydatif." },
  { q: "Qu'est-ce que la technologie FERNESSE™ ?", a: "FERNESSE™ est une biotechnologie propriétaire de NIANCE qui optimise le poids moléculaire et la biodisponibilité des actifs clés (vitamine C, rétinol, peptides) via activation enzymatique. Elle permet une meilleure pénétration cutanée et des résultats visibles plus rapidement." },
  { q: "Qu'est-ce que le Swiss Glacier Complex® ?", a: "Le Swiss Glacier Complex® associe l'eau pure des glaciers alpins, des vitamines biodisponibles, des minéraux et des extraits de plantes d'altitude (Edelweiss). Il soutient le renouvellement cellulaire, la protection antioxydante et la fermeté cutanée." },
  { q: 'Qui distribue NIANCE en France ?', a: 'Distriskin distribue NIANCE en France auprès des spas, instituts, parfumeries sélectives et centres de médecine préventive. La distribution inclut formation cabine, conseil retail et soutien marketing.' },
  { q: 'NIANCE peut-il se combiner avec TeslaMed ?', a: "Oui. La combinaison NIANCE + TeslaMed est une signature de Distriskin : la biotechnologie FERNESSE™ associée à l'Ion Stream 680 Pro renforce significativement l'efficacité des protocoles cabine." },
  { q: 'Qui conçoit les protocoles signature NIANCE ?', a: "Les protocoles signature sont conçus par Noélia Ségadé, experte protocoles NIANCE chez Distriskin. Ces protocoles transforment les soins cabine en moments d'exception et structurent l'offre des établissements partenaires." },
]

useSchemaOrg([
  {
    '@type': 'Brand',
    name: 'NIANCE',
    description: 'Marque suisse haut de gamme de cosmétiques holistiques et compléments alimentaires de longévité.',
    countryOfOrigin: 'CH',
  },
  definePerson({
    name: 'Noélia Ségadé',
    jobTitle: 'Experte protocoles NIANCE',
    worksFor: { '@type': 'Organization', name: 'DISTRISKIN', url: 'https://distriskin.com' },
  }),
  {
    '@type': 'FAQPage',
    mainEntity: faq.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  },
])
</script>

<template>
<div class="page-hero"><div class="page-hero-content">
  <p class="section-label">Suisse · 100% développé et fabriqué en Suisse</p>
  <h1 class="section-title hero-title-large">NIANCE<br><em>L'excellence suisse au service de la beauté et de la longévité</em></h1>
  <p class="section-desc hero-desc">Soins dermocosmétiques de haute performance et compléments alimentaires innovants, formulés pour agir au cœur des mécanismes biologiques du vieillissement.</p>
</div></div>

<!-- ANSWER BLOCK (AI-search citable) -->
<section class="answer-block" aria-labelledby="qa-niance">
  <h2 id="qa-niance" class="answer-block-q">Qu'est-ce que NIANCE et comment fonctionne sa science ?</h2>
  <p class="answer-block-text">
    <strong>NIANCE</strong> est une marque suisse haut de gamme dédiée à la cosmétique holistique et à la longévité, distribuée en France par Distriskin. Elle est 100&nbsp;% développée et fabriquée en Suisse et présente dans plus de 30 pays. Sa science repose sur deux piliers&nbsp;: le <strong>Swiss Glacier Complex®</strong>, qui associe eau pure des glaciers alpins, vitamines biodisponibles, minéraux essentiels et extraits de plantes d'altitude comme l'Edelweiss pour soutenir renouvellement cellulaire, protection antioxydante et fermeté ; et la biotechnologie <strong>FERNESSE™</strong>, qui optimise le poids moléculaire et la biodisponibilité des actifs (vitamine C, rétinol, peptides) via activation enzymatique pour une pénétration plus rapide. Au-delà des soins cabine et retail, la collection EPIGEN cible l'énergie cellulaire (NAD+), la protection des télomères et le stress oxydatif. Les protocoles signature sont conçus par Noélia Ségadé pour les établissements partenaires.
  </p>
</section>

<section class="brand-intro"><div class="brand-intro-grid">
  <div>
    <p v-reveal class="section-label">Positionnement</p>
    <h2 v-reveal.d1 class="section-title">La beauté et la longévité<br>sont <em>indissociables</em></h2>
    <div v-reveal.d1 class="gold-line"></div>
    <p v-reveal.d2 class="section-desc">NIANCE incarne l'excellence suisse au service de la beauté holistique et de la longévité. La marque développe des soins haute performance et des compléments alimentaires innovants, formulés pour agir au cœur des mécanismes biologiques du vieillissement.</p>
    <p v-reveal.d2 class="section-desc section-desc-spaced">L'approche NIANCE repose sur une vision intégrée : soutenir la peau et le corps en profondeur, afin d'accompagner un vieillissement harmonieux, maîtrisé et durable. Tous les produits sont formulés par des médecins experts, testés scientifiquement par des laboratoires indépendants.</p>
  </div>
  <div v-reveal.d2 class="brand-visual"><NuxtImg src="/images/niance-hero.png" alt="NIANCE Switzerland" loading="lazy" width="850" height="859" /></div>
</div></section>

<section class="stats-strip">
  <div class="stats-grid">
    <div v-reveal><div class="stat-number">100%</div><div class="stat-label">Swiss Made</div></div>
    <div v-reveal.d1><div class="stat-number">14</div><div class="stat-label">Marqueurs du vieillissement ciblés</div></div>
    <div v-reveal.d2><div class="stat-number">30+</div><div class="stat-label">Pays de distribution</div></div>
    <div v-reveal.d3><div class="stat-number">71%</div><div class="stat-label">Taux de réachat en ligne</div></div>
  </div>
</section>

<section class="science">
  <div class="section-header"><p v-reveal class="section-label">Fondation Scientifique</p><h2 v-reveal.d1 class="section-title">Deux piliers scientifiques<br><em>fondamentaux</em></h2></div>
  <div class="science-grid">
    <div v-reveal class="science-card">
      <div class="science-card-title">Swiss Glacier Complex®</div>
      <div class="science-card-sub">L'expression pure de la puissance alpine</div>
      <p class="science-card-text">Ce complexe exclusif associe l'eau pure des glaciers des Alpes suisses, un cocktail de vitamines biodisponibles, des minéraux essentiels et des extraits de plantes d'altitude comme l'Edelweiss. Un véritable écosystème cellulaire qui soutient le renouvellement, la protection antioxydante et le maintien de la fermeté. La signature alpine de NIANCE : rare, traçable et hautement performante.</p>
    </div>
    <div v-reveal.d1 class="science-card">
      <div class="science-card-title">FERNESSE™ Biotechnology</div>
      <div class="science-card-sub">La maîtrise du poids moléculaire</div>
      <p class="science-card-text">Biotechnologie propriétaire qui optimise le poids moléculaire et la biodisponibilité des ingrédients. Grâce à l'activation enzymatique et l'optimisation structurelle des actifs clés — vitamine C, rétinol, peptides — FERNESSE™ permet une pénétration améliorée, une action plus ciblée et des résultats visibles plus rapidement.</p>
    </div>
  </div>
</section>

<section class="pillars">
  <div class="section-header"><p v-reveal class="section-label">L'Univers NIANCE</p><h2 v-reveal.d1 class="section-title">Une approche <em>intégrée</em></h2></div>
  <div class="pillars-grid">
    <div v-reveal class="pillar"><div class="pillar-icon">✦</div><div class="pillar-title">Cosmétiques Premium</div><p class="pillar-text">Des soins visage et corps au croisement de la rigueur scientifique suisse et de la beauté sensorielle. Textures luxueuses, résultats prouvés, expérience unique.</p></div>
    <div v-reveal.d1 class="pillar"><div class="pillar-icon">◆</div><div class="pillar-title">Compléments de Longévité</div><p class="pillar-text">La collection EPIGEN cible l'énergie cellulaire (NAD+), la protection des télomères et la réduction du stress oxydatif pour un profil biologique plus jeune.</p></div>
    <div v-reveal class="pillar"><div class="pillar-icon">◇</div><div class="pillar-title">Protocoles Signature</div><p class="pillar-text">Des protocoles exclusifs conçus par notre experte Noélia Ségadé, qui transforment chaque prestation en un moment d'exception.</p></div>
    <div v-reveal.d1 class="pillar"><div class="pillar-icon">○</div><div class="pillar-title">Synergie TESLAMED</div><p class="pillar-text">L'association avec les technologies TESLAMED décuple l'efficacité. La biotechnologie FERNESSE™ combinée à l'Ion Stream offre des résultats inégalés.</p></div>
  </div>
</section>

<section class="collection">
  <div class="section-header"><p v-reveal class="section-label">Pour votre établissement</p><h2 v-reveal.d1 class="section-title">Ce que NIANCE apporte<br>à <em>votre activité</em></h2></div>
  <div class="collection-grid">
    <div v-reveal class="coll-card"><div class="coll-num">01</div><div class="coll-title">Image Premium</div><p class="coll-text">Un positionnement Swiss Made qui renforce la crédibilité de votre établissement auprès d'une clientèle exigeante.</p></div>
    <div v-reveal.d1 class="coll-card"><div class="coll-num">02</div><div class="coll-title">Triple Revenue</div><p class="coll-text">Soins cabine + vente retail + compléments alimentaires : trois sources de revenus complémentaires à forte marge.</p></div>
    <div v-reveal.d2 class="coll-card"><div class="coll-num">03</div><div class="coll-title">Formation Experte</div><p class="coll-text">Formations sur mesure incluant maîtrise du soin cabine, conseil client et techniques de vente.</p></div>
  </div>
</section>

<!-- FAQ -->
<section class="faq-section">
  <div class="section-header">
    <p class="section-label" v-reveal>Questions fréquentes</p>
    <h2 class="section-title" v-reveal.d1>Tout savoir sur <em>NIANCE</em></h2>
  </div>
  <div class="faq-list">
    <details v-for="(item, i) in faq" :key="i" class="faq-item" v-reveal>
      <summary>{{ item.q }}</summary>
      <div class="faq-answer"><p>{{ item.a }}</p></div>
    </details>
  </div>
</section>

<section class="shop-strip" v-reveal>
  <div class="shop-strip-inner">
    <div class="shop-strip-text">
      <p class="shop-strip-label">Boutique en ligne</p>
      <h3 class="shop-strip-title">Retrouvez NIANCE et nos <em>autres marques</em> sur la boutique</h3>
    </div>
    <a href="https://www.distriskin-shop.com" target="_blank" rel="noopener" class="btn-primary">Accéder à la boutique ↗</a>
  </div>
</section>

<section class="other-brands"><p v-reveal class="section-label">Nos Autres Marques</p><div v-reveal.d1 class="ob-row"><NuxtLink to="/marques/teslamed" class="ob-link">TESLAMED — Technologie Esthétique</NuxtLink><NuxtLink to="/marques/joadams" class="ob-link">JO ADAMS — Parfumerie de Niche</NuxtLink></div></section>

<section class="cta-section">
  <p v-reveal class="section-label">Intéressé par NIANCE ?</p>
  <h2 v-reveal.d1 class="section-title cta-title-spaced">Découvrez l'univers <em>NIANCE</em></h2>
  <p v-reveal.d2 class="section-desc">Échangeons sur la manière dont NIANCE peut enrichir votre offre.</p>
  <div v-reveal.d3 class="cta-buttons">
    <NuxtLink to="/contact" class="btn-primary">Nous contacter</NuxtLink>
    <a href="https://www.distriskin-shop.com" target="_blank" rel="noopener" class="btn-secondary">Accéder à la boutique en ligne ↗</a>
  </div>
</section>
</template>

<style scoped>
/* Page-specific: hero watermark */
.page-hero::before { content: 'N'; position: absolute; top: 50%; right: 8%; transform: translateY(-50%); font-family: var(--serif); font-size: 300px; font-weight: 300; color: rgba(200,169,81,0.03); }
/* Page-specific: brand visual */
.brand-visual { aspect-ratio: 1/1; background: radial-gradient(circle at 30% 40%, rgba(200,169,81,0.08) 0%, transparent 60%), var(--black-card); border: 1px solid rgba(200,169,81,0.1); }
.brand-visual img { width: 100%; height: 100%; object-fit: cover; object-position: center center; }
.cta-buttons { display: inline-flex; gap: 16px; flex-wrap: wrap; justify-content: center; margin-top: 8px; }
</style>
