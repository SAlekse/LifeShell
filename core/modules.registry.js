// Реестр модулей. Добавление нового модуля = одна строка.
export const registry = [
  {
    id: 'home',
    title: 'Главная',
    icon: '🏠',
    path: '/',
    entry: () => import('../modules/home/index.js')
  },
  {
    id: 'example',
    title: 'Пример',
    icon: '🧩',
    path: '/example',
    entry: () => import('../modules/example/index.js')
  }
];
