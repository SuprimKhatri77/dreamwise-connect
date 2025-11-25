import DubaiTransitVisaCompo from "@/modules/Dubai/Dubai-transit-visa/DubaiTransitVisaCompo";

export default function DubaiTransitVisa() {
  const whatsappNumber = process.env.WHATSAPP_NUMBER!;
  return (
    <>
      <div className="min-h-screen  py-20">
        <DubaiTransitVisaCompo whatsappNumber={whatsappNumber} />
      </div>
    </>
  );
}
