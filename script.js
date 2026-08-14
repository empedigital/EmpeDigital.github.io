/* ==========================================================
   eMPe STUDIO
   MAIN JAVASCRIPT
   Header + Mobile Menu + Language Switcher
========================================================== */

/* ==========================================================
   01. ELEMENTS
========================================================== */

const header = document.getElementById("header");
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

const mobileLinks = document.querySelectorAll(".mobile-nav a");
const languageButtons = document.querySelectorAll(".lang-btn");
const translatableElements = document.querySelectorAll("[data-i18n]");

/* ==========================================================
   02. TRANSLATIONS

   Zasega gi stavame samo tekstovite sto vekje gi imame:
   - navigation
   - hero
   - mobile language label

   Koga ke zavrsime nova sekcija, samo ke dodavame novi keys
   vo MK i EN objektite.
========================================================== */

const translations = {
  mk: {
    /* Navigation */
    navHome: "Почетна",
    navAbout: "За нас",
    navInvitations: "Покани",
    navHow: "Како функционира",
    navPackages: "Пакети",
    navFaq: "ЧПП",
    navContact: "Контакт",

    /* Mobile menu */
    languageLabel: "Јазик",

    /* Hero */
    heroEyebrow: "Покани кои остануваат во спомен",
    heroTitleFirst: "Дигитални",
    heroTitleAccent: "покани",
    heroTitleLast: "со стил.",

    heroDescription:
      "Создаваме персонализирани дигитални покани за вашите најубави моменти — со внимание, елеганција и чувство за секој детал.",

    heroViewInvitations: "Разгледај покани",
    heroRequestOffer: "Побарај понуда",

    heroNote: "Персонализирано. Дигитално. Создадено за вас.",

    /* Demo invitation */
    inviteYou: "ВЕ ПОКАНУВАМЕ",
    inviteLocation: "Скопје",
    openInvitation: "Отвори покана",

    /* Floating cards */
    floatingPersonalized: "Персонализирано",
    floatingPersonalizedSmall: "само за вашиот момент",
    floatingDigitalSmall: "лесно за споделување",

    aboutEyebrow: "За eMPe Studio",
    aboutTitleFirst: "Повеќе од",
    aboutTitleAccent: "покана.",

    aboutLead:
      "Веруваме дека секој посебен момент заслужува да започне на посебен начин.",

    aboutDescription:
      "eMPe Studio создава персонализирани дигитални покани кои ги спојуваат елеганцијата, деталите и современото дигитално искуство.",

    aboutDescriptionTwo:
      "Секоја покана е создадена за да ја пренесе атмосферата на вашиот настан и лесно да стигне до луѓето со кои сакате да го споделите.",

    aboutFloating: "Создадено со чувство за детали.",

    aboutValueOneTitle: "Лично",
    aboutValueOneText: "Дизајн создаден според вашиот момент.",

    aboutValueTwoTitle: "Елегантно",
    aboutValueTwoText: "Внимание до секој визуелен детал.",

    aboutValueThreeTitle: "Дигитално",
    aboutValueThreeText: "Современо и едноставно за споделување.",

    invitationsEyebrow: "Нашите покани",

    invitationsTitleFirst: "Дизајн за секој",

    invitationsTitleAccent: "посебен момент.",

    invitationsDescription:
      "Одберете го стилот што најдобро ја раскажува вашата приказна. Секој дизајн може да биде персонализиран според вашиот настан.",

    weddingTitle: "Свадбени покани",

    weddingDescription:
      "Елегантни дигитални покани создадени за денот кој сакате да го паметите засекогаш.",

    birthdayTitle: "Роденденски покани",

    birthdayDescription:
      "Модерни и персонализирани покани за прослави кои заслужуваат посебен почеток.",

    christeningTitle: "Крштевање",

    christeningDescription:
      "Нежни и внимателно дизајнирани покани за еден од најубавите семејни моменти.",

    specialTitle: "Посебни настани",

    specialDescription:
      "Веридби, годишнини, прослави и моменти кои сакате да ги најавите на поинаков начин.",

    viewCollection: "Разгледај колекција",

    customInvitationText:
      "Имате поинаква замисла? Секогаш можеме да создадеме нешто специјално само за вас.",

    contactUs: "Контактирај нè",
  },

  en: {
    /* Navigation */
    navHome: "Home",
    navAbout: "About",
    navInvitations: "Invitations",
    navHow: "How it works",
    navPackages: "Packages",
    navFaq: "FAQ",
    navContact: "Contact",

    /* Mobile menu */
    languageLabel: "Language",

    /* Hero */
    heroEyebrow: "Invitations made to be remembered",
    heroTitleFirst: "Digital",
    heroTitleAccent: "invitations",
    heroTitleLast: "with style.",

    heroDescription:
      "We create personalized digital invitations for your most special moments — designed with care, elegance and attention to every detail.",

    heroViewInvitations: "Explore invitations",
    heroRequestOffer: "Request a quote",

    heroNote: "Personalized. Digital. Made for you.",

    /* Demo invitation */
    inviteYou: "YOU ARE INVITED",
    inviteLocation: "Skopje",
    openInvitation: "Open invitation",

    /* Floating cards */
    floatingPersonalized: "Personalized",
    floatingPersonalizedSmall: "made for your special moment",
    floatingDigitalSmall: "easy to share",

    aboutEyebrow: "About eMPe Studio",
    aboutTitleFirst: "More than an",
    aboutTitleAccent: "invitation.",

    aboutLead: "We believe every special moment deserves a special beginning.",

    aboutDescription:
      "eMPe Studio creates personalized digital invitations that combine elegance, thoughtful details and a modern digital experience.",

    aboutDescriptionTwo:
      "Every invitation is designed to reflect the atmosphere of your event and make it easy to share with the people who matter most.",

    aboutFloating: "Created with attention to detail.",

    aboutValueOneTitle: "Personal",
    aboutValueOneText: "A design created around your special moment.",

    aboutValueTwoTitle: "Elegant",
    aboutValueTwoText: "Attention to every visual detail.",

    aboutValueThreeTitle: "Digital",
    aboutValueThreeText: "Modern and effortless to share.",

    invitationsEyebrow: "Our invitations",

    invitationsTitleFirst: "A design for every",

    invitationsTitleAccent: "special moment.",

    invitationsDescription:
      "Choose the style that best tells your story. Every design can be personalized to match your event.",

    weddingTitle: "Wedding invitations",

    weddingDescription:
      "Elegant digital invitations created for the day you want to remember forever.",

    birthdayTitle: "Birthday invitations",

    birthdayDescription:
      "Modern personalized invitations for celebrations that deserve a special beginning.",

    christeningTitle: "Christening invitations",

    christeningDescription:
      "Soft and thoughtfully designed invitations for a beautiful family moment.",

    specialTitle: "Special events",

    specialDescription:
      "Engagements, anniversaries, celebrations and moments you want to announce in a different way.",

    viewCollection: "Explore collection",

    customInvitationText:
      "Have something different in mind? We can always create something special just for you.",

    contactUs: "Contact us",
  },
};

/* ==========================================================
   03. PAGE / SEO TEXT BY LANGUAGE
========================================================== */

const pageMeta = {
  mk: {
    title: "eMPe Studio | Дигитални покани",
    description:
      "eMPe Studio создава елегантни и персонализирани дигитални покани за вашите посебни моменти.",
  },

  en: {
    title: "eMPe Studio | Digital Invitations",
    description:
      "eMPe Studio creates elegant and personalized digital invitations for your most special moments.",
  },
};

/* ==========================================================
   04. HEADER ON SCROLL
========================================================== */

function updateHeaderOnScroll() {
  if (!header) {
    return;
  }

  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", updateHeaderOnScroll);

updateHeaderOnScroll();

/* ==========================================================
   05. MOBILE MENU - OPEN / CLOSE
========================================================== */

function openMobileMenu() {
  if (!mobileMenu || !menuToggle) {
    return;
  }

  mobileMenu.classList.add("open");
  menuToggle.classList.add("active");

  document.body.classList.add("menu-open");

  menuToggle.setAttribute("aria-expanded", "true");
}

function closeMobileMenu() {
  if (!mobileMenu || !menuToggle) {
    return;
  }

  mobileMenu.classList.remove("open");
  menuToggle.classList.remove("active");

  document.body.classList.remove("menu-open");

  menuToggle.setAttribute("aria-expanded", "false");
}

function toggleMobileMenu() {
  if (!mobileMenu) {
    return;
  }

  const isOpen = mobileMenu.classList.contains("open");

  if (isOpen) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
}

if (menuToggle) {
  menuToggle.addEventListener("click", toggleMobileMenu);
}

/* ==========================================================
   06. CLOSE MOBILE MENU AFTER CLICKING A LINK
========================================================== */

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMobileMenu();
  });
});

/* ==========================================================
   07. CLOSE MOBILE MENU WITH ESCAPE KEY
========================================================== */

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMobileMenu();
  }
});

/* ==========================================================
   08. CLOSE MOBILE MENU WHEN SCREEN GETS BIGGER
========================================================== */

window.addEventListener("resize", () => {
  if (window.innerWidth > 960) {
    closeMobileMenu();
  }
});

/* ==========================================================
   09. LANGUAGE SWITCHER
========================================================== */

function setLanguage(language) {
  if (!translations[language]) {
    language = "mk";
  }

  translatableElements.forEach((element) => {
    const key = element.dataset.i18n;

    if (translations[language][key] !== undefined) {
      element.textContent = translations[language][key];
    }
  });

  document.documentElement.lang = language;

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;

    button.classList.toggle("active", isActive);

    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  localStorage.setItem("empeLanguage", language);

  if (pageMeta[language]) {
    document.title = pageMeta[language].title;
  }

  const metaDescription = document.querySelector('meta[name="description"]');

  if (metaDescription && pageMeta[language]) {
    metaDescription.setAttribute("content", pageMeta[language].description);
  }
}

/* ==========================================================
   10. LANGUAGE BUTTON EVENTS
========================================================== */

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedLanguage = button.dataset.lang;

    setLanguage(selectedLanguage);
  });
});

/* ==========================================================
   11. LOAD SAVED LANGUAGE
========================================================== */

const savedLanguage = localStorage.getItem("empeLanguage") || "mk";

setLanguage(savedLanguage);

/* ==========================================================
   12. ACTIVE NAVIGATION LINK ON SCROLL
========================================================== */

const sections = document.querySelectorAll("main section[id]");

const desktopNavLinks = document.querySelectorAll(".desktop-nav .nav-link");

function updateActiveNavigation() {
  let currentSection = "home";

  const scrollPosition = window.scrollY + 160;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    const sectionHeight = section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      currentSection = section.id;
    }
  });

  desktopNavLinks.forEach((link) => {
    const target = link.getAttribute("href");

    link.classList.toggle("active", target === `#${currentSection}`);
  });
}

window.addEventListener("scroll", updateActiveNavigation);

updateActiveNavigation();

/* ==========================================================
   13. SMOOTH SCROLL FALLBACK
========================================================== */

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") {
      return;
    }

    const targetElement = document.querySelector(targetId);

    if (!targetElement) {
      return;
    }

    event.preventDefault();

    const headerHeight = header ? header.offsetHeight : 0;

    const targetPosition =
      targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
});

/* ==========================================================
   14. DEMO INVITATION BUTTON
========================================================== */

const demoInvitationButton = document.querySelector(".invite-demo-btn");

if (demoInvitationButton) {
  demoInvitationButton.addEventListener("click", () => {
    const currentLanguage = localStorage.getItem("empeLanguage") || "mk";

    if (currentLanguage === "en") {
      alert("The first eMPe invitation demo is coming soon.");
    } else {
      alert("Првата eMPe demo покана наскоро.");
    }
  });
}

/* ==========================================================
   15. SECTION SCROLL REVEAL
========================================================== */

const revealElements = document.querySelectorAll(".section-reveal");

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        observer.unobserve(entry.target);
      }
    });
  },

  {
    threshold: 0.15,
  },
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});
