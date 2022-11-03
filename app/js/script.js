const hamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

hamburger.addEventListener("click", () => {
    console.log("open hamburger");

    if (header.classList.contains("open")) {
        // Close Hamburger Menu
        body.classList.remove("noscroll");
        header.classList.remove("open");
        fadeElems.forEach((e) => {
            e.classList.add("fade-out");
            e.classList.remove("fade-in");
        });
        overlay.classList.remove("fade-in");
        overlay.classList.add("fade-out");
    } else {
        // Open Hamburger Menu
        body.classList.add("noscroll");
        header.classList.add("open");
        fadeElems.forEach((e) => {
            e.classList.remove("fade-out");
            e.classList.add("fade-in");
        });
    }
});
