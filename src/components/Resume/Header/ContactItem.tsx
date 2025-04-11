"use client";

import React from 'react';
import { LucideIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ContactItemProps {
  Icon: LucideIcon;
  text: string;
  href?: string;
}

const ContactItem = ({ Icon, text, href }: ContactItemProps) => {
    const { colors } = useTheme();
    
    const content = (
      <div className="flex items-center gap-1 py-1 px-2">
        <Icon className={colors.secondary} size={14} />
        <span className="text-sm">{text}</span>
      </div>
    );
  
    return href ? (
      <a href={href} className="hover:text-blue-600 rounded hover:bg-gray-100 transition-colors">
        {content}
      </a>
    ) : content;
  };

export default ContactItem;