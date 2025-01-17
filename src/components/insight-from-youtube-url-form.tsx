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
import { useCreateInsightFromYoutubeMutation } from "@/hooks/use-create-insight-from-youtube-mutation";
import { FormEvent } from "react";
import { useNavigate } from "react-router";
import { FullScreenLoader } from "./ui/full-screen-loader";

const YOUTUBE_URL_REGEXP_PATTERN =
  /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;

export const InsightFromYouTubeURLForm = () => {
  const createInsightFromYoutube = useCreateInsightFromYoutubeMutation();

  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const url = formData.get("url") as string;

    const result = new RegExp(YOUTUBE_URL_REGEXP_PATTERN).exec(url);

    if (!result) {
      return;
    }

    const [, videoId] = result;

    createInsightFromYoutube.mutate(
      { video_id: videoId },
      {
        onSuccess: (data) => {
          navigate(`/insight/${data.id}`);
        },
      }
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle>From YouTube URL</CardTitle>
            <CardDescription>
              Paste the URL of the YouTube video you want to create an insight
              from.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">YouTube URL</Label>
              <Input
                id="url"
                name="url"
                placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                required
                pattern="^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$"
                title="Requires a valid YouTube URL"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit">Create insight</Button>
          </CardFooter>
        </Card>
      </form>
      <FullScreenLoader isVisible={createInsightFromYoutube.isPending} />
    </>
  );
};
