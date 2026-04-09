<script setup>
useSeoMeta({
  title: 'Contact — DISTRISKIN',
  ogTitle: 'Contact — DISTRISKIN',
  description: 'Vous êtes un professionnel du soin ou du bien-être et vous souhaitez proposer des produits d\'exception ? Échangeons.',
  ogDescription: 'Vous êtes un professionnel du soin ou du bien-être et vous souhaitez proposer des produits d\'exception ? Échangeons.',
})
</script>

<template>
<div class="page-hero"><div class="page-hero-content">
  <p class="section-label">Contact</p>
  <h1 class="section-title" style="font-size:clamp(36px,6vw,64px);">Construisons <em>ensemble</em></h1>
  <p class="section-desc" style="color:var(--gray); margin-top:24px;">Vous êtes un professionnel du soin ou du bien-être et vous souhaitez proposer des produits d'exception ? Échangeons.</p>
</div></div>

<div class="contact-section">
  <div class="contact-info">
    <p class="section-label" v-reveal>Coordonnées</p>
    <h2 class="section-title" v-reveal.d1 style="margin-bottom:32px;">Restons en <em>contact</em></h2>
    <div class="cd" v-reveal.d2><div class="cd-label">Téléphone</div><div class="cd-value"><a href="tel:+33688405645">+33 6 88 40 56 45</a></div></div>
    <div class="cd" v-reveal.d2><div class="cd-label">Email</div><div class="cd-value"><a href="mailto:contact@distriskin.com">contact@distriskin.com</a></div></div>
    <div class="cd" v-reveal.d3><div class="cd-label">Siège Social</div><div class="cd-value">DISTRISKIN SARL<br>421 rue des Cordineaux<br>69380 Dommartin, France</div></div>
    <div class="cd" v-reveal.d3><div class="cd-label">N° TVA</div><div class="cd-value">FR03988827309</div></div>
  </div>

  <div class="contact-form-wrap">
    <h3 v-reveal>Devenir partenaire</h3>
    <p class="subtitle" v-reveal.d1>Remplissez ce formulaire et nous vous recontactons sous 48h.</p>
    <form>
      <div class="fg-row">
        <div class="fg" v-reveal><label>Nom *</label><input type="text" placeholder="Votre nom complet" required></div>
        <div class="fg" v-reveal.d1><label>Établissement *</label><input type="text" placeholder="Nom de l'établissement" required></div>
      </div>
      <div class="fg-row">
        <div class="fg" v-reveal><label>Email *</label><input type="email" placeholder="votre@email.com" required></div>
        <div class="fg" v-reveal.d1><label>Téléphone</label><input type="tel" placeholder="+33 ..."></div>
      </div>
      <div class="fg" v-reveal><label>Type d'établissement *</label><select required><option value="">Sélectionnez...</option><option>Spa d'hôtel 4* / 5* / Palace</option><option>Institut de beauté premium</option><option>Parfumerie sélective</option><option>Pharmacie / Centre médical</option><option>Concept store / Wellness</option><option>Autre</option></select></div>
      <div class="fg" v-reveal><label>Marques qui vous intéressent</label><select><option value="">Sélectionnez...</option><option>TESLAMED — Technologie esthétique</option><option>NIANCE — Cosmétique suisse</option><option>JO ADAMS — Parfumerie de niche</option><option>Plusieurs marques / Synergie</option><option>Je souhaite en discuter</option></select></div>
      <div class="fg" v-reveal><label>Votre projet</label><textarea placeholder="Décrivez vos besoins, vos objectifs..."></textarea></div>
      <button type="submit" class="btn-primary" v-reveal style="width:100%; border:none; cursor:pointer;">Envoyer ma demande</button>
    </form>
  </div>
</div>

<section class="process-section">
  <div class="section-header"><p class="section-label" v-reveal>Comment ça se passe ?</p><h2 class="section-title" v-reveal.d1>Les étapes du <em>partenariat</em></h2></div>
  <div class="pr-steps">
    <div class="pr-step" v-reveal><div class="pr-num">01</div><div class="pr-title">Votre demande</div><p class="pr-text">Vous remplissez le formulaire</p></div>
    <div class="pr-step" v-reveal.d1><div class="pr-num">02</div><div class="pr-title">Premier échange</div><p class="pr-text">Nous vous rappelons sous 48h</p></div>
    <div class="pr-step" v-reveal.d2><div class="pr-num">03</div><div class="pr-title">Proposition</div><p class="pr-text">Offre adaptée à votre établissement</p></div>
    <div class="pr-step" v-reveal.d3><div class="pr-num">04</div><div class="pr-title">Lancement</div><p class="pr-text">Formation et accompagnement continu</p></div>
  </div>
</section>

<section class="faq">
  <div class="section-header"><p class="section-label" v-reveal>Questions fréquentes</p><h2 class="section-title" v-reveal.d1>Tout ce que vous devez <em>savoir</em></h2></div>
  <div class="faq-grid">
    <div class="faq-item" v-reveal><div class="faq-q">Quels types d'établissements peuvent devenir partenaires ?</div><p class="faq-a">Nous travaillons principalement avec les spas d'hôtels 4* et 5*, les palaces, les instituts de beauté premium, les parfumeries sélectives, les pharmacies et les centres de médecine préventive.</p></div>
    <div class="faq-item" v-reveal.d1><div class="faq-q">Proposez-vous des formations ?</div><p class="faq-a">Oui, c'est même l'un de nos points forts. Nos formateurs experts dispensent des formations sur mesure couvrant les protocoles de soins, la maîtrise des produits et les techniques de vente.</p></div>
    <div class="faq-item" v-reveal><div class="faq-q">Puis-je sélectionner une seule marque ?</div><p class="faq-a">Absolument. Chaque marque fonctionne de manière autonome. Cependant, la synergie entre TESLAMED et NIANCE offre des résultats particulièrement intéressants.</p></div>
    <div class="faq-item" v-reveal.d1><div class="faq-q">Quelle est votre couverture géographique ?</div><p class="faq-a">Nous couvrons l'ensemble du territoire français métropolitain grâce à notre réseau d'agents commerciaux dédiés par zone.</p></div>
    <div class="faq-item" v-reveal><div class="faq-q">Comment se déroule le suivi après le lancement ?</div><p class="faq-a">Votre agent dédié assure un suivi régulier, analyse les performances sell-out avec vous et ajuste les recommandations en conséquence.</p></div>
    <div class="faq-item" v-reveal.d1><div class="faq-q">Quels sont les délais de livraison ?</div><p class="faq-a">Nous nous engageons sur des délais de livraison rapides et fiables. Les détails sont discutés lors de la mise en place du partenariat.</p></div>
  </div>
</section>
</template>

<style scoped>
.page-hero { min-height: 50vh; padding: 160px 60px 80px; background: radial-gradient(ellipse 80% 60% at 50% 40%, rgba(200,169,81,0.04) 0%, transparent 70%), var(--black); display: flex; align-items: flex-end; position: relative; overflow: hidden; }
.page-hero::before { content: ''; position: absolute; top: -40%; right: -15%; width: 60vw; height: 60vw; border-radius: 50%; border: 1px solid rgba(200,169,81,0.05); }
.page-hero-content { max-width: 1400px; width: 100%; margin: 0 auto; position: relative; z-index: 2; }

.contact-section { display: grid; grid-template-columns: 1fr 1.2fr; min-height: 600px; }
.contact-info { padding: 80px 60px; display: flex; flex-direction: column; justify-content: center; border-right: 1px solid rgba(200,169,81,0.06); }
.cd { margin-bottom: 32px; }
.cd-label { font-size: 9px; letter-spacing: 4px; text-transform: uppercase; color: var(--gold); margin-bottom: 8px; font-weight: 600; }
.cd-value { font-size: 16px; font-weight: 300; color: var(--gray-light); }
.cd-value a { color: var(--gray-light); border-bottom: 1px solid rgba(200,169,81,0.3); transition: color 0.3s; }
.cd-value a:hover { color: var(--gold); }

.contact-form-wrap { padding: 80px 60px; display: flex; flex-direction: column; justify-content: center; background: var(--black-light); }
.contact-form-wrap h3 { font-family: var(--serif); font-size: 32px; font-weight: 300; margin-bottom: 8px; }
.contact-form-wrap .subtitle { font-size: 14px; font-weight: 300; color: var(--gray); margin-bottom: 40px; }
.fg { margin-bottom: 20px; }
.fg label { display: block; font-size: 9px; letter-spacing: 3px; text-transform: uppercase; color: var(--gray-light); margin-bottom: 8px; font-weight: 600; }
.fg input, .fg textarea, .fg select { width: 100%; padding: 14px 16px; border: 1px solid rgba(200,169,81,0.12); background: var(--black-card); font-family: var(--sans); font-size: 14px; font-weight: 300; color: var(--white); transition: border-color 0.3s; outline: none; }
.fg input:focus, .fg textarea:focus, .fg select:focus { border-color: var(--gold); }
.fg select { appearance: none; cursor: pointer; }
.fg textarea { resize: vertical; min-height: 100px; }
.fg-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }

.process-section { padding: 100px 60px; border-top: 1px solid rgba(200,169,81,0.06); }
.pr-steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; max-width: 1400px; margin: 48px auto 0; }
.pr-step { text-align: center; padding: 32px; border-right: 1px solid rgba(200,169,81,0.06); }
.pr-step:last-child { border-right: none; }
.pr-num { font-family: var(--serif); font-size: 36px; font-weight: 300; color: var(--gold); margin-bottom: 12px; }
.pr-title { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; font-weight: 600; margin-bottom: 8px; }
.pr-text { font-size: 13px; font-weight: 300; color: var(--gray); line-height: 1.6; }

.faq { padding: 140px 60px; background: var(--black-light); border-top: 1px solid rgba(200,169,81,0.06); }
.faq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; max-width: 1400px; margin: 60px auto 0; }
.faq-item { padding: 32px; border: 1px solid rgba(200,169,81,0.08); transition: all 0.4s; background: var(--black-card); }
.faq-item:hover { border-color: rgba(200,169,81,0.2); }
.faq-q { font-size: 15px; font-weight: 500; margin-bottom: 12px; }
.faq-a { font-size: 13px; font-weight: 300; line-height: 1.8; color: var(--gray); }

@media (max-width: 1024px) {
  .contact-section { grid-template-columns: 1fr; }
  .contact-info { border-right: none; border-bottom: 1px solid rgba(200,169,81,0.06); }
  .faq-grid { grid-template-columns: 1fr; }
  .pr-steps { grid-template-columns: 1fr 1fr; }
  .pr-step { border-right: none; border-bottom: 1px solid rgba(200,169,81,0.06); }
  .contact-info, .contact-form-wrap { padding: 48px 24px; }
  .page-hero, .process-section, .faq { padding: 80px 24px; }
}
@media (max-width: 768px) {
  .fg-row { grid-template-columns: 1fr; }
  .pr-steps { grid-template-columns: 1fr; }
  .page-hero { min-height: 40vh; padding: 120px 24px 48px; }
}
</style>
