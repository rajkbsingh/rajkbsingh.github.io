/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuButton = document.querySelector(".menu-btn");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", function () {

    navigation.classList.toggle("open");

});


/* =========================================
   CLOSE MENU AFTER CLICK
========================================= */

const navigationLinks =
    document.querySelectorAll("#navigation a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("open");

    });

});


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement =
    document.querySelector("#year");

yearElement.textContent =
    new Date().getFullYear();
