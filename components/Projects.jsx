import React from 'react';
import GlassCard from './GlassCard';
import { resume } from '../data/resume';
import { COLORS } from '../styles/colors'

export default function Projects() {
  return (
    <GlassCard>
      <h2 style={{ fontSize: 24, marginBottom: 24 }}>Key Projects</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 16,
        }}
      >
        {resume.projects.map((project, index) => (
          <div
            key={index}
            style={{
              background: COLORS.CARD_BG,
              borderRadius: 8,
              height: '100%',
              display: 'flex',
            }}
          >
            <div
              style={{
                padding: 24,
                transition: 'transform 0.1s ease',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <h3 style={{ fontSize: 18, marginBottom: 8, color: COLORS.ACCENT_PRIMARY }}>
                {project.title}
              </h3>
              <p style={{ fontSize: 14, color: COLORS.TEXT_SECONDARY, marginBottom: 16 }}>
                {project.description}
              </p>
              <div style={{ flex: 1 }}>
                <ul
                  style={{ paddingLeft: 20, marginBottom: 16, color: COLORS.TEXT_SECONDARY }}
                >
                  {project.achievements.map((achievement, i) => (
                    <li key={i} style={{ fontSize: 13, marginBottom: 6 }}>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 8,
                  marginTop: 12,
                }}
              >
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: 12,
                      padding: '4px 8px',
                      borderRadius: 12,
                      backgroundColor: COLORS.ACCENT_TEAL_TRANSPARENT,
                      color: COLORS.ACCENT_PRIMARY,
                      border: `1px solid ${COLORS.ACCENT_TEAL_BORDER}`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
