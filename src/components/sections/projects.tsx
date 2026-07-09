import { ArrowUpRight, Github, Users, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import type { Project } from "@/lib/data";

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          A selection of things I&apos;ve built. Each one taught me something
          new.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.1}>
            <Card className="group h-full overflow-hidden pt-0 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              {/* Cover image (or gradient fallback) */}
              <div className="relative aspect-video w-full overflow-hidden bg-gradient-brand">
                {p.image_url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.image_url}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="font-heading text-5xl font-bold text-white/90">
                      {p.title.charAt(0)}
                    </span>
                  </div>
                )}
                {p.featured && (
                  <Badge className="absolute right-3 top-3 bg-background/80 text-foreground backdrop-blur">
                    ★ Featured
                  </Badge>
                )}
                {p.kind && (
                  <Badge className="absolute left-3 top-3 gap-1 bg-background/80 text-foreground backdrop-blur">
                    {p.kind.toLowerCase() === "team" ? (
                      <Users className="size-3" />
                    ) : (
                      <User className="size-3" />
                    )}
                    {p.kind}
                  </Badge>
                )}
              </div>

              <CardContent>
                <h3 className="font-heading text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="font-mono text-xs"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="mt-auto gap-2">
                {p.live_url && (
                  <a
                    href={p.live_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({ size: "sm" })}
                  >
                    Live Demo <ArrowUpRight className="size-4" />
                  </a>
                )}
                {p.repo_url && (
                  <a
                    href={p.repo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({
                      size: "sm",
                      variant: "outline",
                    })}
                  >
                    <Github className="size-4" /> Code
                  </a>
                )}
              </CardFooter>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
