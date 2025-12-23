import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-paper/80 backdrop-blur-md border-b border-navy-900/5">
            <div className="container mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <Typography variant="h4" className="pt-1">
                        AI LP MAKER
                    </Typography>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/pricing" className="text-sm font-medium text-navy-900/70 hover:text-navy-900 transition-colors">
                        料金プラン
                    </Link>
                    <Link href="/about" className="text-sm font-medium text-navy-900/70 hover:text-navy-900 transition-colors">
                        会社概要
                    </Link>
                    <Link href="/contact" className="text-sm font-medium text-navy-900/70 hover:text-navy-900 transition-colors">
                        お問い合わせ
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link href="/contact">
                        <Button size="sm" className="hidden md:flex">
                            無料相談
                        </Button>
                    </Link>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <span className="sr-only">Menu</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                    </Button>
                </div>
            </div>
        </header>
    );
}
