import { rowCard, input as inputCss, btn } from '../styles'
import type { Theme, Todo } from '../types'
import React, { useState } from 'react'


export function TodoItem({ theme, t, onToggle, onDelete, onSave }:{
theme: Theme
t: Todo
onToggle: ()=>void
onDelete: ()=>void
onSave: (title:string, desc:string)=>void
}){
const [editing, setEditing] = useState(false)
const [title, setTitle] = useState(t.title)
const [desc, setDesc] = useState(t.desc || '')


function save(){
const name = title.trim(); if(!name){ alert('Tiêu đề trống'); return }
onSave(name, desc.trim()); setEditing(false)
}


return (
<article style={rowCard(theme)}>
<div style={{ display:'flex', gap:12, alignItems:'center', flex:1 }}>
<input type='checkbox' checked={t.done} onChange={onToggle} />
{editing ? (
<div style={{display:'grid', gap:6, flex:1}}>
<input value={title} onChange={e=> setTitle(e.target.value)} style={inputCss(theme)} />
<textarea value={desc} onChange={e=> setDesc(e.target.value)} rows={2} style={inputCss(theme)} />
</div>
) : (
<div>
<div style={{ fontWeight: 600, textDecoration: t.done ? 'line-through' : 'none' }}>{t.title}</div>
<div style={{ opacity: 0.8, fontSize: 13 }}>{t.desc}</div>
</div>
)}
</div>
<div style={{ display:'flex', gap:8 }}>
{editing ? (
<>
<button style={btn(theme)} onClick={save}>Lưu</button>
<button style={btn(theme)} onClick={()=> setEditing(false)}>Huỷ</button>
</>
) : (
<>
<button style={btn(theme)} onClick={()=> setEditing(true)}>Sửa</button>
<button style={btn(theme)} onClick={onDelete}>Xoá</button>
</>
)}
</div>
</article>
)
}