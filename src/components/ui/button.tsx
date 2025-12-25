import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost"
    size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "default", ...props }, ref) => {
        // Isometric Design System - No shadows, no rounded corners, sharp edges
        const baseStyles = "inline-flex items-center justify-center font-black transition-all duration-150 disabled:opacity-50 disabled:pointer-events-none uppercase tracking-wide"

        const variants = {
            // Primary: Neon yellow with black text - THE accent color
            primary: "border-2 border-charcoal-black hover:bg-charcoal-black hover:text-neon-yellow",
            // Secondary: Black border, minimal
            secondary: "bg-pure-white border-2 border-charcoal-black text-charcoal-black hover:bg-charcoal-black hover:text-pure-white",
            // Ghost: Minimal, text only
            ghost: "bg-transparent text-charcoal-black hover:bg-structure-grid",
        }

        const sizes = {
            default: "h-11 px-8 py-2 text-xs",
            sm: "h-9 px-4 text-xs",
            lg: "h-14 px-10 text-sm",
            icon: "h-10 w-10",
        }

        return (
            <button
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                style={variant === "primary" ? { backgroundColor: '#FFFF00', color: '#222222' } : undefined}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
