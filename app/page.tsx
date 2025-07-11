// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 text-center">
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Build a Job-Winning Resume with AI
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Generate professional resumes tailored to your dream job in seconds.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/generate/resume"
            className="rounded-full bg-black px-6 py-3 text-white font-semibold hover:bg-gray-800"
          >
            Get Started
          </Link>
          <Link
            href="/dashboard"
            className="rounded-full border border-gray-300 px-6 py-3 text-gray-800 hover:bg-gray-100"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
