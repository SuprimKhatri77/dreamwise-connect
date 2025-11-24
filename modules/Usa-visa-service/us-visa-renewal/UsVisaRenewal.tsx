"use client";
import React from "react";

const UsVisaRenewal = ({ whatsappNumber }: { whatsappNumber: string }) => {
  const phone = whatsappNumber;
  const email = "info@dreamwiseconnect.com";
  const faqs = [
    {
      q: "How long does the renewal process take?",
      a: "Once your documents are submitted, the renewal typically takes 15–25 days.",
    },
    {
      q: "How do I apply for a US visa renewal from Dubai?",
      a: "You can send your documents to us via WhatsApp or email. Our team will review them, prepare your file, and guide you through the remaining steps.",
    },
    {
      q: "How can I pay for the US visa dropbox service?",
      a: "Payments can be made online, via bank transfer, at our office (cash or card), or through your nearest money exchange center.",
    },
  ];

  const documents = [
    "Original Passport",
    "UAE residence visa copy",
    "Emirates ID copy",
    "Current US visa",
    "Two photos (2x2, white background, no smile, no glasses)",
    "Original NOC from employer or sponsor (we will provide the exact format)",
  ];

  const eligibility = [
    "You can renew your visa within 12 months after your previous visa expires.",
    "You must meet all basic requirements for your visa type.",
    "Interview is usually not required for B1/B2 dropbox submissions.",
  ];

  const updatedRules = [
    "Dropbox eligibility is no longer guaranteed for all nationalities.",
    "Each case is reviewed individually based on your visa history.",
    "Some applicants may be asked to attend an interview depending on the consular officer’s decision.",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 space-y-10 py-10">
      <div className="w-full text-gray-900 space-y-10">
        {/* Title */}
        <h1 className="pt-2 sm:pt-5 text-3xl md:text-4xl font-bold text-black">
          US Visa Renewal for UAE Residents
        </h1>

        {/* Intro Section */}
        <section className="space-y-4">
          <p>
            Renewing your US visa from Dubai has never been easier. Dream Wise
            Connect provides a reliable and professional service for UAE
            residents who need B1/B2 US visa renewal using the dropbox (no
            interview) method.
          </p>

          <p>
            With over a decade of experience, our visa experts prepare your
            application accurately, organize your documents, and manage the full
            process so your renewal is smooth and stress-free.
          </p>
        </section>

        {/* Eligibility */}
        <section>
          <h2 className="text-2xl font-semibold text-black mb-3">
            Basic Eligibility for US Visa Renewal
          </h2>
          <ul className="space-y-2 list-disc pl-6 text-gray-800">
            {eligibility.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Documents */}
        <section>
          <h2 className="text-2xl font-semibold text-black mb-3">
            Required Documents
          </h2>
          <ul className="space-y-2 list-disc pl-6 text-gray-800">
            {documents.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Updated Guidelines */}
        <section>
          <h2 className="text-2xl font-semibold text-black mb-3">
            Updated Dropbox Guidelines
          </h2>
          <ul className="space-y-2 list-disc pl-6 text-gray-800">
            {updatedRules.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* How Long */}
        <section>
          <h2 className="text-2xl font-semibold text-black mb-3">
            Processing Time
          </h2>
          <p className="text-gray-800">
            After submission, the US visa renewal typically takes{" "}
            <strong>15–25 days</strong>.
          </p>
        </section>

        {/* FAQ */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-black">
            Frequently Asked Questions
          </h2>

          {faqs.map((item, index) => (
            <div key={index} className="border-b pb-4">
              <h3 className="font-semibold text-blue-600">
                {index + 1}. {item.q}
              </h3>
              <p className="text-gray-700 mt-2">{item.a}</p>
            </div>
          ))}
        </section>

        {/* Contact */}
        <section className="bg-blue-50 p-6 rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-2 text-black">
            Contact Dream Wise Connect
          </h2>
          <p className="text-gray-700">
            Ready to renew your US visa? Send your documents today and let our
            team handle the complete process for you.
          </p>

          <div className="mt-4 space-y-1">
            <p>
              <strong>WhatsApp:</strong> {phone}
            </p>
            <p>
              <strong>Office:</strong> +971 4 2635 888
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UsVisaRenewal;
