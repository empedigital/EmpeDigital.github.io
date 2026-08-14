/* ==========================================================
   THE IVORY — eMPe Studio
   Complete JavaScript

   Includes:
   - MK / EN language switcher
   - Shared language memory with main eMPe website
   - Countdown
   - Smooth scroll
   - RSVP modal
   - RSVP demo submit
   - Attendance-dependent guest count
   - Escape/backdrop modal close
========================================================== */


/* ==========================================================
   01. ELEMENTS
========================================================== */

const languageButtons =
    document.querySelectorAll(".invite-lang-btn");

const translatableElements =
    document.querySelectorAll("[data-i18n]");

const rsvpButton =
    document.getElementById("rsvpButton");

const rsvpModal =
    document.getElementById("rsvpModal");

const rsvpClose =
    document.getElementById("rsvpClose");

const rsvpBackdrop =
    document.querySelector(".rsvp-modal-backdrop");

const rsvpForm =
    document.getElementById("rsvpForm");

const rsvpSuccess =
    document.getElementById("rsvpSuccess");

const attendance =
    document.getElementById("attendance");

const guestCount =
    document.getElementById("guestCount");


/* ==========================================================
   02. TRANSLATIONS
========================================================== */

const translations = {

    /* ======================================================
       MACEDONIAN
    ====================================================== */

    mk: {

        /* HERO */

        heroEyebrow:
            "СО ЗАДОВОЛСТВО ВЕ ПОКАНУВАМЕ",

        heroDate:
            "25 · 06 · 2027",

        heroLocation:
            "Скопје",

        discover:
            "Откриј ја поканата",


        /* INTRO */

        introLabel:
            "НАШАТА ПРОСЛАВА",

        introTitle:
            "Еден ден. Една приказна. Еден прекрасен почеток.",

        introText:
            "Со голема радост ве покануваме да бидете дел од денот кога ќе го прославиме нашиот заеднички почеток.",


        /* EVENT DETAILS */

        detailsLabel:
            "ДЕТАЛИ",

        detailsTitle:
            "Кога & каде",

        dateLabel:
            "ДАТУМ",

        dateDay:
            "Петок",

        timeLabel:
            "ВРЕМЕ",

        timeText:
            "Пристигнување на гостите",

        locationLabel:
            "ЛОКАЦИЈА",


        /* COUNTDOWN */

        countdownLabel:
            "ДО НАШИОТ ДЕН",

        countdownTitle:
            "Одбројуваме заедно.",

        days:
            "дена",

        hours:
            "часа",

        minutes:
            "минути",

        seconds:
            "секунди",


        /* SCHEDULE */

        scheduleLabel:
            "ПРОГРАМА",

        scheduleTitle:
            "Нашиот ден",

        scheduleOneTitle:
            "Добредојде",

        scheduleOneText:
            "Пристигнување и пречек на гостите.",

        scheduleTwoTitle:
            "Церемонија",

        scheduleTwoText:
            "Почеток на нашата свадбена церемонија.",

        scheduleThreeTitle:
            "Вечера & прослава",

        scheduleThreeText:
            "Вечера, музика и моменти за паметење.",


        /* LOCATION */

        mapLabel:
            "ЛОКАЦИЈА",

        mapDescription:
            "Скопје, Северна Македонија",

        openMap:
            "Отвори на Google Maps",


        /* DRESS CODE */

        dressLabel:
            "DRESS CODE",

        dressTitle:
            "Elegant & timeless",

        dressText:
            "Би ни било драго вашиот изглед да биде инспириран од нежни, неутрални и елегантни тонови.",


        /* GALLERY */

        galleryLabel:
            "НАШАТА ПРИКАЗНА",

        galleryTitle:
            "Неколку наши моменти.",


        /* RSVP */

        rsvpLabel:
            "RSVP",

        rsvpTitle:
            "Ќе ни биде чест да бидете со нас.",

        rsvpText:
            "Ве молиме потврдете го вашето присуство најдоцна до 1 јуни 2027.",

        rsvpButton:
            "Потврди присуство",


        /* RSVP MODAL */

        modalTitle:
            "Потврда за присуство",

        modalDescription:
            "Пополнете ги информациите подолу.",

        nameLabel:
            "Име и презиме",

        attendanceLabel:
            "Дали ќе присуствувате?",

        selectOption:
            "Одберете",

        attendanceYes:
            "Со задоволство доаѓам",

        attendanceNo:
            "За жал нема да можам",

        guestsLabel:
            "Број на гости",

        messageLabel:
            "Порака",

        submitRsvp:
            "Испрати потврда",

        successTitle:
            "Ви благодариме!",

        successText:
            "Вашиот одговор е успешно подготвен.",


        /* ENDING */

        endingSmall:
            "СО ЉУБОВ"
    },


    /* ======================================================
       ENGLISH
    ====================================================== */

    en: {

        /* HERO */

        heroEyebrow:
            "WE JOYFULLY INVITE YOU",

        heroDate:
            "25 · 06 · 2027",

        heroLocation:
            "Skopje",

        discover:
            "Discover the invitation",


        /* INTRO */

        introLabel:
            "OUR CELEBRATION",

        introTitle:
            "One day. One story. One beautiful beginning.",

        introText:
            "With great joy, we invite you to be part of the day we celebrate the beginning of our life together.",


        /* EVENT DETAILS */

        detailsLabel:
            "DETAILS",

        detailsTitle:
            "When & where",

        dateLabel:
            "DATE",

        dateDay:
            "Friday",

        timeLabel:
            "TIME",

        timeText:
            "Guest arrival",

        locationLabel:
            "LOCATION",


        /* COUNTDOWN */

        countdownLabel:
            "UNTIL OUR DAY",

        countdownTitle:
            "Counting down together.",

        days:
            "days",

        hours:
            "hours",

        minutes:
            "minutes",

        seconds:
            "seconds",


        /* SCHEDULE */

        scheduleLabel:
            "SCHEDULE",

        scheduleTitle:
            "Our day",

        scheduleOneTitle:
            "Welcome",

        scheduleOneText:
            "Guest arrival and welcome.",

        scheduleTwoTitle:
            "Ceremony",

        scheduleTwoText:
            "The beginning of our wedding ceremony.",

        scheduleThreeTitle:
            "Dinner & celebration",

        scheduleThreeText:
            "Dinner, music and moments to remember.",


        /* LOCATION */

        mapLabel:
            "LOCATION",

        mapDescription:
            "Skopje, North Macedonia",

        openMap:
            "Open in Google Maps",


        /* DRESS CODE */

        dressLabel:
            "DRESS CODE",

        dressTitle:
            "Elegant & timeless",

        dressText:
            "We would love your look to be inspired by soft, neutral and elegant tones.",


        /* GALLERY */

        galleryLabel:
            "OUR STORY",

        galleryTitle:
            "A few of our moments.",


        /* RSVP */

        rsvpLabel:
            "RSVP",

        rsvpTitle:
            "It would be an honor to celebrate with you.",

        rsvpText:
            "Please confirm your attendance by June 1, 2027.",

        rsvpButton:
            "Confirm attendance",


        /* RSVP MODAL */

        modalTitle:
            "Attendance confirmation",

        modalDescription:
            "Please fill in the information below.",

        nameLabel:
            "Full name",

        attendanceLabel:
            "Will you be attending?",

        selectOption:
            "Choose an option",

        attendanceYes:
            "I would be delighted to attend",

        attendanceNo:
            "Unfortunately, I cannot attend",

        guestsLabel:
            "Number of guests",

        messageLabel:
            "Message",

        submitRsvp:
            "Send confirmation",

        successTitle:
            "Thank you!",

        successText:
            "Your response has been prepared successfully.",


        /* ENDING */

        endingSmall:
            "WITH LOVE"
    }
};


/* ==========================================================
   03. LANGUAGE STORAGE
   Uses the same key as the main eMPe Studio website.
========================================================== */

function saveLanguage(language) {

    try {

        localStorage.setItem(
            "empeLanguage",
            language
        );

    } catch (error) {

        /* Continue without localStorage. */

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
   04. SET LANGUAGE
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
                    `[The Ivory] Missing translation: ${language}.${key}`
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


    if (language === "en") {

        document.title =
            "The Ivory | Digital Wedding Invitation | eMPe Studio";

    } else {

        document.title =
            "The Ivory | Дигитална свадбена покана | eMPe Studio";

    }
}


/* Language buttons */

languageButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            () => {

                setLanguage(
                    button.dataset.lang
                );

            }
        );

    }
);


/* Load language */

setLanguage(
    getSavedLanguage()
);


/* ==========================================================
   05. SMOOTH SCROLL
========================================================== */

document
    .querySelectorAll('a[href^="#"]')
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


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {
                    return;
                }


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });


/* ==========================================================
   06. COUNTDOWN

   Wedding date:
   25 June 2027 at 18:30
   Skopje summer time = UTC+02:00
========================================================== */

const weddingDate =
    new Date(
        "2027-06-25T18:30:00+02:00"
    ).getTime();


const daysElement =
    document.getElementById("days");

const hoursElement =
    document.getElementById("hours");

const minutesElement =
    document.getElementById("minutes");

const secondsElement =
    document.getElementById("seconds");


function padNumber(number) {

    return String(number).padStart(
        2,
        "0"
    );

}


function updateCountdown() {

    const now =
        Date.now();


    const distance =
        weddingDate - now;


    if (distance <= 0) {

        if (daysElement) {
            daysElement.textContent = "00";
        }

        if (hoursElement) {
            hoursElement.textContent = "00";
        }

        if (minutesElement) {
            minutesElement.textContent = "00";
        }

        if (secondsElement) {
            secondsElement.textContent = "00";
        }

        return;

    }


    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (
                distance %
                (1000 * 60 * 60 * 24)
            ) /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (
                distance %
                (1000 * 60 * 60)
            ) /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (
                distance %
                (1000 * 60)
            ) /
            1000
        );


    if (daysElement) {

        daysElement.textContent =
            String(days);

    }


    if (hoursElement) {

        hoursElement.textContent =
            padNumber(hours);

    }


    if (minutesElement) {

        minutesElement.textContent =
            padNumber(minutes);

    }


    if (secondsElement) {

        secondsElement.textContent =
            padNumber(seconds);

    }
}


updateCountdown();


setInterval(
    updateCountdown,
    1000
);


/* ==========================================================
   07. RSVP MODAL
========================================================== */

function openRsvpModal() {

    if (!rsvpModal) {
        return;
    }


    rsvpModal.classList.add(
        "open"
    );


    document.body.classList.add(
        "modal-open"
    );


    rsvpModal.setAttribute(
        "aria-hidden",
        "false"
    );


    setTimeout(
        () => {

            const firstInput =
                document.getElementById(
                    "guestName"
                );


            if (firstInput) {

                firstInput.focus();

            }

        },
        250
    );
}


function closeRsvpModal() {

    if (!rsvpModal) {
        return;
    }


    rsvpModal.classList.remove(
        "open"
    );


    document.body.classList.remove(
        "modal-open"
    );


    rsvpModal.setAttribute(
        "aria-hidden",
        "true"
    );
}


if (rsvpModal) {

    rsvpModal.setAttribute(
        "aria-hidden",
        "true"
    );

}


if (rsvpButton) {

    rsvpButton.addEventListener(
        "click",
        openRsvpModal
    );

}


if (rsvpClose) {

    rsvpClose.addEventListener(
        "click",
        closeRsvpModal
    );

}


if (rsvpBackdrop) {

    rsvpBackdrop.addEventListener(
        "click",
        closeRsvpModal
    );

}


document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            rsvpModal &&
            rsvpModal.classList.contains(
                "open"
            )
        ) {

            closeRsvpModal();

        }

    }
);


/* ==========================================================
   08. ATTENDANCE / GUEST COUNT
========================================================== */

function updateGuestCountState() {

    if (
        !attendance ||
        !guestCount
    ) {
        return;
    }


    const isNotAttending =
        attendance.value === "no";


    guestCount.disabled =
        isNotAttending;


    if (isNotAttending) {

        guestCount.value =
            "1";

        guestCount.style.opacity =
            "0.45";

    } else {

        guestCount.style.opacity =
            "1";

    }
}


if (attendance) {

    attendance.addEventListener(
        "change",
        updateGuestCountState
    );

}


updateGuestCountState();


/* ==========================================================
   09. RSVP FORM — FRONTEND DEMO
========================================================== */

if (rsvpForm) {

    rsvpForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            if (
                !rsvpForm.checkValidity()
            ) {

                rsvpForm.reportValidity();

                return;

            }


            /*
             * FRONTEND DEMO ONLY
             *
             * No response is sent to a database yet.
             * Later this is where Supabase can be connected.
             */


            rsvpForm.style.display =
                "none";


            if (rsvpSuccess) {

                rsvpSuccess.classList.add(
                    "visible"
                );

            }

        }
    );

}


/* ==========================================================
   10. RESET RSVP WHEN MODAL IS CLOSED

   Keeps the demo clean when reopening the form.
========================================================== */

function resetRsvpDemo() {

    if (!rsvpForm) {
        return;
    }


    rsvpForm.reset();


    rsvpForm.style.display =
        "grid";


    if (rsvpSuccess) {

        rsvpSuccess.classList.remove(
            "visible"
        );

    }


    updateGuestCountState();
}


if (rsvpClose) {

    rsvpClose.addEventListener(
        "click",
        () => {

            setTimeout(
                resetRsvpDemo,
                350
            );

        }
    );

}


if (rsvpBackdrop) {

    rsvpBackdrop.addEventListener(
        "click",
        () => {

            setTimeout(
                resetRsvpDemo,
                350
            );

        }
    );

}


/* ==========================================================
   11. GOOGLE MAPS PLACEHOLDER

   The HTML currently uses href="#".
   When you have the real venue link, replace href="#" in HTML
   with the actual Google Maps URL.
========================================================== */

const mapButton =
    document.querySelector(
        '.location-content .invite-button'
    );


if (
    mapButton &&
    mapButton.getAttribute("href") === "#"
) {

    mapButton.addEventListener(
        "click",
        (event) => {

            event.preventDefault();


            const language =
                getSavedLanguage();


            if (language === "en") {

                alert(
                    "The Google Maps location will be connected when the final venue is added."
                );

            } else {

                alert(
                    "Google Maps локацијата ќе ја поврземе кога ќе се внесе финалната локација."
                );

            }

        }
    );

}


/* ==========================================================
   12. DEBUG — MISSING TRANSLATIONS
========================================================== */

function checkMissingTranslations() {

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
                            `[The Ivory] Missing translation key: ${language}.${key}`
                        );

                    }

                }
            );

        }
    );
}


checkMissingTranslations();