"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, BookOpen } from "lucide-react";
import { newsArticles } from "@/data/news";
import AnimatedTitle from "./AnimatedTitle";

export default function JournalHomeSection() {
  const articles = newsArticles.slice(0, 3);

  return (
    <section id="journal" className="py-24 sm:py-32 bg-white border-b border-[#D9E2EC] relative overflow-hidden text-[#102A43]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <AnimatedTitle
            tagline="The Logbook &nbsp;·&nbsp; Dispatches"
            title="Letters from the Yard."
            subtitle="Occasional notes on new designs, shipyard expansions, and royal commissions from Al Shaali Marine."
            dark={false}
          />

          <Link
            href="/news"
            className="text-[11px] tracking-[0.25em] uppercase text-[#082B49] hover:text-[#176B9A] inline-flex items-center gap-1.5 transition-colors self-start md:self-end font-bold group"
          >
            <span>Read All Dispatches</span>
            <ArrowUpRight className="w-4 h-4 text-[#176B9A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* 3-Column Editorial News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="bg-white border border-[#D9E2EC] hover:border-[#176B9A] rounded-none overflow-hidden flex flex-col justify-between group transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div>
                <Link href={`/news/${article.slug}`} className="relative aspect-[16/10] w-full block overflow-hidden bg-[#082B49]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#082B49]/50 via-transparent to-transparent opacity-60" />

                  <span className="absolute top-3 left-3 text-[9.5px] tracking-[0.2em] uppercase font-mono px-2.5 py-1 bg-white/95 text-[#082B49] rounded-none border border-[#D9E2EC] font-bold shadow-sm">
                    {article.category}
                  </span>
                </Link>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-[10px] text-[#829AB1] uppercase tracking-widest mb-2 font-mono font-medium">
                    <Calendar className="w-3 h-3 text-[#176B9A]" />
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <Link href={`/news/${article.slug}`}>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#082B49] group-hover:text-[#176B9A] transition-colors font-light leading-snug mb-3">
                      {article.title}
                    </h3>
                  </Link>

                  <p className="text-xs text-[#486581] leading-relaxed line-clamp-3 font-normal">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/news/${article.slug}`}
                  className="text-[11px] tracking-[0.22em] uppercase text-[#082B49] hover:text-[#176B9A] inline-flex items-center gap-1.5 transition-colors font-bold"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
