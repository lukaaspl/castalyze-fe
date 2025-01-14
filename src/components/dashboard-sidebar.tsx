import {
  BadgePlus,
  ChevronDown,
  CircleUserRound,
  Home,
  LogOut,
  Podcast,
  Search,
  Sparkles,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavLink } from "react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useInsightsPreviewQuery } from "@/hooks/use-insights-preview-query";

// const insights = [
//   {
//     name: "Project Management & Task Tracking",
//     id: "project-management",
//     emoji: "📊",
//   },
//   {
//     name: "Family Recipe Collection & Meal Planning",
//     id: "project-management",
//     emoji: "🍳",
//   },
//   {
//     name: "Fitness Tracker & Workout Routines",
//     id: "project-management",
//     emoji: "💪",
//   },
//   {
//     name: "Book Notes & Reading List",
//     id: "project-management",
//     emoji: "📚",
//   },
//   {
//     name: "Sustainable Gardening Tips & Plant Care",
//     id: "project-management",
//     emoji: "🌱",
//   },
//   {
//     name: "Language Learning Progress & Resources",
//     id: "project-management",
//     emoji: "🗣️",
//   },
//   {
//     name: "Home Renovation Ideas & Budget Tracker",
//     id: "project-management",
//     emoji: "🏠",
//   },
//   {
//     name: "Personal Finance & Investment Portfolio",
//     id: "project-management",
//     emoji: "💰",
//   },
//   {
//     name: "Movie & TV Show Watchlist with Reviews",
//     id: "project-management",
//     emoji: "🎬",
//   },
//   {
//     name: "Daily Habit Tracker & Goal Setting",
//     id: "project-management",
//     emoji: "✅",
//   },
// ];

const navMainItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
    isActive: true,
  },
  {
    title: "Search",
    url: "/search",
    icon: Search,
  },
  {
    title: "New Insight",
    url: "/insight/new",
    icon: BadgePlus,
  },
  {
    title: "Become a Pro",
    url: "/pricing",
    icon: Sparkles,
  },
];

export const DashboardSidebar = () => {
  const { data: insights = [] } = useInsightsPreviewQuery();

  return (
    <Sidebar className="border-r-0">
      <SidebarHeader>
        {/* USER MENU */}
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="w-fit px-1.5">
                  <div className="flex aspect-square size-5 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
                    <CircleUserRound className="size-4" />
                  </div>
                  <span className="truncate font-semibold">Lukasz Roman</span>
                  <ChevronDown className="opacity-50" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-44 rounded-lg"
                align="start"
                side="bottom"
                sideOffset={4}
              >
                <DropdownMenuItem className="gap-2 p-2">
                  <div className="flex size-6 items-center justify-center rounded-md border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
                    <LogOut className="size-4" />
                  </div>
                  <div className="font-medium text-neutral-500 dark:text-neutral-400">
                    Log out
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
        {/* MAIN MENU */}
        <SidebarMenu>
          {navMainItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <NavLink to={item.url}>
                {({ isActive }) => (
                  <SidebarMenuButton isActive={isActive}>
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                )}
              </NavLink>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarHeader>
      {/* INSIGHTS */}
      <SidebarContent>
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel>Your insights</SidebarGroupLabel>
          <SidebarMenu>
            {insights.map((insight) => (
              <SidebarMenuItem key={insight.id}>
                <NavLink to={`/insight/${insight.id}`} title={insight.title}>
                  {({ isActive }) => (
                    <SidebarMenuButton isActive={isActive}>
                      <span>{insight.title}</span>
                    </SidebarMenuButton>
                  )}
                </NavLink>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      {/* FOOTER */}
      <SidebarFooter>
        <div className="flex gap-2 font-medium p-4 items-center">
          <Podcast className="size-5" />
          <span className="text-base tracking-wide">Castalyze</span>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};
