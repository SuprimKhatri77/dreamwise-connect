import WorldwideTourPage from "@/modules/Worldwide-TourPage/WorldwideTourPage";

export default function page() {
  const whatsappNumber = process.env.WHATSAPP_NUMBER!;
  const email = process.env.EMAIL || "Info@dreamwisegroup.com";
  return (
    <>
      <WorldwideTourPage whatsappNumber={whatsappNumber} email={email} />
    </>
  );
}
