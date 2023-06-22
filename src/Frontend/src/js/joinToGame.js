const gameIdInput = document.getElementById("inviteLink");
const btnJoin = document.querySelector(".joinToGame");

btnJoin.addEventListener("click", async (event) => {
	event.preventDefault();
	const playerName = sessionStorage.getItem("username");
	const gameId = gameIdInput.value;
	const token = sessionStorage.getItem("token");

	if (!token) {
		displayPopup("You must log in", "/createGame.html");
	} else if (gameId === "") {
		displayPopup("Set the game ID");
	} else {
		const response = await joinGame(token, playerName, gameId);
		if (response.ok) {
			const game = await response.json();
			displayPopup(
				"Joined to game",
				`/lobby.html?gameId=${game.id}&visibleTrains=${btoa(
					game.visibleTrains
				)}&userTickets=${btoa(game.ticketDeck)}`
			);
		} else if (response.status === 409) {
			displayPopup("Game full");
		} else {
			displayPopup("Incorrect game ID");
			gameIdInput.value = "";
		}
	}
});

function displayPopup(message, redirectUrl) {
	popupText.textContent = message;
	popupText.style.fontSize = "1.5rem";
	if (redirectUrl) {
		popupBtn.addEventListener("click", () => {
			window.location.href = redirectUrl;
			hidePopup();
			popupAlert.classList.remove("showAlertPopup");
		});
	} else {
		popupBtn.addEventListener("click", () => {
			popupAlert.classList.remove("showAlertPopup");
		});
	}
	popupAlert.classList.add("showAlertPopup");
}

async function joinGame(token, playerName, gameId) {
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
	return response;
}
