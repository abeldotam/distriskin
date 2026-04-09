<script setup>
useSeoMeta({
  title: 'Journal — DISTRISKIN',
  ogTitle: 'Journal — DISTRISKIN',
  description: 'Actualités, tendances et expertise du marché premium du soin et du bien-être par Distriskin.',
  ogDescription: 'Actualités, tendances et expertise du marché premium du soin et du bien-être par Distriskin.',
  ogImage: '/images/logo-distriskin.jpeg',
})
</script>

<template>
<div class="page-hero">
  <div class="page-hero-content">
    <span class="section-label">Journal</span>
    <h1 class="section-title">Tendances, expertise<br>et <em>actualités</em></h1>
    <p class="section-desc">Décryptages du marché, nouveautés produits, retours d'expérience et conseils pour les professionnels du soin premium.</p>
  </div>
</div>

<section class="blog-content">
  <div class="blog-inner">

    <div class="blog-filters">
      <button class="blog-filter active">Tous</button>
      <button class="blog-filter">Tendances</button>
      <button class="blog-filter">Nos Marques</button>
      <button class="blog-filter">Expertise</button>
      <button class="blog-filter">Partenaires</button>
    </div>

    <!-- Featured -->
    <a href="#" v-reveal class="blog-featured">
      <div class="bf-image">
        <span class="bf-badge">À la une</span>
      </div>
      <div class="bf-content">
        <div class="bf-cat">Tendances</div>
        <h2 class="bf-title">Comment les spas d'hôtels de luxe réinventent l'expérience client en 2025</h2>
        <p class="bf-excerpt">Le marché du spa hôtelier évolue rapidement. Entre personnalisation poussée, technologies innovantes et approche holistique, les établissements premium redéfinissent les standards de l'excellence. Décryptage des tendances qui façonnent le secteur.</p>
        <span class="bf-meta">12 min de lecture · Juin 2025</span>
        <span class="bf-link">Lire l'article <span class="arrow"></span></span>
      </div>
    </a>

    <!-- Grid -->
    <div class="blog-grid">
      <a href="#" v-reveal class="blog-card">
        <div class="bc-image cat-marques"></div>
        <div class="bc-content">
          <div class="bc-cat">Nos Marques</div>
          <h3 class="bc-title">NIANCE × TESLAMED : la synergie qui transforme le soin en institut</h3>
          <p class="bc-excerpt">Découvrez comment combiner cosmétiques suisses et technologie esthétique pour des protocoles d'une efficacité redoublée.</p>
          <span class="bc-meta">8 min · Mai 2025</span>
        </div>
      </a>
      <a href="#" v-reveal.d1 class="blog-card">
        <div class="bc-image cat-expertise"></div>
        <div class="bc-content">
          <div class="bc-cat">Expertise</div>
          <h3 class="bc-title">5 clés pour maximiser le sell-out en institut de beauté premium</h3>
          <p class="bc-excerpt">Nos conseils terrain pour transformer chaque produit en succès commercial auprès de votre clientèle.</p>
          <span class="bc-meta">6 min · Avril 2025</span>
        </div>
      </a>
      <a href="#" v-reveal.d2 class="blog-card">
        <div class="bc-image cat-tendances"></div>
        <div class="bc-content">
          <div class="bc-cat">Tendances</div>
          <h3 class="bc-title">La parfumerie de niche : un marché en pleine expansion</h3>
          <p class="bc-excerpt">Pourquoi les extraits de parfums d'exception séduisent de plus en plus les points de vente premium.</p>
          <span class="bc-meta">7 min · Mars 2025</span>
        </div>
      </a>
      <a href="#" v-reveal class="blog-card">
        <div class="bc-image cat-partenaires"></div>
        <div class="bc-content">
          <div class="bc-cat">Partenaires</div>
          <h3 class="bc-title">David Duchène rejoint le réseau Distriskin en Île-de-France</h3>
          <p class="bc-excerpt">Esthéticien de formation et expert du retail de luxe suisse, David renforce notre présence sur un marché stratégique.</p>
          <span class="bc-meta">3 min · Février 2025</span>
        </div>
      </a>
      <a href="#" v-reveal.d1 class="blog-card">
        <div class="bc-image cat-expertise"></div>
        <div class="bc-content">
          <div class="bc-cat">Expertise</div>
          <h3 class="bc-title">L'approche holistique : quand la beauté commence de l'intérieur</h3>
          <p class="bc-excerpt">Compléments alimentaires et cosmétiques, une combinaison gagnante pour les établissements qui veulent se différencier.</p>
          <span class="bc-meta">9 min · Janvier 2025</span>
        </div>
      </a>
      <a href="#" v-reveal.d2 class="blog-card">
        <div class="bc-image cat-marques"></div>
        <div class="bc-content">
          <div class="bc-cat">Nos Marques</div>
          <h3 class="bc-title">TESLAMED : la technologie au service du soin professionnel</h3>
          <p class="bc-excerpt">Tout ce que vous devez savoir sur les dispositifs de technologie esthétique avancée et leur intégration en spa.</p>
          <span class="bc-meta">10 min · Décembre 2024</span>
        </div>
      </a>
    </div>

    <div v-reveal class="blog-more">
      <a class="btn-outline-dark">Voir plus d'articles</a>
    </div>

  </div>
</section>

<section class="cta-banner">
  <span v-reveal class="section-label">Restez informé</span>
  <h2 v-reveal.d1 class="section-title">Recevez nos <em>dernières actualités</em></h2>
  <p v-reveal.d2 class="section-desc">Inscrivez-vous à notre newsletter pour recevoir les tendances du secteur et les nouveautés Distriskin.</p>
  <NuxtLink to="/contact" v-reveal.d3 class="btn-primary">S'inscrire</NuxtLink>
</section>
</template>

<style scoped>
/* Blog uses the old V2 design system — override V3 variables locally */
.page-hero,
.blog-content,
.cta-banner,
.blog-more {
  --navy: #10133F;
  --navy-light: #1a1d5c;
  --gold: #AD822B;
  --gold-light: #c9a455;
  --gold-pale: #e8d5c0;
  --gold-bg: #f7f0e5;
  --gray: #404040;
  --gray-light: #8a8a8a;
  --gray-border: #e2e0dc;
  --cream: #faf8f5;
  --white: #ffffff;
  --font-display: 'Montserrat', sans-serif;
  --font-serif: 'Cormorant Garamond', serif;
  --max-width: 1240px;
  --transition: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Page hero (old design) */
.page-hero {
  min-height: 55vh;
  background: var(--navy);
  display: flex;
  align-items: flex-end;
  padding: 6rem 4rem 4rem;
  position: relative;
  overflow: hidden;
}
.page-hero::before {
  content: '';
  position: absolute;
  top: -40%; right: -15%;
  width: 60vw; height: 60vw;
  border-radius: 50%;
  border: 1px solid rgba(173, 130, 43, 0.06);
}
.page-hero-content {
  position: relative; z-index: 2;
  max-width: var(--max-width);
  width: 100%;
  margin: 0 auto;
}
.page-hero .section-label { color: var(--gold); }
.page-hero .section-title { color: var(--white); font-size: clamp(2.2rem, 5vw, 3.8rem); margin-bottom: 1rem; }
.page-hero .section-desc { color: rgba(255,255,255,0.5); }

.section-label {
  font-size: 0.6rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1.2rem;
  font-weight: 500;
  display: block;
}
.section-title {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 300;
  color: var(--navy);
  line-height: 1.25;
  margin-bottom: 1.5rem;
}
.section-title em { font-style: italic; color: var(--gold); }
.section-desc {
  font-size: 0.95rem;
  font-weight: 300;
  line-height: 1.9;
  color: var(--gray-light);
  max-width: 600px;
}

/* CTA banner (old design) */
.cta-banner {
  background: var(--navy);
  padding: 6rem 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.cta-banner::before {
  content: '';
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 500px; height: 500px;
  border: 1px solid rgba(173, 130, 43, 0.05);
  border-radius: 50%;
}
.cta-banner .section-title { color: var(--white); max-width: 700px; margin: 0 auto 1rem; }
.cta-banner .section-desc { color: rgba(255,255,255,0.45); margin: 0 auto 2.5rem; text-align: center; }

/* Buttons (old design) */
.btn-primary {
  display: inline-block;
  background: var(--gold);
  color: var(--white);
  border: none;
  padding: 1rem 2.5rem;
  font-family: var(--font-display);
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.4s var(--transition);
  position: relative;
  overflow: hidden;
}
.btn-primary::before {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 100%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
  transition: left 0.6s;
}
.btn-primary:hover::before { left: 100%; }
.btn-primary:hover {
  background: var(--gold-light);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(173, 130, 43, 0.3);
}

.btn-outline-dark {
  display: inline-block;
  border: 1px solid var(--navy);
  color: var(--navy);
  padding: 1rem 2.5rem;
  font-family: var(--font-display);
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.4s;
}
.btn-outline-dark:hover { background: var(--navy); color: var(--white); }

/* Blog-specific */
.blog-content { padding: 6rem 4rem; background: var(--cream); }
.blog-inner { max-width: var(--max-width); margin: 0 auto; }

.blog-filters {
  display: flex; gap: 1rem; margin-bottom: 4rem; flex-wrap: wrap;
}
.blog-filter {
  padding: 0.5rem 1.5rem; border: 1px solid var(--gray-border);
  font-size: 0.62rem; letter-spacing: 0.15em; text-transform: uppercase;
  font-weight: 500; color: var(--gray); cursor: pointer; transition: all 0.3s;
  background: transparent; font-family: var(--font-display);
}
.blog-filter:hover, .blog-filter.active { border-color: var(--gold); color: var(--gold); }

/* Featured article */
.blog-featured {
  display: grid; grid-template-columns: 1.2fr 1fr; gap: 3rem;
  margin-bottom: 4rem; background: var(--white); border: 1px solid rgba(16,19,63,0.04);
  transition: all 0.4s;
}
.blog-featured:hover { box-shadow: 0 15px 40px rgba(16,19,63,0.06); }
.bf-image {
  height: 380px; background: linear-gradient(135deg, var(--navy), var(--navy-light));
  position: relative;
}
.bf-image .bf-badge {
  position: absolute; top: 1.5rem; left: 1.5rem;
  background: var(--gold); color: var(--white);
  font-size: 0.55rem; letter-spacing: 0.2em; text-transform: uppercase;
  padding: 0.4rem 1rem; font-weight: 500;
}
.bf-content { padding: 3rem 3rem 3rem 0; display: flex; flex-direction: column; justify-content: center; }
.bf-cat { font-size: 0.55rem; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold); margin-bottom: 1rem; font-weight: 500; }
.bf-title { font-family: var(--font-serif); font-size: 1.8rem; font-weight: 400; color: var(--navy); line-height: 1.3; margin-bottom: 1rem; }
.bf-excerpt { font-size: 0.88rem; font-weight: 300; line-height: 1.8; color: var(--gray-light); margin-bottom: 1.5rem; }
.bf-meta { font-size: 0.65rem; color: var(--gray-light); letter-spacing: 0.1em; }
.bf-link { font-size: 0.62rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--navy); font-weight: 500; display: inline-flex; align-items: center; gap: 0.6rem; transition: color 0.3s; margin-top: auto; }
.bf-link:hover { color: var(--gold); }
.bf-link .arrow { width: 20px; height: 1px; background: var(--gold); transition: width 0.3s; }
.bf-link:hover .arrow { width: 35px; }

/* Blog grid */
.blog-grid {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;
}
.blog-card {
  background: var(--white); border: 1px solid rgba(16,19,63,0.04);
  transition: all 0.5s var(--transition); overflow: hidden;
}
.blog-card:hover { transform: translateY(-4px); box-shadow: 0 15px 40px rgba(16,19,63,0.06); }
.bc-image {
  height: 200px; position: relative;
}
.bc-image.cat-tendances { background: linear-gradient(135deg, #1a1d5c, #2a2d7c); }
.bc-image.cat-marques { background: linear-gradient(135deg, #0f2618, #1a3828); }
.bc-image.cat-expertise { background: linear-gradient(135deg, #2a1515, #3d1f1f); }
.bc-image.cat-partenaires { background: linear-gradient(135deg, var(--navy), #1e2070); }
.bc-content { padding: 2rem; }
.bc-cat { font-size: 0.55rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 0.8rem; font-weight: 500; }
.bc-title { font-family: var(--font-serif); font-size: 1.15rem; font-weight: 400; color: var(--navy); line-height: 1.35; margin-bottom: 0.8rem; }
.bc-excerpt { font-size: 0.82rem; font-weight: 300; line-height: 1.7; color: var(--gray-light); margin-bottom: 1.2rem; }
.bc-meta { font-size: 0.6rem; color: var(--gray-light); letter-spacing: 0.1em; }

.blog-more {
  text-align: center; margin-top: 4rem;
}

@media (max-width: 1024px) {
  .page-hero { padding: 5rem 2rem 3rem; }
  .blog-featured { grid-template-columns: 1fr; }
  .bf-content { padding: 2rem; }
  .bf-image { height: 250px; }
  .blog-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 768px) {
  .page-hero { min-height: 45vh; padding: 5rem 1.5rem 2.5rem; }
  .blog-content { padding: 4rem 1.5rem; }
  .blog-grid { grid-template-columns: 1fr; }
}
</style>
