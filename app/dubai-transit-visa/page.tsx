import DNavbar from "@/modules/DNav";
import DubaiTransitVisaCompo from "@/modules/Dubai-transit-visa/DubaiTransitVisaCompo";

export default function DubaiTransitVisa() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <DNavbar />
        <DubaiTransitVisaCompo />
      </div>
    </>
  );
}