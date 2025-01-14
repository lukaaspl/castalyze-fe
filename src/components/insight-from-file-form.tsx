import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useDropzone } from "react-dropzone";

export const InsightFromFileForm = () => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "audio/*": [".mp3", ".wav"],
      "video/*": [".mp4", ".mov"],
    },
    maxFiles: 1,
    maxSize: 50 * 1024 * 1024, // 50MB
    onDrop: (acceptedFiles) => {
      // Handle file upload
      console.log(acceptedFiles);
    },
  });

  return (
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
          <input {...getInputProps()} />
          <p className="text-center text-neutral-300">
            Drag 'n' drop a file here, or click to select it
          </p>
        </div>
        <p className="text-xs text-center text-neutral-500">
          Supported formats: .mp3, .wav, .mp4, .mov. | Max file size: 50MB.
        </p>
      </CardContent>
    </Card>
  );
};
