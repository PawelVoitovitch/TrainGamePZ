let stompClient;
const destinationCardsQuantity = document.querySelector(
	".destinationCardsQuantityAll"
);
const trainCardsQuantity = document.querySelector(".trainCardsQuantityAll");

function connectToSocket(gameId) {
	console.log("connecting to the game");
	let socket = new SockJS(url + "/join", undefined, { crossDomain: true });
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
		console.log("connected to the frame: " + frame);
		stompClient.subscribe(
			"/topic/game-progress/" + gameId,
			function (response) {
				const data = JSON.parse(response.body);
				updateBoard(data.visibleTrains);
				destinationCardsQuantity.textContent = `x${data.ticketDeck.length}`;
				trainCardsQuantity.textContent = `x${data.trainDeck.length}`;
				availableColors = data.trainDeck;
				tickets = data.ticketDeck;
				drawDestinationCards(tickets);
				loadGame();
			},
			function (error) {
				console.log("Error: " + error);
			}
		);
	});
}
