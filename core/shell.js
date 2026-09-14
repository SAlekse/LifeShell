import { router } from './router.js';
import { theme } from './theme.js';
import { registry } from './modules.registry.js';
import { api } from './api.js';
import { storage } from './storage.js';
import { events } from './events.js';
import { ui } from './ui.js';

const ctx = { api, storage, events, ui, theme };

async function bootstrap() {
  theme.init();
  document.getElementById('themeToggle')
    .addEventListener('click', () => theme.toggle());

  // Регистрация маршрутов из реестра
  for (const m of registry) {
    const mod = (await m.entry()).default;
    router.register(m.path, async (view) => {
      view.innerHTML = '';
      await mod.mount(view, ctx);
    });
  }

  // Навигация
  const nav = document.getElementById('bottomnav');
  nav.innerHTML = registry.map(m =>
    `<a href="#${m.path}"><span class="icon">${m.icon}</span>${m.title}</a>`
  ).join('');

  router.init();
}

bootstrap().catch(e => {
  document.getElementById('view').innerHTML = ui.error(e.message);
});
