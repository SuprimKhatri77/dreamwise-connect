import { Shield, Zap, Eye, HeartHandshake } from "lucide-react";

export function TrustSection() {
  const reasons = [
    {
      icon: Shield,
      title: "Expert Expertise",
      description:
        "Years of experience in visa consultancy and travel services",
    },
    {
      icon: Zap,
      title: "Fast Processing",
      description:
        "Get your visa within 5-10 business days with our priority service",
    },
    {
      icon: Eye,
      title: "Complete Transparency",
      description:
        "Clear fees, no hidden charges, and real-time status updates",
    },
    {
      icon: HeartHandshake,
      title: "24/7 Support",
      description:
        "Dedicated customer support team available whenever you need us",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Trust Dreamwise Connect?
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className="bg-card rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300 border border-border"
              >
                <div className="inline-block p-4 bg-primary/10 rounded-lg mb-4">
                  <Icon size={32} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-card-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
