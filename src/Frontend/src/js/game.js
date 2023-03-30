const urlParams = new URLSearchParams(window.location.search);
const gameId = urlParams.get("gameId");
const url = "http://localhost:8090/game";
const container = document.querySelector("body");
async function getPlayers(gameId) {
	try {
		const response = await fetch(`${url}/${gameId}/players`);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		const players = await response.json();
		players.forEach((player) => {
			const newPlayerName = document.createElement("p");
			newPlayerName.classList.add("playerName");
			newPlayerName.innerHTML = `<p class="playerName">${player.login}</p>`;
			container.appendChild(newPlayerName);
		});
		return players;
	} catch (error) {
		console.error("Error:", error);
	}
}

getPlayers(gameId);
