import ApplyUkVisaFromDubai from "@/modules/Uk-visa-services/uk-visa-from-dubai-for-uae-residents/UkVFDFUR";

export default function page() {
  const whatsappNumber = process.env.WHATSAPP_NUMBER!;
  return (
    <>
      <ApplyUkVisaFromDubai whatsappNumber={whatsappNumber} />
    </>
  );
}
