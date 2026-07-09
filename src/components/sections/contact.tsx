import { Github, Linkedin, Mail, Twitter, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import type { Profile, Social } from "@/lib/data";

// Pick an icon from the platform name
function iconFor(platform: string): LucideIcon {
  const p = platform.toLowerCase();
  if (p.includes("github")) return Github;
  if (p.includes("linkedin")) return Linkedin;
  if (p.includes("twitter") || p.includes("x")) return Twitter;
  if (p.includes("mail") || p.includes("email")) return Mail;
  return Globe;
}

export function Contact({
  profile,
  socials,
}: {
  profile: Profile | null;
  socials: Social[];
}) {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <Reveal>
        <h2 className="text-center font-heading text-4xl font-bold tracking-tight sm:text-5xl">
          Let&apos;s <span className="text-gradient">Connect</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
          Have a question or want to work together? Drop me a message, or reach
          me directly.
        </p>
      </Reveal>

      {/* Social + email buttons */}
      <Reveal delay={0.1}>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {profile?.email && (
            <a
              href={`mailto:${profile.email}`}
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              <Mail className="size-4" /> {profile.email}
            </a>
          )}
          {socials.map((s) => {
            const Icon = iconFor(s.platform);
            return (
              <a
                key={s.id}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "outline", size: "sm" })}
              >
                <Icon className="size-4" /> {s.platform}
              </a>
            );
          })}
        </div>
      </Reveal>

      {/* Form card */}
      <Reveal delay={0.2}>
        <Card className="mt-8">
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </Reveal>
    </section>
  );
}
