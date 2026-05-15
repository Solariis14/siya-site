// SIYA Technology — micro-interactions
// Vanilla JS, no dependencies.

(function () {
  'use strict';

  // ---------- Scroll reveal ----------
  const reveals = document.querySelectorAll('[data-reveal], [data-reveal-stagger]');
  const inView = (el) => {
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    return r.top < vh * 0.92 && r.bottom > 0;
  };
  // Eager reveal anything already visible — bypasses IO timing/iframe quirks.
  const flushEager = () => {
    reveals.forEach((el) => {
      if (!el.classList.contains('is-in') && inView(el)) el.classList.add('is-in');
    });
  };
  flushEager();
  // requestAnimationFrame in case fonts/layout shift after first paint
  requestAnimationFrame(flushEager);
  setTimeout(flushEager, 100);
  setTimeout(flushEager, 400);
  // Lazy reveal for below-the-fold via IO
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' }
    );
    reveals.forEach((el) => { if (!el.classList.contains('is-in')) io.observe(el); });
  }
  // Final safety: on scroll, top up anything that became visible.
  let scrollT = null;
  window.addEventListener('scroll', () => {
    if (scrollT) return;
    scrollT = requestAnimationFrame(() => { flushEager(); scrollT = null; });
  }, { passive: true });

  // ---------- Parallax title (very subtle, transform only) ----------
  const parallax = Array.from(document.querySelectorAll('[data-parallax]'));
  if (parallax.length) {
    let ticking = false;
    const update = () => {
      const vh = window.innerHeight;
      parallax.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const dist = (center - vh / 2) / vh; // -1..1ish
        const speed = parseFloat(el.dataset.parallax) || 0.08;
        el.style.transform = `translate3d(0, ${(-dist * speed * 60).toFixed(2)}px, 0)`;
      });
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }, { passive: true });
    update();
  }

  // ---------- Ecosystem viz (Accueil) ----------
  const eco = document.querySelector('[data-ecosystem]');
  if (eco) {
    const nodes = eco.querySelectorAll('[data-node]');
    const links = eco.querySelectorAll('[data-link]');
    const panels = document.querySelectorAll('[data-eco-panel]');
    const setActive = (key) => {
      nodes.forEach((n) => n.classList.toggle('is-active', n.dataset.node === key));
      nodes.forEach((n) => n.classList.toggle('is-dim', key && n.dataset.node !== key));
      links.forEach((l) => {
        const conn = (l.dataset.link || '').split(' ');
        l.classList.toggle('is-active', !!key && conn.includes(key));
        l.classList.toggle('is-dim', !!key && !conn.includes(key));
      });
      panels.forEach((p) => p.classList.toggle('is-active', p.dataset.ecoPanel === key));
    };
    nodes.forEach((n) => {
      n.addEventListener('mouseenter', () => setActive(n.dataset.node));
      n.addEventListener('focus', () => setActive(n.dataset.node));
    });
    eco.addEventListener('mouseleave', () => setActive(null));
    // initial gentle pulse rotation
    setActive(null);
  }

  // ---------- Page transition ----------
  document.querySelectorAll('a[data-page-link]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (!href || href.startsWith('#') || a.target === '_blank') return;
      e.preventDefault();
      document.documentElement.classList.add('is-leaving');
      setTimeout(() => { window.location.href = href; }, 220);
    });
  });

  // ---------- Year ----------
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
  // ---------- Mobile burger menu ----------
  function initBurger() {
    const burger = document.getElementById('nav-burger');
    const menu = document.getElementById('nav-mobile');
    const closeBtn = document.getElementById('nav-mobile-close');
    if (!burger || !menu) return;
    burger.addEventListener('click', () => {
      menu.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        menu.classList.remove('open');
        document.body.style.overflow = '';
      });
    }
    menu.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        menu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
  initBurger();


})();
