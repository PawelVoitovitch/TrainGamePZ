const createButton = document.querySelector(".createGame");
const popupAlert = document.querySelector(".alertPopup");
const popupText = document.querySelector(".alertPopup_text");
const popupBtn = document.querySelector(".alertPopup_btn");
const url = "http://localhost:8090";

function showAlert(message) {
	popupText.textContent = message;
	popupBtn.addEventListener("click", () => {
		popupAlert.classList.remove("showAlertPopup");
	});
	popupAlert.classList.add("showAlertPopup");
}

function hideAlert() {
	popupAlert.classList.remove("showAlertPopup");
}

async function createGameButtonHandler(event) {
	event.preventDefault();
	const name = sessionStorage.getItem("username");
	const token = sessionStorage.getItem("token");

	if (!token) {
		showAlert("You must log in");
		return;
	}

	try {
		const response = await fetch(`${url}/game/create`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
				"Access-Control-Allow-Origin": "*",
			},
			body: name,
		});

		if (response.ok) {
			const game = await response.json();
			console.log(`Game created with ID ${game.id}`);
			popupText.textContent = "Created new game";

			popupBtn.addEventListener("click", () => {
				window.location.href = `/lobby.html?gameId=${
					game.id
				}&visibleTrains=${btoa(game.visibleTrains)}&userTickets=${btoa(
					game.ticketDeck
				)}`;
				popup.style.display = "none";
				backgroundPopup.style.display = "none";
				playerName.textContent = "";
				hideAlert();
			});
			popupAlert.classList.add("showAlertPopup");
		} else {
			showAlert("Failed to create game");
		}
	} catch (error) {
		showAlert("An error occurred");
		console.error(error);
	}
}

createButton.addEventListener("click", createGameButtonHandler);
