"use client";

import { useState } from "react";
import { ChevronDown, Menu, X, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileVisaOpen, setMobileVisaOpen] = useState(false);
  const [mobileDubaiOpen, setMobileDubaiOpen] = useState(false);
  const [mobileTourOpen, setMobileTourOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileVisaOpen(false);
    setMobileDubaiOpen(false);
    setMobileTourOpen(false);
  };

  return (
    <nav className="bg-white shadow-md fixed top-10  sm:top-10 left-0 right-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="shrink-0">
            <Link
              href="/"
              className="text-xl sm:text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              <Image
                src="/dreamwise-connect.png"
                alt="Dreamwise Connect"
                width={100}
                height={100}
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

            <a
              href="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              About Us
            </a>

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
                  <button className="w-full text-left px-5 py-3 hover:bg-blue-50 transition-colors flex items-center justify-between text-gray-700 font-medium border-b border-gray-100">
                    Dubai UAE Visa
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <div className="absolute right-full top-0 mr-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200">
                    <a
                      href="/dubai-transit-visa"
                      className="block px-5 py-3 hover:bg-blue-50 transition-colors text-gray-700 text-sm border-b border-gray-100"
                    >
                      Dubai Transit Visa
                    </a>
                    <a
                      href="/3-month-uae-visa"
                      className="block px-5 py-3 hover:bg-blue-50 transition-colors text-gray-700 text-sm border-b border-gray-100"
                    >
                      3-Month UAE Visa
                    </a>
                    <a
                      href="/6-month-uae-visa"
                      className="block px-5 py-3 hover:bg-blue-50 transition-colors text-gray-700 text-sm"
                    >
                      6-Month UAE Visa
                    </a>
                  </div>
                </div>

                <a
                  href="/turkey-visa"
                  className="block px-5 py-3 hover:bg-blue-50 transition-colors text-gray-700 font-medium border-b border-gray-100"
                >
                  Turkey Visa
                </a>
                <a
                  href="/schengen-visa"
                  className="block px-5 py-3 hover:bg-blue-50 transition-colors text-gray-700 font-medium border-b border-gray-100"
                >
                  Schengen Visa
                </a>
                <a
                  href="/uk-visa"
                  className="block px-5 py-3 hover:bg-blue-50 transition-colors text-gray-700 font-medium border-b border-gray-100"
                >
                  UK Visa
                </a>
                <a
                  href="/us-visa"
                  className="block px-5 py-3 hover:bg-blue-50 transition-colors text-gray-700 font-medium"
                >
                  US Visa
                </a>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Tour Packages
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>

              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 -translate-y-2">
                <a
                  href="/europe-tour"
                  className="block px-5 py-3 hover:bg-blue-50 transition-colors text-gray-700 font-medium border-b border-gray-100"
                >
                  Europe Tour Package
                </a>
                <a
                  href="/uae-tour"
                  className="block px-5 py-3 hover:bg-blue-50 transition-colors text-gray-700 font-medium border-b border-gray-100"
                >
                  UAE Tour Package
                </a>{" "}
                {/* Mobile Tour Packages */}
                <a
                  href="/southeast-asia"
                  className="block px-5 py-3 hover:bg-blue-50 transition-colors text-gray-700 font-medium border-b border-gray-100"
                >
                  Southeast Asia Package
                </a>
                <a
                  href="/maldives-honeymoon"
                  className="block px-5 py-3 hover:bg-blue-50 transition-colors text-gray-700 font-medium"
                >
                  Maldives Honeymoon
                </a>
              </div>
            </div>

            <a
              href="/contact"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contact Us
            </a>
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

              <a
                href="/about"
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                onClick={closeMobileMenu}
              >
                About Us
              </a>

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
                          <a
                            href="/dubai-transit-visa"
                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 rounded-lg transition-colors"
                            onClick={closeMobileMenu}
                          >
                            Dubai Transit Visa
                          </a>
                          <a
                            href="/3-month-uae-visa"
                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 rounded-lg transition-colors"
                            onClick={closeMobileMenu}
                          >
                            3-Month UAE Visa
                          </a>
                          <a
                            href="/6-month-uae-visa"
                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 rounded-lg transition-colors"
                            onClick={closeMobileMenu}
                          >
                            6-Month UAE Visa
                          </a>
                        </div>
                      )}
                    </div>

                    <a
                      href="/turkey-visa"
                      className="block px-4 py-2 text-gray-600 hover:bg-blue-50 rounded-lg transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Turkey Visa
                    </a>
                    <a
                      href="/schengen-visa"
                      className="block px-4 py-2 text-gray-600 hover:bg-blue-50 rounded-lg transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Schengen Visa
                    </a>
                    <a
                      href="/uk-visa"
                      className="block px-4 py-2 text-gray-600 hover:bg-blue-50 rounded-lg transition-colors"
                      onClick={closeMobileMenu}
                    >
                      UK Visa
                    </a>
                    <a
                      href="/us-visa"
                      className="block px-4 py-2 text-gray-600 hover:bg-blue-50 rounded-lg transition-colors"
                      onClick={closeMobileMenu}
                    >
                      US Visa
                    </a>
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
                    <a
                      href="/europe-tour"
                      className="block px-4 py-2 text-gray-600 hover:bg-blue-50 rounded-lg transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Europe Tour Package
                    </a>
                    <a
                      href="/uae-tour"
                      className="block px-4 py-2 text-gray-600 hover:bg-blue-50 rounded-lg transition-colors"
                      onClick={closeMobileMenu}
                    >
                      UAE Tour Package
                    </a>
                    <a
                      href="/southeast-asia"
                      className="block px-4 py-2 text-gray-600 hover:bg-blue-50 rounded-lg transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Southeast Asia Package
                    </a>
                    <a
                      href="/maldives-honeymoon"
                      className="block px-4 py-2 text-gray-600 hover:bg-blue-50 rounded-lg transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Maldives Honeymoon
                    </a>
                  </div>
                )}
              </div>

              <a
                href="/contact"
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                onClick={closeMobileMenu}
              >
                Contact Us
              </a>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
