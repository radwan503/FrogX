import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@/styles/index.scss'
import { AntdRegistry } from '@ant-design/nextjs-registry';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Frog X | React + Tailwind Component",
  description:
    "A modern, responsive React + Tailwind UI component with gradient hover effects, perfect for showcasing features in landing pages, design systems, and developer documentation.",
  keywords: [
    "React UI components",
    "Tailwind CSS tiles",
    "Feature grid layout",
    "Responsive design system",
    "Lucide React icons",
    "Gradient hover UI",
  ],
  authors: [{ name: "Radwan Ahmed" }],
  openGraph: {
    title: "Frog X LAnding Page",
    description:
      "Beautiful responsive React + Tailwind component with gradient hover effects and feature grid design.",
    url: "https://yourdomain.com",
    siteName: "Frog X LAnding Page",
    images: [
      {
        url: "https://yourdomain.com/preview.png",
        width: 1200,
        height: 630,
        alt: "Frog X LAnding Page Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AntdRegistry>
          {children}
        </AntdRegistry>
      </body>
    </html>
  )
}
