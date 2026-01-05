"use client";
import Image from "next/image";

export default function EuropeServices() {
  const services = [
    {
      title: "Visit Europe (Schengen) Visa",
      img: "/img/sponsor-visa.jpg",
      description:
        "Apply for Schengen Visit Visa for tourism, family visits, business travel, or short-term stays across European countries. We provide complete documentation support and fast, hassle-free processing.",
      price: "From AED 350",
    },
    {
      title: "Europe Work Visa",
      img: "/img/work-visa.jpg",
      description:
        "Complete Europe employment visa services, including job-based work permits, medical tests, embassy documentation, residence permit processing, biometric submission, and residency stamping.",
      price: "From AED 750",
    },
    {
      title: "Europe Student Visa",
      img: "/img/Visit-visa.jpg",
      description:
        "Comprehensive Europe student visa assistance for admission into universities and colleges across Schengen countries. Our services include university selection, application support, offer letters, visa approval, residence permit stamping, and renewals — ensuring a smooth academic journey in Europe",
      price: "From AED 500",
    },
  ];

  return (
    <div>
      <section className="max-w-5xl mx-auto px-3 md:px-5 lg:px-12  mt-20">
        {/* PAGE TITLE */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-black text-center">
          Europe Visa Services
        </h2>

        {/* IMAGE BETWEEN HEADING & PARAGRAPH */}
        <div className="mt-6 flex justify-center">
          <Image
            src="/img/eu.jpg"
            alt="Dubai services banner"
            width={800}
            height={400}
            className="rounded-xl shadow-md object-cover"
          />
        </div>

        {/* SHORT DESCRIPTION */}
        <p className="text-center mt-6 text-gray-700 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
          We provide complete visa assistance for Europe, including Sponsor
          Visas, Work Visas, and Student Visas. Whether you’re planning to
          study, work, or reunite with family, our dedicated team ensures a
          smooth, reliable, and stress-free application process from start to
          finish.
        </p>

        {/* SERVICES GRID */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="p-6 border-2 border-black rounded-xl shadow-sm hover:shadow-xl transition duration-300 bg-white"
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
            <a
              href="http://www.freepik.com"
              className="text-sm font-light italic hover:text-blue-600"
            >
              Images Designed by Freepik
            </a>
          </div>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-4 mt-20">
        <h2 className="text-3xl font-bold text-black text-center">
          How Our Europe (Schengen) Visa Services Work
        </h2>
        <p className="text-gray-700 text-center max-w-2xl mx-auto mt-3">
          A structured and simple process designed to help you apply for your
          Schengen Tourist Visa with confidence.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              step: "1",
              title: "Share Your Details",
              desc: "Send your passport copy, travel plan, and preferred travel dates via WhatsApp or email so we can check your eligibility.",
            },
            {
              step: "2",
              title: "Document Preparation",
              desc: "We prepare your Schengen file, arrange travel insurance, book hotel & flight reservations, and complete the embassy application form.",
            },
            {
              step: "3",
              title: "Biometrics & Submission",
              desc: "We schedule your VFS appointment, guide you through biometrics, and track your visa status until the decision is issued.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-sm hover:shadow-xl transition duration-300 bg-white"
            >
              <div className="text-blue-600 text-4xl font-extrabold">
                {item.step}
              </div>
              <h3 className="mt-3 text-xl font-semibold text-black">
                {item.title}
              </h3>
              <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 mt-20">
        <h2 className="text-3xl font-bold text-black">
          General Document Checklist
        </h2>
        <p className="text-gray-700 mt-3">
          Typical requirements for the Schengen Tourist Visa (Europe).
          Requirements may vary by embassy.
        </p>

        <ul className="mt-4 space-y-3 list-disc pl-6 text-gray-700">
          <li>Passport valid for at least 6 months from travel date</li>
          <li>UAE residence visa copy (valid for 3+ months)</li>
          <li>Two recent passport-sized photographs (white background)</li>
          <li>Emirates ID copy</li>
          <li>Last 3–6 months bank statements with sufficient balance</li>
          <li>Confirmed hotel booking or sponsorship proof</li>
          <li>Round-trip flight reservation</li>
          <li>
            Travel insurance covering essential medical and emergency needs
            (required)
          </li>
          <li>NOC from employer / company or proof of self-employment</li>
          <li>Previous Schengen or travel history (if available)</li>
        </ul>
      </section>

      <section className="max-w-5xl mx-auto px-4 mt-20">
        <h2 className="text-3xl font-bold text-black text-center">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-6">
          {[
            {
              q: "How long does the Schengen Visa take?",
              a: "Processing typically takes 10–20 working days depending on the embassy and travel season.",
            },
            {
              q: "Do I need biometrics for Europe?",
              a: "Yes. Biometrics (fingerprints + photo) at VFS Global are mandatory unless you have provided them within the last 59 months.",
            },
            {
              q: "Can I travel to multiple countries with one visa?",
              a: "Yes. A Schengen visa allows travel across all 27 Schengen countries unless stated otherwise.",
            },
            {
              q: "Which country should I apply to?",
              a: "Apply to the country where you will spend the most days. If equal, apply to the country of first entry.",
            },
            {
              q: "Is travel insurance required?",
              a: "Yes. Schengen travel insurance with €30,000 medical coverage is mandatory for visa approval.",
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
