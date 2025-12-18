import ApplyAustraliaVisaFromDubai from "@/modules/Australia/ApplyAustralia";

export default function page() {
  const whatsappNumber = process.env.WHATSAPP_NUMBER!;
  const email = process.env.EMAIL || "Info@dreamwisegroup.com";
  return (
    <>
      <ApplyAustraliaVisaFromDubai
        whatsappNumber={whatsappNumber}
        email={email}
      />
    </>
  );
}
