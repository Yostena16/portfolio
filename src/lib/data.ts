import { supabase } from "@/lib/supabase";

// ---------- Types (match the Supabase schema) ----------
export type Profile = {
  id: number;
  name: string;
  role: string;
  tagline: string | null;
  bio: string | null;
  photo_url: string | null;
  resume_url: string | null;
  location: string | null;
  email: string | null;
  education: string | null;
};

export type Skill = {
  id: number;
  name: string;
  category: string;
  sort_order: number;
};

export type Project = {
  id: number;
  title: string;
  description: string | null;
  tech: string[];
  image_url: string | null;
  live_url: string | null;
  repo_url: string | null;
  featured: boolean;
  sort_order: number;
};

export type Social = {
  id: number;
  platform: string;
  url: string;
  sort_order: number;
};

export type Stat = {
  id: number;
  label: string;
  value: string;
  sort_order: number;
};

// ---------- Fetchers (run on the server) ----------
export async function getProfile(): Promise<Profile | null> {
  const { data, error } = await supabase
    .from("profile")
    .select("*")
    .eq("id", 1)
    .single();

  if (error) {
    console.error("getProfile error:", error.message);
    return null;
  }
  return data;
}

export async function getSkills(): Promise<Skill[]> {
  const { data, error } = await supabase
    .from("skills")
    .select("*")
    .order("category")
    .order("sort_order");

  if (error) {
    console.error("getSkills error:", error.message);
    return [];
  }
  return data ?? [];
}

export async function getProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("sort_order");

  if (error) {
    console.error("getProjects error:", error.message);
    return [];
  }
  return data ?? [];
}

export async function getSocials(): Promise<Social[]> {
  const { data, error } = await supabase
    .from("socials")
    .select("*")
    .order("sort_order");

  if (error) {
    console.error("getSocials error:", error.message);
    return [];
  }
  return data ?? [];
}

export async function getStats(): Promise<Stat[]> {
  const { data, error } = await supabase
    .from("stats")
    .select("*")
    .order("sort_order");

  if (error) {
    console.error("getStats error:", error.message);
    return [];
  }
  return data ?? [];
}
