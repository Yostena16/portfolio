import {
  getProfile,
  getSkills,
  getProjects,
  getSocials,
  getStats,
} from "@/lib/data";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

// Always fetch fresh content from Supabase on each request (no static caching),
// so edits in the database appear on the live site without a redeploy.
export const dynamic = "force-dynamic";

export default async function Home() {
  const [profile, skills, projects, socials, stats] = await Promise.all([
    getProfile(),
    getSkills(),
    getProjects(),
    getSocials(),
    getStats(),
  ]);

  return (
    <div id="top" className="bg-glow">
      <Hero profile={profile} socials={socials} />
      <About profile={profile} stats={stats} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact profile={profile} socials={socials} />
    </div>
  );
}
