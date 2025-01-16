import { DashboardContent } from "@/components/dashboard-content";
import { DashboardTopBar } from "@/components/dashboard-top-bar";
import { InsightFromFileForm } from "@/components/insight-from-file-form";
import { InsightFromYouTubeURLForm } from "@/components/insight-from-youtube-url-form";
import { InsightManualForm } from "@/components/insight-manual-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const CreateInsightPage = () => {
  return (
    <>
      <DashboardTopBar pageName="New Insight" />
      <DashboardContent>
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2 text-center">
          How do you want to create your insight?
        </h2>
        <Tabs defaultValue="yt" className="mx-auto w-[800px]">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="yt">YouTube URL</TabsTrigger>
            <TabsTrigger value="file">Audio/video file</TabsTrigger>
            <TabsTrigger value="manual">Manually</TabsTrigger>
          </TabsList>
          <TabsContent value="yt">
            <InsightFromYouTubeURLForm />
          </TabsContent>
          <TabsContent value="file">
            <InsightFromFileForm />
          </TabsContent>
          <TabsContent value="manual">
            <InsightManualForm />
          </TabsContent>
        </Tabs>
      </DashboardContent>
    </>
  );
};
