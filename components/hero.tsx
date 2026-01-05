import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full h-[600px] md:min-h-screen bg-linear-to-r from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url(/hero-img.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-primary text-sm font-semibold mb-4 tracking-widest">
          YOUR TRUSTED PARTNER
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
          Explore the world with confidence
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Fast and reliable visa services combined with premium travel packages
          designed for your journey
        </p>
        <Link href="/visa-and-services">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
          >
            Show Packages
          </Button>
        </Link>
      </div>
    </section>
  );
}
