"use client";

import * as React from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CONTACT_EMAIL = "yostenagirma19@gmail.com";

export function ContactForm() {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [pending, startTransition] = React.useTransition();

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const honey = String(formData.get("_honey") ?? "").trim();

    if (honey) return;
    if (name.length < 2) {
      toast.error("Please enter your name.");
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (message.length < 10) {
      toast.error("Message must be at least 10 characters.");
      return;
    }

    startTransition(async () => {
      try {
        const response = await fetch(
          `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              message,
              _replyto: email,
              _subject: `New portfolio message from ${name}`,
              _template: "table",
              _captcha: "false",
            }),
          },
        );

        const result = (await response.json().catch(() => null)) as {
          success?: string | boolean;
          message?: string;
        } | null;

        const success =
          result?.success === true ||
          result?.success === "true" ||
          response.ok;

        if (!success) {
          toast.error(
            result?.message ||
              "Could not send your message. Please try again or email me directly.",
          );
          return;
        }

        const msg = String(result?.message ?? "").toLowerCase();
        if (msg.includes("confirm") || msg.includes("activate")) {
          toast.message(
            "Check your Gmail for a FormSubmit confirmation email and click Activate — then submit again.",
          );
          return;
        }

        toast.success("Message sent! I'll get back to you soon.");
        formRef.current?.reset();
      } catch {
        toast.error(
          "Could not send your message. Please try again or email me directly.",
        );
      }
    });
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className="flex flex-col gap-4"
    >
      {/* Honeypot field for bots */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-sm font-medium text-muted-foreground"
        >
          Name
        </label>
        <Input id="name" name="name" placeholder="Your name" required />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-sm font-medium text-muted-foreground"
        >
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your@email.com"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-muted-foreground"
        >
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Any comment or message..."
          rows={5}
          required
        />
      </div>
      <Button
        type="submit"
        size="lg"
        disabled={pending}
        className="mt-1 w-full bg-gradient-brand text-white"
      >
        {pending ? "Sending..." : "Send Message"}
        {!pending && <Send className="size-4" />}
      </Button>
    </form>
  );
}
