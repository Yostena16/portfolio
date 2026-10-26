# Yostena Girma — Portfolio

My personal portfolio website — a modern single-page app built to showcase my projects, skills, and background as a full-stack developer.

🔗 **Live:** https://portfolio-nu-cyan-87.vercel.app

## ✨ Features

- **Local content** — profile, skills, projects, socials, and stats live in `src/lib/data.ts` (no external database required)
- **Working contact form** — messages are validated and emailed to Gmail via FormSubmit
- **Bold, animated UI** — split hero with a typewriter effect, floating gradient blobs, and scroll-reveal animations (Framer Motion)
- **Dark theme** — fixed dark UI built on shadcn/ui
- **Fully responsive** and optimized images via Cloudinary + `next/image`

## 🛠️ Tech Stack

| Layer | Tech |
|-------|------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4, [shadcn/ui](https://ui.shadcn.com/) |
| Animation | Framer Motion |
| Contact email | [FormSubmit](https://formsubmit.co/) |
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

# 3. Set up environment variables (optional — only needed for the contact form)

# 4. Run the dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Contact form

The contact form emails submissions to `yostenagirma19@gmail.com` through FormSubmit. On first use, FormSubmit sends a one-time activation email — open Gmail and click **Activate** once, then future messages arrive normally.

## 📝 Updating content

Edit `src/lib/data.ts` to change your profile, skills, projects, social links, and stats.

## 📁 Project Structure

```
src/
├── app/            # App Router pages, layout, server actions
├── components/
│   ├── sections/   # Hero, About, Skills, Projects, Contact
│   └── ui/         # shadcn/ui components
└── lib/            # Portfolio content + typed accessors
```

## 📫 Contact

- **Email:** yostenagirma19@gmail.com
- **LinkedIn:** [Yostena Girma](https://www.linkedin.com/in/yostena-girma-7baa27299)
- **GitHub:** [@Yostena16](https://github.com/Yostena16)

---

Built with Next.js & ☕ by Yostena Girma.
