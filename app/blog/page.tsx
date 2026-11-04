"use client";

import React from 'react';
import { BlogFeatured } from '@/components/blog/BlogFeatured';
import { BlogGridCard } from '@/components/blog/BlogGridCard';
import { BlogPostCard } from '@/app/types/blog';

export default function BlogArchivePage() {
  
  // 1. Featured Top Main Article
  const featuredArticle: BlogPostCard = {
    id: "f-1",
    title: "A Weekend in Maitama: Where to Eat, Walk and Unwind",
    category: "Abuja Guide",
    description: "Nestled in Abuja's leafy diplomatic quarter, Maitama balances calm residential avenues with world-class dining, contemporary art spaces, and tranquil park walks. Here is our curated guide to spending the perfect boutique weekend in Maitama, with Aurum on Missouri as your serene sanctuary.",
    image: "/img/AoM-21.webp",
    date: "12 Oct 2026",
    readTime: "4 min to read",
    href: "/blog/weekend-in-maitama"
  };

  // 2. Abuja Curated Articles
  const archiveArticles: BlogPostCard[] = [
    {
      id: "arc-1",
      title: "Planning a Business Trip to Abuja: A Practical Guide",
      category: "Business Travel",
      image: "/img/CONFERENCEROOM-2.webp",
      readTime: "5 min to read",
      href: "/blog/planning-business-trip-abuja"
    },
    {
      id: "arc-2",
      title: "The Team Behind Your Stay: Customer Service Week at Aurum",
      category: "Inside Aurum",
      image: "/img/AoM-15.webp",
      readTime: "4 min to read",
      href: "/blog/customer-service-week-at-aurum"
    }
  ];

  return (
    <main className="min-h-screen bg-white w-full flex flex-col overflow-x-hidden relative">

      {/* 1. Upper Dynamic Editorial Hero Banner */}
      <BlogFeatured article={featuredArticle} />

      {/* 2. Structured Layout Archives Grid Section */}
      <section className="w-full bg-[#ffffff] py-12 md:py-16 flex flex-col items-center">
        <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {archiveArticles.map((post) => (
            <BlogGridCard key={post.id} post={post} />
          ))}
        </div>
      </section>

    </main>
  );
}
