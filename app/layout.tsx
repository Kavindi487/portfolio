import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kavindi Vidusari - Backend Engineer",
  description:
    "Computer Science undergraduate specializing in Java backend development, microservices architecture, Docker deployment, and IoT systems. Building reliable, scalable backend services.",
  keywords: [
    "Backend Engineer",
    "Java Developer",
    "Spring Boot",
    "Microservices",
    "Docker",
    "REST APIs",
    "Cloud Deployment",
    "IoT",
    "Sri Lanka",
  ],
  authors: [{ name: "Kavindi Vidusari" }],
  openGraph: {
    title: "Kavindi Vidusari - Backend Engineer",
    description:
      "Backend-focused Computer Science undergraduate building scalable microservices and IoT systems",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}