import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const InsightFromYouTubeURLForm = () => {
  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle>From YouTube URL</CardTitle>
        <CardDescription>
          Paste the URL of the YouTube video you want to create an insight from.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="name">YouTube URL</Label>
          <Input
            id="url"
            placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button>Create insight</Button>
      </CardFooter>
    </Card>
  );
};
