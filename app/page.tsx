import { ModeToggle } from "@/components/ModeToggle";
import { NavBar } from "@/components/Navbar";
import Overview from "@/components/Overview";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import User from "@/components/user";
import Project from "@/components/user";
//import { Metadata } from "next"
import Image from "next/image";
import Link from "next/link";

// import { CalendarDateRangePicker } from "@/app/examples/dashboard/components/date-range-picker"
// import { MainNav } from "@/app/examples/dashboard/components/main-nav"
// import { Overview } from "@/app/examples/dashboard/components/overview"
// import { RecentSales } from "@/app/examples/dashboard/components/recent-sales"
// import { Search } from "@/app/examples/dashboard/components/search"
// import TeamSwitcher from "@/app/examples/dashboard/components/team-switcher"
// import { UserNav } from "@/app/examples/dashboard/components/user-nav"

export default function DashboardPage() {
  return (
    <>
      <div className="flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="project">
                Project
              </TabsTrigger>
              <TabsTrigger value="user">
                User
              </TabsTrigger>
              <TabsTrigger value="authentication">Authentication</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <Overview />
            </TabsContent>
            <TabsContent value="project" className="space-y-4">
              <Overview />
            </TabsContent>
            <TabsContent value="user" className="space-y-4">
              <Overview />
            </TabsContent>
            <TabsContent value="authentication" className="space-y-4">
              <Overview />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
