import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const notoSans = Noto_Sans_JP({
    subsets: ["latin"],
    variable: "--font-noto-sans",
    weight: ["400", "500", "700", "900"],
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
                "font-sans antialiased bg-paper text-navy-900"
            )}>
                {children}
            </body>
        </html>
    );
}
