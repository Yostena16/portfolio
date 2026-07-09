import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const siteUrl = "https://portfolio-nu-cyan-87.vercel.app";
const ogImage =
  "https://res.cloudinary.com/wbce8kq9/image/upload/w_1200,h_630,c_fill,g_auto/v1783611350/photo-web_ohv1wp.jpg";
const description =
  "Portfolio of Yostena Girma, a full-stack developer building modern web apps with Next.js, TypeScript, and Supabase.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Yostena Girma — Full-Stack Developer",
  description,
  openGraph: {
    title: "Yostena Girma — Full-Stack Developer",
    description,
    url: siteUrl,
    siteName: "Yostena Girma",
    type: "website",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Yostena Girma" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yostena Girma — Full-Stack Developer",
    description,
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster richColors position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
