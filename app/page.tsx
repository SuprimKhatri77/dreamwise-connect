import { Hero } from "@/components/hero";
import { TrustSection } from "@/components/trust-section";
import { AboutUs } from "@/components/about-us";
import { FAQ } from "@/components/faq";
import { TrendingVisas } from "@/components/trending-visas";

export default function Home() {
  const whatsappNumber = process.env.WHATSAPP_NUMBER!;
  return (
    <main className="w-full">
      <Hero />
      <TrustSection />
      <TrendingVisas whatsappNumber={whatsappNumber} />
      <AboutUs />
      <FAQ />
    </main>
  );
}
