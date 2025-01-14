import { DashboardContent } from "@/components/dashboard-content";
import { DashboardTopBar } from "@/components/dashboard-top-bar";
import { NavActions } from "@/components/nav-actions";
import { Skeleton } from "@/components/ui/skeleton";
import { useInsightQuery } from "@/hooks/use-insight-query";
import { Insight } from "@/types/api";
import { FC } from "react";
import { useParams } from "react-router";

export const InsightPage = () => {
  const { id } = useParams<"id">();

  if (!id) {
    throw new Error("Insight ID is required");
  }

  const { data: insight, isLoading } = useInsightQuery(id);

  const isInsightMissing = isLoading || !insight;

  return (
    <>
      <DashboardTopBar
        pageName={insight?.title || "Insight"}
        endSlot={isInsightMissing ? undefined : <NavActions />}
      />
      <DashboardContent>
        {isInsightMissing ? (
          <>
            <Skeleton className="mx-auto h-24 w-full max-w-3xl rounded-xl" />
            <Skeleton className="mx-auto h-full w-full max-w-3xl rounded-xl" />
          </>
        ) : (
          <InsightContent insight={insight} />
        )}
      </DashboardContent>
    </>
  );
};

interface InsightContentProps {
  insight: Insight;
}

const InsightContent: FC<InsightContentProps> = ({ insight }) => {
  return (
    <div className="animate-fade-in">
      <pre>{JSON.stringify(insight, null, 2)}</pre>
    </div>
  );
};
