"use client";

import React from "react";

export default function ESTAServicePage() {
  const data = {
    title: "Electronic System For Travel Authorization",
    price: "AED 650",
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 space-y-10 text-black">
      {/* Title */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl md:text-4xl font-bold p-2 sm:p-5">
          {data.title}
        </h1>
        <p className="text-lg font-medium text-gray-800">
          Service Price:{" "}
          <span className="text-blue-600 font-semibold">{data.price}</span>
        </p>
      </div>

      {/* Section Wrapper */}
      <div className="mt-10 space-y-10">

        {/* Intro Section */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-blue-600">
            USA Travel Authorization & Entry Permit
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If you are a citizen of one of the countries listed below, we can help you obtain the
            Electronic Travel Authorization (ETA) to enter the USA. This permit allows you to stay
            up to 2 years for tourism or business, with multiple entries, and the process is quick,
            simple, and reliable.
          </p>
        </section>

        {/* Countries List */}
        <section>
          <h2 className="text-xl font-semibold text-blue-600 mb-3">
            Eligible Countries
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-gray-700">
            {[
              "United Kingdom", "Andorra", "Australia", "Austria", "Belgium", "Brunei", "Chile",
              "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece",
              "Hungary", "Iceland", "Ireland", "Italy", "Japan", "Latvia", "Liechtenstein",
              "Lithuania", "Luxembourg", "Malta", "Monaco", "Netherlands", "New Zealand", "Norway",
              "Portugal", "Republic of Korea", "San Marino", "Singapore", "Slovakia", "Slovenia",
              "Spain", "Sweden", "Switzerland", "Taiwan"
            ].map((country, index) => (
              <p key={index}>• {country}</p>
            ))}
          </div>
        </section>

        {/* Requirements */}
        <section>
          <h2 className="text-xl font-semibold text-blue-600 mb-3">
            Travel Authorization Requirements
          </h2>
          <ul className="space-y-2 text-gray-700 list-disc pl-6">
            <li>Valid passport (6+ months validity beyond intended stay).</li>
            <li>Confirmed travel itinerary (we will prepare this for you).</li>
            <li>No previous criminal cases in the USA.</li>
          </ul>
        </section>

        {/* Cost */}
        <section>
          <h2 className="text-xl font-semibold text-blue-600">
            ESTA Cost
          </h2>
          <p className="text-gray-700 mt-2">
            The cost for a new ESTA is <span className="font-semibold">{data.price}</span>.
            <br />
            <span className="text-sm text-gray-600">
              *The official U.S. fee is $40. Please verify details before applying.
            </span>
          </p>
        </section>

        {/* Travel Insurance */}
        <section>
          <h2 className="text-xl font-semibold text-blue-600">
            Travel Insurance Recommendation
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
            <li>24/7 worldwide assistance.</li>
            <li>Valid for the USA and all future trips.</li>
            <li>Covers medical emergencies up to USD 50,000.</li>
          </ul>
        </section>

        {/* Processing Time */}
        <section>
          <h2 className="text-xl font-semibold text-blue-600">
            Processing Time
          </h2>
          <p className="text-gray-700 mt-2">
            Approval takes around <strong>3 working days</strong>.
          </p>
        </section>

        {/* Validity */}
        <section>
          <h2 className="text-xl font-semibold text-blue-600">
            ESTA Validity
          </h2>
          <p className="text-gray-700 mt-2">
            ESTA remains valid for <strong>2 years</strong> or until your passport expires.
          </p>
        </section>

        {/* Apply */}
        <section>
          <h2 className="text-xl font-semibold text-blue-600">
            How to Apply
          </h2>
          <p className="text-gray-700 mt-2">
            Send your documents via WhatsApp:{" "}
            <span className="font-semibold">+971502315207</span>
            <br />
            or email:{" "}
            <span className="font-semibold">info@regaluae.com</span>
          </p>
        </section>

        {/* Payment */}
        <section>
          <h2 className="text-xl font-semibold text-blue-600">
            Payment Methods
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
            <li>Online & offline payment options.</li>
            <li>All major credit & debit cards accepted.</li>
            <li>Bank transfer or cash/card at Regal Tours office.</li>
            <li>Payments through any money exchange center.</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
