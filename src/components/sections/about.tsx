import { MapPin, Mail, Briefcase } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Reveal } from "@/components/reveal";
import type { Profile } from "@/lib/data";

export function About({ profile }: { profile: Profile | null }) {
  const initials = (profile?.name ?? "You")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <Reveal>
        <p className="font-mono text-sm font-medium text-primary">// about</p>
        <h2 className="mt-2 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
          About <span className="text-gradient">Me</span>
        </h2>
      </Reveal>

      <div className="mt-10 grid items-start gap-8 md:grid-cols-[auto_1fr]">
        {/* Photo */}
        <Reveal direction="right">
          <Avatar className="size-40 rounded-2xl ring-2 ring-primary/30 ring-offset-4 ring-offset-background">
            {profile?.photo_url && (
              <AvatarImage src={profile.photo_url} alt={profile.name} />
            )}
            <AvatarFallback className="rounded-2xl bg-gradient-brand font-heading text-4xl font-bold text-white">
              {initials}
            </AvatarFallback>
          </Avatar>
        </Reveal>

        {/* Bio + quick facts */}
        <Reveal delay={0.1}>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {profile?.bio}
          </p>

          <Card className="mt-6">
            <CardContent className="flex flex-col gap-4 sm:flex-row sm:items-center">
              {profile?.role && (
                <div className="flex items-center gap-2 text-sm">
                  <Briefcase className="size-4 text-primary" />
                  <span>{profile.role}</span>
                </div>
              )}
              {profile?.location && (
                <>
                  <Separator
                    orientation="vertical"
                    className="hidden h-4 sm:block"
                  />
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="size-4 text-primary" />
                    <span>{profile.location}</span>
                  </div>
                </>
              )}
              {profile?.email && (
                <>
                  <Separator
                    orientation="vertical"
                    className="hidden h-4 sm:block"
                  />
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="size-4 text-primary" />
                    <span className="truncate">{profile.email}</span>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
