// app/layout.tsx
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
        <Navbar />
      <html lang="en">
        <body>
          {children}
          <Toaster position="top-right" />
        </body>
      </html>
    </ClerkProvider>
  );
}
