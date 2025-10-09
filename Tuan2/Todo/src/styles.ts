import type { Theme } from './types'


export const rootCss = (theme: Theme): React.CSSProperties => ({
minHeight: '100vh',
background: theme==='dark' ? '#0b0b12' : '#fafafa',
color: theme==='dark' ? '#e6e6f0' : '#111',
fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
})


export const headerCss = (_theme: Theme): React.CSSProperties => ({
display: 'flex', alignItems: 'center', justifyContent: 'space-between',
padding: '16px 20px', borderBottom: '1px solid #3a3a3a22', position: 'sticky', top: 0,
background: 'rgba(0,0,0,0.04)', backdropFilter: 'saturate(180%) blur(6px)'
})


export const container: React.CSSProperties = { maxWidth: 900, margin: '20px auto', padding: '0 16px', display: 'grid', gap: 16 }
export const section: React.CSSProperties = { display: 'flex', justifyContent: 'space-between', alignItems: 'center' }


export const input = (theme: Theme): React.CSSProperties => ({
width: '100%', padding: '10px 12px',
border: `1px solid ${theme==='dark' ? '#3a3a3a' : '#d1d5db'}`,
background: theme==='dark' ? '#12121b' : '#fff', color: theme==='dark' ? '#e6e6f0' : '#111',
borderRadius: 10,
})


export const btn = (theme: Theme): React.CSSProperties => ({
padding: '8px 12px', border: `1px solid ${theme==='dark' ? '#3a3a3a' : '#ccc'}`,
background: 'transparent', color: theme==='dark' ? '#e6e6f0' : '#111', borderRadius: 10, cursor: 'pointer'
})


export const btnFilter = (theme: Theme, active: boolean): React.CSSProperties => ({
...btn(theme), fontWeight: active?700:500,
background: active? (theme==='dark' ? '#141427' : '#eef2ff') : 'transparent',
borderColor: active? '#4f46e5' : (theme==='dark' ? '#3a3a3a' : '#ccc')
})


export const pressCss = (theme: Theme): React.CSSProperties => ({
transform: 'scale(0.97)', background: theme==='dark' ? '#141427' : '#f3f4f6'
})


export const card = (theme: Theme): React.CSSProperties => ({
border: `1px solid ${theme==='dark' ? '#2a2a2a' : '#e5e7eb'}`,
background: theme==='dark'? '#0f0f19' : '#fff', borderRadius: 14, padding: 12, display: 'grid', gap: 8
})


export const rowCard = (theme: Theme): React.CSSProperties => ({
...card(theme), display: 'flex', alignItems: 'center', justifyContent: 'space-between'
})