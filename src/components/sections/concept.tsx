import { Typography } from "@/components/ui/typography";
import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

const concepts = [
    {
        title: "AI×実務ノウハウの融合",
        description: "AI LP MAKER は、AIの生成スピードと、20年以上にわたりウェブ制作会社を経営してきた実務ノウハウを融合させた、ランディングページ制作サービスです。私たちは「見た目がきれいなLP」ではなく、「実際に成果につながるLP」を作ることに徹底的に向き合ってきました。情報過多・競争過多の時代において、1枚のLPに賭けるのではなく、仮説と検証を高速で回すことが、成果を出すための最短ルートです。",
        imagePos: "right",
    },
    {
        title: "制作の前提を覆す",
        description: "従来のLP制作は、高額・長期・属人化が当たり前でした。制作会社に依頼すれば数十万円から百万円以上、修正にも時間がかかり、テストマーケティングが現実的ではありませんでした。AI LP MAKER は、その前提を根本から覆します。誰でも、何度でも、試せる。それが、今のビジネスに本当に必要なLP制作の形だと、私たちは考えています。",
        imagePos: "left",
    },
    {
        title: "成果前提のAIロジック",
        description: "AI LP MAKER は、単なるAIツールではありません。購買心理を踏まえた構成設計、成果が出やすい原稿ロジック、業界ごとのコンバージョンポイント。それらをすべて組み込んだ「成果前提のAI」です。AI任せではなく、人間が培ってきた知見を再現可能な形に落とし込んでいます。",
        imagePos: "right",
    },
    {
        title: "すべての挑戦者の味方へ",
        description: "「まず試したい」「今すぐ改善したい」「社内で回したい」そんな声に応えるため、AI LP MAKER は複数の利用形態を用意しています。ランディングページを、もっと自由に。もっと武器にするために。私たちは、すべての挑戦者の味方でありたいと考えています。",
        imagePos: "left",
    },
];

export function Concept() {
    return (
        <Section background="default" className="py-24 md:py-32">
            <div className="space-y-24 md:space-y-32">
                {concepts.map((item, index) => (
                    <ScrollReveal
                        key={index}
                        viewport={{ once: true, margin: "-100px" }}
                        className={cn(
                            "flex flex-col md:flex-row items-center gap-8 md:gap-16",
                            item.imagePos === "left" && "md:flex-row-reverse"
                        )}
                    >
                        {/* Text Side */}
                        <div className="flex-1 space-y-6">
                            <Typography variant="h3" className="leading-tight">
                                {item.title}
                            </Typography>
                            <Typography variant="body" className="leading-loose text-justify">
                                {item.description}
                            </Typography>
                        </div>

                        {/* Image Side (Placeholder) */}
                        <div className="flex-1 w-full aspect-video md:aspect-[4/3] bg-navy-900/5 rounded-3xl flex items-center justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-navy-900/5 to-navy-900/10" />
                            <Typography variant="h5" className="text-navy-900/10 font-bold rotate-[-15deg] scale-150 transition-transform duration-700 group-hover:scale-125">
                                Image Placeholder
                            </Typography>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </Section>
    );
}
