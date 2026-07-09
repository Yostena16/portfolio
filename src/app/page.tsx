import { getProfile, getSkills, getProjects, getSocials } from "@/lib/data";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

export default async function Home() {
  const [profile, skills, projects, socials] = await Promise.all([
    getProfile(),
    getSkills(),
    getProjects(),
    getSocials(),
  ]);

  return (
    <div id="top" className="bg-glow">
      <Hero profile={profile} />
      <About profile={profile} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact profile={profile} socials={socials} />
    </div>
  );
}
