import Link from "next/link";
import { Typography } from "@/components/ui/typography";

export function Footer() {
    return (
        <footer className="bg-paper py-12 border-t border-navy-900/5">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <Typography variant="h4">
                        AI LP MAKER
                    </Typography>

                    <div className="flex gap-6">
                        <Link href="/about" className="text-sm text-navy-900/60 hover:text-navy-900 transition-colors">
                            運営会社
                        </Link>
                        <Link href="/contact" className="text-sm text-navy-900/60 hover:text-navy-900 transition-colors">
                            お問い合わせ
                        </Link>
                        <Link href="/privacy" className="text-sm text-navy-900/60 hover:text-navy-900 transition-colors">
                            プライバシーポリシー
                        </Link>
                    </div>

                    <Typography variant="small" className="text-xs text-navy-900/40">
                        © 2024 AI LP MAKER All Rights Reserved.
                    </Typography>
                </div>
            </div>
        </footer>
    );
}
