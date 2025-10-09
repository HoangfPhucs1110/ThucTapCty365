import type { Theme, Todo } from '../types'


const KEY = 'todo-lite-data'
const THEME_KEY = 'todo-lite-theme'


export const loadTodos = (): Todo[] => {
try { return JSON.parse(localStorage.getItem(KEY) || '[]') } catch { return [] }
}
export const saveTodos = (todos: Todo[]) => localStorage.setItem(KEY, JSON.stringify(todos))


export const loadTheme = (): Theme => (localStorage.getItem(THEME_KEY) as Theme) || 'light'
export const saveTheme = (t: Theme) => localStorage.setItem(THEME_KEY, t)