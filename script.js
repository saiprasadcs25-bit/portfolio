// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("show");

    });

}


// ===============================
// CLOSE MENU AFTER CLICK
// ===============================

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        if (navLinks) {
            navLinks.classList.remove("show");
        }

    });

});


// ===============================
// CURRENT YEAR
// ===============================

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}