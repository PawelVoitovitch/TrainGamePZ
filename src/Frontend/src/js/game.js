const urlParams = new URLSearchParams(window.location.search);
const gameId = urlParams.get("gameId");
const url = "http://localhost:8090";
const container = document.querySelector("body");
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

connectToGameSocket(gameId);
