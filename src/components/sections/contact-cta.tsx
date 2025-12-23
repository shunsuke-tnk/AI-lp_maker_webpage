import Link from "next/link";
import { Typography } from "@/components/ui/typography";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function ContactCta() {
    return (
        <Section background="navy" className="text-center">
            <div className="max-w-3xl mx-auto space-y-8">
                <ScrollReveal>
                    <Typography variant="h2" className="text-white mb-4">
                        まずは、無料相談から
                    </Typography>
                    <Typography variant="body" className="text-white/80 mb-8">
                        AI LP MAKER の可能性を、ぜひ体感してください。<br />
                        導入に関するご相談、デモのご依頼など、お気軽にお問い合わせください。
                    </Typography>
                </ScrollReveal>

                <ScrollReveal delay={0.2} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/contact" className="w-full sm:w-auto">
                        <Button size="lg" className="w-full bg-white text-navy-900 hover:bg-white/90">
                            お問い合わせはこちら
                        </Button>
                    </Link>
                    <Link href="/pricing" className="w-full sm:w-auto">
                        <Button variant="secondary" size="lg" className="w-full border-white text-white hover:bg-white/10">
                            料金プランを見る
                        </Button>
                    </Link>
                </ScrollReveal>
            </div>
        </Section>
    );
}
