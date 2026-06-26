import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PORR OLA GmbH",
  description:
    "Planung und Errichtung von Oberleitungsanlagen – zuverlässig, zertifiziert, zukunftsorientiert.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
