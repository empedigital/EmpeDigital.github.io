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

        heroNote:
            "Персонализирано. Дигитално. Создадено за вас.",

        /* Demo invitation */
        inviteYou: "ВЕ ПОКАНУВАМЕ",
        inviteLocation: "Скопје",
        openInvitation: "Отвори покана",

        /* Floating cards */
        floatingPersonalized: "Персонализирано",
        floatingPersonalizedSmall: "само за вашиот момент",
        floatingDigitalSmall: "лесно за споделување"
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

        heroNote:
            "Personalized. Digital. Made for you.",

        /* Demo invitation */
        inviteYou: "YOU ARE INVITED",
        inviteLocation: "Skopje",
        openInvitation: "Open invitation",

        /* Floating cards */
        floatingPersonalized: "Personalized",
        floatingPersonalizedSmall: "made for your special moment",
        floatingDigitalSmall: "easy to share"
    }

};


/* ==========================================================
   03. PAGE / SEO TEXT BY LANGUAGE
========================================================== */

const pageMeta = {

    mk: {
        title: "eMPe Studio | Дигитални покани",
        description:
            "eMPe Studio создава елегантни и персонализирани дигитални покани за вашите посебни моменти."
    },

    en: {
        title: "eMPe Studio | Digital Invitations",
        description:
            "eMPe Studio creates elegant and personalized digital invitations for your most special moments."
    }

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

        button.setAttribute(
            "aria-pressed",
            isActive ? "true" : "false"
        );

    });


    localStorage.setItem("empeLanguage", language);


    if (pageMeta[language]) {

        document.title = pageMeta[language].title;

    }


    const metaDescription =
        document.querySelector('meta[name="description"]');

    if (metaDescription && pageMeta[language]) {

        metaDescription.setAttribute(
            "content",
            pageMeta[language].description
        );

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

const savedLanguage =
    localStorage.getItem("empeLanguage") || "mk";

setLanguage(savedLanguage);


/* ==========================================================
   12. ACTIVE NAVIGATION LINK ON SCROLL
========================================================== */

const sections =
    document.querySelectorAll("main section[id]");

const desktopNavLinks =
    document.querySelectorAll(".desktop-nav .nav-link");


function updateActiveNavigation() {

    let currentSection = "home";

    const scrollPosition =
        window.scrollY + 160;


    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            currentSection = section.id;

        }

    });


    desktopNavLinks.forEach((link) => {

        const target =
            link.getAttribute("href");

        link.classList.toggle(
            "active",
            target === `#${currentSection}`
        );

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);

updateActiveNavigation();


/* ==========================================================
   13. SMOOTH SCROLL FALLBACK
========================================================== */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId =
            link.getAttribute("href");

        if (
            !targetId ||
            targetId === "#"
        ) {
            return;
        }


        const targetElement =
            document.querySelector(targetId);

        if (!targetElement) {
            return;
        }


        event.preventDefault();


        const headerHeight =
            header ? header.offsetHeight : 0;


        const targetPosition =
            targetElement.getBoundingClientRect().top +
            window.scrollY -
            headerHeight;


        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });

    });

});


/* ==========================================================
   14. DEMO INVITATION BUTTON
========================================================== */

const demoInvitationButton =
    document.querySelector(".invite-demo-btn");


if (demoInvitationButton) {

    demoInvitationButton.addEventListener("click", () => {

        const currentLanguage =
            localStorage.getItem("empeLanguage") || "mk";


        if (currentLanguage === "en") {

            alert(
                "The first eMPe invitation demo is coming soon."
            );

        } else {

            alert(
                "Првата eMPe demo покана наскоро."
            );

        }

    });

}