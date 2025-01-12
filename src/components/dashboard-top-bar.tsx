import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { FC, ReactNode } from "react";

interface DashboardTopBarProps {
  pageName: string;
  endSlot?: ReactNode;
}

export const DashboardTopBar: FC<DashboardTopBarProps> = ({
  pageName,
  endSlot,
}) => {
  return (
    <header className="flex h-14 shrink-0 items-center gap-2">
      <div className="flex flex-1 items-center gap-2 px-3">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage className="line-clamp-1">
                {pageName}
                {/* Project Management & Task Tracking (Insight {id}) */}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      {endSlot && <div className="ml-auto px-3">{endSlot}</div>}
    </header>
  );
};
