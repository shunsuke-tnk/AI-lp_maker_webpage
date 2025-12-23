import React from 'react';
import { cn } from '@/lib/utils';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'small' | 'display';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    variant?: Variant;
    component?: React.ElementType;
    className?: string;
    children: React.ReactNode;
}

const variantStyles: Record<Variant, string> = {
    display: "font-sans text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[1.1] text-navy-900",
    h1: "font-sans text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.2] text-navy-900",
    h2: "font-sans text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.2] text-navy-900",
    h3: "font-sans text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-navy-900",
    h4: "font-sans text-2xl md:text-3xl lg:text-4xl font-black tracking-normal text-navy-900",
    h5: "font-sans text-xl md:text-2xl lg:text-3xl font-black tracking-normal text-navy-900",
    h6: "font-sans text-lg md:text-xl font-black tracking-normal text-navy-900",
    body: "font-sans text-base md:text-lg leading-loose text-navy-900/90",
    small: "font-sans text-sm leading-relaxed text-navy-900/80",
};

export function Typography({
    variant = 'body',
    component,
    className,
    children,
    ...props
}: TypographyProps) {
    const Component = component ||
        (variant === 'body' || variant === 'small' ? 'p' :
            variant === 'display' ? 'h1' : variant);

    return (
        <Component
            className={cn(variantStyles[variant], className)}
            {...props}
        >
            {children}
        </Component>
    );
}
