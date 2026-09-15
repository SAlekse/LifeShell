export default {
  id: 'home',
  async mount(view, ctx) {
    view.querySelector('#zone-view').innerHTML = `
      <h1>Life Shell</h1>
      <p style="color:var(--muted);margin-top:-8px">
        Твой центр управления жизнью
      </p>
    `;
    view.querySelector('#zone-inter').innerHTML = `
      ${ctx.ui.card({ title: 'Добро пожаловать', body: 'Модули появятся здесь.' })}
      ${ctx.ui.card({ title: 'Подсказка', body: 'Переключись на вкладку «Бег» снизу.' })}
    `;
  }
};