import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Reveal } from "@/components/reveal";
import type { Skill } from "@/lib/data";

export function Skills({ skills }: { skills: Skill[] }) {
  // Preserve category order as they appear in the data
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <Reveal>
        <p className="font-mono text-sm font-medium text-primary">// stack</p>
        <h2 className="mt-2 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
          Skills &amp; <span className="text-gradient">Tools</span>
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Technologies I work with day to day.
        </p>
      </Reveal>

      {categories.length > 0 && (
        <Reveal delay={0.1}>
          <Tabs defaultValue={categories[0]} className="mt-10">
            <TabsList className="flex-wrap">
              {categories.map((c) => (
                <TabsTrigger key={c} value={c}>
                  {c}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((c) => (
              <TabsContent key={c} value={c}>
                <Card>
                  <CardContent className="flex flex-wrap gap-3">
                    {skills
                      .filter((s) => s.category === c)
                      .map((s) => (
                        <Badge
                          key={s.id}
                          variant="secondary"
                          className="rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
                        >
                          {s.name}
                        </Badge>
                      ))}
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </Reveal>
      )}
    </section>
  );
}
