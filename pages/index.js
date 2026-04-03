import Link from 'next/link'
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'
import Summary from '../components/Summary'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Education from '../components/Education'
import GithubProfile from '../components/GithubProfile'
import ImageScrubber from '../components/ImageScrubber'
// import ScrollItem from '../components/ScrollItem'
import CustomCursor from '../components/CustomCursor'
import PretextParagraph from '../components/PretextParagraph'
import { COLORS } from '../styles/colors'

export default function Home() {
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'summary', label: 'Summary' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    // { id: 'github', label: 'GitHub Profile' }
  ]

  const text = "Artificial Intelligence agents are fundamentally reshaping the way we think about software development. By leveraging extensive context windows, neural processing, and autonomous decision-making patterns, these systems are no longer just 'assisting' with code completion; they are actively architecting, writing, and debugging full-stack features. This marks a profound shift from imperative programming by humans to declarative intent-based engineering. Developers describe the 'what' and 'why', while the agent handles the 'how', diving into APIs, exploring layouts, and constructing components piece by piece. Tools like Cursor are demonstrating how seamlessly this paradigm integrates into daily workflows. And as we continue to push boundaries, the focus moves from syntax memorization to system design and prompt orchestration.";

  return (
    <div style={{ cursor: `url('/assets/images/cursor.svg'), auto`, fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Arial', padding: 24, minHeight: '100vh', color: COLORS.TEXT_PRIMARY, position: 'relative' }}>
      <CustomCursor />
      <ImageScrubber />
      <div style={{ display: 'flex', gap: 24, maxWidth: 1200, margin: '0 auto' }}>
        <Sidebar items={navItems} />
        <main style={{ flex: 1, paddingBottom: 64 }}>
          <Hero />
          {/* <div id="video" style={{ paddingTop: 36 }} style={{ paddingTop: 36, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 36 }}>
            <div style={{ background: COLORS.ACCENT_PRIMARY, borderRadius: '18px' }}>
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{ width: '200px', mixBlendMode: 'screen' }}
              >
                <source src="/assets/videos/react-animate.mp4" type="video/mp4" />
              </video>
            </div>
          </div> */}
          <div id='pretext' style={{ paddingTop: 36 }} >
            {/* <ScrollItem id="pretext" title="Pretext Layout"> */}
            {/* <PretextParagraph text={text} /> */}
            {/* </ScrollItem> */}
          </div>
          <div id='summary' style={{ paddingTop: 36 }} >
            {/* <ScrollItem id="summary" title="Summary"> */}
            <Summary />
            {/* </ScrollItem> */}
          </div>
          <div id='skills' style={{ paddingTop: 36 }} >
            {/* <ScrollItem id="skills" title="Skills"> */}
            <Skills />
            {/* </ScrollItem> */}
          </div>
          <div id='experience' style={{ paddingTop: 36 }} >
            {/* <ScrollItem id="experience" title="Experience"> */}
            <Experience />
            {/* </ScrollItem> */}
            <div id="projects" style={{ paddingTop: 36 }} >
              <Projects />
            </div>
          </div>
          <div id='education' style={{ paddingTop: 36 }} >
            {/* <ScrollItem id="education" title="Education"> */}
            <Education />
            {/* </ScrollItem> */}
            {/* <div id="github" style={{ paddingTop: 36 }} style={{ paddingTop: 36 }}>
            <GithubProfile />
          </div> */}
          </div>
        </main>
      </div>
    </div>
  )
}
