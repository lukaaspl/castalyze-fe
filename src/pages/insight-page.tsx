import { DashboardContent } from "@/components/dashboard-content";
import { DashboardTopBar } from "@/components/dashboard-top-bar";
import { NavActions } from "@/components/nav-actions";
import { useParams } from "react-router";

export const InsightPage = () => {
  const { id } = useParams<"id">();

  if (!id) {
    throw new Error("Insight ID is required");
  }

  return (
    <>
      <DashboardTopBar
        pageName={`Project Management & Task Tracking (Insight ${id})`}
        endSlot={<NavActions />}
      />
      <DashboardContent>
        <div className="mx-auto h-24 w-full max-w-3xl rounded-xl bg-neutral-100/50 dark:bg-neutral-800/50" />
        <div className="mx-auto h-full w-full max-w-3xl rounded-xl bg-neutral-100/50 dark:bg-neutral-800/50" />
      </DashboardContent>
    </>
  );
};
