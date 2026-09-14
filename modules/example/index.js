export default {
  id: 'example',
  async mount(view, ctx) {
    view.innerHTML = `
      <h2>Пример модуля</h2>
      <button id="ping">Показать тост</button>
    `;
    view.querySelector('#ping').addEventListener('click', () => {
      ctx.ui.toast('Модуль работает ✅');
    });
  }
};
