// app/layout.tsx
import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";

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
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
