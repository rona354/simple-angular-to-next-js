import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

/**
 * 💡 ANGULAR TO NEXT.JS MAPPING:
 * 
 * NEXT/FONT (Optimization):
 * In Angular, you might add <link> tags in 'src/index.html' or @import in 'src/styles.css'.
 * Next.js automatically optimizes fonts, hosting them locally to prevent CLS (Cumulative Layout Shift).
 */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono-mono",
  subsets: ["latin"],
});

/**
 * 💡 ANGULAR TO NEXT.JS MAPPING:
 * 
 * METADATA (SEO):
 * In Angular, you use the 'Title' and 'Meta' services in your components.
 * In Next.js, exporting a 'metadata' object is the standard way to handle SEO.
 * This is "Static Metadata". Next.js also supports "Dynamic Metadata" for products/blog posts.
 */
export const metadata: Metadata = {
  title: "Angular to Next.js | Migration Guide",
  description: "A tutorial project for Angular experts learning Next.js 15+",
};

/**
 * 💡 ANGULAR TO NEXT.JS MAPPING:
 * 
 * THE ROOT LAYOUT (The "Shell"):
 * In Angular, this is the combination of 'src/index.html' and 'app.component.html'.
 * 
 * RootLayout is the topmost component. It is the ONLY place where you 
 * define the <html> and <body> tags.
 * 
 * @param children 
 * This is the equivalent of <router-outlet></router-outlet> in Angular.
 * When you navigate, Next.js swaps the content of {children} while keeping 
 * the rest of the layout (like headers or footers) persistent.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 
          If you wanted a Global Navbar (like in app.component.html), 
          you would place it here, ABOVE the {children}.
        */}
        {children}
      </body>
    </html>
  );
}
