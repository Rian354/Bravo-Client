"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { ScrollBar } from "./ui/scroll-area";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Project",
    href: "/project",
  },
  {
    name: "Tag",
    href: "/tag",
  },
  {
    name: "User",
    href: "/user",
  },
  {
    name: "Chat",
    href: "https://rian.fyi",
    target: "_blank",
  },
];

interface NavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function NavBar({ className, ...props }: NavProps) {
  const pathname = usePathname();
  return (
    <div className="relative">
      <ScrollArea className="max-w-[600px] lg:max-w-none">
        <div className={cn("mb-4 flex items-center", className)} {...props}>
          {navItems.map((navItem) => (
            <Link
              href={navItem.href}
              key={navItem.href}
              target={navItem.name === "Chat" ? "_blank" : ""}
              className={cn(
                "flex items-center px-4",
                pathname?.startsWith(navItem.href)
                  ? "font-bold text-primary"
                  : "font-medium text-muted-foreground"
              )}
            >
              {navItem.name}
            </Link>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </div>
  );
}
