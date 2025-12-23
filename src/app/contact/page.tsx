"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useState } from "react";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setTimeout(() => {
            setSubmitted(true);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 1000);
    };

    return (
        <>
            <Header />
            <main className="min-h-screen pt-20">
                <Section background="paper">
                    <div className="text-center mb-16">
                        <ScrollReveal>
                            <Typography variant="display" className="text-4xl md:text-5xl mb-4">
                                Contact
                            </Typography>
                            <Typography variant="h2" className="mb-4 text-2xl md:text-3xl">
                                お問い合わせ
                            </Typography>
                            <Typography variant="body" className="max-w-2xl mx-auto">
                                導入に関するご相談、デモのご依頼など、お気軽にお問い合わせください。
                            </Typography>
                        </ScrollReveal>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <ScrollReveal delay={0.2}>
                            {submitted ? (
                                <Card className="text-center py-24">
                                    <Typography variant="h3" className="mb-4">送信完了</Typography>
                                    <Typography variant="body" className="mb-8">
                                        お問い合わせありがとうございます。<br />
                                        担当者より順次ご連絡させていただきます。
                                    </Typography>
                                    <Button onClick={() => setSubmitted(false)}>フォームに戻る</Button>
                                </Card>
                            ) : (
                                <Card className="p-8 md:p-10">
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label htmlFor="company" className="block text-sm font-medium text-navy-900 mb-2">
                                                会社名 <span className="text-gray-400 text-xs ml-1">(任意)</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                className="w-full px-4 py-3 rounded-lg border border-navy-900/20 focus:border-navy-900 focus:ring-1 focus:ring-navy-900 outline-none transition-colors"
                                                placeholder="株式会社〇〇"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-navy-900 mb-2">
                                                お名前 <span className="text-red-500 text-xs ml-1">(必須)</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-navy-900/20 focus:border-navy-900 focus:ring-1 focus:ring-navy-900 outline-none transition-colors"
                                                placeholder="山田 太郎"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-navy-900 mb-2">
                                                メールアドレス <span className="text-red-500 text-xs ml-1">(必須)</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-navy-900/20 focus:border-navy-900 focus:ring-1 focus:ring-navy-900 outline-none transition-colors"
                                                placeholder="info@example.com"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-navy-900 mb-2">
                                                電話番号 <span className="text-gray-400 text-xs ml-1">(任意)</span>
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                className="w-full px-4 py-3 rounded-lg border border-navy-900/20 focus:border-navy-900 focus:ring-1 focus:ring-navy-900 outline-none transition-colors"
                                                placeholder="03-1234-5678"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-2">
                                                お問い合わせ内容 <span className="text-red-500 text-xs ml-1">(必須)</span>
                                            </label>
                                            <textarea
                                                id="message"
                                                required
                                                rows={6}
                                                className="w-full px-4 py-3 rounded-lg border border-navy-900/20 focus:border-navy-900 focus:ring-1 focus:ring-navy-900 outline-none transition-colors resize-none"
                                                placeholder="ご質問やご相談内容ご記入ください"
                                            ></textarea>
                                        </div>

                                        <div className="pt-4">
                                            <label className="flex items-start gap-3 cursor-pointer group">
                                                <input type="checkbox" required className="mt-1 w-4 h-4 text-navy-900 rounded border-gray-300 focus:ring-navy-900" />
                                                <span className="text-sm text-navy-900/80 group-hover:text-navy-900 transition-colors">
                                                    <a href="/privacy" className="underline hover:text-navy-900 text-navy-900">プライバシーポリシー</a> に同意する
                                                </span>
                                            </label>
                                        </div>

                                        <Button type="submit" size="lg" className="w-full">
                                            送信する
                                        </Button>
                                    </form>
                                </Card>
                            )}
                        </ScrollReveal>
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
