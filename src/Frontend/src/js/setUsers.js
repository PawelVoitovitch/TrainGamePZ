const rivalsSection = document.querySelector(".rivalsPoint");
const oponentsName = document.querySelectorAll(".oponentName");
const yourName = document.querySelector(".yourName");
const playerNameFromURL = urlParams.get("playerName");
const playerName = atob(playerNameFromURL);
const trainsQuantity = document.querySelectorAll(".oponentsTrainsQuantity");
const destinationQuantity = document.querySelectorAll(".destinationQuantity");
const trainCardQuantity = document.querySelectorAll(".trainCardQuantity");
const oponentPoints = document.querySelectorAll(".oponentPoints");
const playerPoints = document.querySelector(".points");
const playerTrains = document.querySelector(".trainsQuantity");
const playersBox = document.querySelectorAll(".playersBox");
const myBox = document.querySelector(".myBox");
const trainsCard = document.querySelectorAll(".cardsQuantity");

yourName.textContent = playerName;

const trainCards = [
	"BLUE",
	"BLACK",
	"GREEN",
	"ORANGE",
	"PINK",
	"RAINBOW",
	"RED",
	"WHITE",
	"YELLOW",
];

function setOponentData(oponent, idx) {
	oponentsName[idx].textContent = oponent.login;
	trainsQuantity[idx].textContent = oponent.trains;
	destinationQuantity[idx].textContent = oponent.ticketCards.length;
	trainCardQuantity[idx].textContent = oponent.trainCards.length;
	oponentPoints[idx].textContent = oponent.points;
	playersBox[idx].classList.add(oponent.playerColor);
}

function setMyData(oponent) {
	playerPoints.textContent = oponent.points;
	playerTrains.textContent = oponent.trains;
	myBox.classList.add(oponent.playerColor);

	const cardCounts = oponent.trainCards.reduce((counts, color) => {
		if (!counts[color]) {
			counts[color] = 0;
		}
		counts[color]++;
		return counts;
	}, {});

	trainCards.forEach((color, index) => {
		const quantity = cardCounts[color] || 0;
		const cardQuantity = trainsCard[index];
		cardQuantity.textContent = quantity;
		cardsQuantity[color] = quantity;
	});
}

async function loadGame() {
	const oponents = await getPlayers(gameId);
	let idx = 0;
	oponents.forEach((oponent) => {
		if (oponent.login !== playerName) {
			setOponentData(oponent, idx);
			idx++;
		} else {
			setMyData(oponent);
		}
	});
}

loadGame();
