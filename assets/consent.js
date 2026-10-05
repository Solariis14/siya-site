// SIYA Technology — cookie consent
// Google Analytics (gtag.js) is only loaded after the visitor accepts.
// Choice persists in localStorage as `siya-consent` ("granted" | "denied").
// Any element with [data-cookie-settings] reopens the banner.

(function () {
  'use strict';

  const GA_ID = 'G-N53YRDFVS0';
  const KEY = 'siya-consent';

  const TEXT = {
    fr: {
      msg: "Nous utilisons Google Analytics pour mesurer l'audience du site. Aucun cookie n'est déposé sans votre accord.",
      more: 'En savoir plus',
      accept: 'Accepter',
      refuse: 'Refuser',
    },
    en: {
      msg: 'We use Google Analytics to measure site traffic. No cookies are set without your consent.',
      more: 'Learn more',
      accept: 'Accept',
      refuse: 'Decline',
    },
  };

  const read = () => { try { return localStorage.getItem(KEY); } catch (e) { return null; } };
  const write = (v) => { try { localStorage.setItem(KEY, v); } catch (e) {} };

  let loaded = false;
  function loadAnalytics() {
    if (loaded) return;
    loaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
  }

  function clearGaCookies() {
    document.cookie.split(';').forEach((c) => {
      const name = c.split('=')[0].trim();
      if (name === '_ga' || name.indexOf('_ga_') === 0) {
        const host = location.hostname.replace(/^www\./, '');
        document.cookie = name + '=; Max-Age=0; path=/';
        document.cookie = name + '=; Max-Age=0; path=/; domain=.' + host;
      }
    });
  }

  function injectStyles() {
    if (document.getElementById('cc-style')) return;
    const st = document.createElement('style');
    st.id = 'cc-style';
    st.textContent = `
      .cc-banner { position: fixed; z-index: 1000; left: 16px; right: 16px; bottom: 16px;
        max-width: 560px; margin-left: auto; padding: 18px 20px; border-radius: var(--r-md, 8px);
        background: var(--navy-800, #0a1428); color: var(--ivory, #f5f1ea);
        border: 1px solid rgba(245,241,234,0.14); box-shadow: 0 18px 48px rgba(5,10,23,0.35);
        font-family: var(--sans, system-ui, sans-serif); font-size: 14px; line-height: 1.55;
        transform: translateY(12px); opacity: 0; transition: transform .35s var(--ease-out, ease), opacity .35s; }
      .cc-banner.is-in { transform: none; opacity: 1; }
      .cc-banner p { margin: 0 0 14px; color: rgba(245,241,234,0.78); }
      .cc-banner p a { color: var(--cyan, #6ec4f5); text-decoration: underline; }
      .cc-actions { display: flex; gap: 10px; justify-content: flex-end; flex-wrap: wrap; }
      .cc-btn { font-family: var(--mono, monospace); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase;
        padding: 9px 16px; border-radius: 999px; border: 1px solid rgba(245,241,234,0.22); color: var(--ivory, #f5f1ea);
        background: transparent; cursor: pointer; }
      .cc-btn:hover { border-color: rgba(245,241,234,0.5); }
      .cc-btn.cc-accept { background: var(--cyan, #6ec4f5); border-color: var(--cyan, #6ec4f5); color: var(--navy-800, #0a1428); }
      .cc-btn:focus-visible { outline: 2px solid var(--cyan, #6ec4f5); outline-offset: 2px; }
      @media (prefers-reduced-motion: reduce) { .cc-banner { transition: none; } }
    `;
    document.head.appendChild(st);
  }

  function showBanner() {
    if (document.querySelector('.cc-banner')) return;
    injectStyles();
    const lang = document.documentElement.lang === 'en' ? 'en' : 'fr';
    const t = TEXT[lang];
    const el = document.createElement('div');
    el.className = 'cc-banner';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-live', 'polite');
    el.setAttribute('aria-label', 'Cookies');
    el.innerHTML =
      '<p>' + t.msg + ' <a href="confidentialite.html">' + t.more + '</a></p>' +
      '<div class="cc-actions">' +
        '<button type="button" class="cc-btn cc-refuse">' + t.refuse + '</button>' +
        '<button type="button" class="cc-btn cc-accept">' + t.accept + '</button>' +
      '</div>';
    const close = () => { el.classList.remove('is-in'); setTimeout(() => el.remove(), 350); };
    el.querySelector('.cc-accept').addEventListener('click', () => { write('granted'); loadAnalytics(); close(); });
    el.querySelector('.cc-refuse').addEventListener('click', () => {
      const wasLoaded = loaded;
      write('denied'); clearGaCookies(); close();
      if (wasLoaded) location.reload();
    });
    document.body.appendChild(el);
    requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('is-in')));
  }

  function init() {
    const choice = read();
    if (choice === 'granted') loadAnalytics();
    else if (choice !== 'denied') showBanner();
    document.querySelectorAll('[data-cookie-settings]').forEach((b) => {
      b.addEventListener('click', (e) => { e.preventDefault(); showBanner(); });
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
