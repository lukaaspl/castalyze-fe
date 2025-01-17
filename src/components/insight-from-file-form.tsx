import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCreateInsightFromFile } from "@/hooks/use-create-insight-from-file-mutation";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { FullScreenLoader } from "./ui/full-screen-loader";

export const InsightFromFileForm = () => {
  const createInsightFromFileMutation = useCreateInsightFromFile();

  const navigate = useNavigate();

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "audio/*": [".mp3", ".wav"],
      "video/*": [".mp4", ".mov"],
    },
    maxFiles: 1,
    maxSize: 70 * 1024 * 1024, // 60MB,
    onDropRejected: () => {
      toast.error(
        "Uploaded file is not supported or exceeds the maximum file size"
      );
    },
    onDropAccepted: ([file]) => {
      createInsightFromFileMutation.mutate(file, {
        onSuccess: (data) => {
          navigate(`/insight/${data.id}`);
        },
      });
    },
  });

  return (
    <>
      <Card className="animate-fade-in">
        <CardHeader>
          <CardTitle>From audio/video file</CardTitle>
          <CardDescription>
            Upload an audio or video file to create an insight from.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div
            {...getRootProps()}
            className={`border border-dashed px-6 py-12 rounded-md cursor-pointer ${
              isDragActive ? "border-neutral-300" : "border-neutral-600"
            }`}
          >
            <input {...getInputProps({ required: true })} />
            <p className="text-center text-neutral-300">
              Drag 'n' drop a file here, or click to select it
            </p>
          </div>
          <p className="text-xs text-center text-neutral-500">
            Supported formats: .mp3, .wav, .mp4, .mov. | Max file size: 50MB.
          </p>
        </CardContent>
      </Card>
      <FullScreenLoader isVisible={createInsightFromFileMutation.isPending} />
    </>
  );
};
