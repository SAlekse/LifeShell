export default {
  id: 'running',
  async mount(view, ctx) {
    view.querySelector('#zone-view').innerHTML = `
      <h1>Бег</h1>
      ${ctx.ui.hero('12.4', 'км за неделю', 'running')}
      ${ctx.ui.progress(12.4, 20, 'running')}
    `;
    view.querySelector('#zone-inter').innerHTML = `
      <div class="chips">
        ${ctx.ui.chip('+5 км')}
        ${ctx.ui.chip('+10 км')}
      </div>
      ${ctx.ui.card({
        accent: 'running',
        title: 'Последний забег',
        body: '5.2 км · 28:14 · вчера'
      })}
      ${ctx.ui.fab('＋')}
    `;
  }
};