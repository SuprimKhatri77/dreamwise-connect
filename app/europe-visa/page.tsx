import EuropeVisaPage from "@/modules/Europe/EuropeVisa";

export default function page() {
  const whatsappNumber = process.env.WHATSAPP_NUMBER!;
  return (
    <>
      <EuropeVisaPage whatsappNumber={whatsappNumber} />
    </>
  );
}
