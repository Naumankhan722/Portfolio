import React, {useState} from 'react'

export default function CodeEditorMock({
  code = `// Example Express handler\napp.get('/api/ping', (req, res) => {\n  res.json({ pong: true, timestamp: Date.now() })\n})`,
  filename = 'server.js',
  highlightLines = [2],
  dark = true
}) {
  const [copied, setCopied] = useState(false)
  const lines = String(code).split('\n')

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (e) {
      // ignore
    }
  }

  const containerStyle = {
    fontFamily: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, 'Roboto Mono', 'Courier New', monospace",
    background: dark ? '#0b0f14' : '#f6f8fa',
    color: dark ? '#e6eef6' : '#0b0f14',
    borderRadius: 10,
    padding: 12,
    boxShadow: dark ? '0 6px 18px rgba(2,6,23,0.6)' : '0 6px 18px rgba(15,15,15,0.06)'
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
    background: dark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.04)',
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

  return (
    <figure style={containerStyle} role="group" aria-label={`Code snippet: ${filename}`}>
      <div style={headerStyle}>
        <div style={chromeStyle}>
          <div style={{width:10,height:10,background:'#ff5f56',borderRadius:12}} />
          <div style={{width:10,height:10,background:'#ffbd2e',borderRadius:12}} />
          <div style={{width:10,height:10,background:'#27c93f',borderRadius:12}} />
          <div style={{marginLeft:8}} />
          <div style={tabStyle}>{filename}</div>
        </div>
        <div style={{display:'flex', gap:8, alignItems:'center'}}>
          <button onClick={handleCopy} aria-label="Copy code" style={{background:'transparent',border:'none',color:'inherit',cursor:'pointer'}}>
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
      </div>

      <pre style={preStyle}>
        {lines.map((l, i) => {
          const ln = i + 1
          const isHighlighted = highlightLines.includes(ln)
          return (
            <div key={i} style={{background: isHighlighted ? (dark ? 'rgba(97,218,251,0.08)' : 'rgba(97,218,251,0.06)') : 'transparent', padding: '2px 6px', borderRadius:4}}>
              <span style={lineNumberStyle}>{ln}</span>
              <span style={{whiteSpace:'pre'}}>{l || '\u00A0'}</span>
            </div>
          )
        })}
      </pre>
    </figure>
  )
}
