const login = document.getElementById("login");
const loginForm = document.querySelector(".main_login");
const loginEl = document.querySelector(".loginEL");
let isOpen = false;

login.addEventListener("click", () => {
	if (!isOpen) {
		loginForm.style.visibility = "visible";
		loginEl.classList.add("loginIsActive");
		isOpen = true;
	} else {
		loginForm.style.visibility = "hidden";
		loginEl.classList.remove("loginIsActive");
		isOpen = false;
	}
});
