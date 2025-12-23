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
                'bg-white rounded-2xl md:rounded-3xl p-6 md:p-8', // Soft rounding
                'shadow-[0_20px_40px_-10px_rgba(45,64,89,0.05)]', // Diffuse soft shadow
                'border border-navy-900/5',
                hoverEffect && 'transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(45,64,89,0.1)]',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
