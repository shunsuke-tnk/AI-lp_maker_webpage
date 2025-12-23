import { Typography } from "@/components/ui/typography";
import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const missionPoints = [
    {
        title: "機会の平等化",
        description: "私たちの使命は、ランディングページを一部の企業だけのものにしないことです。挑戦したい人が、何度でも試せる環境をつくる。それが、日本のビジネス全体を強くすると信じています。",
    },
    {
        title: "「投資」から「プロセス」へ",
        description: "これまでLP制作は「失敗できない投資」でした。私たちはそれを「改善前提のプロセス」に変えたいと考えています。",
    },
    {
        title: "本質への集中",
        description: "AIの力を使うことで、人はより本質的な判断に集中できる。そのためのインフラとして、AI LP MAKER を提供しています。",
    },
    {
        title: "伴走する姿勢",
        description: "私たちは、成果が出るまで伴走する姿勢を大切にしています。ツール提供で終わらず、ビジネスの前進に寄与する存在であり続けます。",
    },
];

export function Mission() {
    return (
        <Section background="default" className="py-28 md:py-36 lg:py-44 relative overflow-hidden">
            {/* Background decoration text */}
            <div className="absolute top-40 left-0 right-0 overflow-hidden pointer-events-none">
                <Typography
                    variant="display"
                    className="text-[10rem] md:text-[16rem] lg:text-[20rem] font-black text-navy-900/[0.015] leading-none select-none whitespace-nowrap"
                >
                    Mission
                </Typography>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header - Center aligned */}
                <div className="text-center mb-20 md:mb-32">
                    <ScrollReveal>
                        <Typography variant="h2" className="mb-8">
                            挑戦する人が、試せる世界をつくる
                        </Typography>
                        <Typography variant="h4" className="text-navy-900/70 font-normal max-w-3xl mx-auto">
                            ランディングページを、もっと身近な武器に
                        </Typography>
                    </ScrollReveal>
                </div>

                {/* Split Layout: Mission Points + Image */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
                    {/* Left: Mission Points */}
                    <div className="space-y-12 md:space-y-14">
                        {missionPoints.map((point, index) => (
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

                    {/* Right: Image Area */}
                    <ScrollReveal direction="right" delay={0.2}>
                        <div className="relative aspect-[3/4] lg:sticky lg:top-32 w-full rounded-2xl overflow-hidden bg-gradient-to-br from-accent/10 to-navy-800/5 shadow-xl">
                            <div className="absolute inset-0 flex items-center justify-center p-8">
                                <div className="text-center">
                                    <Typography variant="h4" className="text-navy-900/25 mb-4">
                                        Mission Visual
                                    </Typography>
                                    <Typography variant="body" className="text-navy-900/15">
                                        挑戦する人々や<br />
                                        ビジョンを表す画像<br />
                                        推奨サイズ: 900x1200px
                                    </Typography>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-navy-900/[0.02] to-navy-900/5" />
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            {/* Decorative curved lines */}
            <svg
                className="absolute top-40 right-20 w-52 h-52 opacity-10 pointer-events-none"
                viewBox="0 0 200 200"
                fill="none"
            >
                <path
                    d="M 20 100 Q 60 20, 100 100 T 180 100"
                    stroke="#2D4059"
                    strokeWidth="0.7"
                    opacity="0.3"
                />
            </svg>
        </Section>
    );
}
