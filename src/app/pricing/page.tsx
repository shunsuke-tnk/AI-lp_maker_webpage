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
        name: "トライアル",
        description: "まずは試してみたい方へ",
        price: "無料",
        duration: "/ 初回のみ",
        features: ["LP生成 1枚", "基本構成案の作成", "標準テンプレート利用", "修正回数 1回"],
        highlight: false,
    },
    {
        name: "スタンダード",
        description: "本格的に導入したい方へ",
        price: "月額 29,800",
        duration: "円 (税込)",
        features: ["LP生成 無制限", "高度な構成案の作成", "プレミアムテンプレート", "修正回数 無制限", "HTML/CSS書き出し"],
        highlight: true,
    },
    {
        name: "エンタープライズ",
        description: "組織で利用したい方へ",
        price: "要相談",
        duration: "",
        features: ["LP生成 無制限", "専任サポート", "カスタムテンプレート作成", "API連携", "請求書払い対応"],
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
                                無理なく、でも本気で使えるプランを用意しました。<br />
                                まずは試したい方向けの短期利用プランから、事業の中核として使う企業向けプランまで。
                            </Typography>
                        </ScrollReveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
                        {plans.map((plan, index) => (
                            <ScrollReveal
                                key={index}
                                delay={index * 0.1}
                                className="h-full"
                            >
                                <Card
                                    className={`h-full flex flex-col p-8 md:p-10 relative overflow-hidden ${plan.highlight ? 'border-navy-900 border-2' : ''
                                        }`}
                                >
                                    {plan.highlight && (
                                        <div className="absolute top-0 right-0 bg-navy-900 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                            POPULAR
                                        </div>
                                    )}

                                    <div className="mb-8">
                                        <Typography variant="h4" className="mb-2">
                                            {plan.name}
                                        </Typography>
                                        <Typography variant="small" className="text-navy-900/60">
                                            {plan.description}
                                        </Typography>
                                    </div>

                                    <div className="mb-8 flex items-end gap-1">
                                        <Typography variant="h3" className="text-4xl md:text-5xl">
                                            {plan.price}
                                        </Typography>
                                        <Typography variant="small" className="mb-2">
                                            {plan.duration}
                                        </Typography>
                                    </div>

                                    <div className="flex-grow space-y-4 mb-8">
                                        {plan.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <div className="w-5 h-5 rounded-full bg-navy-900/10 flex items-center justify-center flex-shrink-0">
                                                    <Check size={12} className="text-navy-900" />
                                                </div>
                                                <Typography variant="small">
                                                    {feature}
                                                </Typography>
                                            </div>
                                        ))}
                                    </div>

                                    <Link href="/contact" className="w-full">
                                        <Button
                                            variant={plan.highlight ? "primary" : "secondary"}
                                            className="w-full"
                                        >
                                            選択する
                                        </Button>
                                    </Link>
                                </Card>
                            </ScrollReveal>
                        ))}
                    </div>

                    <Section background="highlight" className="rounded-3xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <ScrollReveal>
                                <Typography variant="h3" className="mb-4">
                                    専用カスタマイズ<br />(プロジェクトプラン)
                                </Typography>
                                <Typography variant="body" className="mb-6">
                                    より高い精度を求める企業様向けには、ヒアリングを行い、専用プロンプトを設計するプロジェクトプランも提供しています。<br />
                                    業界特性や商品特性を踏まえたカスタマイズにより、成果までのスピードをさらに高めます。
                                </Typography>
                                <Link href="/contact">
                                    <Button variant="secondary">詳しくはお問い合わせ</Button>
                                </Link>
                            </ScrollReveal>
                            <ScrollReveal delay={0.2}>
                                <Card className="p-8">
                                    <Typography variant="h4" className="mb-4">多様な契約形態</Typography>
                                    <ul className="space-y-3">
                                        <li className="flex gap-2 text-navy-900/80">
                                            <Check size={18} className="text-navy-900 mt-1" />
                                            <span>制作会社・個人事業主向けの特別価格</span>
                                        </li>
                                        <li className="flex gap-2 text-navy-900/80">
                                            <Check size={18} className="text-navy-900 mt-1" />
                                            <span>代理店向けの報酬制度</span>
                                        </li>
                                        <li className="flex gap-2 text-navy-900/80">
                                            <Check size={18} className="text-navy-900 mt-1" />
                                            <span>自社資産として導入できる買い切りプラン</span>
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
