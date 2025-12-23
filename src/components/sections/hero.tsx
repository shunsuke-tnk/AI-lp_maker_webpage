import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Hero() {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-paper">
            {/* Background decorations */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Curved line decorations - inspired by reference sites */}
                <svg
                    className="absolute top-[10%] right-[5%] w-[600px] h-[600px] opacity-[0.08]"
                    viewBox="0 0 600 600"
                    fill="none"
                >
                    <path
                        d="M 50 300 Q 150 100, 300 250 T 550 300"
                        stroke="#2D4059"
                        strokeWidth="3"
                    />
                    <path
                        d="M 100 400 Q 200 200, 350 350 T 600 400"
                        stroke="#F4A261"
                        strokeWidth="2.5"
                    />
                </svg>
            </div>

            <Section className="relative z-10 pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32">
                <div className="max-w-7xl mx-auto">
                    {/* Hero Split Layout: Text Left + Image Right */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 md:mb-32">
                        {/* Left: Text Content */}
                        <div className="order-2 lg:order-1">
                            <ScrollReveal direction="up" delay={0.2}>
                                <Typography variant="display" className="mb-8 md:mb-10">
                                    売れるLPを<span className="text-navy-800">AI</span>で<br />
                                    <span className="text-navy-800">早く、安く、何度でも。</span>
                                </Typography>
                            </ScrollReveal>

                            <ScrollReveal direction="up" delay={0.4}>
                                <Typography variant="h4" className="text-navy-900/70 leading-relaxed mb-10">
                                    成果検証まで見据えた次世代ランディングページ制作サービス
                                </Typography>
                            </ScrollReveal>

                            <ScrollReveal direction="up" delay={0.6}>
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                    <Button size="lg" className="w-full sm:w-auto text-lg px-10 py-7">
                                        無料で試してみる
                                    </Button>
                                    <Button variant="secondary" size="lg" className="w-full sm:w-auto text-lg px-10 py-7">
                                        お問い合わせ
                                    </Button>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Right: Hero Image Area */}
                        <ScrollReveal direction="right" delay={0.3} className="order-1 lg:order-2">
                            <div className="relative aspect-[4/3] lg:aspect-[3/4] w-full rounded-3xl overflow-hidden bg-gradient-to-br from-navy-800/10 to-accent/20 shadow-2xl">
                                {/* Placeholder for hero image */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center p-8">
                                        <Typography variant="h3" className="text-navy-900/30 mb-4">
                                            Hero Image
                                        </Typography>
                                        <Typography variant="body" className="text-navy-900/20">
                                            プロフェッショナルな<br />
                                            ビジネスシーンの写真<br />
                                            推奨サイズ: 1200x1600px
                                        </Typography>
                                    </div>
                                </div>
                                {/* Decorative overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/5 to-transparent" />
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* 4 Key Points Section with Background Text Decoration */}
                    <div className="relative py-16 md:py-24">
                        {/* Large Background Text - Like "×Language" in reference */}
                        <div className="absolute top-0 left-0 right-0 overflow-hidden pointer-events-none">
                            <Typography
                                variant="display"
                                className="text-[12rem] md:text-[18rem] lg:text-[24rem] font-black text-navy-900/[0.02] leading-none select-none"
                            >
                                AI × LP
                            </Typography>
                        </div>

                        <div className="relative space-y-16 md:space-y-20 lg:space-y-24">
                            {/* Point 1 - AI×実務ノウハウの融合 */}
                            <ScrollReveal direction="up" delay={0.5}>
                                <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
                                    <div className="md:col-span-5 md:col-start-1">
                                        <Typography variant="h5" className="mb-4">
                                            AI×実務ノウハウの融合
                                        </Typography>
                                    </div>
                                    <div className="md:col-span-6 md:col-start-7">
                                        <Typography variant="body" className="leading-loose text-navy-900/80">
                                            AI LP MAKER は、AIの生成スピードと、20年以上にわたりウェブ制作会社を経営してきた実務ノウハウを融合させた、ランディングページ制作サービスです。私たちは「見た目がきれいなLP」ではなく、「実際に成果につながるLP」を作ることに徹底的に向き合ってきました。情報過多・競争過多の時代において、1枚のLPに賭けるのではなく、仮説と検証を高速で回すことが、成果を出すための最短ルートです。
                                        </Typography>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Point 2 - 制作の前提を覆す (Offset to right) */}
                            <ScrollReveal direction="up" delay={0.6}>
                                <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
                                    <div className="md:col-span-5 md:col-start-2">
                                        <Typography variant="h5" className="mb-4">
                                            制作の前提を覆す
                                        </Typography>
                                    </div>
                                    <div className="md:col-span-6 md:col-start-7">
                                        <Typography variant="body" className="leading-loose text-navy-900/80">
                                            従来のLP制作は、高額・長期・属人化が当たり前でした。制作会社に依頼すれば数十万円から百万円以上、修正にも時間がかかり、テストマーケティングが現実的ではありませんでした。AI LP MAKER は、その前提を根本から覆します。誰でも、何度でも、試せる。それが、今のビジネスに本当に必要なLP制作の形だと、私たちは考えています。
                                        </Typography>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Point 3 - 成果前提のAIロジック */}
                            <ScrollReveal direction="up" delay={0.7}>
                                <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
                                    <div className="md:col-span-5 md:col-start-1">
                                        <Typography variant="h5" className="mb-4">
                                            成果前提のAIロジック
                                        </Typography>
                                    </div>
                                    <div className="md:col-span-6 md:col-start-7">
                                        <Typography variant="body" className="leading-loose text-navy-900/80">
                                            AI LP MAKER は、単なるAIツールではありません。購買心理を踏まえた構成設計、成果が出やすい原稿ロジック、業界ごとのコンバージョンポイント。それらをすべて組み込んだ「成果前提のAI」です。AI任せではなく、人間が培ってきた知見を再現可能な形に落とし込んでいます。
                                        </Typography>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Point 4 - すべての挑戦者の味方へ (Offset to right) */}
                            <ScrollReveal direction="up" delay={0.8}>
                                <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
                                    <div className="md:col-span-5 md:col-start-2">
                                        <Typography variant="h5" className="mb-4">
                                            すべての挑戦者の味方へ
                                        </Typography>
                                    </div>
                                    <div className="md:col-span-6 md:col-start-7">
                                        <Typography variant="body" className="leading-loose text-navy-900/80">
                                            「まず試したい」「今すぐ改善したい」「社内で回したい」そんな声に応えるため、AI LP MAKER は複数の利用形態を用意しています。ランディングページを、もっと自由に。もっと武器にするために。私たちは、すべての挑戦者の味方でありたいと考えています。
                                        </Typography>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
