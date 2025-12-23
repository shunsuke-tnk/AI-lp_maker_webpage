import { Typography } from "@/components/ui/typography";
import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const testimonials = [
    "これまでLP制作はコストと時間がネックでしたが、AI LP MAKER によって一気に解消されました。テスト用LPを気軽に作れるようになり、マーケティングの意思決定が早くなりました。",
    "AIが作ると聞いて不安もありましたが、構成がしっかりしていて驚きました。「売るための流れ」が最初から組み込まれている点が、他のツールとの大きな違いだと思います。",
    "制作会社に毎回依頼していた頃と比べ、コストは大幅に削減できています。その分、広告や検証に予算を回せるようになりました。",
    "LPを作ること自体が目的ではなく、成果を出すための手段だと再認識できました。社内のマーケティング意識も変わったと感じています。"
];

export function Testimonials() {
    return (
        <Section background="highlight" className="py-28 md:py-36 lg:py-44 relative overflow-hidden">
            {/* Background decoration text */}
            <div className="absolute top-28 left-0 right-0 overflow-hidden pointer-events-none">
                <Typography
                    variant="display"
                    className="text-[10rem] md:text-[16rem] lg:text-[20rem] font-black text-navy-900/[0.015] leading-none select-none whitespace-nowrap"
                >
                    Voice
                </Typography>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20 md:mb-28">
                    <ScrollReveal>
                        <Typography variant="h2" className="mb-8">
                            導入企業の声
                        </Typography>
                        <Typography variant="h4" className="text-navy-900/70 font-normal max-w-3xl mx-auto">
                            成果が出るまでのスピードが変わりました
                        </Typography>
                    </ScrollReveal>
                </div>

                {/* Image Gallery Section - Inspired by reference sites */}
                <ScrollReveal delay={0.2}>
                    <div className="mb-20 md:mb-32">
                        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
                            {[1, 2, 3, 4].map((index) => (
                                <div
                                    key={index}
                                    className="flex-none w-[300px] md:w-[400px] snap-start"
                                >
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-navy-800/5 to-accent/10 shadow-lg">
                                        <div className="absolute inset-0 flex items-center justify-center p-6">
                                            <div className="text-center">
                                                <Typography variant="h6" className="text-navy-900/20 mb-2">
                                                    Case Image {index}
                                                </Typography>
                                                <Typography variant="small" className="text-navy-900/15">
                                                    導入事例や<br />
                                                    成果イメージ<br />
                                                    推奨: 800x600px
                                                </Typography>
                                            </div>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-navy-900/[0.02] to-navy-900/5" />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-right mt-4 mr-4">
                            <Typography variant="small" className="text-navy-900/40">
                                スクロールして他の事例を見る →
                            </Typography>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Testimonials - Asymmetric Layout */}
                <div className="space-y-10 md:space-y-12">
                    {testimonials.map((quote, index) => (
                        <ScrollReveal
                            key={index}
                            delay={index * 0.12}
                            viewport={{ once: true, margin: "-80px" }}
                        >
                            <div
                                className={`max-w-4xl ${
                                    index % 2 === 0 ? 'mr-auto' : 'ml-auto'
                                }`}
                            >
                                <div
                                    className="bg-paper/60 backdrop-blur-sm p-8 md:p-10 rounded-3xl relative"
                                    style={{
                                        boxShadow: '0 20px 40px -10px rgba(45, 64, 89, 0.06)',
                                    }}
                                >
                                    {/* Decorative quotation mark */}
                                    <div className="absolute -top-4 -left-4 text-6xl text-navy-900/10 font-serif leading-none">
                                        "
                                    </div>
                                    <Typography variant="body" className="leading-loose text-navy-900/85 relative z-10">
                                        {quote}
                                    </Typography>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>

            {/* Decorative curved line */}
            <svg
                className="absolute bottom-32 left-16 w-40 h-40 opacity-10 pointer-events-none"
                viewBox="0 0 200 200"
                fill="none"
            >
                <path
                    d="M 30 100 Q 80 30, 130 100 T 170 130"
                    stroke="#2D4059"
                    strokeWidth="0.8"
                    opacity="0.4"
                />
            </svg>
        </Section>
    );
}
