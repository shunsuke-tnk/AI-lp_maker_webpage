import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function Card({
    children,
    className,
    hoverEffect = true,
    ...props
}: CardProps) {
    return (
        <div
            className={cn(
                // Isometric Design System - No rounded corners, no shadows, sharp edges
                'bg-pure-white p-6 md:p-8',
                'border-2 border-charcoal-black',
                hoverEffect && 'transition-all duration-200 hover:border-neon-yellow hover:bg-pure-offwhite',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
