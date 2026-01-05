import DubaiTourPackageCompo from "@/modules/Dubai/Dubai-tour-packages/DubaiTourPackageCompo";

export default function DubaiTourPackage() {
  const whatsappNumber = process.env.WHATSAPP_NUMBER!;
  const email = process.env.EMAIL!;
  return (
    <>
      <div className="min-h-screen">
        <DubaiTourPackageCompo whatsappNumber={whatsappNumber} email={email} />
      </div>
    </>
  );
}
