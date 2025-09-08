import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@/styles/index.scss';
import { AntdRegistry } from '@ant-design/nextjs-registry';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frog X | React + Tailwind Component Library",
  description:
    "Frog X is a modern React + Tailwind UI component library with gradient hover effects and responsive layouts. Perfect for landing pages, design systems, and developer documentation.",
  keywords: [
    "Frog X UI",
    "React UI components",
    "Tailwind CSS components",
    "Gradient hover effects",
    "Responsive design system",
    "Feature grid layout",
    "Lucide React icons",
    "Open source UI library",
  ],
  authors: [
    { name: "Radwan Ahmed", url: "https://radwan503.github.io" }
  ],
  creator: "Radwan Ahmed",
  publisher: "Frog X",
  openGraph: {
    title: "Frog X | Modern React + Tailwind Component Library",
    description:
      "Discover Frog X – a beautiful React + Tailwind UI component set with gradient hover effects and responsive grids for modern web applications.",
    url: "https://radwan503.github.io/FrogX/",
    siteName: "Frog X",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frog X | React + Tailwind Components",
    description:
      "A responsive React + Tailwind UI component library with gradient hover effects and clean design.",
    images: ["https://radwan503.github.io/FrogX/"],
    creator: "@yourtwitterhandle",
  },
  metadataBase: new URL("https://radwan503.github.io/FrogX/"),
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
