<template>
  <div>
    <PageHero
      label="Contact"
      title="Construisons <em>ensemble</em>"
      description="Vous êtes un professionnel du soin ou du bien-être et vous souhaitez proposer des produits d'exception ? Échangeons."
    />

    <!-- CONTACT FORM + INFO -->
    <div class="contact-section">
      <div class="contact-info">
        <span class="section-label reveal">Coordonnées</span>
        <h2 class="section-title reveal reveal-d1">Restons en <em>contact</em></h2>
        <div class="gold-line reveal reveal-d1"></div>
        <div class="cd reveal reveal-d2">
          <div class="cd-label">Téléphone</div>
          <div class="cd-value"><a href="tel:+33688405645">+33 6 88 40 56 45</a></div>
        </div>
        <div class="cd reveal reveal-d2">
          <div class="cd-label">Email</div>
          <div class="cd-value"><a href="mailto:contact@distriskin.com">contact@distriskin.com</a></div>
        </div>
        <div class="cd reveal reveal-d3">
          <div class="cd-label">Siège Social</div>
          <div class="cd-value">DISTRISKIN SARL<br>421 rue des Cordineaux<br>69380 Dommartin, France</div>
        </div>
        <div class="cd reveal reveal-d3">
          <div class="cd-label">N° TVA</div>
          <div class="cd-value">FR03988827309</div>
        </div>
        <div class="cd reveal reveal-d3">
          <div class="cd-label">Site web</div>
          <div class="cd-value"><a href="https://www.distriskin.com">www.distriskin.com</a></div>
        </div>
      </div>

      <div class="contact-form-wrap">
        <h3 class="reveal">Devenir partenaire</h3>
        <p class="subtitle reveal reveal-d1">Remplissez ce formulaire et nous vous recontactons sous 48h.</p>
        <form>
          <div class="fg-row">
            <div class="fg reveal"><label>Nom *</label><input type="text" placeholder="Votre nom complet" required></div>
            <div class="fg reveal reveal-d1"><label>Établissement *</label><input type="text" placeholder="Nom de l'établissement" required></div>
          </div>
          <div class="fg-row">
            <div class="fg reveal"><label>Email *</label><input type="email" placeholder="votre@email.com" required></div>
            <div class="fg reveal reveal-d1"><label>Téléphone</label><input type="tel" placeholder="+33 ..."></div>
          </div>
          <div class="fg reveal">
            <label>Type d'établissement *</label>
            <select required>
              <option value="">Sélectionnez votre type d'établissement...</option>
              <option>Spa d'hôtel 4* / 5* / Palace</option>
              <option>Institut de beauté premium</option>
              <option>Parfumerie sélective</option>
              <option>Pharmacie / Parapharmacie</option>
              <option>Centre de médecine esthétique / préventive</option>
              <option>Concept store / Wellness</option>
              <option>Autre</option>
            </select>
          </div>
          <div class="fg reveal">
            <label>Marques qui vous intéressent</label>
            <select>
              <option value="">Sélectionnez...</option>
              <option>TESLAMED — Technologie esthétique</option>
              <option>NIANCE — Cosmétique suisse holistique</option>
              <option>JO ADAMS — Parfumerie de niche</option>
              <option>Plusieurs marques / Synergie</option>
              <option>Je souhaite en discuter</option>
            </select>
          </div>
          <div class="fg reveal">
            <label>Votre projet</label>
            <textarea placeholder="Décrivez votre établissement, vos besoins, vos objectifs... Plus nous en savons, mieux nous pourrons vous accompagner."></textarea>
          </div>
          <button type="submit" class="btn-primary reveal" style="width:100%; padding:1.1rem; border:none; cursor:pointer;">Envoyer ma demande</button>
        </form>
      </div>
    </div>

    <!-- PROCESS REMINDER -->
    <section class="process-reminder">
      <div class="text-center">
        <span class="section-label reveal">Comment ça se passe ?</span>
        <h2 class="section-title reveal reveal-d1">Les étapes du <em>partenariat</em></h2>
        <div class="gold-line gold-line-center reveal reveal-d1"></div>
      </div>
      <div class="pr-steps">
        <div class="pr-step reveal">
          <div class="pr-num">01</div>
          <div class="pr-title">Votre demande</div>
          <p class="pr-text">Vous remplissez le formulaire ci-dessus</p>
        </div>
        <div class="pr-step reveal reveal-d1">
          <div class="pr-num">02</div>
          <div class="pr-title">Premier échange</div>
          <p class="pr-text">Nous vous rappelons sous 48h pour comprendre vos besoins</p>
        </div>
        <div class="pr-step reveal reveal-d2">
          <div class="pr-num">03</div>
          <div class="pr-title">Proposition</div>
          <p class="pr-text">Nous co-construisons une offre adaptée à votre établissement</p>
        </div>
        <div class="pr-step reveal reveal-d3">
          <div class="pr-num">04</div>
          <div class="pr-title">Lancement</div>
          <p class="pr-text">Formation, mise en place et accompagnement continu</p>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq">
      <div class="text-center">
        <span class="section-label reveal">Questions fréquentes</span>
        <h2 class="section-title reveal reveal-d1">Tout ce que vous devez <em>savoir</em></h2>
        <div class="gold-line gold-line-center reveal reveal-d1"></div>
      </div>
      <div class="faq-grid">
        <div class="faq-item reveal">
          <div class="faq-q">Quels types d'établissements peuvent devenir partenaires ?</div>
          <p class="faq-a">Nous travaillons principalement avec les spas d'hôtels 4* et 5*, les palaces, les instituts de beauté premium, les parfumeries sélectives, les pharmacies et les centres de médecine préventive.</p>
        </div>
        <div class="faq-item reveal reveal-d1">
          <div class="faq-q">Proposez-vous des formations ?</div>
          <p class="faq-a">Oui, c'est même l'un de nos points forts. Nos formateurs experts dispensent des formations sur mesure couvrant les protocoles de soins, la maîtrise des produits et les techniques de vente.</p>
        </div>
        <div class="faq-item reveal">
          <div class="faq-q">Puis-je sélectionner une seule marque ?</div>
          <p class="faq-a">Absolument. Chaque marque fonctionne de manière autonome. Cependant, la synergie entre TESLAMED et NIANCE offre des résultats particulièrement intéressants que nous aimons présenter.</p>
        </div>
        <div class="faq-item reveal reveal-d1">
          <div class="faq-q">Quelle est votre couverture géographique ?</div>
          <p class="faq-a">Nous couvrons l'ensemble du territoire français métropolitain grâce à notre réseau d'agents commerciaux dédiés par zone. Chaque partenaire bénéficie d'un interlocuteur de proximité.</p>
        </div>
        <div class="faq-item reveal">
          <div class="faq-q">Comment se déroule le suivi après le lancement ?</div>
          <p class="faq-a">Notre approche est axée sur le long terme. Votre agent dédié assure un suivi régulier, analyse les performances sell-out avec vous et ajuste les recommandations en conséquence.</p>
        </div>
        <div class="faq-item reveal reveal-d1">
          <div class="faq-q">Quels sont les délais de livraison ?</div>
          <p class="faq-a">Nous nous engageons sur des délais de livraison rapides et fiables. Les détails sont discutés lors de la mise en place du partenariat selon vos besoins spécifiques.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useScrollReveal()
useSeoMeta({
  title: 'Contact — DISTRISKIN',
  description: 'Contactez Distriskin pour devenir partenaire et proposer des marques premium à votre clientèle.',
})
</script>
