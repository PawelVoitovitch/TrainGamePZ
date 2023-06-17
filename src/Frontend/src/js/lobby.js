const container = document.querySelector(".boxLeft_users");
const button = document.querySelector(".start_game");
const popup = document.querySelector(".alertPopup");
const popupText = document.querySelector(".alertPopup_text");
const popupButton = document.querySelector(".alertPopup_btn");
const tableID = document.querySelector(".boxLeft_title");
const urlParams = new URLSearchParams(window.location.search);
const ticketArr = urlParams.get("userTickets");
const gameId = urlParams.get("gameId");
const inviteLink = document.getElementById("inviteLink");
const name = urlParams.get("playerName");
const visibleTrains = urlParams.get("visibleTrains");
const url = "http://localhost:8090";
let firstUser;
let firstUserText;
const token = sessionStorage.getItem("token");

setTimeout(() => {
	firstUser = document.querySelector(
		".boxLeft_users .boxLeft_users-user:first-child"
	);
	firstUserText = firstUser.querySelector(".text").textContent;
}, 1000);

tableID.textContent = `Game ID: ${gameId}`;
inviteLink.textContent = gameId;

async function getPlayers(gameId) {
	try {
		const response = await fetch(`${url}/game/${gameId}/players`, {
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
		});
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		const players = await response.json();
		players.forEach((player) => {
			const newUser = document.createElement("div");
			newUser.classList.add("boxLeft_users-user");
			newUser.innerHTML = `<span class="mdi mdi-train-car-box icon ${player.playerColor}-icon"></span><p class="text">${player.login}</p>`;
			container.appendChild(newUser);
		});
		console.log(players);
		if (players.length === 4) {
			button.classList.add("start");
			button.addEventListener("click", () => {
				window.location.href = `/game.html?gameId=${gameId}&playerName=${name}&visibleTrains=${visibleTrains}&userTickets=${ticketArr}&firstTurn=${btoa(
					firstUserText
				)}`;
			});
		} else if (players.length < 4) {
			button.addEventListener("click", () => {
				popup.classList.add("showAlertPopup");
				popupText.textContent = "Not enough players";
				popupButton.addEventListener("click", () => {
					popup.classList.remove("showAlertPopup");
				});
			});
		}
		connectToSocket(gameId);
		return players;
	} catch (error) {
		console.error("Error:", error);
	}
}

getPlayers(gameId);
