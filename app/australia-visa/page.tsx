import ApplyAustraliaVisaFromDubai from "@/modules/Australia/ApplyAustralia";

export default function Page() {
  const whatsappNumber =
    process.env.WHATSAPP_NUMBER ?? "";

  return <ApplyAustraliaVisaFromDubai whatsappNumber={whatsappNumber} />;
}
