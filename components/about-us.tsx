export function AboutUs() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div
              className="w-full h-96 rounded-lg overflow-hidden shadow-xl border border-border"
              style={{
                backgroundImage: "url(/new-logo-no-bg.png)",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>

          <div>
            <p className="text-primary text-sm font-semibold tracking-widest mb-4">
              ABOUT US
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Your Trusted Partner in Global Mobility
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              At Dreamwise Global, we believe that travel should be accessible
              to everyone. With over a decade of experience in visa consultancy,
              we&apos;ve helped thousands of clients achieve their travel
              dreams.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Our team of expert visa consultants combines deep knowledge of
              immigration processes with a commitment to transparency and client
              satisfaction. We handle every application with precision and care,
              ensuring smooth processing from start to finish.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="text-foreground">
                  Experienced team with proven track record
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="text-foreground">
                  Transparent pricing with no hidden charges
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="text-foreground">
                  Real-time application tracking and updates
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="text-foreground">
                  Dedicated support throughout your journey
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
