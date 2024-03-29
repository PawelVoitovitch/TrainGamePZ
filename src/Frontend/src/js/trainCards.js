const trainsCardsActive = document.querySelectorAll(".trainCardsActive img");
const trainsCardsArray = Array.from(trainsCardsActive);
const blindTickets = document.querySelector(".matchTickets");

let visibleTrains = [];
let availableColors = [];
let card1 = null;
let card2 = null;

const visibleTrainsFromURL = urlParams.get("visibleTrains");

visibleTrains = atob(visibleTrainsFromURL).split(",");
updateVisibleCards(visibleTrains);

function sendCardsData(data) {
	const token = sessionStorage.getItem("token");
	fetch(url + "/game/turn/drawTrains", {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response.json();
		})
		.then((data) => {
			visibleTrains = data.visibleTrains;

			if (card2 === null) {
				card1.classList.remove("selected");
				card1 = null;
			} else {
				card1.classList.remove("selected");
				card2.classList.remove("selected");
				card1 = null;
				card2 = null;
			}
		})
		.catch((error) => {
			console.error("Error sending cards data:", error);
			if (card2 === null) {
				card1.classList.remove("selected");
				card1 = null;
			} else {
				card1.classList.remove("selected");
				card2.classList.remove("selected");
				card1 = null;
				card2 = null;
			}
		});
}

function updateBoard(data) {
	updateVisibleCards(data);
}

function updateCards(card) {
	if (!card1) {
		handleFirstCard(card);
	} else if (
		!card2 &&
		!card1.getAttribute("src").includes("RAINBOW") &&
		!card.getAttribute("src").includes("RAINBOW")
	) {
		handleSecondCard(card);
	} else {
		handleSelectedCards();
	}
}

function handleFirstCard(card) {
	card1 = card;
	card1.classList.add("selected");

	if (card1.getAttribute("src").includes("RAINBOW")) {
		const data = {
			player: playerName,
			gameId: gameId,
			fromVisible: [
				card1
					.getAttribute("src")
					.match(/Train(.+)Card/)[1]
					.toUpperCase(),
			],
			blind: [],
		};

		sendCardsData(data);
		return data;
	}
}

function handleSecondCard(card) {
	card2 = card;
	card2.classList.add("selected");

	if (card1 !== card2) {
		const src1 = card1.getAttribute("src");
		const src2 = card2.getAttribute("src");

		const color1 = src1.match(/Train(.+)Card/)[1];
		const color2 = src2.match(/Train(.+)Card/)[1];

		const data = {
			player: playerName,
			gameId: gameId,
			fromVisible: [color1.toUpperCase(), color2.toUpperCase()],
			blind: [],
		};

		sendCardsData(data);
		return data;
	} else {
		card1.classList.remove("selected");
		card1 = null;
		card2.classList.remove("selected");
		card2 = null;
	}
}

function handleSelectedCards() {
	setPopup("select rainbow card first");
	showPopup();
	card1.classList.remove("selected");
	card1 = null;

	alertPopupBtn.addEventListener("click", removePopup);
}

function updateVisibleCards(arr) {
	trainsCardsArray.forEach((card, index) => {
		const color = arr[index];
		const newSrc = `../dist/img/Train${color}Card.png`;
		card.setAttribute("src", newSrc);
	});
}

trainsCardsActive.forEach((card) => {
	card.addEventListener("click", () => {
		updateCards(card);
	});
});

async function sendBlind() {
	let blind;
	const token = sessionStorage.getItem("token");
	blind = [availableColors[0], availableColors[1]];

	const data = {
		player: playerName,
		gameId: gameId,
		fromVisible: [],
		blind: blind,
	};
	const response = await fetch(url + "/game/turn/drawTrains", {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	});
	const result = await response.json();
	blind = [];
	console.log(availableColors);
}

function getRandomColor(availableColors) {
	const randomIndex = Math.floor(Math.random() * availableColors.length);
	return availableColors[randomIndex];
}

blindTickets.addEventListener("click", sendBlind);
