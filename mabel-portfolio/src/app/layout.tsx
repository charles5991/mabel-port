import "@/styles/globals.css";
import { Metadata } from "next";
import NunitoFonts from "@/utils/fonts";
/** @dev initialize nunito font */
const nunito = NunitoFonts;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Mabel Ooi | Portfolio",
  description: "Senior Business Analyst",
  authors: {
    name: "Mabelspace",
  },
  icons: {
    icon: "/mabel.ico",
    shortcut: "/mabel.ico",
  },
};
