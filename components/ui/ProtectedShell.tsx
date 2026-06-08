"use client";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/components/ui/Sidebar";
import { AppShell } from "@/components/ui/AppShell";
import { AuthGate } from "@/components/ui/AuthGate";

export function ProtectedShell({
  items,
  title = "Panel",
  children,
}: {
  items: NavItem[];
  title?: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  if (pathname === "/login") {
    return (
      <AuthGate>
        <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4 sm:p-8">
          <div className="w-full max-w-md rounded-xl shadow-lg bg-white p-6">
            {children}
          </div>
        </div>
      </AuthGate>
    );
  }
  return (
    <AuthGate>
      <AppShell items={items} title={title}>
        <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-gray-50">{children}</div>
      </AppShell>
    </AuthGate>
  );
}

export default ProtectedShell;