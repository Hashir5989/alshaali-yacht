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
    // Header Navigation
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

    // Sound Ambience
    sound_on: "SEA AMBIENCE: ON",
    sound_off: "SEA AMBIENCE: OFF",
    sound_title_mute: "Mute Ocean Soundscape",
    sound_title_enable: "Enable Ambient Sea Ambience",

    // Cinematic Hero
    hero_scroll_cue: "Scroll to Explore",
    hero_eyebrow: "Al Shaali Marine Group · Gulf Yacht Manufacturer · Est. 1979",
    hero_title_line1: "Pioneers of the Gulf.",
    hero_title_line2: "Masters of the Deep.",
    hero_body: "A luxury yacht is thousands of decisions, sculpted over years by master shipwrights who have to trust one another. Here in Ajman, every hull answers to four decades of continuous Emirati composite shipbuilding mastery.",
    hero_btn_fleet: "Explore 2026 Fleet",
    hero_btn_inquiry: "Commission Inquiry",

    // Brand Divisions Section
    brands_tagline: "Al Shaali Marine Group Divisions",
    brands_title: "Engineered for Distinction.",
    brands_subtitle: "Our fleet encompasses three specialized, world-class brands engineered for every maritime calling — delivering bespoke luxury superyachts, dynamic offshore powerboats, and tactical tournament center consoles.",
    asmaraty_title: "Asmaraty",
    asmaraty_division: "Yachts",
    asmaraty_badge: "Superyachts & Custom Builds",
    asmaraty_tagline: "Life of Superyacht Luxury",
    glory_title: "Glory",
    glory_division: "Power Boats",
    glory_badge: "High-Performance Cruisers",
    glory_tagline: "Power & Offshore Performance",
    warrior_title: "Warrior",
    warrior_division: "Center Console",
    warrior_badge: "Tournament Center Consoles",
    warrior_tagline: "Tactical Center Consoles",

    // About Us Section
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

    // Shipyard Section
    shipyard_tagline: "45,000 SQM Shipbuilding & Drydock Atelier",
    shipyard_title: "Where Master Shipwrights Bring Dreams to Water.",
    shipyard_subtitle: "Spanning over 45,000 square metres on the Arabian Gulf, our Ajman drydocks unite 45 years of composite shipbuilding innovation, high-tonnage haul-outs, and bespoke refit engineering.",
    shipyard_badge_1: "Ajman Drydock Haul-out",
    shipyard_badge_2: "Hull Re-engineering",
    shipyard_feature_title: "Every season counts. We ensure your vessel is back at sea without delay.",
    shipyard_feature_desc: "Whether conducting routine annual maintenance, complete engine repowering with MTU or Caterpillar certified technicians, or an ambitious multi-deck interior reconstruction, Al Shaali Marine delivers unyielding German-grade engineering with Emirati hospitality.",
    shipyard_cap1_title: "200-Tonne Travel Lift Haul-Out",
    shipyard_cap1_desc: "Accommodating motor yachts and superyachts up to 55 metres directly into our Ajman drydocks.",
    shipyard_cap2_title: "Climate-Controlled Alexseal Paint Sheds",
    shipyard_cap2_desc: "Dust-free, humidity-regulated spray environments producing mirror-finish superyacht topcoats.",
    shipyard_cap3_title: "TASNEEF & Lloyd's Survey Classification",
    shipyard_cap3_desc: "Full statutory survey renewal, thickness testing, naval architecture recertification, and sea trials.",
    shipyard_cap4_title: "First-Grade Burmese Teak Decking",
    shipyard_cap4_desc: "In-house joinery artisans laying continuous quarter-sawn Burmese teak with vacuum bonding.",
    shipyard_cta_explore: "Explore Shipyard & Drydocks",
    shipyard_cta_reserve: "Reserve Drydock Slot",

    // Chairman & Founders Vision
    chairman_tagline: "Visionary Leadership & Heritage",
    chairman_title: "Words of the Founders & Chairmen.",
    chairman_founder_tab: "Founder",
    chairman_leader_tab: "Chairman",
    abdullah_name: "ABDULLAH AL SHAALI",
    abdullah_role: "FOUNDER & CHAIRMAN",
    abdullah_tagline: "FOUNDER’S VISION · ENDURING HERITAGE",
    abdullah_quote: "When we laid our first keel in 1979, our ambition was to show the world the true depth of Arabian maritime mastery. We do not simply engineer yachts; we sculpt living legends that honor the sea with uncompromising elegance, daring innovation, and enduring strength.",
    abdullah_bio: "Pioneered modern luxury yacht construction in the Arabian Gulf, establishing Al Shaali Marine as a distinguished international symbol of bespoke naval craftsmanship for more than four decades.",
    mohammed_name: "MOHAMMED ALSHAALI",
    mohammed_role: "CHAIRMAN",
    mohammed_tagline: "CHAIRMAN’S VISION · LEADERSHIP MESSAGE",
    mohammed_quote: "Gulf Craft was built on a vision to create world-class yachts with passion, innovation, and dedication. Every vessel we craft carries that legacy, shaping the future of yachting with every wave.",
    mohammed_bio: "Pioneering Arabian maritime manufacturing and steering world-renowned superyacht craftsmanship for over four decades across global waters.",

    // Latest News & Shipyard Dispatches
    news_tagline: "The Logbook · Latest News & Dispatches",
    news_title: "News & Shipyard Dispatches.",
    news_subtitle: "Discover our newest vessel launches, shipyard expansions in Ajman, international yacht show appearances, and engineering milestones.",
    news_view_all: "View All Dispatches",
    news_read_article: "Read Full Article",
    news_min_read: "min read",

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

    // Footer
    footer_newsletter_tagline: "The Logbook · Corporate Communications",
    footer_newsletter_title: "Dispatches from the Ajman Shipyard.",
    footer_newsletter_desc: "Occasional announcements on new flagship superyacht builds, international boat show debuts, and marine engineering milestones.",
    footer_newsletter_placeholder: "Your email address",
    footer_newsletter_btn: "Subscribe",
    footer_newsletter_success: "You are subscribed to The Logbook. We welcome you aboard.",
    footer_newsletter_privacy: "Strictly private. You can unsubscribe at any time.",
    footer_brand_desc: "Pioneers of Arabian marine mastery since 1979. Over four decades of continuous shipbuilding excellence in Ajman, United Arab Emirates.",
    footer_est: "ESTABLISHED 1979 · AJMAN, UAE",
    footer_col_nav: "Navigation",
    footer_col_brands: "Brand Divisions",
    footer_col_contact: "Contact & Atelier",
    footer_hiring: "Hiring",
    footer_impressum: "Impressum",
    footer_privacy: "Privacy Policy",
    footer_write_us: "Write to us",
    footer_rights: "© 2026 Al Shaali Marine. All rights reserved.",
    footer_locations: "Ajman — Dubai — Abu Dhabi",
    footer_env: "Dark by intention: our website is designed in deep maritime tones, so your display draws less energy, reflecting the calm waters of the Arabian Gulf. The same environmental respect and marine stewardship guides every vessel we construct.",

    // Under Construction Modal
    modal_badge: "Digital Shipyard Atelier · Commissioning Notice",
    modal_title_suffix: "Is Currently Under Construction.",
    modal_desc_prefix: "Our digital shipyard team is currently handcrafting the bespoke",
    modal_desc_suffix: "experience to Al Shaali Marine’s exacting architectural standards. This exclusive portal section will premiere shortly.",
    modal_check1: "Full 2026 fleet catalog and models are active on the main homepage.",
    modal_check2: "Ajman Drydock & refit consultation desks remain fully operational.",
    modal_btn_contact: "Contact Shipyard",
    modal_btn_explore: "Explore Homepage",

    // VIP Enquiry Modal
    enquiry_badge: "Private Atelier Consultation",
    enquiry_title: "Commission Your Vessel",
    enquiry_subtitle: "Speak directly with our Chief Naval Architect and Shipyard Directors in Ajman.",
    enquiry_name_label: "Full Name",
    enquiry_name_placeholder: "e.g. Sheikh Sultan Al Qasimi",
    enquiry_email_label: "Direct Email Address",
    enquiry_email_placeholder: "name@company.ae",
    enquiry_phone_label: "Mobile / Telephone",
    enquiry_phone_placeholder: "+971 50 000 0000",
    enquiry_interest_label: "Vessel of Interest",
    enquiry_type_label: "Type of Engagement",
    enquiry_type_new: "New Build Commission",
    enquiry_type_refit: "Shipyard Refit & Drydock",
    enquiry_type_brokerage: "Pre-Owned & Survey",
    enquiry_type_consult: "Private VIP Consultation",
    enquiry_timeline_label: "Target Delivery Season",
    enquiry_timeline_2026: "2026 Season",
    enquiry_timeline_2027: "2027 Season",
    enquiry_timeline_flexible: "Flexible / Discussion",
    enquiry_message_label: "Private Notes & Specifications",
    enquiry_message_placeholder: "Specify preferred layout, cruising region, or custom naval architecture requirements...",
    enquiry_submit_btn: "Dispatch Private Inquiry",
    enquiry_submitting: "Dispatching Dossier...",
    enquiry_success_title: "Thank You, Esteemed Guest",
    enquiry_success_desc: "Your private dossier has been dispatched to the Managing Director and Chief Naval Architect at Al Shaali Marine. A confidential consultation will follow within 12 hours.",
    enquiry_btn_brochure: "Download Fleet Dossier (PDF)",
    enquiry_btn_close: "Close Window",
  },
  ar: {
    // Header Navigation
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
    lang_btn: "الإنجليزية",
    lang_code: "EN",

    // Sound Ambience
    sound_on: "أمواج البحر: مفعّل",
    sound_off: "أمواج البحر: مغلق",
    sound_title_mute: "كتم صوت أمواج البحر",
    sound_title_enable: "تشغيل صوت أمواج البحر",

    // Cinematic Hero
    hero_scroll_cue: "مرر للاستكشاف",
    hero_eyebrow: "مجموعة الشعالي مارين · صانعو اليخوت في الخليج العربي · تأسست عام 1979",
    hero_title_line1: "رواد مياه الخليج.",
    hero_title_line2: "أسياد الأعماق البحرية.",
    hero_body: "بناء اليخت الفاخر هو ثمرة آلاف القرارات الهندسية الدقيقة التي يصوغها كبار بناة السفن عبر سنوات من الإتقان والخبرة المشتركة. هنا في عجمان، يجسد كل هيكل أربعة عقود من الريادة الإماراتية المستمرة في صناعة السفن واليخوت المركبة.",
    hero_btn_fleet: "استكشف أسطول 2026",
    hero_btn_inquiry: "طلب تفويض وبناء خاص",

    // Brand Divisions Section
    brands_tagline: "أقسام مجموعة الشعالي مارين",
    brands_title: "صُممت للريادة والتميز.",
    brands_subtitle: "يضم أسطولنا ثلاث علامات تجارية عالمية مخصصة تلبي كافة المتطلبات البحرية — من اليخوت الفاخرة المصممة خصيصاً، إلى قوارب القوة والأداء العالي، وقوارب السباقات والكونسول الأوسط.",
    asmaraty_title: "أسمراتي",
    asmaraty_division: "يخوت سوبر يخت",
    asmaraty_badge: "يخوت سوبر يخت وتفصيل خاص",
    asmaraty_tagline: "قمة الفخامة في عالم اليخوت الفارهة",
    glory_title: "جلوري",
    glory_division: "قوارب سريعة",
    glory_badge: "قوارب سريعة وعالية الأداء",
    glory_tagline: "القوة والأداء في عرض البحر",
    warrior_title: "واريور",
    warrior_division: "كونسول أوسط",
    warrior_badge: "قوارب الكونسول الأوسط للبطولات",
    warrior_tagline: "زوارق تكتيكية للرحلات والصيد",

    // About Us Section
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

    // Shipyard Section
    shipyard_tagline: "حوض بناء وصيانة السفن بمساحة 45,000 متر مربع",
    shipyard_title: "حيث يحوّل كبار بناة السفن الأحلام إلى واقع على سطح الماء.",
    shipyard_subtitle: "يمتد حوضنا الجاف في عجمان على مساحة تتجاوز 45,000 متر مربع على الخليج العربي، جامعاً بين 45 عاماً من الابتكار في صناعة المواد المركبة، والرافعات العملاقة، وهندسة التجديد والصيانة الفاخرة.",
    shipyard_badge_1: "رفع السفن بالحوض الجاف بعجمان",
    shipyard_badge_2: "إعادة هندسة وتجديد الهيكل",
    shipyard_feature_title: "كل موسم له قيمته. نضمن عودة يختك إلى البحر دون تأخير.",
    shipyard_feature_desc: "سواء كنت تجري صيانة دورية سنوية، أو ترقية كاملة للمحركات عبر فنيين معتمدين من MTU أو Caterpillar، أو إعادة بناء داخلية شاملة، توفر الشعالي مارين هندسة فائقة الدقة بلمسات الضيافة الإماراتية الكريمة.",
    shipyard_cap1_title: "رافعة هيدروليكية متحركة بحمولة 200 طن",
    shipyard_cap1_desc: "استيعاب اليخوت ذات المحركات واليخوت الفاخرة بطول يصل إلى 55 متراً مباشرة في أحواضنا الجافة بعجمان.",
    shipyard_cap2_title: "ورش طلاء أليكسيل مكيفة ومحكمة العزل",
    shipyard_cap2_desc: "بيئات رش خالية من الغبار ومنتظمة الرطوبة لإنتاج طبقات طلاء عاكسة كالمرآة لليخوت الفاخرة.",
    shipyard_cap3_title: "تصنيف واعتماد هيئة تصنيف ولويدز ريجستر",
    shipyard_cap3_desc: "تجديد شامل للفحوصات القانونية، واختبارات سماكة الهيكل، وإعادة اعتماد الهندسة البحرية، والتجارب البحرية.",
    shipyard_cap4_title: "أرضيات خشب الساج البورمي عالي النقاء",
    shipyard_cap4_desc: "حرفيون متخصصون في تركيب خشب الساج البورمي المقصوص ربعياً مع التثبيت الفراغي فائق الدقة.",
    shipyard_cta_explore: "استكشف حوض السفن والأحواض الجافة",
    shipyard_cta_reserve: "احجز موعداً في الحوض الجاف",

    // Chairman & Founders Vision
    chairman_tagline: "الرؤية والقيادة · إرث ممتد",
    chairman_title: "كلمات المؤسسين ورئاسة مجلس الإدارة.",
    chairman_founder_tab: "المؤسس",
    chairman_leader_tab: "رئيس المجلس",
    abdullah_name: "عبد الله الشعالي",
    abdullah_role: "المؤسس ورئيس مجلس الإدارة",
    abdullah_tagline: "رؤية المؤسس · إرث أصيل خالد",
    abdullah_quote: "عندما وضعنا أول هيكل لسفننا في عام 1979، كان طموحنا أن نُظهر للعالم عمق الريادة البحرية العربية الأصيلة. نحن لا نبني اليخوت فحسب، بل نصيغ أساطير حية تعانق عباب البحر بأناقة متناهية، وابتكار جريء، وقوة تدوم عبر الأجيال.",
    abdullah_bio: "رائد صناعة اليخوت الفاخرة الحديثة في الخليج العربي، ومؤسس الشعالي مارين كرمز دولي متميز للحرفية البحرية الراقية لأكثر من أربعة عقود.",
    mohammed_name: "محمد الشعالي",
    mohammed_role: "رئيس مجلس الإدارة",
    mohammed_tagline: "رؤية القيادة · رسالة مجلس الإدارة",
    mohammed_quote: "بُنيت شركتنا على رؤية راسخة لخلق يخوت بمعايير عالمية تجمع بين الشغف والابتكار والإخلاص. كل سفينة نصنعها تحمل هذا الإرث، لتشكل مستقبل الإبحار مع كل موجة تعبرها.",
    mohammed_bio: "رائد الصناعة البحرية في المنطقة وموجّه الحرفية العالية لليخوت الفاخرة لأكثر من أربعة عقود عبر المياه الدولية.",

    // Latest News & Shipyard Dispatches
    news_tagline: "سجل الرحلات · أحدث الأخبار والتقارير",
    news_title: "أخبار وتقارير حوض بناء السفن.",
    news_subtitle: "اكتشف أحدث تدشينات اليخوت، وتوسعات حوض السفن في عجمان، والمشاركات في معارض اليخوت الدولية، والإنجازات الهندسية.",
    news_view_all: "عرض جميع التقارير",
    news_read_article: "اقرأ التقرير كاملاً",
    news_min_read: "دقائق قراءة",

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

    // Footer
    footer_newsletter_tagline: "سجل الرحلات · الاتصالات المؤسسية",
    footer_newsletter_title: "تقارير وأخبار من حوض السفن في عجمان.",
    footer_newsletter_desc: "إعلانات دورية حول إطلاق اليخوت الرائدة الجديدة، والمشاركات في معارض القوارب الدولية، والإنجازات الهندسية البحرية.",
    footer_newsletter_placeholder: "أدخل بريدك الإلكتروني",
    footer_newsletter_btn: "اشتراك",
    footer_newsletter_success: "تم اشتراكك في سجل الرحلات. أهلاً بك على متن سفننا.",
    footer_newsletter_privacy: "خصوصية وسرية تامة. يمكنك إلغاء الاشتراك في أي وقت.",
    footer_brand_desc: "رواد الريادة البحرية العربية منذ عام 1979. أكثر من أربعة عقود من التميز المستمر في بناء السفن واليخوت في عجمان، الإمارات العربية المتحدة.",
    footer_est: "تأسست عام 1979 · عجمان، الإمارات العربية المتحدة",
    footer_col_nav: "روابط الموقع",
    footer_col_brands: "أقسام العلامات التجارية",
    footer_col_contact: "التواصل والمحترف",
    footer_hiring: "نوظف الآن",
    footer_impressum: "بيانات الشركة القانونية",
    footer_privacy: "سياسة الخصوصية",
    footer_write_us: "راسلنا مباشرة",
    footer_rights: "© 2026 مجموعة الشعالي مارين. جميع الحقوق محفوظة.",
    footer_locations: "عجمان — دبي — أبوظبي",
    footer_env: "صُمم موقعنا بألوان بحرية داكنة لتقليل استهلاك طاقة الشاشة واستحضار سكون مياه الخليج العربي الهادئة. إن هذا الاحترام للبيئة والحفاظ على البيئة البحرية يوجهان كل سفينة نصنعها.",

    // Under Construction Modal
    modal_badge: "حوض السفن الرقمي · إشعار بالبناء",
    modal_title_suffix: "قيد التجهيز والتطوير حالياً.",
    modal_desc_prefix: "يعمل فريقنا الرقمي حالياً على تصميم وتجهيز قسم",
    modal_desc_suffix: "وفقاً لأعلى المعايير المعمارية الفاخرة لشركة الشعالي مارين. سيتم إطلاق هذا القسم الحصري قريباً.",
    modal_check1: "كتالوج أسطول 2026 الكامل وجميع الطرازات متاحة للتصفح على الصفحة الرئيسية.",
    modal_check2: "مكاتب استشارات الحوض الجاف والصيانة في عجمان تعمل بكامل طاقتها وجاهزة لاستقبالكم.",
    modal_btn_contact: "تواصل مع حوض السفن",
    modal_btn_explore: "تصفح الصفحة الرئيسية",

    // VIP Enquiry Modal
    enquiry_badge: "جلسة استشارة خاصة في المحترف",
    enquiry_title: "تفويض وبناء يختك المخصص",
    enquiry_subtitle: "تحدث مباشرة مع كبير مهندسي العمارة البحرية ومديري حوض السفن في عجمان.",
    enquiry_name_label: "الاسم الكامل",
    enquiry_name_placeholder: "مثال: سمو الشيخ سلطان القاسمي",
    enquiry_email_label: "البريد الإلكتروني المباشر",
    enquiry_email_placeholder: "name@company.ae",
    enquiry_phone_label: "رقم الهاتف / المتحرك",
    enquiry_phone_placeholder: "+971 50 000 0000",
    enquiry_interest_label: "اليخت أو الفئة المطلوبة",
    enquiry_type_label: "نوع الاستشارة أو الطلب",
    enquiry_type_new: "بناء يخت جديد مخصص",
    enquiry_type_refit: "صيانة وتجديد في الحوض الجاف",
    enquiry_type_brokerage: "يخوت مملوكة مسبقاً وفحص بحري",
    enquiry_type_consult: "استشارة خاصة لكبار الشخصيات",
    enquiry_timeline_label: "موسم الاستلام والتسليم المستهدف",
    enquiry_timeline_2026: "موسم 2026",
    enquiry_timeline_2027: "موسم 2027",
    enquiry_timeline_flexible: "مرن / قيد النقاش",
    enquiry_message_label: "ملاحظات ومواصفات خاصة",
    enquiry_message_placeholder: "حدد التوزيع الداخلي المفضل، منطقة الإبحار، أو المتطلبات الهندسية البحرية المخصصة...",
    enquiry_submit_btn: "إرسال طلب الاستشارة الخاصة",
    enquiry_submitting: "جارٍ إرسال الملف السري...",
    enquiry_success_title: "شكراً لكم، ضيفنا الكريم",
    enquiry_success_desc: "تم إرسال ملفكم الخاص مباشرة إلى المدير التنفيذي وكبير المهندسين المعماريين في الشعالي مارين. سيتم التواصل معكم في سرية تامة خلال 12 ساعة.",
    enquiry_btn_brochure: "تحميل ملف الأسطول الكامل (PDF)",
    enquiry_btn_close: "إغلاق النافذة",
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
