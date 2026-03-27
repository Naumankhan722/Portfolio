import { resume } from '../data/resume'
import { COLORS } from '../styles/colors'
import GlassCard from './GlassCard'

export default function Summary() {

    return (
        <GlassCard>
            <h2 style={{ fontSize: 24, marginBottom: 16 }}>Professional Summary</h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: COLORS.TEXT_SECONDARY, marginBottom: 32 }}>
                {resume.summary}
            </p>
        </GlassCard>
    )
}
