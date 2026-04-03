<template>
  <div class="niance-page">
    <div class="brand-hero">
      <div class="brand-hero-content">
        <div class="brand-cat">Suisse · Holistique · Haut de Gamme</div>
        <h1>NIANCE<br><em>La beauté par la science suisse</em></h1>
        <p class="section-desc" style="color:rgba(255,255,255,0.5);">Cosmétiques très haut de gamme et compléments alimentaires novateurs. Une approche holistique qui allie la rigueur scientifique suisse et le respect de la nature.</p>
      </div>
    </div>

    <section class="brand-intro">
      <div class="brand-intro-grid">
        <div>
          <span class="section-label reveal">À propos</span>
          <h2 class="section-title reveal reveal-d1">L'approche holistique<br>du <em>bien-être</em></h2>
          <div class="gold-line reveal reveal-d1"></div>
          <p class="section-desc reveal reveal-d2">NIANCE incarne une vision globale de la beauté et du bien-être. Née en Suisse, la marque propose une gamme complète de cosmétiques haute performance et de compléments alimentaires novateurs, conçus pour agir en synergie.</p>
          <p class="section-desc reveal reveal-d2" style="margin-top:1rem;">Chaque formulation bénéficie d'ingrédients d'exception, sélectionnés pour leur efficacité prouvée et leur pureté. L'approche holistique de NIANCE en fait une marque unique sur le marché du luxe.</p>
        </div>
        <div class="brand-visual reveal reveal-d2"></div>
      </div>
    </section>

    <section class="pillars-section">
      <div class="text-center">
        <span class="section-label reveal">L'Univers NIANCE</span>
        <h2 class="section-title reveal reveal-d1">Deux piliers, <em>une vision</em></h2>
        <div class="gold-line gold-line-center reveal reveal-d1"></div>
      </div>
      <div class="niance-pillars">
        <div class="np-card reveal"><div class="np-icon">✦</div><div class="np-title">Cosmétiques Premium</div><p class="np-text">Des soins visage et corps formulés avec les ingrédients les plus nobles et les actifs les plus performants. Chaque produit est le fruit d'une recherche rigoureuse et d'un savoir-faire suisse inégalé. Textures luxueuses, résultats prouvés, expérience sensorielle unique.</p></div>
        <div class="np-card reveal reveal-d1"><div class="np-icon">◆</div><div class="np-title">Compléments Alimentaires</div><p class="np-text">La beauté commence de l'intérieur. Les compléments NIANCE complètent l'action des cosmétiques pour une approche véritablement holistique. Formulés en Suisse avec des ingrédients de qualité pharmaceutique, ils répondent aux attentes d'une clientèle exigeante et informée.</p></div>
        <div class="np-card reveal"><div class="np-icon">◇</div><div class="np-title">Protocoles de Soins</div><p class="np-text">Des protocoles de soins exclusifs conçus par notre experte Noélia Ségadé, qui transforment chaque prestation en un moment d'exception. Ces protocoles sont votre meilleur atout pour fidéliser votre clientèle et maximiser la vente des produits.</p></div>
        <div class="np-card reveal reveal-d1"><div class="np-icon">○</div><div class="np-title">Synergie TESLAMED</div><p class="np-text">La combinaison des cosmétiques NIANCE avec les technologies TESLAMED offre des protocoles de soins d'une efficacité redoublée. Cette synergie unique est un argument de vente puissant pour vous différencier sur votre marché.</p></div>
      </div>
    </section>

    <section class="protocols">
      <div class="text-center">
        <span class="section-label reveal" style="color:var(--gold);">Pour les professionnels</span>
        <h2 class="section-title reveal reveal-d1">Ce que NIANCE apporte<br>à <em>votre établissement</em></h2>
        <div class="gold-line gold-line-center reveal reveal-d1"></div>
      </div>
      <div class="proto-grid">
        <div class="proto-card reveal"><div class="proto-num">01</div><div class="proto-title">Image Premium</div><p class="proto-text">Un positionnement Swiss Made haut de gamme qui renforce l'image de votre établissement auprès d'une clientèle exigeante.</p></div>
        <div class="proto-card reveal reveal-d1"><div class="proto-num">02</div><div class="proto-title">Double Revenue</div><p class="proto-text">Cosmétiques en cabine + vente retail + compléments alimentaires : trois sources de revenus complémentaires.</p></div>
        <div class="proto-card reveal reveal-d2"><div class="proto-num">03</div><div class="proto-title">Formation Experte</div><p class="proto-text">Protocoles sur mesure et formations dispensées par nos experts, incluant la maîtrise du soin cabine et du conseil client.</p></div>
      </div>
    </section>

    <section class="other-brands">
      <span class="section-label reveal">Nos Autres Marques</span>
      <div class="ob-row reveal reveal-d1">
        <NuxtLink to="/marques/teslamed" class="ob-link">TESLAMED — Technologie Esthétique</NuxtLink>
        <NuxtLink to="/marques/joadams" class="ob-link">JO ADAMS — Parfumerie de Niche</NuxtLink>
      </div>
    </section>

    <section class="cta-banner">
      <span class="section-label reveal" style="color:var(--gold);">Intéressé par NIANCE ?</span>
      <h2 class="section-title reveal reveal-d1">Découvrez l'univers <em>NIANCE</em></h2>
      <p class="section-desc reveal reveal-d2">Échangeons sur la manière dont NIANCE peut enrichir votre offre et fidéliser votre clientèle.</p>
      <NuxtLink to="/contact" class="btn-primary reveal reveal-d3">Nous contacter</NuxtLink>
    </section>
  </div>
</template>

<script setup lang="ts">
useScrollReveal()
useSeoMeta({
  title: 'NIANCE — DISTRISKIN',
  description: 'Découvrez NIANCE, cosmétique suisse holistique distribuée par Distriskin pour les professionnels du soin.',
})
</script>
