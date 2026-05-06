<script setup>
useSeoMeta({
  title: 'TESLAMED — Technologie esthétique avancée | DISTRISKIN',
  ogTitle: 'TESLAMED — Technologie esthétique avancée | DISTRISKIN',
  description: 'Découvrez TESLAMED, technologie esthétique avancée distribuée par Distriskin. Microcourants, canon à ions et soins innovants pour spas, instituts et centres de médecine préventive.',
  ogDescription: 'Découvrez TESLAMED, technologie esthétique avancée distribuée par Distriskin. Microcourants, canon à ions et soins innovants pour spas, instituts et centres de médecine préventive.',
  ogImage: '/images/logo-distriskin.jpeg',
})

const maintenanceStandard = '1 soin/mois pendant 6 mois, puis 1 soin tous les 2 mois pour prolonger durablement les résultats'
const maintenanceNone = 'non requis (résultat permanent)'

const baItems = [
  { letter: 'A', ext: 'png', zone: 'Contour des yeux', result: '3 soins de 30 minutes', next: '1 soin à J+7', maintenance: maintenanceStandard },
  { letter: 'B', ext: 'png', zone: 'Lèvres et contour', result: '1 soin de 20 minutes', next: '4 soins espacés de 7 à 10 jours', maintenance: maintenanceStandard },
  { letter: 'C', ext: 'jpg', zone: 'Contour des yeux', result: '3 soins de 30 minutes', maintenance: maintenanceStandard },
  { letter: 'D', ext: 'jpg', zone: 'Contour des yeux', result: '1 soin de 30 minutes', maintenance: maintenanceStandard },
  { letter: 'E', ext: 'jpg', zone: 'Scalp (cuir chevelu)', result: '5 soins de 20 minutes', next: 'cure de 10 soins espacés de 10 jours', maintenance: '1 soin tous les 2 mois pour prolonger durablement les résultats' },
  { letter: 'F', ext: 'jpg', zone: 'Resurfaçage visage', result: '3 soins de 1 heure', maintenance: maintenanceNone },
  { letter: 'G', ext: 'jpg', zone: 'Soin visage', result: '6 soins de 1 heure', rhythm: 'espacés de 7 à 10 jours', maintenance: maintenanceStandard },
  { letter: 'H', ext: 'jpg', zone: 'Élasticité bras', result: '3 soins de 30 minutes', rhythm: 'espacés de 7 à 10 jours', maintenance: maintenanceStandard },
  { letter: 'I', ext: 'png', zone: 'Élasticité bras', result: '3 soins de 30 minutes', rhythm: 'espacés de 7 à 10 jours', maintenance: maintenanceStandard },
  { letter: 'J', ext: 'png', zone: 'Vergetures', result: '7 soins de 30 minutes', rhythm: 'espacés de 7 à 10 jours', maintenance: maintenanceNone },
  { letter: 'K', ext: 'jpg', zone: 'Tonicité ventre', result: '1 soin de 30 minutes', next: 'cure de 4 soins espacés de 7 à 10 jours', maintenance: maintenanceStandard },
  { letter: 'L', ext: 'jpg', zone: 'Soin visage', result: '3 soins de 1 heure', next: 'cure de 4 soins espacés de 7 à 10 jours', maintenance: maintenanceStandard },
  { letter: 'M', ext: 'jpg', zone: 'Acné inflammatoire', result: '8 soins de 1 heure', rhythm: '1 soin tous les 10 jours', maintenance: maintenanceNone },
  { letter: 'N', ext: 'jpg', zone: 'Soin visage', result: '8 soins de 1 heure', rhythm: 'espacés de 7 à 10 jours', maintenance: maintenanceStandard },
  { letter: 'O', ext: 'jpg', zone: 'Soin visage', result: '8 soins de 1 heure', rhythm: 'espacés de 7 à 10 jours', maintenance: maintenanceStandard },
  { letter: 'P', ext: 'jpg', zone: 'Soin visage', result: '8 soins de 1 heure', rhythm: 'espacés de 7 à 10 jours', maintenance: maintenanceStandard },
]
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
  <div v-reveal.d2 class="ba-pledge">
    <p class="ba-pledge-title">Distriskin s'engage :</p>
    <ul class="ba-pledge-list">
      <li>Aucune des photos avant/après n'est retouchée</li>
      <li>Les résultats sont obtenus exclusivement grâce à des soins réalisés avec la technologie TeslaMed</li>
    </ul>
  </div>
  <div class="ba-grid">
    <div v-for="item in baItems" :key="item.letter" v-reveal class="ba-card">
      <NuxtImg :src="`/images/teslamed-ba/${item.letter}.${item.ext}`" :alt="`Avant/Après TeslaMed ${item.letter} — ${item.zone}`" loading="lazy" width="600" height="600" />
      <div class="ba-label"><span>Avant</span><span class="gold">→</span><span>Après</span><span class="ba-letter">{{ item.letter }}</span></div>
      <div class="ba-info">
        <div class="ba-zone">{{ item.zone }}</div>
        <div class="ba-meta"><span class="ba-meta-label">Résultat obtenu</span><span class="ba-meta-value">{{ item.result }}</span></div>
        <div v-if="item.next" class="ba-meta"><span class="ba-meta-label">Suite recommandée</span><span class="ba-meta-value">{{ item.next }}</span></div>
        <div v-if="item.rhythm" class="ba-meta"><span class="ba-meta-label">Rythme</span><span class="ba-meta-value">{{ item.rhythm }}</span></div>
        <div class="ba-meta"><span class="ba-meta-label">Entretien</span><span class="ba-meta-value">{{ item.maintenance }}</span></div>
      </div>
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

<section class="shop-strip" v-reveal>
  <div class="shop-strip-inner">
    <div class="shop-strip-text">
      <p class="shop-strip-label">Boutique en ligne</p>
      <h3 class="shop-strip-title">Retrouvez TESLAMED et nos <em>autres marques</em> sur la boutique</h3>
    </div>
    <a href="https://www.distriskin-shop.com" target="_blank" rel="noopener" class="btn-primary">Accéder à la boutique ↗</a>
  </div>
</section>

<section class="other-brands"><p v-reveal class="section-label">Nos Autres Marques</p><div v-reveal.d1 class="ob-row"><NuxtLink to="/marques/niance" class="ob-link">NIANCE — Cosmétique Holistique</NuxtLink><NuxtLink to="/marques/joadams" class="ob-link">JO ADAMS — Parfumerie de Niche</NuxtLink></div></section>

<section class="cta-section">
  <p v-reveal class="section-label">Intéressé par TESLAMED ?</p>
  <h2 v-reveal.d1 class="section-title cta-title-spaced">Demandez une <em>démonstration</em></h2>
  <p v-reveal.d2 class="section-desc">Découvrez comment l'Ion Stream 680 Pro peut transformer votre offre de soins et fidéliser votre clientèle.</p>
  <div v-reveal.d3 class="cta-buttons">
    <NuxtLink to="/contact" class="btn-primary">Nous contacter</NuxtLink>
    <a href="https://www.distriskin-shop.com" target="_blank" rel="noopener" class="btn-secondary">Accéder à la boutique en ligne ↗</a>
  </div>
  <div v-reveal.d3 class="ig-wrap">
    <a href="https://www.instagram.com/teslamed_france/" target="_blank" rel="noopener" class="ig-link">Suivez-nous sur Instagram&nbsp;: @teslamed_france ↗</a>
  </div>
</section>
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
.ba-pledge { max-width: 760px; margin: 32px auto 0; padding: 24px 32px; border: 1px solid rgba(200,169,81,0.18); border-left: 2px solid var(--gold); background: rgba(200,169,81,0.03); }
.ba-pledge-title { font-size: 12px; letter-spacing: 3px; text-transform: uppercase; font-weight: 600; color: var(--gold); margin-bottom: 12px; }
.ba-pledge-list { list-style: none; padding: 0; margin: 0; }
.ba-pledge-list li { position: relative; padding-left: 18px; margin-bottom: 8px; font-size: 14.5px; font-weight: 300; line-height: 1.7; color: var(--gray-light); }
.ba-pledge-list li::before { content: ''; position: absolute; left: 0; top: 11px; width: 4px; height: 4px; background: var(--gold); }
.ba-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 1280px; margin: 60px auto 0; }
.ba-card { position: relative; overflow: hidden; border: 1px solid rgba(200,169,81,0.08); transition: all 0.5s cubic-bezier(0.23,1,0.32,1); display: flex; flex-direction: column; }
.ba-card:hover { border-color: rgba(200,169,81,0.25); transform: translateY(-4px); box-shadow: 0 20px 60px rgba(0,0,0,0.4); }
.ba-card img { width: 100%; height: auto; display: block; }
.ba-label { position: relative; padding: 10px 12px; background: rgba(10,10,15,0.7); display: flex; align-items: center; justify-content: center; gap: 18px; border-top: 1px solid rgba(200,169,81,0.08); }
.ba-label span { font-size: 9px; letter-spacing: 3px; text-transform: uppercase; color: var(--gray-light); font-weight: 500; }
.ba-label span.gold { color: var(--gold); }
.ba-letter { margin-left: auto; font-family: var(--serif) !important; font-size: 16px !important; letter-spacing: 0 !important; color: var(--gold) !important; font-weight: 400 !important; text-transform: none !important; }
.ba-info { padding: 20px 22px 24px; background: var(--black-card); border-top: 1px solid rgba(200,169,81,0.08); flex: 1; }
.ba-zone { font-size: 13px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: var(--gold); margin-bottom: 14px; }
.ba-meta { display: flex; flex-direction: column; gap: 2px; margin-bottom: 10px; font-size: 13px; line-height: 1.6; }
.ba-meta-label { font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: var(--gray); font-weight: 500; }
.ba-meta-value { color: var(--gray-light); font-weight: 300; }

/* CTA section additions */
.cta-buttons { display: inline-flex; gap: 16px; flex-wrap: wrap; justify-content: center; margin-top: 8px; }
.ig-wrap { margin-top: 32px; text-align: center; }
.ig-link { display: inline-block; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; color: var(--gold); text-decoration: none; border-bottom: 1px solid rgba(200,169,81,0.3); padding-bottom: 4px; transition: all 0.3s; }
.ig-link:hover { border-bottom-color: var(--gold); color: var(--gold-light); }

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
