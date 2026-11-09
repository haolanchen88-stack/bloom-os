/* BloomOS local outline icon pack — self-contained, no remote CDN dependency.
   Compatible with the original lucide.createIcons() call sites. */
(() => {
  'use strict';
  const paths = {
    activity: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
    baby: '<path d="M9 12h.01M15 12h.01"/><path d="M12 2a5 5 0 0 0-4 2"/><circle cx="12" cy="13" r="9"/><path d="M9 16c2 2 4 2 6 0"/>',
    'calendar-clock': '<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M7 2v4M17 2v4M3 9h18"/><circle cx="16" cy="16" r="4"/><path d="M16 14v2l2 1"/>',
    'calendar-heart': '<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M7 2v4M17 2v4M3 9h18"/><path d="M12 18s-4-2.3-4-4.3a2 2 0 0 1 4-1 2 2 0 0 1 4 1C16 15.7 12 18 12 18Z"/>',
    check: '<path d="m4 12 5 5L20 6"/>',
    'check-circle-2': '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
    'chevron-down': '<path d="m6 9 6 6 6-6"/>',
    compass: '<circle cx="12" cy="12" r="10"/><path d="m16 8-2 6-6 2 2-6Z"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',
    droplet: '<path d="M12 2c-2.5 4-7 8-7 12a7 7 0 0 0 14 0c0-4-4.5-8-7-12Z"/>',
    droplets: '<path d="M12 3C10 6 7 9 7 12a5 5 0 1 0 10 0c0-3-3-6-5-9Z"/><path d="M4 14c-1.2 1.5-2 3-2 4a3 3 0 0 0 4 2.8M20 14c1.2 1.5 2 3 2 4a3 3 0 0 1-4 2.8"/>',
    flame: '<path d="M12 22a8 8 0 0 0 8-8c0-4-2-7-6-11 0 5-3 6-4 8-1-2-2-3-2-5-3 3-4 6-4 8a8 8 0 0 0 8 8Z"/><path d="M12 22a4 4 0 0 0 4-4c0-2-1-4-3-6 0 3-4 4-4 6a4 4 0 0 0 3 4Z"/>',
    'folder-heart': '<path d="M3 6a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path d="M12 17s-4-2-4-4.1a2 2 0 0 1 4-1 2 2 0 0 1 4 1C16 15 12 17 12 17Z"/>',
    footprints: '<ellipse cx="7" cy="16" rx="3" ry="5" transform="rotate(-19 7 16)"/><ellipse cx="17" cy="10" rx="3" ry="5" transform="rotate(-19 17 10)"/><circle cx="3" cy="10" r="1"/><circle cx="5" cy="8" r="1"/><circle cx="19" cy="3" r="1"/><circle cx="21" cy="5" r="1"/>',
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 1 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',
    'heart-handshake': '<path d="M12 21 3.8 13a5.1 5.1 0 0 1 7.2-7.2l1 1 1-1A5.1 5.1 0 0 1 20.2 13L12 21Z"/><path d="m8 12 3 3a2 2 0 0 0 3 0l2-2M10 10l3 3"/>',
    'heart-pulse': '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 1 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/><path d="M2 12h5l2-3 3 7 2-4h8"/>',
    history: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/>',
    'locate-fixed': '<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3"/>',
    pill: '<path d="M10 4a6 6 0 0 1 8.5 8.5l-6 6A6 6 0 0 1 4 10Z"/><path d="m8 8 8 8"/>',
    share: '<path d="M12 16V3m-5 5 5-5 5 5"/><path d="M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/>',
    'shield-check': '<path d="M12 2 21 6v6c0 5-4 8-9 10-5-2-9-5-9-10V6Z"/><path d="m8 12 3 3 5-5"/>',
    sliders: '<path d="M4 7h8m4 0h4M4 17h4m4 0h8"/><circle cx="14" cy="7" r="2"/><circle cx="10" cy="17" r="2"/>',
    'smile-plus': '<circle cx="11" cy="12" r="9"/><path d="M8 14c1 2 5 2 6 0M8 10h.01M14 10h.01M20 3v6m-3-3h6"/>',
    sparkles: '<path d="m12 3 1.8 6.2L20 11l-6.2 1.8L12 19l-1.8-6.2L4 11l6.2-1.8L12 3ZM19 18l.7 1.3L21 20l-1.3.7L19 22l-.7-1.3L17 20l1.3-.7L19 18ZM5 2l.7 1.3L7 4l-1.3.7L5 6l-.7-1.3L3 4l1.3-.7L5 2Z"/>',
    'trash-2': '<path d="M3 6h18m-15 0 1 15h10l1-15M9 6V4h6v2M10 10v7m4-7v7"/>',
    'trending-up': '<path d="m3 17 7-7 4 4 7-7M15 7h6v6"/>',
    'undo-2': '<path d="M9 14 4 9l5-5M4 9h11a6 6 0 1 1 0 12h-2"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    zap: '<path d="m13 2-9 12h8l-1 8 9-12h-8Z"/>'
  };
  function createIcons() {
    document.querySelectorAll('[data-lucide]').forEach(el => {
      const name = el.getAttribute('data-lucide');
      const path = paths[name] || paths.sparkles;
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('fill', 'none');
      svg.setAttribute('stroke', 'currentColor');
      svg.setAttribute('stroke-width', '2');
      svg.setAttribute('stroke-linecap', 'round');
      svg.setAttribute('stroke-linejoin', 'round');
      svg.setAttribute('aria-hidden', 'true');
      svg.setAttribute('width', '18');
      svg.setAttribute('height', '18');
      if (el.getAttribute('class')) svg.setAttribute('class', el.getAttribute('class'));
      svg.innerHTML = path;
      el.replaceWith(svg);
    });
  }
  window.lucide = { createIcons };
})();
