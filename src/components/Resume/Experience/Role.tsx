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
    const { colors } = useTheme();

    return (
        <div className={`border-l-4 ${colors.accent} pl-4 ${pageBreakBefore ? 'page-break-before' : ''}`}>
            <h4 className={`font-semibold ${colors.text}`}>{title}</h4>
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
                <span className="text-gray-500"> | {period}</span>
            </div>
            <p className="text-gray-600 mb-2 text-sm pl-0">{description}</p>

            {achievements && (
                <ul className="list-disc text-gray-600 space-y-1 pl-8 text-sm">
                    {achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement.text}</li>
                    ))}
                </ul>
            )}

            {implementations && (
                <div className="space-y-3">
                    {implementations.map((impl, idx) => (
                        <div key={idx}>
                            <h5 className="text-xs font-bold tracking-wider uppercase text-gray-400 mb-1">
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
                            <ul className="text-gray-600 space-y-1 pl-8 text-sm">
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