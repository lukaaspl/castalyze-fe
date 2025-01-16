"use client";

import { format } from "date-fns";
import {
  ArrowDown,
  ArrowUp,
  Link,
  MoreHorizontal,
  Pencil,
  Star,
  Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Insight } from "@/types/api";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";
import { useDeleteInsightMutation } from "@/hooks/use-delete-insight-mutation";

const copyLink = () => {
  navigator.clipboard.writeText(
    window.location.origin.concat(window.location.pathname)
  );
};

interface NavActionsProps {
  insight: Insight;
}

export const NavActions: React.FC<NavActionsProps> = ({ insight }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isDeleteConfirmationDialogOpen, setIsDeleteConfirmationDialogOpen] =
    useState(false);

  const navigate = useNavigate();

  const deleteInsightMutation = useDeleteInsightMutation();

  const menuSections = [
    [
      {
        label: "Copy Link",
        icon: Link,
        onClick: () => {
          copyLink();
          toast.success("Link copied to clipboard");
        },
      },
      {
        label: "Edit",
        icon: Pencil,
        onClick: () => {
          navigate(`/insights/${insight.id}/edit`);
        },
      },
      {
        label: "Delete",
        icon: Trash2,
        onClick: () => {
          setIsDeleteConfirmationDialogOpen(true);
        },
      },
    ],
    [
      {
        label: "Import",
        icon: ArrowUp,
        onClick: () => {
          navigate("/pricing");
        },
      },
      {
        label: "Export",
        icon: ArrowDown,
        onClick: () => {
          navigate("/pricing");
        },
      },
    ],
  ];

  const handleDeleteInsight = () => {
    deleteInsightMutation.mutate(insight.id, {
      onSuccess: () => {
        navigate("/");
      },
    });
  };

  return (
    <>
      <div className="flex items-center gap-2 text-sm">
        <div className="hidden font-medium text-neutral-500 md:inline-block dark:text-neutral-400">
          Last edited on {format(new Date(insight.updated_at), "MMM dd")}
        </div>
        <Button variant="ghost" size="icon" className="h-7 w-7">
          <Star />
        </Button>
        <Popover open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 data-[state=open]:bg-neutral-100 dark:data-[state=open]:bg-neutral-800"
            >
              <MoreHorizontal />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-56 overflow-hidden rounded-lg p-0"
            align="end"
          >
            <Sidebar collapsible="none" className="bg-transparent">
              <SidebarContent>
                {menuSections.map((section, index) => (
                  <SidebarGroup
                    key={index}
                    className="border-b last:border-none"
                  >
                    <SidebarGroupContent className="gap-0">
                      <SidebarMenu>
                        {section.map((item, index) => (
                          <SidebarMenuItem key={index}>
                            <SidebarMenuButton
                              onClick={() => {
                                item.onClick();
                                setIsMenuOpen(false);
                              }}
                            >
                              <item.icon /> <span>{item.label}</span>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>
                ))}
              </SidebarContent>
            </Sidebar>
          </PopoverContent>
        </Popover>
      </div>
      <AlertDialog
        open={isDeleteConfirmationDialogOpen}
        onOpenChange={setIsDeleteConfirmationDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              insight.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteInsight}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
