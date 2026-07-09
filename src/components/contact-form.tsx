"use client";

import * as React from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";
import { submitMessage, type ContactState } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const initialState: ContactState = { ok: false };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      size="lg"
      disabled={pending}
      className="bg-gradient-brand text-white"
    >
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitMessage, initialState);
  const formRef = React.useRef<HTMLFormElement>(null);

  React.useEffect(() => {
    if (state.ok) {
      toast.success("Message sent! I'll get back to you soon.");
      formRef.current?.reset();
    } else if (state.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="mt-6 flex flex-col gap-4">
      <Input name="name" placeholder="Your name" required aria-label="Name" />
      <Input
        name="email"
        type="email"
        placeholder="your@email.com"
        required
        aria-label="Email"
      />
      <Textarea
        name="message"
        placeholder="Your message..."
        rows={5}
        required
        aria-label="Message"
      />
      <SubmitButton />
    </form>
  );
}
