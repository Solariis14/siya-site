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
    // ===== Mobile nav =====
    'nav.home':           { fr: 'Accueil',              en: 'Home' },
    'nav.ecosystem':      { fr: 'Écosystème',            en: 'Ecosystem' },

    // ===== BNS page =====
    'bns.hero.num':       { fr: 'Service 02 · Livraison',  en: 'Service 02 · Delivery' },
    'bns.hero.tag':       { fr: 'Réseau de points relais · Commerces de proximité', en: 'Relay point network · Neighborhood stores' },
    'bns.hero.lede':      { fr: "Le maillon physique de l'écosystème SIYA. Un réseau de points relais dans les commerces de proximité, conçu pour la réalité urbaine et péri-urbaine du Cameroun.", en: "The physical link in the SIYA ecosystem. A relay point network within neighborhood stores, designed for Cameroon's urban and peri-urban reality." },
    'bns.hero.m1':        { fr: 'Réseau', en: 'Network' },
    'bns.hero.m1v':       { fr: 'Points relais', en: 'Relay points' },
    'bns.hero.m2':        { fr: 'Couverture', en: 'Coverage' },
    'bns.hero.m2v':       { fr: 'Cameroun', en: 'Cameroon' },
    'bns.hero.m3':        { fr: 'Partenaires', en: 'Partners' },
    'bns.hero.m3v':       { fr: 'Commerces de proximité', en: 'Neighborhood stores' },
    'bns.hero.m4':        { fr: 'Lancement', en: 'Launch' },
    'bns.hero.m4v':       { fr: '2025 · Douala', en: '2025 · Douala' },
    'bns.net.eyebrow':    { fr: '— Réseau', en: '— Network' },
    'bns.net.h2':         { fr: 'Le maillage de proximité.', en: 'The neighborhood mesh.' },
    'bns.net.lede':       { fr: "BNS s'appuie sur les commerces existants — épiceries, boutiques, kiosques — pour densifier la dernière mile sans construire d'infrastructure neuve.", en: 'BNS leverages existing shops — grocery stores, boutiques, kiosks — to densify last-mile delivery without building new infrastructure.' },
    'bns.net.s1v':        { fr: 'Native', en: 'Native' },
    'bns.net.s1l':        { fr: 'Intégration native marketplace', en: 'Native marketplace integration' },
    'bns.net.s2v':        { fr: 'Local', en: 'Local' },
    'bns.net.s2l':        { fr: 'Épiceries · boutiques · kiosques', en: 'Grocery stores · boutiques · kiosks' },
    'bns.net.s3v':        { fr: '4 chiffres', en: '4 digits' },
    'bns.net.s3l':        { fr: 'Notification SMS + confirmation à la remise', en: 'SMS notification + handover confirmation' },
    'bns.net.s4v':        { fr: 'Escrow', en: 'Escrow' },
    'bns.net.s4l':        { fr: 'Fonds vers le vendeur à la confirmation acheteur', en: 'Funds released to seller upon buyer confirmation' },
    'bns.how.eyebrow':    { fr: '— Mécanique', en: '— How it works' },
    'bns.how.h2':         { fr: 'Du colis au retrait, trois étapes.', en: 'From parcel to pickup, three steps.' },
    'bns.how.s1num':      { fr: '— Étape 01 · Collecte', en: '— Step 01 · Collection' },
    'bns.how.s1h':        { fr: 'Le vendeur dépose', en: 'The seller drops off' },
    'bns.how.s1p':        { fr: 'Le commerçant dépose son colis au point relais le plus proche. Étiquette générée automatiquement par SOKO.', en: 'The seller drops the parcel at the nearest relay point. Label automatically generated by SOKO.' },
    'bns.how.s2num':      { fr: '— Étape 02 · Transport', en: '— Step 02 · Transport' },
    'bns.how.s2h':        { fr: 'BNS achemine', en: 'BNS delivers' },
    'bns.how.s2p':        { fr: 'Tournées optimisées entre les hubs régionaux. Tracking temps réel partagé avec l'acheteur et le vendeur.', en: 'Optimized runs between regional hubs. Real-time tracking shared with buyer and seller.' },
    'bns.how.s3num':      { fr: '— Étape 03 · Retrait', en: '— Step 03 · Pickup' },
    'bns.how.s3h':        { fr: "L'acheteur récupère", en: 'The buyer collects' },
    'bns.how.s3p':        { fr: 'Notification SMS, code de retrait à 4 chiffres. Confirmation à la remise — l'escrow SOKO libère les fonds.', en: 'SMS notification, 4-digit pickup code. Handover confirmation — SOKO escrow releases the funds.' },
    'bns.partner.eyebrow':{ fr: '— Devenir point relais', en: '— Become a relay point' },
    'bns.partner.h2':     { fr: "Votre commerce devient une porte d'entrée de l'écosystème SIYA.", en: 'Your store becomes a gateway to the SIYA ecosystem.' },
    'bns.cta.eyebrow':    { fr: '— Rejoindre BNS', en: '— Join BNS' },
    'bns.cta.btn1':       { fr: 'Devenir point relais →', en: 'Become a relay point →' },
    'bns.cta.btn2':       { fr: 'Voir SOKO', en: 'See SOKO' },

    // ===== SOKO page =====
    'soko.hero.num':      { fr: 'Service 01 · Marketplace', en: 'Service 01 · Marketplace' },
    'soko.hero.tag':      { fr: 'Marketplace no‑cash · Escrow natif · Cameroun', en: 'No‑cash marketplace · Native escrow · Cameroon' },
    'soko.hero.lede':     { fr: 'La première marketplace 100% digitale en zone CEMAC. Paiement sécurisé par escrow, vendeurs vérifiés par KYC renforcé, transactions 100% digitales.', en: 'The first 100% digital marketplace in the CEMAC zone. Escrow-secured payment, sellers verified by enhanced KYC, 100% digital transactions.' },
    'soko.how.eyebrow':   { fr: '— Mécanique', en: '— How it works' },
    'soko.how.h2':        { fr: 'Quatre étapes, zéro friction.', en: 'Four steps, zero friction.' },
    'soko.how.lede':      { fr: 'Un parcours conçu pour la réalité du commerce africain : mobile, sécurisé, en français.', en: 'A journey designed for the reality of African commerce: mobile, secure, in French.' },
    'soko.how.s1h':       { fr: 'Le vendeur publie', en: 'The seller lists' },
    'soko.how.s1p':       { fr: 'Création de boutique en 5 min depuis mobile. Photos, prix, options de livraison. Onboarding assisté pour les TPE.', en: 'Store creation in 5 min from mobile. Photos, prices, delivery options. Assisted onboarding for small businesses.' },
    'soko.how.s2h':       { fr: "L'acheteur commande", en: 'The buyer orders' },
    'soko.how.s2p':       { fr: 'Paiement Mobile Money — MTN, Orange, Express Union. Aucune carte requise. Aucune espèce.', en: 'Mobile Money payment — MTN, Orange, Express Union. No card required. No cash.' },
    'soko.how.s3h':       { fr: 'BNS livre', en: 'BNS delivers' },
    'soko.how.s3p':       { fr: "Retrait au point relais le plus proche ou livraison à domicile. L'argent reste séquestré tant que la livraison n'est pas confirmée.", en: 'Pickup at the nearest relay point or home delivery. Funds remain in escrow until delivery is confirmed.' },
    'soko.how.s4h':       { fr: "L'escrow libère", en: 'Escrow releases' },
    'soko.how.s4p':       { fr: "L'acheteur confirme la réception. SIYA libère les fonds vers le vendeur.", en: 'The buyer confirms receipt. SIYA releases the funds to the seller.' },
    'soko.why.eyebrow':   { fr: '— Pourquoi SOKO', en: '— Why SOKO' },
    'soko.why.h2':        { fr: 'Conçu pour le commerce africain, par des camerounais.', en: 'Built for African commerce, by Cameroonians.' },
    'soko.cta.eyebrow':   { fr: 'Devenir vendeur', en: 'Become a seller' },
    'soko.cta.btn1':      { fr: 'Devenir vendeur SOKO →', en: 'Become a SOKO seller →' },
    'soko.cta.btn2':      { fr: 'Voir BNS', en: 'See BNS' },

    // ===== Equipe page =====
    'team.hero.h1a':      { fr: 'Sept', en: 'Seven' },
    'team.hero.h1b':      { fr: 'fondateurs.', en: 'founders.' },
    'team.hero.lede':     { fr: 'Une équipe complémentaire — commerciale, financière, technique — réunie par une conviction commune : le commerce digital africain mérite une infrastructure digne de ce nom.', en: 'A complementary team — commercial, financial, technical — brought together by a shared conviction: African digital commerce deserves a proper infrastructure.' },
    'team.approach.eyebrow': { fr: 'Notre approche', en: 'Our approach' },
    'team.approach.h2':   { fr: "Une équipe d'opérateurs.", en: 'A team of operators.' },
    'team.approach.p':    { fr: "Sept associés qui travaillent ensemble, sans hiérarchie superflue. Direction, finance, produit — chacun porte son expertise mais nous construisons d'un seul mouvement, depuis Douala et Paris.", en: "Seven partners who work together, without unnecessary hierarchy. Leadership, finance, product — each carries their expertise but we build as one, from Douala and Paris." },
    'team.recruit.role':  { fr: 'Rejoignez-nous', en: 'Join us' },
    'team.recruit.name':  { fr: 'Nous recrutons.', en: "We're hiring." },
    'team.recruit.p':     { fr: 'Vous voulez contribuer à construire l'écosystème SIYA ?', en: 'Want to help build the SIYA ecosystem?' },

    // ===== A-propos page =====
    'about.hero.eyebrow': { fr: 'Notre histoire', en: 'Our story' },
    'about.hero.h1a':     { fr: 'Pensé depuis', en: 'Built from' },
    'about.hero.h1b':     { fr: "l'Afrique.", en: 'Africa.' },
    'about.hero.lede':    { fr: "SIYA Technology est une entreprise de services numériques fondée en 2024, incorporée au Delaware (USA), opérant au Cameroun et en France. Notre conviction fondatrice : les solutions qui réussiront en Afrique sont celles pensées depuis l'Afrique.", en: 'SIYA Technology is a digital services company founded in 2024, incorporated in Delaware (USA), operating in Cameroon and France. Our founding conviction: the solutions that will succeed in Africa are those designed from Africa.' },
    'about.mission.eyebrow': { fr: '— Mission', en: '— Mission' },
    'about.mission.h2':   { fr: 'Combler le fossé du commerce digital africain.', en: 'Closing the gap in African digital commerce.' },
    'about.vals.eyebrow': { fr: '— Valeurs', en: '— Values' },
    'about.vals.h2':      { fr: 'Cinq principes non négociables.', en: 'Five non-negotiable principles.' },
    'about.v1.t':         { fr: 'Intégrité', en: 'Integrity' },
    'about.v1.b':         { fr: 'Honnêteté et transparence dans toutes nos interactions — avec nos clients, partenaires, vendeurs, investisseurs.', en: 'Honesty and transparency in all our interactions — with our clients, partners, sellers, investors.' },
    'about.v2.t':         { fr: 'Innovation', en: 'Innovation' },
    'about.v2.b':         { fr: "Repousser les limites de ce qui est possible avec la technologie pour servir les besoins concrets du continent.", en: 'Pushing the boundaries of what is possible with technology to serve the real needs of the continent.' },
    'about.v3.t':         { fr: 'Engagement', en: 'Commitment' },
    'about.v3.b':         { fr: "Investissement total dans chaque projet avec la détermination d'atteindre nos objectifs.", en: 'Total commitment to every project with the determination to achieve our goals.' },
    'about.v4.t':         { fr: 'Collaboration', en: 'Collaboration' },
    'about.v4.b':         { fr: 'Les meilleures solutions naissent de la coopération, en interne comme avec nos partenaires.', en: 'The best solutions come from cooperation, internally and with our partners.' },
    'about.v5.t':         { fr: 'Responsabilité', en: 'Responsibility' },
    'about.v5.b':         { fr: "Agir avec éthique et conscience des impacts de nos actions sur les commerçants, acheteurs et l'environnement.", en: 'Acting ethically and with awareness of the impact of our actions on merchants, buyers, and the environment.' },

    // ===== Contact page =====
    'contact.hero.eyebrow': { fr: 'Contact', en: 'Contact' },
    'contact.hero.h1':    { fr: 'Travaillons ensemble.', en: "Let's work together." },
    'contact.hero.lede':  { fr: 'Investisseur, partenaire opérateur, institution financière ou client Consulting — nous sommes disponibles pour échanger. Réponse sous 48h ouvrées.', en: 'Investor, operator partner, financial institution or Consulting client — we are available to connect. Response within 48 business hours.' },
    'contact.form.firstname': { fr: 'Prénom', en: 'First name' },
    'contact.form.lastname':  { fr: 'Nom', en: 'Last name' },
    'contact.form.email':     { fr: 'Email professionnel', en: 'Professional email' },
    'contact.form.org':       { fr: 'Organisation', en: 'Organization' },
    'contact.form.profile':   { fr: 'Profil', en: 'Profile' },
    'contact.form.message':   { fr: 'Message', en: 'Message' },
    'contact.form.submit':    { fr: 'Envoyer →', en: 'Send →' },

    // ===== MobiSwift page =====
    'mobi.hero.num':      { fr: 'Service 03 · Paiement · En préparation', en: 'Service 03 · Payment · In preparation' },
    'mobi.hero.tag':      { fr: 'Portefeuille mobile africain · Agrément COBAC en instruction', en: 'African mobile wallet · COBAC license under review' },
    'mobi.hero.lede':     { fr: "Le portefeuille mobile africain de demain. Envoyer, recevoir, dépenser — un service financier grand public indépendant de SOKO, en préparation réglementaire.", en: "Tomorrow's African mobile wallet. Send, receive, spend — a mass-market financial service independent of SOKO, in regulatory preparation." },
    'mobi.vision.eyebrow': { fr: '— Vision', en: '— Vision' },
    'mobi.vision.h2':    { fr: 'Un portefeuille mobile pour le continent.', en: 'A mobile wallet for the continent.' },
    'mobi.road.eyebrow': { fr: '— Roadmap', en: '— Roadmap' },
    'mobi.road.h2':      { fr: 'Préparer le terrain réglementaire tôt.', en: 'Preparing the regulatory ground early.' },

    // ===== Consulting page =====
    'con.hero.num':       { fr: 'Service 04 · Conseil & Développement', en: 'Service 04 · Consulting & Development' },
    'con.hero.tag':       { fr: 'Solutions numériques sur mesure · Entreprises africaines', en: 'Custom digital solutions · African companies' },
    'con.hero.lede':      { fr: "Notre activité de service. Nous accompagnons les entreprises africaines dans la conception et le développement de solutions numériques sur mesure.", en: "Our service activity. We support African companies in designing and developing custom digital solutions." },
    'con.services.eyebrow': { fr: '— Domaines', en: '— Domains' },
    'con.services.h2':    { fr: 'Cinq spécialités.', en: 'Five specialties.' },
    'con.cta.btn1':       { fr: 'Décrire mon projet →', en: 'Describe my project →' },

    // ===== Footer brand desc =====
    'footer.brand.desc':  { fr: 'Entreprise de services numériques fondée en 2024, incorporée au Delaware.', en: 'Digital services company founded in 2024, incorporated in Delaware.' },
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
