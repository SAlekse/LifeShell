export const ui = {
  /* --- Уведомления --- */
  toast(msg, ms = 2500) {
    const el = document.createElement('div');
    el.className = 'toast';
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), ms);
  },

  /* --- Заглушки --- */
  loader() {
    return `<div style="text-align:center;padding:40px;color:var(--muted)">Загрузка…</div>`;
  },
  error(msg) {
    return `<div class="card" style="border-color:rgba(239,68,68,.4)">
      <b>Ошибка</b><br>${msg}</div>`;
  },

  /* --- Карточка с тематической рамкой --- */
  card({ accent = 'default', title = '', body = '' } = {}) {
    return `<div class="card card--${accent}">
      ${title ? `<div class="card__title">${title}</div>` : ''}
      ${body  ? `<div class="card__body">${body}</div>`  : ''}
    </div>`;
  },

  /* --- Крупная метрика (Hero) --- */
  hero(value, label, accent = 'default') {
    return `<div class="hero hero--${accent}">
      <div class="hero-metric">${value}</div>
      <div class="hero-label">${label}</div>
    </div>`;
  },

  /* --- Полоса прогресса с автоцветом по уровню --- */
  progress(value, max, accent = 'default') {
    const pct = Math.min(100, Math.max(0, Math.round((value / max) * 100)));
    const level = pct < 75 ? 'ok' : pct < 90 ? 'warn' : 'bad';
    return `<div class="progress">
      <div class="progress__fill" data-level="${level}" style="width:${pct}%"></div>
    </div>`;
  },

  /* --- Быстрые чипы для 1-тап действий --- */
  chip(label, variant = 'default') {
    return `<button class="chip chip--${variant}">${label}</button>`;
  },

  /* --- Плавающая кнопка действия --- */
  fab(icon) {
    return `<button class="fab">${icon}</button>`;
  }
};