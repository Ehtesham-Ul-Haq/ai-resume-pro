// app/page.tsx
import Link from "next/link";
import { FaBolt, FaMagic, FaRegFileAlt } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 min-h-screen">
      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 animate-fade-in-down">
            Craft Your Job-Winning Resume with AI
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 animate-fade-in-up">
            Our smart AI platform helps you generate professional, tailored
            resumes in minutes, not hours. Stand out from the crowd and land
            your next great opportunity.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/generate/resume"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition-transform shadow-lg overflow-hidden"
            >
              <span className="absolute inset-0 bg-white opacity-10 blur-md transition-opacity group-hover:opacity-20"></span>
              Get Started for Free
            </Link>
            <Link
              href="#features"
              className="px-8 py-4 text-gray-800 dark:text-gray-200 font-semibold rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="bg-white dark:bg-gray-800 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl shadow-lg transform transition-transform hover:scale-105">
              <FaMagic className="text-4xl text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">AI-Powered Content</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our AI analyzes your job description and skills to generate
                powerful, keyword-optimized bullet points.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl shadow-lg transform transition-transform hover:scale-105">
              <FaRegFileAlt className="text-4xl text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Professional Templates</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Choose from a library of stunning, recruiter-approved templates
                designed for all industries.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl shadow-lg transform transition-transform hover:scale-105">
              <FaBolt className="text-4xl text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Quick & Easy</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Create a complete resume in minutes, with a clean and intuitive
                user interface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Trusted by Job Seekers
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl italic text-gray-600 dark:text-gray-300">
              &quot;I used AI Resume Pro and got an interview for my dream job
              within a week! The AI-generated content was a game-changer.&quot;
            </p>
            <p className="mt-4 font-semibold text-gray-800 dark:text-gray-200">
              - Jane Doe, Senior Marketing Manager
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 dark:bg-purple-700 py-16 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Land Your Dream Job?
          </h2>
          <p className="text-lg mb-8">
            Stop worrying about your resume and start getting interviews.
            It&apos;s free to try!
          </p>
          <Link
            href="/generate/resume"
            className="group relative inline-flex items-center justify-center px-12 py-5 text-lg text-purple-600 font-bold rounded-full bg-white bg-opacity-20 backdrop-blur-md hover:scale-105 transition-transform"
          >
            Create Your Free Resume Now
          </Link>
        </div>
      </section>
    </div>
  );
}
