"use client";

import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function DubaiTransitVisaCompo({
  whatsappNumber,
}: {
  whatsappNumber: string;
}) {
  const phone = whatsappNumber;
  const email = "info@dreamwiseconnect.com";

  const whatsappMessage = encodeURIComponent(
    "Hi, I would like to know more about Dubai Transit Visa program. Please assist me."
  );

  return (
    <div className="w-full flex flex-col gap-10 px-3 md:px-5 lg:px-12 ">
      <div className="relative w-full">
        {/* Background Image */}
        <div className="relative w-full h-[260px] md:h-[380px] lg:h-[480px] overflow-hidden">
          <Image
            src="/img/Dubai.jpg"
            alt="Dubai Transit Visa"
            fill
            className="object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Centered Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-white font-bold text-3xl md:text-5xl lg:text-6xl leading-tight drop-shadow-md">
              Dubai Transit Visa <br className="hidden md:block" />
              <span className="text-blue-400">48 & 96 Hours</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section1 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 space-y-10">
        <div className="w-full overflow-hidden flex justify-start ">
          <div>
            <Image
              src="/img/visa.JPG"
              alt="Dubai visa"
              className="w-full rounded-lg object-cover object-bottom-left max-h-[400px]"
              width={1200}
              height={500}
            />
          </div>
        </div>

        <div className="text-gray-900 space-y-8">
          {/* Section */}
          <div>
            {/* Title */}
            <h1 className="font-semibold text-2xl md:text-3xl mb-2">
              Dubai Transit Visa Guide
            </h1>
            <div className="w-full mx-auto space-y-6">
              {/* Description */}
              <p className="text-sm md:text-base text-gray-800 leading-relaxed">
                A Dubai transit visa allows travelers with a layover in the UAE
                to enter the country for a short stay. It’s ideal for passengers
                who wish to make the most of their stopover by exploring the
                city or relaxing before their onward journey.
              </p>

              {/* Bullet Points */}
              <ul className="list-decimal list-inside space-y-2 text-sm md:text-base text-gray-800">
                <li>
                  Discover Dubai’s famous attractions like the Burj Khalifa and
                  Dubai Mall.
                </li>
                <li>Meet friends or family during your short stopover.</li>
                <li>
                  Check into a hotel and rest comfortably outside the airport.
                </li>
              </ul>

              {/* More Info */}
              <p className="text-sm md:text-base text-gray-800 leading-relaxed">
                A transit visa is issued only when your next confirmed flight is
                within a short time frame. You can choose between a{" "}
                <span className="font-semibold">48-hour</span> or{" "}
                <span className="font-semibold">96-hour</span> visa option.
                <br />
                <br />
                Please note that transit visas cannot be renewed or extended.
                Once the validity period expires, travelers must continue their
                onward journey.
              </p>

              {/* CTA Box */}
              <div className="p-5 bg-white rounded-xl shadow-md border border-gray-200">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                  Need a Dubai Transit Visa?
                </h2>

                <p className="text-sm md:text-base text-gray-800">
                  Get quick and reliable visa assistance with{" "}
                  <span className="font-semibold">Dream Wise Connect</span>. We
                  provide fast processing for transit visas along with travel
                  insurance—delivered within
                  <span className="font-semibold"> 24 hours</span>.
                </p>

                {/* Contact */}
                <div className="mt-4">
                  <a
                    href={`https://wa.me/${whatsappNumber.replace(
                      /\D/g,
                      ""
                    )}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all text-sm md:text-base"
                  >
                    Contact Dream Wise Connect
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-gray-900 space-y-8">
          <h1 className="text-black font-semibold text-xl md:text-2xl mb-4">
            Get your transit visa in 3 steps!
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="bg-white p-5 rounded-xl shadow-sm border flex flex-col items-center text-center">
              <Image
                src="/filesend.svg"
                height={120}
                width={150}
                alt="Send passport"
              />
              <h2 className="mt-4 text-gray-900 font-medium text-sm md:text-base">
                <span className="font-bold">1)</span> Send your passport copy to
                us via Email or WhatsApp.
              </h2>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-5 rounded-xl shadow-sm border flex flex-col items-center text-center">
              <Image
                src="/Payment.svg"
                height={120}
                width={150}
                alt="Payment"
              />
              <h2 className="mt-4 text-gray-900 font-medium text-sm md:text-base">
                <span className="font-bold">2)</span> Make a secure online or
                offline payment.
              </h2>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-5 rounded-xl shadow-sm border flex flex-col items-center text-center">
              <Image
                src="/Ok.svg"
                height={120}
                width={150}
                alt="Visa approval"
              />
              <h2 className="mt-4 text-gray-900 font-medium text-sm md:text-base">
                <span className="font-bold">3)</span> Get your visa to your
                email or WhatsApp
              </h2>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Why Choose <span className="text-blue-600">Dream Wise Connect</span>
            ?
          </h1>

          {/* Benefits Section */}
          <div className="space-y-6">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Benefits of Our Service
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Fast visa processing",
                "Hassle-free application",
                "Professional documentation assistance",
                "Easy & quick approval process",
                "Affordable visa pricing",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="text-blue-600 w-5 h-5 mt-1" />
                  <span className="text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visa Types Section */}
          <div className="space-y-6">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Dubai Transit Visa Types
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 48-hour visa */}
              <div className="bg-white rounded-xl shadow-sm border p-6 space-y-3">
                <h3 className="font-bold text-lg text-gray-900">
                  48-Hour Transit Visa
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Ideal for short layovers under two days. Perfect if
                  you&apos;re stopping in Dubai before your final destination.
                </p>
              </div>

              {/* 96-hour visa */}
              <div className="bg-white rounded-xl shadow-sm border p-6 space-y-3">
                <h3 className="font-bold text-lg text-gray-900">
                  96-Hour Transit Visa
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Suitable for travelers wishing to explore Dubai more
                  comfortably during a 4-day stopover.
                </p>
              </div>
            </div>
          </div>

          {/* Eligibility */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Eligibility Requirements
            </h2>
            <ul className="space-y-2 text-gray-800 text-sm md:text-base">
              <li>• Must be traveling through Dubai to another country.</li>
              <li>• Must have a confirmed onward flight.</li>
              <li>• Passport must be valid for at least 6 months.</li>
              <li className="text-gray-600 text-xs">
                *Some nationalities may need to apply before arrival—contact us
                to confirm.
              </li>
            </ul>
          </div>

          {/* Required Documents */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Documents Required
            </h2>
            <ul className="space-y-2 text-gray-800 text-sm md:text-base">
              <li>• Passport copy</li>
              <li>• One passport-sized photo</li>
              <li>• Transit airline ticket</li>
            </ul>
          </div>

          {/* Processing Time */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Processing Time
            </h2>
            <p className="text-gray-800 text-sm md:text-base">
              <span className="font-medium">Standard:</span> 2 working days
            </p>
          </div>

          {/* How to Apply */}
          <div className="space-y-6 bg-white shadow-md border p-6 rounded-xl">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              How to Apply for a Dubai Transit Visa
            </h2>

            <ul className="space-y-3 text-gray-800 text-sm md:text-base">
              <li>
                1. Send your passport copy, photo, and airline ticket via
                WhatsApp: <span className="font-semibold">{phone}</span>
              </li>
              <li>
                2. Or email us at:{" "}
                <span className="font-semibold">{email}</span>
              </li>
              <li>
                3. Once approved, you will receive your visa in PDF format.
              </li>
            </ul>
          </div>

          {/* Payment Info */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Payment Options
            </h2>
            <p className="text-gray-800 text-sm md:text-base">
              Once we receive your documents, we will share all available online
              & offline payment methods. We accept:
            </p>
            <ul className="space-y-1 text-gray-800 text-sm md:text-base">
              <li>• All credit & debit cards</li>
              <li>• Bank transfers</li>
              <li>• Cash or card payments at Dream Wise Connect office</li>
              <li>• Payments through any nearby money exchange</li>
            </ul>
          </div>

          {/* FAQ Section */}
          <div className="space-y-6">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "How long does it take to get a Dubai transit visa?",
                  a: "Processing takes 24 hours to 3 days depending on nationality and visa type.",
                },
                {
                  q: "Can I get a transit visa on arrival?",
                  a: "Some nationalities can. Contact us to confirm your eligibility.",
                },
                {
                  q: "What if my visa is denied?",
                  a: "We guide you through alternatives and help resolve issues if possible.",
                },
                {
                  q: "Do I need a transit visa if I stay inside the airport?",
                  a: "No, as long as you remain within the transit area.",
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="bg-white border rounded-lg p-4 shadow-sm"
                >
                  <h3 className="font-semibold text-gray-900">{faq.q}</h3>
                  <p className="text-gray-700 text-sm mt-1">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-3 text-gray-900">
            <h2 className="text-lg md:text-xl font-semibold">
              Need More Help?
            </h2>
            <p className="text-sm md:text-base">
              WhatsApp: <span className="font-semibold">+971502315207</span>
              <br />
              Email:{" "}
              <span className="font-semibold">info@dreamwiseconnect.com</span>
              <br />
              We reply to all emails within{" "}
              <span className="font-semibold">1 business hour</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
