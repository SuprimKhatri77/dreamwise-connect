import Image from "next/image";

export default function VisaOptions() {
  const visaOptions = [
    { name: "United Kingdom Visa", img: "/flags/uk.svg" },
    { name: "Europe Visa", img: "/flags/eu.svg" },
    { name: "Australia Visa", img: "/flags/au.svg" },
  ];

  const faqs = [
    {
      q: "Can you assist with all types of U.S. visas?",
      a: "Yes, we support tourist, business, student, and work visa categories, guiding you through every step."
    },
    {
      q: "Do you arrange urgent U.S. visa appointments in Dubai?",
      a: "We help you secure the earliest available appointment based on embassy scheduling."
    },
    {
      q: "Can I get a fast-track appointment for a U.S. tourist visa?",
      a: "In many cases, yes. Eligibility depends on your purpose of travel and document readiness."
    },
    {
      q: "Why do U.S. visa applications get rejected?",
      a: "Common reasons include incomplete documents, weak travel purpose, or insufficient financial proof."
    },
    {
      q: "Is there an age limit for applying?",
      a: "No, applicants of any age can apply as long as they meet visa requirements."
    },
    {
      q: "Can I track my visa application status?",
      a: "Yes, once submitted, you can check updates through the official U.S. visa tracking portal."
    },
    {
      q: "What are the benefits of applying through your agency?",
      a: "We simplify paperwork, prepare your file professionally, and guide you to avoid rejections."
    },
    {
      q: "Can I apply for my whole family together?",
      a: "Absolutely. Family applications are processed together for smooth coordination."
    },
    {
      q: "What bank balance is recommended?",
      a: "There is no official fixed amount, but your financials should reasonably support your travel plans."
    },
    {
      q: "Can unemployed individuals apply?",
      a: "Yes, but you must show financial support from a sponsor or family member."
    },
    {
      q: "Can I take short courses on a visit visa?",
      a: "Yes, as long as the course is short-term and not part of a full-degree program."
    },
    {
      q: "Can I get married in the U.S. on a visit visa?",
      a: "Yes, marriage is allowed, but you must return after your visit unless you follow proper immigration steps."
    },
    {
      q: "What is the simplest way to get a U.S. visa from Dubai?",
      a: "Submitting accurate documents and preparing well for the interview increases approval chances."
    },
    {
      q: "How do I apply from Dubai?",
      a: "Submit your DS-160 form, pay the fee, book your appointment, attend the interview, and wait for approval."
    },
    {
      q: "B1 or B2 – which one is right for me?",
      a: "B1 is for business; B2 is for tourism. Many travelers apply for a combined B1/B2 visa."
    },
    {
      q: "Do children need a visa, and what is the fee?",
      a: "Yes, children require a visa. The fee is the same as adults according to U.S. regulations."
    },
    {
      q: "Can I extend my stay in the U.S.?",
      a: "Extensions are possible if you apply before your authorized stay expires."
    },
    {
      q: "How long can I stay on a U.S. tourist visa?",
      a: "Usually up to 6 months per entry, depending on the immigration officer at the port."
    },
    {
      q: "How many times can I travel on a tourist visa?",
      a: "Multiple-entry visas allow travel as long as the visa is valid and you respect stay limits."
    },
    {
      q: "Is travel insurance required?",
      a: "Not mandatory, but highly recommended for medical and travel safety."
    },
    {
      q: "Do I need to visit the embassy?",
      a: "Yes, most applicants must attend fingerprinting and an interview unless exempt."
    },
    {
      q: "Can I apply online from Dubai?",
      a: "You can complete forms online, but the interview must be attended in person."
    },
    {
      q: "How long does approval take?",
      a: "Processing usually takes 3–10 working days, depending on your case."
    }
  ];

  return (
    <div className="w-full space-y-12 text-black">

      {/* Visa Options */}
      <h2 className="text-2xl md:text-3xl font-semibold">
        Explore More Visa Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visaOptions.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-5 bg-white shadow hover:shadow-lg transition"
          >
            <Image
              src={item.img}
              width={120}
              height={60}
              alt={item.name}
              className="rounded-md"
            />
            <h3 className="text-lg font-semibold mt-4 text-blue-600">
              {item.name}
            </h3>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="space-y-8">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          <ol className="space-y-4 list-decimal marker:text-blue-600 marker:font-semibold pl-5">
            {faqs.map((item, index) => (
              <li key={index} className="border-b pb-4">
                <h3 className="font-semibold text-blue-600">
                  {item.q}
                </h3>
                <p className="text-gray-700 mt-2">
                  {item.a}
                </p>
              </li>
            ))}
          </ol>
        </div>

      </div>
    </div>
  );
}
