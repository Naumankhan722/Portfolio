
import React from 'react'
import GlassCard from './GlassCard'
import { resume } from '../data/resume'
import { COLORS } from '../styles/colors'

export default function Education() {
    return (
        <GlassCard>
            <h2 style={{ fontSize: 24, marginBottom: 24 }}>Education</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {resume.education.map((edu, index) => (
                    <div key={index} style={{ borderBottom: `1px solid ${COLORS.CARD_BG}`, paddingBottom: 16 }}>
                        <h3 style={{ fontSize: 18, marginBottom: 8, color: COLORS.TEXT_PRIMARY }}>{edu.degree}</h3>
                        <p style={{ fontSize: 16, color: COLORS.ACCENT_PRIMARY, marginBottom: 4 }}>{edu.institution}</p>
                        <p style={{ fontSize: 14, color: COLORS.TEXT_MUTED, marginBottom: 0 }}>{edu.year} | {edu.location}</p>
                    </div>
                ))}
            </div>
        </GlassCard>
    )
}
