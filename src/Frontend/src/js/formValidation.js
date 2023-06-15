const username = document.querySelector("#username");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#password2");
const email = document.querySelector("#email");
const sendBtn = document.querySelector(".send");
const clearBtn = document.querySelector(".clear");
const closeBtn = document.querySelector(".close");
const popup = document.querySelector(".popup");
const terms = document.getElementById("terms");
const checkTerms = document.querySelector(".checkTerms");
const url = "http://localhost:8090";

const showErr = (input, msg) => {
	const formBox = input.parentElement;
	const errorMsg = formBox.querySelector(".error-text");
	formBox.classList.add("error");
	errorMsg.textContent = msg;
};

const clearErr = (input) => {
	const formBox = input.parentElement;
	formBox.classList.remove("error");
};

const checkForm = (input) => {
	input.forEach((el) => {
		if (el.value.trim() === "") {
			showErr(el, "Enter " + el.placeholder.toLowerCase() + " !");
		} else {
			clearErr(el);
			if (el === username) {
				checkLenght(username, 3);
			} else if (el === password) {
				checkLenght(password, 8);
			} else if (el === confirmPassword) {
				checkPassword(password, confirmPassword);
				checkLenght(password, 8);
			} else if (el === email) {
				checkEmail(email);
			}
		}
	});
	if (!terms.checked) {
		showErr(checkTerms, "Confirm terms and conditions!");
	} else {
		clearErr(checkTerms);
	}
};

const checkLenght = (input, min) => {
	if (input.value.length < min) {
		showErr(
			input,
			`${input.placeholder} must contain at least ${min} characters!`
		);
	}
};

const checkPassword = (input1, input2) => {
	if (input1.value !== input2.value) {
		showErr(input2, "Passwords are different!");
	}
};

const checkErrors = () => {
	const allInputs = document.querySelectorAll(".form-box");
	let errorCount = 0;
	allInputs.forEach((element) => {
		if (element.classList.contains("error")) {
			errorCount++;
		}
	});

	if (errorCount === 0) {
		const userData = {
			login: username.value,
			email: email.value,
			password: password.value,
		};
		registerUser(userData);
	}
};

const checkEmail = (input) => {
	const re =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1-3}\.[0-9]{1-3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
	if (re.test(input.value)) {
		clearErr(email);
	} else {
		showErr(input, "Invalid email!");
	}
};

const registerUser = (userData) => {
	fetch(`${url}/user`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(userData),
	})
		.then((response) => {
			if (response.ok) {
				popup.classList.add("show-popup");
			} else {
				popup.querySelector("p").textContent = "User exist. Log in!";
				popup.classList.add("show-popup");
			}
		})
		.catch(() => {
			popup.querySelector("p").textContent = "Registration failed";
			popup.classList.add("show-popup");
		});
};

clearBtn.addEventListener("click", (e) => {
	e.preventDefault();
	const arr = [username, password, confirmPassword, email, checkTerms];
	arr.forEach((element) => {
		element.value = "";
		clearErr(element);
	});
});

sendBtn.addEventListener("click", (e) => {
	e.preventDefault();
	checkForm([username, password, confirmPassword, email]);

	checkErrors();
});

popup.querySelector("button").addEventListener("click", function () {
	popup.classList.remove("show-popup");
});
