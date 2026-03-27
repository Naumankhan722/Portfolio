import os

replacements = {
    'COLORS.WHITE_TRANSPARENT_10': 'COLORS.CARD_BG',
    'COLORS.WHITE_TRANSPARENT_20': 'COLORS.CARD_BG',
    'COLORS.WHITE_TRANSPARENT_3': 'COLORS.CARD_BG',
    'COLORS.BLACK_TRANSPARENT_80': 'COLORS.TEXT_PRIMARY',
    'COLORS.BLACK_TRANSPARENT_4': 'COLORS.CARD_BORDER',
    'COLORS.APP_TEXT_DARK': 'COLORS.TEXT_PRIMARY',
    'COLORS.DARK_BG_100': 'COLORS.TEXT_PRIMARY',
    'COLORS.DARK_BG_800': 'COLORS.TEXT_PRIMARY',
    'COLORS.DARK_BORDER': 'COLORS.BORDER_LIGHT',
    'COLORS.DARK_SHADOW_1': 'COLORS.SOFT_SHADOW',
    'COLORS.DARK_SHADOW_2': 'COLORS.SOFT_SHADOW',
    'COLORS.WHITE': 'COLORS.TEXT_PRIMARY',
    'COLORS.LIGHT_GRAY': 'COLORS.TEXT_SECONDARY',
    'COLORS.LIGHT_BG': 'COLORS.CARD_BG',
    'COLORS.LIGHT_TEXT': 'COLORS.BASE_LIGHT',
    'COLORS.NEUTRAL_GRAY_100': 'COLORS.TEXT_SECONDARY',
    'COLORS.NEUTRAL_GRAY_200': 'COLORS.TEXT_SECONDARY',
    'COLORS.NEUTRAL_GRAY_400': 'COLORS.TEXT_MUTED',
    'COLORS.NEUTRAL_GRAY_500': 'COLORS.TEXT_MUTED',
    'COLORS.PRIMARY_BLUE_LIGHT': 'COLORS.ACCENT_PRIMARY',
    'COLORS.PRIMARY_BLUE': 'COLORS.ACCENT_PRIMARY',
    'COLORS.LINKEDIN_BLUE': 'COLORS.ACCENT_PRIMARY',
    'COLORS.REACT_BLUE_TRANSPARENT_10': 'COLORS.ACCENT_TEAL_TRANSPARENT',
    'COLORS.REACT_BLUE_TRANSPARENT_30': 'COLORS.ACCENT_TEAL_BORDER',
    'COLORS.REACT_BLUE_TRANSPARENT_8': 'COLORS.SOFT_SHADOW',
    'COLORS.REACT_BLUE_TRANSPARENT_6': 'COLORS.SOFT_SHADOW',
    'COLORS.REACT_BLUE': 'COLORS.ACCENT_SECONDARY',
    'COLORS.PROJECT_TEXT_BLUE': 'COLORS.TEXT_SECONDARY',
    'COLORS.PROJECT_LINK_BLUE': 'COLORS.TEXT_SECONDARY',
    'COLORS.HIGHLIGHT_BLUE': 'COLORS.ACCENT_PRIMARY',
    'COLORS.highlight': 'COLORS.ACCENT_PRIMARY',
    'COLORS.MAC_MAC_GREEN': 'COLORS.MAC_GREEN',
}

# Sort by length descending to prevent partial match replacements (e.g. WHITE before WHITE_TRANSPARENT)
sorted_replacements = sorted(replacements.items(), key=lambda x: len(x[0]), reverse=True)

files_to_check = [
    'pages/index.js',
    'components/Skills.jsx',
    'components/Summary.jsx',
    'components/Sidebar.jsx',
    'components/Projects.jsx',
    'components/Hero.jsx',
    'components/GlassCard.jsx',
    'components/GithubProfile.jsx',
    'components/Experience.jsx',
    'components/Education.jsx',
    'components/CodeEditorMock.jsx',
    'components/BlurUpImage.jsx'
]

base_dir = r"c:\Users\PATHAN\OneDrive\Documents\GitHub\Portfolio"

for file in files_to_check:
    path = os.path.join(base_dir, file)
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        for k, v in sorted_replacements:
            content = content.replace(k, v)
            
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)

print('Done')
