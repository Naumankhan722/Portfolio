import React, { useEffect, useRef, useState } from 'react'
import { COLORS } from '../styles/colors'

export default function CodeEditorMock({
  code: initialCode = `// Example Express handler\napp.get('/api/ping', (req, res) => {\n  res.json({ pong: true, timestamp: Date.now() })\n})`,
  filename = 'server.js',
  highlightLines = [2],
  dark = true,
  edit = false
}) {
  const [copied, setCopied] = useState(false)
  const [code, setCode] = useState(initialCode)
  const lines = String(code).split('\n')

  const handleChange = (e) => {
    setCode(e.target.value)
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (e) {
      // ignore
    }
  }

const textareaRef = useRef(null)

const adjustHeight = () => {
  const el = textareaRef.current
  if (!el) return
  el.style.height = 'auto'
  el.style.height = el.scrollHeight + 'px'
}

useEffect(() => {
  adjustHeight()
}, [code])

  const containerStyle = {
    fontFamily: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, 'Roboto Mono', 'Courier New', monospace",
    background: dark ? COLORS.TEXT_PRIMARY : COLORS.CARD_BG,
    color: dark ? COLORS.BASE_LIGHT : COLORS.TEXT_PRIMARY,
    borderRadius: 10,
    padding: 12,
    boxShadow: dark ? `0 6px 18px ${COLORS.SOFT_SHADOW}` : `0 6px 18px ${COLORS.SOFT_SHADOW}`
  }

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8
  }

  const chromeStyle = {
    display: 'flex',
    gap: 8,
    alignItems: 'center'
  }

  const tabStyle = {
    background: dark ? COLORS.CARD_BG : COLORS.CARD_BORDER,
    padding: '6px 10px',
    borderRadius: 6,
    fontSize: 13
  }

  const preStyle = {
    margin: 0,
    padding: '12px',
    overflow: 'auto',
    fontSize: 13,
    lineHeight: '20px'
  }

  const lineNumberStyle = {
    display: 'inline-block',
    width: 36,
    textAlign: 'right',
    paddingRight: 12,
    userSelect: 'none',
    opacity: 0.5
  }
  const textareaStyle = {
    ...preStyle,
    width: '98%',
    resize: 'none',
    border: 'none',
    background: 'transparent',
    color: 'inherit',
    overflow: 'hidden'
  }
  return (
    <figure style={containerStyle} role="group" aria-label={`Code snippet: ${filename}`}>
      <div style={headerStyle}>
        <div style={chromeStyle}>
          <div style={{ width: 10, height: 10, background: COLORS.MAC_RED, borderRadius: 12 }} />
          <div style={{ width: 10, height: 10, background: COLORS.MAC_YELLOW, borderRadius: 12 }} />
          <div style={{ width: 10, height: 10, background: COLORS.MAC_GREEN, borderRadius: 12 }} />
          <div style={{ marginLeft: 8 }} />
          <div style={tabStyle}>{filename}</div>
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <button onClick={handleCopy} aria-label="Copy code" style={{ background: 'transparent', border: 'none', color: 'inherit', cursor: 'pointer' }}>
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
      </div>

      {edit ? (
        <textarea
          ref={textareaRef}
          id={`code-editor-${filename}`}
          style={textareaStyle}
          value={code}
          onChange={handleChange}
          aria-label={`Editable code snippet: ${filename}`}
        />
      ) : (
        <pre style={preStyle}>
          {lines.map((l, i) => {
            const ln = i + 1
            const isHighlighted = highlightLines.includes(ln)
            return (
              <div key={i} style={{ background: isHighlighted ? (dark ? COLORS.SOFT_SHADOW : COLORS.SOFT_SHADOW) : 'transparent', padding: '2px 6px', borderRadius: 4 }}>
                <span style={lineNumberStyle}>{ln}</span>
                <span style={{ whiteSpace: 'pre' }}>{l || '\u00A0'}</span>
              </div>
            )
          })}
        </pre>
      )}
    </figure>
  )
}
