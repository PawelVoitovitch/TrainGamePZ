const urlParams = new URLSearchParams(window.location.search);
const gameId = urlParams.get("gameId");
const url = "http://localhost:8090";
const container = document.querySelector("body");
const matchDestination = document.querySelector(".matchDestination");
const destinationPopup = document.querySelector(".destinationPopup");
const destinationPopupAfterClick = document.querySelector(
	".destinationPopupAfterClick"
);

const tableName = document.querySelector(".tableName-name");

async function getPlayers(gameId) {
	try {
		const response = await fetch(`${url}/game/${gameId}/players`);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		const players = await response.json();
		return players;
	} catch (error) {
		console.error("Error:", error);
	}
}

tableName.textContent = `Game ID: ${gameId}`;

matchDestination.addEventListener("click", () => {
	destinationPopupAfterClick.style.opacity = 1;
	destinationPopupAfterClick.style.zIndex = 100;
});

connectToGameSocket(gameId);
