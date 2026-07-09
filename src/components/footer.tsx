import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Instagram,
  Globe,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { getProfile, getSocials } from "@/lib/data";

function iconFor(platform: string): LucideIcon {
  const p = platform.toLowerCase();
  if (p.includes("github")) return Github;
  if (p.includes("linkedin")) return Linkedin;
  if (p.includes("instagram")) return Instagram;
  if (p.includes("twitter") || p === "x") return Twitter;
  if (p.includes("mail") || p.includes("email")) return Mail;
  return Globe;
}

export async function Footer() {
  const [profile, socials] = await Promise.all([getProfile(), getSocials()]);
  const year = new Date().getFullYear();
  const name = profile?.name ?? "Yostena Girma";

  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 sm:px-6">
        {socials.length > 0 && (
          <div className="flex gap-2.5">
            {socials.map((s) => {
              const Icon = iconFor(s.platform);
              return (
                <a
                  key={s.id}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.platform}
                  className="grid size-10 place-items-center rounded-xl border border-border bg-secondary/40 text-muted-foreground transition-all hover:-translate-y-0.5 hover:bg-secondary hover:text-foreground"
                >
                  <Icon className="size-5" />
                </a>
              );
            })}
          </div>
        )}

        <p className="text-center text-sm text-muted-foreground">
          Built with Next.js &amp; ☕ by{" "}
          <span className="font-medium text-foreground">{name}</span> · ©{" "}
          {year}
        </p>
      </div>
    </footer>
  );
}
