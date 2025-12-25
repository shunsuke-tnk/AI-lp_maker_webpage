import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
    {
        tag: "単発プラン",
        tagTone: "light",
        titleLines: ["LP単発制作"],
        description: "初期投資を抑えて、試したい方向け",
        priceLabel: "1LPあたり",
        price: "98,000円",
        priceNote: "",
        features: ["ヒアリング約1時間（録音・文字起こし）", "AI生成で最短1時間納品", "成果を意識した構成・原稿設計", "伴走型でディレクション"],
        highlight: false,
    },
    {
        tag: "月額プラン",
        tagTone: "dark",
        titleLines: ["LP量産", "システム"],
        description: "高速検証を回したい方向け",
        priceLabel: "月額",
        price: "500,000円",
        priceNote: "",
        features: ["LP作り放題で量産・検証", "A/Bテスト前提の運用設計", "ツールの代行制作で伴走対応", "優先対応と運用サポート"],
        highlight: true,
    },
    {
        tag: "パートナープラン",
        tagTone: "light",
        titleLines: ["代理店"],
        description: "代理店導入・事業会社向け",
        priceLabel: "初期費用",
        price: "200,000円",
        priceNote: "+ 月額20,000円",
        features: ["導入支援・運用フローの整備", "代理店紹介は売上50%還元を検討", "継続運用に伴走する支援体制", "提携先向けの専用設計"],
        highlight: false,
    },
];

export default function PricingPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen pt-20">
                <Section background="paper">
                    <div className="text-center mb-16">
                        <ScrollReveal>
                            <Typography variant="display" className="text-4xl md:text-5xl mb-4">
                                Pricing
                            </Typography>
                            <Typography variant="h2" className="mb-4 text-2xl md:text-3xl">
                                事業フェーズに合わせて選べる料金体系
                            </Typography>
                            <Typography variant="body" className="max-w-2xl mx-auto">
                                伴走型支援を前提に、3つの主要プランを用意しました。<br />
                                まずは1枚から試す単発プランから、量産・提携まで事業フェーズに合わせて選べます。
                            </Typography>
                        </ScrollReveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto mb-24 items-stretch">
                        {plans.map((plan, index) => (
                            <ScrollReveal
                                key={index}
                                delay={index * 0.1}
                                className="h-full"
                            >
                                <Card
                                    className="h-full w-full flex flex-col px-8 pt-8 pb-10 md:px-10 md:pt-10 md:pb-12 relative overflow-hidden"
                                >
                                    <div className="mb-8">
                                        <div
                                            className={`w-full border-2 border-charcoal-black py-3 text-center font-black text-lg md:text-xl whitespace-nowrap ${plan.tagTone === "dark" ? "bg-charcoal-black text-neon-yellow" : "bg-neon-yellow text-charcoal-black"
                                                }`}
                                        >
                                            {plan.tag}
                                        </div>
                                    </div>

                                    <div className="mb-6 min-h-[96px] md:min-h-[120px]">
                                        <Typography variant="h4" className="text-4xl md:text-5xl leading-tight tracking-tight">
                                            {plan.titleLines.map((line, i) => (
                                                <span key={i} className="block">
                                                    {line}
                                                </span>
                                            ))}
                                        </Typography>
                                    </div>

                                    <Typography variant="body" className="text-sm md:text-base font-bold text-charcoal-black/80 mb-6 leading-relaxed">
                                        {plan.description}
                                    </Typography>

                                    <div className="mb-6 min-h-[96px] md:min-h-[112px]">
                                        <Typography variant="small" className="text-charcoal-black/80 font-black text-sm md:text-base mb-2">
                                            {plan.priceLabel}
                                        </Typography>
                                        <Typography variant="h3" className="text-4xl md:text-5xl leading-none tabular-nums md:whitespace-nowrap">
                                            {plan.price}
                                        </Typography>
                                        <Typography
                                            variant="small"
                                            className={`text-charcoal-black/80 font-bold text-sm md:text-base mt-1 text-right md:whitespace-nowrap ${plan.priceNote ? "" : "invisible"
                                                }`}
                                        >
                                            {plan.priceNote || "placeholder"}
                                        </Typography>
                                    </div>

                                    <div className="flex-grow space-y-3">
                                        {plan.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <div className="w-5 h-5 rounded-full bg-navy-900/10 flex items-center justify-center flex-shrink-0">
                                                    <Check size={12} className="text-navy-900" />
                                                </div>
                                                <Typography variant="small" className="text-sm md:text-base text-charcoal-black/80 leading-snug">
                                                    {feature}
                                                </Typography>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-6">
                                        <Link href="/contact" className="w-full">
                                            <Button
                                                variant={plan.highlight ? "primary" : "secondary"}
                                                className="w-full"
                                            >
                                                選択する
                                            </Button>
                                        </Link>
                                    </div>
                                </Card>
                            </ScrollReveal>
                        ))}
                    </div>

                    <Section background="highlight" className="rounded-3xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <ScrollReveal>
                                <Typography variant="h3" className="mb-4">
                                    伴走型の運用支援
                                </Typography>
                                <Typography variant="body" className="mb-6">
                                    LPを作るだけで終わらせず、広告運用やLステップ、MEOなど集客から成約までを一本の線で設計します。<br />
                                    「DIY型」ではなく、私たちが制作を代行する受託・伴走スタイルで成果に近づけます。
                                </Typography>
                                <Link href="/contact">
                                    <Button variant="secondary">詳しくはお問い合わせ</Button>
                                </Link>
                            </ScrollReveal>
                            <ScrollReveal delay={0.2}>
                                <Card className="p-8">
                                    <Typography variant="h4" className="mb-4">運用のこだわり</Typography>
                                    <ul className="space-y-3">
                                        <li className="flex gap-2 text-navy-900/80">
                                            <Check size={18} className="text-navy-900 mt-1" />
                                            <span>「作る」から「成果を出す」まで一気通貫</span>
                                        </li>
                                        <li className="flex gap-2 text-navy-900/80">
                                            <Check size={18} className="text-navy-900 mt-1" />
                                            <span>16分割生成などパーツ単位の制作で高画質化</span>
                                        </li>
                                        <li className="flex gap-2 text-navy-900/80">
                                            <Check size={18} className="text-navy-900 mt-1" />
                                            <span>高速PDCAを回すための運用設計</span>
                                        </li>
                                    </ul>
                                </Card>
                            </ScrollReveal>
                        </div>
                    </Section>
                </Section>
            </main>
            <Footer />
        </>
    );
}
