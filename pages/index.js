import Link from 'next/link'
import CodeEditorMock from '../components/CodeEditorMock'
import BlurUpImage from '../components/BlurUpImage'
import Sidebar from '../components/Sidebar'

export default function Home() {
  const sample = `// Simple Express ping endpoint\nconst express = require('express')\nconst app = express()\n\napp.get('/api/ping', (req, res) => {\n  res.json({ pong: true, ts: Date.now() })\n})\n\napp.listen(3000)`

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'code', label: 'Code' },
    { id: 'visual', label: 'Visual' }
  ]

  return (
    <div style={{fontFamily:'system-ui, -apple-system, Segoe UI, Roboto, Arial', padding: 24}}>
      <div style={{display:'flex', gap:24}}>
        <Sidebar items={navItems} />

        <main style={{flex:1}}>
          <section id="hero" style={{paddingTop:36}}>
            <h1 style={{fontSize:40, margin:0}}>Hi — I’m Your Name</h1>
            <p style={{fontSize:16, color:'#444'}}>Frontend engineer · Designer · Problem solver</p>
            <div style={{marginTop:16, display:'flex', gap:12}}>
              <Link href="/projects">Projects</Link>
              <Link href="/about">About</Link>
            </div>
          </section>

          <section id="projects" style={{marginTop:48}}>
            <h2 style={{fontSize:20}}>Projects</h2>
            <p style={{color:'#666'}}>A selection of case studies and projects demonstrating full-stack work.</p>
          </section>

          <section id="code" style={{marginTop:36}}>
            <h2 style={{fontSize:20, marginBottom:12}}>Code Snapshot</h2>
            <CodeEditorMock code={sample} filename="server.js" highlightLines={[4]} />
          </section>

          <section id="visual" style={{marginTop:36}}>
            <h2 style={{fontSize:20, marginBottom:12}}>Project Visual (lazy)</h2>
            <BlurUpImage src="/images/hero-sample.jpg" alt="Project screenshot" width={720} height={420} />
            <p style={{fontSize:13, color:'#666', marginTop:8}}>Uses blur-up lazy loading and a subtle reveal.</p>
          </section>
        </main>
      </div>
    </div>
  )
}
