import React from 'react'
import useScrollSpy from './useScrollSpy'

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
    color: active ? '#61DAFB' : 'inherit',
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
    <nav aria-label="Section navigation" style={navStyle}>
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
      </ul>
    </nav>
  )
}
