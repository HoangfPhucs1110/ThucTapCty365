import React, { useEffect, useMemo, useState } from 'react'
import { container } from '../styles'
import { Toolbar } from '../components/Toolbar'
import { TodoForm } from '../components/TodoForm'
import { TodoItem } from '../components/TodoItem'
import type { Filter, Theme, Todo } from '../types'
import { loadTodos, saveTodos } from '../utils/storage'


export function Home({ theme, onChangeTheme }: { theme: Theme; onChangeTheme: () => void }){
const [todos, setTodos] = useState<Todo[]>(loadTodos())
const [filter, setFilter] = useState<Filter>('all')


useEffect(()=> { saveTodos(todos) }, [todos])


const view = useMemo(()=> {
if(filter==='open') return todos.filter(t=> !t.done)
if(filter==='done') return todos.filter(t=> t.done)
return todos
}, [todos, filter])


function add(title:string, desc:string){
setTodos(prev=> [{ id: crypto.randomUUID(), title, desc, done:false, createdAt: Date.now() }, ...prev])
}
function toggle(id:string){ setTodos(prev=> prev.map(t=> t.id===id? { ...t, done: !t.done } : t)) }
function remove(id:string){ setTodos(prev=> prev.filter(t=> t.id!==id)) }
function save(id:string, title:string, desc:string){ setTodos(prev=> prev.map(t=> t.id===id? { ...t, title, desc } : t)) }
function clearCompleted(){ setTodos(prev=> prev.filter(t=> !t.done)) }


return (
<div className='container' style={container}>
<Toolbar theme={theme} filter={filter} count={view.length} total={todos.length}
onChangeTheme={onChangeTheme}
onChangeFilter={setFilter}
onClearCompleted={clearCompleted}
/>


<TodoForm theme={theme} onAdd={add} />


<div style={{ display:'grid', gap:10 }}>
{view.map(t=> (
<TodoItem key={t.id} theme={theme} t={t}
onToggle={()=> toggle(t.id)}
onDelete={()=> remove(t.id)}
onSave={(title,desc)=> save(t.id, title, desc)}
/>
))}
{view.length===0 && <p style={{ opacity:0.7 }}>Không có công việc phù hợp.</p>}
</div>
</div>
)
}