"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function LayoutMainWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isAdminRoute = pathname.startsWith("/admin");

  return <main className={cn(!isAdminRoute && "py-20")}>{children}</main>;
}
