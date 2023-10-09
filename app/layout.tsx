import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavBar } from "@/components/Navbar";
import Image from "next/image";
import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";
import { AvatarIcon } from "@radix-ui/react-icons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nasa",
  description: "By Bravo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <title>Nasa - Bravo</title>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container relative p-3">
            <div className="flex justify-between display:inline-block">
              <Link href="/">
                <Image
                  src="/vercel.svg"
                  alt="Vercel Logo"
                  width={100}
                  height={24}
                  className="h-auto"
                />
              </Link>
              <div className="flex items-center justify-end text-sm">
                <div className="float: right">
                  <NavBar className="[&>a:first-child]:text-primary" />
                </div>
                <div className="mr:auto">
                  <ModeToggle />
                </div>
              </div>
            </div>
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
