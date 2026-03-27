import { COLORS } from '../styles/colors';

export default function GlassCard({ id, children, style }) {
  const glassStyle = {
    background: COLORS.CARD_BG,
    backdropFilter: 'blur(10px)',
    border: `1px solid ${COLORS.TEXT_PRIMARY}`,
    borderRadius: 8,
    padding: 24,
    color: COLORS.TEXT_PRIMARY,
    ...style
  }

  return (
    <section id={id} style={glassStyle}>
      {children}
    </section>
  )
}