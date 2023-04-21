const navElem = document.querySelector(".nav_navigation-list-elements");
const navItems = document.querySelectorAll(".element");
const burgerButton = document.querySelector(".burgerButton");

burgerButton.addEventListener("click", () => {
	navElem.classList.add("navIsActive");
});

navElem.addEventListener("click", () => {
	navElem.classList.remove("navIsActive");
});

navItems.forEach((item) => {
	item.addEventListener("click", () => {
		navElem.classList.remove("navIsActive");
	});
});
