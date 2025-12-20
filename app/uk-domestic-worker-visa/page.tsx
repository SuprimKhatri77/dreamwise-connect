import UkDomesticWorkerVisa from "@/modules/Uk-visa-services/uk-domestic-wv/uk-domestic-wv";

export default function page() {
  const whatsappNumber = process.env.WHATSAPP_NUMBER!;
  const email = process.env.EMAIL || "Info@dreamwisegroup.com";
  return (
    <>
      <UkDomesticWorkerVisa whatsappNumber={whatsappNumber} email={email} />
    </>
  );
}
