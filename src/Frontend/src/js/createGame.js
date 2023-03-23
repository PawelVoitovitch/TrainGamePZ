const playerName = document.querySelector(".playerName");
const createButton = document.querySelector(".createGame");
const popupAlert = document.querySelector(".alertPopup");
const popupText = document.querySelector(".alertPopup_text");
const popupBtn = document.querySelector(".alertPopup_btn");
const url = "http://localhost:8090/game";

createButton.addEventListener("click", async (event) => {
	event.preventDefault();
	const name = playerName.value;

	console.log(name);
	const response = await fetch(`${url}/create`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: name,
	});
	if (response.ok) {
		const game = await response.json();
		console.log(`Game created with ID ${game.id}`);
		// window.location.href = `/lobby.html?gameId=${game.id}`;
		popupText.textContent = "Created new game";
		popupBtn.addEventListener("click", () => {
			window.location.href = `/lobby.html?gameId=${game.id}`;
		});
		popupAlert.classList.add("showAlertPopup");
	} else {
		if (name === "") {
			popupText.textContent = `Set the player's name`;
			popupBtn.addEventListener("click", () => {
				popupAlert.classList.remove("showAlertPopup");
			});
			popupAlert.classList.add("showAlertPopup");
		} else {
			popupText.textContent = "Failed to created game";
			popupBtn.addEventListener("click", () => {
				popupAlert.classList.remove("showAlertPopup");
			});
			popupAlert.classList.add("showAlertPopup");
		}
	}
});
