const joinLobby = document.querySelector(".joinLobby");
const joinToGame = document.querySelector(".joinToGame");
const backgroundPopup = document.querySelector(".backgroundPopup");
const popup = document.querySelector(".popup");

const showPopup = () => {
	backgroundPopup.style.display = "block";
	popup.style.display = "flex";
};

const hidePopup = () => {
	backgroundPopup.style.display = "none";
	popup.style.display = "none";
};

joinLobby.addEventListener("click", showPopup);
joinToGame.addEventListener("click", hidePopup);
