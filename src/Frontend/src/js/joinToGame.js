const playerNameInput = document.getElementById("playerNameJoin");
const gameIdInput = document.getElementById("inviteLink");
const btnJoin = document.querySelector(".joinToGame");

btnJoin.addEventListener("click", async (event) => {
	event.preventDefault();
	const playerName = playerNameInput.value;
	const gameId = gameIdInput.value;
	console.log(playerName);
	console.log(gameId);
	const response = await fetch(`${url}/join`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
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
			window.location.href = `/lobby.html?gameId=${
				game.id
			}&players=${JSON.stringify(game.players)}`;
		});
		popupAlert.classList.add("showAlertPopup");
	} else {
		if (gameId === "" && playerName === "") {
			popupText.textContent = `Set the game's ID and player's name`;
			popupText.style.fontSize = "1.5rem";
			popupBtn.addEventListener("click", () => {
				popupAlert.classList.remove("showAlertPopup");
			});
			popupAlert.classList.add("showAlertPopup");
		} else if (playerName === "") {
			popupText.textContent = `Set the player's name`;
			popupBtn.addEventListener("click", () => {
				popupAlert.classList.remove("showAlertPopup");
				gameIdInput.value = "";
			});
			popupAlert.classList.add("showAlertPopup");
		} else if (gameId === "") {
			popupText.textContent = `Set the game's ID`;
			popupBtn.addEventListener("click", () => {
				popupAlert.classList.remove("showAlertPopup");
				playerNameInput.value = "";
			});
			popupAlert.classList.add("showAlertPopup");
		} else {
			popupText.textContent = "Incorrect game id";
			popupBtn.addEventListener("click", () => {
				popupAlert.classList.remove("showAlertPopup");
				gameIdInput.value = "";
				playerNameInput.value = "";
			});
			popupAlert.classList.add("showAlertPopup");
		}
	}
});
