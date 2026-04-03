import { resume } from '../data/resume'
import { COLORS } from '../styles/colors'
import GlassCard from './GlassCard'
import PretextParagraph from './PretextParagraph'

export default function Summary() {

    return (
        <GlassCard>
            <h2 style={{ fontSize: 24, marginBottom: 16 }}>Professional Summary</h2>
            <PretextParagraph text={resume.summary} fontSize={16} lineHeight={26} color={COLORS.TEXT_SECONDARY} style={{ marginBottom: 32 }} />
        </GlassCard>
    )
}
