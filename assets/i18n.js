// SIYA — Lightweight i18n (FR / EN)
// Vanilla JS, persists in localStorage as `siya-lang`.
// Add data-i18n="key" to any element you want translated.

(function () {
  'use strict';

  const DICT = {
    // ===== Nav =====
    'nav.eco':          { fr: 'Écosystème',            en: 'Ecosystem' },
    'nav.about':        { fr: 'À propos',              en: 'About' },
    'nav.team':         { fr: 'Équipe',                en: 'Team' },
    'nav.style':        { fr: 'Style',                 en: 'Style' },
    'nav.contact':      { fr: 'Nous contacter',        en: 'Contact us' },

    // ===== Footer =====
    'footer.col.services':  { fr: 'Services',          en: 'Services' },
    'footer.col.house':     { fr: 'Maison',            en: 'Company' },
    'footer.col.legal':     { fr: 'Légal',             en: 'Legal' },
    'footer.about':         { fr: 'À propos',          en: 'About' },
    'footer.team':          { fr: 'Équipe',            en: 'Team' },
    'footer.contact':       { fr: 'Contact',           en: 'Contact' },
    'footer.style':         { fr: 'Style',             en: 'Style' },
    'footer.legal.mentions':       { fr: 'Mentions',           en: 'Legal notice' },
    'footer.legal.privacy':        { fr: 'Confidentialité',    en: 'Privacy' },
    'footer.legal.conditions':     { fr: 'Conditions',         en: 'Terms' },
    'footer.copyright':            { fr: '© <span data-year></span> SIYA Technology Corp. — Delaware', en: '© <span data-year></span> SIYA Technology Corp. — Delaware' },
    'footer.version':              { fr: 'v1.1 · Refonte 2026', en: 'v1.1 · 2026 Redesign' },
    'footer.tagline':              { fr: "L'écosystème numérique du commerce africain. Marketplace, livraison, paiement, consulting.", en: "The digital ecosystem of African commerce. Marketplace, delivery, payment, consulting." },

    // ===== Common buttons =====
    'btn.discover_eco':     { fr: "Découvrir l'écosystème", en: 'Discover the ecosystem' },
    'btn.read_manifesto':   { fr: 'Lire le manifeste',  en: 'Read the manifesto' },
    'btn.contact':          { fr: 'Prendre contact',    en: 'Get in touch' },
    'btn.our_story':        { fr: 'Notre histoire',     en: 'Our story' },
    'btn.see_all_eco':      { fr: "Tout l'écosystème →", en: 'Full ecosystem →' },
    'btn.see_team':         { fr: "Voir l'équipe",      en: 'See the team' },
    'btn.read_more':        { fr: 'Lire',               en: 'Read' },

    // ===== Index — Hero =====
    'idx.hero.meta':        { fr: 'Delaware · Cameroun · France',  en: 'Delaware · Cameroon · France' },
    'idx.hero.edition':     { fr: 'Édition 2026',                  en: 'Edition 2026' },
    'idx.hero.h1.l1':       { fr: "L'écosystème",                   en: 'The digital' },
    'idx.hero.h1.l2_kw':    { fr: 'numérique',                       en: 'ecosystem' },
    'idx.hero.h1.l2_rest':  { fr: ' du',                              en: ' of' },
    'idx.hero.h1.l3':       { fr: 'commerce',                          en: 'African' },
    'idx.hero.h1.l3_kw':    { fr: 'africain.',                         en: 'commerce.' },
    'idx.hero.lede':        { fr: "SIYA Technology bâtit une infrastructure intégrée — marketplace, livraison de proximité, paiement mobile, conseil technologique — pour digitaliser le commerce en Afrique francophone. Opéré depuis Douala, Paris et Wilmington.", en: 'SIYA Technology builds an integrated infrastructure — marketplace, local delivery, mobile payment, technology consulting — to digitize commerce in francophone Africa. Operated from Douala, Paris and Wilmington.' },

    // ===== Index — Hero strip metrics =====
    'idx.strip.svc.l':      { fr: 'Services intégrés',     en: 'Integrated services' },
    'idx.strip.svc.v':      { fr: '04 briques cohérentes', en: '04 coherent building blocks' },
    'idx.strip.assoc.l':    { fr: 'Associés fondateurs',   en: 'Founding partners' },
    'idx.strip.assoc.v':    { fr: '07 expertises complémentaires', en: '07 complementary skills' },
    'idx.strip.cov.l':      { fr: 'Couverture cible',       en: 'Target coverage' },
    'idx.strip.cov.v':      { fr: '11+ pays francophones',  en: '11+ francophone countries' },
    'idx.strip.model.l':    { fr: 'Modèle',                 en: 'Model' },
    'idx.strip.model.v':    { fr: '100% no-cash · escrow natif', en: '100% no-cash · native escrow' },

    // ===== Manifesto =====
    'idx.man.eyebrow':      { fr: 'Manifeste · 2025—2028',  en: 'Manifesto · 2025—2028' },
    'idx.man.h2_lead':      { fr: 'Le commerce digital existe en Afrique francophone, mais il est encore largement immature. Nous construisons l\'infrastructure qui le rend ', en: 'Digital commerce exists in francophone Africa, but it remains largely immature. We are building the infrastructure that makes it ' },
    'idx.man.h2_kw':        { fr: 'crédible, sûr et accessible.', en: 'credible, safe and accessible.' },
    'idx.man.lede_p1':      { fr: 'Les transactions sont massivement en espèces, les vendeurs informels n\'ont pas accès à des outils professionnels, les acheteurs subissent l\'absence de mécanismes de protection. Pendant ce temps, MTN MoMo et Orange Money sont déjà adoptés par plus de ', en: 'Transactions are massively in cash, informal sellers lack professional tools, buyers have no protection. Meanwhile, MTN MoMo and Orange Money are already used by over ' },
    'idx.man.lede_kw':      { fr: '42% des adultes camerounais', en: '42% of Cameroonian adults' },
    'idx.man.lede_p2':      { fr: '. SIYA comble ce fossé.',     en: '. SIYA closes that gap.' },
    'idx.man.loc.legal':    { fr: 'Siège juridique',            en: 'Legal seat' },
    'idx.man.loc.ops':      { fr: 'Opérations',                  en: 'Operations' },
    'idx.man.loc.eu':       { fr: 'Représentation EU',           en: 'EU representation' },

    // ===== Ecosystem section =====
    'idx.eco.eyebrow':      { fr: '02 · Écosystème',         en: '02 · Ecosystem' },
    'idx.eco.h2_a':         { fr: 'Quatre briques conçues pour ', en: 'Four building blocks designed to ' },
    'idx.eco.h2_kw':        { fr: 'fonctionner ensemble.',   en: 'work together.' },
    'idx.eco.lede':         { fr: "Chaque service est autonome, mais leur intégration crée une infrastructure impossible à répliquer simplement. C'est notre différenciation structurelle.", en: 'Each service is autonomous, but their integration creates an infrastructure that is hard to replicate. That is our structural differentiator.' },
    'idx.eco.default':      { fr: 'Survol', en: 'Hover' },
    'idx.eco.default_msg_a':{ fr: 'Quatre métiers reliés par une seule promesse : ', en: 'Four businesses linked by a single promise: ' },
    'idx.eco.default_msg_kw':{fr: 'aucune transaction en espèces, protection garantie de bout en bout.', en: 'no cash transactions, guaranteed end-to-end protection.' },

    // Service eyebrows in eco-panel labels
    'eco.soko.label':       { fr: 'Service 01 · Marketplace',   en: 'Service 01 · Marketplace' },
    'eco.bns.label':        { fr: 'Service 02 · Livraison',      en: 'Service 02 · Delivery' },
    'eco.mobiswift.label':  { fr: 'Service 03 · Paiement · En préparation', en: 'Service 03 · Payment · In preparation' },
    'eco.consulting.label': { fr: 'Service 04 · Conseil & Développement', en: 'Service 04 · Consulting & Development' },

    // Services preview grid
    'idx.svcs.eyebrow':     { fr: '03 · Services', en: '03 · Services' },
    'idx.svcs.h2_a':        { fr: 'Quatre verticales ', en: 'Four ' },
    'idx.svcs.h2_kw':       { fr: 'cohérentes.', en: 'coherent verticals.' },

    'idx.svc.soko.num':     { fr: '01 / Marketplace', en: '01 / Marketplace' },
    'idx.svc.bns.num':      { fr: '02 / Livraison',   en: '02 / Delivery' },
    'idx.svc.mob.num':      { fr: '03 / Paiement',    en: '03 / Payment' },
    'idx.svc.con.num':      { fr: '04 / Conseil',     en: '04 / Consulting' },
    'idx.svc.soko.desc':    { fr: 'Marketplace e‑commerce sécurisée. Escrow natif, KYC vendeur renforcé, commission dégressive 6 → 10%.', en: 'Secure e‑commerce marketplace. Native escrow, reinforced seller KYC, degressive commission 6 → 10%.' },
    'idx.svc.bns.desc':     { fr: 'Réseau de points relais natif de SOKO. Code de retrait à 4 chiffres, commerces de proximité partenaires.', en: 'Native SOKO pickup-point network. 4-digit pickup code, neighborhood partner shops.' },
    'idx.svc.mob.desc':     { fr: 'Portefeuille mobile africain en préparation. Service grand public indépendant, agrément COBAC en instruction.', en: 'African mobile wallet in preparation. Independent consumer service, COBAC license under review.' },
    'idx.svc.con.desc':     { fr: 'Conception et développement de solutions numériques sur mesure pour entreprises africaines.', en: 'Custom design and development of digital solutions for African companies.' },

    // Approche
    'idx.app.eyebrow':      { fr: '04 · Approche', en: '04 · Approach' },
    'idx.app.h2_a':         { fr: "Pensé depuis l'Afrique, ", en: 'Built in Africa, ' },
    'idx.app.h2_kw':        { fr: 'structuré pour l\'international.', en: 'structured for the world.' },
    'idx.app.lede':         { fr: 'Quatre principes non négociables qui guident chaque décision produit et commerciale.', en: 'Four non-negotiable principles that guide every product and commercial decision.' },
    'idx.app.p1.t':         { fr: "Une structure capable d'absorber la croissance.", en: 'A structure that can absorb growth.' },
    'idx.app.p1.b':         { fr: "Delaware Corporation pour la holding, opérations au Cameroun et en France. Cette architecture facilite les partenariats internationaux et prépare une éventuelle levée de fonds sans contraintes structurelles.", en: 'Delaware Corporation for the holding, operations in Cameroon and France. This architecture facilitates international partnerships and clears the path for a potential round without structural constraints.' },
    'idx.app.p2.t':         { fr: 'Une intégration verticale assumée.', en: 'Deliberate vertical integration.' },
    'idx.app.p2.b':         { fr: "Là où la plupart des marketplaces dépendent de prestataires externes pour la livraison ou le paiement, SIYA construit ses propres briques — BNS, MobiSwift — pour contrôler l'expérience de bout en bout et capter une part plus large de la valeur.", en: 'Where most marketplaces rely on third parties for delivery or payment, SIYA builds its own blocks — BNS, MobiSwift — to own the end-to-end experience and capture a larger share of value.' },
    'idx.app.p3.t':         { fr: 'Une rigueur de transparence tarifaire.', en: 'Strict pricing transparency.' },
    'idx.app.p3.b':         { fr: "Commission dégressive lisible (10 / 8 / 7 / 6%), seuils communiqués aux vendeurs, abonnements clairs. La transparence est un avantage commercial, pas une concession.", en: 'A readable degressive commission (10 / 8 / 7 / 6%), thresholds disclosed to sellers, clear plans. Transparency is a commercial advantage, not a concession.' },
    'idx.app.p4.t':         { fr: 'Une exigence no-cash sans compromis.', en: 'Uncompromising no-cash requirement.' },
    'idx.app.p4.b':         { fr: "Toutes les transactions sur SOKO sont digitales — Mobile Money ou carte bancaire, jamais d'espèces. Ce choix protège acheteurs et vendeurs, sécurise les flux, et inscrit SIYA dans la trajectoire de digitalisation des économies du continent.", en: 'Every transaction on SOKO is digital — Mobile Money or card, never cash. This choice protects buyers and sellers, secures flows, and aligns SIYA with the continent\'s digitization path.' },

    // CTA
    'idx.cta.eyebrow':      { fr: 'Construisons ensemble', en: "Let's build together" },
    'idx.cta.l1_a':         { fr: 'Opérateurs, institutions ', en: 'Operators, financial' },
    'idx.cta.l1_kw':        { fr: 'financières,', en: 'institutions,' },
    'idx.cta.l2':           { fr: 'investisseurs', en: 'investors' },
    'idx.cta.l3':           { fr: '— parlons.', en: '— let\'s talk.' },
  };

  const KEY = 'siya-lang';
  let lang = localStorage.getItem(KEY) || (document.documentElement.lang === 'en' ? 'en' : 'fr');

  function apply(l) {
    lang = (l === 'en') ? 'en' : 'fr';
    document.documentElement.lang = lang;
    localStorage.setItem(KEY, lang);
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const k = el.getAttribute('data-i18n');
      const v = DICT[k];
      if (!v) return;
      if (el.tagName === 'IMG') {
        el.setAttribute('alt', v[lang]);
      } else if (el.dataset.i18nMode === 'html') {
        el.innerHTML = v[lang];
      } else {
        el.textContent = v[lang];
      }
    });
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const k = el.getAttribute('data-i18n-html');
      const v = DICT[k];
      if (v) el.innerHTML = v[lang];
    });
    // Update toggle UI
    document.querySelectorAll('[data-lang-toggle] button').forEach((b) => {
      b.classList.toggle('is-active', b.dataset.lang === lang);
    });
  }

  // Wire toggle clicks
  function bindToggles() {
    document.querySelectorAll('[data-lang-toggle] button').forEach((b) => {
      b.addEventListener('click', () => apply(b.dataset.lang));
    });
  }

  if (document.readyState !== 'loading') {
    bindToggles();
    apply(lang);
  } else {
    document.addEventListener('DOMContentLoaded', () => { bindToggles(); apply(lang); });
  }

  window.siya = window.siya || {};
  window.siya.i18n = { setLang: apply, getLang: () => lang };
})();
