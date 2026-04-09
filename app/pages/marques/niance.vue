<script setup>
useSeoMeta({
  title: 'NIANCE — Cosmétiques suisses haut de gamme | DISTRISKIN',
  ogTitle: 'NIANCE — Cosmétiques suisses haut de gamme | DISTRISKIN',
  description: 'Découvrez NIANCE, marque suisse holistique de cosmétiques très haut de gamme et compléments alimentaires. Technologie Epigen12, anti-âge premium.',
  ogDescription: 'Découvrez NIANCE, marque suisse holistique de cosmétiques très haut de gamme et compléments alimentaires. Technologie Epigen12, anti-âge premium.',
})
</script>

<template>
<div class="page-hero"><div class="page-hero-content">
  <p class="section-label">Suisse · 100% développé et fabriqué en Suisse</p>
  <h1 class="section-title" style="font-size:clamp(36px,6vw,64px);">NIANCE<br><em>L'excellence suisse au service de la beauté et de la longévité</em></h1>
  <p class="section-desc" style="color:var(--gray); margin-top:24px;">Soins dermocosmétiques de haute performance et compléments alimentaires innovants, formulés pour agir au cœur des mécanismes biologiques du vieillissement.</p>
</div></div>

<section class="brand-intro"><div class="brand-intro-grid">
  <div>
    <p v-reveal class="section-label">Positionnement</p>
    <h2 v-reveal.d1 class="section-title">La beauté et la longévité<br>sont <em>indissociables</em></h2>
    <div v-reveal.d1 class="gold-line"></div>
    <p v-reveal.d2 class="section-desc">NIANCE incarne l'excellence suisse au service de la beauté holistique et de la longévité. La marque développe des soins haute performance et des compléments alimentaires innovants, formulés pour agir au cœur des mécanismes biologiques du vieillissement.</p>
    <p v-reveal.d2 class="section-desc" style="margin-top:16px;">L'approche NIANCE repose sur une vision intégrée : soutenir la peau et le corps en profondeur, afin d'accompagner un vieillissement harmonieux, maîtrisé et durable. Tous les produits sont formulés par des médecins experts, testés scientifiquement par des laboratoires indépendants.</p>
  </div>
  <div v-reveal.d2 class="brand-visual"><NuxtImg src="/images/niance-hero.png" alt="NIANCE Switzerland" loading="lazy" /></div>
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

<section class="other-brands"><p v-reveal class="section-label">Nos Autres Marques</p><div v-reveal.d1 class="ob-row"><NuxtLink to="/marques/teslamed" class="ob-link">TESLAMED — Technologie Esthétique</NuxtLink><NuxtLink to="/marques/joadams" class="ob-link">JO ADAMS — Parfumerie de Niche</NuxtLink></div></section>

<section class="cta-section"><p v-reveal class="section-label">Intéressé par NIANCE ?</p><h2 v-reveal.d1 class="section-title" style="margin-bottom:24px;">Découvrez l'univers <em>NIANCE</em></h2><p v-reveal.d2 class="section-desc">Échangeons sur la manière dont NIANCE peut enrichir votre offre.</p><NuxtLink to="/contact" v-reveal.d3 class="btn-primary">Nous contacter</NuxtLink></section>
</template>

<style scoped>
.page-hero { min-height: 65vh; padding: 160px 60px 80px; background: radial-gradient(ellipse 60% 60% at 70% 30%, rgba(200,169,81,0.05) 0%, transparent 70%), var(--black); display: flex; align-items: flex-end; position: relative; overflow: hidden; }
.page-hero::before { content: 'N'; position: absolute; top: 50%; right: 8%; transform: translateY(-50%); font-family: var(--serif); font-size: 300px; font-weight: 300; color: rgba(200,169,81,0.03); }
.page-hero-content { max-width: 1400px; width: 100%; margin: 0 auto; position: relative; z-index: 2; }
.brand-intro { padding: 140px 60px; }
.brand-intro-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; max-width: 1400px; margin: 0 auto; align-items: center; }
.brand-visual img { width: 100%; height: 100%; object-fit: cover; object-position: center center; }
.brand-visual { aspect-ratio: 1/1; background: radial-gradient(circle at 30% 40%, rgba(200,169,81,0.08) 0%, transparent 60%), var(--black-card); border: 1px solid rgba(200,169,81,0.1); display: flex; align-items: center; justify-content: center; }
.brand-visual::after { display: none; }
.pillars { padding: 140px 60px; background: var(--black-light); border-top: 1px solid rgba(200,169,81,0.06); }
.pillars-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; max-width: 1400px; margin: 60px auto 0; }
.pillar { padding: 48px; background: var(--black-card); border: 1px solid rgba(200,169,81,0.08); transition: all 0.5s cubic-bezier(0.23,1,0.32,1); position: relative; overflow: hidden; }
.pillar::before { content: ""; position: absolute; top: 0; left: 0; width: 2px; height: 0; background: var(--gold); transition: height 0.5s; }
.pillar:hover { transform: translateY(-4px); border-color: rgba(200,169,81,0.2); box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
.pillar:hover::before { height: 100%; }
.pillar-icon { font-size: 24px; margin-bottom: 20px; color: var(--gold); }
.pillar-title { font-size: 13px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 16px; }
.pillar-text { font-size: 15.5px; font-weight: 300; line-height: 1.8; color: var(--gray-light); }
.science { padding: 140px 60px; }
.science-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; max-width: 1400px; margin: 60px auto 0; }
.science-card { padding: 48px; border: 1px solid rgba(200,169,81,0.1); background: var(--black-card); }
.science-card-title { font-family: var(--serif); font-size: 24px; font-weight: 400; margin-bottom: 8px; }
.science-card-sub { font-size: 10px; letter-spacing: 3px; text-transform: uppercase; color: var(--gold); margin-bottom: 20px; font-weight: 600; }
.science-card-text { font-size: 15.5px; font-weight: 300; line-height: 1.8; color: var(--gray-light); }
.stats-strip { padding: 80px 60px; background: var(--black-light); border-top: 1px solid rgba(200,169,81,0.06); border-bottom: 1px solid rgba(200,169,81,0.06); }
.stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; max-width: 1200px; margin: 0 auto; text-align: center; }
.collection { padding: 140px 60px; background: var(--black-light); border-top: 1px solid rgba(200,169,81,0.06); }
.collection-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; max-width: 1200px; margin: 60px auto 0; }
.coll-card { padding: 48px 32px; text-align: center; border: 1px solid rgba(200,169,81,0.08); transition: all 0.4s; }
.coll-card:hover { border-color: rgba(200,169,81,0.2); background: rgba(200,169,81,0.02); }
.coll-num { font-family: var(--serif); font-size: 36px; font-weight: 300; color: var(--gold); margin-bottom: 12px; }
.coll-title { font-size: 12px; letter-spacing: 3px; text-transform: uppercase; font-weight: 600; margin-bottom: 12px; }
.coll-text { font-size: 14.5px; font-weight: 300; line-height: 1.8; color: var(--gray); }
.other-brands { padding: 80px 60px; text-align: center; border-bottom: 1px solid rgba(200,169,81,0.06); }
.ob-row { display: flex; justify-content: center; gap: 24px; margin-top: 32px; }
.ob-link { padding: 16px 40px; border: 1px solid rgba(200,169,81,0.15); font-size: 11px; letter-spacing: 3px; text-transform: uppercase; font-weight: 500; color: var(--gray-light); transition: all 0.3s; }
.ob-link:hover { border-color: var(--gold); color: var(--gold); }
@media (max-width: 1024px) { .brand-intro-grid, .science-grid { grid-template-columns: 1fr; gap: 48px; } .pillars-grid { grid-template-columns: 1fr; } .stats-grid { grid-template-columns: repeat(2, 1fr); } .collection-grid { grid-template-columns: 1fr; } .page-hero, .brand-intro, .pillars, .science, .collection, .other-brands { padding: 80px 24px; } }
@media (max-width: 768px) { .ob-row { flex-direction: column; align-items: center; } .page-hero { min-height: 45vh; padding: 120px 24px 48px; } }
</style>
