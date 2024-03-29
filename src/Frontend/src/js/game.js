const urlParams = new URLSearchParams(window.location.search);
const gameId = urlParams.get("gameId");
const url = "http://localhost:8090";
const container = document.querySelector("body");
const closeResultPopupIcon = document.getElementById("closeResultPopup");

async function getPlayers(gameId) {
	const token = sessionStorage.getItem("token");
	try {
		const response = await fetch(`${url}/game/${gameId}/players`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		const players = await response.json();
		return players;
	} catch (error) {
		console.error("Error:", error);
	}
}

closeResultPopupIcon.addEventListener("click", () => {
	window.location.href = "index.html";
});

connectToGameSocket(gameId);
