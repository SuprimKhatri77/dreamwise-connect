"use client";

import { Phone, Mail, MapPin, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export function Footer({ whatsappNumber }: { whatsappNumber: string }) {
  const [showMap, setShowMap] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  const location = {
    lat: 25.260342451462343,
    lng: 55.28514324480547,
    address: "Dreamwise Global, Dubai, UAE",
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  const handleMapClick = () => {
    setShowMap(true);
  };

  const closeMap = () => {
    setShowMap(false);
  };

  useEffect(() => {
    if (!mapLoaded) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      link.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
      link.crossOrigin = "";
      document.head.appendChild(link);

      const script = document.createElement("script");
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      script.integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=";
      script.crossOrigin = "";
      script.onload = () => setMapLoaded(true);
      document.head.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (
      showMap &&
      mapLoaded &&
      typeof window !== "undefined" &&
      (window as any).L
    ) {
      const L = (window as any).L;

      const container = document.getElementById("leaflet-map");
      if (container) {
        container.innerHTML = "";
      }

      const map = L.map("leaflet-map").setView(
        [location.lat, location.lng],
        15
      );

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          maxZoom: 20,
        }
      ).addTo(map);

      const marker = L.marker([location.lat, location.lng]).addTo(map);
      marker.bindPopup(`<b>${location.address}</b>`).openPopup();

      return () => {
        map.remove();
      };
    }
  }, [showMap, mapLoaded]);

  return (
    <>
      <footer className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-serif text-xl font-bold mb-4">
                Dreamwise Global
              </h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
                Your trusted partner for visa consultancy and travel services
                globally.
              </p>
              <div className="space-y-2 text-sm">
                <button
                  onClick={handleWhatsAppClick}
                  className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
                >
                  <Phone size={16} />
                  <div>
                    <p>+971 54 512 9737</p>
                    <p>+971 50 537 2081</p>
                  </div>
                </button>
                <a
                  href="mailto:info@dreamwisegroup.com"
                  className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
                >
                  <Mail size={16} />
                  info@dreamwisegroup.com
                </a>
                <button
                  onClick={handleMapClick}
                  className="flex items-center gap-2 hover:text-primary-foreground transition-colors cursor-pointer"
                >
                  <MapPin size={16} />
                  <span>Dubai, UAE</span>
                </button>
              </div>

              {/* Mini Map Preview */}
              <div className="mt-4">
                <div
                  onClick={handleMapClick}
                  className="relative h-32 rounded-lg overflow-hidden cursor-pointer group bg-gray-200 border-2 border-primary-foreground/20"
                >
                  <iframe
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=${
                      location.lng - 0.005
                    },${location.lat - 0.005},${location.lng + 0.005},${
                      location.lat + 0.005
                    }&layer=mapnik&marker=${location.lat},${location.lng}`}
                    className="w-full h-full"
                    style={{ border: 0, pointerEvents: "none" }}
                    loading="lazy"
                  />
                  {/* <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span className="bg-white text-primary px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                      Click to view map
                    </span>
                  </div> */}
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/visa-and-services"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Visa and Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/world-wide-tour"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    World Wide Tour
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Popular Visas</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/dubai-visa-services"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Dubai UAE Visa
                  </Link>
                </li>
                <li>
                  <Link
                    href="/europe-visa"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Europe Visa
                  </Link>
                </li>
                <li>
                  <Link
                    href="/uk-visa-from-dubai-for-uae-residents"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    UK Visa
                  </Link>
                </li>
                <li>
                  <Link
                    href="/usa-visa-from-dubai"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    USA Visa
                  </Link>
                </li>
                <li>
                  <Link
                    href="/australia-visa"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Australia Visa
                  </Link>
                </li>
                <li>
                  <Link
                    href="/citizenship-by-investment"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Citizenship by Investment
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="inline-block p-2 hover:bg-primary-foreground/20 rounded-lg transition-colors"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white fill-white"
                    height={20}
                    width={20}
                  >
                    <title>Facebook</title>
                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-block p-2 hover:bg-primary-foreground/20 rounded-lg transition-colors"
                >
                  <svg
                    role="img"
                    height={20}
                    width={20}
                    className="fill-white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>X</title>
                    <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-block p-2 hover:bg-primary-foreground/20 rounded-lg transition-colors"
                >
                  <svg
                    role="img"
                    height={20}
                    width={20}
                    className="text-white fill-white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Instagram</title>
                    <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-block p-2 hover:bg-primary-foreground/20 rounded-lg transition-colors"
                >
                  <svg
                    height="20"
                    width="20"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 382 382"
                    fill="#ffffff"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z"></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/70">
              <p>&copy; 2025 Dreamwise Global. All rights reserved.</p>
              <div className="flex gap-6">
                <Link
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Terms & Conditions
                </Link>
                <Link
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Expanded Map Modal */}
      {showMap && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl h-[80vh] relative overflow-hidden">
            <button
              onClick={closeMap}
              className="absolute top-4 right-4 z-1000 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <X size={24} className="text-gray-700" />
            </button>
            <div id="leaflet-map" className="w-full h-full"></div>
          </div>
        </div>
      )}
    </>
  );
}
