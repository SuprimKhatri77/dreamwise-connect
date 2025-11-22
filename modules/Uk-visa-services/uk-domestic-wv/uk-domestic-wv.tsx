"use client"
import Image from "next/image";

export default function UkDomesticWorkerVisa() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      {/* HERO SECTION */}
      <header className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

        {/* LEFT SIDE CONTENT */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl md:text-4xl font-extrabold text-black leading-tight">
            UK Domestic Worker Visa
          </h1>

          <p className="mt-4 text-gray-700 text-sm md:text-base max-w-2xl">
            The UK Domestic Worker Visa is required for housemaids, nannies,
            caregivers, cooks, and gardeners who have been working with their
            employer for at least <span className="font-semibold text-blue-600">one year</span> in the UAE
            and need to travel with them to the United Kingdom.
          </p>

          <p className="mt-3 text-gray-700 text-sm md:text-base max-w-2xl">
            You cannot apply for a standard UK tourist visa if you work as a
            nanny, maid, or caregiver. This visa must be sponsored by your employer
            and processed under the Domestic Worker category.
          </p>

          {/* HIGHLIGHTS */}
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">⭐</span>
              <span className="text-gray-800">Specialized support for domestic staff visas</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">📄</span>
              <span className="text-gray-800">Full documentation preparation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">📅</span>
              <span className="text-gray-800">Fast appointment scheduling</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">🔒</span>
              <span className="text-gray-800">Secure and compliant processing</span>
            </li>
          </ul>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#apply"
              className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Start Application
            </a>
            <a
              href="#contact"
              className="inline-block border border-gray-200 px-5 py-2 rounded-lg text-black hover:bg-gray-50 transition"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="w-full max-w-sm mx-auto lg:max-w-full">
          <Image
            src="/img/ukworkvisa.JPG"
            alt="UK work visa"
            width={1200}
            height={800}
            className="w-full h-auto rounded-lg object-cover shadow-md"
          />
        </div>
      </header>

      {/* PRICE SECTION */}
      <div className="mt-14 bg-gray-50 border rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-black">Visa Fee</h2>
        <p className="mt-2 text-lg font-semibold text-blue-600">
          AED 4,800
        </p>
        <p className="text-gray-700 mt-1 text-sm">
          Includes document preparation, appointment booking, and full processing.
        </p>
      </div>

      {/* WHY CHOOSE US */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-black">Why Choose Us?</h2>
        <p className="mt-3 text-gray-700 max-w-3xl">
          Our experienced visa consultants handle the entire UK domestic worker
          visa process from start to finish — ensuring accuracy, smooth processing,
          and complete support.
        </p>
        <ul className="mt-5 space-y-2 text-gray-800">
          <li>✔ Complete documentation preparation</li>
          <li>✔ Online application submission</li>
          <li>✔ Appointment booking for biometrics</li>
        </ul>
      </section>

      {/* REQUIREMENTS */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-black">
          Requirements for UK Domestic Worker Visa
        </h2>

        <ul className="mt-4 space-y-3 text-gray-700">
          <li>• Original & copy of passport (valid 6+ months)</li>
          <li>• Valid UAE residence visa (6+ months)</li>
          <li>• 2 passport-sized photos (white background)</li>
          <li>• Emirates ID copy</li>
          <li>• 6-month stamped bank statement of the sponsor (balance AED 50,000+ if family is traveling)</li>
          <li>• NOC letter from sponsor + passport & visa copies of all traveling members</li>
          <li>• Previous UK visas, if any</li>
          <li>• Labor contract (minimum 1 year employment)</li>
        </ul>
      </section>

      {/* PROCESSING TIME */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-black">Processing Time</h2>
        <ul className="mt-4 space-y-2 text-gray-700">
          <li>• Normal processing: 15–20 working days</li>
          <li>• Priority: 5–7 working days</li>
          <li>• Super Priority: within 24 hours</li>
        </ul>
      </section>

      {/* APPLY SECTION */}
      <section className="mt-14" id="apply">
        <h2 className="text-2xl font-bold text-black">How to Apply</h2>
        <p className="mt-3 text-gray-700 max-w-3xl">
          Send your documents via WhatsApp at <span className="font-semibold">+971502315207</span>{" "}
          or email <span className="font-semibold">info@regaluae.com</span>. Our experts will
          guide you through the entire process.
        </p>
      </section>

      {/* PAYMENT */}
      <section className="mt-12" id="contact">
        <h2 className="text-2xl font-bold text-black">Payment Options</h2>
        <p className="mt-3 text-gray-700 max-w-3xl">
          We accept all online & offline payment methods including all major
          cards, bank transfers, cash at office, or payment through money exchanges.
        </p>
      </section>
    </section>
  );
}
