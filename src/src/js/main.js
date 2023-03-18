const login = document.getElementById("login");
const loginForm = document.querySelector(".main_login");
let isOpen = false;

login.addEventListener("click", () => {
	if (!isOpen) {
		loginForm.style.visibility = "visible";

		isOpen = true;
	} else {
		loginForm.style.visibility = "hidden";

		isOpen = false;
	}
});
