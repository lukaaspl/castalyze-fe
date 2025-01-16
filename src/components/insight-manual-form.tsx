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
import { Textarea } from "@/components/ui/textarea";
import { useCreateInsightManuallyMutation } from "@/hooks/use-create-insight-manually-mutation";
import { cn } from "@/lib/utils";
import { Image } from "lucide-react";
import { FormEvent, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const imageFileToBase64 = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result as string);
    };

    reader.onerror = reject;

    reader.readAsDataURL(file);
  });

const PoweredByMarkdownHelperText = () => (
  <p className="text-xs text-neutral-500">
    ⚡️ Powered by{" "}
    <a
      href="https://www.markdownguide.org/cheat-sheet/"
      target="_blank"
      rel="noopener noreferrer"
      className="underline"
    >
      Markdown
    </a>{" "}
    and{" "}
    <a
      href="https://mermaid.js.org/"
      target="_blank"
      rel="noopener noreferrer"
      className="underline"
    >
      Mermaid.js
    </a>
  </p>
);

export const InsightManualForm = () => {
  const [previewImageSrc, setPreviewImageSrc] = useState<string | null>(null);

  const navigate = useNavigate();

  const createInsightMutation = useCreateInsightManuallyMutation();

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      accept: {
        "image/*": [".jpg", ".jpeg", ".png", ".gif"],
      },
      maxFiles: 1,
      maxSize: 2 * 1024 * 1024, // 2MB
      onDropRejected: () => {
        toast.error(
          "Uploaded file is not supported or exceeds the maximum file size"
        );
      },
      onDropAccepted: (files) =>
        imageFileToBase64(files[0]).then((base64) => {
          setPreviewImageSrc(base64);
        }),
    });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const [imageFile] = acceptedFiles;
    const title = formData.get("title") as string;
    const summary = formData.get("summary") as string;
    const transcription = formData.get("transcription") as string;

    createInsightMutation.mutate(
      {
        image: imageFile ? await imageFileToBase64(imageFile) : undefined,
        source_type: "manual",
        title,
        summary,
        transcription,
      },
      {
        onSuccess: (data) => {
          navigate(`/insight/${data.id}`);
        },
      }
    );
  };

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle>Manual Insight Creation</CardTitle>
        <CardDescription>
          Fill out the form to create an insight manually.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div
              {...getRootProps()}
              className={cn(
                "border border-dashed rounded-md aspect-[2] cursor-pointer",
                isDragActive ? "border-neutral-300" : "border-neutral-600"
              )}
            >
              <input {...getInputProps()} />
              {previewImageSrc ? (
                <img
                  src={previewImageSrc}
                  className="object-cover w-full h-full rounded-md"
                />
              ) : (
                <div className="px-6 py-12 flex items-center justify-center w-full h-full">
                  <Image className="text-neutral-300 size-10" strokeWidth={1} />
                </div>
              )}
            </div>
            <p className="text-xs text-center text-neutral-500">
              Supported formats: .jpg, .jpeg, .png, .gif. | Max file size: 1MB.
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              type="text"
              placeholder="Joe Rogan Experience #1470 - Elon Musk"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="summary">Summary</Label>
            <Textarea
              id="summary"
              name="summary"
              placeholder="In this conversation, Musk provided updates on his personal life, including the birth of his son, X Æ A-12. He elaborated on his decision to sell his houses and reduce material possessions, expressing a desire to focus on larger goals like colonizing Mars. The discussion also covered advancements in Neuralink with Musk suggesting potential human trials within a year and highlighting the technology’s potential to address neurological conditions..."
              required
              className="min-h-[120px]"
            />
            <PoweredByMarkdownHelperText />
          </div>
          <div className="space-y-2">
            <Label htmlFor="transcript">Transcription</Label>
            <Textarea
              id="transcription"
              name="transcription"
              placeholder="- So, Elon, you’re selling all your houses? What’s the reason behind that?&#10;- Yeah, I’ve decided to sell almost all my physical possessions. I just… I don’t want to be weighed down by material things. It’s distracting. I want to focus on Mars and sustainable energy solutions—things that actually matter for the future of humanity. Owning a bunch of stuff feels like a liability.&#10;- That’s wild. Most people dream of owning mansions, and you’re out here saying, “I don’t need it.” What do your friends or family think about that?"
              className="min-h-[150px]"
            />
            <PoweredByMarkdownHelperText />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={createInsightMutation.isPending}>
            Create insight
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};
