import React from 'react';
import { useTheme } from '../context/ThemeContext';

export interface Implementation {
    company: string;
    companyUrl?: string;
    details: string[];
}

export interface RoleProps {
    title: string;
    company: string;
    companyUrl?: string;
    period: string;
    description: string;
    achievements?: { text: React.ReactNode }[];
    implementations?: Implementation[];
    pageBreakBefore?: boolean;
}

export const Role = ({
    title,
    company,
    companyUrl,
    period,
    description,
    achievements,
    implementations,
    pageBreakBefore
}: RoleProps) => {
    const { colors, fonts, theme } = useTheme();

    return (
        <div className={`border-l-4 ${colors.accent} pl-4 ${pageBreakBefore ? 'page-break-before' : ''} print:border-l-gray-300 print:break-inside-avoid-page print:mb-4`}>
            <h4 className={`${colors.text} ${fonts.heading} print:text-black print:font-bold print:text-sm`}>{title}</h4>
            <div className="text-md mb-2">
                <span className={`${colors.accent} font-bold`}>
                    {companyUrl ? (
                        <a
                            href={companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600"
                        >
                            {company}
                        </a>
                    ) : (
                        company
                    )}
                </span>
                <span className={`${theme === 'crownroyal' || theme === 'synthwave' || theme === 'glass' ? 'text-gray-200' : 'text-gray-500'}`}> | {period}</span>
            </div>
            <p className={`${theme === 'crownroyal' || theme === 'synthwave' || theme === 'glass' ? 'text-white' : 'text-gray-600'} mb-2 text-sm pl-0 ${fonts.body} print:text-black print:text-xs print:leading-tight print:mb-1`}>{description}</p>

            {achievements && (
                <ul className={`list-disc ${theme === 'crownroyal' || theme === 'synthwave' || theme === 'glass' ? 'text-white' : 'text-gray-600'} space-y-1 pl-8 text-sm ${fonts.body} print:space-y-0 print:pl-4 print:text-xs print:text-black`}>
                    {achievements.map((achievement, idx) => (
                        <li key={idx} className="print:mb-0.5">{achievement.text}</li>
                    ))}
                </ul>
            )}

            {implementations && (
                <div className="space-y-3">
                    {implementations.map((impl, idx) => (
                        <div key={idx} className="print:break-inside-avoid-page print:mb-3">
                            <h5 className={`text-xs font-bold tracking-wider uppercase ${theme === 'crownroyal' || theme === 'synthwave' || theme === 'glass' ? 'text-gray-200' : 'text-gray-400'} mb-1 print:text-black print:text-xs`}>
                                {impl.companyUrl ? (
                                    <a
                                        href={impl.companyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600"
                                    >
                                        {impl.company}
                                    </a>
                                ) : (
                                    impl.company
                                )}
                            </h5>
                            <ul className={`${theme === 'crownroyal' || theme === 'synthwave' || theme === 'glass' ? 'text-white' : 'text-gray-600'} space-y-1 pl-8 text-sm ${fonts.body} print:space-y-0 print:pl-4 print:text-xs print:text-black`}>
                                {impl.details.map((detail, detailIdx) => (
                                    <li key={detailIdx} className="relative pl-5">
                                        <span className="absolute left-0">•</span>
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Role;