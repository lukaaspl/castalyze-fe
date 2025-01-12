import { DashboardContent } from "@/components/dashboard-content";
import { DashboardTopBar } from "@/components/dashboard-top-bar";

export const CreateInsightPage = () => {
  return (
    <>
      <DashboardTopBar pageName="Create new insight" />
      <DashboardContent>
        <input type="text" placeholder="Insight title" className="input" />
        <textarea placeholder="Insight description" className="input mt-4" />
        <div className="flex justify-end mt-4">
          <button className="btn btn-primary">Create Insight</button>
        </div>
      </DashboardContent>
    </>
  );
};
