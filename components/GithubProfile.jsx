import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import GlassCard from './GlassCard';
import PretextParagraph from './PretextParagraph';
import { COLORS } from '../styles/colors';

export default function GithubProfile() {
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Naumankhan722/Naumankhan722/main/README.md')
            .then(res => res.text())
            .then(text => setContent(text))
            .catch(err => console.error('Failed to fetch README:', err));
    }, []);

    return (
        <GlassCard>
            <h2 style={{ fontSize: 24, marginBottom: 16 }}>GitHub Profile</h2>
            <div 
                className="markdown-body" 
                style={{ 
                    color: COLORS.TEXT_SECONDARY, 
                    lineHeight: 1.6, 
                    overflowX: 'auto',
                    width: '100%',
                    wordWrap: 'break-word',
                }}
            >
                <style dangerouslySetInnerHTML={{__html: `
                    .markdown-body img { max-width: 100%; height: auto; display: block; margin: 0 auto; }
                    .markdown-body a { color: ${COLORS.ACCENT_PRIMARY}; text-decoration: none; }
                    .markdown-body a:hover { text-decoration: underline; }
                    .markdown-body h1, .markdown-body h2, .markdown-body h3, .markdown-body h4 { margin-top: 24px; margin-bottom: 16px; font-weight: 600; line-height: 1.25; color: ${COLORS.TEXT_PRIMARY}; }
                    .markdown-body h2 { padding-bottom: 0.3em; border-bottom: 1px solid ${COLORS.BORDER_LIGHT}; }
                    .markdown-body p { margin-top: 0; margin-bottom: 16px; }
                    .markdown-body hr { height: 0.25em; padding: 0; margin: 24px 0; background-color: ${COLORS.BORDER_LIGHT}; border: 0; }
                    .markdown-body ul, .markdown-body ol { padding-left: 2em; margin-bottom: 16px; }
                    .markdown-body align[center] { text-align: center; }
                    /* Make github stats images fit side by side if possible but responsive */
                    .markdown-body p[align="center"] {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: 16px;
                    }
                    @media (min-width: 768px) {
                        .markdown-body p[align="center"] {
                            flex-direction: row;
                            justify-content: center;
                            flex-wrap: wrap;
                        }
                    }
                `}} />
                {content ? (
                    <ReactMarkdown 
                        rehypePlugins={[rehypeRaw]}
                        components={{
                            p: ({node, children, ...props}) => {
                                const textArr = React.Children.toArray(children);
                                if (textArr.length > 0 && textArr.every(child => typeof child === 'string')) {
                                    return <PretextParagraph text={textArr.join('')} fontSize={15} lineHeight={24} color={COLORS.TEXT_SECONDARY} style={{ marginBottom: 16 }} />;
                                }
                                return <p {...props}>{children}</p>;
                            }
                        }}
                    >
                        {content}
                    </ReactMarkdown>
                ) : (
                    <PretextParagraph text="Loading GitHub Profile..." fontSize={15} lineHeight={24} color={COLORS.TEXT_MUTED} style={{ textAlign: 'center' }} />
                )}
            </div>
        </GlassCard>
    );
}
