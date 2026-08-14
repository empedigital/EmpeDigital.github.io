/* ==========================================================
   eMPe STUDIO
   MAIN JAVASCRIPT
   COMPLETE VERSION

   Includes:
   - Header scroll effect
   - Mobile hamburger menu
   - MK / EN language switcher
   - localStorage language memory
   - SEO title + description translation
   - Active navigation on scroll
   - Smooth scrolling
   - Hero demo button
   - Scroll reveal animations
   - How It Works timeline animation
   - Collection demo buttons
   - FAQ accordion
   - Current year
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

const sections = document.querySelectorAll("main section[id]");
const desktopNavLinks = document.querySelectorAll(".desktop-nav .nav-link");


/* ==========================================================
   02. TRANSLATIONS
========================================================== */

const translations = {

    /* ======================================================
       MACEDONIAN
    ====================================================== */

    mk: {

        /* ---------------- NAVIGATION ---------------- */

        navHome: "Почетна",
        navAbout: "За нас",
        navInvitations: "Покани",
        navHow: "Како функционира",
        navPackages: "Пакети",
        navFaq: "ЧПП",
        navContact: "Контакт",

        languageLabel: "Јазик",


        /* ---------------- HERO ---------------- */

        heroEyebrow:
            "Покани кои остануваат во спомен",

        heroTitleFirst:
            "Дигитални",

        heroTitleAccent:
            "покани",

        heroTitleLast:
            "со стил.",

        heroDescription:
            "Создаваме персонализирани дигитални покани за вашите најубави моменти — со внимание, елеганција и чувство за секој детал.",

        heroViewInvitations:
            "Разгледај покани",

        heroRequestOffer:
            "Побарај понуда",

        heroNote:
            "Персонализирано. Дигитално. Создадено за вас.",

        inviteYou:
            "ВЕ ПОКАНУВАМЕ",

        inviteLocation:
            "Скопје",

        openInvitation:
            "Отвори покана",

        floatingPersonalized:
            "Персонализирано",

        floatingPersonalizedSmall:
            "само за вашиот момент",

        floatingDigitalSmall:
            "лесно за споделување",


        /* ---------------- ABOUT ---------------- */

        aboutEyebrow:
            "За eMPe Studio",

        aboutTitleFirst:
            "Повеќе од",

        aboutTitleAccent:
            "покана.",

        aboutLead:
            "Веруваме дека секој посебен момент заслужува да започне на посебен начин.",

        aboutDescription:
            "eMPe Studio создава персонализирани дигитални покани кои ги спојуваат елеганцијата, деталите и современото дигитално искуство.",

        aboutDescriptionTwo:
            "Секоја покана е создадена за да ја пренесе атмосферата на вашиот настан и лесно да стигне до луѓето со кои сакате да го споделите.",

        aboutFloating:
            "Создадено со чувство за детали.",

        aboutValueOneTitle:
            "Лично",

        aboutValueOneText:
            "Дизајн создаден според вашиот момент.",

        aboutValueTwoTitle:
            "Елегантно",

        aboutValueTwoText:
            "Внимание до секој визуелен детал.",

        aboutValueThreeTitle:
            "Дигитално",

        aboutValueThreeText:
            "Современо и едноставно за споделување.",


        /* ---------------- INVITATIONS ---------------- */

        invitationsEyebrow:
            "Нашите покани",

        invitationsTitleFirst:
            "Дизајн за секој",

        invitationsTitleAccent:
            "посебен момент.",

        invitationsDescription:
            "Одберете го стилот што најдобро ја раскажува вашата приказна. Секој дизајн може да биде персонализиран според вашиот настан.",

        weddingTitle:
            "Свадбени покани",

        weddingDescription:
            "Елегантни дигитални покани создадени за денот кој сакате да го паметите засекогаш.",

        birthdayTitle:
            "Роденденски покани",

        birthdayDescription:
            "Модерни и персонализирани покани за прослави кои заслужуваат посебен почеток.",

        christeningTitle:
            "Крштевање",

        christeningDescription:
            "Нежни и внимателно дизајнирани покани за еден од најубавите семејни моменти.",

        specialTitle:
            "Посебни настани",

        specialDescription:
            "Веридби, годишнини, прослави и моменти кои сакате да ги најавите на поинаков начин.",

        viewCollection:
            "Разгледај колекција",

        customInvitationText:
            "Имате поинаква замисла? Секогаш можеме да создадеме нешто специјално само за вас.",

        contactUs:
            "Контактирај нè",


        /* ---------------- HOW IT WORKS ---------------- */

        processEyebrow:
            "Како функционира",

        processTitleFirst:
            "Од идеја до",

        processTitleAccent:
            "ваша покана.",

        processDescription:
            "Процесот е едноставен. Вие го избирате стилот, а ние се грижиме за деталите.",

        processStepOneTitle:
            "Одберете дизајн",

        processStepOneText:
            "Разгледајте ги достапните колекции и одберете го стилот кој најдобро одговара на вашиот настан.",

        processStepTwoTitle:
            "Испратете ги деталите",

        processStepTwoText:
            "Ни ги испраќате имињата, датумот, локацијата, текстот и останатите информации за вашиот настан.",

        processStepThreeTitle:
            "Ние ја персонализираме",

        processStepThreeText:
            "Поканата ја прилагодуваме со вашите информации, фотографии и избраната визуелна насока.",

        processStepFourTitle:
            "Споделете ја поканата",

        processStepFourText:
            "Ја добивате вашата готова дигитална покана преку уникатен линк кој можете лесно да го споделите со гостите.",

        processCtaSmall:
            "Подготвени сте?",

        processCtaTitle:
            "Вашата приказна може да започне тука.",

        processCtaButton:
            "Побарај понуда",


        /* ---------------- FEATURES ---------------- */

        featuresEyebrow:
            "Повеќе од покана",

        featuresTitleFirst:
            "Вашиот настан.",

        featuresTitleAccent:
            "На едно место.",

        featuresDescription:
            "Дигиталната покана може да содржи сè што им е потребно на вашите гости — елегантно, едноставно и лесно достапно.",

        featureRsvpTitle:
            "RSVP потврда",

        featureRsvpText:
            "Гостите можат директно преку поканата да потврдат дали ќе присуствуваат.",

        featureMapTitle:
            "Локација",

        featureMapText:
            "Директен пристап до локацијата на настанот преку Google Maps.",

        featureCountdownTitle:
            "Countdown",

        featureCountdownText:
            "Одбројување до вашиот посебен ден.",

        featureGalleryTitle:
            "Галерија",

        featureGalleryText:
            "Вашите омилени фотографии како дел од дигиталната приказна.",

        featureLanguagesTitle:
            "Повеќе јазици",

        featureLanguagesText:
            "Можност поканата да биде достапна на повеќе јазици.",

        featureDetailsTitle:
            "Дополнителни детали",

        featureDetailsText:
            "Dress code, агенда, важни информации, контакти и други детали.",


        /* ---------------- COLLECTIONS ---------------- */

        collectionsEyebrow:
            "Колекции",

        collectionsTitleFirst:
            "Пронајдете го",

        collectionsTitleAccent:
            "вашиот стил.",

        collectionsDescription:
            "Неколку различни визуелни насоки, создадени за различни приказни.",

        collectionIvoryText:
            "Минималистички и безвременски стил.",

        collectionAmoreText:
            "Романтична и нежна визуелна приказна.",

        collectionEditorialText:
            "Модерен изглед со editorial карактер.",

        viewDemo:
            "Погледни демо →",

        collectionsComing:
            "Нови eMPe колекции ќе се додаваат редовно.",


        /* ---------------- PACKAGES ---------------- */

        packagesEyebrow:
            "eMPe пакети",

        packagesTitleFirst:
            "Изберете го",

        packagesTitleAccent:
            "вашето искуство.",

        essentialSubtitle:
            "Едноставно и елегантно.",

        essentialOne:
            "Персонализиран дизајн",

        essentialTwo:
            "Детали за настанот",

        essentialThree:
            "Локација",

        essentialFour:
            "Уникатен линк",

        premiumSubtitle:
            "Целосно дигитално искуство.",

        premiumOne:
            "Сè од Essential",

        premiumTwo:
            "Countdown",

        premiumThree:
            "Галерија",

        premiumFour:
            "Дополнителни секции",

        premiumFive:
            "Повеќе јазици",

        signatureSubtitle:
            "Создадено целосно за вас.",

        signatureOne:
            "Сè од Premium",

        signatureTwo:
            "Custom визуелен концепт",

        signatureThree:
            "RSVP систем",

        signatureFour:
            "Дополнителни функционалности",

        signatureFive:
            "Приоритетна персонализација",

        priceOnRequest:
            "Цена по понуда",

        choosePackage:
            "Избери пакет",

        mostPopular:
            "Најпопуларно",


        /* ---------------- FAQ ---------------- */

        faqEyebrow:
            "ЧПП",

        faqTitleFirst:
            "Најчесто",

        faqTitleAccent:
            "прашувате.",

        faqOneQuestion:
            "Што претставува дигитална покана?",

        faqOneAnswer:
            "Дигиталната покана е интерактивна веб-покана која се отвора преку уникатен линк и лесно се споделува со вашите гости.",

        faqTwoQuestion:
            "Може ли поканата да се персонализира?",

        faqTwoAnswer:
            "Да. Текстовите, имињата, датумот, фотографиите, боите и избрани елементи можат да бидат прилагодени.",

        faqThreeQuestion:
            "Како ја испраќам поканата?",

        faqThreeAnswer:
            "Ќе добиете уникатен линк кој можете да го испратите преку Messenger, Instagram, Viber, WhatsApp или друг начин.",

        faqFourQuestion:
            "Може ли поканата да биде на повеќе јазици?",

        faqFourAnswer:
            "Да. Во зависност од пакетот, поканата може да има избор на јазик.",

        faqFiveQuestion:
            "Како функционира RSVP?",

        faqFiveAnswer:
            "Гостите преку самата покана ќе можат да потврдат дали ќе присуствуваат, а одговорите ќе бидат организирани за полесно следење.",


        /* ---------------- CONTACT ---------------- */

        contactEyebrow:
            "Контакт",

        contactTitleFirst:
            "Ајде да создадеме",

        contactTitleAccent:
            "нешто посебно.",

        contactDescription:
            "Кажете ни малку повеќе за вашиот настан и идејата која ја имате. Ќе ви помогнеме да го изберете вистинското eMPe искуство.",

        contactEmail:
            "Испрати порака",


        /* ---------------- FOOTER ---------------- */

        rightsReserved:
            "Сите права се задржани."
    },


    /* ======================================================
       ENGLISH
    ====================================================== */

    en: {

        /* ---------------- NAVIGATION ---------------- */

        navHome: "Home",
        navAbout: "About",
        navInvitations: "Invitations",
        navHow: "How it works",
        navPackages: "Packages",
        navFaq: "FAQ",
        navContact: "Contact",

        languageLabel: "Language",


        /* ---------------- HERO ---------------- */

        heroEyebrow:
            "Invitations made to be remembered",

        heroTitleFirst:
            "Digital",

        heroTitleAccent:
            "invitations",

        heroTitleLast:
            "with style.",

        heroDescription:
            "We create personalized digital invitations for your most special moments — designed with care, elegance and attention to every detail.",

        heroViewInvitations:
            "Explore invitations",

        heroRequestOffer:
            "Request a quote",

        heroNote:
            "Personalized. Digital. Made for you.",

        inviteYou:
            "YOU ARE INVITED",

        inviteLocation:
            "Skopje",

        openInvitation:
            "Open invitation",

        floatingPersonalized:
            "Personalized",

        floatingPersonalizedSmall:
            "made for your special moment",

        floatingDigitalSmall:
            "easy to share",


        /* ---------------- ABOUT ---------------- */

        aboutEyebrow:
            "About eMPe Studio",

        aboutTitleFirst:
            "More than an",

        aboutTitleAccent:
            "invitation.",

        aboutLead:
            "We believe every special moment deserves a special beginning.",

        aboutDescription:
            "eMPe Studio creates personalized digital invitations that combine elegance, thoughtful details and a modern digital experience.",

        aboutDescriptionTwo:
            "Every invitation is designed to reflect the atmosphere of your event and make it easy to share with the people who matter most.",

        aboutFloating:
            "Created with attention to detail.",

        aboutValueOneTitle:
            "Personal",

        aboutValueOneText:
            "A design created around your special moment.",

        aboutValueTwoTitle:
            "Elegant",

        aboutValueTwoText:
            "Attention to every visual detail.",

        aboutValueThreeTitle:
            "Digital",

        aboutValueThreeText:
            "Modern and effortless to share.",


        /* ---------------- INVITATIONS ---------------- */

        invitationsEyebrow:
            "Our invitations",

        invitationsTitleFirst:
            "A design for every",

        invitationsTitleAccent:
            "special moment.",

        invitationsDescription:
            "Choose the style that best tells your story. Every design can be personalized to match your event.",

        weddingTitle:
            "Wedding invitations",

        weddingDescription:
            "Elegant digital invitations created for the day you want to remember forever.",

        birthdayTitle:
            "Birthday invitations",

        birthdayDescription:
            "Modern personalized invitations for celebrations that deserve a special beginning.",

        christeningTitle:
            "Christening invitations",

        christeningDescription:
            "Soft and thoughtfully designed invitations for a beautiful family moment.",

        specialTitle:
            "Special events",

        specialDescription:
            "Engagements, anniversaries, celebrations and moments you want to announce in a different way.",

        viewCollection:
            "Explore collection",

        customInvitationText:
            "Have something different in mind? We can always create something special just for you.",

        contactUs:
            "Contact us",


        /* ---------------- HOW IT WORKS ---------------- */

        processEyebrow:
            "How it works",

        processTitleFirst:
            "From an idea to",

        processTitleAccent:
            "your invitation.",

        processDescription:
            "The process is simple. You choose the style and we take care of the details.",

        processStepOneTitle:
            "Choose your design",

        processStepOneText:
            "Explore the available collections and choose the style that best reflects your event.",

        processStepTwoTitle:
            "Send us the details",

        processStepTwoText:
            "Send us the names, date, location, wording and any other information needed for your event.",

        processStepThreeTitle:
            "We personalize it",

        processStepThreeText:
            "We customize the invitation with your information, photos and selected visual direction.",

        processStepFourTitle:
            "Share your invitation",

        processStepFourText:
            "Receive your completed digital invitation through a unique link that can easily be shared with your guests.",

        processCtaSmall:
            "Ready?",

        processCtaTitle:
            "Your story can begin here.",

        processCtaButton:
            "Request a quote",


        /* ---------------- FEATURES ---------------- */

        featuresEyebrow:
            "More than an invitation",

        featuresTitleFirst:
            "Your event.",

        featuresTitleAccent:
            "All in one place.",

        featuresDescription:
            "Your digital invitation can include everything your guests need — beautifully presented, simple and easy to access.",

        featureRsvpTitle:
            "RSVP confirmation",

        featureRsvpText:
            "Guests can confirm their attendance directly through the invitation.",

        featureMapTitle:
            "Location",

        featureMapText:
            "Direct access to the event location through Google Maps.",

        featureCountdownTitle:
            "Countdown",

        featureCountdownText:
            "A countdown to your special day.",

        featureGalleryTitle:
            "Gallery",

        featureGalleryText:
            "Your favorite photos as part of your digital story.",

        featureLanguagesTitle:
            "Multiple languages",

        featureLanguagesText:
            "The invitation can be available in more than one language.",

        featureDetailsTitle:
            "Extra details",

        featureDetailsText:
            "Dress code, schedule, important information, contacts and other event details.",


        /* ---------------- COLLECTIONS ---------------- */

        collectionsEyebrow:
            "Collections",

        collectionsTitleFirst:
            "Find",

        collectionsTitleAccent:
            "your style.",

        collectionsDescription:
            "Different visual directions created for different stories.",

        collectionIvoryText:
            "A minimal and timeless style.",

        collectionAmoreText:
            "A soft and romantic visual story.",

        collectionEditorialText:
            "A modern design with an editorial character.",

        viewDemo:
            "View demo →",

        collectionsComing:
            "New eMPe collections will be added regularly.",


        /* ---------------- PACKAGES ---------------- */

        packagesEyebrow:
            "eMPe packages",

        packagesTitleFirst:
            "Choose",

        packagesTitleAccent:
            "your experience.",

        essentialSubtitle:
            "Simple and elegant.",

        essentialOne:
            "Personalized design",

        essentialTwo:
            "Event details",

        essentialThree:
            "Location",

        essentialFour:
            "Unique link",

        premiumSubtitle:
            "A complete digital experience.",

        premiumOne:
            "Everything in Essential",

        premiumTwo:
            "Countdown",

        premiumThree:
            "Gallery",

        premiumFour:
            "Additional sections",

        premiumFive:
            "Multiple languages",

        signatureSubtitle:
            "Created entirely around you.",

        signatureOne:
            "Everything in Premium",

        signatureTwo:
            "Custom visual concept",

        signatureThree:
            "RSVP system",

        signatureFour:
            "Additional functionality",

        signatureFive:
            "Priority personalization",

        priceOnRequest:
            "Price on request",

        choosePackage:
            "Choose package",

        mostPopular:
            "Most popular",


        /* ---------------- FAQ ---------------- */

        faqEyebrow:
            "FAQ",

        faqTitleFirst:
            "Frequently",

        faqTitleAccent:
            "asked.",

        faqOneQuestion:
            "What is a digital invitation?",

        faqOneAnswer:
            "A digital invitation is an interactive web invitation opened through a unique link and easily shared with your guests.",

        faqTwoQuestion:
            "Can the invitation be personalized?",

        faqTwoAnswer:
            "Yes. The wording, names, date, photos, colors and selected elements can be customized.",

        faqThreeQuestion:
            "How do I send the invitation?",

        faqThreeAnswer:
            "You will receive a unique link that can be shared through Messenger, Instagram, Viber, WhatsApp or another platform.",

        faqFourQuestion:
            "Can the invitation be available in multiple languages?",

        faqFourAnswer:
            "Yes. Depending on the selected package, the invitation can include a language switcher.",

        faqFiveQuestion:
            "How does RSVP work?",

        faqFiveAnswer:
            "Guests can confirm whether they will attend directly through the invitation, and the responses can be organized for easier tracking.",


        /* ---------------- CONTACT ---------------- */

        contactEyebrow:
            "Contact",

        contactTitleFirst:
            "Let's create",

        contactTitleAccent:
            "something special.",

        contactDescription:
            "Tell us a little more about your event and the idea you have in mind. We will help you choose the right eMPe experience.",

        contactEmail:
            "Send a message",


        /* ---------------- FOOTER ---------------- */

        rightsReserved:
            "All rights reserved."
    }
};


/* ==========================================================
   03. PAGE / SEO TEXT BY LANGUAGE
========================================================== */

const pageMeta = {

    mk: {
        title:
            "eMPe Studio | Дигитални покани",

        description:
            "eMPe Studio создава елегантни и персонализирани дигитални покани за вашите посебни моменти."
    },

    en: {
        title:
            "eMPe Studio | Digital Invitations",

        description:
            "eMPe Studio creates elegant and personalized digital invitations for your most special moments."
    }
};


/* ==========================================================
   04. SAFE LOCAL STORAGE
========================================================== */

function saveLanguage(language) {

    try {

        localStorage.setItem(
            "empeLanguage",
            language
        );

    } catch (error) {

        /* Website continues even if localStorage is unavailable. */

    }
}


function getSavedLanguage() {

    try {

        return (
            localStorage.getItem(
                "empeLanguage"
            ) || "mk"
        );

    } catch (error) {

        return "mk";

    }
}


/* ==========================================================
   05. HEADER ON SCROLL
========================================================== */

function updateHeaderOnScroll() {

    if (!header) {
        return;
    }


    if (window.scrollY > 40) {

        header.classList.add(
            "scrolled"
        );

    } else {

        header.classList.remove(
            "scrolled"
        );

    }
}


window.addEventListener(
    "scroll",
    updateHeaderOnScroll,
    { passive: true }
);


updateHeaderOnScroll();


/* ==========================================================
   06. MOBILE MENU
========================================================== */

function openMobileMenu() {

    if (
        !mobileMenu ||
        !menuToggle
    ) {
        return;
    }


    mobileMenu.classList.add(
        "open"
    );

    menuToggle.classList.add(
        "active"
    );

    document.body.classList.add(
        "menu-open"
    );

    menuToggle.setAttribute(
        "aria-expanded",
        "true"
    );
}


function closeMobileMenu() {

    if (
        !mobileMenu ||
        !menuToggle
    ) {
        return;
    }


    mobileMenu.classList.remove(
        "open"
    );

    menuToggle.classList.remove(
        "active"
    );

    document.body.classList.remove(
        "menu-open"
    );

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );
}


function toggleMobileMenu() {

    if (!mobileMenu) {
        return;
    }


    const isOpen =
        mobileMenu.classList.contains(
            "open"
        );


    if (isOpen) {

        closeMobileMenu();

    } else {

        openMobileMenu();

    }
}


if (menuToggle) {

    menuToggle.addEventListener(
        "click",
        toggleMobileMenu
    );
}


mobileLinks.forEach((link) => {

    link.addEventListener(
        "click",
        closeMobileMenu
    );

});


document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            closeMobileMenu();

        }
    }
);


window.addEventListener(
    "resize",
    () => {

        if (
            window.innerWidth > 960
        ) {

            closeMobileMenu();

        }
    }
);


/* ==========================================================
   07. FAQ HEIGHT HELPER
========================================================== */

function refreshOpenFaqHeight() {

    const openFaq =
        document.querySelector(
            ".faq-item.open"
        );


    if (!openFaq) {
        return;
    }


    const answer =
        openFaq.querySelector(
            ".faq-answer"
        );


    if (answer) {

        answer.style.maxHeight =
            answer.scrollHeight +
            "px";

    }
}


/* ==========================================================
   08. LANGUAGE SWITCHER
========================================================== */

function setLanguage(language) {

    if (!translations[language]) {

        language = "mk";

    }


    translatableElements.forEach(
        (element) => {

            const key =
                element.dataset.i18n;


            if (
                translations[language][key] !== undefined
            ) {

                element.textContent =
                    translations[language][key];

            } else {

                console.warn(
                    `[eMPe] Missing translation: ${language}.${key}`
                );

            }
        }
    );


    document.documentElement.lang =
        language;


    languageButtons.forEach(
        (button) => {

            const isActive =
                button.dataset.lang ===
                language;


            button.classList.toggle(
                "active",
                isActive
            );


            button.setAttribute(
                "aria-pressed",
                isActive
                    ? "true"
                    : "false"
            );
        }
    );


    saveLanguage(language);


    if (pageMeta[language]) {

        document.title =
            pageMeta[language].title;

    }


    const metaDescription =
        document.querySelector(
            'meta[name="description"]'
        );


    if (
        metaDescription &&
        pageMeta[language]
    ) {

        metaDescription.setAttribute(
            "content",
            pageMeta[language].description
        );
    }


    requestAnimationFrame(
        refreshOpenFaqHeight
    );
}


languageButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            () => {

                const selectedLanguage =
                    button.dataset.lang;


                setLanguage(
                    selectedLanguage
                );
            }
        );
    }
);


const savedLanguage =
    getSavedLanguage();


setLanguage(savedLanguage);


/* ==========================================================
   09. ACTIVE NAVIGATION LINK ON SCROLL
========================================================== */

function updateActiveNavigation() {

    if (
        sections.length === 0 ||
        desktopNavLinks.length === 0
    ) {
        return;
    }


    let currentSection =
        "home";


    const scrollPosition =
        window.scrollY + 170;


    sections.forEach(
        (section) => {

            const sectionTop =
                section.offsetTop;

            const sectionHeight =
                section.offsetHeight;


            if (
                scrollPosition >=
                    sectionTop &&
                scrollPosition <
                    sectionTop +
                    sectionHeight
            ) {

                currentSection =
                    section.id;

            }
        }
    );


    desktopNavLinks.forEach(
        (link) => {

            const target =
                link.getAttribute(
                    "href"
                );


            link.classList.toggle(
                "active",
                target ===
                    `#${currentSection}`
            );
        }
    );
}


window.addEventListener(
    "scroll",
    updateActiveNavigation,
    { passive: true }
);


updateActiveNavigation();


/* ==========================================================
   10. SMOOTH SCROLL
========================================================== */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const targetId =
                    link.getAttribute(
                        "href"
                    );


                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const targetElement =
                    document.querySelector(
                        targetId
                    );


                if (!targetElement) {
                    return;
                }


                event.preventDefault();


                const headerHeight =
                    header
                        ? header.offsetHeight
                        : 0;


                const targetPosition =
                    targetElement
                        .getBoundingClientRect()
                        .top +
                    window.scrollY -
                    headerHeight;


                window.scrollTo({
                    top:
                        targetPosition,
                    behavior:
                        "smooth"
                });
            }
        );
    });


/* ==========================================================
   11. HERO DEMO INVITATION BUTTON
========================================================== */

const demoInvitationButton =
    document.querySelector(
        ".invite-demo-btn"
    );


if (demoInvitationButton) {

    demoInvitationButton.addEventListener(
        "click",
        () => {

            const currentLanguage =
                getSavedLanguage();


            if (
                currentLanguage === "en"
            ) {

                alert(
                    "The first eMPe invitation demo is coming soon."
                );

            } else {

                alert(
                    "Првата eMPe demo покана наскоро."
                );

            }
        }
    );
}


/* ==========================================================
   12. SECTION SCROLL REVEAL
========================================================== */

const revealElements =
    document.querySelectorAll(
        ".section-reveal"
    );


if (
    "IntersectionObserver" in window
) {

    const revealObserver =
        new IntersectionObserver(

            (entries, observer) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target
                                .classList.add(
                                    "visible"
                                );


                            observer.unobserve(
                                entry.target
                            );
                        }
                    }
                );
            },

            {
                threshold: 0.12,

                rootMargin:
                    "0px 0px -40px 0px"
            }
        );


    revealElements.forEach(
        (element) => {

            revealObserver.observe(
                element
            );

        }
    );

} else {

    revealElements.forEach(
        (element) => {

            element.classList.add(
                "visible"
            );

        }
    );
}


/* ==========================================================
   13. HOW IT WORKS TIMELINE ANIMATION
========================================================== */

const processSection =
    document.querySelector(
        ".process-section"
    );


if (
    processSection &&
    "IntersectionObserver" in window
) {

    const processObserver =
        new IntersectionObserver(

            (entries, observer) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            processSection
                                .classList.add(
                                    "timeline-visible"
                                );


                            observer.unobserve(
                                processSection
                            );
                        }
                    }
                );
            },

            {
                threshold: 0.20
            }
        );


    processObserver.observe(
        processSection
    );

} else if (processSection) {

    processSection.classList.add(
        "timeline-visible"
    );

}


/* ==========================================================
   14. COLLECTION DEMO BUTTONS
========================================================== */

const collectionDemoButtons =
    document.querySelectorAll(
        ".collection-demo-btn"
    );


collectionDemoButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            () => {

                const currentLanguage =
                    getSavedLanguage();


                if (
                    currentLanguage === "en"
                ) {

                    alert(
                        "This eMPe demo invitation is coming soon."
                    );

                } else {

                    alert(
                        "Оваа eMPe demo покана наскоро ќе биде достапна."
                    );

                }
            }
        );
    }
);


/* ==========================================================
   15. FAQ ACCORDION
========================================================== */

const faqItems =
    document.querySelectorAll(
        ".faq-item"
    );


faqItems.forEach(
    (item) => {

        const button =
            item.querySelector(
                ".faq-question"
            );

        const answer =
            item.querySelector(
                ".faq-answer"
            );


        if (
            !button ||
            !answer
        ) {
            return;
        }


        button.setAttribute(
            "aria-expanded",
            "false"
        );


        button.addEventListener(
            "click",
            () => {

                const isOpen =
                    item.classList.contains(
                        "open"
                    );


                faqItems.forEach(
                    (otherItem) => {

                        otherItem.classList.remove(
                            "open"
                        );


                        const otherButton =
                            otherItem.querySelector(
                                ".faq-question"
                            );

                        const otherAnswer =
                            otherItem.querySelector(
                                ".faq-answer"
                            );


                        if (otherButton) {

                            otherButton.setAttribute(
                                "aria-expanded",
                                "false"
                            );

                        }


                        if (otherAnswer) {

                            otherAnswer.style.maxHeight =
                                null;

                        }
                    }
                );


                if (!isOpen) {

                    item.classList.add(
                        "open"
                    );


                    button.setAttribute(
                        "aria-expanded",
                        "true"
                    );


                    answer.style.maxHeight =
                        answer.scrollHeight +
                        "px";
                }
            }
        );
    }
);


/* ==========================================================
   16. CURRENT YEAR
========================================================== */

const currentYear =
    document.getElementById(
        "currentYear"
    );


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* ==========================================================
   17. RESIZE HELPERS
========================================================== */

window.addEventListener(
    "resize",
    refreshOpenFaqHeight
);


/* ==========================================================
   18. DEBUG: CHECK MISSING TRANSLATION KEYS

   If later you add a new data-i18n="something" in HTML but
   forget to add it here, the browser console will tell you.
========================================================== */

function checkMissingTranslationKeys() {

    translatableElements.forEach(
        (element) => {

            const key =
                element.dataset.i18n;


            ["mk", "en"].forEach(
                (language) => {

                    if (
                        translations[language][key] === undefined
                    ) {

                        console.warn(
                            `[eMPe] Missing translation key: ${language}.${key}`
                        );

                    }
                }
            );
        }
    );
}


checkMissingTranslationKeys();