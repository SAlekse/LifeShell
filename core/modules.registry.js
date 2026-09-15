// Реестр модулей. Добавление нового модуля = одна строка.
// accent = тема карточек: running | finance | sleep | default
export const registry = [
  {
    id: 'home',
    title: 'Главная',
    icon: '🏠',
    path: '/',
    accent: 'default',
    entry: () => import('../modules/home/index.js')
  },
  {
    id: 'running',
    title: 'Бег',
    icon: '🏃',
    path: '/running',
    accent: 'running',
    entry: () => import('../modules/running/index.js')
  }
];