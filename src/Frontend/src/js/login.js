const login = document.getElementById("login");
const loginForm = document.querySelector(".main_login");
const loginEl = document.querySelector(".loginEL");
const errorLogin = document.querySelectorAll(".error-text-login");
const emailLogin = document.getElementById("emailLogin");
const passwordLogin = document.getElementById("passwordLogin");
const btnLogin = document.querySelector(".sendLogin");
const closeBtnLogin = document.querySelector(".closeBtnLogin");
const url = "http://localhost:8090";

let isOpen = false;
let errorExist = false;

login.addEventListener("click", () => {
	if (!isOpen) {
		loginForm.style.visibility = "visible";
		if (errorExist) {
			errorLogin[0].style.visibility = "visible";
			errorLogin[1].style.visibility = "visible";
		} else {
			errorLogin[0].style.visibility = "hidden";
			errorLogin[1].style.visibility = "hidden";
		}
		loginEl.classList.add("loginIsActive");
		isOpen = true;
	} else {
		loginForm.style.visibility = "hidden";
		loginEl.classList.remove("loginIsActive");
		errorLogin[0].style.visibility = "hidden";
		errorLogin[1].style.visibility = "hidden";
		isOpen = false;
	}
});

const checkFieldNotNull = (input, ind, text) => {
	if (input.value === "") {
		errorLogin[ind].textContent = text;
		errorLogin[ind].style.visibility = "visible";
	} else {
		errorLogin[ind].style.visibility = "hidden";
	}
};

const logUser = (userData) => {
	fetch(`${url}/user/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(userData),
	})
		.then((response) => response.json())
		.then((data) => {
			sessionStorage.setItem("token", data.token);
			sessionStorage.setItem("username", emailLogin.value);
			location.reload();
		})
		.catch((err) => {
			console.log(err);
		});
};

btnLogin.addEventListener("click", () => {
	checkFieldNotNull(emailLogin, 0, "Enter login");
	checkFieldNotNull(passwordLogin, 1, "Enter password");

	const errors = document.querySelectorAll(".error-text-login");
	const hasErrors = Array.from(errors).some(
		(error) => error.style.visibility === "visible"
	);

	if (!hasErrors) {
		const userData = {
			username: emailLogin.value,
			password: passwordLogin.value,
		};
		logUser(userData);
	}
});

closeBtnLogin.addEventListener("click", () => {
	loginForm.style.visibility = "hidden";
	loginEl.classList.remove("loginIsActive");
	errorLogin[0].style.visibility = "hidden";
	errorLogin[1].style.visibility = "hidden";
});
