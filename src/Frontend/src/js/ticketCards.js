const ticketArrFromURL = urlParams.get("userTickets");
const ticketArr = atob(ticketArrFromURL);
const playerName = sessionStorage.getItem("username");
const tickets = ticketArr.split(",");
const popupCards = document.querySelectorAll(".popupCard");
const popupCardsAfterClick = document.querySelectorAll(".popupCardAfterClick");
const spanCounter = document.querySelector(".counter");
const spanCounterAfterClick = document.querySelector(".counterAfterClick");
const sendChoosenCardBtn = document.querySelector(".sendDestinationCards");
const sendChoosenCardBtnAfterClick = document.querySelector(
	".sendDestinationCardsAfterClick"
);
const yourDestinationTickets = document.querySelector(
	".yourDestinationTickets"
);
const popupYourTicketCardsBox = document.querySelector(
	".popupYourTicketCardsBox"
);
const yourTickets = document.querySelector(".destinationTicket");
const closeBtnTickets = document.querySelector(".closeBtnTickets");
const matchDestination = document.querySelector(".matchDestination");
const destinationPopup = document.querySelector(".destinationPopup");
const destinationPopupAfterClick = document.querySelector(
	".destinationPopupAfterClick"
);

let userTicketsArr = [];
let choosenCards = [];
let choosenCardsAfterClick = [];

matchDestination.addEventListener("click", () => {
	if (destinationCardsQuantity.textContent == "x0") {
		setPopup("No more destination cards");
		showPopup();
	} else {
		destinationPopupAfterClick.style.opacity = 1;
		destinationPopupAfterClick.style.zIndex = 100;
		alertPopupBtn.addEventListener("click", removePopup);
	}
});

async function setUsersTickets() {
	const players = await getPlayers(gameId);
	for (let i = 0; i < players.length; i++) {
		const player = players[i];
		const start = i * 3;
		const end = start + 3;

		const playerPlaces = tickets.slice(start, end);

		if (player.login === playerName) {
			userTicketsArr = playerPlaces;
			for (let i = 0; i < popupCards.length; i++) {
				popupCards[i].src = `../dist/img/${userTicketsArr[i]}.png`;
			}
		}
	}
}

function drawDestinationCards(tickets) {
	for (let i = 0; i < 3; i++) {
		popupCardsAfterClick[i].src = `../dist/img/${tickets[i]}.png`;
	}
}

setUsersTickets().then(() => {
	console.log(userTicketsArr);
});

function chooseCard(card, choosenCards, number, spanCounter, btn) {
	const imgUrl = card.src;
	const fragment = imgUrl.split("/").slice(-1)[0].split(".")[0];
	if (choosenCards.includes(fragment)) {
		choosenCards.splice(choosenCards.indexOf(fragment), 1);
		card.classList.remove("selectedCard");
		if (choosenCards.length < number) {
			spanCounter.textContent++;
		}
	} else {
		choosenCards.push(fragment);
		card.classList.add("selectedCard");
		if (choosenCards.length <= number) {
			spanCounter.textContent--;
		}
	}

	if (spanCounter.textContent == 0) {
		spanCounter.textContent = 0;
		btn.style.display = "block";
	} else {
		btn.style.display = "none";
	}
}

popupCards.forEach((card) => {
	card.addEventListener("click", function () {
		chooseCard(card, choosenCards, 2, spanCounter, sendChoosenCardBtn);
	});
});

popupCardsAfterClick.forEach((card) => {
	card.addEventListener("click", function () {
		chooseCard(
			card,
			choosenCardsAfterClick,
			1,
			spanCounterAfterClick,
			sendChoosenCardBtnAfterClick
		);
	});
});

const sendChoosenCards = async (choosenCards, destinationPopup) => {
	try {
		const token = sessionStorage.getItem("token");
		const response = await fetch(url + "/game/turn/drawTicket", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				player: playerName,
				gameId: gameId,
				saved: choosenCards,
			}),
		});

		if (response.ok) {
			const game = await response.json();
			destinationPopup.style.opacity = 0;
			destinationPopup.style.zIndex = -100;
		} else {
			console.error("Error while sending request");
		}
	} catch (error) {
		console.error("Error while sending request:", error);
	}
};

sendChoosenCardBtn.addEventListener("click", () => {
	sendChoosenCards(choosenCards, destinationPopup);
});
sendChoosenCardBtnAfterClick.addEventListener("click", () => {
	sendChoosenCards(choosenCardsAfterClick, destinationPopupAfterClick);
	for (let i = 0; i < 3; i++) {
		popupCardsAfterClick[i].classList.remove("selectedCard");
	}
});

yourTickets.addEventListener("click", () => {
	yourDestinationTickets.style.display = "flex";
	getPlayers(gameId)
		.then((players) => {
			popupYourTicketCardsBox.innerHTML = "";
			players.forEach((player) => {
				if (player.login === playerName) {
					player.ticketCards.forEach((card) => {
						const img = document.createElement("img");
						img.src = `../dist/img/${card}.png`;
						img.alt = "destination card";
						img.classList.add("popupYourTicketCard");
						popupYourTicketCardsBox.appendChild(img);
					});
				}
			});
		})
		.catch((error) => {
			console.error(error);
		});
});

closeBtnTickets.addEventListener("click", () => {
	yourDestinationTickets.style.display = "none";
});
