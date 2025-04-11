"use client";

import React from 'react';
import { Mail, Phone, Linkedin, Github, Globe } from 'lucide-react';
import ContactItem from './ContactItem';
import { useTheme } from '../context/ThemeContext';
import type { ThemeType } from '../context/ThemeContext';

const Header = () => {
    const { colors, fonts, theme } = useTheme();

    const topLineInfo = [
        { Icon: Mail, text: "jondallasjr@gmail.com", href: "mailto:jondallasjr@gmail.com" },
        { Icon: Phone, text: "(443) 470-5740" }
    ];

    const bottomLineInfo = [
        { Icon: Globe, text: "jondallasai.com", href: "https://jondallasai.com" },
        { Icon: Linkedin, text: "linkedin.com/in/jondallasjr", href: "https://linkedin.com/in/jondallasjr" },
        { Icon: Github, text: "github.com/jondallasjr", href: "https://github.com/jondallasjr" }
    ];
    
    const getTextColor = () => {
      if (theme === 'memphis' || theme === 'synthwave' || theme === 'glassmorphism') {
        return 'text-white';
      }
      return 'text-gray-600';
    };
    
    const getDividerColor = () => {
      switch(theme) {
        case 'memphis':
          return 'text-yellow-300';
        case 'synthwave':
          return 'text-cyan-400';
        case 'glassmorphism':
          return 'text-white';
        default:
          return 'text-gray-300';
      }
    };

    return (
        <div className="text-center mb-6 px-4 print:mb-3 print:px-0">
            <h1 className={`text-3xl mb-3 bg-gradient-to-r ${colors.primary} text-transparent bg-clip-text ${fonts.heading} print:text-black print:text-2xl print:mb-2 print:bg-none print:font-bold`}>
                JON DALLAS JR
            </h1>
            <div className="flex flex-col gap-2">
                <div className={`flex flex-wrap justify-center items-center gap-4 ${getTextColor()}`}>
                    {topLineInfo.map((item, index) => (
                        <React.Fragment key={item.text}>
                            {index > 0 && <span className={`hidden sm:inline ${getDividerColor()}`}>|</span>}
                            <ContactItem {...item} />
                        </React.Fragment>
                    ))}
                </div>
                <div className={`flex flex-wrap justify-center items-center gap-4 ${getTextColor()}`}>
                    {bottomLineInfo.map((item, index) => (
                        <React.Fragment key={item.text}>
                            {index > 0 && <span className={`hidden sm:inline ${getDividerColor()}`}>|</span>}
                            <ContactItem {...item} />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;