import React from 'react'
import useScrollSpy from './useScrollSpy'
import GlassCard from './GlassCard'
import { COLORS } from '../styles/colors'

export default function Sidebar({ items = [] }) {
  const ids = items.map((i) => i.id)
  const activeId = useScrollSpy(ids)

  const navStyle = {
    width: 200,
    position: 'sticky',
    top: 24,
    alignSelf: 'flex-start'
  }

  const ulStyle = { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }

  const linkStyle = (active) => ({
    display: 'inline-block',
    padding: '6px 8px',
    borderRadius: 6,
    color: active ? COLORS.ACCENT_PRIMARY : 'inherit',
    fontWeight: active ? 600 : 400,
    textDecoration: 'none',
    cursor: 'pointer'
  })

  const handleClick = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav aria-label="Section navigation" className='sideNav' style={navStyle}>
      <GlassCard>
        <ul style={ulStyle}>
          {items.map((item) => {
            const active = activeId === item.id
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleClick(e, item.id)}
                  style={linkStyle(active)}
                  aria-current={active ? 'true' : undefined}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
          <li>
            <div>
              <a href='https://mail.google.com/mail/?view=cm&fs=1&to=naumanpathan722@gmail.com' style={{
                display: 'inline-block',
                padding: '6px 8px',
                borderRadius: 12,
                color: COLORS.TEXT_PRIMARY,
                backgroundColor: COLORS.ACCENT_PRIMARY,
                fontWeight: 600,
                textDecoration: 'none',
                cursor: 'pointer'
              }} target='_blank' rel='noopener noreferrer'>Contact</a>
            </div>
          </li>
        </ul>
      </GlassCard>
    </nav>
  )
}
