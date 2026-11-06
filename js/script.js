/* Se la libreria Typed non si carica, il resto del sito funziona lo stesso */
if (window.Typed) {
    new Typed(".typing", {
        strings: ["Web developer junior", "sviluppatore JavaScript", "creatore di CareerKick"],
        typeSpeed: 70,
        backSpeed: 40,
        backDelay: 1500,
        loop: true
    })
}

/* ASIDE */

const nav = document.querySelector(".nav");
navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener('click', function () {
        removeBackSection();
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
                //allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}

function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}

function addBackSection(num) {
    allSection[num].classList.add("back-section");
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}

function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    //console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})
/* LINK INTERNI (es. "Guarda i progetti") */
document.querySelectorAll(".section-link").forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        showSection(this);
        updateNav(this);
        removeBackSection();
    })
})

/* MODULO CONTATTI: apre il programma di posta con il messaggio pronto */
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const dati = new FormData(contactForm);
        const oggetto = dati.get("oggetto") || "Contatto dal portfolio";
        const corpo = dati.get("messaggio") + "\n\n" + dati.get("nome") + " - " + dati.get("email");
        window.location.href = "mailto:dominicitommaso2@gmail.com?subject=" +
            encodeURIComponent(oggetto) + "&body=" + encodeURIComponent(corpo);
    })
}

const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}
