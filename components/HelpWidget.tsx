"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const advisors = [
  {
    name: "Dreamwisegroup",
    // role: "Business Consultant (English, Urdu, Hindi, Sindhi)",
    // online: true,
  },
];

const HelpWidget = ({ whatsappNumber }: { whatsappNumber: string }) => {
  const [open, setOpen] = useState(false);

  const handleWhatsAppClick = (idx: number) => {
    const number = whatsappNumber.replace(/\D/g, "");
    window.open(`https://wa.me/${number}`, "_blank");
  };

  const pathname = usePathname();
  return (
    !pathname.startsWith("/admin") && (
      <>
        {/* Floating Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <motion.button
            onClick={() => setOpen(!open)}
            className="relative flex items-center gap-3 bg-white rounded-full px-4 py-3 shadow-lg"
          >
            {/* Pulse */}
            <div className="relative">
              <span className="absolute inset-0 rounded-full bg-green-500 opacity-20 animate-ping delay-1000" />

              <MessageCircle className="relative z-10 text-green-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">
              Need Any Help!
            </span>
          </motion.button>
        </div>

        {/* Panel */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.25 }}
              className="fixed bottom-20 right-6 w-80 rounded-xl shadow-xl bg-white z-50 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gray-400 text-white px-4 pb-2 flex justify-between">
                <div>
                  <Image
                    src={"/dreamwiseglobal-nobg.png"}
                    width={150}
                    height={120}
                    alt="dreamwiseglobal logo"
                  />
                  <p className="text-xs opacity-90">
                    You can reach out us anytime you want just click on the
                    number below.
                  </p>
                </div>
                <X
                  onClick={() => setOpen(false)}
                  className="mt-5 cursor-pointer opacity-80 hover:opacity-100"
                />
              </div>

              {/* Advisors */}
              <div className="max-h-80 overflow-y-auto">
                {advisors.map((a, i) => (
                  <button
                    onClick={() => handleWhatsAppClick(i)}
                    key={i}
                    className="flex items-center gap-3 justify-between px-4 py-3 border-b last:border-none hover:bg-gray-100 w-full"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-slate-700">
                        {a.name[0]}
                      </div>

                      <div className="">
                        <p className="font-semibold text-sm">{a.name}</p>
                        {/* <p className="text-xs text-gray-500">{a.role}</p> */}
                        {/* {a.online && (
                        <span className="text-xs text-green-600 flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-green-500" />
                          online
                        </span>
                      )} */}
                        <span className="text-xs text-green-600 flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-green-500" />
                          {whatsappNumber}
                        </span>
                      </div>
                    </div>
                    <div>
                      <MessageCircle />
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    )
  );
};

export default HelpWidget;
