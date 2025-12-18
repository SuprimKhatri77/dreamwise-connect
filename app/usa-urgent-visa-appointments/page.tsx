import USAUrgentVisa from "@/modules/Usa-visa-service/usa-urgent-visa-appointment/Uuva";

export default function page() {
  const whatsappNumber = process.env.WHATSAPP_NUMBER!;
  const email = process.env.EMAIL || "Info@dreamwisegroup.com";
  return (
    <>
      <USAUrgentVisa whatsappNumber={whatsappNumber} email={email} />
    </>
  );
}
