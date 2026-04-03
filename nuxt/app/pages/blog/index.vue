<template>
  <div>
    <PageHero
      label="Journal"
      title="Tendances, expertise<br>et <em>actualités</em>"
      description="Décryptages du marché, nouveautés produits, retours d'expérience et conseils pour les professionnels du soin premium."
    />

    <section class="blog-content">
      <div class="blog-inner">
        <div class="blog-filters">
          <button
            v-for="filter in filters"
            :key="filter"
            class="blog-filter"
            :class="{ active: activeFilter === filter }"
            @click="activeFilter = filter"
          >{{ filter }}</button>
        </div>

        <!-- Featured -->
        <a href="#" class="blog-featured reveal">
          <div class="bf-image">
            <span class="bf-badge">À la une</span>
          </div>
          <div class="bf-content">
            <div class="bf-cat">Tendances</div>
            <h2 class="bf-title">Comment les spas d'hôtels de luxe réinventent l'expérience client en 2025</h2>
            <p class="bf-excerpt">Le marché du spa hôtelier évolue rapidement. Entre personnalisation poussée, technologies innovantes et approche holistique, les établissements premium redéfinissent les standards de l'excellence. Décryptage des tendances qui façonnent le secteur.</p>
            <span class="bf-meta">12 min de lecture · Juin 2025</span>
            <span class="bf-link" style="margin-top:1.5rem;">Lire l'article <span class="arrow"></span></span>
          </div>
        </a>

        <!-- Grid -->
        <div class="blog-grid">
          <a href="#" class="blog-card reveal">
            <div class="bc-image cat-marques"></div>
            <div class="bc-content">
              <div class="bc-cat">Nos Marques</div>
              <h3 class="bc-title">NIANCE × TESLAMED : la synergie qui transforme le soin en institut</h3>
              <p class="bc-excerpt">Découvrez comment combiner cosmétiques suisses et technologie esthétique pour des protocoles d'une efficacité redoublée.</p>
              <span class="bc-meta">8 min · Mai 2025</span>
            </div>
          </a>
          <a href="#" class="blog-card reveal reveal-d1">
            <div class="bc-image cat-expertise"></div>
            <div class="bc-content">
              <div class="bc-cat">Expertise</div>
              <h3 class="bc-title">5 clés pour maximiser le sell-out en institut de beauté premium</h3>
              <p class="bc-excerpt">Nos conseils terrain pour transformer chaque produit en succès commercial auprès de votre clientèle.</p>
              <span class="bc-meta">6 min · Avril 2025</span>
            </div>
          </a>
          <a href="#" class="blog-card reveal reveal-d2">
            <div class="bc-image cat-tendances"></div>
            <div class="bc-content">
              <div class="bc-cat">Tendances</div>
              <h3 class="bc-title">La parfumerie de niche : un marché en pleine expansion</h3>
              <p class="bc-excerpt">Pourquoi les extraits de parfums d'exception séduisent de plus en plus les points de vente premium.</p>
              <span class="bc-meta">7 min · Mars 2025</span>
            </div>
          </a>
          <a href="#" class="blog-card reveal">
            <div class="bc-image cat-partenaires"></div>
            <div class="bc-content">
              <div class="bc-cat">Partenaires</div>
              <h3 class="bc-title">David Duchène rejoint le réseau Distriskin en Île-de-France</h3>
              <p class="bc-excerpt">Esthéticien de formation et expert du retail de luxe suisse, David renforce notre présence sur un marché stratégique.</p>
              <span class="bc-meta">3 min · Février 2025</span>
            </div>
          </a>
          <a href="#" class="blog-card reveal reveal-d1">
            <div class="bc-image cat-expertise"></div>
            <div class="bc-content">
              <div class="bc-cat">Expertise</div>
              <h3 class="bc-title">L'approche holistique : quand la beauté commence de l'intérieur</h3>
              <p class="bc-excerpt">Compléments alimentaires et cosmétiques, une combinaison gagnante pour les établissements qui veulent se différencier.</p>
              <span class="bc-meta">9 min · Janvier 2025</span>
            </div>
          </a>
          <a href="#" class="blog-card reveal reveal-d2">
            <div class="bc-image cat-marques"></div>
            <div class="bc-content">
              <div class="bc-cat">Nos Marques</div>
              <h3 class="bc-title">TESLAMED : la technologie au service du soin professionnel</h3>
              <p class="bc-excerpt">Tout ce que vous devez savoir sur les dispositifs de technologie esthétique avancée et leur intégration en spa.</p>
              <span class="bc-meta">10 min · Décembre 2024</span>
            </div>
          </a>
        </div>

        <div class="blog-more reveal">
          <a class="btn-outline-dark">Voir plus d'articles</a>
        </div>
      </div>
    </section>

    <section class="cta-banner">
      <span class="section-label reveal" style="color:var(--gold);">Restez informé</span>
      <h2 class="section-title reveal reveal-d1">Recevez nos <em>dernières actualités</em></h2>
      <p class="section-desc reveal reveal-d2">Inscrivez-vous à notre newsletter pour recevoir les tendances du secteur et les nouveautés Distriskin.</p>
      <NuxtLink to="/contact" class="btn-primary reveal reveal-d3">S'inscrire</NuxtLink>
    </section>
  </div>
</template>

<script setup lang="ts">
useScrollReveal()

const filters = ['Tous', 'Tendances', 'Nos Marques', 'Expertise', 'Partenaires']
const activeFilter = ref('Tous')

useSeoMeta({
  title: 'Journal — DISTRISKIN',
  description: 'Actualités, tendances et expertise du marché premium du soin et du bien-être par Distriskin.',
})
</script>
