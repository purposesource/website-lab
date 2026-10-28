/*
 * Registry directory (registry.html only): search, filter chips and sorting.
 *
 * The page lists every row without JavaScript. This script only narrows and sorts them.
 * The choice lives in the address (?q=…&state=…&lang=…&sort=…), so a filtered list can be
 * shared as a link. Nothing is stored and nothing is sent.
 */
(function () {
  'use strict';

  function init() {
    var table = document.getElementById('dir-table');
    if (!table) return;
    var tbody = table.tBodies[0];
    var rows = Array.prototype.slice.call(tbody.rows);
    var searchWrap = document.getElementById('dir-search-wrap');
    var search = document.getElementById('dir-search');
    var countEl = document.getElementById('dir-count');
    var emptyEl = document.getElementById('dir-empty');

    var params = new URLSearchParams(location.search);
    var state = {
      q: params.get('q') || '',
      state: params.get('state') || '',
      lang: params.get('lang') || '',
      sort: params.get('sort') || 'adopted'
    };

    if (searchWrap) searchWrap.hidden = false;
    if (search) search.value = state.q;

    /* Column headings with data-sort become sort buttons. */
    var sortHeads = Array.prototype.slice.call(table.querySelectorAll('th[data-sort]'));
    sortHeads.forEach(function (th) {
      var label = th.textContent;
      th.innerHTML = '<button type="button" class="sort">' + label +
        '<svg class="icon" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.6" ' +
        'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' +
        '<path d="M8 4v16M4 8l4-4 4 4M16 20V4M20 16l-4 4-4-4"/></svg></button>';
      th.querySelector('button').addEventListener('click', function () {
        state.sort = th.getAttribute('data-sort');
        apply();
      });
    });

    function query() {
      var out = [];
      if (state.q) out.push('q=' + encodeURIComponent(state.q));
      if (state.state) out.push('state=' + encodeURIComponent(state.state));
      if (state.lang) out.push('lang=' + encodeURIComponent(state.lang));
      if (state.sort && state.sort !== 'adopted') out.push('sort=' + encodeURIComponent(state.sort));
      return out.length ? '?' + out.join('&') : '';
    }

    /* Chip links keep the other choices, so state and language combine. */
    function updateChips() {
      Array.prototype.forEach.call(document.querySelectorAll('.filters a[data-filter]'), function (a) {
        var key = a.getAttribute('data-filter');
        var value = a.getAttribute('data-value');
        var next = { q: state.q, state: state.state, lang: state.lang, sort: state.sort };
        next[key] = value;
        var saved = state;
        state = next;
        a.setAttribute('href', 'registry.html' + query());
        state = saved;
        if ((state[key] || '') === value) a.setAttribute('aria-current', 'true');
        else a.removeAttribute('aria-current');
      });
    }

    function apply() {
      var needle = state.q.trim().toLowerCase();
      var shown = 0;
      rows.forEach(function (row) {
        var langs = ' ' + (row.getAttribute('data-lang') || '') + ' ';
        var ok = (!state.state || row.getAttribute('data-state') === state.state) &&
          (!state.lang || langs.indexOf(' ' + state.lang + ' ') !== -1) &&
          (!needle || (row.getAttribute('data-search') || '').indexOf(needle) !== -1);
        row.hidden = !ok;
        if (ok) shown += 1;
      });

      var key = state.sort === 'name' ? 'data-name' : 'data-adopted';
      var sorted = rows.slice().sort(function (a, b) {
        var x = a.getAttribute(key);
        var y = b.getAttribute(key);
        if (state.sort === 'name') return x.localeCompare(y);
        return x < y ? 1 : x > y ? -1 : 0;
      });
      sorted.forEach(function (row) { tbody.appendChild(row); });
      sortHeads.forEach(function (th) {
        if (th.getAttribute('data-sort') === state.sort) {
          th.setAttribute('aria-sort', state.sort === 'name' ? 'ascending' : 'descending');
        } else {
          th.removeAttribute('aria-sort');
        }
      });
      var caption = table.querySelector('caption');
      if (caption) caption.textContent = 'Sample records, ' + (state.sort === 'name' ? 'by name' : 'most recently adopted first');

      var total = rows.length;
      countEl.textContent = shown === total
        ? total + ' repositories, all shown.'
        : shown + ' of ' + total + ' repositories shown. ';
      if (shown !== total) {
        var clear = document.createElement('a');
        clear.href = 'registry.html';
        clear.textContent = 'Clear';
        countEl.appendChild(clear);
      }
      emptyEl.hidden = shown !== 0;
      updateChips();
      try {
        history.replaceState(null, '', 'registry.html' + query());
      } catch (e) { /* some browsers refuse this on file:// addresses; the list still works */ }
    }

    if (search) {
      search.addEventListener('input', function () {
        state.q = search.value;
        apply();
      });
    }

    apply();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
