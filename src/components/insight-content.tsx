import "@/lib/unified";
import { markdownProcessor } from "@/lib/unified";
import { Insight } from "@/types/api";
import { AlertCircle } from "lucide-react";
import { FC, memo, useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

interface InsightContentProps {
  insight: Insight;
}

const buildMarkdownString = (insight: Insight) => {
  let markdownString = `# ${insight.title}\n\n`;

  if (insight.image) {
    markdownString += `![Cover image](${insight.image})\n\n`;
  }

  markdownString += `${insight.summary}`;

  return markdownString;
};

export const InsightContent: FC<InsightContentProps> = memo(({ insight }) => {
  const [processedHTMLString, setProcessedHTMLString] = useState<
    string | null
  >();

  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const process = async () => {
      setHasError(false);

      try {
        const markdownString = buildMarkdownString(insight);
        const { value } = await markdownProcessor.process(markdownString);
        setProcessedHTMLString(value as string);
      } catch (e) {
        console.log("Error during markdown processing:", e);
        setHasError(true);
      }
    };

    process();
  }, [insight]);

  if (hasError) {
    return (
      <Alert variant="default" className="max-w-3xl mx-auto">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Failed to process insight content</AlertTitle>
        <AlertDescription>
          There was an error processing the content of this insight. Please try
          again later.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <article
      className="mx-auto max-w-3xl w-full prose prose-img:rounded-xl dark:prose-invert animate-fade-in"
      dangerouslySetInnerHTML={{ __html: processedHTMLString as string }}
    />
  );
});
