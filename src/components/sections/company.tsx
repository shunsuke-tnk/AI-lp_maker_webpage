import { Typography } from "@/components/ui/typography";
import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const companyPoints = [
    {
        title: "専門チームによる運営",
        description: "AI LP MAKER は、長年ウェブ制作・マーケティング支援を行ってきたチームによって開発・運営されています。現場で培った知見を、再現可能な形で提供することを強みとしています。",
    },
    {
        title: "私たちの立ち位置",
        description: "私たちは、制作会社でも、ツール会社でもありません。「成果を出す仕組み」をつくる会社です。",
    },
    {
        title: "事業内容",
        description: "AIを活用したLP制作サービスの開発・提供、マーケティング支援、コンサルティング",
    },
    {
        title: "その他",
        description: "会社情報の詳細、所在地、代表者情報については、必要に応じて開示・差し替えが可能です。お気軽にお問い合わせください。",
    },
];

export function Company() {
    return (
        <Section background="highlight" id="company" className="py-28 md:py-36 lg:py-44 relative overflow-hidden">
            {/* Decorative organic blob */}
            <div
                className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-navy-800/5 blur-3xl pointer-events-none"
                style={{
                    borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                }}
            />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20 md:mb-28">
                    <ScrollReveal>
                        <Typography variant="h2" className="mb-6">
                            Company
                        </Typography>
                        <Typography variant="h4" className="text-navy-900/70 font-normal max-w-3xl mx-auto">
                            AI LP MAKER を運営する会社について
                        </Typography>
                    </ScrollReveal>
                </div>

                {/* Company Points - Broken Grid Layout */}
                <div className="space-y-12 md:space-y-16 mb-20 md:mb-28">
                    {companyPoints.map((point, index) => (
                        <ScrollReveal
                            key={index}
                            delay={index * 0.15}
                            viewport={{ once: true, margin: "-80px" }}
                        >
                            <div
                                className={`grid md:grid-cols-12 gap-8 md:gap-12 items-start ${
                                    index % 2 === 1 ? 'md:ml-12 lg:ml-20' : ''
                                }`}
                            >
                                <div className="md:col-span-4">
                                    <Typography variant="h5" className="leading-tight">
                                        {point.title}
                                    </Typography>
                                </div>
                                <div className="md:col-span-7">
                                    <Typography variant="body" className="leading-loose text-navy-900/80">
                                        {point.description}
                                    </Typography>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* CTA Button */}
                <ScrollReveal className="text-center">
                    <Link href="/about">
                        <Button variant="secondary" className="group px-8 py-6">
                            会社概要詳細を見る
                            <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </ScrollReveal>
            </div>

            {/* Decorative curved line */}
            <svg
                className="absolute top-32 left-20 w-44 h-44 opacity-10 pointer-events-none"
                viewBox="0 0 200 200"
                fill="none"
            >
                <path
                    d="M 40 120 Q 90 40, 140 120 T 180 140"
                    stroke="#708198"
                    strokeWidth="0.8"
                    opacity="0.4"
                />
            </svg>
        </Section>
    );
}
