export const metadata = {
  title: "About Dreamwise Connect - Your Trusted Visa Consultancy",
  description:
    "Learn about Dreamwise Connect, your trusted partner in global mobility with over a decade of visa consultancy experience.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-4 flex flex-col">
      <section className="py-12 md:py-16 bg-linear  -to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              About Dreamwise Connect
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner in making global mobility dreams a reality
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
              Who We Are
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div
                className="w-full h-96 rounded-lg overflow-hidden shadow-lg border border-border"
                style={{
                  backgroundImage: "url(/dreamwise-connect.png)",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Dreamwise Connect is a leading visa consultancy firm dedicated
                  to making international travel accessible and hassle-free.
                  With over a decade of experience, we&apos;ve successfully
                  guided thousands of clients through their visa applications
                  and travel arrangements.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Our mission is simple: to empower individuals and families to
                  explore the world without the stress and confusion that often
                  accompanies visa processes. We believe that travel should be a
                  joy, not a burden.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Founded with a passion for global connectivity, our team
                  brings together expertise in immigration law, travel
                  regulations, and customer service excellence.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12">
              Why Choose Dreamwise Connect?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-serif text-primary">✓</span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  Expert Team
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Experienced visa consultants with deep knowledge of global
                  immigration processes
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-serif text-primary">✓</span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  Transparent Pricing
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  No hidden charges. Clear breakdown of all fees and services
                  included
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-serif text-primary">✓</span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  Real-time Tracking
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Stay updated on your application status with our real-time
                  tracking system
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-serif text-primary">✓</span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  24/7 Support
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Dedicated customer support available throughout your journey
                  with us
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12">
              Our Core Values
            </h2>
            <div className="space-y-6">
              <div className="flex gap-6 bg-card border border-border rounded-lg p-6">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10">
                    <span className="text-primary font-bold">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    Integrity
                  </h3>
                  <p className="text-muted-foreground">
                    We operate with complete transparency and honesty in all our
                    dealings, building trust with every client interaction.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 bg-card border border-border rounded-lg p-6">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10">
                    <span className="text-primary font-bold">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    Excellence
                  </h3>
                  <p className="text-muted-foreground">
                    We maintain the highest standards in every service we
                    provide, constantly improving our processes and knowledge.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 bg-card border border-border rounded-lg p-6">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10">
                    <span className="text-primary font-bold">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    Client-Centric
                  </h3>
                  <p className="text-muted-foreground">
                    Your goals are our goals. We tailor our services to meet
                    your specific needs and timeline.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-12 mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="font-serif text-4xl font-bold text-primary mb-2">
                  10+
                </p>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="font-serif text-4xl font-bold text-primary mb-2">
                  5000+
                </p>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
              <div>
                <p className="font-serif text-4xl font-bold text-primary mb-2">
                  50+
                </p>
                <p className="text-muted-foreground">Countries Covered</p>
              </div>
              <div>
                <p className="font-serif text-4xl font-bold text-primary mb-2">
                  99%
                </p>
                <p className="text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
