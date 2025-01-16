import { DashboardContent } from "@/components/dashboard-content";
import { DashboardTopBar } from "@/components/dashboard-top-bar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Brain, FileText, Map, Upload } from "lucide-react";
import { useNavigate } from "react-router";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <DashboardTopBar pageName="Home" />
      <DashboardContent className="text-center">
        <main className="mx-auto max-w-3xl py-12 px-4 placeholder-gray-600">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">
                Castalyze – Unlock the Power of Podcasts
              </h1>
              <p className="text-lg text-muted-foreground">
                Transform your podcasts and videos into actionable insights. Get
                transcriptions, summaries, and mind maps powered by artificial
                intelligence.
              </p>
            </div>
            <Button onClick={() => navigate("/insight/new")}>
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <div className="space-y-6 pt-8">
              <h2 className="text-2xl font-semibold">Key Features</h2>
              <div className="grid gap-4">
                {[
                  {
                    title: "Content Analysis",
                    description:
                      "Add content manually, via YouTube links, or by uploading audio/video files",
                    Icon: Upload,
                  },
                  {
                    title: "Easy Transcription",
                    description:
                      "Generate full transcriptions for your content",
                    Icon: FileText,
                  },
                  {
                    title: "AI-Powered Summaries",
                    description:
                      "Get concise and impactful summaries with key takeaways",
                    Icon: Brain,
                  },
                  {
                    title: "Mind Maps",
                    description:
                      "Explore visually structured mind maps to understand content in more depth",
                    Icon: Map,
                  },
                ].map((feature, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center gap-6">
                        <feature.Icon className="h-8 w-8" />
                        <div className="flex flex-col gap-1">
                          <CardTitle className="text-left">
                            {feature.title}
                          </CardTitle>
                          <CardDescription>
                            {feature.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </main>
      </DashboardContent>
    </>
  );
};
