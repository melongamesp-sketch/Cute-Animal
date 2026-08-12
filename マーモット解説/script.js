document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       Mobile Menu
    ========================= */

    const menuButton = document.querySelector(".menu-button");
    const mainNav = document.querySelector(".main-nav");

    if (menuButton && mainNav) {

        menuButton.addEventListener("click", () => {
            mainNav.classList.toggle("open");
        });

        mainNav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                mainNav.classList.remove("open");
            });
        });
    }


    /* =========================
       Scroll Reveal
    ========================= */

    const revealTargets = document.querySelectorAll(
        ".section-heading, .fact-card, .charm-feature, .timeline-item, .care-card, .care-detail, .village-card, .village-locations article"
    );

    revealTargets.forEach(element => {
        element.classList.add("reveal");
    });

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("visible");
                observer.unobserve(entry.target);

            });

        },
        {
            threshold: 0.12
        }
    );

    revealTargets.forEach(element => {
        revealObserver.observe(element);
    });


    /* =========================
       Header Shadow
    ========================= */

    const header = document.querySelector(".site-header");

    if (header) {

        const updateHeader = () => {

            if (window.scrollY > 20) {
                header.style.boxShadow =
                    "0 8px 25px rgba(77, 61, 48, 0.07)";
            } else {
                header.style.boxShadow = "none";
            }

        };

        window.addEventListener("scroll", updateHeader);
        updateHeader();
    }


    /* =========================
       Smooth Anchor Scroll
    ========================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

});