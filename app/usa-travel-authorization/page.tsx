import ESTAServicePage from "@/modules/Usa-visa-service/usa-travel-authorization/Uta";

export default function page() {
  const whatsappNumber = process.env.WHATSAPP_NUMBER!;
  const email = process.env.EMAIL || "Info@dreamwisegroup.com";
  return (
    <>
      <ESTAServicePage whatsappNumber={whatsappNumber} email={email} />
    </>
  );
}
