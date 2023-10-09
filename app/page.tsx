
import Overview from "@/components/Overview";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Metadata } from "next";
import Image from "next/image";

export default function DashboardPage() {
  return (
    <>
      <div className="flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">NASA HACKATHON - 2023</h2>
          </div>
          {/* <div className="flex items-center justify-between space-y-2">
            <Image
                  src="/vercel.svg"
                  alt="Vercel Logo"
                  width={100}
                  height={24}
                  className="h-auto"
                />
          </div> */}
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              {/* <TabsTrigger value="project">Project</TabsTrigger>
              <TabsTrigger value="user">User</TabsTrigger>
              <TabsTrigger value="authentication">Authentication</TabsTrigger> */}
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <Overview />
            </TabsContent>
            {/* <TabsContent value="project" className="space-y-4">
              <Overview />
            </TabsContent>
            <TabsContent value="user" className="space-y-4">
              <Overview />
            </TabsContent>
            <TabsContent value="authentication" className="space-y-4">
              <Overview />
            </TabsContent> */}
          </Tabs>
        </div>
      </div>
    </>
  );
}
