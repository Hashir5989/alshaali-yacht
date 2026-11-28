"use client";

import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext({
  lang: "en",
  setLang: () => {},
  toggleLang: () => {},
  isAr: false,
  t: (key) => key,
});

export const translations = {
  en: {
    // Header
    nav_home: "Home",
    nav_about: "About Us",
    nav_shipyard: "Shipyard",
    nav_brands: "Brands",
    nav_career: "Career",
    nav_more: "More",
    nav_news: "News",
    nav_news_desc: "Shipyard dispatches, new vessel reveals & engineering milestones",
    nav_events: "Events",
    nav_events_desc: "Dubai International Boat Show, global expos & private VIP previews",
    nav_contact: "Contact Us",
    nav_contact_desc: "Direct private consultation with Ajman shipwrights & directors",
    nav_more_title: "More Dispatches & Contact",
    nav_brands_title: "Divisions & Fleet",
    nav_view_all_brands: "View All Brand Divisions",
    nav_request_vip: "Request VIP Consultation",
    lang_btn: "العربية",
    lang_code: "AR",

    // Hero
    hero_tagline: "Al Shaali Marine · Est. 1979 · Ajman, UAE",
    hero_title_1: "Pioneering Arabian",
    hero_title_2: "Maritime Luxury.",
    hero_subtitle: "Handcrafting bespoke superyachts, offshore powerboats, and commercial patrol vessels on the Arabian Gulf for over four decades.",
    hero_cta_explore: "Explore Fleet",
    hero_cta_consult: "Private Consultation",

    // Brand Divisions
    brands_tagline: "Al Shaali Marine Group Divisions",
    brands_title: "Engineered for Distinction.",
    brands_subtitle: "Our fleet encompasses three specialized, world-class brands engineered for every maritime calling — delivering bespoke luxury superyachts, dynamic offshore powerboats, and tactical tournament center consoles.",
    asmaraty_title: "Asmaraty",
    asmaraty_badge: "Superyachts & Custom Builds",
    asmaraty_tagline: "Life of Superyacht Luxury",
    glory_title: "Glory",
    glory_badge: "High-Performance Cruisers",
    glory_tagline: "Power & Offshore Performance",
    warrior_title: "Warrior",
    warrior_badge: "Tournament Center Consoles",
    warrior_tagline: "Tactical Center Consoles",

    // About Us
    about_tagline: "About Al Shaali Marine · Est. 1979 · Ajman, UAE",
    about_title: "Crafting Arabian Maritime Mastery for Over Four Decades.",
    about_p1: "Founded in 1979 in the historic maritime Emirate of Ajman, Al Shaali Marine stands as a pioneer of Arabian composite shipbuilding. What began as an ambitious pursuit of engineering vessels capable of mastering the demanding waters of the Arabian Gulf has expanded into a world-class 45,000 sqm shipyard group.",
    about_p2: "From custom tri-deck superyachts to offshore high-speed cruisers and tactical patrol vessels, every hull embodies rigorous composite laminating standards, Lloyd’s-compliant naval architecture, and Emirati hospitality. With over 1,200 vessels navigating global seas, our legacy is built on unyielding integrity.",
    about_pillar1_title: "In-House Design",
    about_pillar1_desc: "Naval architecture & CFD hull modeling",
    about_pillar2_title: "1,200+ Hulls",
    about_pillar2_desc: "Delivered to owners across 32 nations",
    about_pillar3_title: "45,000 sqm Yard",
    about_pillar3_desc: "Ajman drydock, refit & climate halls",
    about_cta: "Connect With Our Ajman Shipyard",

    // Shipyard
    shipyard_tagline: "45,000 SQM Shipbuilding & Drydock Atelier",
    shipyard_title: "Where Master Shipwrights Bring Dreams to Water.",
    shipyard_subtitle: "Spanning over 45,000 square metres on the Arabian Gulf, our Ajman drydocks unite 45 years of composite shipbuilding innovation, high-tonnage haul-outs, and bespoke refit engineering.",
    shipyard_feature_title: "Every season counts. We ensure your vessel is back at sea without delay.",
    shipyard_feature_desc: "Whether conducting routine annual maintenance, complete engine repowering with MTU or Caterpillar certified technicians, or an ambitious multi-deck interior reconstruction, Al Shaali Marine delivers unyielding German-grade engineering with Emirati hospitality.",
    shipyard_cta_explore: "Explore Shipyard & Drydocks",
    shipyard_cta_reserve: "Reserve Drydock Slot",

    // Leadership / Chairman
    chairman_tagline: "Visionary Leadership & Heritage",
    chairman_title: "Words of the Founders & Chairmen.",
    abdullah_name: "ABDULLAH AL SHAALI",
    abdullah_role: "FOUNDER & CHAIRMAN",
    abdullah_quote: "When we laid our first keel in 1979, our ambition was to show the world the true depth of Arabian maritime mastery. We do not simply engineer yachts; we sculpt living legends that honor the sea with uncompromising elegance, daring innovation, and enduring strength.",
    abdullah_bio: "Pioneered modern luxury yacht construction in the Arabian Gulf, establishing Al Shaali Marine as a distinguished international symbol of bespoke naval craftsmanship for more than four decades.",
    mohammed_name: "MOHAMMED ALSHAALI",
    mohammed_role: "CHAIRMAN",
    mohammed_quote: "Gulf Craft was built on a vision to create world-class yachts with passion, innovation, and dedication. Every vessel we craft carries that legacy, shaping the future of yachting with every wave.",
    mohammed_bio: "Pioneering Arabian maritime manufacturing and steering world-renowned superyacht craftsmanship for over four decades across global waters.",

    // Latest News
    news_tagline: "The Logbook · Latest News & Dispatches",
    news_title: "News & Shipyard Dispatches.",
    news_subtitle: "Discover our newest vessel launches, shipyard expansions in Ajman, international yacht show appearances, and engineering milestones.",
    news_view_all: "View All Dispatches",
    news_read_article: "Read Full Article",

    // Testimonials
    testimonials_tagline: "Owner Feedback · Verified Commissions",
    testimonials_title: "Words from Our Owners & Captains.",
    testimonials_subtitle: "Authentic reflections from discerning yacht owners, master mariners, and charter directors who navigate our vessels across global waters.",
    testimonials_verified: "VERIFIED COMMISSION",
    testimonials_autoplay: "AUTO PLAYING",

    // CTA Consultation Section
    cta_tagline: "Private Commission & Drydock Inquiries",
    cta_title: "Come and talk to us in Ajman or Dubai.",
    cta_subtitle: "Our master naval architects and shipyard directors are available for private consultations at our Ajman headquarters or at Dubai Harbour Marina.",
    cta_btn_consult: "Request Private Consultation",

    // Under Construction Modal
    modal_badge: "Digital Shipyard Atelier · Commissioning Notice",
    modal_title_suffix: "Is Currently Under Construction.",
    modal_desc_prefix: "Our digital shipyard team is currently handcrafting the bespoke",
    modal_desc_suffix: "experience to Al Shaali Marine’s exacting architectural standards. This exclusive portal section will premiere shortly.",
    modal_check1: "Full 2026 fleet catalog and models are active on the main homepage.",
    modal_check2: "Ajman Drydock & refit consultation desks remain fully operational.",
    modal_btn_contact: "Contact Shipyard",
    modal_btn_explore: "Explore Homepage",
  },
  ar: {
    // Header
    nav_home: "الرئيسية",
    nav_about: "من نحن",
    nav_shipyard: "حوض السفن",
    nav_brands: "العلامات التجارية",
    nav_career: "الوظائف",
    nav_more: "المزيد",
    nav_news: "الأخبار",
    nav_news_desc: "تقارير حوض بناء السفن وإطلاق الطرازات الجديدة والمحطات الهندسية",
    nav_events: "الفعاليات والمعارض",
    nav_events_desc: "معرض دبي العالمي لليخوت، المعارض الدولية والعروض الخاصة",
    nav_contact: "تواصل معنا",
    nav_contact_desc: "استشارة خاصة ومباشرة مع مهندسي ومديري حوض السفن في عجمان",
    nav_more_title: "التقارير والتواصل",
    nav_brands_title: "الأقسام والعلامات التجارية",
    nav_view_all_brands: "استعرض جميع أقسام العلامات",
    nav_request_vip: "طلب استشارة خاصة لكبار الشخصيات",
    lang_btn: "English",
    lang_code: "EN",

    // Hero
    hero_tagline: "الشعالي مارين · تأسست 1979 · عجمان، الإمارات",
    hero_title_1: "رواد الفخامة",
    hero_title_2: "البحرية العربية.",
    hero_subtitle: "صناعة وتصميم أرقى اليخوت الفاخرة المخصصة، القوارب السريعة، وزوارق المهام الخاصة في الخليج العربي لأكثر من أربعة عقود.",
    hero_cta_explore: "استكشف الأسطول",
    hero_cta_consult: "استشارة خاصة",

    // Brand Divisions
    brands_tagline: "أقسام مجموعة الشعالي مارين",
    brands_title: "صُممت للريادة والتميز.",
    brands_subtitle: "يضم أسطولنا ثلاث علامات تجارية عالمية مخصصة تلبي كافة المتطلبات البحرية — من اليخوت الفاخرة المصممة خصيصاً، إلى قوارب القوة والأداء العالي، وقوارب السباقات والكونسول الأوسط.",
    asmaraty_title: "أسمراتي",
    asmaraty_badge: "يخوت سوبر يخت وتفصيل خاص",
    asmaraty_tagline: "قمة الفخامة في عالم اليخوت الفارهة",
    glory_title: "جلوري",
    glory_badge: "قوارب سريعة وعالية الأداء",
    glory_tagline: "القوة والأداء في عرض البحر",
    warrior_title: "واريور",
    warrior_badge: "قوارب الكونسول الأوسط للبطولات",
    warrior_tagline: "زوارق تكتيكية للرحلات والصيد",

    // About Us
    about_tagline: "عن الشعالي مارين · تأسست عام 1979 · عجمان، الإمارات",
    about_title: "صناعة الريادة البحرية العربية لأكثر من أربعة عقود.",
    about_p1: "تأسست شركة الشعالي مارين في عام 1979 في إمارة عجمان ذات التاريخ البحري العريق، لتقف اليوم كأحد أبرز رواد صناعة السفن واليخوت المركبة في العالم العربي. وما بدأ كشغف هندسي لبناء يخوت وقوارب قادرة على ترويض مياه الخليج العربي الصعبة، تحول إلى صرح صناعي متكامل يمتد على مساحة 45,000 متر مربع.",
    about_p2: "من اليخوت الفارهة ذات الطوابق الثلاثة المخصصة إلى قوارب الطليعة البحرية عالية السرعة، يجسد كل هيكل أعلى معايير تصفيح الألياف المركبة، والهندسة المعمارية المطابقة لمعايير لويدز ريجستر، بروح الضيافة الإماراتية الأصيلة. ومع إبحار أكثر من 1,200 سفينة في بحار العالم، يبقى إرثنا راسخاً على قيم النزاهة والإتقان.",
    about_pillar1_title: "تصميم هندسي داخلي",
    about_pillar1_desc: "هندسة معمارية بحرية ونمذجة هيدروديناميكية متطورة",
    about_pillar2_title: "أكثر من 1,200 هيكل",
    about_pillar2_desc: "سُلمت لنخبة الملاك في 32 دولة حول العالم",
    about_pillar3_title: "حوض بمساحة 45,000 م²",
    about_pillar3_desc: "أحواض جافة بعجمان وورش صيانة وطلاء مكيفة",
    about_cta: "تواصل مع حوض السفن في عجمان",

    // Shipyard
    shipyard_tagline: "حوض بناء وصيانة السفن بمساحة 45,000 متر مربع",
    shipyard_title: "حيث يحوّل كبار بناة السفن الأحلام إلى واقع على سطح الماء.",
    shipyard_subtitle: "يمتد حوضنا الجاف في عجمان على مساحة تتجاوز 45,000 متر مربع على الخليج العربي، جامعاً بين 45 عاماً من الابتكار في صناعة المواد المركبة، والرافعات العملاقة، وهندسة التجديد والصيانة الفاخرة.",
    shipyard_feature_title: "كل موسم له قيمته. نضمن عودة يختك إلى البحر دون تأخير.",
    shipyard_feature_desc: "سواء كنت تجري صيانة دورية سنوية، أو ترقية كاملة للمحركات عبر فنيين معتمدين من MTU أو Caterpillar، أو إعادة بناء داخلية شاملة، توفر الشعالي مارين هندسة فائقة الدقة بلمسات الضيافة الإماراتية الكريمة.",
    shipyard_cta_explore: "استكشف حوض السفن والأحواض الجافة",
    shipyard_cta_reserve: "احجز موعداً في الحوض الجاف",

    // Leadership / Chairman
    chairman_tagline: "الرؤية والقيادة · إرث ممتد",
    chairman_title: "كلمات المؤسسين ورئاسة مجلس الإدارة.",
    abdullah_name: "عبد الله الشعالي",
    abdullah_role: "المؤسس ورئيس مجلس الإدارة",
    abdullah_quote: "عندما وضعنا أول هيكل لسفننا في عام 1979، كان طموحنا أن نُظهر للعالم عمق الريادة البحرية العربية الأصيلة. نحن لا نبني اليخوت فحسب، بل نصيغ أساطير حية تعانق عباب البحر بأناقة متناهية، وابتكار جريء، وقوة تدوم عبر الأجيال.",
    abdullah_bio: "رائد صناعة اليخوت الفاخرة الحديثة في الخليج العربي، ومؤسس الشعالي مارين كرمز دولي متميز للحرفية البحرية الراقية لأكثر من أربعة عقود.",
    mohammed_name: "محمد الشعالي",
    mohammed_role: "رئيس مجلس الإدارة",
    mohammed_quote: "بُنيت شركتنا على رؤية راسخة لخلق يخوت بمعايير عالمية تجمع بين الشغف والابتكار والإخلاص. كل سفينة نصنعها تحمل هذا الإرث، لتشكل مستقبل الإبحار مع كل موجة تعبرها.",
    mohammed_bio: "رائد الصناعة البحرية في المنطقة وموجّه الحرفية العالية لليخوت الفاخرة لأكثر من أربعة عقود عبر المياه الدولية.",

    // Latest News
    news_tagline: "سجل الرحلات · أحدث الأخبار والتقارير",
    news_title: "أخبار وتقارير حوض بناء السفن.",
    news_subtitle: "اكتشف أحدث تدشينات اليخوت، وتوسعات حوض السفن في عجمان، والمشاركات في معارض اليخوت الدولية، والإنجازات الهندسية.",
    news_view_all: "عرض جميع التقارير",
    news_read_article: "اقرأ التقرير كاملاً",

    // Testimonials
    testimonials_tagline: "آراء الملاك · تجارب موثقة",
    testimonials_title: "كلمات من مالكي يخوتنا وقباطنتها.",
    testimonials_subtitle: "شهادات حية من نخبة الملاك والقباطنة ومديري الأساطيل الذين يبحرون بيخوتنا عبر بحار العالم.",
    testimonials_verified: "تفويض رسمي موثق",
    testimonials_autoplay: "تشغيل تلقائي مستمر",

    // CTA Consultation Section
    cta_tagline: "استفسارات البناء المخصص والأحواض الجافة",
    cta_title: "تفضلوا بزيارتنا في عجمان أو دبي.",
    cta_subtitle: "مهندسونا المعماريون البحريون ومديرو حوض السفن متاحون لجلسات الاستشارة الخاصة في مقرنا الرئيسي بعجمان أو في دبي هاربر مارينا.",
    cta_btn_consult: "طلب استشارة خاصة",

    // Under Construction Modal
    modal_badge: "حوض السفن الرقمي · إشعار بالبناء",
    modal_title_suffix: "قيد التجهيز والتطوير حالياً.",
    modal_desc_prefix: "يعمل فريقنا الرقمي حالياً على تصميم وتجهيز قسم",
    modal_desc_suffix: "وفقاً لأعلى المعايير المعمارية الفاخرة لشركة الشعالي مارين. سيتم إطلاق هذا القسم الحصري قريباً.",
    modal_check1: "كتالوج أسطول 2026 الكامل وجميع الطرازات متاحة للتصفح على الصفحة الرئيسية.",
    modal_check2: "مكاتب استشارات الحوض الجاف والصيانة في عجمان تعمل بكامل طاقتها وجاهزة لاستقبالكم.",
    modal_btn_contact: "تواصل مع حوض السفن",
    modal_btn_explore: "تصفح الصفحة الرئيسية",
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  // Read language preference from localStorage if available
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("asm_lang");
      if (savedLang && (savedLang === "en" || savedLang === "ar")) {
        setLang(savedLang);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const toggleLang = () => {
    const nextLang = lang === "en" ? "ar" : "en";
    setLang(nextLang);
    try {
      localStorage.setItem("asm_lang", nextLang);
    } catch (e) {
      // ignore
    }
  };

  const isAr = lang === "ar";
  const t = (key) => {
    return translations[lang]?.[key] || translations["en"]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, isAr, t }}>
      <div dir={isAr ? "rtl" : "ltr"} className={isAr ? "font-arabic" : "font-sans"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
