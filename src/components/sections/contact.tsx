import { buttonVariants } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import type { Profile, Social } from "@/lib/data";

export function Contact({
  profile,
  socials,
}: {
  profile: Profile | null;
  socials: Social[];
}) {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <Reveal>
        <h2 className="font-heading text-3xl font-bold">Contact</h2>
        <p className="mt-4 text-muted-foreground">
          Have a question or want to work together? Send me a message, or reach
          me directly.
        </p>
      </Reveal>

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
  );
}
