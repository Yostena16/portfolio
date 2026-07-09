"use client";

import * as React from "react";

type TypewriterProps = {
  /** Phrases to cycle through, typed one after another */
  phrases: string[];
  /** ms per character while typing */
  typingSpeed?: number;
  /** ms per character while deleting */
  deletingSpeed?: number;
  /** ms to pause once a phrase is fully typed */
  pauseTime?: number;
  className?: string;
};

export function Typewriter({
  phrases,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 1600,
  className,
}: TypewriterProps) {
  const [text, setText] = React.useState("");
  const [phraseIndex, setPhraseIndex] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const current = phrases[phraseIndex % phrases.length];

    // Fully typed → pause, then start deleting
    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pauseTime);
      return () => clearTimeout(t);
    }

    // Fully deleted → move to next phrase
    if (deleting && text === "") {
      setDeleting(false);
      setPhraseIndex((i) => i + 1);
      return;
    }

    const t = setTimeout(
      () => {
        setText((prev) =>
          deleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1),
        );
      },
      deleting ? deletingSpeed : typingSpeed,
    );
    return () => clearTimeout(t);
  }, [text, deleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={className}>
      {text}
      <span className="ml-0.5 inline-block w-0.5 animate-pulse bg-current align-middle">
        &nbsp;
      </span>
    </span>
  );
}
