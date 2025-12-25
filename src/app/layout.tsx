import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

// Isometric Design System - Need BLACK (900) weight for massive headings
const notoSans = Noto_Sans_JP({
    subsets: ["latin"],
    variable: "--font-noto-sans",
    weight: ["400", "900"], // Only Regular and Black - extreme contrast
    display: "swap",
});

export const metadata: Metadata = {
    title: "AI LP MAKER",
    description: "売れるランディングページを、AIで「速く・安く・何度でも」",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body className={cn(
                notoSans.variable,
                "font-sans antialiased bg-pure-white text-charcoal-black"
            )}>
                {children}
            </body>
        </html>
    );
}
