import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";
import type { Skill } from "@/lib/data";

export function Skills({ skills }: { skills: Skill[] }) {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <Reveal>
        <h2 className="font-heading text-3xl font-bold">Skills</h2>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-6 flex flex-wrap gap-2">
          {skills.map((s) => (
            <Badge key={s.id} variant="outline" className="px-3 py-1.5 text-sm">
              {s.name}
            </Badge>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
