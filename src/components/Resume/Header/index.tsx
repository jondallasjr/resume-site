"use client";

import React from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Globe } from 'lucide-react';
import ContactItem from './ContactItem';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
    const { colors } = useTheme();

    const topLineInfo = [
        { Icon: Mail, text: "jondallasjr@gmail.com", href: "mailto:jondallasjr@gmail.com" },
        { Icon: Phone, text: "(443) 470-5740" }
    ];

    const bottomLineInfo = [
        { Icon: Globe, text: "jondallasai.com", href: "https://jondallasai.com" },
        { Icon: Linkedin, text: "linkedin.com/in/jondallasjr", href: "https://linkedin.com/in/jonadallasjr" }, // Typo in href is correct; need to change
        { Icon: Github, text: "github.com/jondallasjr", href: "https://github.com/jondallasjr" }
    ];

    return (
        <div className="text-center mb-6">
            <h1 className={`text-3xl font-bold mb-3 bg-gradient-to-r ${colors.primary} text-transparent bg-clip-text`}>
                JON DALLAS JR
            </h1>
            <div className="flex flex-col gap-2">
                <div className="flex justify-center items-center gap-4 text-gray-600">
                    {topLineInfo.map((item, index) => (
                        <React.Fragment key={item.text}>
                            {index > 0 && <span className="text-gray-300">|</span>}
                            <ContactItem {...item} />
                        </React.Fragment>
                    ))}
                </div>
                <div className="flex justify-center items-center gap-4 text-gray-600">
                    {bottomLineInfo.map((item, index) => (
                        <React.Fragment key={item.text}>
                            {index > 0 && <span className="text-gray-300">|</span>}
                            <ContactItem {...item} />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;