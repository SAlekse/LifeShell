import { storage } from './storage.js';

// Позже заменишь на свой URL веб-приложения Apps Script
const API_URL = ''; // например: 'https://script.google.com/macros/s/XXX/exec'
const TOKEN = '';   // секретный токен

export const api = {
  async call(action, params = {}) {
    if (!API_URL) throw new Error('API_URL не настроен');
    const body = { action, token: TOKEN, ...params };
    const res = await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'text/plain;charset=utf-8' }
    });
    const json = await res.json();
    if (!json.ok) throw new Error(json.error || 'API error');
    return json.data;
  },

  async get(sheet, params) { return this.call('get', { sheet, ...params }); },
  async post(sheet, data) { return this.call('post', { sheet, data }); },
  async update(sheet, id, data) { return this.call('update', { sheet, id, data }); },
  async remove(sheet, id) { return this.call('remove', { sheet, id }); }
};
