
import React from 'react'
import GlassCard from './GlassCard'
import { resume } from '../data/resume'
import { COLORS } from '../styles/colors'

export default function Skills() {
    return (
        <GlassCard>
            <h2 style={{ fontSize: 24, marginBottom: 24 }}>Technical Skills</h2>
            <div style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
                <div style={{ width: '49%', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        <h4 style={{ fontSize: 16, marginBottom: 0 }}>Frontend</h4>
                        <p style={{ alignItems: 'left', marginTop: 0 }}>
                            <img height={48} src="https://skillicons.dev/icons?i=html,js,ts,react,vue,nextjs" alt="Frontend" />
                            <img height={48} src="https://skillicons.dev/icons?i=css,tailwind,materialui,sass" alt="Frontend" />
                        </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        <h4 style={{ fontSize: 16, marginBottom: 0 }}>Backend</h4>
                        <p style={{ alignItems: 'left', marginTop: 0 }}>
                            <img height={48} src="https://skillicons.dev/icons?i=nodejs,express,redux,jest" alt="Backend" />
                        </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        <h4 style={{ fontSize: 16, marginBottom: 0 }}>Databases</h4>
                        <p style={{ alignItems: 'left', marginTop: 0 }}>
                            <img height={48} src="https://skillicons.dev/icons?i=mongodb,mysql,postgres,firebase" alt="Databases" />
                        </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        <h4 style={{ fontSize: 16, marginBottom: 0 }}>DevOps</h4>
                        <p style={{ alignItems: 'left', marginTop: 0 }}>
                            <img height={48} src="https://skillicons.dev/icons?i=docker,nginx,aws" alt="DevOps" />
                        </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        <h4 style={{ fontSize: 16, marginBottom: 0 }}>Operating Systems</h4>
                        <p style={{ alignItems: 'left', marginTop: 0 }}>
                            <img height={48} src="https://skillicons.dev/icons?i=windows,ubuntu" alt="Operating Systems" />
                        </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        <h4 style={{ fontSize: 16, marginBottom: 0 }}>Tools</h4>
                        <p style={{ alignItems: 'left', marginTop: 0 }}>
                            <img height={48} src="https://skillicons.dev/icons?i=git,github,gitlab,vscode,postman" alt="Tools" />
                        </p>
                    </div>
                </div>
                <div style={{ width: '49%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
                    {Object.entries(resume.skills).map(([category, skills]) => (
                        <div key={category} style={{
                            background: COLORS.CARD_BG,
                            borderRadius: 8,
                            padding: 16,
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <h3 style={{ fontSize: 18, marginBottom: 12, color: COLORS.ACCENT_PRIMARY }}>{category.replace(/([A-Z])/g, " $1")}</h3>
                            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                                {skills.map((skill, index) => (
                                    <li key={index} style={{
                                        marginBottom: 6,
                                        display: 'flex',
                                        alignItems: 'center',
                                        fontSize: 14,
                                        color: COLORS.TEXT_SECONDARY
                                    }}>
                                        <span style={{
                                            width: 6,
                                            height: 6,
                                            borderRadius: '50%',
                                            backgroundColor: COLORS.ACCENT_PRIMARY,
                                            marginRight: 8
                                        }} />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </GlassCard>
    )
}
