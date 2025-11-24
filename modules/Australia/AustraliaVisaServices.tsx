"use client"
import Image from "next/image";

export default function AustraliaServices() {
  const services = [
    {
      title: "Sponsor Visa",
      img: "/img/sponsor-visa.jpg",
      description:
        "Apply for UAE family sponsor visas for your spouse, children, or parents with complete documentation and quick processing.",
      price: "From AED 350",
    },
    {
      title: "Work Visa",
      img: "/img/work-visa.jpg",
      description:
        "Complete UAE employment visa services including work permit, medical tests, Emirates ID, and residency stamping.",
      price: "From AED 750",
    },
    {
      title: "Student Visa",
      img: "/img/visit-visa.jpg",
      description:
        "UAE student visa assistance for university and college admissions, including approval, residency stamping, and renewals.",
      price: "From AED 500",
    },
  ];


  return (
    <div>
      <section className="max-w-5xl mx-auto px-3 md:px-5 lg:px-12  mt-20">
        {/* PAGE TITLE */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-black text-center">
          Australia Visa Services
        </h2>

        {/* IMAGE BETWEEN HEADING & PARAGRAPH */}
        <div className="mt-6 flex justify-center">
          <Image
            src="/img/australia.jpg"
            alt="Dubai services banner"
            width={800}
            height={400}
            className="rounded-xl shadow-md object-cover"
          />
        </div>

        {/* SHORT DESCRIPTION */}
        <p className="text-center mt-6 text-gray-700 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
          We offer complete visa assistance for Australia, including tourist visas, work visas, sponsor visas, and student visa services. Whether you’re planning to visit, invest, or establish a business, our expert team ensures a smooth, stress-free, and efficient process from start to finish.
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
            <a href="http://www.freepik.com" className="text-sm font-light italic hover:text-blue-600">Images Designed by Freepik</a>
          </div>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-4 mt-20">
        <h2 className="text-3xl font-bold text-black text-center">How Our Australia Visa Services Work</h2>
        <p className="text-gray-700 text-center max-w-2xl mx-auto mt-3">
          A streamlined process designed to help you apply for your Australia Visitor Visa quickly and confidently.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              step: "1",
              title: "Submit Your Details",
              desc: "Share your passport copy and travel purpose via WhatsApp or email. Our consultants will evaluate your eligibility.",
            },
            {
              step: "2",
              title: "Document Preparation",
              desc: "We prepare your file, organise supporting evidence, and complete the online ImmiAccount application on your behalf.",
            },
            {
              step: "3",
              title: "Processing & Biometrics",
              desc: "We manage the visa submission and book your biometrics appointment. You will receive updates until your visa decision is issued.",
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
          Required documents for the Australia Visitor Visa (Subclass 600) typically include:
        </p>

        <ul className="mt-4 space-y-3 list-disc pl-6 text-gray-700">
          <li>Passport valid for at least 6 months</li>
          <li>UAE residence visa copy (valid 3+ months)</li>
          <li>Recent passport-sized photograph</li>
          <li>Emirates ID copy</li>
          <li>Bank statements for the last 3–6 months showing sufficient funds</li>
          <li>Travel itinerary including flight and accommodation details</li>
          <li>NOC from employer or sponsor (if required)</li>
          <li>Previous travel history documents (optional, recommended)</li>
        </ul>
      </section>

      <section className="max-w-5xl mx-auto px-4 mt-20">
        <h2 className="text-3xl font-bold text-black text-center">Frequently Asked Questions</h2>

        <div className="mt-10 space-y-6">
          {[
            {
              q: "How long does the Australia Visitor Visa take?",
              a: "Processing time usually ranges from 15 to 30 working days depending on the visitor stream and application volume.",
            },
            {
              q: "Do I need biometrics for the Australia visa?",
              a: "Yes, most applicants need to complete biometrics at the Australian Visa Application Centre (AVAC) after submitting their application.",
            },
            {
              q: "Can I get a fast-track visa?",
              a: "Priority processing may be available for certain Subclass 600 streams through the Fast-Track (Form 1472) option.",
            },
            {
              q: "How long can I stay in Australia?",
              a: "Stay duration varies — 3, 6, or 12 months — depending on the type of visa granted by immigration.",
            },
            {
              q: "Do I need travel insurance?",
              a: "Travel insurance is not compulsory but strongly recommended for all Australia visitors.",
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
