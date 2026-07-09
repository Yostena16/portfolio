"use server";

import { supabase } from "@/lib/supabase";

export type ContactState = {
  ok: boolean;
  error?: string;
};

export async function submitMessage(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  // --- Validation ---
  if (name.length < 2) return { ok: false, error: "Please enter your name." };
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
    return { ok: false, error: "Please enter a valid email address." };
  if (message.length < 10)
    return { ok: false, error: "Message must be at least 10 characters." };

  // --- Insert into Supabase ---
  const { error } = await supabase
    .from("messages")
    .insert({ name, email, message });

  if (error) {
    console.error("submitMessage error:", error.message);
    return { ok: false, error: "Something went wrong. Please try again." };
  }

  return { ok: true };
}
