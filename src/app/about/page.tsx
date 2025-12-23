import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen pt-20">
                <Section background="paper">
                    <div className="text-center mb-16">
                        <ScrollReveal>
                            <Typography variant="display" className="text-4xl md:text-5xl mb-4">
                                About Us
                            </Typography>
                            <Typography variant="h2" className="mb-4 text-2xl md:text-3xl">
                                会社概要
                            </Typography>
                        </ScrollReveal>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-16">
                        <ScrollReveal>
                            <Typography variant="h3" className="mb-6">専門チームによる運営</Typography>
                            <Typography variant="body" className="mb-8">
                                AI LP MAKER は、長年ウェブ制作・マーケティング支援を行ってきたチームによって開発・運営されています。現場で培った知見を、再現可能な形で提供することを強みとしています。
                            </Typography>

                            <Typography variant="h3" className="mb-6">私たちの立ち位置</Typography>
                            <Typography variant="body" className="mb-8">
                                私たちは、制作会社でも、ツール会社でもありません。「成果を出す仕組み」をつくる会社です。
                            </Typography>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <Card>
                                <div className="divide-y divide-navy-900/10">
                                    <div className="grid grid-cols-1 md:grid-cols-4 py-6 gap-4">
                                        <dt className="font-bold text-navy-900">開発・運営</dt>
                                        <dd className="md:col-span-3 text-navy-900/80">AI LP MAKER 運営事務局</dd>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-4 py-6 gap-4">
                                        <dt className="font-bold text-navy-900">事業内容</dt>
                                        <dd className="md:col-span-3 text-navy-900/80">
                                            <ul className="list-disc list-inside space-y-1">
                                                <li>AIを活用したLP制作サービスの開発・提供</li>
                                                <li>マーケティング支援</li>
                                                <li>コンサルティング</li>
                                            </ul>
                                        </dd>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-4 py-6 gap-4">
                                        <dt className="font-bold text-navy-900">所在地</dt>
                                        <dd className="md:col-span-3 text-navy-900/80">〒100-0000 東京都...</dd>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-4 py-6 gap-4">
                                        <dt className="font-bold text-navy-900">お問い合わせ</dt>
                                        <dd className="md:col-span-3 text-navy-900/80">info@ailpmaker.com</dd>
                                    </div>
                                </div>
                            </Card>
                        </ScrollReveal>
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
