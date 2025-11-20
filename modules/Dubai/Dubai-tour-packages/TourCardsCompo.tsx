import React from "react";

const tours = [
  {
    title: "Abu Dhabi Day Tour & Activities",
    items: [
      "Visit the magnificent Sheikh Zayed Grand Mosque.",
      "Tour the opulent Qasr Al Watan.",
      "Explore the Louvre Abu Dhabi museum.",
      "Enjoy lunch by the Abu Dhabi Corniche.",
      "Choose between exciting rides at Ferrari World or a tour of Yas Marina Circuit.",
      "Experience traditional Emirati life at Heritage Village.",
    ],
  },
  {
    title: "Sharjah Day Tour & Activities",
    items: [
      "Discover Islamic heritage at the Sharjah Museum of Islamic Civilization.",
      "Visit the serene Al Noor Mosque.",
      "Shop for unique items at the Blue Souk (Central Market).",
      "Enjoy lunch with a view at Al Majaz Waterfront.",
      "Explore marine life at Sharjah Aquarium.",
      "View contemporary and traditional art at the Sharjah Art Museum.",
    ],
  },
  {
    title: "Ajman Day Tour & Activities",
    items: [
      "Explore the history of Ajman at Ajman Museum.",
      "Stroll along the scenic Ajman Corniche.",
      "Visit the natural sanctuary Al Zorah Nature Reserve.",
      "Enjoy a beachside lunch.",
      "Experience the vibrant atmosphere at Ajman Fish Market.",
      "Learn about traditional Dhow Building techniques.",
    ],
  },
  {
    title: "Umm Al Quwain Day Tour & Activities",
    items: [
      "Have fun at Dreamland Aqua Park.",
      "Explore the mangroves and spot flamingos at Al Sinniyah Island.",
      "Enjoy a laid-back lunch at Umm Al Quwain Beach.",
      "Visit the historic Umm Al Quwain Fort and Museum.",
      "Discover cultural artifacts at the UAQ National Museum.",
    ],
  },
  {
    title: "Ras Al Khaimah Day Tour & Activities",
    items: [
      "Drive up to the highest peak in the UAE, Jebel Jais.",
      "Explore the Ras Al Khaimah National Museum.",
      "Visit the historic Dhayah Fort.",
      "Enjoy a traditional lunch.",
      "Discover the abandoned Al Jazirat Al Hamra village.",
    ],
  },
  {
    title: "Fujairah Day Tour & Activities",
    items: [
      "Visit the ancient Fujairah Fort.",
      "Explore the oldest mosque in the UAE, Al Bidyah Mosque.",
      "Tour the Fujairah Museum.",
      "Enjoy lunch by the beach.",
      "Relax or snorkel at Snoopy Island.",
      "Take a scenic walk along the Fujairah Corniche.",
    ],
  },
  {
    title: "Al Ain Day Tour & Activities",
    items: [
      "Walk through the peaceful Al Ain Oasis.",
      "Visit the historic Al Ain Palace Museum.",
      "Explore the Al Jahili Fort.",
      "Enjoy a traditional Emirati lunch.",
      "Spend time at Al Ain Zoo.",
      "Drive up to Jebel Hafeet for panoramic views.",
      "Relax in the hot springs at Green Mubazzarah.",
    ],
  },
];

export default function TourCards() {
  return (
    <div className="w-full py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-800">{tour.title}</h2>
            <ul className="space-y-2 text-gray-600 list-disc list-inside text-sm">
              {tour.items.map((item, i) => (
                <li key={i} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}