<script setup>
useSeoMeta({
  title: 'TESLAMED — Technologie esthétique avancée | DISTRISKIN',
  ogTitle: 'TESLAMED — Technologie esthétique avancée | DISTRISKIN',
  description: 'Découvrez TESLAMED, technologie esthétique avancée distribuée par Distriskin. Microcourants, canon à ions et soins innovants pour spas, instituts et centres de médecine préventive.',
  ogDescription: 'Découvrez TESLAMED, technologie esthétique avancée distribuée par Distriskin. Microcourants, canon à ions et soins innovants pour spas, instituts et centres de médecine préventive.',
  ogImage: '/images/logo-distriskin.jpeg',
})
</script>

<template>
<div class="page-hero"><div class="page-hero-content">
  <p class="section-label">Italie — Technologie Brevetée</p>
  <h1 class="section-title hero-title-large">TESLAMED<br><em>Révolution esthétique</em></h1>
  <p class="section-desc hero-desc">1ère nano-technologie au monde à combiner 3 générateurs incluant 2 brevets internationaux. Non invasive, indolore, résultats visibles dès la première séance. 100% Made in Italy.</p>
</div></div>

<!-- INTRO -->
<section class="brand-intro"><div class="brand-intro-grid">
  <div>
    <p v-reveal class="section-label">Ion Stream 680 Pro</p>
    <h2 v-reveal.d1 class="section-title">La puissance de<br>trois <em>technologies</em></h2>
    <div v-reveal.d1 class="gold-line"></div>
    <p v-reveal.d2 class="section-desc">L'Ion Stream 680 Pro est la première nano-technologie au monde à combiner trois générateurs distincts, dont deux protégés par des brevets internationaux, dans un seul appareil compact et facilement transportable.</p>
    <p v-reveal.d2 class="section-desc section-desc-spaced">Non invasive et indolore, cette technologie convient à tous types de peau et offre des résultats visibles et durables dès la première séance — sans consommables, garantissant un coût du soin maîtrisé pour votre établissement.</p>
  </div>
  <div v-reveal.d2 class="brand-visual"><NuxtImg src="/images/teslamed-hero.png" alt="TESLAMED Ion Stream 680 Pro" loading="lazy" width="800" height="533" /></div>
</div></section>

<!-- STATS -->
<section class="stats-strip">
  <div class="stats-grid">
    <div v-reveal><div class="stat-number">3</div><div class="stat-label">Générateurs combinés</div></div>
    <div v-reveal.d1><div class="stat-number">2</div><div class="stat-label">Brevets internationaux</div></div>
    <div v-reveal.d2><div class="stat-number">10+</div><div class="stat-label">Applications différentes</div></div>
    <div v-reveal.d3><div class="stat-number">1ère</div><div class="stat-label">Séance, résultats visibles</div></div>
  </div>
</section>

<!-- TECHNOLOGIE -->
<section class="tech-section">
  <div class="section-header"><p v-reveal class="section-label">Technologie Exclusive</p><h2 v-reveal.d1 class="section-title">Trois innovations<br><em>brevetées</em></h2></div>
  <div class="tech-grid">
    <div v-reveal class="tech-card">
      <div class="tech-letter">A</div>
      <div class="tech-name">Canon à Ions (Breveté)</div>
      <p class="tech-desc">Nanodermabrasion et stimulation des fibroblastes augmentant la production de collagène, d'élastine et d'acide hyaluronique réticulaire. Aseptisation de la zone traitée par génération d'ozone.</p>
    </div>
    <div v-reveal.d1 class="tech-card">
      <div class="tech-letter">B</div>
      <div class="tech-name">Microcourants Modulaires (Breveté)</div>
      <p class="tech-desc">Contraction des fibroblastes pour une tonicité cutanée accrue. Rééquilibrage de la balance sodium-potassium et augmentation du travail des mitochondries.</p>
    </div>
    <div v-reveal.d2 class="tech-card">
      <div class="tech-letter">C</div>
      <div class="tech-name">Générateur d'Impulsion</div>
      <p class="tech-desc">Ouverture des canaux ioniques favorisant la pénétration des actifs sélectionnés. Comparable au microneedling, sans aiguilles — totalement non invasif.</p>
    </div>
  </div>
</section>

<!-- BÉNÉFICES -->
<section class="benefits">
  <div class="section-header"><p v-reveal class="section-label">Bénéfices Cliniques</p><h2 v-reveal.d1 class="section-title">Des résultats visibles<br><em>dès la première séance</em></h2></div>
  <div class="benefits-cols">
    <div v-reveal>
      <div class="benefits-col-title">Visage</div>
      <div class="benefit-item">Amélioration de la fermeté cutanée et remodelage du visage</div>
      <div class="benefit-item">Réduction des rides et ridules</div>
      <div class="benefit-item">Régulation pigmentaire et correction des imperfections vasculaires</div>
      <div class="benefit-item">Action antibactérienne (acné, mycoses, inflammations)</div>
      <div class="benefit-item">Blépharoplastie non chirurgicale</div>
      <div class="benefit-item">Affinement du grain de peau et amélioration de l'hydratation</div>
    </div>
    <div v-reveal.d1>
      <div class="benefits-col-title">Corps</div>
      <div class="benefit-item">Atténuation de la cellulite et du relâchement cutané</div>
      <div class="benefit-item">Amélioration de la fermeté et de l'élasticité</div>
      <div class="benefit-item">Traitement des vergetures et amélioration des cicatrices</div>
      <div class="benefit-item">Stimulation du cuir chevelu</div>
      <div class="benefit-item">Redensification dermique et micropeeling</div>
      <div class="benefit-item">Résultats visibles et durables dès la première séance</div>
    </div>
  </div>
</section>

<!-- AVANT / APRÈS -->
<section class="ba-section">
  <div class="section-header"><p v-reveal class="section-label">Résultats</p><h2 v-reveal.d1 class="section-title">Avant <em>&</em> Après</h2></div>
  <div class="ba-grid">
    <div v-reveal class="ba-card">
      <NuxtImg src="/images/teslamed-ba-visage.jpg" alt="Avant/Après TeslaMed - Visage" loading="lazy" width="400" height="203" />
      <div class="ba-label"><span>Avant</span><span class="gold">→</span><span>Après</span></div>
    </div>
    <div v-reveal.d1 class="ba-card">
      <NuxtImg src="/images/teslamed-ba-rajeunissement.jpg" alt="Avant/Après TeslaMed - Rajeunissement" loading="lazy" width="400" height="437" />
      <div class="ba-label"><span>Avant</span><span class="gold">→</span><span>Après</span></div>
    </div>
    <div v-reveal.d2 class="ba-card">
      <NuxtImg src="/images/teslamed-ba-acne.jpg" alt="Avant/Après TeslaMed - Acné" loading="lazy" width="400" height="203" />
      <div class="ba-label"><span>Avant</span><span class="gold">→</span><span>Après</span></div>
    </div>
    <div v-reveal class="ba-card">
      <NuxtImg src="/images/teslamed-ba-yeux.jpg" alt="Avant/Après TeslaMed - Contour des yeux" loading="lazy" width="400" height="377" />
      <div class="ba-label"><span>Avant</span><span class="gold">→</span><span>Après</span></div>
    </div>
    <div v-reveal.d1 class="ba-card">
      <NuxtImg src="/images/teslamed-ba-corps.jpg" alt="Avant/Après TeslaMed - Corps" loading="lazy" width="400" height="297" />
      <div class="ba-label"><span>Avant</span><span class="gold">→</span><span>Après</span></div>
    </div>
    <div v-reveal.d2 class="ba-card">
      <NuxtImg src="/images/teslamed-ba-cuir-chevelu.jpg" alt="Avant/Après TeslaMed - Cuir chevelu" loading="lazy" width="400" height="496" />
      <div class="ba-label"><span>Avant</span><span class="gold">→</span><span>Après</span></div>
    </div>
  </div>
</section>

<!-- USE CASES -->
<section class="use-cases"><div class="section-header"><p v-reveal class="section-label">Pour votre établissement</p><h2 v-reveal.d1 class="section-title">TESLAMED, un atout <em>stratégique</em></h2></div>
<div class="uc-grid">
  <div v-reveal class="uc-card"><div class="uc-title">Technologie exclusive</div><p class="uc-text">Une technologie maîtrisée aux résultats uniques. Fiable, durable et facilement transportable — un investissement qui se rentabilise rapidement.</p></div>
  <div v-reveal.d1 class="uc-card"><div class="uc-title">Fidélisation clientèle</div><p class="uc-text">Des résultats visibles dès la première séance qui créent un effet « waou » et fidélisent naturellement vos clientes sur des cures de soins.</p></div>
  <div v-reveal class="uc-card"><div class="uc-title">Accompagnement complet</div><p class="uc-text">Formation initiale de 2 jours offerte, kit produits initial offert, support marketing dédié et service après-vente réactif.</p></div>
  <div v-reveal.d1 class="uc-card"><div class="uc-title">Synergie NIANCE</div><p class="uc-text">La combinaison avec les cosmétiques NIANCE décuple l'efficacité des protocoles — un argument de différenciation puissant sur votre marché.</p></div>
</div></section>

<section class="other-brands"><p v-reveal class="section-label">Nos Autres Marques</p><div v-reveal.d1 class="ob-row"><NuxtLink to="/marques/niance" class="ob-link">NIANCE — Cosmétique Holistique</NuxtLink><NuxtLink to="/marques/joadams" class="ob-link">JO ADAMS — Parfumerie de Niche</NuxtLink></div></section>

<section class="cta-section"><p v-reveal class="section-label">Intéressé par TESLAMED ?</p><h2 v-reveal.d1 class="section-title cta-title-spaced">Demandez une <em>démonstration</em></h2><p v-reveal.d2 class="section-desc">Découvrez comment l'Ion Stream 680 Pro peut transformer votre offre de soins et fidéliser votre clientèle.</p><NuxtLink to="/contact" v-reveal.d3 class="btn-primary">Nous contacter</NuxtLink></section>
</template>

<style scoped>
/* Page-specific: hero watermark */
.page-hero::before { content: 'T'; position: absolute; top: 50%; right: 8%; transform: translateY(-50%); font-family: var(--serif); font-size: 300px; font-weight: 300; color: rgba(200,169,81,0.03); }

/* Page-specific: brand visual */
.brand-visual { aspect-ratio: 3/2; background: var(--black-card); border: 1px solid rgba(200,169,81,0.1); padding: 24px; }
.brand-visual img { width: 100%; height: 100%; object-fit: contain; }

/* Tech section */
.tech-section { padding: 140px 60px; background: var(--black-light); border-top: 1px solid rgba(200,169,81,0.06); }
.tech-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; max-width: 1400px; margin: 60px auto 0; }
.tech-card { padding: 48px 32px; background: var(--black-card); border: 1px solid rgba(200,169,81,0.08); border-left: 2px solid var(--gold); transition: all 0.4s; }
.tech-card:hover { background: rgba(200,169,81,0.02); border-color: rgba(200,169,81,0.2); border-left-color: var(--gold); }
.tech-letter { font-family: var(--serif); font-size: 42px; font-weight: 300; color: var(--gold); margin-bottom: 16px; }
.tech-name { font-size: 13px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 16px; }
.tech-desc { font-size: 14.5px; font-weight: 300; line-height: 1.8; color: var(--gray); }

/* Benefits */
.benefits { padding: 140px 60px; border-bottom: 1px solid rgba(200,169,81,0.06); }
.benefits-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; max-width: 1400px; margin: 60px auto 0; }
.benefits-col-title { font-size: 12px; letter-spacing: 3px; text-transform: uppercase; font-weight: 600; color: var(--gold); margin-bottom: 24px; }
.benefit-item { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 16px; font-size: 15.5px; font-weight: 300; color: var(--gray-light); line-height: 1.7; }
.benefit-item::before { content: ''; width: 4px; height: 4px; background: var(--gold); flex-shrink: 0; margin-top: 8px; }

/* Avant/Apres */
.ba-section { padding: 140px 60px; background: var(--black); }
.ba-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 1200px; margin: 60px auto 0; }
.ba-card { position: relative; overflow: hidden; border: 1px solid rgba(200,169,81,0.08); transition: all 0.5s cubic-bezier(0.23,1,0.32,1); }
.ba-card:hover { border-color: rgba(200,169,81,0.25); transform: translateY(-4px); box-shadow: 0 20px 60px rgba(0,0,0,0.4); }
.ba-card img { width: 100%; height: auto; display: block; }
.ba-label { position: absolute; bottom: 0; left: 0; right: 0; padding: 12px; background: linear-gradient(to top, rgba(10,10,15,0.9), transparent); display: flex; justify-content: center; gap: 24px; }
.ba-label span { font-size: 9px; letter-spacing: 3px; text-transform: uppercase; color: var(--gray-light); font-weight: 500; }
.ba-label span.gold { color: var(--gold); }

/* Use cases */
.use-cases { padding: 140px 60px; background: var(--black-light); border-top: 1px solid rgba(200,169,81,0.06); }
.uc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; max-width: 1400px; margin: 60px auto 0; }
.uc-card { padding: 48px; border: 1px solid rgba(200,169,81,0.08); transition: all 0.4s; }
.uc-card:hover { background: rgba(200,169,81,0.02); border-color: rgba(200,169,81,0.2); }
.uc-title { font-size: 14px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 16px; }
.uc-text { font-size: 15.5px; font-weight: 300; line-height: 1.8; color: var(--gray); }

@media (max-width: 1024px) {
  .tech-grid { grid-template-columns: 1fr; }
  .benefits-cols { grid-template-columns: 1fr; gap: 40px; }
  .ba-grid { grid-template-columns: 1fr 1fr; }
  .uc-grid { grid-template-columns: 1fr; }
  .tech-section, .benefits, .ba-section, .use-cases { padding: 80px 24px; }
}
@media (max-width: 768px) {
  .ba-grid { grid-template-columns: 1fr; }
}
</style>
