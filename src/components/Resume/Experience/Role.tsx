import React from 'react';
import { useTheme } from '../context/ThemeContext';

export interface RoleProps {
    title: string;
    company: string;
    period: string;
    description: string;
    achievements?: { text: React.ReactNode }[];
    implementations?: {
        company: string;
        details: string[];
    }[];
}

export const Role = ({ title, company, period, description, achievements, implementations }: RoleProps) => {
    const { colors } = useTheme();

    return (
        <div className={`border-l-4 ${colors.accent} pl-4`}>
            <h4 className={`font-semibold ${colors.text}`}>{title}</h4>
            <div className="text-md mb-2">
                <span className={`${colors.accent} font-bold`}>{company}</span>
                <span className="text-gray-500"> | {period}</span>
            </div>
            <p className="text-gray-600 mb-2 text-sm pl-0">{description}</p>

            {achievements && (
                <ul className="list-disc list-inside text-gray-600 space-y-1 pl-8 text-sm">
                    {achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement.text}</li>
                    ))}
                </ul>
            )}

            {implementations && (
                <div className="space-y-3">
                    {implementations.map((impl, idx) => (
                        <div key={idx}>
                            <h5 className="text-base font-semibold text-gray-600 mb-2">{impl.company}</h5>
                            <ul className="list-disc list-inside text-gray-600 space-y-1 pl-8 text-sm">
                                {impl.details.map((detail, detailIdx) => (
                                    <li key={detailIdx}>{detail}</li>
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

