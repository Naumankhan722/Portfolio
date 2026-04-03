
import React from 'react'
import GlassCard from './GlassCard'
import PretextParagraph from './PretextParagraph'
import { COLORS } from '../styles/colors'

export default function Hero() {
    return (
        <GlassCard id="hero">
            <h1 style={{ fontSize: 48, marginBottom: 16, fontWeight: 700, color: COLORS.TEXT_PRIMARY }}>
                NAUMAN KHAN PATHAN
            </h1>
            <h2 style={{ fontSize: 24, marginBottom: 24, color: COLORS.ACCENT_PRIMARY, fontWeight: 500 }}>
                Full Stack Software Developer | MERN Stack Specialist
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 16, color: COLORS.TEXT_SECONDARY, marginBottom: 24 }}>
                <p style={{ margin: 0 }}>📍 <a href='https://maps.app.goo.gl/9k35862773564959' target="_blank" rel="noopener noreferrer" style={{ color: COLORS.TEXT_SECONDARY }}>Ahmedabad, Gujarat, India</a></p>
                <p style={{ margin: 0 }}>📞 <a href='tel:+917226883189' style={{ color: COLORS.TEXT_SECONDARY }}>+91 7226883189</a>
                    | ✉️ <a href='mailto:naumanpathan722@gmail.com' style={{ color: COLORS.TEXT_SECONDARY }}>naumanpathan722@gmail.com</a></p>
            </div>
            <div style={{ display: 'flex', gap: 16 }}>
                <a href="https://www.linkedin.com/in/naumankhan-pathan-31976b203/" target="_blank" rel="noopener noreferrer" style={{
                    padding: '10px 20px',
                    backgroundColor: COLORS.ACCENT_PRIMARY,
                    color: 'white',
                    borderRadius: 4,
                    textDecoration: 'none',
                    fontWeight: 600
                }}>
                    LinkedIn
                </a>
                <a href="https://github.com/Naumankhan722" target="_blank" rel="noopener noreferrer" style={{
                    padding: '10px 20px',
                    backgroundColor: COLORS.TEXT_PRIMARY,
                    color: 'white',
                    borderRadius: 4,
                    textDecoration: 'none',
                    fontWeight: 600
                }}>
                    GitHub
                </a>
            </div>
        </GlassCard>
    )
}
