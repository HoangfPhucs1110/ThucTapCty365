import { btn, btnFilter, pressCss, section } from '../styles'
import type { Filter, Theme } from '../types'
import React from 'react'


type Props = {
theme: Theme
filter: Filter
count: number
total: number
onChangeTheme: () => void
onChangeFilter: (f: Filter) => void
onClearCompleted: () => void
}


export function Toolbar({ theme, filter, count, total, onChangeFilter, onClearCompleted }: Props){
const [press, setPress] = React.useState(false)
return (
<div style={section}>
<div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
<span style={{ opacity: 0.8 }}>Bộ lọc:</span>
<button style={btnFilter(theme, filter==='all')} onClick={()=> onChangeFilter('all')}>Tất cả</button>
<button style={btnFilter(theme, filter==='open')} onClick={()=> onChangeFilter('open')}>Chưa xong</button>
<button style={btnFilter(theme, filter==='done')} onClick={()=> onChangeFilter('done')}>Đã xong</button>
<span style={{ opacity: 0.6 }}>|</span>
<button
style={{ ...btn(theme), ...(press? pressCss(theme): {}), transition: 'transform 120ms, background 120ms' }}
onMouseDown={()=> setPress(true)} onMouseUp={()=> setPress(false)} onMouseLeave={()=> setPress(false)}
onClick={onClearCompleted}
>Xóa đã hoàn thành</button>
</div>
<div style={{ opacity: 0.8 }}>{count} việc • Tổng {total}</div>
</div>
)
}