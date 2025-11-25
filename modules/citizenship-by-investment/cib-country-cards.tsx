"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const countries = [
  {
    name: "Antigua & Barbuda",
    description:
      "Gateway to the Caribbean with visa-free travel to 150+ countries. Real estate or economic contribution options available.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
    highlights: [
      "150+ visa-free destinations",
      "No residency requirement",
      "Lifetime citizenship",
    ],
  },
  {
    name: "Commonwealth of Dominica",
    description:
      "Nature island of the Caribbean. Citizenship achieved through real estate investment or donation to the economic diversification fund.",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=300&fit=crop",
    highlights: [
      "Fastest processing (2-3 months)",
      "No language requirement",
      "Flexible investment options",
    ],
  },
  {
    name: "St. Kitts & Nevis",
    description:
      "Pioneer in citizenship programs since 1984. Investment options include real estate development or sustainable growth fund.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=300&fit=crop",
    highlights: [
      "Most established program",
      "No taxation on worldwide income for offshore companies",
      "Free movement in CARICOM",
    ],
  },
  {
    name: "St. Lucia",
    description:
      "Tropical paradise with UNESCO World Heritage sites. Citizenship through real estate investment in approved properties.",
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=500&h=300&fit=crop",
    highlights: [
      "Dual citizenship allowed",
      "Visa waiver to Schengen countries",
      "All-inclusive investment options",
    ],
  },
  {
    name: "Grenada",
    description:
      "Island of spices with growing tech sector. Citizenship via real estate or investment fund contribution.",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=500&h=300&fit=crop",
    highlights: [
      "E-2 treaty investor visa to US",
      "Strong business environment",
      "Transparent process",
    ],
  },
  {
    name: "Vanuatu",
    description:
      "Pacific island nation offering rapid citizenship. Choose from development fund or real estate investment options.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
    highlights: [
      "Quickest approval (1-3 weeks)",
      "Visa-free to 130+ countries",
      "Excellent value",
    ],
  },
  {
    name: "Malta",
    description:
      "EU membership with Mediterranean lifestyle. Citizenship through real estate residency and investment program.",
    image:
      "https://images.unsplash.com/photo-1587974928552-4f4aac51b45d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsdGF8ZW58MHx8MHx8fDA%3D",
    highlights: [
      "EU citizenship benefits",
      "Mediterranean lifestyle",
      "Strategic location",
    ],
  },
  {
    name: "Nauru",
    description:
      "Pacific island offering unique citizenship opportunity. Investment-based pathway to global citizenship.",
    image:
      "https://images.unsplash.com/photo-1553947315-42cee3c8c771?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF1cnV8ZW58MHx8MHx8fDA%3D",
    highlights: ["Affordable option", "Visa-free travel", "Fast processing"],
  },
];

export default function CIBCountryCards({
  whatsappNumber,
}: {
  whatsappNumber: string;
}) {
  const whatsappMessage = encodeURIComponent(
    "Hi, I would like to know more about citizenship by investment programs. Please assist me."
  );

  return (
    <section className="w-full bg-background px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Available Programs
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose from our curated selection of citizenship by investment
            programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {countries.map((country) => (
            <Card
              key={country.name}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="relative h-40 w-full overflow-hidden bg-muted">
                <Image
                  src={country.image || "/placeholder.svg"}
                  alt={country.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-xl">{country.name}</CardTitle>
              </CardHeader>

              <CardContent className="flex-1 space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {country.description}
                </p>

                <div className="space-y-2">
                  {country.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex gap-2 text-xs text-foreground"
                    >
                      <span className="font-bold">•</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={`https://wa.me/${whatsappNumber.replace(
                    /\D/g,
                    ""
                  )}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block"
                >
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Apply Now
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
