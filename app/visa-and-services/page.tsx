import VisaServicesPage from "@/components/visa-services";

export default function Page() {
  const whatsappNumber = process.env.WHATSAPP_NUMBER || "9812345678";
  return <VisaServicesPage whatsappNumber={whatsappNumber} />;
}
