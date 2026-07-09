import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProfile, getSkills, getProjects, getSocials } from "@/lib/data";
import { ContactForm } from "@/components/contact-form";

export default async function Home() {
  const [profile, skills, projects, socials] = await Promise.all([
    getProfile(),
    getSkills(),
    getProjects(),
    getSocials(),
  ]);

  return (
    <div id="top" className="bg-glow">
      {/* Hero */}
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
        {profile?.location && (
          <Badge variant="secondary" className="mb-6 rounded-full px-4 py-1.5">
            ✦ {profile.location}
          </Badge>
        )}

        <h1 className="font-heading text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          Hi, I&apos;m{" "}
          <span className="text-gradient">{profile?.name ?? "Your Name"}</span>
        </h1>

        <p className="mt-4 font-heading text-xl text-muted-foreground">
          {profile?.role}
        </p>

        <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          {profile?.tagline}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className={buttonVariants({
              size: "lg",
              className: "bg-gradient-brand text-white",
            })}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className={buttonVariants({ size: "lg", variant: "outline" })}
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <h2 className="font-heading text-3xl font-bold">About</h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {profile?.bio}
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="font-heading text-3xl font-bold">Skills</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {skills.map((s) => (
            <Badge key={s.id} variant="outline" className="px-3 py-1.5 text-sm">
              {s.name}
            </Badge>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="font-heading text-3xl font-bold">Projects</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <Card key={p.id}>
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
          ))}
        </div>
      </section>

      {/* Contact (form wired up next step) */}
      <section id="contact" className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <h2 className="font-heading text-3xl font-bold">Contact</h2>
        <p className="mt-4 text-muted-foreground">
          Have a question or want to work together? Send me a message, or reach
          me directly.
        </p>

        {/* Direct email + social links */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {profile?.email && (
            <a
              href={`mailto:${profile.email}`}
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              {profile.email}
            </a>
          )}
          {socials.map((s) => (
            <a
              key={s.id}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              {s.platform}
            </a>
          ))}
        </div>

        <ContactForm />
      </section>
    </div>
  );
}
