# Yostena Girma — Portfolio

My personal portfolio website — a full-stack, database-driven single-page app built to showcase my projects, skills, and background as a full-stack developer.

🔗 **Live:** https://portfolio-nu-cyan-87.vercel.app

## ✨ Features

- **Backend-driven content** — profile, skills, projects, socials, and stats are all served from a Supabase (Postgres) database, editable without touching code
- **Working contact form** — messages are validated and saved to the database via a Next.js Server Action
- **Bold, animated UI** — split hero with a typewriter effect, floating gradient blobs, and scroll-reveal animations (Framer Motion)
- **Light & dark themes** — with a toggle, built on shadcn/ui
- **Fully responsive** and optimized images via Cloudinary + `next/image`

## 🛠️ Tech Stack

| Layer | Tech |
|-------|------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4, [shadcn/ui](https://ui.shadcn.com/) |
| Animation | Framer Motion |
| Backend / DB | [Supabase](https://supabase.com/) (Postgres + Row Level Security) |
| Images | [Cloudinary](https://cloudinary.com/) |
| Icons | lucide-react, react-icons |
| Hosting | [Vercel](https://vercel.com/) |

## 🚀 Getting Started

```bash
# 1. Clone
git clone https://github.com/Yostena16/portfolio.git
cd portfolio

# 2. Install dependencies
pnpm install

# 3. Set up environment variables (see below)

# 4. Run the dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

Create a `.env.local` file with your Supabase project credentials:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## 🗄️ Database

Content is stored in Supabase across these tables: `profile`, `skills`, `projects`, `socials`, `stats`, and `messages`. Public read access is enabled on content tables; the `messages` table only allows inserts (contact submissions), so submissions stay private.

## 📁 Project Structure

```
src/
├── app/            # App Router pages, layout, server actions
├── components/
│   ├── sections/   # Hero, About, Skills, Projects, Contact
│   └── ui/         # shadcn/ui components
└── lib/            # Supabase client + typed data fetchers
```

## 📫 Contact

- **Email:** yostenagirma19@gmail.com
- **LinkedIn:** [Yostena Girma](https://www.linkedin.com/in/yostena-girma-7baa27299)
- **GitHub:** [@Yostena16](https://github.com/Yostena16)

---

Built with Next.js & ☕ by Yostena Girma.
