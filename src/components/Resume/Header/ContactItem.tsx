"use client";

import React from 'react';
import { LucideIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import type { ThemeType } from '../context/ThemeContext';

interface ContactItemProps {
  Icon: LucideIcon;
  text: string;
  href?: string;
}

const ContactItem = ({ Icon, text, href }: ContactItemProps) => {
    const { colors, theme } = useTheme();
    
    const getTextClass = () => {
      if (theme === 'memphis' || theme === 'synthwave' || theme === 'glassmorphism') {
        return "text-sm text-white";
      }
      return "text-sm";
    };
    
    const getLinkHoverClass = () => {
      if (theme === 'memphis') {
        return "hover:text-yellow-300 rounded hover:bg-purple-600 transition-colors";
      } else if (theme === 'synthwave') {
        return "hover:text-cyan-300 rounded hover:bg-purple-800 transition-colors";
      } else if (theme === 'glassmorphism') {
        return "hover:text-sky-200 rounded hover:bg-white hover:bg-opacity-20 transition-colors";
      }
      return "hover:text-blue-600 rounded hover:bg-gray-100 transition-colors";
    };
    
    const content = (
      <div className="flex items-center gap-1 py-1 px-2">
        <Icon className={colors.secondary} size={14} />
        <span className={getTextClass()}>{text}</span>
      </div>
    );
  
    return href ? (
      <a href={href} className={getLinkHoverClass()}>
        {content}
      </a>
    ) : content;
  };

export default ContactItem;