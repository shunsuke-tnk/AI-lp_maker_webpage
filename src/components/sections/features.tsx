import { Typography } from "@/components/ui/typography";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const features = [
    {
        title: "一気通貫の生成プロセス",
        description: "ランディングページ制作には、本来「構成設計」「原稿作成」「デザイン」「コーディング」という4つの工程が必要です。それぞれに専門家が必要で、全体を理解している人材は限られていました。AI LP MAKER は、この全体像を把握した上で設計されたAIにより、これらすべてを一気通貫で生成します。",
    },
    {
        title: "資料をアップするだけのシンプル操作",
        description: "ご利用方法は非常にシンプルです。会社パンフレット、商品資料、既存LPなどをアップロードするだけ。AIが内容を解析し、購買心理を踏まえた構成と原稿を生成します。最短1時間で、実用レベルのランディングページが完成します。",
    },
    {
        title: "検証と量産に特化",
        description: "重要なのは「作れること」ではなく「使えること」です。AI LP MAKER は、実際のテストマーケティングを前提に設計されています。複数の訴求・ターゲット・価格帯を想定したLPを量産し、成果の出る型を見つけることが可能です。",
    },
    {
        title: "AIと人の協働",
        description: "また、AIが作ったLPをそのまま使うだけでなく、人が手を加え、改善し、育てていくことも想定しています。AIと人が協働することで、最短距離で成果に近づく。それが AI LP MAKER の設計思想です。",
    },
];

export function Features() {
    return (
        <Section background="highlight" className="py-28 md:py-36 lg:py-44 relative overflow-hidden">
            {/* Background decoration text */}
            <div className="absolute top-20 left-0 right-0 overflow-hidden pointer-events-none">
                <Typography
                    variant="display"
                    className="text-[10rem] md:text-[16rem] lg:text-[20rem] font-black text-navy-900/[0.015] leading-none select-none whitespace-nowrap"
                >
                    Service
                </Typography>
            </div>

            <div className="max-w-7xl mx-auto relative">
                {/* Section Header */}
                <div className="text-center mb-24 md:mb-32">
                    <ScrollReveal>
                        <Typography variant="h2" className="mb-8">
                            AI LP MAKER ができること
                        </Typography>
                        <Typography variant="h4" className="text-navy-900/70 font-normal max-w-3xl mx-auto">
                            構成・原稿・デザイン・実装までを、AIで一気通貫
                        </Typography>
                    </ScrollReveal>
                </div>

                {/* Features Grid - Alternating Text/Image Layout */}
                <div className="space-y-24 md:space-y-32 lg:space-y-40">
                    {features.map((feature, index) => (
                        <ScrollReveal
                            key={index}
                            delay={index * 0.1}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <div
                                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                }`}
                            >
                                {/* Text Content */}
                                <div className={`${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                                    <Typography variant="h3" className="mb-6 leading-tight">
                                        {feature.title}
                                    </Typography>
                                    <Typography variant="body" className="leading-loose text-navy-900/80">
                                        {feature.description}
                                    </Typography>
                                </div>

                                {/* Image Placeholder */}
                                <div className={`${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                                    <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gradient-to-br from-navy-800/5 to-accent/10 shadow-xl">
                                        <div className="absolute inset-0 flex items-center justify-center p-8">
                                            <div className="text-center">
                                                <Typography variant="h5" className="text-navy-900/20 mb-3">
                                                    Feature Image {index + 1}
                                                </Typography>
                                                <Typography variant="small" className="text-navy-900/15">
                                                    {index === 0 && "AI生成プロセスの図解\n推奨サイズ: 1200x900px"}
                                                    {index === 1 && "シンプルな操作画面\n推奨サイズ: 1200x900px"}
                                                    {index === 2 && "複数LPの量産イメージ\n推奨サイズ: 1200x900px"}
                                                    {index === 3 && "人とAIの協働イメージ\n推奨サイズ: 1200x900px"}
                                                </Typography>
                                            </div>
                                        </div>
                                        {/* Decorative gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-navy-900/[0.02] to-navy-900/5" />
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>

            {/* Decorative organic blob */}
            <div
                className="absolute -bottom-20 -right-20 w-96 h-96 bg-navy-800/5 blur-3xl pointer-events-none"
                style={{
                    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                }}
            />
        </Section>
    );
}
