"use client";

import Image from "next/image";
import TourCards from "./TourCardsCompo";

export default function DubaiTourPackageCompo({
  whatsappNumber,
}: {
  whatsappNumber: string;
}) {
  const phone = whatsappNumber;
  const email = "info@dreamwiseconnect.com";
  const tips = [
    "Dress comfortably for the desert weather and don’t forget sunscreen and sunglasses.",
    "Keep drinking water throughout the journey to stay hydrated.",
    "Bring a good camera or phone to capture incredible evening shots.",
    "Try the local snacks and drinks offered at the camp.",
    "Sit back and enjoy the cultural shows—each one adds to the experience.",
  ];

  return (
    <div className="w-full flex flex-col gap-10 px-3 md:px-5 lg:px-12 bg-gray-50 py-10">
      {/* Hero Section with Title Overlay */}
      <div className="relative w-full">
        {/* Background Image */}
        <div className="relative w-full h-[260px] md:h-[380px] lg:h-[480px] overflow-hidden">
          <Image
            src="/img/Dubai.jpg"
            alt="Dubai Tour Packages"
            fill
            className="object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Centered Title */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-white font-bold text-3xl md:text-5xl lg:text-6xl leading-tight drop-shadow-md">
              Dubai Tour Packages
            </h1>
          </div>
        </div>
      </div>


      {/* Content Section1 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 space-y-10">
        {/* Desert Safari Image + Title */}
        <div className="w-full overflow-hidden">
          <h1 className="text-black font-semibold text-2xl md:text-3xl mb-4">
            Desert Safari
          </h1>

          <div className="p-2 md:p-4 lg:p-6">
            <Image
              src="/img/img1.jpg"
              alt="Dubai image-1"
              className="w-full rounded-lg object-cover object-bottom-left max-h-[600px]"
              width={1200}
              height={500}
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-gray-900 space-y-8">
          {/* Paragraph 1 */}
          <p className="text-sm md:text-base leading-relaxed">
            If you’re staying in Dubai or Sharjah, our chauffeur will reach your
            home, apartment, office, or any location of your choice. Hotel
            pickup is also available, making your desert safari smooth and
            effortless from the very beginning.
          </p>

          {/* Section */}
          <div>
            <h1 className="font-semibold text-xl md:text-2xl mb-2">
              Desert Safari Overview
            </h1>
            <p className="text-sm md:text-base leading-relaxed">
              This 7–8 hour desert adventure is packed with thrilling activities
              and cultural experiences. Your journey begins in the golden dunes,
              where you can enjoy sandboarding—an exciting sport guided by
              trained professionals. Since the trip is timed to end around
              sunset, you’ll get the perfect opportunity to capture stunning
              photos with the desert horizon glowing in warm colors.
            </p>
          </div>

          {/* Section */}
          <div>
            <h1 className="font-semibold text-xl md:text-2xl mb-2">
              Desert Camp Experience
            </h1>
            <p className="text-sm md:text-base leading-relaxed">
              After the dune activities, you’ll head to our comfortable Desert
              Camp. Here, you can relax and explore a variety of experiences
              such as shisha, henna art, and camel rides. Dinner includes a
              delicious buffet with both grilled dishes and vegetarian options.
              The dining setup, placed right in the heart of the desert, creates
              a special ambiance. You can also enjoy traditional performances
              like magic acts, belly dancing, and Tanoura shows.
            </p>
          </div>

          {/* Tips Section */}
          <div>
            <h1 className="font-semibold text-xl md:text-2xl mb-3">
              Helpful Tips for Your Safari
            </h1>

            <ul className="list-none space-y-3">
              {tips.map((tip, index) => (
                <li
                  key={index}
                  className="relative pl-7 text-sm md:text-base leading-relaxed 
                  before:absolute md:before:left-0 md:before:top-1 lg:before:left-0 lg:before:top-1 before:left-0 before:top-2 before:h-4 before:w-4 
                  before:bg-blue-600 before:rounded-full"
                >
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          {/* Return Journey */}
          <div>
            <h1 className="font-semibold text-xl md:text-2xl mb-2">
              Return Journey
            </h1>
            <p className="text-sm md:text-base leading-relaxed">
              Most guests prefer returning home after dinner, while some choose
              the overnight option and head back after sunrise. If you plan to
              leave the same night, our driver will safely drop you back at your
              location.
            </p>
          </div>

          {/* Price & Booking */}
          <div>
            <h1 className="font-semibold text-xl md:text-2xl mb-2">
              Price & Booking
            </h1>
            <p className="text-sm md:text-base leading-relaxed">
              This is available including transportation and all activities. To
              reserve your spot, you can contact us via phone, email, or
              WhatsApp with your preferred date and number of guests. Due to
              high demand, we recommend booking at least one or two days in
              advance.
            </p>
          </div>
        </div>
      </div>

      {/*Content Section2 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 space-y-10">
        {/* Desert Safari Image + Title */}
        <div className="w-full overflow-hidden">
          <h1 className="text-black font-semibold text-2xl md:text-3xl mb-4">
            Cruise Marina
          </h1>
          <div className="p-2 md:p-4 lg:p-6">
            <Image
              src="/img/img2.jpg"
              alt="Dubai image-2"
              className="w-full rounded-lg object-cover object-bottom-left max-h-[600px]"
              width={1200}
              height={500}
            />
          </div>
        </div>

        <div className="space-y-8 text-gray-900">
          {/* Section Title */}
          <h1 className="text-2xl md:text-3xl font-semibold">
            About Marina Dhow Cruise
          </h1>

          {/* Pickup & Drop-off */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              Convenient Pickup and Drop-off
            </h2>
            <p className="text-sm md:text-base leading-relaxed">
              Experience hassle-free transportation with comfortable vehicles
              from your home, workplace, or any other location in Sharjah or
              Dubai with our pickup and drop-off services.
            </p>
          </div>

          {/* Cruise Duration */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              Cruise Duration
            </h2>
            <p className="text-sm md:text-base leading-relaxed">
              The cruise lasts about 2 hours, giving you plenty of time to
              explore Dubai Marina and enjoy its stunning surroundings.
            </p>
          </div>

          {/* Booking Recommendations */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              Booking Recommendations
            </h2>
            <p className="text-sm md:text-base leading-relaxed">
              We recommend booking your cruise directly with Regal Travel Agency
              to avoid additional charges from middlemen. Our packages start at
              only
              <span className="font-semibold"> 150 dirhams</span>, ensuring
              excellent value and high-quality service.
            </p>
          </div>

          {/* Book Your Experience */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              Book Your Experience Today
            </h2>
            <p className="text-sm md:text-base leading-relaxed">
              Whether you’re trying a dhow cruise for the first time or
              returning for another experience, Regal Travel Agency ensures a
              memorable and enjoyable evening. Contact us anytime to arrange
              this exceptional experience. We look forward to welcoming you
              aboard and helping you create unforgettable memories on your Dubai
              Marina dhow cruise.
            </p>
          </div>
        </div>
      </div>

      {/*Content Section3 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 space-y-10">
        {/* Desert Safari Image + Title */}
        <div className="w-full overflow-hidden">
          <h1 className="text-black font-semibold text-2xl md:text-3xl mb-4">
            Whole UAE One-Day Tour
          </h1>
          <div className="inline-grid gap-5">
            <div className="text-white bg-gray-900 inline p-2">
              Pick-up Time: 07:00 Am
            </div>
            <div className="text-white bg-gray-900 inline p-2">
              Drop-off Time: 10:00 pm
            </div>
          </div>
          <div className="p-2 md:p-4 lg:p-6">
            <Image
              src="/img/img3.jpg"
              alt="Dubai image-2"
              className="w-full rounded-lg object-cover object-bottom-left max-h-[600px]"
              width={1200}
              height={500}
            />
          </div>
        </div>

        <div className="space-y-8 text-gray-900">
          <TourCards />
        </div>
      </div>

      {/*Content Section4 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 space-y-10">
        <h1 className="text-black font-semibold text-2xl md:text-3xl mb-4">
          How do I book my Dubai tour package?
        </h1>
        <ul className="text-sm text-gray-800 space-y-2 list-disc list-inside">
          <li>
            Contact us via Call / WhatsApp at{" "}
            <span className="font-semibold"> {phone}</span> or email us at
            <span className="font-semibold"> {email}</span> to reserve your
            Dubai tour package.
          </li>
          <li>
            Please make sure to mention{" "}
            <span className="italic">&quot;Dubai Tour Package&quot;</span> while
            booking.
          </li>
        </ul>

        <h1 className="text-black font-semibold text-2xl md:text-3xl mb-4">
          How can i pay for my Dubai Tour Packages?
        </h1>
        <ul className="text-sm text-gray-800 space-y-2 list-disc list-inside">
          <li>
            Once we receive your booking request, we’ll send you available
            online and offline payment options.
          </li>
          <li>
            We accept all major online payments including credit and debit
            cards.
          </li>
        </ul>

        <h1 className="text-black font-semibold text-2xl md:text-3xl mb-4">
          Any More Questions?
        </h1>
        <ul className="text-sm text-gray-800 space-y-2 list-disc list-inside">
          <li>
            If you need more information or assistance, feel free to call us
            anytime.
          </li>
          <li>
            All emails are responded to within a maximum of 2 business hours.
          </li>
          <li>
            You can also use the inquiry form on this page to reach out to us.
          </li>
        </ul>
      </div>
    </div>
  );
}
