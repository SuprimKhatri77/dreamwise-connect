"use client"
import Image from "next/image";

export default function DubaiServices() {
  const services = [
    {
      title: "Visit Visa",
      img: "/img/Visit-visa.jpg",
      description:
        "Apply for short-term or long-term Dubai visit visas with fast processing and expert documentation support.",
      price: "AED 350",
    },
    {
      title: "Business Visa",
      img: "/img/business-visa.jpg",
      description:
        "Ideal for entrepreneurs, business travelers, and investors who need smooth entry for meetings or business activities.",
      price: "AED 650",
    },
    {
      title: "Setup Business",
      img: "/img/setup-business.jpg",
      description:
        "We assist in Mainland, Free-zone, and Offshore company formation with quick approvals and professional guidance.",
      price: "From AED 5,500",
    },
    {
      title: "Golden Visa",
      img: "/img/golden-visa.jpg",
      description:
        "Long-term residency visa for investors, professionals, and talented individuals who qualify under UAE Golden Visa rules.",
      price: "AED 3,500",
    },
    {
      title: "Your Package",
      img: "/img/your-package.jpg",
      description:
        "Customize your travel or business service package according to your preferred duration, purpose, and budget.",
      price: "Flexible",
    },
  ];

  return (
    <div>
      <section className="max-w-5xl mx-auto px-3 md:px-5 lg:px-12  mt-20">
        {/* PAGE TITLE */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-black text-center">
          Dubai Visa Services
        </h2>

        {/* IMAGE BETWEEN HEADING & PARAGRAPH */}
        <div className="mt-6 flex justify-center">
          <Image
            src="/img/Dubai.jpg"
            alt="Dubai services banner"
            width={800}
            height={400}
            className="rounded-xl shadow-md object-cover"
          />
        </div>

        {/* SHORT DESCRIPTION */}
        <p className="text-center mt-6 text-gray-700 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
          We provide complete visa assistance, business solutions, travel support,
          and government service facilitation in Dubai. Whether you&apos;re visiting,
          investing, or setting up a company, our team ensures a smooth and
          efficient process from start to finish.
        </p>

        {/* SERVICES GRID */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="p-6 border-2  border-black rounded-xl shadow-sm hover:shadow-xl transition duration-300 bg-white"
            >
              {/* Image Container */}
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-blue-600">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                {item.description}
              </p>

              {/* <p className="mt-4 font-medium text-black">Price: {item.price}</p> */}
            </div>
          ))}
          <div>
            <a href="http://www.freepik.com" className="text-sm font-light italic hover:text-blue-600">Images Designed by Freepik</a>
          </div>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-4 mt-20">
        <h2 className="text-3xl font-bold text-black text-center">How Our Dubai Services Work</h2>
        <p className="text-gray-700 text-center max-w-2xl mx-auto mt-3">
          A simple, transparent process designed to give you a smooth and stress-free experience.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              step: "1",
              title: "Submit Your Request",
              desc: "Share your service requirement via WhatsApp or email. Our team will review your details.",
            },
            {
              step: "2",
              title: "Document Preparation",
              desc: "We prepare your documents, guide you through forms, and handle all official procedures.",
            },
            {
              step: "3",
              title: "Processing & Completion",
              desc: "We manage submissions, government approvals, and notify you when everything is done.",
            },
          ].map((item, index) => (
            <div key={index} className="p-6 hover:shadow-xl transition duration-300 border rounded-lg shadow-sm bg-white">
              <div className="text-blue-600 text-4xl font-extrabold">{item.step}</div>
              <h3 className="mt-3 text-xl font-semibold text-black">{item.title}</h3>
              <p className="text-gray-700 mt-2 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 mt-20">
        <h2 className="text-3xl font-bold text-black">General Document Checklist</h2>
        <p className="text-gray-700 mt-3">
          Requirements may vary based on service, but typically you will need the following:
        </p>

        <ul className="mt-4 space-y-3 list-disc pl-6 text-gray-700">
          <li>Passport copy (valid for at least 6 months)</li>
          <li>UAE residence visa copy</li>
          <li>Emirates ID copy</li>
          <li>Passport-sized photo with white background</li>
          <li>Bank statements (if required)</li>
          <li>NOC or authorization letter (for business-related services)</li>
        </ul>
      </section>

      <section className="max-w-5xl mx-auto px-4 mt-20">
        <h2 className="text-3xl font-bold text-black text-center">Frequently Asked Questions</h2>

        <div className="mt-10 space-y-6">
          {[
            {
              q: "How long does it take to process Dubai services?",
              a: "Processing time varies by service. Most visas take between 24 hours to 5 working days. Business setup may take 3–7 days depending on the jurisdiction.",
            },
            {
              q: "Do you offer doorstep document pickup?",
              a: "Yes, we provide optional document pickup and drop-off for clients located in Dubai.",
            },
            {
              q: "Are your service fees fixed?",
              a: "Yes, all our fees are transparent and communicated before we start the process.",
            },
            {
              q: "Can you assist with urgent / express services?",
              a: "Yes, we offer priority processing for many services including visas, renewals, and typing.",
            },
            {
              q: "Do you help with government appointments?",
              a: "Absolutely. We arrange biometrics, medical test appointments, and typing center visits.",
            },
          ].map((item, i) => (
            <div key={i} className="border-b pb-4">
              <h3 className="font-semibold text-blue-600">{item.q}</h3>
              <p className="mt-2 text-gray-700">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
