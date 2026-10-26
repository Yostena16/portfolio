import {
  getProfile,
  getSkills,
  getProjects,
  getAchievements,
  getSocials,
  getStats,
} from "@/lib/data";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Achievements } from "@/components/sections/achievements";
import { Contact } from "@/components/sections/contact";

export default async function Home() {
  const [profile, skills, projects, achievements, socials, stats] =
    await Promise.all([
      getProfile(),
      getSkills(),
      getProjects(),
      getAchievements(),
      getSocials(),
      getStats(),
    ]);

  return (
    <div id="top" className="bg-glow">
      <Hero profile={profile} socials={socials} />
      <About profile={profile} stats={stats} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Achievements achievements={achievements} />
      <Contact profile={profile} socials={socials} />
    </div>
  );
}
