import { Insight } from "@/types/api";
import { FC } from "react";

interface InsightTranscriptionProps {
  insight: Insight;
}

export const InsightTranscription: FC<InsightTranscriptionProps> = ({
  insight,
}) => (
  <article className="mx-auto max-w-3xl w-full prose prose-img:rounded-xl dark:prose-invert animate-fade-in mt-4">
    {insight.transcription || "No transcription available"}
  </article>
);
