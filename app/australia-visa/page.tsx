import ApplyAustraliaVisaFromDubai from "@/modules/Australia/ApplyAustralia";

export default function page() {
  const whatsappNumber = process.env.WHATSAPP_NUMBER!;
  return (
    <>
      <ApplyAustraliaVisaFromDubai whatsappNumber={whatsappNumber} />
    </>
  );
}
