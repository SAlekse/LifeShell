import { storage } from './storage.js';

export const theme = {
  init() {
    const saved = storage.get('theme', 'auto');
    this.apply(saved);
    matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (storage.get('theme') === 'auto') this.apply('auto');
    });
  },
  apply(mode) {
    const real = mode === 'auto'
      ? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      : mode;
    document.documentElement.dataset.theme = real;
    storage.set('theme', mode);
  },
  toggle() {
    const cur = document.documentElement.dataset.theme;
    this.apply(cur === 'dark' ? 'light' : 'dark');
  }
};