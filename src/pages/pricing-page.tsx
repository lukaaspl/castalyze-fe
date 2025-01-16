import { DashboardContent } from "@/components/dashboard-content";
import { DashboardTopBar } from "@/components/dashboard-top-bar";
import { PricingSection } from "@/components/pricing-section";

export const PricingPage = () => {
  return (
    <>
      <DashboardTopBar pageName="Pricing" />
      <DashboardContent>
        <PricingSection />
      </DashboardContent>
    </>
  );
};
