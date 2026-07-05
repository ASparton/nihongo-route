import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "航海図 — Programme de japonais",
  description:
    "Programme de japonais sur 12 semaines pour tenir une conversation simple au Japon, avec leçons interactives, audio et suivi des kanji.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
