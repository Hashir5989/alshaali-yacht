"use client";

import { useEffect, useState, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function PageTransitionManager({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetUrl, setTargetUrl] = useState(null);

  // Global click interception for smooth luxury transition on internal links
  useEffect(() => {
    const handleDocumentClick = (e) => {
      // Find closest anchor tag
      const anchor = e.target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Skip external links, anchors, mailto, tel, or special clicks
      if (
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        anchor.target === "_blank" ||
        anchor.hasAttribute("download") ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey ||
        e.defaultPrevented
      ) {
        return;
      }

      // If linking to the exact same page, don't trigger transition
      if (href === pathname || (href === "/" && pathname === "/")) {
        return;
      }

      e.preventDefault();
      setTargetUrl(href);
      setIsTransitioning(true);

      // After entering curtain covers screen, trigger Next.js router transition
      setTimeout(() => {
        startTransition(() => {
          router.push(href);
        });
      }, 420);
    };

    document.addEventListener("click", handleDocumentClick, { capture: true });
    return () => document.removeEventListener("click", handleDocumentClick, { capture: true });
  }, [pathname, router]);

  // When pathname changes (navigation completed), smoothly lift the curtains
  useEffect(() => {
    if (isTransitioning) {
      // Short delay to let the new page DOM mount cleanly before revealing
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setTargetUrl(null);
        window.scrollTo({ top: 0, behavior: "instant" });
      }, 180);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return (
    <>
      {/* 1. Page Content with smooth cinematic scale/opacity entrance */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col min-h-screen"
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {/* 2. Full-Screen Luxury Maritime Curtain Transition Overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <div className="fixed inset-0 z-[99990] pointer-events-none overflow-hidden">
            {/* Primary Deep Navy Layer (#082B49) - Slides down to cover, slides down to exit */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.45, ease: [0.77, 0, 0.175, 1] }}
              className="absolute inset-0 bg-[#082B49] flex flex-col items-center justify-center"
            >
              {/* Subtle Ocean Blue Atmospheric Radial Beam */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(23,107,154,0.3)_0%,transparent_75%)] pointer-events-none" />

              {/* Watermark Crest Emblem */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: 0.1 }}
                className="relative z-10 flex flex-col items-center gap-4 text-center px-6"
              >
                <div className="w-12 h-12 relative">
                  <svg viewBox="0 0 24 24" className="w-full h-full fill-[#DFCA9E] drop-shadow-[0_0_20px_rgba(223,202,158,0.4)]">
                    <path d="M12 0 L14 9 L23 11 L14 13 L12 22 L10 13 L1 11 L10 9 Z" />
                  </svg>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-serif text-lg tracking-[0.25em] text-[#E8D5B5] font-light">
                    AL SHAALI MARINE
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-6 h-[1px] bg-[#DFCA9E]/40" />
                    <span className="font-sans text-[8.5px] tracking-[0.35em] uppercase text-[#DFCA9E] font-semibold">
                      AJMAN · EST. 1979
                    </span>
                    <span className="w-6 h-[1px] bg-[#DFCA9E]/40" />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Accent Ice-Blue / Ocean Wave Trailing Edge Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#DFCA9E] to-transparent z-20"
            />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
