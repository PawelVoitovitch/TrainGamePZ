const container = document.querySelector(".boxLeft_users");
const button = document.querySelector(".start_game");
const leaveBtn = document.querySelector(".leave_game");
const players1 = document.getElementById("players");
const popup = document.querySelector(".popup1");
const popupText = document.querySelector(".popupText1");
const popupButton = document.querySelector(".popupButton1");
const tableID = document.querySelector(".boxLeft_title");

const urlParams = new URLSearchParams(window.location.search);
const gameId = urlParams.get("gameId");
const inviteLink = document.getElementById("inviteLink");
const playersArr = JSON.parse(urlParams.get("players"));

const url = "http://localhost:8090/game";

tableID.textContent = gameId;
inviteLink.textContent = gameId;

playersArr.forEach((player) => {
	const newUser = document.createElement("div");
	newUser.classList.add("boxLeft_users-user");
	newUser.innerHTML = `<span class="mdi mdi-train-car-box icon ${player.playerColor}"></span><p class="text">${player.login}</p>`;
	container.appendChild(newUser);
});
