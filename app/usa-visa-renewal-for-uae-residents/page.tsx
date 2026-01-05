import UsVisaRenewal from "@/modules/Usa-visa-service/us-visa-renewal/UsVisaRenewal";

export default function page() {
  const whatsappNumber = process.env.WHATSAPP_NUMBER!;
  const email = process.env.EMAIL!;
  return (
    <>
      <UsVisaRenewal whatsappNumber={whatsappNumber} email={email} />
    </>
  );
}
