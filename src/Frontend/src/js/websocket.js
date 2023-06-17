let stompClient;
const destinationCardsQuantity = document.querySelector(
	".destinationCardsQuantityAll"
);
const trainCardsQuantity = document.querySelector(".trainCardsQuantityAll");
const token = sessionStorage.getItem("token");
function connectToSocket(gameId) {
	console.log("connecting to the game");
	let socket = new SockJS(url + "/join", undefined, { crossDomain: true });
	stompClient = Stomp.over(socket);
	stompClient.connect({ Authorization: `Bearer ${token}` }, function (frame) {
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
	stompClient.connect({ Authorization: `Bearer ${token}` }, function (frame) {
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
				currentBoard = data.board;
				turnArr = data.playersOrder;
				turn();
				drawDestinationCards(tickets);
				loadGame();
				setTrainsOnBoard(data.board);
			},
			function (error) {
				console.log("Error: " + error);
			}
		);
	});
}
