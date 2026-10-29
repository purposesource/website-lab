/*
 * Purpose Source website prototype: the shared layout.
 *
 * THE MENU AND THE FOOTER ARE DEFINED HERE, ONCE. Every page loads this file in its <head>.
 * When the page is ready, the script draws the header into <header id="site-header"> and the
 * footer into <footer id="site-footer">. To change the menu, edit MENU; to change the footer,
 * edit FOOTER. No page needs to change.
 *
 * Links: a file name such as 'pricing.html' is a page of this prototype (a '#part' may follow).
 * A full address (LIVE + '/...') opens the live site and is drawn with a small arrow.
 *
 * Without JavaScript each page shows the short <noscript> lists it carries, and the page
 * "All pages" (learn.html) links every page.
 *
 * The script also runs: the theme switch (footer), the copy icons, Esc and click-outside for
 * the "Why this page" panel, the "Improve this page" link, the not-found page's suggestion,
 * accordions that open when an address points at them (license.html#files), and the gentle
 * rise of sections into view as you scroll (never with reduced motion; without the script
 * nothing is hidden). Page-to-page transitions and smooth scrolling are plain CSS.
 * Plain JavaScript, no libraries, no network requests, nothing stored except the theme choice.
 */
(function () {
  'use strict';

  var LIVE = 'https://purposesource.org';

  /* "Improve this page" points at the page's file in the prototype's repository. On a GitHub
     Pages project site (owner.github.io/repo/) the address is worked out by itself; on any other
     host the link shows only once SOURCE names the repository, for example
     'https://github.com/owner/repo/blob/HEAD/'. Left empty, no link is drawn there. */
  var SOURCE = '';

  function sourceBase() {
    if (SOURCE) return SOURCE;
    var owner = /^([a-z0-9-]+)\.github\.io$/i.exec(location.hostname);
    var repo = location.pathname.split('/')[1];
    if (location.protocol === 'https:' && owner && repo && !/\.html$/.test(repo)) {
      return 'https://github.com/' + owner[1] + '/' + repo + '/blob/HEAD/';
    }
    return '';
  }

  /* ---------------------------------------------------------------- the menu */
  /* Six items. Each: label, the section's overview page (hub), one purpose line, two link
     columns and one featured link. Order of links = order on screen. */
  var MENU = [
    {
      id: 'licence',
      label: 'Licence',
      hub: 'license.html',
      purpose: 'One shared text, published and versioned. Read it, check it, compare it.',
      columns: [
        [
          ['The licence at a glance', 'license.html'],
          ['Full text', LIVE + '/license/PurposeSource-1.0'],
          ['In plain English', LIVE + '/license/PurposeSource-1.0/annotated'],
          ['Files and identifiers', 'license.html#files']
        ],
        [
          ['The four-year clock', 'license.html#clock'],
          ['Compare licensing models', 'compare.html'],
          ['Questions and answers', 'faq.html'],
          ['Glossary', 'glossary.html']
        ]
      ],
      featured: { title: 'Our commitments', line: 'What the licence and the statutes guarantee, clause by clause.', href: 'trust.html' }
    },
    {
      id: 'adopt',
      label: 'Adopt',
      hub: 'developers.html',
      purpose: 'Put your project under the licence, or propose it to a project you contribute to.',
      columns: [
        [
          ['Adopt the licence', 'developers.html'],
          ['Adopt in five steps', 'for-maintainers.html'],
          ['The adoption pull request', 'for-maintainers.html#pull-request'],
          ['Waivers you can grant', LIVE + '/docs/waivers'],
          ['Leaving the licence', LIVE + '/docs/quit']
        ],
        [
          ['Propose it to your project', 'for-contributors.html'],
          ['Your copyright and recognition', LIVE + '/docs/contributors'],
          ['Badges and the README card', 'brand.html'],
          ['The dashboard guide', LIVE + '/docs/guide/maintainers']
        ]
      ],
      featured: { title: 'See an adoption pull request', line: 'A made-up example: the files it changes, nothing else.', href: 'for-maintainers.html#pull-request' }
    },
    {
      id: 'companies',
      label: 'Companies',
      hub: 'for-companies.html',
      purpose: 'For organisations that use Purpose Source software: who pays, what it costs, what you get.',
      columns: [
        [
          ['Coverage explained', 'for-companies.html'],
          ['Do I need to pay?', 'for-companies-check.html'],
          ['Prices', 'pricing.html'],
          ['What you buy', LIVE + '/pricing/details'],
          ['Fee schedule v1', LIVE + '/pricing/schedule']
        ],
        [
          ['Procurement and legal pack', LIVE + '/docs/ospo-legal-pack'],
          ['Email for your purchasing team', 'for-companies.html#purchasing-email'],
          ['How coverage is decided', 'coverage.html'],
          ['Covered organisations', 'registry-organisations.html']
        ]
      ],
      featured: { title: 'Do I need to pay?', line: 'Four questions. Nothing is stored.', href: 'for-companies-check.html' }
    },
    {
      id: 'registry',
      label: 'Registry',
      hub: 'registry.html',
      purpose: 'Public records of covered software, coverage and certificates. Check any of them yourself.',
      columns: [
        [
          ['Find a repository', 'registry.html'],
          ['Covered organisations', 'registry-organisations.html'],
          ['Waivers', 'waivers.html'],
          ['How the registry works', 'registry-about.html']
        ],
        [
          ['Verify a certificate', 'verify.html'],
          ['Certificates', 'trust-certificates.html'],
          ['Keys and transparency log', 'trust-keys.html'],
          ['Public counts', 'stats.html'],
          ['Public API', LIVE + '/docs/api'],
          ['Report a problem with a record', 'report.html']
        ]
      ],
      featured: { title: 'Verify a certificate', line: 'In your browser, offline too.', href: 'verify.html' }
    },
    {
      id: 'money',
      label: 'Money',
      hub: 'trust-money.html',
      purpose: 'Where the fees go, under which caps, and the records that show it.',
      columns: [
        [
          ['Where the money goes', 'trust-money.html'],
          ['What money cannot buy', 'independence.html'],
          ['Causes and the Recipient List', 'causes.html'],
          ['Allocation rules and versions', 'trust-algorithms.html']
        ],
        [
          ['Public ledger, month by month', 'transparency.html'],
          ['Running-cost supporters', 'transparency.html#cost-support'],
          ['Annual reports', 'trust-annual-transparency.html']
        ]
      ],
      featured: { title: 'The public ledger', line: 'Every cost and transfer, monthly.', href: 'transparency.html' }
    },
    {
      id: 'about',
      label: 'About',
      hub: 'about.html',
      purpose: 'Who runs Purpose Source, the rules we work under, and how to reach us.',
      columns: [
        [
          ['How it works', 'how-it-works.html'],
          ['About the Association', 'about.html'],
          ['Our commitments', 'trust.html'],
          ['How decisions are made', 'about-governance.html'],
          ['Statutes', LIVE + '/constitution'],
          ['Decisions and votes', 'voting.html']
        ],
        [
          ['Public records, year by year', 'trust-documents.html'],
          ['What we can never do', 'trust-never.html'],
          ['If the activity stops', 'trust-wind-down.html'],
          ['News', 'news.html'],
          ['Take part', 'take-part.html'],
          ['Contact', 'contact.html']
        ]
      ],
      featured: { title: 'What we can never do', line: 'Each limit, with the article that holds it.', href: 'trust-never.html' }
    }
  ];

  /* The quiet utility link at the right of the header (no button, no pill). */
  var UTILITY = { label: 'Verify', href: 'verify.html', icon: 'seal' };

  /* Two text links pinned at the bottom of the phone menu. */
  var PHONE_LINKS = [
    ['Verify a certificate', 'verify.html', 'seal'],
    ['Do I need to pay?', 'for-companies-check.html', 'check']
  ];

  /* ---------------------------------------------------------------- the footer */
  var FOOTER = {
    identity: [
      'Purpose Source Association · Verein under Art. 60 ff. ZGB · seat Aarau, Switzerland · commercial-register entry pending publication',
      'Altstadtbüro, Zollrain 2, 5000 Aarau, Switzerland'
    ],
    /* Six short columns that mirror the menu (the headings are the sitemap's section names). */
    columns: [
      ['Licence', [['The licence', 'license.html'], ['Full text', LIVE + '/license/PurposeSource-1.0'], ['Compare', 'compare.html'], ['Glossary', 'glossary.html']]],
      ['Adopt', [['Adopt in five steps', 'for-maintainers.html'], ['For contributors', 'for-contributors.html'], ['Waivers', 'waivers.html'], ['Leaving', LIVE + '/docs/quit']]],
      ['Companies', [['Do I need to pay?', 'for-companies-check.html'], ['Prices', 'pricing.html'], ['What you buy', LIVE + '/pricing/details'], ['Procurement pack', LIVE + '/docs/ospo-legal-pack']]],
      ['Registry', [['Find a repository', 'registry.html'], ['Verify a certificate', 'verify.html'], ['Report a problem', 'report.html'], ['Public API', LIVE + '/docs/api']]],
      ['Money', [['Where the money goes', 'trust-money.html'], ['Public ledger', 'transparency.html'], ['Causes', 'causes.html'], ['Annual reports', 'trust-annual-transparency.html']]],
      ['About', [['About the Association', 'about.html'], ['Statutes', LIVE + '/constitution'], ['News', 'news.html'], ['Contact', 'contact.html']]]
    ],
    /* Kept visible because the payment provider's website review needs these links. */
    copyright: '© 2026 Purpose Source Association',
    legal: [
      ['Legal notice', LIVE + '/legal/imprint'],
      ['Privacy', LIVE + '/legal/privacy'],
      ['Terms', LIVE + '/legal/terms'],
      ['Refunds', LIVE + '/legal/refunds'],
      ['Entitlement terms', LIVE + '/legal/entitlement-terms'],
      ['Licence', 'license.html'],
      ['Name, logos and badges', 'brand.html'],
      ['All pages', 'learn.html']
    ],
    lines: [
      'The Purpose Source License is source-available; it is not OSI-approved.',
      'No cookies while you browse. No analytics. Code Apache-2.0; narrative pages CC BY-ND 4.0.'
    ]
  };

  /* ---------------------------------------------------------------- icons */
  /* Our own icon set (24-unit grid, 1.6 stroke), plus copy, external, chevron and close. */
  var ICONS = {
    'arrow-right': 'M5 12h14M13 6l6 6-6 6',
    external: 'M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5',
    chevron: 'M6 9l6 6 6-6',
    close: 'M6 6l12 12M18 6L6 18',
    menu: 'M4 7h16M4 12h16M4 17h16',
    seal: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM8.5 12l2.5 2.5 4.5-5',
    check: 'M5 12l4 4L19 6',
    copy: 'M9 9h11v11H9zM5 15H4V4h11v1',
    book: 'M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 5v16M8 7h7'
  };

  function icon(name, cls) {
    return '<svg class="icon' + (cls ? ' ' + cls : '') + '" viewBox="0 0 24 24" width="1em" height="1em" fill="none" ' +
      'stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ' +
      'focusable="false"><path d="' + ICONS[name] + '"/></svg>';
  }

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function isLive(href) { return /^https?:\/\//.test(href); }

  /* The file name of the page being shown ('index.html' for a folder address). */
  function currentFile() {
    var p = decodeURIComponent(location.pathname);
    var f = p.slice(p.lastIndexOf('/') + 1);
    return f || 'index.html';
  }

  function isCurrentPage(href) {
    return !isLive(href) && href.indexOf('#') === -1 && href === currentFile();
  }

  function link(label, href, cls) {
    var live = isLive(href);
    return '<a' + (cls ? ' class="' + cls + '"' : '') + ' href="' + esc(href) + '"' +
      (isCurrentPage(href) ? ' aria-current="page"' : '') + '>' + esc(label) +
      (live ? '⁠' + icon('external', 'ext') + '<span class="vh"> (live site)</span>' : '') + '</a>';
  }

  /* ---------------------------------------------------------------- theme */
  var THEME_KEY = 'ps-prototype-theme';

  function storedTheme() {
    try { return localStorage.getItem(THEME_KEY) || 'auto'; } catch (e) { return 'auto'; }
  }

  function applyTheme(value) {
    var root = document.documentElement;
    if (value === 'light' || value === 'dark') root.setAttribute('data-theme', value);
    else root.removeAttribute('data-theme');
  }

  function saveTheme(value) {
    try {
      if (value === 'auto') localStorage.removeItem(THEME_KEY);
      else localStorage.setItem(THEME_KEY, value);
    } catch (e) { /* private window or blocked storage: the choice lasts for this page only */ }
  }

  /* Applied at once, before the page paints, so the theme never flashes. */
  applyTheme(storedTheme());

  /* ---------------------------------------------------------------- header */
  function brandHtml() {
    return '<a class="brand" href="index.html" aria-label="Purpose Source, home">' +
      '<img class="mark-light" src="assets/brand/purpose-source-mark.svg" alt="" width="37" height="24">' +
      '<img class="mark-dark" src="assets/brand/purpose-source-mark-dark.svg" alt="" width="37" height="24">' +
      '<span>Purpose Source</span></a>';
  }

  function panelHtml(item, id) {
    var cols = item.columns.map(function (col) {
      return '<ul>' + col.map(function (l) { return '<li>' + link(l[0], l[1]) + '</li>'; }).join('') + '</ul>';
    }).join('');
    var f = item.featured;
    return '<div class="panel" id="' + id + '" hidden><div class="frame panel-inner">' +
      '<div class="panel-main"><p class="panel-purpose">' + esc(item.purpose) + '</p>' +
      '<div class="panel-cols">' + cols + '</div></div>' +
      '<div class="panel-side"><a class="panel-featured" href="' + esc(f.href) + '">' +
      '<span class="panel-featured-title">' + esc(f.title) + '⁠' + icon('arrow-right') + '</span>' +
      '<span class="panel-featured-line">' + esc(f.line) + '</span></a></div>' +
      '</div></div>';
  }

  function phoneMenuHtml(section) {
    var rows = MENU.map(function (item) {
      var id = 'phone-' + item.id;
      var seen = {};
      var links = [];
      item.columns.forEach(function (col) {
        col.forEach(function (l) { if (!seen[l[1]]) { seen[l[1]] = true; links.push('<li>' + link(l[0], l[1]) + '</li>'); } });
      });
      if (!seen[item.featured.href]) {
        links.push('<li class="featured-row">' + link(item.featured.title, item.featured.href) + '</li>');
      }
      var current = item.id === section;
      return '<li><button type="button" class="phone-row' + (current ? ' is-current' : '') + '" aria-expanded="' +
        (current ? 'true' : 'false') + '" aria-controls="' + id + '">' + esc(item.label) +
        (current ? '<span class="vh"> (current section)</span>' : '') + icon('chevron', 'chev') + '</button>' +
        '<ul class="phone-sub" id="' + id + '"' + (current ? '' : ' hidden') + '>' + links.join('') + '</ul></li>';
    }).join('');
    var extra = PHONE_LINKS.map(function (l) {
      return '<li><a href="' + esc(l[1]) + '">' + icon(l[2]) + esc(l[0]) + '</a></li>';
    }).join('');
    return '<div class="phone-menu" id="phone-menu" role="dialog" aria-modal="true" aria-label="Menu" hidden>' +
      '<div class="frame phone-bar">' + brandHtml() +
      '<button type="button" class="close-button">' + icon('close') + '<span>Close</span></button></div>' +
      '<nav class="frame phone-nav" aria-label="Menu"><ul class="phone-list">' + rows + '</ul>' +
      '<ul class="phone-extra">' + extra + '</ul></nav></div>';
  }

  function drawHeader() {
    var host = document.getElementById('site-header');
    if (!host) return;
    var section = document.body.getAttribute('data-section') || '';
    var items = MENU.map(function (item) {
      var id = 'panel-' + item.id;
      var current = item.id === section;
      return '<li><button type="button" class="nav-button' + (current ? ' is-current' : '') +
        '" aria-expanded="false" aria-controls="' + id + '">' + esc(item.label) +
        (current ? '<span class="vh"> (current section)</span>' : '') + icon('chevron', 'chev') + '</button>' +
        panelHtml(item, id) + '</li>';
    }).join('');
    host.innerHTML =
      '<div class="frame header-bar">' + brandHtml() +
      '<nav class="nav" aria-label="Main"><ul class="nav-list">' + items + '</ul></nav>' +
      '<a class="utility" href="' + UTILITY.href + '"' + (isCurrentPage(UTILITY.href) ? ' aria-current="page"' : '') + '>' +
      icon(UTILITY.icon) + '<span class="utility-label">' + esc(UTILITY.label) + '</span></a>' +
      '<button type="button" class="menu-button" aria-expanded="false" aria-controls="phone-menu">' +
      icon('menu') + '<span>Menu</span></button>' +
      '</div>' + phoneMenuHtml(section);
    wireDesktopMenu(host);
    wirePhoneMenu(host);
  }

  /* Disclosure buttons: click, Enter or Space opens; Esc and a click outside close; focus
     returns to the item on Esc; one panel open at a time; nothing opens on hover. */
  function wireDesktopMenu(host) {
    var buttons = Array.prototype.slice.call(host.querySelectorAll('.nav-button'));
    function setOpen(button, open) {
      button.setAttribute('aria-expanded', open ? 'true' : 'false');
      var panel = document.getElementById(button.getAttribute('aria-controls'));
      if (panel) panel.hidden = !open;
    }
    function openButton() { return host.querySelector('.nav-button[aria-expanded="true"]'); }
    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        var willOpen = button.getAttribute('aria-expanded') !== 'true';
        buttons.forEach(function (b) { if (b !== button) setOpen(b, false); });
        setOpen(button, willOpen);
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      var b = openButton();
      if (b) { setOpen(b, false); b.focus(); }
    });
    document.addEventListener('click', function (e) {
      var b = openButton();
      if (b && !b.parentNode.contains(e.target)) setOpen(b, false);
    });
    document.addEventListener('focusin', function (e) {
      var b = openButton();
      if (b && !b.parentNode.contains(e.target)) setOpen(b, false);
    });
  }

  function wirePhoneMenu(host) {
    var menu = host.querySelector('#phone-menu');
    var openBtn = host.querySelector('.menu-button');
    var closeBtn = host.querySelector('.close-button');
    if (!menu || !openBtn || !closeBtn) return;
    function open() {
      menu.hidden = false;
      openBtn.setAttribute('aria-expanded', 'true');
      document.documentElement.classList.add('menu-open');
      closeBtn.focus();
    }
    function close(returnFocus) {
      if (menu.hidden) return;
      menu.hidden = true;
      openBtn.setAttribute('aria-expanded', 'false');
      document.documentElement.classList.remove('menu-open');
      if (returnFocus) openBtn.focus();
    }
    openBtn.addEventListener('click', open);
    closeBtn.addEventListener('click', function () { close(true); });
    Array.prototype.forEach.call(menu.querySelectorAll('.phone-row'), function (row) {
      row.addEventListener('click', function () {
        var expanded = row.getAttribute('aria-expanded') === 'true';
        row.setAttribute('aria-expanded', expanded ? 'false' : 'true');
        var sub = document.getElementById(row.getAttribute('aria-controls'));
        if (sub) sub.hidden = expanded;
      });
    });
    /* A link to a part of the same page closes the menu so the page can scroll to it. */
    Array.prototype.forEach.call(menu.querySelectorAll('a'), function (a) {
      a.addEventListener('click', function () { close(false); });
    });
    menu.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { e.preventDefault(); close(true); return; }
      if (e.key !== 'Tab') return;
      var focusable = Array.prototype.filter.call(menu.querySelectorAll('a, button'), function (el) {
        return el.offsetParent !== null;
      });
      if (!focusable.length) return;
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });
    if (window.matchMedia) {
      var wide = window.matchMedia('(min-width: 1000px)');
      var onChange = function () { if (wide.matches) close(false); };
      if (wide.addEventListener) wide.addEventListener('change', onChange);
      else if (wide.addListener) wide.addListener(onChange);
    }
  }

  /* ---------------------------------------------------------------- footer */
  function drawFooter() {
    var host = document.getElementById('site-footer');
    if (!host) return;
    var cols = FOOTER.columns.map(function (c) {
      return '<div><h2>' + esc(c[0]) + '</h2><ul>' +
        c[1].map(function (l) { return '<li>' + link(l[0], l[1]) + '</li>'; }).join('') + '</ul></div>';
    }).join('');
    var legal = FOOTER.legal.map(function (l) { return '<li>' + link(l[0], l[1]) + '</li>'; }).join('');
    var lines = FOOTER.lines.map(function (t) { return '<p>' + esc(t) + '</p>'; }).join('');
    host.innerHTML =
      '<div class="frame">' +
      '<div class="footer-identity"><p>' + esc(FOOTER.identity[0]) + '</p><p>' + esc(FOOTER.identity[1]) + '</p></div>' +
      '<nav class="footer-map" aria-label="Site map">' + cols + '</nav>' +
      '<div class="footer-legal"><p>' + esc(FOOTER.copyright) + '</p><ul>' + legal + '</ul></div>' +
      '<div class="footer-small"><div>' + lines + '</div>' +
      '<div class="theme-switch" role="group" aria-label="Colour theme"><span class="theme-label" aria-hidden="true">Theme</span>' +
      '<button type="button" data-theme-value="auto">Auto</button>' +
      '<button type="button" data-theme-value="light">Light</button>' +
      '<button type="button" data-theme-value="dark">Dark</button></div>' +
      '</div></div>';
    wireThemeSwitch(host);
  }

  function wireThemeSwitch(host) {
    var buttons = Array.prototype.slice.call(host.querySelectorAll('[data-theme-value]'));
    function mark(value) {
      buttons.forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-theme-value') === value ? 'true' : 'false'); });
    }
    mark(storedTheme());
    buttons.forEach(function (b) {
      b.addEventListener('click', function () {
        var value = b.getAttribute('data-theme-value');
        applyTheme(value);
        saveTheme(value);
        mark(value);
      });
    });
  }

  /* ---------------------------------------------------------------- copy icons */
  /* <button class="copy" data-copy="text" aria-label="Copy …" hidden></button> on a page
     becomes a working copy icon; it stays hidden when scripting is off. */
  function wireCopyButtons() {
    var live = document.createElement('p');
    live.className = 'vh';
    live.setAttribute('aria-live', 'polite');
    document.body.appendChild(live);
    Array.prototype.forEach.call(document.querySelectorAll('button.copy[data-copy]'), function (button) {
      button.innerHTML = icon('copy');
      button.hidden = false;
      if (!button.getAttribute('title')) button.setAttribute('title', 'Copy');
      var label = button.getAttribute('aria-label') || 'Copy';
      button.addEventListener('click', function () {
        var text = button.getAttribute('data-copy');
        copyText(text, function (ok) {
          button.innerHTML = icon(ok ? 'check' : 'copy');
          button.classList.toggle('is-copied', ok);
          button.setAttribute('aria-label', ok ? 'Copied' : label);
          live.textContent = ok ? 'Copied' : 'Copy failed: select the text instead';
          setTimeout(function () {
            button.innerHTML = icon('copy');
            button.classList.remove('is-copied');
            button.setAttribute('aria-label', label);
          }, 2000);
        });
      });
    });
  }

  function copyText(text, done) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(fallbackCopy(text)); });
    } else {
      done(fallbackCopy(text));
    }
  }

  function fallbackCopy(text) {
    var area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.top = '-1000px';
    document.body.appendChild(area);
    area.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
    document.body.removeChild(area);
    return ok;
  }

  /* ---------------------------------------------------------------- "Why this page" */
  function wireWhyPanel() {
    var details = document.querySelector('.why details');
    if (!details) return;
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && details.open) {
        details.open = false;
        var summary = details.querySelector('summary');
        if (summary) summary.focus();
      }
    });
    document.addEventListener('click', function (e) {
      if (details.open && !details.contains(e.target)) details.open = false;
    });
  }

  /* ---------------------------------------------------------------- page end */
  function addImproveLink() {
    var base = sourceBase();
    if (!base) return;
    var end = document.querySelector('.page-end');
    if (!end) return;
    var p = document.createElement('p');
    /* The not-found page is shown at any address, so it names its own file. */
    var file = document.body.getAttribute('data-page') === '404' ? '404.html' : currentFile();
    p.innerHTML = '<a href="' + esc(base + file) + '">Improve this page' + icon('external', 'ext') +
      '<span class="vh"> (prototype source on GitHub)</span></a>';
    end.appendChild(p);
  }

  /* ---------------------------------------------------------------- not found */
  /* Addresses of the real site map to files here: /for/companies/check → for-companies-check.html. */
  function suggestForNotFound() {
    var box = document.getElementById('nf-suggest');
    if (!box) return;
    var path = decodeURIComponent(location.pathname);
    if (/\.github\.io$/.test(location.hostname)) path = path.replace(/^\/[^/]+/, '');
    path = path.replace(/\.html$/, '').replace(/\/+$/, '');
    if (!path) return;
    var guess = path.replace(/^\//, '').replace(/\//g, '-') + '.html';
    var known = {};
    MENU.forEach(function (item) {
      item.columns.forEach(function (col) { col.forEach(function (l) { if (!isLive(l[1])) known[l[1].split('#')[0]] = l[0]; }); });
    });
    FOOTER.columns.forEach(function (c) { c[1].forEach(function (l) { if (!isLive(l[1])) known[l[1].split('#')[0]] = l[0]; }); });
    if (known[guess]) {
      box.innerHTML = 'You may have typed an address of the real site. In this prototype that page is ' +
        '<a href="' + esc(guess) + '">' + esc(known[guess]) + '</a>.';
      box.hidden = false;
    }
  }

  /* ---------------------------------------------------------------- accordions */
  /* An address that points at an accordion, or at something inside one, opens it: the menu's
     "Files and identifiers" (license.html#files) lands on open content. Without the script the
     browser still lands on the accordion's title, one click from its content. */
  function openTarget(id) {
    if (!id) return;
    var el = document.getElementById(id);
    if (!el) return;
    if (el.tagName === 'DETAILS') el.open = true;
    for (var p = el.parentElement; p; p = p.parentElement) {
      if (p.tagName === 'DETAILS' && !p.open) p.open = true;
    }
  }

  function hashId(hash) {
    try { return decodeURIComponent((hash || '').slice(1)); } catch (e) { return ''; }
  }

  function wireTargets() {
    openTarget(hashId(location.hash));
    window.addEventListener('hashchange', function () { openTarget(hashId(location.hash)); });
    /* A second click on the same link changes no hash, so links are watched too. */
    document.addEventListener('click', function (e) {
      var a = e.target && e.target.closest ? e.target.closest('a[href*="#"]') : null;
      if (!a || !a.hash) return;
      if (a.pathname === location.pathname && a.protocol === location.protocol) openTarget(hashId(a.hash));
    });
  }

  /* ---------------------------------------------------------------- sections rising into view */
  /* Sections that start below the first screen fade and rise a little as they come into view.
     Only this script hides them, and only until they are reached: with JavaScript off, with
     reduced motion, or when printing, every section is simply there. */
  function wireReveal() {
    if (!('IntersectionObserver' in window)) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var fold = window.innerHeight || document.documentElement.clientHeight;
    var pending = Array.prototype.filter.call(
      document.querySelectorAll('.content > .sec, .content > .reveal'),
      function (el) { return el.getBoundingClientRect().top > fold; });
    if (!pending.length) return;
    function show(el) {
      el.classList.add('reveal-in');
      el.classList.remove('reveal-pending');
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { show(entry.target); observer.unobserve(entry.target); }
      });
    }, { rootMargin: '0px 0px -6% 0px' });
    pending.forEach(function (el) { el.classList.add('reveal-pending'); observer.observe(el); });
    window.addEventListener('beforeprint', function () { pending.forEach(show); observer.disconnect(); });
  }

  function ready() {
    drawHeader();
    drawFooter();
    wireCopyButtons();
    wireWhyPanel();
    addImproveLink();
    suggestForNotFound();
    wireTargets();
    wireReveal();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready);
  else ready();
})();
