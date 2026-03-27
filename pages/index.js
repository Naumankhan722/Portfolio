import Link from 'next/link'
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'
import Summary from '../components/Summary'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Education from '../components/Education'
import GithubProfile from '../components/GithubProfile'
import { COLORS } from '../styles/colors'

export default function Home() {
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'summary', label: 'Summary' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    // { id: 'github', label: 'GitHub Profile' }
  ]

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Arial', padding: 24, minHeight: '100vh', color: COLORS.TEXT_PRIMARY }}>
      <div style={{ display: 'flex', gap: 24, maxWidth: 1200, margin: '0 auto' }}>
        <Sidebar items={navItems} />
        <main style={{ flex: 1, paddingBottom: 64 }}>
          <Hero />
          <div id="summary" style={{ paddingTop: 36 }}>
            <Summary />
          </div>
          <div id="experience" style={{ paddingTop: 36 }}>
            <Experience />
          </div>
          <div id="skills" style={{ paddingTop: 36 }}>
            <Skills />
          </div>
          <div id="projects" style={{ paddingTop: 36 }}>
            <Projects />
          </div>
          <div id="education" style={{ paddingTop: 36 }}>
            <Education />
          </div>
          {/* <div id="github" style={{ paddingTop: 36 }}>
            <GithubProfile />
          </div> */}
        </main>
      </div>
    </div>
  )
}
