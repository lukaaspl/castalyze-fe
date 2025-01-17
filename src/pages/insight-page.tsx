import { DashboardContent } from "@/components/dashboard-content";
import { DashboardTopBar } from "@/components/dashboard-top-bar";
import { InsightSummary } from "@/components/insight-summary";
import { InsightTranscription } from "@/components/insight-transcription";
import { NavActions } from "@/components/nav-actions";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useInsightQuery } from "@/hooks/use-insight-query";
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
        endSlot={
          isInsightMissing ? undefined : <NavActions insight={insight} />
        }
      />
      <DashboardContent>
        {isInsightMissing ? (
          <>
            <Skeleton className="mx-auto h-24 w-full max-w-3xl rounded-xl" />
            <Skeleton className="mx-auto h-full w-full max-w-3xl rounded-xl" />
          </>
        ) : (
          <Tabs defaultValue="summary" className="w-full max-w-3xl mx-auto">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="summary">Summary</TabsTrigger>
              <TabsTrigger value="transcription">Transcription</TabsTrigger>
            </TabsList>
            {insight.is_limited && (
              <Tooltip>
                <TooltipTrigger>
                  <Badge variant="destructive" className="mt-4 text-base">
                    Limited Insight
                  </Badge>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  align="center"
                  className="w-80 text-sm"
                >
                  Due to the length of the source, the transcription and summary
                  of this insight is limited and might not contain all the
                  information.
                </TooltipContent>
              </Tooltip>
            )}
            <TabsContent value="summary">
              <InsightSummary insight={insight} />
            </TabsContent>
            <TabsContent value="transcription">
              <InsightTranscription insight={insight} />
            </TabsContent>
          </Tabs>
        )}
      </DashboardContent>
    </>
  );
};
