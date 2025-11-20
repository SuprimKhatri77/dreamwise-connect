"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "How long does the visa application process take?",
      answer:
        "Most visa applications are processed within 5-14 business days depending on the destination country. We provide expedited processing options for urgent cases.",
    },
    {
      question: "What documents do I need to prepare?",
      answer:
        "Required documents vary by visa type and destination. Our consultants will provide a complete checklist tailored to your specific application once you book a consultation.",
    },
    {
      question: "Do you offer visa interview preparation?",
      answer:
        "Yes, we provide comprehensive visa interview coaching and preparation sessions to help you present your application confidently.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "If your visa application is rejected without fault of our consultancy, we offer a 75% refund. Please refer to our terms and conditions for complete details.",
    },
    {
      question: "Can you help with multiple visa applications?",
      answer:
        "We can manage multiple visa applications simultaneously. Many clients apply for Schengen and UK visas together, and we coordinate all applications smoothly.",
    },
    {
      question: "How do I track my application status?",
      answer:
        "All clients receive a unique tracking portal where you can monitor your application status in real-time. We also send email updates at each stage of the process.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Find answers to common questions about our services
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-lg font-semibold text-foreground py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
