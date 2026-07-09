import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Profile } from "@/lib/data";

export function Hero({ profile }: { profile: Profile | null }) {
  return (
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
  );
}
