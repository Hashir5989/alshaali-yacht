"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock, Newspaper, ChevronRight } from "lucide-react";
import { newsArticles } from "@/data/news";

export default function JournalHomeSection() {
  const articles = newsArticles.slice(0, 3);

  return (
    <section id="latest-news" className="py-24 sm:py-32 bg-white border-b border-[#D9E2EC] relative overflow-hidden text-[#102A43]">
      {/* Subtle architectural background grid line */}
      <div className="absolute inset-0 bg-[radial-gradient(#176B9A_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#176B9A]" />
              <span className="text-[11px] font-sans tracking-[0.35em] uppercase text-[#176B9A] font-bold">
                The Logbook · Latest News & Dispatches
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#082B49] font-light tracking-tight">
              News & Shipyard Dispatches
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#486581] max-w-2xl font-light leading-relaxed">
              Discover our newest vessel launches, shipyard expansions in Ajman, international yacht show appearances, and engineering milestones.
            </p>
          </div>

          <Link
            href="/news"
            className="text-[11px] tracking-[0.25em] uppercase text-[#082B49] hover:text-[#176B9A] inline-flex items-center gap-2 transition-colors self-start md:self-end font-bold group pb-2 border-b-2 border-transparent hover:border-[#176B9A]"
          >
            <span>View All Dispatches</span>
            <ArrowUpRight className="w-4 h-4 text-[#176B9A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* 3-Column Editorial News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {articles.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="bg-white border border-[#D9E2EC] hover:border-[#176B9A]/60 flex flex-col justify-between group transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                {/* News Image with Category Tag */}
                <Link href={`/news/${article.slug}`} className="relative aspect-[16/10] w-full block overflow-hidden bg-[#082B49]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#082B49]/70 via-[#082B49]/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 text-[9px] tracking-[0.25em] uppercase font-sans px-3 py-1 bg-white/95 backdrop-blur-sm text-[#082B49] font-bold shadow-md border border-[#D9E2EC]">
                    {article.category}
                  </span>
                </Link>

                {/* Content Box */}
                <div className="p-6 sm:p-7">
                  {/* Metadata Row */}
                  <div className="flex items-center gap-3 text-[11px] text-[#829AB1] uppercase tracking-wider mb-3 font-sans">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#176B9A]" />
                      {article.date}
                    </span>
                    <span>·</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#829AB1]" />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <Link href={`/news/${article.slug}`}>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#082B49] group-hover:text-[#176B9A] transition-colors font-normal leading-snug mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                  </Link>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-[#486581] leading-relaxed line-clamp-3 font-light">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer / CTA */}
              <div className="p-6 sm:p-7 pt-0 border-t border-[#F0F4F8] mt-4 flex items-center justify-between">
                <Link
                  href={`/news/${article.slug}`}
                  className="text-[11px] tracking-[0.25em] uppercase text-[#082B49] group-hover:text-[#176B9A] inline-flex items-center gap-2 transition-colors font-bold"
                >
                  <span>Read Full Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#176B9A] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
                <ChevronRight className="w-4 h-4 text-[#BCCCDC] group-hover:text-[#176B9A] transition-colors" />
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
