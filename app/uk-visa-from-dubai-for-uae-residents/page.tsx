import ApplyUkVisaFromDubai from "@/modules/Uk-visa-services/uk-visa-from-dubai-for-uae-residents/UkVFDFUR";

export default function page() {
  const whatsappNumber = process.env.WHATSAPP_NUMBER!;
  const email = process.env.EMAIL || "Info@dreamwisegroup.com";
  return (
    <>
      <ApplyUkVisaFromDubai whatsappNumber={whatsappNumber} email={email} />
    </>
  );
}
