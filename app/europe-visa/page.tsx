import EuropeVisaPage from "@/modules/Europe/EuropeVisa";

export default function page() {
  const whatsappNumber = process.env.WHATSAPP_NUMBER!;
  const email = process.env.EMAIL || "Info@dreamwisegroup.com";

  return (
    <>
      <EuropeVisaPage whatsappNumber={whatsappNumber} email={email} />
    </>
  );
}
