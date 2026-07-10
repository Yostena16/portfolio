"use server";

import { Resend } from "resend";
import { supabase } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = "yostenagirma19@gmail.com";

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

  // --- Send an email notification (best-effort; message is already saved) ---
  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `You received a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });
  } catch (mailError) {
    // Don't fail the submission if the email step has a problem — it's saved in the DB.
    console.error("Resend email error:", mailError);
  }

  return { ok: true };
}
