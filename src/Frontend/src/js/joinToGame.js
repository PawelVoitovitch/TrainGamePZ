const playerNameInput = document.getElementById("playerNameJoin");
const gameIdInput = document.getElementById("inviteLink");
const btnJoin = document.querySelector(".joinToGame");

btnJoin.addEventListener("click", async (event) => {
	event.preventDefault();
	let playerName = sessionStorage.getItem("username");
	let gameId = gameIdInput.value;
	console.log(playerName);
	console.log(gameId);

	if (gameId === "" && playerName === "") {
		popupText.textContent = `Set the game ID and player name`;
		popupText.style.fontSize = "1.5rem";
		popupBtn.addEventListener("click", () => {
			popupAlert.classList.remove("showAlertPopup");
		});
		popupAlert.classList.add("showAlertPopup");
	} else if (playerName === "" && gameId !== "") {
		popupText.textContent = `Set the player name`;
		popupBtn.addEventListener("click", () => {
			popupAlert.classList.remove("showAlertPopup");
		});
		popupAlert.classList.add("showAlertPopup");
	} else if (gameId === "" && playerName !== "") {
		popupText.textContent = `Set the game ID`;
		popupBtn.addEventListener("click", () => {
			popupAlert.classList.remove("showAlertPopup");
		});
		popupAlert.classList.add("showAlertPopup");
	} else {
		const token = sessionStorage.getItem("token");
		const response = await fetch(`${url}/game/join`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
				"Access-Control-Allow-Origin": "*",
			},
			body: JSON.stringify({
				player: playerName,
				gameId: gameId,
			}),
		});
		if (response.ok) {
			const game = await response.json();
			console.log(`Dołączyłeś do gry ${game.id} jako ${playerName}`);
			popupText.textContent = "Joined to game";

			popupBtn.addEventListener("click", () => {
				window.location.href = `/lobby.html?gameId=${game.id}&playerName=${btoa(
					playerName
				)}&visibleTrains=${btoa(game.visibleTrains)}&userTickets=${btoa(
					game.ticketDeck
				)}`;
				hidePopup();
				popupAlert.classList.remove("showAlertPopup");
			});
			popupAlert.classList.add("showAlertPopup");
		} else if (response.status === 409) {
			popupText.textContent = `Game full`;
			popupBtn.addEventListener("click", () => {
				popupAlert.classList.remove("showAlertPopup");
			});
			popupAlert.classList.add("showAlertPopup");
		} else {
			popupText.textContent = "Incorrect game id";
			popupBtn.addEventListener("click", () => {
				popupAlert.classList.remove("showAlertPopup");
				gameIdInput.value = "";
			});
			popupAlert.classList.add("showAlertPopup");
		}
	}
});
