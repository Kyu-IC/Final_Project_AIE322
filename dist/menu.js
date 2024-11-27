"use strict";

// Toggle the dropdown menu visibility
function toggleMenu() {
    var menu = document.getElementById("dropdownMenu");
    if (menu) {
        // Toggle visibility and opacity, no 'display' manipulation for transitions
        if (menu.style.visibility === "visible") {
            menu.style.opacity = "0";  // Fade out
            menu.style.visibility = "hidden";  // Hide the menu
        } else {
            menu.style.visibility = "visible";  // Make it visible
            menu.style.opacity = "1";  // Fade in
        }
    }
}

// Close the menu if the user clicks outside of it
document.addEventListener("click", function (event) {
    var menuIcon = document.querySelector(".menu-icon");
    var menu = document.getElementById("dropdownMenu");

    // Check if the click is outside the menu and the menu icon
    if (menu && !menuIcon.contains(event.target) && !menu.contains(event.target)) {
        menu.style.opacity = "0";  // Fade out
        menu.style.visibility = "hidden";  // Hide the menu
    }
});
