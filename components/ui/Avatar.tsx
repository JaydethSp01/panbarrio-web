import { cn } from "@/lib/cn";

/** Avatar con iniciales en tinte de marca. Para tablas/listas premium. */
export function Avatar({ name, className }: { name: string; className?: string }) {
  const initials = (name || "?")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w.charAt(0).toUpperCase())
    .join("");
  return (
    <span
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-sm font-semibold text-brand shadow-md",
        "sm:h-12 sm:w-12",
        "hover:bg-brand/20 focus:outline-none focus:ring-2 focus:ring-brand/50",
        className
      )}
      role="img"
      aria-label={`Avatar de ${name}`}
    >
      {initials}
    </span>
  );
}

export default Avatar;