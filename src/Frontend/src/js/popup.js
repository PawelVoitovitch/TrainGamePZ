const joinLobby = document.querySelector(".joinLobby");
const joinToGame = document.querySelector(".joinToGame");
const backgroundPopup = document.querySelector(".backgroundPopup");
const popup = document.querySelector(".popup");
const close = document.querySelector(".closeBtn");

const showPopup = () => {
	backgroundPopup.style.display = "block";
	popup.style.display = "flex";
};

const hidePopup = () => {
	backgroundPopup.style.display = "none";
	popup.style.display = "none";
	gameIdInput.value = "";
	playerNameInput.value = "";
};

joinLobby.addEventListener("click", showPopup);
close.addEventListener("click", hidePopup);
