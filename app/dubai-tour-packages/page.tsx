import DNavbar from "@/modules/DNav";
import DubaiTourPackageCompo from "@/modules/Dubai/Dubai-tour-packages/DubaiTourPackageCompo";

export default function DubaiTourPackage() {
  return (
    <>
      <div className="min-h-screen">
        <DNavbar />
        <DubaiTourPackageCompo />
      </div>
    </>
  );
}