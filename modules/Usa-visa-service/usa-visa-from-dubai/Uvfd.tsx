"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Briefcase, Plane, FileText, ShieldCheck, Clock } from "lucide-react";
import VisaOptions from "../VisaOptions";

export default function UsaVisaFromDubai() {
  return (
    <div className="w-full py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-10 text-gray-800">
        {/* Title & Description */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-4xl font-bold text-black mb-4">
            USA Visa From Dubai
          </h1>
          <p className="text-base md:text-lg max-w-3xl mx-auto text-gray-600">
            Planning a trip to the USA from Dubai for tourism, business, or a
            family visit? DreamWise Connect makes the entire visa process
            simple, fast, and stress‑free for UAE residents.
          </p>
        </div>

        {/* Visa Types */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-black">
            Types of USA Visas You Can Apply For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="rounded-2xl shadow-md p-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                  <Briefcase className="w-5 h-5" /> B1 Visa – Business Visa
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 space-y-2">
                <p>This visa is ideal for professionals traveling for:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Business meetings or conferences</li>
                  <li>Contract negotiations</li>
                  <li>Short‑term training</li>
                  <li>Exploring investment opportunities</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-md p-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                  <Plane className="w-5 h-5" /> B2 Visa – Tourist Visa
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 space-y-2">
                <p>The B2 visa is perfect for travelers wanting to:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Enjoy a holiday in the USA</li>
                  <li>Visit family or friends</li>
                  <li>Seek medical treatment</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Required Documents */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-black">
            Required Documents for USA Visa
          </h2>
          <Card className="rounded-2xl shadow-md p-6">
            <CardContent>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Valid UAE Residence Visa</li>
                <li>Emirates ID</li>
                <li>Passport with at least 6 months validity</li>
                <li>Recent bank statement</li>
                <li>No previous visa violations or legal issues</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Step-by-step process */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-black">
            How to Apply – Step‑by‑Step Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="rounded-2xl shadow-md p-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-semibold">
                  <FileText className="w-5 h-5" /> Step 1: Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                Our visa advisors will guide you and answer all your questions.
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-md p-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-semibold">
                  <ShieldCheck className="w-5 h-5" /> Step 2: Submit Documents
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                Send your passport copy, Emirates ID, and bank statement.
                We&apos;ll give you a full checklist.
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-md p-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-semibold">
                  <Clock className="w-5 h-5" /> Step 3: Visa Appointment
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                We arrange your interview at the US Embassy with priority slots.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Processing Time */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-black">
            Visa Processing Time
          </h2>
          <Card className="rounded-2xl shadow-md p-6 text-gray-700 space-y-3">
            <p>⏳ Embassy processing: 10–15 business days after submission.</p>
            <p>📅 Appointment scheduling: We secure your slot in 40–60 days.</p>
            <p>
              📝 We ensure your DS‑160 form and documents are correctly handled.
            </p>
          </Card>
        </section>

        {/* Why Choose Us */}
        <section className="mb-20">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-black">
            Why Choose DreamWise Connect?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="rounded-2xl border-2 border-blue-600 shadow-md p-6 text-gray-700">
              High visa approval rate with expert documentation support.
            </Card>
            <Card className="rounded-2xl border-2 border-blue-600 shadow-md p-6 text-gray-700">
              Fast & urgent USA visa appointments handled professionally.
            </Card>
            <Card className="rounded-2xl border-2 border-blue-600 shadow-md p-6 text-gray-700">
              Trusted by thousands of applicants with proven results.
            </Card>
            <Card className="rounded-2xl border-2 border-blue-600 shadow-md p-6 text-gray-700">
              Multilingual support and easy communication via WhatsApp or call.
            </Card>
            <Card className="rounded-2xl border-2 border-blue-600 shadow-md p-6 text-gray-700">
              Complete DS‑160 form filling, appointment booking & interview
              tips.
            </Card>
          </div>
        </section>

        {/* Contact */}
        <div className="text-center mt-16">
          <h3 className="text-lg md:text-xl font-semibold mb-3 text-black">
            Ready to Start Your USA Visa Application?
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Contact DreamWise Connect today. Let our visa experts handle every
            step while you plan your American journey with confidence.
          </p>
          <button className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all">
            Contact Us
          </button>
        </div>

        <VisaOptions />
      </div>
    </div>
  );
}
