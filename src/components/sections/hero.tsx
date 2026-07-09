"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Typewriter } from "@/components/typewriter";
import type { Profile } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero({ profile }: { profile: Profile | null }) {
  const phrases = [
    profile?.role ?? "Developer",
    "Next.js Developer",
    "Problem Solver",
  ];

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-4 sm:px-6">
      {/* Animated background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute left-[10%] top-[15%] h-72 w-72 rounded-full bg-chart-1/30 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[12%] top-[25%] h-80 w-80 rounded-full bg-chart-2/30 blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[10%] left-[40%] h-64 w-64 rounded-full bg-chart-3/25 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex max-w-4xl flex-col items-center text-center"
      >
        {profile?.location && (
          <motion.div variants={item}>
            <Badge variant="secondary" className="mb-6 rounded-full px-4 py-1.5">
              ✦ {profile.location}
            </Badge>
          </motion.div>
        )}

        <motion.h1
          variants={item}
          className="font-heading text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
        >
          Hi, I&apos;m{" "}
          <span className="text-gradient">{profile?.name ?? "Your Name"}</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 font-heading text-2xl font-medium text-muted-foreground sm:text-3xl"
        >
          I&apos;m a{" "}
          <Typewriter phrases={phrases} className="text-foreground" />
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          {profile?.tagline}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
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
        </motion.div>
      </motion.div>
    </section>
  );
}
