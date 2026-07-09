import {
  GraduationCap,
  MapPin,
  Code2,
  Rocket,
  CalendarDays,
  Wrench,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import type { Profile, Stat } from "@/lib/data";

function statIcon(label: string): LucideIcon {
  const l = label.toLowerCase();
  if (l.includes("project")) return Rocket;
  if (l.includes("year")) return CalendarDays;
  if (l.includes("tech")) return Wrench;
  return Sparkles;
}

export function About({
  profile,
  stats,
}: {
  profile: Profile | null;
  stats: Stat[];
}) {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
          About <span className="text-gradient">Me</span>
        </h2>
      </Reveal>

      <div className="mt-8 max-w-3xl">
        <Reveal delay={0.1}>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {profile?.bio}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {profile?.education && (
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm font-medium">
                <GraduationCap className="size-4 text-primary" />
                {profile.education}
              </span>
            )}
            {profile?.location && (
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm font-medium">
                <MapPin className="size-4 text-primary" />
                {profile.location}
              </span>
            )}
            {profile?.role && (
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm font-medium">
                <Code2 className="size-4 text-primary" />
                {profile.role}
              </span>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <a
            href="#contact"
            className={buttonVariants({
              className: "mt-8 bg-gradient-brand text-white",
            })}
          >
            Let&apos;s work together <ArrowRight className="size-4" />
          </a>
        </Reveal>
      </div>

      {/* Stats */}
      {stats.length > 0 && (
        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {stats.map((s, i) => {
            const Icon = statIcon(s.label);
            return (
              <Reveal key={s.id} delay={i * 0.1}>
                <Card className="transition-all hover:-translate-y-1 hover:border-primary/50">
                  <CardContent>
                    <Icon className="size-6 text-primary" />
                    <div className="mt-3 font-heading text-4xl font-bold text-gradient">
                      {s.value}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {s.label}
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      )}
    </section>
  );
}
