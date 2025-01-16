import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const freeFeatures = [
  "Process one podcast at a time",
  "Add content via link, file, or manually",
  "Full YouTube transcription (or first 5 mins)",
  "AI-generated summaries and key points",
  "Mind maps",
  "View and search transcripts",
];

const proFeatures = [
  "Process multiple podcasts at once",
  "Full transcription for any content",
  "Choose custom video cover frames",
  "Custom prompts for AI summaries",
  "Source links in summaries",
  "Export to PDF, DOC, or TXT",
  "Tag and organize insights",
  "Support for multiple languages",
];

export const PricingSection = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl font-bold">Simple, transparent pricing</h2>
        <p className="text-muted-foreground">
          Choose the plan that's right for you
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Free Plan */}
        <Card className="relative flex flex-col h-full">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Free</CardTitle>
            <CardDescription>
              Perfect for trying out our service
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 flex-1">
            <div className="text-4xl font-bold">
              $0
              <span className="text-base font-normal text-muted-foreground">
                /mo
              </span>
            </div>
            <div className="space-y-2">
              {freeFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="mt-auto pt-8">
            <Button className="w-full" variant="outline">
              Get Started
            </Button>
          </CardFooter>
        </Card>
        {/* Pro Plan */}
        <Card className="relative flex flex-col h-full md:scale-110 border-primary bg-gradient-to-br from-zinc-800 via-stone-900 to-zinc-950 dark:from-primary/20 dark:via-secondary/30 dark:to-accent/20 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 dark:from-primary/10 dark:via-secondary/10 dark:to-accent/10 rounded-lg" />
          <div className="absolute right-0 top-4 rotate-12 transform">
            <div className="inline-flex items-center rounded-l-full rounded-r-full border border-primary bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
              Best choice
            </div>
          </div>
          <CardHeader className="space-y-1 relative">
            <CardTitle className="text-3xl">Pro</CardTitle>
            <CardDescription>Dedicated for power insighters</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 flex-1 relative">
            <div className="text-5xl font-bold">
              $49
              <span className="text-base font-normal text-muted-foreground">
                /mo
              </span>
            </div>
            <div className="space-y-2">
              {proFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="mt-auto pt-8 relative">
            <Button className="w-full" size="lg">
              Join the Waitlist
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
