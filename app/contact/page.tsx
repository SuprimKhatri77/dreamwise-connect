"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const EMAIL = process.env.EMAIL || "Info@dreamwisegroup.com";
  const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER || "+971545129737";
  const ADDRESS =
    process.env.ADDRESS ||
    "1st floor , Al raffa, Bur Dubai,Devika Business Center Branch";
  return (
    <div className="min-h-screen flex flex-col">
      <section className="py-12 md:py-16 bg-linear-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Get In Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about our visa services? We&apos;re here to help
              you on your journey
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Mail className="text-primary" size={24} />
              </div>
              <h3 className="font-serif font-semibold text-foreground mb-2 text-lg">
                Email
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {EMAIL}
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Phone className="text-primary" size={24} />
              </div>
              <h3 className="font-serif font-semibold text-foreground mb-2 text-lg">
                Phone
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {WHATSAPP_NUMBER}
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="text-primary" size={24} />
              </div>
              <h3 className="font-serif font-semibold text-foreground mb-2 text-lg">
                Address
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {ADDRESS}
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="text-primary" size={24} />
              </div>
              <h3 className="font-serif font-semibold text-foreground mb-2 text-lg">
                Hours
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Mon-Sat : 10AM-8PM
              </p>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-serif font-semibold text-foreground mb-3 text-lg">
                  How long does visa processing take?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Processing times vary by country, typically ranging from 2-4
                  weeks. We provide real-time tracking for all applications.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-serif font-semibold text-foreground mb-3 text-lg">
                  What documents do I need?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Required documents vary by visa type and destination country.
                  Our consultants will provide a complete checklist based on
                  your application.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-serif font-semibold text-foreground mb-3 text-lg">
                  Is there a guarantee of visa approval?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  While we maintain a 99% success rate, visa decisions are
                  ultimately made by immigration authorities. We maximize your
                  chances with expert guidance.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-serif font-semibold text-foreground mb-3 text-lg">
                  Can I track my application?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Yes! All our clients get access to our real-time tracking
                  system to monitor their application status 24/7.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
