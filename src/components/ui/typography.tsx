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
    // Isometric Design System Typography
    // Massive headings with Extra Bold (Black/900), extreme size contrast (10:1+ jump rate)
    display: "font-sans text-7xl md:text-9xl lg:text-[12rem] font-black tracking-tighter leading-[0.9] text-charcoal-black",
    h1: "font-sans text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.95] text-charcoal-black",
    h2: "font-sans text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.0] text-charcoal-black",
    h3: "font-sans text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-charcoal-black",
    h4: "font-sans text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-charcoal-black",
    h5: "font-sans text-2xl md:text-4xl lg:text-5xl font-black tracking-tight text-charcoal-black",
    h6: "font-sans text-xl md:text-3xl lg:text-4xl font-black tracking-tight text-charcoal-black",
    // Small body text with regular weight - extreme contrast with headings
    body: "font-sans text-sm md:text-base leading-relaxed text-charcoal-black",
    small: "font-sans text-xs md:text-sm leading-relaxed text-charcoal-black/70",
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
