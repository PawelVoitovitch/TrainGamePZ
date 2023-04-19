const alertPopup = document.querySelector(".alertPopup");
const alertPopupText = document.querySelector(".alertPopup_text");

const showPopup = () => {
	alertPopup.classList.add("showAlertPopup");
};

const removePopup = () => {
	alertPopup.classList.remove("showAlertPopup");
};

const setPopup = (text) => {
	alertPopupText.textContent = text;
};


