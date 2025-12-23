"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
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
            <main className="min-h-screen pt-20 bg-gradient-to-b from-paper to-highlight flex items-center justify-center">
                <Section className="py-16 md:py-24 w-full">
                    {/* Header Section */}
                    <div className="text-center mb-12 md:mb-16">
                        <ScrollReveal>
                            <Typography variant="h1" className="mb-4 text-navy-900">
                                CONTACT
                            </Typography>
                            <Typography variant="h3" className="mb-6 text-navy-900 font-normal">
                                お問い合わせ
                            </Typography>
                            <Typography variant="body" className="max-w-2xl mx-auto text-navy-900/70">
                                導入に関するご相談、デモのご依頼など、お気軽にお問い合わせください。
                            </Typography>
                        </ScrollReveal>
                    </div>

                    <div className="max-w-4xl mx-auto w-full px-4">
                        <ScrollReveal delay={0.2}>
                            {submitted ? (
                                <div className="bg-white rounded-2xl shadow-lg p-12 md:p-16 text-center">
                                    <div className="mb-8">
                                        <div className="w-20 h-20 bg-navy-900 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <Typography variant="h2" className="mb-4">送信完了</Typography>
                                        <Typography variant="body" className="text-navy-900/70">
                                            お問い合わせありがとうございます。<br />
                                            担当者より順次ご連絡させていただきます。
                                        </Typography>
                                    </div>
                                    <Button onClick={() => setSubmitted(false)} size="lg" variant="secondary">
                                        フォームに戻る
                                    </Button>
                                </div>
                            ) : (
                                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                    {/* Form Header with Step Indicator */}
                                    <div className="bg-gradient-to-r from-navy-900 to-navy-800 px-8 md:px-12 py-8">
                                        <Typography variant="h4" className="text-white mb-6 text-center">
                                            MAIL FORM
                                        </Typography>
                                        <Typography variant="small" className="text-white/80 text-center block">
                                            メールフォームでのお問い合わせ
                                        </Typography>
                                    </div>

                                    {/* Form Body */}
                                    <div className="px-8 md:px-12 py-10 md:py-12">
                                        <div className="mb-8 pb-8 border-b border-navy-900/10">
                                            <Typography variant="body" className="text-navy-900/70 text-center">
                                                以下のフォームより<span className="text-navy-900 font-semibold">必須項目</span>を入力・送信してください。<br />
                                                なお、返信に数日要する場合がございます。あらかじめご了承ください。
                                            </Typography>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
                                        <div>
                                            <label htmlFor="company" className="block text-base font-medium text-navy-900 mb-3">
                                                会社名 <span className="text-gray-400 text-sm ml-1">(任意)</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                className="w-full px-5 py-4 text-base rounded-xl border-2 border-navy-900/15 focus:border-navy-900 focus:ring-2 focus:ring-navy-900/20 outline-none transition-all"
                                                placeholder="株式会社〇〇"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="name" className="block text-base font-medium text-navy-900 mb-3">
                                                お名前 <span className="text-red-500 text-sm ml-1">(必須)</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                required
                                                className="w-full px-5 py-4 text-base rounded-xl border-2 border-navy-900/15 focus:border-navy-900 focus:ring-2 focus:ring-navy-900/20 outline-none transition-all"
                                                placeholder="山田 太郎"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-base font-medium text-navy-900 mb-3">
                                                メールアドレス <span className="text-red-500 text-sm ml-1">(必須)</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                className="w-full px-5 py-4 text-base rounded-xl border-2 border-navy-900/15 focus:border-navy-900 focus:ring-2 focus:ring-navy-900/20 outline-none transition-all"
                                                placeholder="info@example.com"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-base font-medium text-navy-900 mb-3">
                                                電話番号 <span className="text-gray-400 text-sm ml-1">(任意)</span>
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                className="w-full px-5 py-4 text-base rounded-xl border-2 border-navy-900/15 focus:border-navy-900 focus:ring-2 focus:ring-navy-900/20 outline-none transition-all"
                                                placeholder="03-1234-5678"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-base font-medium text-navy-900 mb-3">
                                                お問い合わせ内容 <span className="text-red-500 text-sm ml-1">(必須)</span>
                                            </label>
                                            <textarea
                                                id="message"
                                                required
                                                rows={8}
                                                className="w-full px-5 py-4 text-base rounded-xl border-2 border-navy-900/15 focus:border-navy-900 focus:ring-2 focus:ring-navy-900/20 outline-none transition-all resize-none"
                                                placeholder="ご質問やご相談内容をご記入ください"
                                            ></textarea>
                                        </div>

                                        <div className="pt-2">
                                            <label className="flex items-center justify-center gap-3 cursor-pointer group">
                                                <input type="checkbox" required className="w-5 h-5 text-navy-900 rounded border-gray-300 focus:ring-navy-900" />
                                                <span className="text-base text-navy-900/80 group-hover:text-navy-900 transition-colors">
                                                    <a href="/privacy" className="underline hover:text-navy-900 text-navy-900 font-medium">プライバシーポリシー</a> に同意する
                                                </span>
                                            </label>
                                        </div>

                                        <div className="pt-4 flex justify-center">
                                            <Button type="submit" size="lg" className="px-16 text-lg py-6">
                                                送信する
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            )}
                        </ScrollReveal>
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
