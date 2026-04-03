
import React from 'react'
import GlassCard from './GlassCard'
import PretextParagraph from './PretextParagraph'
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
                        <PretextParagraph text={edu.institution} fontSize={16} lineHeight={24} color={COLORS.ACCENT_PRIMARY} style={{ marginBottom: 4 }} />
                        <PretextParagraph text={`${edu.year} | ${edu.location}`} fontSize={14} lineHeight={20} color={COLORS.TEXT_MUTED} style={{ marginBottom: 0 }} />
                    </div>
                ))}
            </div>
        </GlassCard>
    )
}
