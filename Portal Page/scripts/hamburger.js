const hamburger = document.querySelector(".navbar");
const navMenu = document.querySelectorAll(".nav-link");
// menuitems will be a Node List of the list items

hamburger.addEventListener("click", () => {navMenu.forEach((item) => item.classList.toggle("open"));
	hamburger.classList.toggle("close");
});
