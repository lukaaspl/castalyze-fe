import { DashboardContent } from "@/components/dashboard-content";
import { DashboardTopBar } from "@/components/dashboard-top-bar";

export const HomePage = () => {
  return (
    <>
      <DashboardTopBar pageName="Home" />
      <DashboardContent className="text-center">
        <h1>Home Page</h1>
        <p>Welcome to the home page!</p>
      </DashboardContent>
    </>
  );
};
