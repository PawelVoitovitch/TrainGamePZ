const playerName = document.querySelector(".playerName");
const createButton = document.querySelector(".createGame");
const popupAlert = document.querySelector(".alertPopup");
const popupText = document.querySelector(".alertPopup_text");
const popupBtn = document.querySelector(".alertPopup_btn");
const url = "http://localhost:8090";

createButton.addEventListener("click", async (event) => {
	event.preventDefault();
	const name = sessionStorage.getItem("username");
	const token = sessionStorage.getItem("token");

	if (!token) {
		popupText.textContent = "You must log in";
		popupBtn.addEventListener("click", () => {
			popupAlert.classList.remove("showAlertPopup");
		});
		popupAlert.classList.add("showAlertPopup");
		return;
	}

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
			window.location.href = `/lobby.html?gameId=${game.id}&playerName=${btoa(
				name
			)}&visibleTrains=${btoa(game.visibleTrains)}&userTickets=${btoa(
				game.ticketDeck
			)}`;
			popup.style.display = "none";
			backgroundPopup.style.display = "none";
			playerName.textContent = "";
			popupAlert.classList.remove("showAlertPopup");
		});
		popupAlert.classList.add("showAlertPopup");
	} else {
		popupText.textContent = "Failed to create game";
		popupBtn.addEventListener("click", () => {
			popupAlert.classList.remove("showAlertPopup");
		});
		popupAlert.classList.add("showAlertPopup");
	}
});
