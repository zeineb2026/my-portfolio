(() => {
  'use strict';

  const root = document.documentElement;
  root.classList.remove('no-js');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* =========================================================
     Translations (EN / FR)
     ========================================================= */
  const i18n = {
    en: {
      skip: 'Skip to content',
      'nav.about': 'About',
      'nav.skills': 'Expertise',
      'nav.contact': 'Contact',
      'hero.badge': 'Day pharmacy · Monastir',
      'hero.hello': "Hello, I'm",
      'hero.title': 'Doctor of Pharmacy',
      'hero.tagline': 'Community pharmacist in Monastir, dedicated to the health of my patients and to clear, caring advice.',
      'hero.cta': 'Get in touch',
      'hero.cta2': 'My expertise',
      'about.eyebrow': 'Who I am',
      'about.title': 'About',
      'about.p1': 'Doctor of Pharmacy, I graduated from the Faculty of Pharmacy of Monastir (University of Monastir, class of 2008) and work as a day community pharmacist in Monastir.',
      'about.p2': 'Every day I support my patients: reviewing and dispensing prescriptions, explaining how to use medicines safely, and offering prevention and health advice tailored to each person.',
      'about.stat1': 'Years since graduating',
      'about.stat2': 'Class of — Faculty of Pharmacy, Monastir',
      'skills.eyebrow': 'What I do',
      'skills.title': 'Expertise',
      'skills.s1Name': 'Pharmaceutical advice',
      'skills.s1': 'Clear guidance on treatments and proper medicine use',
      'skills.s2Name': 'Prescription dispensing',
      'skills.s2': 'Careful review and dispensing of every prescription',
      'skills.s3Name': 'Drug interactions',
      'skills.s3': 'Checking contraindications and side effects',
      'skills.s4Name': 'Pharmacy management',
      'skills.s4': 'Stock, supply and day-to-day organisation',
      'skills.s5Name': 'Dermo-cosmetics',
      'skills.s5': 'Personalised skincare and hygiene advice',
      'skills.s6Name': 'Prevention & health education',
      'skills.s6': 'Patient follow-up, prevention and wellbeing',
      'contact.eyebrow': "Let's talk",
      'contact.title': 'Contact',
      'contact.intro': 'A question about a treatment or a request? Send me a message.',
      'contact.name': 'Name',
      'contact.email': 'Email',
      'contact.message': 'Message',
      'contact.send': 'Send message',
      'contact.sending': 'Sending…',
      'contact.successTitle': 'Message sent!',
      'contact.successText': 'Thanks, {name}! I’ll get back to you soon.',
      'contact.again': 'Send another',
      'err.name': 'Please tell me your name.',
      'err.emailEmpty': 'Please enter your email.',
      'err.email': 'That email doesn’t look quite right.',
      'err.message': 'Your message needs at least 10 characters.',
      'footer.top': 'Back to top ↑',
      'aria.menuOpen': 'Open menu',
      'aria.menuClose': 'Close menu',
      'aria.lang': 'Passer en français',
      'meta.title': 'Zeineb Belaid Belli — Doctor of Pharmacy',
    },
    fr: {
      skip: 'Aller au contenu',
      'nav.about': 'À propos',
      'nav.skills': 'Expertise',
      'nav.contact': 'Contact',
      'hero.badge': 'Officine de jour · Monastir',
      'hero.hello': 'Bonjour, je suis',
      'hero.title': 'Docteur en pharmacie',
      'hero.tagline': 'Pharmacienne d’officine à Monastir, au service de la santé de mes patients avec des conseils clairs et bienveillants.',
      'hero.cta': 'Me contacter',
      'hero.cta2': 'Mon expertise',
      'about.eyebrow': 'Qui je suis',
      'about.title': 'À propos',
      'about.p1': 'Docteur en pharmacie, diplômée de la Faculté de pharmacie de Monastir (Université de Monastir, promotion 2008), j’exerce en officine de jour à Monastir.',
      'about.p2': 'Au quotidien, j’accompagne mes patients : analyse et délivrance des ordonnances, conseils sur le bon usage des médicaments, prévention et conseils santé adaptés à chacun.',
      'about.stat1': 'Années depuis le diplôme',
      'about.stat2': 'Promotion — Faculté de pharmacie de Monastir',
      'skills.eyebrow': 'Ce que je fais',
      'skills.title': 'Expertise',
      'skills.s1Name': 'Conseil pharmaceutique',
      'skills.s1': 'Explications claires sur les traitements et le bon usage',
      'skills.s2Name': 'Délivrance d’ordonnances',
      'skills.s2': 'Analyse attentive et délivrance de chaque prescription',
      'skills.s3Name': 'Interactions médicamenteuses',
      'skills.s3': 'Contrôle des contre-indications et effets indésirables',
      'skills.s4Name': 'Gestion d’officine',
      'skills.s4': 'Stocks, approvisionnement et organisation au quotidien',
      'skills.s5Name': 'Dermocosmétique',
      'skills.s5': 'Conseils personnalisés en soin de la peau et hygiène',
      'skills.s6Name': 'Prévention & éducation santé',
      'skills.s6': 'Suivi des patients, prévention et bien-être',
      'contact.eyebrow': 'Parlons-en',
      'contact.title': 'Contact',
      'contact.intro': 'Une question sur un traitement ou une demande ? Envoyez-moi un message.',
      'contact.name': 'Nom',
      'contact.email': 'E-mail',
      'contact.message': 'Message',
      'contact.send': 'Envoyer le message',
      'contact.sending': 'Envoi…',
      'contact.successTitle': 'Message envoyé !',
      'contact.successText': 'Merci, {name} ! Je vous réponds très vite.',
      'contact.again': 'Envoyer un autre message',
      'err.name': 'Indiquez votre nom, s’il vous plaît.',
      'err.emailEmpty': 'Indiquez votre adresse e-mail.',
      'err.email': 'Cette adresse e-mail semble incorrecte.',
      'err.message': 'Votre message doit contenir au moins 10 caractères.',
      'footer.top': 'Retour en haut ↑',
      'aria.menuOpen': 'Ouvrir le menu',
      'aria.menuClose': 'Fermer le menu',
      'aria.lang': 'Switch to English',
      'meta.title': 'Zeineb Belaid Belli — Docteur en pharmacie',
    },
  };

  const storage = {
    get(key) { try { return localStorage.getItem(key); } catch { return null; } },
    set(key, value) { try { localStorage.setItem(key, value); } catch { /* ignore */ } },
  };

  let lang = storage.get('lang') ||
    ((navigator.language || 'en').toLowerCase().startsWith('fr') ? 'fr' : 'en');

  const t = (key) => (i18n[lang] && i18n[lang][key]) || i18n.en[key] || key;

  const langToggle = document.getElementById('langToggle');

  function applyLang(next) {
    lang = next;
    root.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });
    document.title = t('meta.title');
    langToggle.setAttribute('aria-label', t('aria.lang'));
    updateMenuLabel();
    revalidateVisibleErrors();
    storage.set('lang', lang);
  }

  langToggle.addEventListener('click', () => applyLang(lang === 'en' ? 'fr' : 'en'));

  /* =========================================================
     Navigation
     ========================================================= */
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  function updateMenuLabel() {
    const open = navLinks.classList.contains('is-open');
    navToggle.setAttribute('aria-label', t(open ? 'aria.menuClose' : 'aria.menuOpen'));
  }

  function setMenu(open) {
    navLinks.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    updateMenuLabel();
  }

  navToggle.addEventListener('click', () => setMenu(!navLinks.classList.contains('is-open')));
  navLinks.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) setMenu(false);
  });

  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 12);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Active section highlighting
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.querySelectorAll('a').forEach((a) => {
        a.classList.toggle('is-active', a.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  // The hero (#top) is observed too, so no link stays highlighted back at the top
  document.querySelectorAll('#top, main section[id]').forEach((s) => sectionObserver.observe(s));

  /* =========================================================
     Scroll reveals (staggered), skill bars, counters
     ========================================================= */
  document.querySelectorAll('[data-stagger]').forEach((group) => {
    [...group.children].forEach((child, i) => child.style.setProperty('--i', i));
  });


  function animateCount(el) {
    const target = Number(el.dataset.count);
    const from = Number(el.dataset.from || 0);
    if (reduceMotion) { el.textContent = target; return; }
    const duration = 1600;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(from + (target - from) * eased);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  function reveal(el) {
    if (el.classList.contains('is-visible')) return;
    el.classList.add('is-visible');
    el.querySelectorAll('[data-count]').forEach(animateCount);
    revealObserver.unobserve(el); // once
  }

  // Reveal anything already scrolled past (fast jumps, End key, anchor links, reload mid-page)
  function revealPassed() {
    document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) reveal(el);
    });
  }

  const revealObserver = new IntersectionObserver((entries) => {
    let any = false;
    entries.forEach((entry) => {
      if (entry.isIntersecting) { reveal(entry.target); any = true; }
    });
    if (any) revealPassed();
  }, { rootMargin: '0px 0px -80px 0px', threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

  let revealTick = false;
  window.addEventListener('scroll', () => {
    if (revealTick) return;
    revealTick = true;
    setTimeout(() => { revealTick = false; revealPassed(); }, 150);
  }, { passive: true });

  // Spotlight that follows the cursor on skill cards
  document.querySelectorAll('.skill').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });

  // Subtle magnetic pull on hero buttons (pointer devices only)
  if (!reduceMotion && window.matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('.magnetic').forEach((btn) => {
      btn.addEventListener('pointermove', (e) => {
        const r = btn.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.18;
        const y = (e.clientY - r.top - r.height / 2) * 0.28;
        btn.style.transform = `translate(${x}px, ${y}px)`;
      });
      btn.addEventListener('pointerleave', () => { btn.style.transform = ''; });
    });
  }

  /* =========================================================
     Contact form
     ========================================================= */
  const form = document.getElementById('contactForm');
  const submitBtn = form.querySelector('.btn--submit');
  const submitLabel = submitBtn.querySelector('.btn__label');
  const success = document.getElementById('formSuccess');
  const successText = document.getElementById('successText');
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  const validators = {
    name: (v) => (v.trim() ? '' : 'err.name'),
    email: (v) => (!v.trim() ? 'err.emailEmpty' : emailRe.test(v.trim()) ? '' : 'err.email'),
    message: (v) => (v.trim().length >= 10 ? '' : 'err.message'),
  };

  function setFieldError(input, errKey, { shake = false } = {}) {
    const field = input.closest('.field');
    const msg = field.querySelector('.field__error');
    if (errKey) {
      msg.textContent = t(errKey);
      msg.dataset.key = errKey;
      input.setAttribute('aria-invalid', 'true');
      if (shake) {
        field.classList.remove('is-invalid');
        void field.offsetWidth; // restart shake animation
      }
      field.classList.add('is-invalid');
    } else {
      field.classList.remove('is-invalid');
      input.removeAttribute('aria-invalid');
      delete msg.dataset.key;
    }
    return !errKey;
  }

  function revalidateVisibleErrors() {
    form.querySelectorAll('.field__error[data-key]').forEach((msg) => {
      msg.textContent = t(msg.dataset.key);
    });
  }

  Object.keys(validators).forEach((name) => {
    const input = form.elements[name];
    input.addEventListener('blur', () => {
      if (input.value) setFieldError(input, validators[name](input.value));
    });
    input.addEventListener('input', () => {
      if (input.closest('.field').classList.contains('is-invalid')) {
        setFieldError(input, validators[name](input.value));
      }
    });
  });

  function confetti(originEl) {
    if (reduceMotion) return;
    const r = originEl.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 3;
    const colors = ['#6366f1', '#a855f7', '#ec4899', '#10b981', '#f59e0b', '#0ea5e9'];
    for (let i = 0; i < 36; i++) {
      const piece = document.createElement('span');
      piece.className = 'confetti';
      const angle = Math.random() * Math.PI * 2;
      const dist = 120 + Math.random() * 160;
      piece.style.background = colors[i % colors.length];
      piece.style.setProperty('--x0', `${cx}px`);
      piece.style.setProperty('--y0', `${cy}px`);
      piece.style.setProperty('--x1', `${cx + Math.cos(angle) * dist}px`);
      piece.style.setProperty('--y1', `${cy + Math.sin(angle) * dist + 120}px`);
      piece.style.setProperty('--r', `${Math.random() * 720 - 360}deg`);
      piece.style.animationDelay = `${Math.random() * 120}ms`;
      document.body.appendChild(piece);
      piece.addEventListener('animationend', () => piece.remove());
    }
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    let firstInvalid = null;
    Object.keys(validators).forEach((name) => {
      const input = form.elements[name];
      const ok = setFieldError(input, validators[name](input.value), { shake: true });
      if (!ok && !firstInvalid) firstInvalid = input;
    });
    if (firstInvalid) { firstInvalid.focus(); return; }

    submitBtn.disabled = true;
    submitBtn.classList.add('is-loading');
    submitLabel.textContent = t('contact.sending');

    // No backend: simulate a request. Replace with fetch() to a form service.
    await new Promise((resolve) => setTimeout(resolve, 1200));

    const name = form.elements.name.value.trim();
    successText.textContent = t('contact.successText').replace('{name}', name);
    form.hidden = true;
    success.hidden = false;
    confetti(success);

    form.reset();
    submitBtn.disabled = false;
    submitBtn.classList.remove('is-loading');
    submitLabel.textContent = t('contact.send');
  });

  document.getElementById('sendAnother').addEventListener('click', () => {
    success.hidden = true;
    form.hidden = false;
    form.elements.name.focus();
  });

  /* =========================================================
     Init
     ========================================================= */
  document.getElementById('year').textContent = new Date().getFullYear();
  applyLang(lang);
})();
