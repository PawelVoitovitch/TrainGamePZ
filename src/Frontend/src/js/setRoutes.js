const routeBox = document.querySelectorAll(".routeBox");
const cardBoxes = document.querySelectorAll(".cardBox");
const trainPopup = document.querySelector(".trainPopup");
const cards = document.querySelectorAll(".trainPopupCard");

let color;

let currentBoard = [];

let cardsQuantity = {};

let cardsToUse = [];

async function getPlayerColor(name) {
	const players = await getPlayers(gameId);
	const player = players.find((p) => p.login === name);
	return player.playerColor;
}

async function getColor() {
	color = await getPlayerColor();
	console.log(color);
}

async function getPlayersArr() {
	const playersArr = await getPlayers(gameId);
	return playersArr;
}

routeBox.forEach((route) => {
	route.addEventListener("click", () => {
		const routeBoxId = route.id.slice(1);
		const routeBoxNumber = parseInt(routeBoxId);
		console.log(routeBoxNumber);
		checkAvailability(routeBoxNumber, currentBoard, cardsQuantity);
	});
});

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

const placeTrain = (name, routeId, usedColor) => {
	const token = sessionStorage.getItem("token");
	const data = {
		player: name,
		gameId: gameId,
		boardPlaceId: routeId,
		used: usedColor,
	};

	fetch(url + "/game/turn/place", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(data),
	})
		.then((response) => {
			if (!response.ok) {
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

function checkAvailability(id, board, cardsQuantity) {
	const clickedField = board.find((field) => field.id === id);
	let usedColor = null;

	if (clickedField) {
		if (clickedField.color === "GREY") {
			usedColor = checkGreyFieldAvailability(clickedField, cardsQuantity);
		} else {
			usedColor = checkColorFieldAvailability(clickedField, cardsQuantity);
		}
	} else {
		console.log(`Field with id ${id} does not exist.`);
	}
	if (usedColor) {
		console.log(`Used color: ${usedColor}`);
	}
}

function checkGreyFieldAvailability(field, cardsQuantity) {
	const colors = Object.keys(cardsQuantity);
	const enoughCardsInColors = [];

	colors.forEach((color) => {
		const availableQuantity = cardsQuantity[color] || 0;
		if (availableQuantity >= field.cost) {
			if (!enoughCardsInColors.includes(color)) {
				enoughCardsInColors.push(color);
			}
		}
	});

	if (enoughCardsInColors.length === 1) {
		const usedColor = enoughCardsInColors[0];
		placeTrain(playerName, field.id, usedColor);
		console.log(`You can take the ${field.color} field!`);
		return usedColor;
	} else if (enoughCardsInColors.length > 1) {
		removeAllTrainPopupCards();
		const cardsToUse = enoughCardsInColors;
		createTrainPopupCards(cardsToUse);
		trainPopup.style.display = "flex";
		chooseCardColor(playerName, field.id);
	} else {
		setPopup("You don't have enough cards");
		showPopup();
		alertPopupBtn.addEventListener("click", removePopup);
	}
}

function checkColorFieldAvailability(field, cardsQuantity) {
	const colors = [field.color, "RAINBOW"];
	const availableQuantity = colors.map((color) => cardsQuantity[color] || 0);
	const enoughCardsInColor = availableQuantity[0] >= field.cost;
	const enoughCardsInRainbow = availableQuantity[1] >= field.cost;

	if (enoughCardsInColor) {
		const usedColor = field.color;
		placeTrain(playerName, field.id, usedColor);
		console.log(`You can take the ${field.color} field!`);
		return usedColor;
	} else if (enoughCardsInRainbow) {
		const usedColor = "RAINBOW";
		placeTrain(playerName, field.id, usedColor);
		console.log(`You can take the ${field.color} field!`);
		return usedColor;
	} else {
		setPopup("You don't have enough cards");
		showPopup();
		alertPopupBtn.addEventListener("click", removePopup);
	}
}

function createTrainPopupCards(cards) {
	const trainPopupCardsBox = document.querySelector(".trainPopupCardsBox");
	trainPopupCardsBox.classList.add("trainPopupCardsBox");

	cards.forEach((card, index) => {
		const trainPopupCard = document.createElement("img");
		trainPopupCard.classList.add("trainPopupCard");
		trainPopupCard.classList.add(`card-${index}`);
		trainPopupCard.src = `../dist/img/Train${card}Card.png`;
		trainPopupCard.alt = "karta miejsc";
		trainPopupCardsBox.appendChild(trainPopupCard);
	});

	return trainPopupCardsBox;
}

function chooseCardColor(playerName, id) {
	const cards = document.querySelectorAll(".trainPopupCard");
	let usedColor;
	cards.forEach((card) => {
		card.addEventListener("click", () => {
			const src = card.src;
			const color = src.substring(
				src.indexOf("Train") + 5,
				src.indexOf("Card")
			);
			usedColor = color;
			console.log(`Used color: ${usedColor}`);
			trainPopup.style.display = "none";
			placeTrain(playerName, id, usedColor);
		});
	});
}

function removeAllTrainPopupCards() {
	const trainPopupCardsBox = document.querySelector(".trainPopupCardsBox");
	while (trainPopupCardsBox.firstChild) {
		trainPopupCardsBox.removeChild(trainPopupCardsBox.firstChild);
	}
}

async function setTrainsOnBoard(boardData) {
	const boardElements = document.querySelectorAll(".routeBox");
	for (let i = 0; i < boardElements.length; i++) {
		const id = boardElements[i].id.substring(1);
		const number = parseInt(id);
		const boardItem = boardData.find((item) => item.id == number);
		if (boardItem.isTaken && boardItem.player) {
			const children = boardElements[i].querySelectorAll("*");

			const playerColor = await getPlayerColor(boardItem.player);

			for (let i = 0; i < children.length; i++) {
				children[
					i
				].style.backgroundImage = `url('../dist/img/${playerColor}.png')`;
				children[i].style.pointerEvents = "none";
			}
		}
	}
}
