/* eslint-disable @next/next/no-img-element */
 
"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Calendar,
  Tag,
  ArrowLeftCircle,
  Newspaper,
} from "lucide-react";

import posts from '@/constants/blogs.json'

type BlogListProps = {
  onPostSelect: (id: string) => void;
};

type BlogCardProps = {
  post: {
    id: string;
    title: string;
    image: string;
    date: string;
    tag: string;
    content: React.ReactNode;
  };
  onPostSelect: (id: string) => void;
  delay: string;
};

type BlogPostData = {
  id: string;
  title: string;
  image: string;
  date: string;
  tag: string;
  content: React.ReactNode;
};

type BlogPostProps = {
  post: BlogPostData;
  onBack: () => void;
};

// Main component to manage blog list and single post view
export default function BlogPage() {
  // State to hold the ID of the currently selected blog post
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  // Conditional rendering to switch between blog list and a single post
  if (selectedPostId) {
    const post = posts.find((p) => p.id === selectedPostId);
    if (!post) {
      // Handle case where post is not found (e.g., URL has bad ID)
      return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black text-gray-50 flex items-center justify-center p-8">
          <p className="text-2xl text-red-400">Blog post not found.</p>
          <button
            onClick={() => setSelectedPostId(null)}
            className="ml-4 text-blue-400 hover:text-blue-200"
          >
            Go back to blog list
          </button>
        </div>
      );
    }
    return <BlogPost post={post} onBack={() => setSelectedPostId(null)} />;
  }

  // Render blog list by default
  return <BlogList onPostSelect={setSelectedPostId} />;
}

// Blog List Component - displays all cards
const BlogList: React.FC<BlogListProps> = ({ onPostSelect }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black text-gray-50 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      {/* --- Dynamic Background Layers (Consistent Theme) --- */}
      <div className="absolute inset-0 z-0 opacity-15">
        <div className="absolute inset-0 bg-repeat bg-[size:400px_400px] bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22400%22%20height%3D%22400%22%20viewBox%3D%220%200%20400%20400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3Cpath%20id%3D%22gridPath%22%20d%3D%22M200%200L400%20100L400%20300L200%20400L0%20300L0%20100Z%22%2F%3E%3C%2Fdefs%3E%3Cg%20fill%3D%22none%22%20stroke-width%3D%220.5%22%3E%3Cuse%20xlink%3D%22%23gridPath%22%20stroke%3D%22%252338Bdf8%22%20opacity%3D%220.08%22%2F%3E%3Cuse%20xlink%3D%22%23gridPath%22%20transform%3D%22translate(200%2C0)%22%20stroke%3D%22%25238b5cf6%22%20opacity%3D%220.08%22%2F%3E%3Cuse%20xlink%3D%22%23gridPath%22%20transform%3D%22translate(0%2C200)%22%20stroke%3D%22%252338Bdf8%22%20opacity%3D%220.08%22%2F%3E%3Cuse%20xlink%3D%22%23gridPath%22%20transform%3D%22translate(200%2C200)%22%20stroke%3D%22%25238b5cf6%22%20opacity%3D%220.08%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] animate-complex-grid"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 animate-data-flow-one"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 via-transparent to-indigo-500/10 animate-data-flow-two"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-blue-600 dark:bg-purple-600 rounded-full mix-blend-screen opacity-10 blur-3xl animate-pulse-core"></div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
          <Newspaper className="w-96 h-96 text-blue-400 dark:text-purple-400 animate-spin-slow-reverse" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        {/* --- Hero Section: Blog Title --- */}
        <div className="text-center bg-gray-900 bg-opacity-70 backdrop-blur-lg p-8 md:p-12 rounded-3xl border border-blue-700 dark:border-purple-700 shadow-2xl animate-fade-in-slide-up">
          <Newspaper className="w-20 h-20 mx-auto text-blue-400 dark:text-purple-400 mb-6 animate-bounce-icon" />
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg mb-4 animate-typewriter-glow">
            AI Resume Pro Blog
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-slow">
            Stay ahead in your career with insights on resume writing, AI tools,
            and job market trends.
          </p>
        </div>

        {/* --- Blog Cards Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogCard
              key={post.id}
              post={post}
              onPostSelect={onPostSelect}
              delay={`${index * 0.15}s`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Blog Card Component
const BlogCard: React.FC<BlogCardProps> = ({ post, onPostSelect, delay }) => {
  return (
    <div
      onClick={() => onPostSelect(post.id)}
      className="bg-gray-800 rounded-3xl shadow-xl overflow-hidden cursor-pointer
                 transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl
                 group animate-fade-in-stagger"
      style={{ animationDelay: delay, animationFillMode: "backwards" }}
    >
      <div className="relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
        <div className="absolute top-4 right-4 bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
          {post.tag}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-blue-400 transition-colors duration-300">
          {post.title}
        </h3>
        <div className="flex items-center text-gray-400 text-sm space-x-4">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{post.date}</span>
          </span>
          <span className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>Read Post</span>
          </span>
        </div>
      </div>
    </div>
  );
};

// Single Blog Post Component
const BlogPost: React.FC<BlogPostProps> = ({ post, onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black text-gray-50 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      {/* --- Dynamic Background Layers (Consistent Theme) --- */}
      <div className="absolute inset-0 z-0 opacity-15">
        <div className="absolute inset-0 bg-repeat bg-[size:400px_400px] bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22400%22%20height%3D%22400%22%20viewBox%3D%220%200%20400%20400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3Cpath%20id%3D%22gridPath%22%20d%3D%22M200%200L400%20100L400%20300L200%20400L0%20300L0%20100Z%22%2F%3E%3C%2Fdefs%3E%3Cg%20fill%3D%22none%22%20stroke-width%3D%220.5%22%3E%3Cuse%20xlink%3D%22%23gridPath%22%20stroke%3D%22%252338Bdf8%22%20opacity%3D%220.08%22%2F%3E%3Cuse%20xlink%3D%22%23gridPath%22%20transform%3D%22translate(200%2C0)%22%20stroke%3D%22%22%238b5cf6%22%20opacity%3D%220.08%22%2F%3E%3Cuse%20xlink%3D%22%23gridPath%22%20transform%3D%22translate(0%2C200)%22%20stroke%3D%22%252338Bdf8%22%20opacity%3D%220.08%22%2F%3E%3Cuse%20xlink%3D%22%23gridPath%22%20transform%3D%22translate(200%2C200)%22%20stroke%3D%22%25238b5cf6%22%20opacity%3D%220.08%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] animate-complex-grid"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 animate-data-flow-one"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 via-transparent to-indigo-500/10 animate-data-flow-two"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-blue-600 dark:bg-purple-600 rounded-full mix-blend-screen opacity-10 blur-3xl animate-pulse-core"></div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
          <BookOpen className="w-96 h-96 text-blue-400 dark:text-purple-400 animate-spin-slow-reverse" />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto animate-fade-in-slide-up">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 mb-8 text-blue-400 hover:text-blue-200 transition-colors duration-300 transform hover:scale-[1.05]"
        >
          <ArrowLeftCircle className="w-6 h-6" />
          <span className="font-semibold text-lg">Back to All Posts</span>
        </button>

        {/* Blog Post Card */}
        <div className="bg-gray-900 bg-opacity-70 backdrop-blur-lg p-6 md:p-10 rounded-3xl border border-gray-700 shadow-2xl space-y-6">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg mb-2">
                {post.title}
              </h1>
              <div className="flex items-center text-gray-400 space-x-4">
                <span className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </span>
                <span className="flex items-center gap-2 text-sm">
                  <Tag className="w-4 h-4" />
                  <span>{post.tag}</span>
                </span>
              </div>
            </div>
          </div>
          <div className="prose prose-lg prose-invert max-w-none text-gray-300">
            {post.content}
          </div>
        </div>
      </div>
    </div>
  );
};
