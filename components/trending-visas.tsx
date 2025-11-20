import { Button } from "@/components/ui/button";
import { Star, Calendar, ArrowRight, TrendingUp, Sparkles } from "lucide-react";
import Link from "next/link";

export function TrendingVisas() {
  const visas = [
    {
      country: "Dubai UAE Visa",
      days: "5",
      image: "dubai",
      url: "/dubai-uae.jpg",
      position: "top",
      badge: "Most Popular",
      rating: "4.9",
      applications: "2.5k+",
    },
    {
      country: "Europe Visa",
      days: "7",
      image: "turkey",
      url: "/turkey.jpg",
      position: "center",
      badge: "Hot Deal",
      rating: "4.8",
      applications: "1.8k+",
    },
    {
      country: "UK Visa",
      days: "8",
      image: "uk",
      url: "/uk.jpg",
      position: "bottom",
      badge: "Trending",
      rating: "4.9",
      applications: "3.2k+",
    },
    {
      country: "Australia Visa",
      days: "14",
      image: "australia",
      url: "/australia.jpg",
      position: "center",
      badge: "Fast Track",
      rating: "4.7",
      applications: "1.2k+",
    },
    {
      country: "USA Visa",
      days: "15",
      image: "usa",
      url: "/usa.jpg",
      position: "center",
      badge: "Premium",
      rating: "4.8",
      applications: "2.9k+",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-linear-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <TrendingUp size={18} />
            <span className="text-sm font-semibold">Top Destinations</span>
          </div>

          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Trending Visa Services
          </h2>

          <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
            Discover our most sought-after visa destinations with guaranteed
            fast processing and expert support
          </p>

          <div className="flex items-center justify-center gap-2">
            <div className="w-16 h-1 bg-primary rounded-full" />
            <Sparkles size={20} className="text-primary" />
            <div className="w-16 h-1 bg-primary rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {visas.map((visa, idx) => (
            <div
              key={idx}
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group border border-border hover:border-primary/50 hover:-translate-y-2"
            >
              <div className="relative h-52 overflow-hidden">
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${visa.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: visa.position,
                  }}
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

                <div className="absolute top-3 left-3">
                  <div className="bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm">
                    {visa.badge}
                  </div>
                </div>

                <div className="absolute top-3 right-3">
                  <div className="bg-white/95 backdrop-blur-sm px-2.5 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                    <Star
                      size={14}
                      className="fill-yellow-400 text-yellow-400"
                    />
                    <span className="text-xs font-bold text-gray-900">
                      {visa.rating}
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-primary" />
                      <span className="text-sm font-semibold text-gray-900">
                        {visa.days} days
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {visa.applications}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <h3 className="font-serif text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                  {visa.country}
                </h3>

                <p className="text-sm text-muted-foreground mb-5">
                  Fast-track processing with expert documentation support
                </p>

                <Link
                  href={`/${visa.country.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group/btn rounded-xl transition-all duration-300 shadow-md hover:shadow-lg">
                    <span>Apply Now</span>
                    <ArrowRight
                      size={16}
                      className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                    />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/visa-and-services">
            <Button
              variant="outline"
              size="lg"
              className="group border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            >
              View All Visa Services
              <ArrowRight
                size={18}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
