/**
 * Color schema heavily optimized for a light-themed rainbow gradient background.
 * Uses refined glassmorphism and WCAG AA compliant text pairings to ensure 
 * legibility against colorful backdrops.
 */

export const COLORS = {
  // --- Base (Backgrounds, fundamental colors) ---
  // Replaced with rainbow gradient via global CSS, but providing fallbacks
  BASE_LIGHT: '#ffffff',
  BASE_DARK: '#0f172a',

  // --- Surface (Glass cards, borders, shadows) ---
  // Transparent white for the glass effect allowing the vibrant rainbow to organically peek through
  CARD_BG: 'rgba(255, 255, 255, 0.2)',
  // A slightly more opaque white to provide boundary definition to glass cards without being harsh
  CARD_BORDER: 'rgba(255, 255, 255, 0.6)',
  // A subtle low-opacity border for separators and lines against glass
  BORDER_LIGHT: 'rgba(0, 0, 0, 0.1)',
  // A very soft, low-opacity Indigo-slate shadow for integrated depth (avoids muddy black tones)
  SOFT_SHADOW: 'rgba(100, 116, 139, 0.1)',

  // --- Content (Text colors) ---
  // Deep Slate for high contrast on light/colorful backgrounds (meets WCAG AA)
  TEXT_PRIMARY: '#1e293b',
  // Muted Slate for secondary text, perfectly balancing hierarchy and contrast
  TEXT_SECONDARY: '#475569',
  // Lighter slate for muted details
  TEXT_MUTED: '#64748b',

  // --- Accents (Buttons, links, highlights) ---
  // Indigo: Professional, vibrant, pairs beautifully across all colors of a rainbow palette
  ACCENT_PRIMARY: '#4f46e5',
  // Deep Teal: Sophisticated secondary accent providing cool contrast
  ACCENT_SECONDARY: '#0d9488',
  ACCENT_TEAL_TRANSPARENT: 'rgba(13, 148, 136, 0.08)',
  ACCENT_TEAL_BORDER: 'rgba(13, 148, 136, 0.25)',
  // Muted Rose: For warnings or special highlights where red is too aggressive
  ACCENT_ROSE: '#e11d48',

  // --- Window Control Dots ---
  MAC_RED: '#fb7185', // Soft Rose
  MAC_YELLOW: '#fbbf24', // Warm Amber
  MAC_GREEN: '#34d399', // Soft Emerald
};
