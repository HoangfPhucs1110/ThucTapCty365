import { input, btn, card } from '../styles'
import type { Theme } from '../types'


export function TodoForm({ theme, onAdd }: { theme: Theme; onAdd:(title:string, desc:string)=>void }){
const [title, setTitle] = useState('')
const [desc, setDesc] = useState('')


function add(){
const name = title.trim()
if(!name){ alert('Nhập tiêu đề'); return }
onAdd(name, desc.trim()); setTitle(''); setDesc('')
}


return (
<section style={card(theme)}>
<h3 style={{ margin: '0 0 8px' }}>Thêm công việc</h3>
<div style={{ display: 'grid', gap: 8 }}>
<input value={title} onChange={e=> setTitle(e.target.value)} placeholder='Tiêu đề…' style={input(theme)} />
<textarea value={desc} onChange={e=> setDesc(e.target.value)} placeholder='Mô tả (tuỳ chọn)…' rows={3} style={input(theme)} />
<div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
<button style={{ ...btn(theme), borderColor: '#4f46e5' }} onClick={add}>Thêm</button>
<button style={btn(theme)} onClick={()=> { setTitle(''); setDesc('') }}>Xóa</button>
</div>
</div>
</section>
)
}


import React, { useState } from 'react'