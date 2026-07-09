import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

// TODO: replace with your real links
const socials = [
  { href: "https://github.com/YOUR_USERNAME", label: "GitHub", Icon: Github },
  { href: "https://linkedin.com/in/YOUR_HANDLE", label: "LinkedIn", Icon: Linkedin },
  { href: "mailto:you@example.com", label: "Email", Icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <p className="text-sm text-muted-foreground">
          © {/* TODO: your name */}Your Name. Built with Next.js.
        </p>
        <div className="flex items-center gap-2">
          {socials.map(({ href, label, Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon className="size-5" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
