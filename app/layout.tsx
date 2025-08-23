// app/layout.tsx
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";

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
      <html lang="en">
        <body>
            <Navbar />
            {children}
            <Toaster position="top-right" />
            <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
