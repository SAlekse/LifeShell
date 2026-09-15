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

  // Подгружаем все модули из реестра
  const modules = [];
  for (const m of registry) {
    const mod = (await m.entry()).default;
    modules.push({ ...m, mod });
  }

  // Нижняя навигация
  const nav = document.getElementById('bottomnav');
  nav.innerHTML = modules.map(m =>
    `<a href="#${m.path}">
       <span class="icon">${m.icon}</span>${m.title}
     </a>`
  ).join('');

  // Регистрация маршрутов
  for (const m of modules) {
    router.register(m.path, async (view) => {
      // Гарантируем наличие двух зон и очищаем их
      if (!view.querySelector('#zone-view')) {
        view.innerHTML = `
          <section class="zone-view"  id="zone-view"></section>
          <section class="zone-inter" id="zone-inter"></section>`;
      } else {
        view.querySelector('#zone-view').innerHTML  = '';
        view.querySelector('#zone-inter').innerHTML = '';
      }
      view.dataset.accent = m.accent || 'default';
      await m.mod.mount(view, ctx);
    });
  }

  router.init();
}

bootstrap().catch(e => {
  document.getElementById('view').innerHTML = ui.error(e.message);
});