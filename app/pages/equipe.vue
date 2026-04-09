<script setup>
useSeoMeta({
  title: "L'Équipe — DISTRISKIN",
  ogTitle: "L'Équipe — DISTRISKIN",
  description: "Une équipe de commerciaux et de formateurs couvrant l'ensemble du territoire français, chacun apportant une expertise unique.",
  ogDescription: "Une équipe de commerciaux et de formateurs couvrant l'ensemble du territoire français, chacun apportant une expertise unique.",
  ogImage: '/images/logo-distriskin.jpeg',
})
</script>

<template>
<div class="page-hero"><div class="page-hero-content">
  <p class="section-label">L'Équipe</p>
  <h1 class="section-title hero-title-large">Des experts passionnés<br>à <em>votre service</em></h1>
  <p class="section-desc hero-desc">Une équipe de commerciaux et de formateurs couvrant l'ensemble du territoire français, chacun apportant une expertise unique.</p>
</div></div>

<!-- MAXENCE -->
<section class="featured">
  <div class="featured-grid">
    <div class="featured-photo" v-reveal data-initials="MD"><NuxtImg src="/images/maxence-deloison.jpg" alt="Maxence Deloison" loading="lazy" width="400" height="533" /></div>
<div>
      <p class="section-label" v-reveal>Fondateur</p>
      <div class="featured-name" v-reveal.d1>Maxence Deloison</div>
      <div class="featured-role" v-reveal.d1>Gérant & Fondateur</div>
      <div class="gold-line" v-reveal.d1></div>
      <p class="featured-bio" v-reveal.d2>Entrepreneur français spécialisé dans le développement de marques premium sur le marché du soin et du bien-être, il bénéficie de 10 années d'expérience au sein de la marque suisse Nescens, référence internationale en médecine anti-âge et longévité.</p>
      <p class="featured-bio" v-reveal.d2>Après avoir dirigé les départements logistique, marketing et administratif, il prend la direction commerciale internationale et contribue activement à l'expansion mondiale de la marque. Son parcours l'amène à collaborer avec des hôtels de prestige, spas de luxe et cliniques à travers l'Europe, les États-Unis, l'Asie et l'Afrique.</p>
      <p class="featured-bio highlight" v-reveal.d3>Sa vision : replacer les partenaires au cœur de la stratégie, avec des solutions sur mesure, performantes et adaptées aux réalités du terrain. Une approche exigeante, fondée sur l'expérience, la proximité et la création de valeur durable pour ses partenaires.</p>
    </div>
  </div>
</section>

<!-- NOELIA -->
<section class="featured featured-alt">
  <div class="featured-grid featured-grid-reversed">
    <div>
      <p class="section-label" v-reveal>Experte</p>
      <div class="featured-name" v-reveal.d1>Noelia Ségadé</div>
      <div class="featured-role" v-reveal.d1>Spa Mentor — Conceptrice d'expériences signatures</div>
      <div class="gold-line" v-reveal.d1></div>
      <p class="featured-bio" v-reveal.d2>Experte du spa de luxe, Noelia est spécialisée dans l'art de transformer une prestation en une expérience mémorable. Ambassadrice TESLAMED et NIANCE, elle conçoit également des protocoles signature alliant exigence technique, sensorialité et excellence du service.</p>
      <p class="featured-bio" v-reveal.d2>Forte de quarante années de pratique psychocorporelle en cabinet dont vingt comme spa thérapeute au sein des plus grands palaces parisiens, elle propose une approche globale où se joignent maîtrise du geste, présence, authenticité et sens du détail.</p>
      <p class="featured-bio" v-reveal.d3>Elle accompagne aussi les professionnels dans l'élévation de leurs standards et de leur expérience client.</p>
      <p class="featured-bio" v-reveal.d3>Aujourd'hui, elle propose du mentorat, des audits qualité et des évaluations mystère. Galicienne basée à Paris, elle intervient en France et à l'international.</p>
    </div>
    <div class="featured-photo" v-reveal data-initials="NS"><NuxtImg src="/images/noelia-segade.jpg" alt="Noelia Ségadé" loading="lazy" width="400" height="533" /></div>
  </div>
</section>

<!-- TEAM GRID -->
<section class="team-section">
  <div class="section-header">
    <p class="section-label" v-reveal>Notre Équipe Commerciale</p>
    <h2 class="section-title" v-reveal.d1>Le réseau <em>Distriskin</em></h2>
  </div>
  <div class="team-grid">
    <div class="tm-card" v-reveal>
      <div class="tm-initials">DD</div>
      <div class="tm-name">David Duchène</div>
      <div class="tm-role">Commercial & Formateur · Île-de-France</div>
      <p class="tm-desc">Esthéticien de formation, David possède une solide expérience dans le skincare haut de gamme et le retail de marques de luxe suisses. Expert en formation d'équipes, maîtrise du soin cabine et développement du sell-out en point de vente.</p>
    </div>
    <div class="tm-card" v-reveal.d1>
      <div class="tm-initials">FH</div>
      <div class="tm-name">Fabien Hoche</div>
      <div class="tm-role">Commercial · Île-de-France</div>
      <p class="tm-desc">Doté d'un réseau solide et d'une approche très qualitative centrée sur les clients, Fabien Hoche se consacre exclusivement au développement de la marque JO ADAMS. Ses valeurs d'exigence et de service sont en parfaite adéquation avec la philosophie de DistriSkin.</p>
    </div>
    <div class="tm-card" v-reveal.d2>
      <div class="tm-initials">LM</div>
      <div class="tm-name">Laurence Martinez</div>
      <div class="tm-role">Commercial · Quart Nord-Est</div>
      <p class="tm-desc">Ancienne gérante d'institut de beauté, Laurence connaît les besoins réels des professionnels du secteur de l'intérieur. Elle adapte les solutions avec l'exigence de quelqu'un qui a vécu le terrain.</p>
    </div>
    <div class="tm-card" v-reveal>
      <div class="tm-initials">CK</div>
      <div class="tm-name">Claire Kuezmerowiez</div>
      <div class="tm-role">Commercial · Quart Nord-Ouest</div>
      <p class="tm-desc">Forte de nombreuses années d'expérience, membre de SPA-A. Claire attache une importance capitale à la qualité de service et à une approche personnalisée. Reconnue et de conseil avisé.</p>
    </div>
    <div class="tm-card" v-reveal.d1>
      <div class="tm-initials">JS</div>
      <div class="tm-name">Jean Sorroche</div>
      <div class="tm-role">Commercial · Sud</div>
      <p class="tm-desc">30 ans de passion dans le monde de la parfumerie. Une connaissance terrain inépuisable acquise auprès des plus grandes marques, aujourd'hui au service du rayonnement de Distriskin dans le Sud.</p>
    </div>
    <div class="tm-card" v-reveal.d2>
      <div class="tm-initials">A</div>
      <div class="tm-name">Aurélie</div>
      <div class="tm-role">Commercial · Sud</div>
      <p class="tm-desc">Active sur le secteur depuis plusieurs années, Aurélie a su créer un portefeuille de marques attrayant pour ses partenaires auprès desquels elle est très appréciée. Un sens du relationnel précieux.</p>
    </div>
  </div>
</section>

<!-- COVERAGE -->
<section class="coverage">
  <div class="section-header">
    <p class="section-label" v-reveal>Couverture Nationale</p>
    <h2 class="section-title" v-reveal.d1>Un expert <em>près de chez vous</em></h2>
  </div>
  <div class="coverage-grid">
    <div class="cov-zone" v-reveal><div class="cov-name">Île-de-France</div><p class="cov-agents">David Duchène<br>Fabien Hoche</p></div>
    <div class="cov-zone" v-reveal.d1><div class="cov-name">Quart Nord-Est</div><p class="cov-agents">Laurence Martinez</p></div>
    <div class="cov-zone" v-reveal.d2><div class="cov-name">Quart Nord-Ouest</div><p class="cov-agents">Claire Kuezmerowiez</p></div>
    <div class="cov-zone" v-reveal.d3><div class="cov-name">Sud</div><p class="cov-agents">Jean Sorroche<br>Aurélie</p></div>
  </div>
</section>

<section class="cta-section">
  <p class="section-label" v-reveal>Rejoignez-nous</p>
  <h2 class="section-title cta-title-spaced" v-reveal.d1>Envie de <em>travailler ensemble</em> ?</h2>
  <p class="section-desc" v-reveal.d2>Que vous soyez un professionnel du soin ou un commercial souhaitant rejoindre le réseau, contactez-nous.</p>
  <NuxtLink to="/contact" class="btn-primary" v-reveal.d3>Nous contacter</NuxtLink>
</section>
</template>

<style scoped>
.page-hero { min-height: 55vh; padding: 160px 60px 80px; background: radial-gradient(ellipse 80% 60% at 50% 40%, rgba(200,169,81,0.04) 0%, transparent 70%), var(--black); display: flex; align-items: flex-end; position: relative; overflow: hidden; }
.page-hero::before { content: ''; position: absolute; top: -40%; right: -15%; width: 60vw; height: 60vw; border-radius: 50%; border: 1px solid rgba(200,169,81,0.05); }
.page-hero-content { max-width: 1400px; width: 100%; margin: 0 auto; position: relative; z-index: 2; }
.hero-title-large { font-size: clamp(36px, 6vw, 64px); }
.hero-desc { color: var(--gray); margin-top: 24px; }
.cta-title-spaced { margin-bottom: 24px; }

.featured { padding: 140px 60px; }
.featured-alt { background: var(--black-light); border-top: 1px solid rgba(200,169,81,0.06); border-bottom: 1px solid rgba(200,169,81,0.06); }
.featured-grid { display: grid; grid-template-columns: 0.8fr 1fr; gap: 80px; max-width: 1400px; margin: 0 auto; align-items: center; }
.featured-grid-reversed { grid-template-columns: 1fr 0.8fr; }
.featured-photo img { width: 100%; height: 100%; object-fit: cover; object-position: center top; }
.featured-photo {
  aspect-ratio: 3/4; background: radial-gradient(circle at 30% 40%, rgba(200,169,81,0.08) 0%, transparent 60%), var(--black-card);
  border: 1px solid rgba(200,169,81,0.1); position: relative; overflow: hidden;
}
.featured-photo::after { content: attr(data-initials); position: absolute; bottom: 24px; right: 24px; font-family: var(--serif); font-size: 64px; font-weight: 300; color: rgba(200,169,81,0.12); }
.featured-name { font-family: var(--serif); font-size: 42px; font-weight: 300; margin-bottom: 8px; }
.featured-role { font-size: 10px; letter-spacing: 4px; text-transform: uppercase; color: var(--gold); margin-bottom: 32px; font-weight: 600; }
.featured-bio { font-size: 16.5px; font-weight: 300; line-height: 1.9; color: var(--gray-light); margin-bottom: 16px; }
.featured-bio.highlight { color: var(--white); font-weight: 400; font-style: italic; }

.team-section { padding: 140px 60px; background: var(--black-light); border-top: 1px solid rgba(200,169,81,0.06); }
.team-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; max-width: 1400px; margin: 60px auto 0; }
.tm-card { padding: 48px 32px; background: var(--black-card); border: 1px solid rgba(200,169,81,0.08); transition: all 0.5s cubic-bezier(0.23,1,0.32,1); }
.tm-card:hover { transform: translateY(-4px); border-color: rgba(200,169,81,0.2); box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
.tm-initials { width: 56px; height: 56px; background: rgba(200,169,81,0.08); border: 1px solid rgba(200,169,81,0.2); display: flex; align-items: center; justify-content: center; font-family: var(--serif); font-size: 18px; font-weight: 300; color: var(--gold); margin-bottom: 24px; }
.tm-name { font-family: var(--serif); font-size: 22px; font-weight: 400; margin-bottom: 4px; }
.tm-role { font-size: 9px; letter-spacing: 3px; text-transform: uppercase; color: var(--gold); margin-bottom: 16px; font-weight: 600; }
.tm-desc { font-size: 14.5px; font-weight: 300; line-height: 1.8; color: var(--gray); }

.coverage { padding: 140px 60px; border-top: 1px solid rgba(200,169,81,0.06); }
.coverage-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; max-width: 1400px; margin: 60px auto 0; }
.cov-zone { padding: 48px 32px; border: 1px solid rgba(200,169,81,0.08); text-align: center; transition: all 0.4s; }
.cov-zone:hover { background: rgba(200,169,81,0.02); border-color: rgba(200,169,81,0.2); }
.cov-name { font-size: 12px; letter-spacing: 3px; text-transform: uppercase; font-weight: 600; margin-bottom: 12px; }
.cov-agents { font-size: 14px; font-weight: 300; color: var(--gray); line-height: 1.7; }

@media (max-width: 1024px) {
  .featured-grid { grid-template-columns: 1fr; gap: 48px; }
  .team-grid { grid-template-columns: 1fr 1fr; }
  .coverage-grid { grid-template-columns: 1fr 1fr; }
  .featured, .team-section, .coverage { padding: 80px 24px; }
  .page-hero { padding: 120px 24px 48px; }
}
@media (max-width: 768px) {
  .team-grid { grid-template-columns: 1fr; }
  .coverage-grid { grid-template-columns: 1fr; }
  .page-hero { min-height: 40vh; }
}
</style>
