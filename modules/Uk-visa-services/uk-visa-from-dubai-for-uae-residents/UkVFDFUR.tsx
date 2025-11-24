"use client";
"use client";

import React, { JSX } from "react";
import Image from "next/image";

const visaTypes = [
  {
    title: "6-Month Standard Visitor",
    price: "AED 1,700",
    subtitle:
      "Tourism, family visits, short business or study (up to 6 months)",
  },
  {
    title: "2-Year Multiple Entry",
    price: "AED 5,200",
    subtitle: "Frequent travellers who visit the UK often",
  },
  {
    title: "5-Year Multiple Entry",
    price: "AED 7,200",
    subtitle: "Longer-term frequent travel, multiple 6-month visits",
  },
  {
    title: "10-Year Multiple Entry",
    price: "AED 8,200",
    subtitle: "Maximum validity for eligible travellers",
  },
];

const urgentOptions = [
  {
    title: "Priority Service",
    price: "Decision in 5–7 working days",
    extra: "Add AED 2,700 for priority processing",
  },
  {
    title: "Super Priority",
    price: "Decision in 24–48 hours",
    extra: "Add AED 5,200 for super priority processing",
  },
];

const requiredDocs = [
  "Valid passport copy",
  "UAE residence visa (valid for 3–6 months)",
  "Emirates ID copy",
  "One passport-size photo (white background)",
  "6 months bank statement",
  "Original NOC from employer/sponsor (we provide format)",
  "Trade license copy (if business owner/partner)",
];

const phone = "+971502315207";
const email = "info@dreamwiseconnect.com";

export default function ApplyUkVisaFromDubai(): JSX.Element {
  return (
    <div className="w-full bg-white text-black">
      <div className="max-w-5xl mx-auto px-3 md:px-5 lg:px-12  py-12">
        {/* HERO */}
        <header className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          {/* TEXT SECTION */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-extrabold text-black leading-tight">
              Apply For UK Visa From Dubai
            </h1>

            <p className="mt-4 text-gray-700 text-sm md:text-base max-w-2xl">
              Planning a trip to the United Kingdom from Dubai?
              <span className="font-semibold text-blue-600">
                {" "}
                Dream Wise Connect{" "}
              </span>
              simplifies the UK visitor and business visa process for UAE
              residents — from online forms to appointment scheduling and
              accurate documentation.
            </p>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">✅</span>
                <span className="text-gray-800">
                  Trusted by thousands of travellers
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">⏱️</span>
                <span className="text-gray-800">
                  Fast processing & priority options
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">🌐</span>
                <span className="text-gray-800">24/7 multilingual support</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">🔒</span>
                <span className="text-gray-800">
                  Secure, government-compliant handling
                </span>
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#apply"
                className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Start Your Application
              </a>

              <a
                href="#contact"
                className="inline-block border border-gray-200 px-5 py-2 rounded-lg text-black hover:bg-gray-50 transition"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* IMAGE FIXED SECTION */}
          <div className="w-full max-w-sm mx-auto lg:max-w-full">
            <Image
              src="/img/uk.jpg"
              alt="UK travel visual"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg object-cover shadow-md"
            />
          </div>
        </header>

        {/* VISA TYPES */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-black">
            UK Visa Options for UAE Residents
          </h2>
          <p className="mt-2 text-gray-700 max-w-3xl">
            Whether you need a short-term visitor visa or a long-term
            multiple-entry visa, our team prepares your application carefully
            and books your VFS appointment on your behalf.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visaTypes.map((v, i) => (
              <article
                key={i}
                className="bg-white flex flex-col justify-between border rounded-2xl p-5 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-2 justify-between">
                  <h3 className="text-lg font-semibold">{v.title}</h3>
                  <span className="text-sm text-blue-600 font-semibold">
                    {v.price}
                  </span>
                </div>
                <p className="mt-3 text-gray-700 text-sm">{v.subtitle}</p>

                <div className="mt-4 flex items-center justify-between">
                  <a
                    href="#apply"
                    className="text-sm bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    Apply Now
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* URGENT OPTIONS */}
        <section className="mt-12 bg-gray-50 border rounded-2xl p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-black">
                Urgent Processing Options
              </h3>
              <p className="mt-2 text-gray-700">
                If you need a fast decision, choose Priority or Super Priority
                processing.
              </p>
            </div>
            <div className="flex gap-3">
              <div className="text-right">
                <div className="text-sm text-gray-600">Priority</div>
                <div className="text-lg font-semibold">+ AED 2,700</div>
                <div className="text-xs text-gray-500">
                  Decision in 5–7 working days
                </div>
              </div>
              <div className="text-right border-l pl-4">
                <div className="text-sm text-gray-600">Super Priority</div>
                <div className="text-lg font-semibold">+ AED 5,200</div>
                <div className="text-xs text-gray-500">
                  Decision in 24–48 hours
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {urgentOptions.map((opt, i) => (
              <div key={i} className="rounded-lg bg-white p-4 border shadow-sm">
                <h4 className="font-semibold text-black">{opt.title}</h4>
                <p className="text-gray-700 mt-2 text-sm">{opt.price}</p>
                <p className="text-gray-500 text-xs mt-2">{opt.extra}</p>
                <div className="mt-4">
                  <a
                    href="#apply"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
                  >
                    Request Priority
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS STEPS & DOCUMENTS */}
        <section className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold">How the Process Works</h3>
            <ol className="mt-4 list-decimal pl-6 space-y-4 text-gray-700">
              <li>
                <strong>Contact our visa team</strong> — call or WhatsApp us to
                start a free consultation.
              </li>
              <li>
                <strong>Send documents</strong> — passport copy, Emirates ID,
                photos, and bank statements.
              </li>
              <li>
                <strong>We prepare your application</strong> — DS-160 and
                supporting documents will be completed and reviewed.
              </li>
              <li>
                <strong>VFS appointment</strong> — we schedule your appointment
                and guide you on submission day.
              </li>
              <li>
                <strong>Decision & delivery</strong> — choose courier or
                self-collect; passport returned when visa is issued.
              </li>
            </ol>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">Required Documents</h3>
            <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-700">
              {requiredDocs.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>

            <div className="mt-6 bg-white border rounded-lg p-4 shadow-sm">
              <h4 className="font-semibold text-black">Processing Times</h4>
              <p className="mt-2 text-gray-700">
                Normal processing: <strong>15–20 working days</strong>.
              </p>
              <p className="mt-1 text-gray-700">
                Priority: <strong>5–7 days</strong>. Super Priority:{" "}
                <strong>24–48 hours</strong>.
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Optional courier or self collection available. Passport hold
                option: AED 450 (keep passport with you).
              </p>
            </div>
          </div>
        </section>

        {/* PRICING TABLE */}
        <section className="mt-12">
          <h3 className="text-2xl font-semibold">
            UK Visa Fees (Service + Processing)
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-sm text-gray-600">
                  <th className="py-3 pr-6">Type</th>
                  <th className="py-3 pr-6">Details</th>
                  <th className="py-3">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="py-4">6 Months Visitor</td>
                  <td className="py-4 text-gray-700">
                    Single or multiple entry for up to 6 months
                  </td>
                  <td className="py-4 font-semibold">AED 1,700</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="py-4">2 Years Multiple</td>
                  <td className="py-4 text-gray-700">
                    Frequent travel, 6-month stay per visit
                  </td>
                  <td className="py-4 font-semibold">AED 5,200</td>
                </tr>
                <tr className="border-t">
                  <td className="py-4">5 Years Multiple</td>
                  <td className="py-4 text-gray-700">
                    Ideal for regular travellers
                  </td>
                  <td className="py-4 font-semibold">AED 7,200</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="py-4">10 Years Multiple</td>
                  <td className="py-4 text-gray-700">
                    Maximum validity for eligible applicants
                  </td>
                  <td className="py-4 font-semibold">AED 8,200</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* INSURANCE NOTE */}
        <section className="mt-12 bg-blue-50 border-l-4 border-blue-600 p-4 rounded-lg">
          <h4 className="font-semibold text-black">
            Travel Insurance Recommendation
          </h4>
          <p className="text-gray-700 mt-2">
            We strongly recommend worldwide medical travel insurance that covers
            up to <strong>USD 50,000</strong>. This protects you during your UK
            trip and future travels with 24/7 global assistance.
          </p>
        </section>

        {/* CONTACT / CTA */}
        <section
          id="apply"
          className="mt-12 bg-white border rounded-2xl p-6 shadow"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold text-black">
                Ready to apply for your UK visa?
              </h3>
              <p className="mt-2 text-gray-700">
                Send your documents via WhatsApp or email and our visa team will
                get started immediately.
              </p>

              <ul className="mt-3 text-gray-700">
                <li>
                  <strong>WhatsApp:</strong> {phone}
                </li>
                <li>
                  <strong>Office:</strong> +971 4 2635 888
                </li>
                <li>
                  <strong>Email:</strong> {email}
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="tel:+971502315207"
                className="block text-center bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Call / WhatsApp
              </a>
              <a
                href="#contact"
                className="block text-center border border-gray-200 px-4 py-3 rounded-lg"
              >
                Book Consultation
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER NOTE */}
        <footer className="mt-12 text-sm text-gray-600">
          <p>
            <strong>Note:</strong> Dream Wise Connect prepares your application
            and schedules VFS appointments. Visa decisions are made by the UK
            Home Office; processing times may vary. All prices shown include our
            service fees and processing handling unless otherwise noted.
          </p>
        </footer>
      </div>
    </div>
  );
}
