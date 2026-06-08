export const dynamic = "force-dynamic";
import "./globals.css";
import { ProtectedShell } from "@/components/ui/ProtectedShell";

const NAV = [{ href: "/", label: "Inicio" }, { href: "/caja", label: "Caja" }, { href: "/producto", label: "Productos" }, { href: "/usuario", label: "Usuarios" }, { href: "/venta", label: "Ventas" }, { href: "/usuarios", label: "Usuarios" }];

export const metadata = { title: "Pan del Barrio", description: "Generado con ScrumDev AI" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <ProtectedShell items={NAV} title="Pan del Barrio">{children}</ProtectedShell>
      </body>
    </html>
  );
}
