import USAUrgentVisa from "@/modules/Usa-visa-service/usa-urgent-visa-appointment/Uuva";

export default function page() {
  const whatsappNumber = process.env.WHATSAPP_NUMBER!;
  return (
    <>
      <USAUrgentVisa whatsappNumber={whatsappNumber} />
    </>
  );
}
