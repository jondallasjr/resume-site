"use client";

import React from 'react';
import { Printer } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const PrintButton = () => {
  const { theme } = useTheme();
  
  const getPrintButtonStyles = () => {
    switch(theme) {
      case 'crownroyal':
        return "flex items-center gap-2 px-3 py-2 bg-purple-700 text-yellow-300 rounded border-2 border-yellow-300 hover:bg-purple-600 transition-colors";
      case 'brutal':
        return "flex items-center gap-2 px-3 py-2 bg-white text-black border-black border-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all duration-200";
      case 'synthwave':
        return "flex items-center gap-2 px-3 py-2 bg-purple-800 text-cyan-300 rounded border border-cyan-400 shadow-[0_0_10px_rgba(45,212,191,0.5)] hover:bg-purple-700 hover:shadow-[0_0_15px_rgba(45,212,191,0.7)] transition-all";
      case 'glass':
        return "flex items-center gap-2 px-3 py-2 bg-white bg-opacity-10 backdrop-blur-md text-white rounded border border-white border-opacity-30 hover:bg-opacity-20 transition-all";
      default:
        return "flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors";
    }
  };

  const handlePrint = () => {
    // Add a class to body for print-specific styles
    document.body.classList.add('is-printing');

    // Force the Professional Experience section to stay together
    const experienceSection = document.getElementById('experience-section');
    if (experienceSection) {
      experienceSection.style.pageBreakInside = 'avoid';
      experienceSection.style.breakInside = 'avoid';
    }
    
    // Force condensed print layout to ensure 2 pages max
    const style = document.createElement('style');
    style.id = 'print-compression-style';
    style.innerHTML = `
      @media print {
        /* Super compressed spacing for print */
        .print\\:leading-tight { line-height: 1.1 !important; }
        p, li, div { margin-bottom: 0 !important; }
        h3 { margin-bottom: 0.05in !important; font-size: 12pt !important; }
        h4 { margin-bottom: 0 !important; font-size: 10pt !important; }
        ul, ol { margin-top: 0 !important; margin-bottom: 0 !important; padding-left: 0.1in !important; }
        li { padding-bottom: 0 !important; margin-bottom: 0 !important; }
        .space-y-6 > * + * { margin-top: 0.05in !important; }
      }
    `;
    document.head.appendChild(style);
    
    // Trigger print dialog
    window.print();
    
    // Clean up
    setTimeout(() => {
      document.body.classList.remove('is-printing');
      if (experienceSection) {
        experienceSection.style.pageBreakInside = '';
        experienceSection.style.breakInside = '';
      }
      const styleElement = document.getElementById('print-compression-style');
      if (styleElement) {
        styleElement.remove();
      }
    }, 1000);
  };

  return (
    <button 
      className={`${getPrintButtonStyles()} fixed bottom-4 right-4 z-50 print:hidden`}
      onClick={handlePrint}
      aria-label="Print Resume"
    >
      <Printer className="w-4 h-4" />
      <span>Print</span>
    </button>
  );
};

export default PrintButton;