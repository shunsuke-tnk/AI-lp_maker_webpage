import { Typography } from "@/components/ui/typography";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import Link from "next/link";

const pricingPoints = [
    {
        title: "柔軟なプラン選択",
        description: "AI LP MAKER では、目的や利用頻度に応じて複数の料金プランを用意しています。まず試したい方向けの短期利用プランから、事業の中核として使う企業向けプランまで、柔軟に選択可能です。",
    },
    {
        title: "量産・検証向けパック",
        description: "「とにかく量産したい」「まずは検証したい」という方向けには、期間内で何枚でもLPを生成できるパックプランをご用意しています。初期投資を抑えながら、スピーディに成果検証を進めることができます。",
    },
    {
        title: "専用カスタマイズ(プロジェクトプラン)",
        description: "より高い精度を求める企業様向けには、ヒアリングを行い、専用プロンプトを設計するプロジェクトプランも提供しています。業界特性や商品特性を踏まえたカスタマイズにより、成果までのスピードをさらに高めます。",
    },
    {
        title: "多様な契約形態",
        description: "制作会社・個人事業主向けの特別価格、代理店向けの報酬制度、AIを自社資産として導入できる買い切りプランも用意しています。詳しい内容は、お問い合わせにてご案内しています。",
    },
];

export function Pricing() {
    return (
        <Section background="default" id="pricing" className="py-28 md:py-36 lg:py-44 relative overflow-hidden">
            {/* Background decoration text */}
            <div className="absolute top-32 left-0 right-0 overflow-hidden pointer-events-none">
                <Typography
                    variant="display"
                    className="text-[10rem] md:text-[16rem] lg:text-[20rem] font-black text-navy-900/[0.015] leading-none select-none whitespace-nowrap"
                >
                    Pricing
                </Typography>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20 md:mb-28">
                    <ScrollReveal>
                        <Typography variant="h2" className="mb-8">
                            事業フェーズに合わせて選べる料金体系
                        </Typography>
                        <Typography variant="h4" className="text-navy-900/70 font-normal max-w-3xl mx-auto">
                            無理なく、でも本気で使えるプランを用意しました
                        </Typography>
                    </ScrollReveal>
                </div>

                {/* Split Layout: Image + Pricing Points */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start mb-20 md:mb-28">
                    {/* Left: Image Area */}
                    <ScrollReveal direction="left" delay={0.2}>
                        <div className="relative aspect-[3/4] lg:sticky lg:top-32 w-full rounded-2xl overflow-hidden bg-gradient-to-br from-navy-800/5 to-accent/10 shadow-xl">
                            <div className="absolute inset-0 flex items-center justify-center p-8">
                                <div className="text-center">
                                    <Typography variant="h4" className="text-navy-900/25 mb-4">
                                        Pricing Visual
                                    </Typography>
                                    <Typography variant="body" className="text-navy-900/15">
                                        料金プランの比較表や<br />
                                        プランイメージ画像<br />
                                        推奨サイズ: 900x1200px
                                    </Typography>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-navy-900/[0.02] to-navy-900/5" />
                        </div>
                    </ScrollReveal>

                    {/* Right: Pricing Points */}
                    <div className="space-y-12 md:space-y-14">
                        {pricingPoints.map((point, index) => (
                            <ScrollReveal
                                key={index}
                                delay={index * 0.15}
                                viewport={{ once: true, margin: "-80px" }}
                            >
                                <div>
                                    <Typography variant="h4" className="mb-4 leading-tight">
                                        {point.title}
                                    </Typography>
                                    <Typography variant="body" className="leading-loose text-navy-900/80">
                                        {point.description}
                                    </Typography>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>

                {/* CTA Button */}
                <ScrollReveal className="text-center">
                    <Link href="/pricing">
                        <Button size="lg" variant="primary" className="px-10 py-6">
                            料金プラン詳細を見る
                        </Button>
                    </Link>
                </ScrollReveal>
            </div>

            {/* Decorative curved line */}
            <svg
                className="absolute bottom-20 right-10 w-56 h-56 opacity-10 pointer-events-none"
                viewBox="0 0 200 200"
                fill="none"
            >
                <path
                    d="M 20 150 Q 80 50, 150 100 T 180 150"
                    stroke="#708198"
                    strokeWidth="1"
                    opacity="0.5"
                />
            </svg>
        </Section>
    );
}
