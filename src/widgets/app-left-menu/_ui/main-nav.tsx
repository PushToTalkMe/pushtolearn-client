import Link from "next/link";

export function MainNav() {
  return (
    <nav>
      <Link
        className="transition-colors hover:text-foreground/80 text-foreground/60"
        href="/app/courses"
      >
        Курсы
      </Link>
      <Link
        className="transition-colors hover:text-foreground/80 text-foreground/60"
        href="/app/profile"
      >
        Профиль
      </Link>
    </nav>
  );
}
