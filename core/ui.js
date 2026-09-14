export const ui = {
  toast(msg, ms = 2500) {
    const el = document.createElement('div');
    el.className = 'toast';
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), ms);
  },
  loader() {
    return `<div style="text-align:center;padding:40px;color:var(--muted)">Загрузка…</div>`;
  },
  error(msg) {
    return `<div class="card" style="border-left:4px solid #ef4444">
      <b>Ошибка</b><br>${msg}</div>`;
  }
};
