"use client";
import { MessageCircle, ChevronDown, X } from "lucide-react";
import { useState } from "react";

interface StickyContactWidgetProps {
  phoneNumber?: string;
  heading?: string;
  description?: string;
}

export function StickyContactWidget({
  phoneNumber = "+1 (234) 567-8900",
  heading = "Need Help?",
  description = "Get in touch with our visa consultants via WhatsApp",
}: StickyContactWidgetProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const number = phoneNumber.replace(/\D/g, "");
    window.open(`https://wa.me/${number}`, "_blank");
  };

  return (
    <>
      <div
        className="fixed z-40 hidden md:block"
        style={{
          right: "24px",
          bottom: "24px",
        }}
        suppressHydrationWarning
      >
        <div
          data-desktop
          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden"
          style={{ width: "288px" }}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {heading}
            </h3>
            <ChevronDown
              size={20}
              className="text-gray-600 dark:text-gray-400 transition-transform duration-300"
              style={{
                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </button>

          <div
            className="transition-all duration-300 ease-in-out"
            style={{
              maxHeight: isOpen ? "384px" : "0px",
              opacity: isOpen ? 1 : 0,
              overflow: "hidden",
            }}
          >
            <div className="px-4 pb-4">
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                {description}
              </p>

              <button
                onClick={handleWhatsAppClick}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2.5 rounded-md hover:bg-blue-700 transition-colors font-medium text-sm"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </button>

              <p className="text-xs text-gray-500 dark:text-gray-500 text-center mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                {phoneNumber}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="fixed z-40"
        style={{
          right: "16px",
          bottom: "10px",
          zIndex: 40,
        }}
      >
        <style jsx>{`
          @media (min-width: 768px) {
            div[data-mobile] {
              display: none !important;
            }
          }
        `}</style>

        <div data-mobile>
          {isMobileOpen && (
            <>
              <div
                onClick={() => setIsMobileOpen(false)}
                style={{
                  position: "fixed",
                  inset: "0",
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                  zIndex: 40,
                }}
              />

              <div
                className="fixed bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl"
                style={{
                  bottom: "80px",
                  right: "16px",
                  left: "16px",
                  zIndex: 40,
                }}
              >
                <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {heading}
                  </h3>
                  <button
                    onClick={() => setIsMobileOpen(false)}
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="p-4">
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {description}
                  </p>

                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
                  >
                    <MessageCircle size={20} />
                    WhatsApp Us
                  </button>

                  <p className="text-xs text-gray-500 text-center mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                    {phoneNumber}
                  </p>
                </div>
              </div>
            </>
          )}

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
            style={{
              padding: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MessageCircle size={24} />
          </button>
        </div>
      </div>
    </>
  );
}
