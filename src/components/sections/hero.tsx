import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Hero() {
    return (
        <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-pure-white">
            {/* Isometric Grid Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
                <div className="absolute inset-0 bg-grid-pattern bg-grid" />
            </div>

            {/* Background "AI" watermark - extremely subtle */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <div className="text-[25vw] md:text-[30vw] font-black leading-none select-none whitespace-nowrap opacity-[0.03]" style={{ color: '#E5E5E5' }}>
                    AI
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full h-full flex items-center px-4 md:px-8 lg:px-16">
                <div className="w-full max-w-7xl mx-auto">
                    {/* Main Title - 2行、左寄せ、黒と黄色の2色使い */}
                    <div className="mb-12 md:mb-16">
                        <h1 className="font-black leading-[0.85] tracking-tighter text-charcoal-black">
                            <div className="text-[15vw] md:text-[12vw] lg:text-[10vw]">
                                売れる<span className="inline-block px-[0.2em] py-[0.05em]" style={{ backgroundColor: '#222222', color: '#FFFF00' }}>LP</span>を、
                            </div>
                            <div className="text-[15vw] md:text-[12vw] lg:text-[10vw]">
                                何度でも。
                            </div>
                        </h1>
                    </div>

                    {/* CTAs - 左寄せ */}
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                        <Button size="lg">
                            無料で試してみる
                        </Button>
                        <Button variant="secondary" size="lg">
                            お問い合わせ
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// 4 Key Points を別のセクションとしてエクスポート
export function KeyPoints() {
    return (
        <Section className="relative py-16 md:py-24 bg-pure-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Large Background Text */}
                <div className="absolute top-0 left-0 right-0 overflow-hidden pointer-events-none">
                    <Typography
                        variant="display"
                        className="text-[12rem] md:text-[18rem] lg:text-[24rem] font-black text-structure-grid/30 leading-none select-none"
                    >
                        AI × LP
                    </Typography>
                </div>

                <div className="relative space-y-16 md:space-y-20 lg:space-y-24">
                            {/* Point 1 - AI×実務ノウハウの融合 */}
                            <ScrollReveal direction="up" delay={0.5}>
                                <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start border-l-4 border-neon-yellow pl-6 md:pl-8">
                                    <div className="md:col-span-5 md:col-start-1">
                                        <Typography variant="h5" className="mb-2">
                                            AI×実務ノウハウの融合
                                        </Typography>
                                    </div>
                                    <div className="md:col-span-6 md:col-start-7">
                                        <Typography variant="body">
                                            AI LP MAKER は、AIの生成スピードと、20年以上にわたりウェブ制作会社を経営してきた実務ノウハウを融合させた、ランディングページ制作サービスです。私たちは「見た目がきれいなLP」ではなく、「実際に成果につながるLP」を作ることに徹底的に向き合ってきました。情報過多・競争過多の時代において、1枚のLPに賭けるのではなく、仮説と検証を高速で回すことが、成果を出すための最短ルートです。
                                        </Typography>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Point 2 - 制作の前提を覆す */}
                            <ScrollReveal direction="up" delay={0.6}>
                                <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start border-l-4 border-charcoal-black pl-6 md:pl-8">
                                    <div className="md:col-span-5 md:col-start-1">
                                        <Typography variant="h5" className="mb-2">
                                            制作の前提を覆す
                                        </Typography>
                                    </div>
                                    <div className="md:col-span-6 md:col-start-7">
                                        <Typography variant="body">
                                            従来のLP制作は、高額・長期・属人化が当たり前でした。制作会社に依頼すれば数十万円から百万円以上、修正にも時間がかかり、テストマーケティングが現実的ではありませんでした。AI LP MAKER は、その前提を根本から覆します。誰でも、何度でも、試せる。それが、今のビジネスに本当に必要なLP制作の形だと、私たちは考えています。
                                        </Typography>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Point 3 - 成果前提のAIロジック */}
                            <ScrollReveal direction="up" delay={0.7}>
                                <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start border-l-4 border-neon-yellow pl-6 md:pl-8">
                                    <div className="md:col-span-5 md:col-start-1">
                                        <Typography variant="h5" className="mb-2">
                                            成果前提のAIロジック
                                        </Typography>
                                    </div>
                                    <div className="md:col-span-6 md:col-start-7">
                                        <Typography variant="body">
                                            AI LP MAKER は、単なるAIツールではありません。購買心理を踏まえた構成設計、成果が出やすい原稿ロジック、業界ごとのコンバージョンポイント。それらをすべて組み込んだ「成果前提のAI」です。AI任せではなく、人間が培ってきた知見を再現可能な形に落とし込んでいます。
                                        </Typography>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Point 4 - すべての挑戦者の味方へ */}
                            <ScrollReveal direction="up" delay={0.8}>
                                <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start border-l-4 border-charcoal-black pl-6 md:pl-8">
                                    <div className="md:col-span-5 md:col-start-1">
                                        <Typography variant="h5" className="mb-2">
                                            すべての挑戦者の味方へ
                                        </Typography>
                                    </div>
                                    <div className="md:col-span-6 md:col-start-7">
                                        <Typography variant="body">
                                            「まず試したい」「今すぐ改善したい」「社内で回したい」そんな声に応えるため、AI LP MAKER は複数の利用形態を用意しています。ランディングページを、もっと自由に。もっと武器にするために。私たちは、すべての挑戦者の味方でありたいと考えています。
                                        </Typography>
                                    </div>
                                </div>
                            </ScrollReveal>
                </div>
            </div>
        </Section>
    );
}
