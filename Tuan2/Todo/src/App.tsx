import { useEffect, useState } from 'react'
import { headerCss, rootCss, btn } from './styles'
import type { Theme } from './types'
import { Home } from './pages/Home'
import { loadTheme, saveTheme } from './utils/storage'


export default function App(){
const [theme, setTheme] = useState<Theme>(loadTheme())


useEffect(()=>{
saveTheme(theme)
document.body.style.background = theme==='dark'? '#0b0b12' : '#fafafa'
document.body.style.color = theme==='dark'? '#e6e6f0' : '#111'
},[theme])


const toggleTheme = () => setTheme(theme==='dark'?'light':'dark')


return (
<div style={rootCss(theme)}>
<header style={headerCss(theme)}>
<h1 style={{ margin:0, fontSize:22 }}>📝 Todo Lite</h1>
<button onClick={toggleTheme} style={btn(theme)}>Theme: {theme}</button>
</header>


<Home theme={theme} onChangeTheme={toggleTheme} />
</div>
)
}