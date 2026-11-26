"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VipEnquiryModal from "@/components/VipEnquiryModal";
import { newsArticles } from "@/data/news";

export default function NewsPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <>
      <Header onOpenEnquiry={() => setEnquiryOpen(true)} />

      <main className="flex-grow pt-28 pb-24 bg-[#082B49] text-[#E8D5B5]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="py-12 border-b border-white/10 mb-16">
            <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#DFCA9E] mb-2 font-medium">
              The Shipyard Journal &nbsp;·&nbsp; The Logbook
            </p>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#E8D5B5] font-light">
              Letters from the Yard.
            </h1>
            <p className="text-sm sm:text-base text-[#E8D5B5]/70 max-w-xl mt-4 leading-relaxed font-light">
              Dispatches on new composite technologies, royal commissions, and international boat show debuts from Al Shaali Marine.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <article key={article.id} className="bg-[#062138] border border-white/10 rounded-sm overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[16/10] w-full">
                    <Image src={article.image} alt={article.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#062138] via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-[10px] tracking-wider text-[#DFCA9E] uppercase mb-2">
                      <span>{article.category}</span>
                      <span>·</span>
                      <span>{article.date}</span>
                    </div>
                    <h2 className="font-serif text-2xl text-[#E8D5B5] font-light mb-3 leading-snug">
                      {article.title}
                    </h2>
                    <p className="text-xs text-[#E8D5B5]/65 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/news/${article.slug}`}
                    className="text-[11px] tracking-[0.2em] uppercase text-[#DFCA9E] hover:text-[#E2C896] inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Read Journal Entry</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer onOpenEnquiry={() => setEnquiryOpen(true)} />

      <VipEnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </>
  );
}
