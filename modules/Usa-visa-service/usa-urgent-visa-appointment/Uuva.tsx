export default function USAUrgentVisa({
  whatsappNumber,
}: {
  whatsappNumber: string;
}) {
  const phone = whatsappNumber;
  const email = "info@dreamwiseconnect.com";
  return (
    <section className="w-full max-w-5xl mx-auto px-3 md:px-5 lg:px-12 space-y-10 text-black py-10">
      {/* Title */}
      <h1 className="pt-2 sm:pt-5 text-2xl md:text-4xl font-bold mb-6 text-center">
        U.S. Visa Urgent Appointment
      </h1>

      {/* Intro */}
      <div className="space-y-4 text-gray-800">
        <p className="text-lg font-semibold text-black">
          USA Urgent Visa Appointments from Dubai
        </p>

        <p>
          Getting a USA visa appointment has become increasingly difficult, with
          many travelers facing long waiting times. At{" "}
          <span className="font-semibold">Dream Wise Connect</span>, we
          understand the urgency—whether it&apos;s for business, family, medical
          needs, or travel.
        </p>
        <p>
          Our USA urgent visa appointment service is designed to secure your
          appointment within <span className="font-semibold">10–30 days</span>,
          supported by our
          <span className="font-semibold"> 100% money-back guarantee</span>.
        </p>
      </div>

      {/* Why Choose Us */}
      <h2 className="text-xl md:text-2xl font-bold mt-10 mb-4">
        Why Choose Dream Wise Connect for Urgent USA Visa Appointments?
      </h2>

      <ul className="space-y-2 text-gray-800 list-disc pl-6">
        <li>Fast & guaranteed appointments within 30 days or less.</li>
        <li>Money-back promise if an urgent appointment cannot be secured.</li>
        <li>Trusted, government-approved agency with years of experience.</li>
        <li>
          Complete assistance with DS-160, booking, and interview preparation.
        </li>
        <li>High success rate for 5–10 year multiple-entry visas.</li>
      </ul>

      {/* Duration */}
      <h2 className="text-xl md:text-2xl font-bold mt-10 mb-4">
        Refund Policy
      </h2>

      <div className="space-y-3 text-gray-800">
        <p className="text-sm text-gray-700">
          * Urgent fee is refunded if the appointment cannot be secured.
          <br />* Regular visa application fee is non-refundable.
        </p>
      </div>

      {/* Documents Required */}
      <h2 className="text-xl md:text-2xl font-bold mt-10 mb-4">
        Documents Required
      </h2>

      <ul className="list-disc pl-6 text-gray-800 space-y-2">
        <li>Passport copy</li>
        <li>UAE residence visa page copy</li>
        <li>One passport-size photograph</li>
        <li>Completed questionnaire (provided by us)</li>
      </ul>

      {/* Additional Info */}
      <p className="mt-6 text-gray-800">
        If you already have a U.S. visa and need to renew it, we can assist you
        with a smooth and reliable renewal process.
      </p>

      {/* FAQ */}
      <h2 className="text-xl md:text-2xl font-bold mt-10 mb-4">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6">
        {faqs.map((item, index) => (
          <div key={index} className="border-b pb-4">
            <h3 className="font-semibold">
              {index + 1}. {item.q}
            </h3>

            <p className="text-gray-700 mt-2">{item.a}</p>
          </div>
        ))}
      </div>

      {/* Contact */}
      <h2 className="text-xl md:text-2xl font-bold text-blue-600 mt-10 mb-2">
        Contact Dream Wise Connect
      </h2>

      <p className="text-gray-800">
        Don’t wait months for an appointment—secure your urgent USA visa slot
        today.
      </p>

      <div className="mt-4 space-y-1 text-gray-900">
        <p>
          <span className="font-semibold">Call / WhatsApp:</span> {phone}
        </p>
        <p>
          <span className="font-semibold">Office:</span> {phone}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {email}
        </p>
      </div>
    </section>
  );
}

// FAQ Data
const faqs = [
  {
    q: "Can I get my USA visa faster with priority or emergency services?",
    a: "Yes. Depending on your situation, you may qualify for expedited or emergency appointments. We will guide you through eligibility and help secure the earliest possible slot.",
  },
  {
    q: "Do I need to book flights or hotels before approval?",
    a: "No. You only need a tentative travel plan. Confirmed bookings are not required before visa approval.",
  },
  {
    q: "How soon can I get an urgent appointment?",
    a: "The urgent appointment is usually secured within 30–45 days, sometimes even sooner.",
  },
  {
    q: "What if I don’t get my urgent appointment?",
    a: "Your urgent appointment fee will be fully refunded.",
  },
  {
    q: "Is the appointment real or fake?",
    a: "100% genuine. All appointments are officially confirmed through the US Embassy system.",
  },
  {
    q: "Who is eligible?",
    a: "Any nationality can apply. There is no minimum salary or bank balance requirement.",
  },
  {
    q: "How long is the USA visit visa valid?",
    a: "Most visit visas are issued for 5 or 10 years, depending on the embassy’s decision.",
  },
];
