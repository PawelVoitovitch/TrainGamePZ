let stompClient;
const destinationCardsQuantity = document.querySelector(
	".destinationCardsQuantityAll"
);
const trainCardsQuantity = document.querySelector(".trainCardsQuantityAll");
const token = sessionStorage.getItem("token");

function connectToSocket(gameId) {
	let socket = new SockJS(url + "/join", undefined, {
		crossDomain: true,
	});
	stompClient = Stomp.over(socket);
	stompClient.connect({}, function (frame) {
		console.log("connected to the frame: " + frame);
		stompClient.subscribe(
			"/topic/lobby/" + gameId,
			function (response) {
				console.log("received message: " + response);
				location.reload();
			},
			function (error) {
				console.log("Error: " + error);
			}
		);
	});
}

function connectToGameSocket(gameId) {
	console.log("connecting to the game");
	let socket = new SockJS(url + "/join", undefined, {
		crossDomain: true,
	});
	stompClient = Stomp.over(socket);
	stompClient.connect({}, function (frame) {
		stompClient.subscribe(
			"/topic/game-progress/" + gameId,
			function (response) {
				const data = JSON.parse(response.body);
				updateBoard(data.visibleTrains);
				destinationCardsQuantity.textContent = `x${data.ticketDeck.length}`;
				trainCardsQuantity.textContent = `x${data.trainDeck.length}`;
				availableColors = data.trainDeck;
				tickets = data.ticketDeck;
				currentBoard = data.board;
				turnArr = data.playersOrder;
				turn();
				drawDestinationCards(tickets);
				loadGame();
				setTrainsOnBoard(data.board);
				if (data.status === "ENDED") {
					handleGameEnd(data);
				}
			},
			function (error) {
				console.log("Error: " + error);
			}
		);
	});
}

function handleGameEnd(serverResponse) {
	const resultPopup = document.querySelector(".resultPopup");
	resultPopup.style.display = "flex";
	resultPopup.style.zIndex = 100;
	const sortedPlayers = serverResponse.players.sort(
		(a, b) => b.points - a.points
	);

	sortedPlayers.forEach((player, index) => {
		const divPlayerResult = document.createElement("div");
		divPlayerResult.classList.add("divPlayerResult");

		const trophyIcon = document.createElement("span");
		trophyIcon.classList.add("mdi", "mdi-trophy");

		const playerName = document.createElement("p");
		playerName.classList.add("playerNameResult");
		playerName.textContent = player.login;

		const playerResult = document.createElement("p");
		playerResult.classList.add("playerResult");
		playerResult.textContent = player.points;

		divPlayerResult.appendChild(trophyIcon);
		divPlayerResult.appendChild(playerName);
		divPlayerResult.appendChild(playerResult);

		if (index === 0) {
			divPlayerResult.style.backgroundColor = "gold";
		} else if (index === 1) {
			divPlayerResult.style.backgroundColor = "silver";
		} else if (index === 2) {
			divPlayerResult.style.backgroundColor = "brown";
		} else if (index === 3) {
			divPlayerResult.style.backgroundColor = "green";
		}

		resultPopup.appendChild(divPlayerResult);
	});
}
