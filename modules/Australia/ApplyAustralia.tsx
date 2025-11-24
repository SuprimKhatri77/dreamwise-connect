"use client";

import Image from "next/image";

export default function ApplyAustraliaVisaFromDubai({
  whatsappNumber,
}: {
  whatsappNumber: string;
}) {
  const email = "info@dreamwiseconnect.com";
  const whatsappMessage = encodeURIComponent(
    "Hi, I would like to know more about Australia visa and services programs. Please assist me."
  );
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
      <header className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
        <div className="lg:col-span-2">
          <h1 className="text-3xl md:text-4xl font-extrabold text-black leading-tight">
            Apply for Australia Visa From Dubai
          </h1>
          <p className="mt-4 text-gray-700 text-sm md:text-base max-w-2xl">
            Planning to visit Australia from Dubai?{" "}
            <span className="font-semibold text-blue-600">
              Dream Wise Connect
            </span>{" "}
            streamlines the visitor visa (Subclass 600) process for UAE
            residents — from online application to biometrics and submission.
          </p>

          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✅</span>
              <span className="text-gray-800">
                Expert visa guidance for UAE residents
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">📄</span>
              <span className="text-gray-800">
                Complete document preparation & filing
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">⏱️</span>
              <span className="text-gray-800">
                Faster processing via ImmiAccount
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">🔒</span>
              <span className="text-gray-800">
                Secure & compliant application handling
              </span>
            </li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${whatsappNumber.replace(
                /\D/g,
                ""
              )}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Start Your Application
            </a>
            <a
              href={`https://wa.me/${whatsappNumber.replace(
                /\D/g,
                ""
              )}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-gray-200 px-5 py-2 rounded-lg text-black hover:bg-gray-50 transition"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-md">
          <Image
            src="/img/australia.jpg"
            alt="Australia"
            width={800}
            height={600}
            className="object-cover w-full h-64 lg:h-full"
          />
        </div>
      </header>

      {/* Visa Details */}
      <div className="mt-12 space-y-10">
        {/* What is this visa */}
        <section>
          <h2 className="text-2xl font-semibold text-black">
            What Is the Australia Visitor Visa?
          </h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            The Australian Visitor Visa (Subclass 600) allows UAE residents to
            travel to Australia for tourism, visiting family, or short business
            trips. Depending on your purpose, the visa may be issued for 3, 6,
            or 12 months.
          </p>
        </section>

        {/* Requirements */}
        <section>
          <h2 className="text-2xl font-semibold text-black">
            Required Documents
          </h2>
          <ul className="mt-4 space-y-3 list-disc pl-6 text-gray-700">
            <li>Valid passport (6+ months validity)</li>
            <li>UAE residence visa (min. 3 months validity)</li>
            <li>Recent bank statements (proof of financial ability)</li>
            <li>Travel itinerary or planned travel dates</li>
            <li>Hotel reservations or proof of stay</li>
            <li>Copy of Emirates ID</li>
            <li>Health or travel insurance (recommended)</li>
          </ul>
        </section>

        {/* Processing Time */}
        <section>
          <h2 className="text-2xl font-semibold text-black">Processing Time</h2>
          <p className="mt-2 text-gray-700">
            Processing for the Australia Visitor Visa (Subclass 600) usually
            takes
            <strong> 15–30 working days </strong>, depending on your visa stream
            and application volume.
          </p>
        </section>

        {/* Fast Track Option */}
        <section>
          <h2 className="text-2xl font-semibold text-black">
            Fast-Track (Priority) Option
          </h2>
          <p className="mt-3 text-gray-700">
            Priority processing may be available in certain cases. With
            fast-track processing, decisions can be made in as little as{" "}
            <strong>48 hours</strong> when the priority request form is
            accepted.
          </p>
        </section>

        {/* How to Apply */}
        <section id="apply">
          <h2 className="text-2xl font-semibold text-black">How to Apply</h2>
          <p className="mt-3 text-gray-700">
            1. Gather all required documents.
            <br />
            2. Our team will prepare & submit your application through
            ImmiAccount.
            <br />
            3. Book your biometrics appointment at the Australian Visa
            Application Centre.
          </p>
          <p className="mt-2 text-gray-700">
            Send your documents via WhatsApp:
            <span className="font-semibold"> {whatsappNumber}</span>
            <br />
            Or email:
            <span className="font-semibold"> {email}</span>
          </p>
        </section>

        {/* Payment Info */}
        <section id="contact">
          <h2 className="text-2xl font-semibold text-black">Payment Options</h2>
          <p className="mt-3 text-gray-700">
            Once we receive your documents, we’ll send you the available payment
            options:
          </p>
          <ul className="mt-2 list-disc pl-6 text-gray-700 space-y-1">
            <li>Credit / Debit cards</li>
            <li>Bank transfer</li>
            <li>Cash or card payment at our Dubai Office</li>
            <li>Payment through exchange centers</li>
          </ul>
        </section>
      </div>

      {/* CTA Section */}
      <footer className="mt-14 bg-gray-50 p-6 rounded-lg shadow-sm text-center">
        <h3 className="text-xl font-semibold text-black">Ready to Apply?</h3>
        <p className="mt-2 text-gray-700">
          Let us guide you through your Australia visitor visa application —
          from documentation to approval.
        </p>
        <a
          href={`https://wa.me/${whatsappNumber.replace(
            /\D/g,
            ""
          )}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Call / WhatsApp Us
        </a>
      </footer>
    </section>
  );
}
