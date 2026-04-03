<template>
  <div class="teslamed-page">
    <div class="brand-hero">
      <div class="brand-hero-content">
        <div class="brand-cat">Technologie Esthétique Avancée</div>
        <h1>TESLAMED<br><em>L'innovation au service du soin</em></h1>
        <p class="section-desc" style="color:rgba(255,255,255,0.5);">Des dispositifs de pointe pour des soins du visage et du corps innovants, offrant à vos clients des résultats visibles et mesurables dès la première séance.</p>
      </div>
    </div>

    <section class="brand-intro">
      <div class="brand-intro-grid">
        <div>
          <span class="section-label reveal">À propos</span>
          <h2 class="section-title reveal reveal-d1">La technologie<br>au service de <em>l'excellence</em></h2>
          <div class="gold-line reveal reveal-d1"></div>
          <p class="section-desc reveal reveal-d2">TESLAMED développe des technologies esthétiques de dernière génération destinées aux professionnels du soin. Chaque dispositif est conçu pour offrir des performances supérieures tout en garantissant une expérience client exceptionnelle.</p>
          <p class="section-desc reveal reveal-d2" style="margin-top:1rem;">Les appareils TESLAMED vous permettent de proposer des soins innovants qui se démarquent de l'offre traditionnelle et répondent à la demande croissante de traitements à résultats visibles.</p>
        </div>
        <div class="brand-visual reveal reveal-d2"></div>
      </div>
    </section>

    <section class="benefits">
      <div class="text-center">
        <span class="section-label reveal">Avantages</span>
        <h2 class="section-title reveal reveal-d1">Pourquoi choisir <em>TESLAMED</em></h2>
        <div class="gold-line gold-line-center reveal reveal-d1"></div>
      </div>
      <div class="benefits-grid">
        <div class="benefit reveal"><div class="benefit-num">01</div><div class="benefit-title">Résultats immédiats</div><p class="benefit-text">Des résultats visibles et mesurables dès la première séance, renforçant la satisfaction et la fidélisation de vos clients.</p></div>
        <div class="benefit reveal reveal-d1"><div class="benefit-num">02</div><div class="benefit-title">Innovation continue</div><p class="benefit-text">Des technologies régulièrement mises à jour pour rester à la pointe de l'esthétique avancée et vous positionner comme précurseur.</p></div>
        <div class="benefit reveal reveal-d2"><div class="benefit-num">03</div><div class="benefit-title">Formation complète</div><p class="benefit-text">Un accompagnement technique et commercial pour que vos équipes maîtrisent chaque protocole et maximisent le retour sur investissement.</p></div>
        <div class="benefit reveal"><div class="benefit-num">04</div><div class="benefit-title">Polyvalence</div><p class="benefit-text">Des soins visage et corps complets qui vous permettent d'élargir votre carte de prestations et de toucher de nouvelles clientèles.</p></div>
        <div class="benefit reveal reveal-d1"><div class="benefit-num">05</div><div class="benefit-title">Rentabilité</div><p class="benefit-text">Un investissement rapidement amorti grâce à des soins à forte valeur ajoutée que vos clients sont prêts à renouveler.</p></div>
        <div class="benefit reveal reveal-d2"><div class="benefit-num">06</div><div class="benefit-title">Synergie</div><p class="benefit-text">Une complémentarité parfaite avec les cosmétiques NIANCE pour des protocoles de soins holistiques ultra-performants.</p></div>
      </div>
    </section>

    <section class="use-cases">
      <div class="text-center">
        <span class="section-label reveal" style="color:var(--gold);">Applications</span>
        <h2 class="section-title reveal reveal-d1">Pour quels <em>établissements</em></h2>
        <div class="gold-line gold-line-center reveal reveal-d1"></div>
      </div>
      <div class="uc-grid">
        <div class="uc-card reveal"><div class="uc-card-title">Spas d'Hôtels &amp; Palaces</div><p class="uc-card-text">Proposez à votre clientèle internationale des soins technologiques exclusifs qui complètent votre carte et positionnent votre spa comme un lieu d'innovation.</p></div>
        <div class="uc-card reveal reveal-d1"><div class="uc-card-title">Instituts de Beauté Premium</div><p class="uc-card-text">Démarquez-vous de la concurrence avec des traitements à résultats visibles qui fidélisent vos clientes et augmentent le panier moyen de vos prestations.</p></div>
        <div class="uc-card reveal"><div class="uc-card-title">Centres de Médecine Esthétique</div><p class="uc-card-text">Complétez votre offre avec des technologies non invasives qui répondent à la demande croissante de traitements esthétiques doux et efficaces.</p></div>
        <div class="uc-card reveal reveal-d1"><div class="uc-card-title">Concept Spas &amp; Wellness</div><p class="uc-card-text">Intégrez l'innovation technologique dans votre concept pour offrir une expérience différenciante et attirer une clientèle en quête de nouveauté.</p></div>
      </div>
    </section>

    <section class="other-brands">
      <span class="section-label reveal">Nos Autres Marques</span>
      <div class="ob-row reveal reveal-d1">
        <NuxtLink to="/marques/niance" class="ob-link">NIANCE — Cosmétique Holistique</NuxtLink>
        <NuxtLink to="/marques/joadams" class="ob-link">JO ADAMS — Parfumerie de Niche</NuxtLink>
      </div>
    </section>

    <section class="cta-banner">
      <span class="section-label reveal" style="color:var(--gold);">Intéressé par TESLAMED ?</span>
      <h2 class="section-title reveal reveal-d1">Demandez une <em>démonstration</em></h2>
      <p class="section-desc reveal reveal-d2">Découvrez comment TESLAMED peut transformer votre offre de soins et booster votre chiffre d'affaires.</p>
      <NuxtLink to="/contact" class="btn-primary reveal reveal-d3">Nous contacter</NuxtLink>
    </section>
  </div>
</template>

<script setup lang="ts">
useScrollReveal()
useSeoMeta({
  title: 'TESLAMED — DISTRISKIN',
  description: 'Découvrez TESLAMED, technologie esthétique avancée distribuée par Distriskin pour les professionnels du soin.',
})
</script>
