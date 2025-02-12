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
      <div className="flex items-center gap-1">
        <Icon className={colors.secondary} size={14} />
        <span className="text-sm">{text}</span>
      </div>
    );
  
    return href ? (
      <a href={href} className="hover:text-blue-600">
        {content}
      </a>
    ) : content;
  };

export default ContactItem;