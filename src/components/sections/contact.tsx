import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Instagram,
  Globe,
  MapPin,
  Clock,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import type { Profile, Social } from "@/lib/data";

function iconFor(platform: string): LucideIcon {
  const p = platform.toLowerCase();
  if (p.includes("github")) return Github;
  if (p.includes("linkedin")) return Linkedin;
  if (p.includes("instagram")) return Instagram;
  if (p.includes("twitter") || p === "x") return Twitter;
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
    <section id="contact" className="mx-auto max-w-5xl px-4 pb-24 pt-8 sm:px-6">
      <Reveal>
        <h2 className="text-center font-heading text-4xl font-bold tracking-tight sm:text-5xl">
          Contact <span className="text-gradient">Me</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-center text-muted-foreground">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <Card className="mt-12 grid overflow-hidden p-0 md:grid-cols-2">
          {/* Left: info panel */}
          <div className="bg-gradient-brand p-8 text-white sm:p-10">
            <h3 className="font-heading text-2xl font-bold">Get in Touch</h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/90">
              Feel free to reach out for collaborations, opportunities, or any
              questions — I&apos;ll get back to you as soon as I can.
            </p>

            <div className="mt-8 flex flex-col gap-4 text-sm">
              {profile?.email && (
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-white/15">
                    <Mail className="size-[18px]" />
                  </span>
                  {profile.email}
                </div>
              )}
              {profile?.location && (
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-white/15">
                    <MapPin className="size-[18px]" />
                  </span>
                  {profile.location}
                </div>
              )}
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-white/15">
                  <Clock className="size-[18px]" />
                </span>
                Available for opportunities
              </div>
            </div>

            {socials.length > 0 && (
              <div className="mt-8 flex gap-2.5">
                {socials.map((s) => {
                  const Icon = iconFor(s.platform);
                  return (
                    <a
                      key={s.id}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.platform}
                      className="grid size-10 place-items-center rounded-xl bg-white/15 text-white transition-all hover:-translate-y-0.5 hover:bg-white/30"
                    >
                      <Icon className="size-5" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right: form */}
          <div className="p-8 sm:p-10">
            <ContactForm />
          </div>
        </Card>
      </Reveal>
    </section>
  );
}
