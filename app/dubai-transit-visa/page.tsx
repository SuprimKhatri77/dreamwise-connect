import DubaiTransitVisaCompo from "@/modules/Dubai/Dubai-transit-visa/DubaiTransitVisaCompo";

export default function DubaiTransitVisa() {
  const whatsappNumber = process.env.WHATSAPP_NUMBER!;
  const EMAIL = process.env.EMAIL || "Info@dreamwisegroup.com";
  return (
    <>
      <div className="min-h-screen  py-20">
        <DubaiTransitVisaCompo whatsappNumber={whatsappNumber} EMAIL={EMAIL} />
      </div>
    </>
  );
}
