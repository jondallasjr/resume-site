import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Summary = () => {
  const { colors, fonts, theme } = useTheme();
  
  return (
    <div className="mb-6">
      <p className={`${theme === 'crownroyal' || theme === 'synthwave' || theme === 'glass' ? 'text-white' : `text-${colors.text}`} leading-relaxed text-sm text-center ${fonts.body}`}>
        I build custom AI tools for SMBs that deliver rapid ROI through strategic use of LLMs, RAG, low-code MVPs, and full-stack development. 
        I&apos;ve designed and hosted 250+ workshops for 8,000+ guests across 12 cities on AI, blockchain, and more.
      </p>
    </div>
  );
};

export default Summary;

