"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function NewsCard({ article, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col bg-white border border-[#E8E5DF] overflow-hidden hover:border-[#B49A76]/50 transition-all duration-500 hover:shadow-lg"
    >
      <Link
        href={`/news/${article.slug}`}
        className="relative aspect-[16/10] overflow-hidden block bg-[#F1EFE9]"
      >
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-[#FAF9F6]/90 backdrop-blur-md px-3 py-1 text-[10px] font-sans font-semibold uppercase tracking-widest text-[#B49A76] border border-[#E8E5DF]">
            {article.category}
          </span>
        </div>
      </Link>

      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <div className="flex items-center gap-4 text-xs font-sans text-[#777B7D]">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#B49A76]" />
              {article.date}
            </span>
            {article.readTime && (
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#B49A76]" />
                {article.readTime}
              </span>
            )}
          </div>

          <Link href={`/news/${article.slug}`} className="block">
            <h3 className="font-serif text-xl sm:text-2xl font-light text-[#17232B] group-hover:text-[#B49A76] transition-colors duration-300 leading-snug">
              {article.title}
            </h3>
          </Link>

          <p className="font-sans text-xs sm:text-sm text-[#777B7D] leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>
        </div>

        <div className="pt-2">
          <Link
            href={`/news/${article.slug}`}
            className="inline-flex items-center text-xs font-sans font-semibold uppercase tracking-[0.2em] text-[#17232B] group-hover:text-[#B49A76] transition-colors"
          >
            <span>Read Article</span>
            <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
