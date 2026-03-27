
import React from 'react'
import GlassCard from './GlassCard'
import { resume } from '../data/resume'
import { COLORS } from '../styles/colors'

export default function Experience() {
    return (
        <GlassCard>
            <h2 style={{ fontSize: 24, marginBottom: 24 }}>Professional Experience</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                {resume.experience.map((job, index) => (
                    <div key={index} style={{ borderLeft: `2px solid ${COLORS.ACCENT_SECONDARY}`, paddingLeft: 24, paddingBottom: 8, position: 'relative' }}>
                        <div style={{ position: 'absolute', left: -7, top: 0, width: 12, height: 12, borderRadius: '50%', backgroundColor: COLORS.ACCENT_PRIMARY }} />
                        <h3 style={{ fontSize: 20, margin: 0, color: COLORS.TEXT_PRIMARY }}>{job.role}</h3>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, flexWrap: 'wrap' }}>
                            <span style={{ fontSize: 16, color: COLORS.ACCENT_PRIMARY, fontWeight: 600 }}>{job.company}</span>
                            <span style={{ fontSize: 14, color: COLORS.TEXT_MUTED }}>{job.period} | {job.location}</span>
                        </div>
                        <ul style={{ paddingLeft: 20, margin: 0, color: COLORS.TEXT_SECONDARY }}>
                            {job.achievements.map((achievement, i) => (
                                <li key={i} style={{ marginBottom: 8, fontSize: 15, lineHeight: 1.5 }}>
                                    {achievement}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </GlassCard>
    )
}
