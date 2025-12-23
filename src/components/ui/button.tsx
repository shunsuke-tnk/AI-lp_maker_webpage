import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost"
    size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "default", ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-transform duration-200 hover:-translate-y-1 active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none"

        const variants = {
            primary: "bg-navy-900 text-white shadow-md hover:bg-navy-900/90 hover:shadow-lg",
            secondary: "bg-transparent border border-navy-900 text-navy-900 hover:bg-navy-900/5",
            ghost: "bg-transparent text-navy-900 hover:bg-navy-900/5",
        }

        const sizes = {
            default: "h-11 px-8 py-2 text-sm",
            sm: "h-9 px-4 text-xs",
            lg: "h-14 px-10 text-base",
            icon: "h-10 w-10",
        }

        return (
            <button
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
