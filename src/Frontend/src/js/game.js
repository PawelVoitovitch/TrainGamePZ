const urlParams = new URLSearchParams(window.location.search);
const gameId = urlParams.get("gameId");
const url = "http://localhost:8090/game";
const container = document.querySelector("body");
const matchDestination = document.querySelector(".matchDestination");
const destinationPopup = document.querySelector(".destinationPopup");
const closeBtn = document.querySelector(".closeBtn");
const routeBox = document.getElementById("one");

// async function getPlayers(gameId) {
// 	try {
// 		const response = await fetch(`${url}/${gameId}/players`);
// 		if (!response.ok) {
// 			throw new Error("Network response was not ok");
// 		}
// 		const players = await response.json();
// 		players.forEach((player) => {
// 			const newPlayerName = document.createElement("p");
// 			newPlayerName.classList.add("playerName");
// 			newPlayerName.innerHTML = `<p class="playerName">${player.login}</p>`;
// 			container.appendChild(newPlayerName);
// 		});
// 		return players;
// 	} catch (error) {
// 		console.error("Error:", error);
// 	}
// }

matchDestination.addEventListener("click", () => {
	destinationPopup.style.opacity = 1;
	destinationPopup.style.zIndex = 100;
});

closeBtn.addEventListener("click", () => {
	destinationPopup.style.opacity = 0;
	destinationPopup.style.zIndex = -100;
});

// getPlayers(gameId);

routeBox.addEventListener("click", () => {
	let children = routeBox.querySelectorAll("*");
	for (let i = 0; i < children.length; i++) {
		children[i].style.backgroundColor = "red";
	}
});
