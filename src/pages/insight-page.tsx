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

  const isInsightLimited = Boolean(insight?.is_limited);

  const hasYoutubeUrl = Boolean(
    insight?.source_type === "youtube" && insight?.source_url
  );

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
            {(isInsightLimited || hasYoutubeUrl) && (
              <div className="mt-4 flex items-center gap-2">
                {hasYoutubeUrl && (
                  <a
                    href={insight.source_url as string}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Badge
                      variant="default"
                      className="text-sm flex items-center gap-2 h-7"
                    >
                      <svg
                        className="size-5 fill-[#FF0000]"
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>YouTube</title>
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                      Listen on YouTube
                    </Badge>
                  </a>
                )}
                {isInsightLimited && (
                  <Tooltip>
                    <TooltipTrigger>
                      <Badge variant="destructive" className="text-sm h-7">
                        Limited Insight
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent
                      side="bottom"
                      align="center"
                      className="w-80 text-sm"
                    >
                      Due to the length of the source, the transcription and
                      summary of this insight is limited and might not contain
                      all the information.
                    </TooltipContent>
                  </Tooltip>
                )}
              </div>
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
