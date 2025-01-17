import { FC } from "react";
import { Spinner } from "./spinner/spinner";
import { cn } from "@/lib/utils";

interface FullScreenLoaderProps {
  isVisible: boolean;
}

export const FullScreenLoader: FC<FullScreenLoaderProps> = ({ isVisible }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 flex justify-center items-center bg-neutral-900 bg-opacity-80 transition-opacity",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <Spinner />
    </div>
  );
};
