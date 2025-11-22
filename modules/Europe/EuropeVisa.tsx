"use client";

import React, { JSX } from "react";
import Image from "next/image";

type CountryCardProps = {
  name: string;
  img: string;
  price: string;
};

const phone = "+971502315207";
const email = "info@dreamwiseconnect.com";

function CountryCard({ name, img, price }: CountryCardProps) {
  return (
    <article className="bg-white border rounded-2xl p-4 shadow-sm hover:shadow-md transition">
      <div className="w-full h-36 relative rounded-lg overflow-hidden">
        <Image src={img} alt={name} fill className="object-cover" />
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-black">{name}</h3>
          <p className="text-sm text-gray-600">Schengen / National visa help</p>
        </div>

        <div className="text-right">
          <div className="text-sm text-gray-500">From</div>
          <div className="text-blue-600 font-semibold">{price}</div>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <a href="#apply" className="inline-block flex-1 text-center bg-blue-600 text-white px-3 py-2 rounded-md text-sm hover:bg-blue-700 transition">Apply</a>

      </div>
    </article>
  );
}

export default function EuropeVisaPage(): JSX.Element {
  const countries = [
    { name: "France", img: "/flags/fc.svg", price: "AED 1,900" },
    { name: "Germany", img: "/flags/gr.svg", price: "AED 1,900" },
    { name: "Italy", img: "/flags/it.svg", price: "AED 1,900" },
    { name: "Spain", img: "/flags/sp.svg", price: "AED 1,800" },
    { name: "Netherlands", img: "/flags/nt.svg", price: "AED 1,950" },
    { name: "Switzerland", img: "/flags/sw.svg", price: "AED 2,400" },
    { name: "Sweden", img: "/flags/sd.svg", price: "AED 1,900" },
    { name: "Greece", img: "/flags/gc.svg", price: "AED 1,750" },
    { name: "Austria", img: "/flags/austria.svg", price: "AED 1,900" },
    { name: "Portugal", img: "/flags/pu.svg", price: "AED 1,800" },
    { name: "Czech Republic", img: "/flags/cr.svg", price: "AED 1,800" },
    { name: "Poland", img: "/flags/pl.svg", price: "AED 1,800" },
  ];

  const faqs = [
    {
      q: "Which visa do I need for Europe (Schengen)?",
      a: "If you plan to visit one or more Schengen countries for tourism, family visits, or short business, you usually need a Schengen (short-stay) visa. For longer stays or special purposes (study, work), different national visas apply.",
    },
    {
      q: "How long does Schengen visa processing take?",
      a: "Processing times vary by country and season. Typically allow 10–30 working days. We advise applying early and we’ll guide on the fastest available route.",
    },
    {
      q: "What documents are required?",
      a: "Common documents: passport (6+ months), UAE residence visa, passport photos, bank statements, travel itinerary, proof of accommodation, travel insurance (min. €30,000 medical), employment or sponsor letters.",
    },
    {
      q: "Do I need travel insurance?",
      a: "Yes — Schengen rules require travel medical insurance with a minimum coverage of €30,000 for medical emergencies and repatriation.",
    },
    {
      q: "Can you help with multi-country trips?",
      a: "Yes. We advise which embassy to apply to (main destination or first entry) and prepare a single application covering your multi-country schedule.",
    },
    {
      q: "How much does a Schengen visa cost?",
      a: "Government fees vary; our service fees depend on country and service level. Typical total service + processing range from AED 1,700 to AED 2,400 per country. We provide exact pricing per destination above.",
    },
    {
      q: "Can you secure urgent appointments?",
      a: "We offer priority appointment services where available and will attempt to secure earlier slots depending on embassy/VFS availability.",
    },
  ];

  return (
    <div className="w-full bg-white text-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 py-12">

        {/* HERO */}
        <header className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-extrabold text-black leading-tight">
              Europe & Schengen Visas from Dubai
            </h1>

            <p className="mt-4 text-gray-700 text-sm md:text-base max-w-2xl">
              Planning a trip to Europe? <span className="font-semibold text-blue-600">Dream Wise Connect</span> helps UAE residents with Schengen and national visas — from document preparation to appointment booking and submission.
            </p>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">✅</span>
                <span className="text-gray-800">Complete document support</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">⏱️</span>
                <span className="text-gray-800">Priority appointment assistance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">🔍</span>
                <span className="text-gray-800">Accurate DS-160 / local forms guidance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">🔒</span>
                <span className="text-gray-800">Secure handling & fast response</span>
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#countries" className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
                Browse Country Visas
              </a>
              <a href="#contact" className="inline-block border border-gray-200 px-5 py-2 rounded-lg text-black hover:bg-gray-50 transition">
                Contact Us
              </a>
            </div>
          </div>

          {/* HERO IMAGE — using uploaded file path per your instruction */}
          <div className="rounded-lg overflow-hidden shadow-sm">
            <Image
              src={"/img/eu.jpg"}
              alt="Europe travel"
              width={1200}
              height={800}
              className="w-full h-64 md:h-80 lg:h-full object-cover"
            />
          </div>
        </header>

        {/* Overview */}
        <section className="mt-10 space-y-6">
          <h2 className="text-2xl font-semibold text-black">Overview</h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl">
            The Schengen area covers many European countries allowing short visits (typically up to 90 days in any 180-day period).
            Depending on your travel plan (single country or multi-country), we will advise which consulate to apply through and prepare a complete, embassy-ready application.
          </p>
        </section>

        {/* Country Cards */}
        <section id="countries" className="mt-10">
          <h2 className="text-2xl font-semibold text-black mb-4">Popular Country Visa Services</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((c) => (
              <CountryCard key={c.name} name={c.name} img={c.img} price={c.price} />
            ))}
          </div>
        </section>

        {/* Details */}
        <section className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-black">Required Documents</h3>
            <ul className="mt-4 list-disc pl-6 text-gray-700 space-y-2">
              <li>Valid passport (6+ months)</li>
              <li>UAE residence visa copy</li>
              <li>Passport-size photos (white background)</li>
              <li>Proof of funds (bank statements)</li>
              <li>Travel itinerary and hotel bookings</li>
              <li>Travel insurance with minimum €30,000 medical coverage</li>
              <li>Employment letter or sponsor documents</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black">Processing & Priority Options</h3>
            <p className="mt-4 text-gray-700">
              Standard processing typically takes between 10–30 working days. Priority or expedited slots may be available at additional cost — availability depends on the embassy/VFS center.
            </p>

            <div className="mt-6 bg-gray-50 p-4 rounded-lg border">
              <h4 className="font-semibold">Fast-Track Tip</h4>
              <p className="mt-2 text-gray-700 text-sm">
                If you have urgent travel, contact us immediately — we’ll attempt to secure earlier appointments and advise on any priority services offered by the consulate.
              </p>
            </div>
          </div>
        </section>

        {/* How to Apply */}
        <section id="apply" className="mt-12">
          <h2 className="text-2xl font-semibold text-black">How to Apply</h2>
          <ol className="mt-4 list-decimal pl-6 space-y-3 text-gray-700">
            <li>Contact Dream Wise Connect for a short consultation.</li>
            <li>Gather and send required documents via WhatsApp or email.</li>
            <li>We prepare the application, fill forms, and submit to the correct consulate.</li>
            <li>Attend your VFS appointment for biometrics (we help schedule).</li>
            <li>Receive visa decision and collect passport (courier or self-collect).</li>
          </ol>

          <div className="mt-4 text-gray-700">
            <p>
              WhatsApp: <strong>{phone}</strong><br />
              Email: <strong>{email}</strong>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-black">Frequently Asked Questions</h2>

          <div className="mt-6 space-y-6">
            {faqs.map((f, i) => (
              <div key={i} className="border-b pb-4">
                <h3 className="font-semibold text-blue-600">{i + 1}. {f.q}</h3>
                <p className="text-gray-700 mt-2">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <footer id="contact" className="mt-12 bg-gray-50 p-6 rounded-lg shadow-sm text-center">
          <h3 className="text-xl font-semibold text-black">Ready to Apply for Your Europe Visa?</h3>
          <p className="mt-2 text-gray-700">Send your documents on WhatsApp or email and our visa specialists will handle everything for you.</p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+971502315207" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">Call / WhatsApp</a>
            <a href="#apply" className="inline-block border border-gray-200 px-6 py-3 rounded-lg">Start Application</a>
          </div>
        </footer>

      </div>
    </div>
  );
}
