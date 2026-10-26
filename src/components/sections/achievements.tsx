import { ArrowUpRight, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import type { Achievement } from "@/lib/data";

export function Achievements({
  achievements,
}: {
  achievements: Achievement[];
}) {
  if (achievements.length === 0) return null;

  return (
    <section id="achievements" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
          Achievements
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Highlights I&apos;m proud of from competitions and team builds.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {achievements.map((a, i) => (
          <Reveal key={a.id} delay={i * 0.1}>
            <Card className="group h-full overflow-hidden pt-0 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden bg-white p-8 dark:bg-secondary/40">
                {a.image_url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={a.image_url}
                    alt={a.title}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <Trophy className="size-16 text-primary" />
                )}
              </div>

              <CardContent>
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground">
                  <Trophy className="size-3.5 text-primary" />
                  Achievement
                </div>
                <h3 className="mt-4 font-heading text-xl font-bold">{a.title}</h3>
                {a.subtitle && (
                  <p className="mt-1 text-sm font-medium text-primary">
                    {a.subtitle}
                  </p>
                )}
                {a.description && (
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {a.description}
                  </p>
                )}
                {a.link_url && (
                  <a
                    href={a.link_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({
                      size: "sm",
                      className: "mt-5",
                    })}
                  >
                    View project <ArrowUpRight className="size-4" />
                  </a>
                )}
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
