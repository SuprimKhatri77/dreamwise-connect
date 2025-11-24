"use client";

import { JSX } from "react";
import Image from "next/image";

type TourCardProps = {
  name: string;
  img: string;
  number: string;
};
const email = "info@dreamwiseconnect.com";

function TourCard({ name, img, number }: TourCardProps) {
  const whatsappNumber = number;
  const whatsappMessage = encodeURIComponent(
    "Hi, I would like to know more about citizenship by investment programs. Please assist me."
  );
  return (
    <article className="bg-white border rounded-2xl p-4 shadow-sm hover:shadow-md hover:scale-105 transition-transform">
      <div className="w-full h-36 relative rounded-lg overflow-hidden">
        <Image src={img} alt={name} fill className="object-cover" />
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-black">{name}</h3>
          <p className="text-sm text-gray-600">Exciting travel package</p>
        </div>

        <div className="text-right">
          <div className="text-sm text-gray-500">From</div>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <a
          href={`https://wa.me/${whatsappNumber.replace(
            /\D/g,
            ""
          )}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block flex-1 text-center bg-blue-600 text-white px-3 py-2 rounded-md text-sm hover:bg-blue-700 transition"
        >
          Book Now
        </a>
      </div>
    </article>
  );
}

export default function WorldwideTourPage({
  whatsappNumber,
}: {
  whatsappNumber: string;
}): JSX.Element {
  const whatsappMessage = encodeURIComponent(
    "Hi, I would like to know more about World Wide Tour programs. Please assist me."
  );
  const tours = [
    { name: "Europe & Schengen Tour", img: "/img/eu.jpg" },
    { name: "North America Tour", img: "/img/na.jpg" },
    { name: "Asia Adventure Tour", img: "/img/asia.jpg" },
    {
      name: "Australia & Oceania",
      img: "/img/australia.jpg",
    },
    { name: "South America Tour", img: "/img/sa.jpg" },
    { name: "Africa Safari Tour", img: "/img/africa.jpg" },
  ];

  return (
    <div className="w-full bg-white text-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
        {/* HERO */}
        <header className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-extrabold text-black leading-tight">
              Worldwide Tour Packages from Dubai
            </h1>

            <p className="mt-4 text-gray-700 text-sm md:text-base max-w-2xl">
              Are you looking for a tour outside the UAE with your family — for
              fun, recreation, honeymoon, or a family get-together? We offer
              carefully crafted and exciting tour packages that include visa,
              flights, hotels, tours, and local transfers.
            </p>

            <p className="mt-4 text-gray-700 text-sm md:text-base max-w-2xl">
              Dreamwise Connect has partnered with over 8,400 travel and tourism
              companies across 152 countries to create memorable experiences for
              travelers worldwide.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#tours"
                className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Explore Tours
              </a>
              <a
                href="#contact"
                className="inline-block border border-gray-200 px-5 py-2 rounded-lg text-black hover:bg-gray-50 transition"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-sm">
            <Image
              src="/img/worldwide.jpg"
              alt="Worldwide travel"
              width={1200}
              height={800}
              className="w-full h-64 md:h-80 lg:h-full object-cover"
            />
          </div>
        </header>

        {/* Overview */}
        <section className="mt-10 space-y-6">
          <h2 className="text-2xl font-semibold text-black">Overview</h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl">
            Share your preferred countries, number of travelers, and duration of
            stay, and our experts will craft a customized world tour. We handle
            visas, airline tickets, hotels, tours, and local transfers for a
            smooth and enjoyable experience.
          </p>
        </section>

        {/* Tour Cards */}
        <section id="tours" className="mt-10">
          <h2 className="text-2xl font-semibold text-black mb-4">
            Popular Worldwide Tours
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours.map((t) => (
              <TourCard
                key={t.name}
                name={t.name}
                img={t.img}
                number={whatsappNumber}
              />
            ))}
          </div>
        </section>

        {/* How to Apply */}
        <section id="apply" className="mt-12">
          <h2 className="text-2xl font-semibold text-black">
            How to Book a Worldwide Tour
          </h2>
          <ol className="mt-4 list-decimal pl-6 space-y-3 text-gray-700">
            <li>
              Send your preferred travel dates, cities, countries, and number of
              travelers via WhatsApp or email.
            </li>
            <li>
              Our travel experts will contact you and create a customized tour
              package.
            </li>
            <li>Confirm your package and make the payment.</li>
            <li>
              Receive all travel documents, flight tickets, and hotel vouchers.
            </li>
            <li>Enjoy your trip with complete support from our team.</li>
          </ol>

          <div className="mt-4 text-gray-700">
            <p>
              WhatsApp: <strong>{whatsappNumber}</strong>
              <br />
              Email: <strong>{email}</strong>
            </p>
          </div>
        </section>

        {/* CTA */}
        <footer
          id="contact"
          className="mt-12 bg-gray-50 p-6 rounded-lg shadow-sm text-center"
        >
          <h3 className="text-xl font-semibold text-black">
            Ready to Book Your Worldwide Tour?
          </h3>
          <p className="mt-2 text-gray-700">
            Send your travel plan details, and our experts will create a
            perfect, personalized tour package for you and your family.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`https://wa.me/${whatsappNumber.replace(
                /\D/g,
                ""
              )}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Call / WhatsApp
            </a>
            <a
              href={`https://wa.me/${whatsappNumber.replace(
                /\D/g,
                ""
              )}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-gray-200 px-6 py-3 rounded-lg"
            >
              Start Booking
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
