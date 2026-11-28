"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock, ChevronRight } from "lucide-react";
import { newsArticles } from "@/data/news";
import AnimatedTitle from "./AnimatedTitle";
import InteractiveCard3D from "./InteractiveCard3D";
import { useLanguage } from "@/context/LanguageContext";

export default function JournalHomeSection() {
  const { isAr, t } = useLanguage();

  const arabicArticles = [
    {
      id: "as130-launch",
      slug: "as130-tri-deck-flagship-launch-ajman",
      title: "تدشين اليخت الرائد AS 130 Tri-Deck المخصص في حوض عجمان الجاف",
      excerpt: "أعلنت شركة الشعالي مارين عن الإنزال المائي الناجح ليختها الرائد AS 130 ثلاثي الطوابق، إيذاناً ببدء فحص التجارب البحرية في الخليج العربي.",
      category: "تدشين وإطلاق",
      date: "١٥ يناير ٢٠٢٦",
      readTime: "٤ دقائق قراءة",
      image: "/media/yachts/ea4e54_2d4d9ba4d7814b248a3e0b200b21651cf000.jpg",
    },
    {
      id: "ajman-drydock-expansion",
      slug: "ajman-shipyard-expansion-superyacht-refit",
      title: "توسيع ورش الطلاء المكيفة في عجمان لاستيعاب اليخوت الفارهة حتى ٥٥ متراً",
      excerpt: "اكتملت المرحلة الثانية من توسعة الحوض الجاف بعجمان بإضافة ورش طلاء أليكسيل متطورة ومنتظمة الرطوبة ومعدات هيدروليكية عملاقة.",
      category: "أحواض السفن",
      date: "٠٢ ديسمبر ٢٠٢٥",
      readTime: "٦ دقائق قراءة",
      image: "/media/yachts/sweet-maryi-52m-yacht-refit-athens.png",
    },
    {
      id: "dibs-2026-preview",
      slug: "dubai-international-boat-show-2026-fleet-reveal",
      title: "الشعالي مارين تكشف عن أسطول عام ٢٠٢٦ في معرض دبي العالمي لليخوت",
      excerpt: "استعراض تصاميم يخوت أسمراتي السوبر يخت، وقوارب جلوري السريعة، وزوارق واريور التكتيكية أمام نخبة الملاك والقباطنة الدوليين.",
      category: "معارض دولية",
      date: "١٨ نوفمبر ٢٠٢٥",
      readTime: "٣ دقائق قراءة",
      image: "/media/yachts/as100-hero.png",
    },
  ];

  const articles = isAr ? arabicArticles : newsArticles.slice(0, 3);

  return (
    <section id="latest-news" className="py-24 sm:py-32 bg-white border-b border-[#D9E2EC] relative overflow-hidden text-[#102A43]">
      {/* Subtle architectural background grid line */}
      <div className="absolute inset-0 bg-[radial-gradient(#176B9A_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header with Animated Word Reveal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <AnimatedTitle
              key={isAr ? "ar" : "en"}
              tagline={t("news_tagline")}
              title={t("news_title")}
              subtitle={t("news_subtitle")}
              dark={false}
            />
          </div>

          <Link
            href="/news"
            className="text-[11px] tracking-[0.25em] uppercase text-[#082B49] hover:text-[#176B9A] inline-flex items-center gap-2 transition-colors self-start md:self-end font-bold group pb-2 border-b-2 border-transparent hover:border-[#176B9A]"
          >
            <span>{t("news_view_all")}</span>
            <ArrowUpRight className={`w-4 h-4 text-[#176B9A] transition-transform ${isAr ? "rotate-90 group-hover:-translate-x-1" : "group-hover:translate-x-1 group-hover:-translate-y-1"}`} />
          </Link>
        </div>

        {/* 3-Column Editorial News Grid with 3D Mouse Tilt & Specular Glare */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {articles.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <InteractiveCard3D className="h-full">
                <article className="bg-white border border-[#D9E2EC] hover:border-[#176B9A]/80 flex flex-col justify-between h-full group transition-all duration-300 shadow-sm hover:shadow-2xl">
                  <div>
                    {/* News Image with Category Tag */}
                    <Link href={`/news/${article.slug}`} className="relative aspect-[16/10] w-full block overflow-hidden bg-[#082B49]">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#082B49]/70 via-[#082B49]/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                      {/* Category Badge */}
                      <span className={`absolute top-4 ${isAr ? "right-4" : "left-4"} text-[9px] tracking-[0.25em] uppercase font-sans px-3 py-1 bg-white/95 backdrop-blur-sm text-[#082B49] font-bold shadow-md border border-[#D9E2EC]`}>
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
                      <span>{t("news_read_article")}</span>
                      <ArrowUpRight className={`w-3.5 h-3.5 text-[#176B9A] transition-transform ${isAr ? "rotate-90 group-hover:-translate-x-1" : "group-hover:translate-x-1 group-hover:-translate-y-1"}`} />
                    </Link>
                    <ChevronRight className={`w-4 h-4 text-[#BCCCDC] group-hover:text-[#176B9A] transition-colors ${isAr ? "rotate-180" : ""}`} />
                  </div>
                </article>
              </InteractiveCard3D>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
