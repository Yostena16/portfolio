import type { Profile } from "@/lib/data";

export function About({ profile }: { profile: Profile | null }) {
  return (
    <section id="about" className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h2 className="font-heading text-3xl font-bold">About</h2>
      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
        {profile?.bio}
      </p>
    </section>
  );
}
