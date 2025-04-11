import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Testimonial = () => {
  const { colors, theme, fonts } = useTheme();
  
  // Get container styles based on theme
  const getContainerStyles = () => {
    switch(theme) {
      case 'crownroyal':
        return "bg-purple-700 p-6 rounded-lg border-2 border-yellow-300 text-white shadow-lg";
      case 'brutal':
        return "bg-white p-6 border-black border-[3px] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]";
      case 'synthwave':
        return "bg-purple-900 bg-opacity-80 p-6 rounded-lg border border-cyan-400 shadow-[0_0_15px_rgba(45,212,191,0.3)]";
      case 'glass':
        return "bg-black bg-opacity-30 p-6 rounded-lg border border-white border-opacity-20 backdrop-blur-md";
      default:
        return `bg-gray-50 p-6 rounded-lg border ${colors.accent} border-opacity-10`;
    }
  };
  
  // Get heading styles based on theme
  const getHeadingStyles = () => {
    switch(theme) {
      case 'crownroyal':
        return `text-xl mb-4 text-yellow-300 ${fonts.heading}`;
      case 'glass':
        return `text-xl mb-4 text-white ${fonts.heading}`;
      default:
        return `text-xl mb-4 ${colors.text} ${fonts.heading}`;
    }
  };
  
  // Get quote text styles based on theme
  const getQuoteStyles = () => {
    switch(theme) {
      case 'crownroyal':
        return `text-pink-100 italic ${fonts.body}`;
      case 'synthwave':
        return `text-cyan-100 italic ${fonts.body}`;
      case 'glass':
        return `text-gray-100 italic ${fonts.body}`;
      default:
        return `text-gray-600 italic ${fonts.body}`;
    }
  };
  
  // Get attribution styles based on theme
  const getAttributionStyles = () => {
    switch(theme) {
      case 'crownroyal':
        return "mt-2 font-medium text-yellow-300";
      case 'glass':
        return "mt-2 font-medium text-white";
      default:
        return `mt-2 font-medium ${colors.text}`;
    }
  };

  return (
    <div className={getContainerStyles()}>
      <h3 className={getHeadingStyles()}>
        FEATURED TESTIMONIAL
      </h3>
      <blockquote className={getQuoteStyles()}>
        &quot;Jon does an excellent job of making people feel welcomed, connected, and at ease...
        His communication skills are concise and follow a logical pattern that is easy to understand.&quot;
      </blockquote>
      <div className={getAttributionStyles()}>
        -Haley Purvis, Workshop Attendee
      </div>
    </div>
  );
};

export default Testimonial;