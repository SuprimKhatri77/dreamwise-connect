import UsVisaRenewal from "@/modules/Usa-visa-service/us-visa-renewal/UsVisaRenewal";

export default function page() {
  const whatsappNumber = process.env.WHATSAPP_NUMBER!;
  return (
    <>
      <UsVisaRenewal whatsappNumber={whatsappNumber} />
    </>
  );
}
