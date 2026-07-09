import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import type { Project } from "@/lib/data";

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <Reveal>
        <h2 className="font-heading text-3xl font-bold">Projects</h2>
      </Reveal>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.1}>
            <Card className="h-full transition-transform hover:-translate-y-1">
              <CardHeader>
                <CardTitle>{p.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Badge key={t} variant="secondary">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
