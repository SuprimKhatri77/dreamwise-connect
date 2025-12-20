import CIBCountryCards from "./cib-country-cards";
import CIBHeader from "./cib-header";

export default function CitizenshipByInvestmentPage() {
  const whatsappNumber = process.env.WHATSAPP_NUMBER!;
  return (
    <main className="min-h-screen bg-background">
      <CIBHeader />
      <CIBCountryCards whatsappNumber={whatsappNumber} />
    </main>
  );
}
