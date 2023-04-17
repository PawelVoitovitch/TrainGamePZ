const routeBox = document.querySelectorAll(".routeBox");
const popup = document.querySelector(".alertPopup");
const popupText = document.querySelector(".alertPopup_text");
const popupBtn = document.querySelector(".alertPopup_btn");
let color;
let playersArr1 = [];
async function getPlayerColor() {
	const players = await getPlayers(gameId);
	const player = players.find((p) => p.login === playerName);
	return player.playerColor;
}

async function getColor() {
	color = await getPlayerColor();
	console.log(color);
}

async function getPlayersArr() {
	const playersArr = await getPlayers(gameId);
	// console.log(playersArr);
	return playersArr;
}

playersArr1 = getPlayersArr();

console.log(playersArr1);

getColor();

console.log(playerName);
console.log(gameId);

routeBox.forEach((route) => {
	route.addEventListener("click", () => {
		// const children = route.querySelectorAll("*");
		const routeBoxId = route.id.slice(1);
		const routeBoxNumber = parseInt(routeBoxId);
		console.log(routeBoxNumber);
		placeTrain(playerName, routeBoxNumber);
		// for (let i = 0; i < children.length; i++) {
		// 	children[i].style.backgroundImage = `url('../dist/img/${color}.png')`;
		// }
	});
});

// setRoutes();

function setTrainColor(routeData, userLogin, userColor) {
	for (let i = 0; i < routeData.trains.length; i++) {
		if (
			routeData.trains[i].isTaken &&
			routeData.trains[i].userLogin === userLogin
		) {
			routeData.trains[i].color = userColor;
		}
	}
	return routeData;
}

const placeTrain = (name, routeId) => {
	const data = {
		player: name,
		gameId: gameId,
		boardPlaceId: routeId,
		used: "RAINBOW",
	};

	fetch(url + "/game/turn/place", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	})
		.then((response) => {
			if (!response.ok) {
				// throw new Error("Network response was not ok");
				if (response.status === 403) {
					popupText.textContent = `Not your turn`;
					popupBtn.addEventListener("click", () => {
						popup.classList.remove("showAlertPopup");
					});
					popup.classList.add("showAlertPopup");
				}
			}
			return response.json();
		})
		.then((game) => {
			console.log(game);
		})
		.catch((error) => {
			console.error("There was a problem with the fetch operation:", error);
		});
};


