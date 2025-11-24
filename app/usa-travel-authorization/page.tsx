import ESTAServicePage from "@/modules/Usa-visa-service/usa-travel-authorization/Uta";

export default function page() {
  const whatsappNumber = process.env.WHATSAPP_NUMBER!;
  return (
    <>
      <ESTAServicePage whatsappNumber={whatsappNumber} />
    </>
  );
}
