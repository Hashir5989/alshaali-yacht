"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { newsArticles } from "@/data/news";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export default function NewsDetailPage({ params }) {
  const article = newsArticles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="flex-grow pt-28 pb-24 bg-[#12352D] text-[#F5F0E5]">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-[#C6A66B] mb-8 hover:text-[#E2C896] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Journal</span>
          </Link>

          <div className="flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-[#C6A66B] mb-3">
            <span>{article.category}</span>
            <span>·</span>
            <span>{article.date}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-[#F5F0E5] font-light mb-8 leading-[1.1]">
            {article.title}
          </h1>

          <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden mb-10 border border-white/10">
            <Image src={article.image} alt={article.title} fill className="object-cover" />
          </div>

          <div className="space-y-6 text-base sm:text-lg text-[#F5F0E5]/85 font-light leading-relaxed">
            <p className="text-xl sm:text-2xl text-[#C6A66B] font-serif leading-relaxed">
              {article.excerpt}
            </p>
            <p>{article.content}</p>
            <p>
              As the premier yachtbuilder of the United Arab Emirates, Al Shaali Marine remains committed to setting international standards for composite naval architecture, vacuum resin lamination, and bespoke luxury appointments.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
