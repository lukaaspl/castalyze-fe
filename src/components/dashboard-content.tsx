import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface DashboardContentProps {
  children: ReactNode;
  className?: string;
}

export const DashboardContent: FC<DashboardContentProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex flex-1 flex-col gap-4 px-4 py-10 animate-fade-in",
        className
      )}
    >
      {children}
    </div>
  );
};
