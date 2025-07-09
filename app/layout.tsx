// app/layout.tsx
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Inknut_Antiqua } from "next/font/google";

const inknut = Inknut_Antiqua({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "AI Resume Pro",
  description: "Generate professional resumes with AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
        <Navbar />
      <html lang="en">
        <body className={inknut.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
