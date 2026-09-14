export default {
  id: 'home',
  async mount(view) {
    view.innerHTML = `
      <h2>Добро пожаловать</h2>
      <div class="card">Это оболочка Life Shell.</div>
      <div class="card">Модули появятся здесь.</div>
    `;
  }
};
