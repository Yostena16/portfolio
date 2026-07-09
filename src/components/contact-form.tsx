"use client";

import * as React from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Send } from "lucide-react";
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
      className="mt-1 w-full bg-gradient-brand text-white"
    >
      {pending ? "Sending..." : "Send Message"}
      {!pending && <Send className="size-4" />}
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
    <form ref={formRef} action={formAction} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium text-muted-foreground">
          Name
        </label>
        <Input id="name" name="name" placeholder="Your name" required />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
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
        <label htmlFor="message" className="text-sm font-medium text-muted-foreground">
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
      <SubmitButton />
    </form>
  );
}
