import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { Mission } from "@/components/sections/mission";
import { Company } from "@/components/sections/company";
import { ContactCta } from "@/components/sections/contact-cta";

export default function Home() {
    return (
        <>
            <Header />
            <main className="min-h-screen">
                <Hero />
                <Features />
                <Pricing />
                <Testimonials />
                <Mission />
                <Company />
                <ContactCta />
            </main>
            <Footer />
        </>
    );
}
