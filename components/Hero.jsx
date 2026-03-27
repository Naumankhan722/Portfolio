
import React from 'react'
import GlassCard from './GlassCard'
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
                <p style={{ margin: 0 }}>📍 Gujarat, India</p>
                <p style={{ margin: 0 }}>📞 +91 7226883189 | ✉️ naumanpathan722@gmail.com</p>
            </div>
            <div style={{ display: 'flex', gap: 16 }}>
                <a href="https://linkedin.com/in/nauman-pathan" target="_blank" rel="noopener noreferrer" style={{
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
