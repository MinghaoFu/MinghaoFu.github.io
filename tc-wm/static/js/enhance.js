/* TC-WM project page — dynamic enhancements: scroll reveal, figure lightbox,
   scroll-progress bar. Vanilla, no dependencies. Degrades gracefully:
   if this never runs, the inline <head> guard drops `reveal-on` and all
   content shows normally. Honors prefers-reduced-motion. */
(function () {
  window.__revInit = true;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var REVEAL = '.section > .container > h2.title, .section-lede, .figure-img, .figure-caption,' +
               '.env-card, .rollout-card, .hl-card, .teaser-wrap, .abstract-block, .bibtex-block';

  // ---- scroll reveal ----
  if (!reduce && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px 12% 0px' });
    document.querySelectorAll(REVEAL).forEach(function (el) {
      var p = el.parentElement;            // stagger cards within their grid
      if (p && (p.classList.contains('env-grid') || p.classList.contains('rollout-grid'))) {
        var idx = Array.prototype.indexOf.call(p.children, el);
        el.style.transitionDelay = Math.min(idx * 55, 440) + 'ms';
      }
      io.observe(el);
    });
  } else {
    document.documentElement.classList.remove('reveal-on');   // show everything
  }

  // ---- click-to-zoom lightbox (figures + rollout/env frames) ----
  var lb = document.createElement('div');
  lb.className = 'lb';
  lb.innerHTML = '<span class="lb-close" aria-label="Close">&times;</span><img alt="">';
  document.body.appendChild(lb);
  var lbImg = lb.querySelector('img'), scrollY = 0;
  function openLb(src, alt) {
    lbImg.src = src; lbImg.alt = alt || '';
    lb.classList.add('open'); document.body.style.overflow = 'hidden';
  }
  function closeLb() {
    lb.classList.remove('open'); document.body.style.overflow = '';
    setTimeout(function () { if (!lb.classList.contains('open')) lbImg.removeAttribute('src'); }, 320);
  }
  lb.addEventListener('click', function (e) { if (e.target !== lbImg) closeLb(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLb(); });
  document.querySelectorAll('.figure-img, .env-card img, .rollout-cell img').forEach(function (im) {
    im.addEventListener('click', function () { openLb(im.currentSrc || im.src, im.alt); });
  });

  // ---- scroll-progress bar ----
  var bar = document.createElement('div'); bar.className = 'scroll-prog';
  document.body.appendChild(bar);
  var ticking = false;
  function prog() {
    var d = document.documentElement;
    var max = d.scrollHeight - d.clientHeight;
    bar.style.width = (max > 0 ? (d.scrollTop / max) * 100 : 0) + '%';
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; window.requestAnimationFrame(prog); }
  }, { passive: true });
  prog();
})();
