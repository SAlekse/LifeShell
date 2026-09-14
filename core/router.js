import { events } from './events.js';

export const router = {
  routes: new Map(),
  current: null,

  register(path, handler) {
    this.routes.set(path, handler);
  },

  async navigate(hash) {
    const path = hash || location.hash.slice(1) || '/';
    const handler = this.routes.get(path);
    if (!handler) {
      document.getElementById('view').innerHTML =
        `<div class="card">Маршрут не найден: ${path}</div>`;
      return;
    }
    this.current = path;
    events.emit('route:changed', path);
    await handler(document.getElementById('view'));
    this.updateNav();
  },

  updateNav() {
    document.querySelectorAll('#bottomnav a').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + this.current);
    });
  },

  init() {
    window.addEventListener('hashchange', () => this.navigate());
    this.navigate();
  }
};
