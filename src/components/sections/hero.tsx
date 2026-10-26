"use client";

import Image from "next/image"; //Optimized image component for the picture
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Twitter,
  Globe,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";  //icon type
import { buttonVariants } from "@/components/ui/button";
import { Typewriter } from "@/components/typewriter";
import type { Profile, Social } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } }, //animate children one after the other with 0.13 apart
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function iconFor(platform: string): LucideIcon {
  const p = platform.toLowerCase();
  if (p.includes("github")) return Github;
  if (p.includes("linkedin")) return Linkedin;
  if (p.includes("twitter") || p === "x") return Twitter;
  if (p.includes("mail") || p.includes("email")) return Mail;
  return Globe;
}

export function Hero({
  profile,
  socials,
}: {
  profile: Profile | null;
  socials: Social[];
}) {
  const phrases = [
    "Frontend Developer",
    "Backend Developer",
    "Software Tester",
    "Software Engineering Student",
  ];
  const initials = (profile?.name ?? "You")
    .split(" ")
    .map((w) => w[0]) // Takes the first letter of each word (Y O G)
    .slice(0, 2)      // Only take the first 2 letters
    .join("");       // Makes it Y O

  return (
    <section className="relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute left-[-6%] top-16 h-96 w-96 rounded-full bg-chart-1/30 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[-4%] top-24 h-96 w-96 rounded-full bg-chart-2/30 blur-3xl"
          animate={{ x: [0, -46, 0], y: [0, 34, 0], scale: [1, 1.16, 1] }}
          transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      {/* Faint grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_30%,#000,transparent_80%)]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "54px 54px",
        }}
      />

      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left: intro */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center lg:text-left"
        >
          {profile?.location && (
            <motion.div
              variants={item}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground"
            >
              <span className="size-2 rounded-full bg-green-500 shadow-[0_0_0_3px_rgba(34,197,94,0.2)]" />
              Available for opportunities · {profile.location}
            </motion.div>
          )}

          <motion.h1
            variants={item}
            className="mt-6 font-heading text-6xl font-bold tracking-tight sm:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient">{profile?.name ?? "Your Name"}</span>
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-4 font-heading text-3xl font-bold sm:text-4xl"
          >
            I&apos;m a{" "}
            <Typewriter phrases={phrases} className="text-gradient" />
          </motion.div>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl lg:mx-0"
          >
            {profile?.tagline ??
              "I build fast, accessible web applications end to end — from database to pixel-perfect interface."}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start"
          >
            <a
              href="#projects"
              className={buttonVariants({
                size: "lg",
                className: "bg-gradient-brand text-white",
              })}
            >
              View Projects <ArrowRight className="size-4" />
            </a>
            {profile?.resume_url ? (
              <a
                href={profile.resume_url}
                download="Yostena_Girma_Asefa_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ size: "lg", variant: "outline" })}
              >
                Download CV <Download className="size-4" />
              </a>
            ) : (
              <a
                href="#contact"
                className={buttonVariants({ size: "lg", variant: "outline" })}
              >
                Get in Touch
              </a>
            )}
          </motion.div>

          {socials.length > 0 && (
            <motion.div
              variants={item}
              className="mt-8 flex justify-center gap-2.5 lg:justify-start"
            >
              {socials.map((s) => {
                const Icon = iconFor(s.platform);
                return (
                  <a
                    key={s.id}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.platform}
                    className="grid size-10 place-items-center rounded-xl border border-border bg-secondary/40 text-muted-foreground transition-all hover:-translate-y-0.5 hover:bg-secondary hover:text-foreground"
                  >
                    <Icon className="size-5" />
                  </a>
                );
              })}
            </motion.div>
          )}
        </motion.div>

        {/* Right: portrait */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto grid place-items-center"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="relative aspect-[4/5] w-[min(360px,82vw)] rounded-3xl bg-gradient-brand p-[3px] shadow-2xl shadow-primary/30"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[calc(1.5rem-3px)] bg-card">
              {profile?.photo_url ? (
                <Image
                  src={profile.photo_url}
                  alt={profile.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 82vw, 360px"
                  className="object-cover"
                />
              ) : (
                <div className="grid h-full w-full place-items-center bg-gradient-brand">
                  <span className="font-heading text-6xl font-bold text-white/90">
                    {initials}
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
