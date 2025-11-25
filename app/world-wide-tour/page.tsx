import WorldwideTourPage from "@/modules/Worldwide-TourPage/WorldwideTourPage";

export default function page() {
  const whatsappNumber = process.env.WHATSAPP_NUMBER!;
  return (
    <>
      <WorldwideTourPage whatsappNumber={whatsappNumber} />
    </>
  );
}
