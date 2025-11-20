"use client";

import { useState } from "react";
import {
  Star,
  CheckCircle,
  Globe,
  FileText,
  Clock,
  ArrowRight,
  Shield,
  Zap,
} from "lucide-react";

export default function VisaServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const visas = [
    {
      country: "Dubai UAE Visa",
      days: "5",
      price: "Starting from $299",
      image: "/dubai-uae.jpg",
      position: "top",
      category: "asia",
      description:
        "Experience the luxury and innovation of Dubai with our fast-track visa processing.",
      features: [
        "Express processing",
        "Multiple entry options",
        "Business & tourist visas",
        "Family visa packages",
      ],
      processingTime: "3-5 working days",
      validity: "30-90 days",
    },
    {
      country: "Europe Visa",
      days: "7",
      price: "Starting from $499",
      image: "/turkey.jpg",
      position: "center",
      category: "europe",
      description:
        "Explore 26 European countries with a single Schengen visa application.",
      features: [
        "Schengen coverage",
        "Tourist & business",
        "Travel insurance included",
        "Expert guidance",
      ],
      processingTime: "5-7 working days",
      validity: "Up to 90 days",
    },
    {
      country: "UK Visa",
      days: "8",
      price: "Starting from $599",
      image: "/uk.jpg",
      position: "bottom",
      category: "europe",
      description:
        "Visit the United Kingdom for business, tourism, or family visits with confidence.",
      features: [
        "Standard & priority service",
        "6-month validity",
        "Expert documentation",
        "Interview preparation",
      ],
      processingTime: "6-8 working days",
      validity: "6 months",
    },
    {
      country: "Australia Visa",
      days: "14",
      price: "Starting from $699",
      image: "/australia.jpg",
      position: "center",
      category: "oceania",
      description:
        "Discover the land down under with our comprehensive Australian visa services.",
      features: [
        "eVisitor & tourist visas",
        "Work & holiday options",
        "Health insurance assistance",
        "Complete documentation",
      ],
      processingTime: "10-14 working days",
      validity: "Up to 12 months",
    },
    {
      country: "USA Visa",
      days: "15",
      price: "Starting from $799",
      image: "/usa.jpg",
      position: "center",
      category: "americas",
      description:
        "Navigate the US visa process with our experienced team guiding you every step.",
      features: [
        "B1/B2 tourist visas",
        "Interview scheduling",
        "DS-160 assistance",
        "Post-approval support",
      ],
      processingTime: "12-15 working days",
      validity: "Up to 10 years",
    },
    // {
    //   country: "Canada Visa",
    //   days: "10",
    //   price: "Starting from $649",
    //   image: "/dubai-uae.jpg",
    //   position: "center",
    //   category: "americas",
    //   description:
    //     "Experience Canada's natural beauty and vibrant cities with our visa assistance.",
    //   features: [
    //     "eTA & visitor visas",
    //     "Biometric services",
    //     "Multiple entry options",
    //     "Family applications",
    //   ],
    //   processingTime: "8-10 working days",
    //   validity: "Up to 10 years",
    // },
    // {
    //   country: "Singapore Visa",
    //   days: "4",
    //   price: "Starting from $249",
    //   image: "/turkey.jpg",
    //   position: "center",
    //   category: "asia",
    //   description:
    //     "Visit the Lion City with our quick and efficient Singapore visa processing.",
    //   features: [
    //     "Electronic visa",
    //     "Fast processing",
    //     "Multiple entry",
    //     "Business support",
    //   ],
    //   processingTime: "3-4 working days",
    //   validity: "30-90 days",
    // },
    // {
    //   country: "Japan Visa",
    //   days: "9",
    //   price: "Starting from $549",
    //   image: "/uk.jpg",
    //   position: "center",
    //   category: "asia",
    //   description:
    //     "Explore Japan's unique blend of tradition and modernity with our visa services.",
    //   features: [
    //     "Tourist & business visas",
    //     "Cultural exchange support",
    //     "Document translation",
    //     "Itinerary assistance",
    //   ],
    //   processingTime: "7-9 working days",
    //   validity: "15-90 days",
    // },
  ];

  const categories = [
    { id: "all", name: "All Destinations", icon: Globe },
    { id: "asia", name: "Asia", icon: Globe },
    { id: "europe", name: "Europe", icon: Globe },
    { id: "americas", name: "Americas", icon: Globe },
    { id: "oceania", name: "Oceania", icon: Globe },
  ];

  const filteredVisas =
    selectedCategory === "all"
      ? visas
      : visas.filter((visa) => visa.category === selectedCategory);

  const benefits = [
    {
      icon: Zap,
      title: "Fast Processing",
      description:
        "Get your visa processed in record time with our expedited services",
    },
    {
      icon: Shield,
      title: "100% Secure",
      description:
        "Your documents and personal information are completely protected",
    },
    {
      icon: CheckCircle,
      title: "High Success Rate",
      description: "98% approval rate with our expert documentation assistance",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description:
        "Round-the-clock assistance for all your visa-related queries",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-black text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-black via-gray-900 to-black opacity-90" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Visa & Immigration Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Your trusted partner for seamless visa processing to destinations
              worldwide
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <CheckCircle className="text-green-400" size={20} />
                <span>98% Success Rate</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <Globe className="text-blue-400" size={20} />
                <span>50+ Countries</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <FileText className="text-purple-400" size={20} />
                <span>Expert Documentation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-4">
                  <benefit.icon size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <category.icon size={18} />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVisas.map((visa, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-black transition-all duration-300 group hover:shadow-2xl"
              >
                <div
                  className="h-56 relative overflow-hidden"
                  style={{
                    backgroundImage: `url(${visa.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: visa.position,
                  }}
                >
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white">
                      <Clock size={16} />
                      <span className="text-sm font-medium">
                        {visa.processingTime}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {visa.country}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {visa.description}
                  </p>

                  <div className="flex items-center justify-between mb-4 pb-4 border-b">
                    <div>
                      <div className="text-xs text-gray-500 uppercase">
                        Starting From
                      </div>
                      <div className="text-xl font-bold text-gray-900">
                        {visa.price}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500 uppercase">
                        Validity
                      </div>
                      <div className="text-sm font-semibold text-gray-900">
                        {visa.validity}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {visa.features.slice(0, 3).map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <CheckCircle
                          size={16}
                          className="text-green-500 mt-0.5 shrink-0"
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group">
                    Apply Now
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 text-lg">
              Simple and streamlined visa application process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Choose Destination",
                desc: "Select your visa type and destination country",
              },
              {
                step: "02",
                title: "Submit Documents",
                desc: "Upload required documents securely online",
              },
              {
                step: "03",
                title: "We Process",
                desc: "Our experts handle your application professionally",
              },
              {
                step: "04",
                title: "Get Your Visa",
                desc: "Receive your approved visa on time",
              },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-black text-white rounded-full text-2xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gray-300 -z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our visa experts guide you through the application process
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Get Free Consultation
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-black transition-colors">
              View All Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
