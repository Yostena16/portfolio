import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiSupabase,
  SiMysql,
  SiExpress,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { Code2 } from "lucide-react";
import { Reveal } from "@/components/reveal";
import type { Skill } from "@/lib/data";

// Map a skill name to its brand logo + color
const iconMap: Record<string, { Icon: IconType; color: string }> = {
  html: { Icon: FaHtml5, color: "#E34F26" },
  css: { Icon: FaCss3Alt, color: "#1572B6" },
  javascript: { Icon: SiJavascript, color: "#F7DF1E" },
  typescript: { Icon: SiTypescript, color: "#3178C6" },
  python: { Icon: FaPython, color: "#3776AB" },
  react: { Icon: FaReact, color: "#61DAFB" },
  "next.js": { Icon: SiNextdotjs, color: "currentColor" },
  "tailwind css": { Icon: SiTailwindcss, color: "#06B6D4" },
  "node.js": { Icon: FaNodeJs, color: "#5FA04E" },
  "express.js": { Icon: SiExpress, color: "currentColor" },
  supabase: { Icon: SiSupabase, color: "#3ECF8E" },
  mysql: { Icon: SiMysql, color: "#4479A1" },
  git: { Icon: FaGitAlt, color: "#F05032" },
};

export function Skills({ skills }: { skills: Skill[] }) {
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section
      id="skills"
      className="relative mx-auto max-w-6xl overflow-hidden px-4 py-24 sm:px-6"
    >
      {/* Ambient background — matches the hero's glow + grid (both themes) */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-glow" />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_40%,#000,transparent_80%)]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "54px 54px",
        }}
      />

      <Reveal>
        <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
          Skills &amp; <span className="text-gradient">Tools</span>
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Technologies I work with day to day.
        </p>
      </Reveal>

      <div className="mt-12 space-y-12">
        {categories.map((category) => (
          <div key={category}>
            <Reveal>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {category}
              </h3>
            </Reveal>
            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {skills
                .filter((s) => s.category === category)
                .map((s, i) => {
                  const entry = iconMap[s.name.toLowerCase()];
                  const Icon = entry?.Icon ?? Code2;
                  return (
                    <Reveal key={s.id} delay={i * 0.05}>
                      <div className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                        <Icon
                          className="size-10 transition-transform duration-300 group-hover:scale-110"
                          style={{ color: entry?.color ?? "currentColor" }}
                        />
                        <span className="text-center text-sm font-medium">
                          {s.name}
                        </span>
                      </div>
                    </Reveal>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
