<script setup>
useSeoMeta({
  title: 'JO ADAMS — Extraits de parfums de niche | DISTRISKIN',
  ogTitle: 'JO ADAMS — Extraits de parfums de niche | DISTRISKIN',
  description: 'Découvrez JO ADAMS, extraits de parfums de niche distribués par Distriskin. Parfumerie haut de gamme pour points de vente premium.',
  ogDescription: 'Découvrez JO ADAMS, extraits de parfums de niche distribués par Distriskin. Parfumerie haut de gamme pour points de vente premium.',
})
</script>

<template>
<div class="page-hero"><div class="page-hero-content">
  <p class="section-label">Héritage Égyptien · Exigence Allemande</p>
  <h1 class="section-title" style="font-size:clamp(36px,6vw,64px);">JO ADAMS<br><em>Bien plus qu'un parfum : une signature</em></h1>
  <p class="section-desc" style="color:var(--gray); margin-top:24px;">Une parfumerie de caractère, dédiée à celles et ceux qui recherchent l'exclusivité. Extraits de parfums d'exception, concentrations rares de 30 à 40% d'essences.</p>
</div></div>

<section class="brand-intro"><div class="brand-intro-grid">
  <div>
    <p v-reveal class="section-label">La Maison</p>
    <h2 v-reveal.d1 class="section-title">L'art de créer<br>des <em>expériences</em></h2>
    <div v-reveal.d1 class="gold-line"></div>
    <p v-reveal.d2 class="section-desc">Chez JO ADAMS, chaque fragrance est pensée comme une œuvre d'art sensorielle, un dialogue subtil entre émotion, mémoire et élégance intemporelle.</p>
    <p v-reveal.d2 class="section-desc" style="margin-top:16px;">L'âme de la maison puise ses racines dans l'histoire de son créateur, Mahmoud Khairy, nez et fils de cultivateurs de jasmin en Égypte. De cet héritage est née une vision singulière : marier la richesse olfactive orientale à l'élégance et à la précision européennes.</p>
    <p v-reveal.d3 class="section-desc" style="margin-top:16px;">Les parfums sont élaborés en Allemagne selon un savoir-faire artisanal d'exception, à partir d'ingrédients soigneusement sélectionnés en Égypte et dans les plus belles régions du monde.</p>
  </div>
  <div v-reveal.d2 class="brand-visual"><NuxtImg src="/images/joadams-hero.png" alt="JO ADAMS" loading="lazy" /></div>
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

<section class="cta-section"><p v-reveal class="section-label">Intéressé par JO ADAMS ?</p><h2 v-reveal.d1 class="section-title" style="margin-bottom:24px;">Proposez l'<em>exception olfactive</em></h2><p v-reveal.d2 class="section-desc">Contactez-nous pour découvrir la collection et les conditions de partenariat.</p><NuxtLink to="/contact" v-reveal.d3 class="btn-primary">Nous contacter</NuxtLink></section>
</template>

<style scoped>
.page-hero { min-height: 65vh; padding: 160px 60px 80px; background: radial-gradient(ellipse 60% 60% at 70% 30%, rgba(200,169,81,0.05) 0%, transparent 70%), var(--black); display: flex; align-items: flex-end; position: relative; overflow: hidden; }
.page-hero::before { content: 'JA'; position: absolute; top: 50%; right: 8%; transform: translateY(-50%); font-family: var(--serif); font-size: 300px; font-weight: 300; color: rgba(200,169,81,0.03); }
.page-hero-content { max-width: 1400px; width: 100%; margin: 0 auto; position: relative; z-index: 2; }
.brand-intro { padding: 140px 60px; }
.brand-intro-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; max-width: 1400px; margin: 0 auto; align-items: center; }
.brand-visual img { width: 50%; max-width: 220px; height: auto; filter: drop-shadow(0 0 40px rgba(200,169,81,0.15)); }
.brand-visual { aspect-ratio: 4/5; background: none; border: none; display: flex; align-items: center; justify-content: center; }
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
