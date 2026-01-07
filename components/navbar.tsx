"use client";

import { useState } from "react";
import { ChevronDown, Menu, X, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileVisaOpen, setMobileVisaOpen] = useState(false);
  const [mobileDubaiOpen, setMobileDubaiOpen] = useState(false);
  const [mobileUKOpen, setMobileUKOpen] = useState(false);
  const [mobileUSAOpen, setMobileUSAOpen] = useState(false);
  const [mobileTourOpen, setMobileTourOpen] = useState(false);
  const [mobileAustraliaOpen, setMobileAustraliaOpen] = useState(false);
  const [mobileEuropeOpen, setMobileEuropeOpen] = useState(false);
  const pathname = usePathname();

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileVisaOpen(false);
    setMobileDubaiOpen(false);
    setMobileUSAOpen(false);
    setMobileUKOpen(false);
    setMobileTourOpen(false);
    setMobileAustraliaOpen(false);
    setMobileEuropeOpen(false);
  };

  return (
    !pathname.startsWith("/admin") && (
      <nav
        className={cn(
          "bg-white shadow-md fixed top-10  sm:top-10 left-0 right-0 z-40"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            <div className="shrink-0">
              <Link
                href="/"
                className="text-xl sm:text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
              >
                <Image
                  src="/dreamwiseglobal-nobg.png"
                  alt="Dreamwise Connect"
                  width={160}
                  height={160}
                  className="bg-transparent"
                />
              </Link>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                About Us
              </Link>

              <div className="relative group">
                <Link
                  href="/visa-and-services"
                  className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  Visa & Services
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </Link>

                <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 -translate-y-2">
                  <div className="relative group/nested">
                    <Link
                      href="/dubai-visa-services"
                      className="w-full text-left px-5 py-3 hover:bg-blue-50 transition-colors flex items-center justify-between text-gray-700 font-medium border-b border-gray-100"
                    >
                      Dubai UAE Visa
                      <ChevronRight className="w-4 h-4" />
                    </Link>

                    <div className="absolute right-full top-0 mr-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200">
                      <Link
                        href="/dubai-transit-visa"
                        className="block px-5 py-3 hover:bg-blue-50 transition-colors text-gray-700 text-sm border-b border-gray-100"
                      >
                        Dubai Transit Visa
                      </Link>
                      <Link
                        href="/dubai-tour-packages"
                        className="block px-5 py-3 hover:bg-blue-50 transition-colors text-gray-700 text-sm border-b border-gray-100"
                      >
                        Dubai Tour Packages
                      </Link>
                      <Link
                        href="/dubai-visa-services"
                        className="block px-5 py-3 hover:bg-blue-50 transition-colors text-gray-700 text-sm border-b border-gray-100"
                      >
                        Dubai Visa Services
                      </Link>
                    </div>
                  </div>

                  <div className="relative group/nested">
                    <Link
                      href="/australia-visa"
                      className="w-full text-left px-5 py-3 hover:bg-blue-50 transition-colors flex items-center justify-between text-gray-700 font-medium border-b border-gray-100"
                    >
                      Australia Visa
                      <ChevronRight className="w-4 h-4" />
                    </Link>

                    <div className="absolute right-full top-0 mr-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200">
                      <Link
                        href="/australia-visa-services"
                        className="block px-5 py-3 hover:bg-blue-50 transition-colors text-gray-700 text-sm border-b border-gray-100"
                      >
                        Australia Visa Services
                      </Link>
                    </div>
                  </div>

                  <div className="relative group/nested">
                    <Link
                      href="/europe-visa"
                      className="w-full text-left px-5 py-3 hover:bg-blue-50 transition-colors flex items-center justify-between text-gray-700 font-medium border-b border-gray-100"
                    >
                      Europe Visa
                      <ChevronRight className="w-4 h-4" />
                    </Link>

                    <div className="absolute right-full top-0 mr-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200">
                      <Link
                        href="/europe-visa-services"
                        className="block px-5 py-3 hover:bg-blue-50 transition-colors text-gray-700 text-sm border-b border-gray-100"
                      >
                        Europe Visa Services
                      </Link>
                    </div>
                  </div>

                  <div className="relative group/nested">
                    <Link
                      href="/uk-visa-from-dubai-for-uae-residents"
                      className="w-full text-left px-5 py-3 hover:bg-blue-50 transition-colors flex items-center justify-between text-gray-700 font-medium border-b border-gray-100"
                    >
                      UK Visa
                      <ChevronRight className="w-4 h-4" />
                    </Link>

                    <div className="absolute right-full top-0 mr-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200">
                      <Link
                        href="/uk-domestic-worker-visa"
                        className="block px-5 py-3 hover:bg-blue-50 transition-colors text-gray-700 text-sm border-b border-gray-100"
                      >
                        UK Domestic Worker Visa
                      </Link>
                      <Link
                        href="/uk-visa-from-dubai-for-uae-residents"
                        className="block px-5 py-3 hover:bg-blue-50 transition-colors text-gray-700 text-sm border-b border-gray-100"
                      >
                        UK Visa from Dubai
                      </Link>
                    </div>
                  </div>
                  <div className="relative group/nested">
                    <Link
                      href="/usa-visa-from-dubai"
                      className="w-full text-left px-5 py-3 hover:bg-blue-50 transition-colors flex items-center justify-between text-gray-700 font-medium border-b border-gray-100"
                    >
                      USA Visa
                      <ChevronRight className="w-4 h-4" />
                    </Link>

                    <div className="absolute right-full top-0 mr-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200">
                      <Link
                        href="/usa-travel-authorization"
                        className="block px-5 py-3 hover:bg-blue-50 transition-colors text-gray-700 text-sm border-b border-gray-100"
                      >
                        USA Travel Authorization
                      </Link>
                      <Link
                        href="/usa-urgent-visa-appointments"
                        className="block px-5 py-3 hover:bg-blue-50 transition-colors text-gray-700 text-sm border-b border-gray-100"
                      >
                        USA Urgent Visa
                      </Link>
                      <Link
                        href="/usa-visa-from-dubai"
                        className="block px-5 py-3 hover:bg-blue-50 transition-colors text-gray-700 text-sm border-b border-gray-100"
                      >
                        USA Visa From Dubai
                      </Link>
                      <Link
                        href="/usa-visa-renewal-for-uae-residents"
                        className="block px-5 py-3 hover:bg-blue-50 transition-colors text-gray-700 text-sm border-b border-gray-100"
                      >
                        USA Visa Renewal
                      </Link>
                    </div>
                  </div>
                  <Link
                    href="/citizenship-by-investment"
                    className="block px-5 py-3 hover:bg-blue-50 transition-colors text-gray-700 font-medium border-b border-gray-100"
                  >
                    Citizenship
                  </Link>
                </div>
              </div>

              <div className="relative group">
                <Link
                  href="/world-wide-tour"
                  className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  Tour Packages
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </Link>

                <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 -translate-y-2">
                  <Link
                    href="/world-wide-tour"
                    className="block px-5 py-3 hover:bg-blue-50 transition-colors text-gray-700 font-medium border-b border-gray-100"
                  >
                    World Wide Tour
                  </Link>
                </div>
              </div>

              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Contact Us
              </Link>
              <Link
                href="/blogs"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Blogs
              </Link>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors z-50"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <>
            <div
              className="fixed inset-0 z-50 bg-gray-100/70 bg-opacity-50 lg:hidden "
              onClick={closeMobileMenu}
            />

            <div className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white lg:hidden z-50 overflow-y-auto shadow-2xl transform transition-transform duration-300 ease-in-out">
              <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-blue-50">
                <h2
                  className="text-lg font-b              {/* Mobile Tour Packages */}
old text-gray-600"
                >
                  Menu
                </h2>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="px-4 py-4 space-y-1">
                <Link
                  href="/"
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                  onClick={closeMobileMenu}
                >
                  About Us
                </Link>

                <div>
                  <button
                    onClick={() => setMobileVisaOpen(!mobileVisaOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                  >
                    Visa & Services
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        mobileVisaOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {mobileVisaOpen && (
                    <div className="ml-4 mt-1 space-y-1">
                      <div>
                        <button
                          onClick={() => setMobileDubaiOpen(!mobileDubaiOpen)}
                          className="w-full flex items-center justify-between px-4 py-2 text-gray-600 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          Dubai UAE Visa
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              mobileDubaiOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {mobileDubaiOpen && (
                          <div className="ml-4 mt-1 space-y-1">
                            <Link
                              href="/dubai-transit-visa"
                              className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 rounded-lg transition-colors"
                              onClick={closeMobileMenu}
                            >
                              Dubai Transit Visa
                            </Link>
                            <Link
                              href="/dubai-tour-packages"
                              className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 rounded-lg transition-colors"
                              onClick={closeMobileMenu}
                            >
                              Dubai Tour Packages
                            </Link>
                            <Link
                              href="/dubai-visa-services"
                              className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 rounded-lg transition-colors"
                              onClick={closeMobileMenu}
                            >
                              Dubai Visa Services
                            </Link>
                          </div>
                        )}
                      </div>

                      <div>
                        <button
                          onClick={() =>
                            setMobileAustraliaOpen(!mobileAustraliaOpen)
                          }
                          className="w-full flex items-center justify-between px-4 py-2 text-gray-600 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          Australia Visa
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              mobileDubaiOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {mobileAustraliaOpen && (
                          <div className="ml-4 mt-1 space-y-1">
                            <Link
                              href="/australia-visa-services"
                              className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 rounded-lg transition-colors"
                              onClick={closeMobileMenu}
                            >
                              Australia Visa Service
                            </Link>
                          </div>
                        )}
                      </div>

                      <div>
                        <button
                          onClick={() => setMobileEuropeOpen(!mobileEuropeOpen)}
                          className="w-full flex items-center justify-between px-4 py-2 text-gray-600 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          Europe Visa
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              mobileEuropeOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {mobileEuropeOpen && (
                          <div className="ml-4 mt-1 space-y-1">
                            <Link
                              href="/europe-visa-services"
                              className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 rounded-lg transition-colors"
                              onClick={closeMobileMenu}
                            >
                              Europe Visa Service
                            </Link>
                          </div>
                        )}
                      </div>

                      <div>
                        <button
                          onClick={() => setMobileUKOpen(!mobileUKOpen)}
                          className="w-full flex items-center justify-between px-4 py-2 text-gray-600 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          UK Visa
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              mobileUKOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {mobileUKOpen && (
                          <div className="ml-4 mt-1 space-y-1">
                            <Link
                              href="/uk-domestic-worker-visa"
                              className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 rounded-lg transition-colors"
                              onClick={closeMobileMenu}
                            >
                              UK Domestic Worker Visa
                            </Link>
                            <Link
                              href="/uk-visa-from-dubai-for-uae-residents"
                              className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 rounded-lg transition-colors"
                              onClick={closeMobileMenu}
                            >
                              UK Visa from Dubai
                            </Link>
                          </div>
                        )}
                      </div>
                      <div>
                        <button
                          onClick={() => setMobileUSAOpen(!mobileUSAOpen)}
                          className="w-full flex items-center justify-between px-4 py-2 text-gray-600 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          US Visa
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              mobileUSAOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {mobileUSAOpen && (
                          <div className="ml-4 mt-1 space-y-1">
                            <Link
                              href="/usa-travel-authorization"
                              className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 rounded-lg transition-colors"
                              onClick={closeMobileMenu}
                            >
                              USA Travel Authorization
                            </Link>
                            <Link
                              href="/usa-visa-from-dubai"
                              className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 rounded-lg transition-colors"
                              onClick={closeMobileMenu}
                            >
                              USA Visa from Dubai
                            </Link>
                            <Link
                              href="/usa-urgent-visa-appoointments"
                              className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 rounded-lg transition-colors"
                              onClick={closeMobileMenu}
                            >
                              USA Urgent Visa
                            </Link>
                            <Link
                              href="/usa-visa-renewal-for-uae-residents"
                              className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 rounded-lg transition-colors"
                              onClick={closeMobileMenu}
                            >
                              USA Visa Renewal
                            </Link>
                          </div>
                        )}
                      </div>

                      <Link
                        href="/citizenship-by-investment"
                        className="block px-4 py-2 text-gray-600 hover:bg-blue-50 rounded-lg transition-colors"
                        onClick={closeMobileMenu}
                      >
                        Citizenship By Investment
                      </Link>
                    </div>
                  )}
                </div>

                <div>
                  <button
                    onClick={() => setMobileTourOpen(!mobileTourOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                  >
                    Tour Packages
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        mobileTourOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {mobileTourOpen && (
                    <div className="ml-4 mt-1 space-y-1">
                      <Link
                        href="/world-wide-tour"
                        className="block px-4 py-2 text-gray-600 hover:bg-blue-50 rounded-lg transition-colors"
                        onClick={closeMobileMenu}
                      >
                        World Wide Tour
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/contact"
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </Link>
                <Link
                  href="/blogs"
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </>
        )}
      </nav>
    )
  );
}
