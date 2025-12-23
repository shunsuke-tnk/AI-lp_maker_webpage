import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    containerSize?: 'default' | 'small' | 'full';
    className?: string; // For the outer section
    innerClassName?: string; // For the inner container
    background?: 'default' | 'paper' | 'highlight' | 'navy'; // Predefined backgrounds
}

export function Section({
    children,
    containerSize = 'default',
    className,
    innerClassName,
    background = 'default',
    ...props
}: SectionProps) {
    const containerSizes = {
        default: 'max-w-7xl', // ~1280px
        small: 'max-w-4xl', // ~896px
        full: 'w-full',
    };

    const backgrounds = {
        default: 'bg-transparent',
        paper: 'bg-paper',
        highlight: 'bg-highlight',
        navy: 'bg-navy-900 text-white',
    };

    return (
        <section
            className={cn(
                'py-24 md:py-32 lg:py-40 relative', // Vertical spacing 100px - 160px
                backgrounds[background],
                className
            )}
            {...props}
        >
            <div
                className={cn(
                    'container mx-auto px-4 md:px-8',
                    containerSizes[containerSize],
                    innerClassName
                )}
            >
                {children}
            </div>
        </section>
    );
}
