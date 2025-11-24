import CIBCountryCards from "./cib-country-cards";
import CIBHeader from "./cib-header";

export default function CitizenshipByInvestmentPage() {
  return (
    <main className="min-h-screen bg-background">
      <CIBHeader />
      <CIBCountryCards />
    </main>
  );
}
