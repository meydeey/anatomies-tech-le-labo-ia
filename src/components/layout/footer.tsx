import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border py-6 px-4">
      <div className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
        <p>
          Créé par{" "}
          <Link
            href="https://www.youtube.com/@meydeey"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            Meydeey
          </Link>
        </p>
        <p>Le Labo IA — ELITE</p>
      </div>
    </footer>
  );
}
