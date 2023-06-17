let turnArr = [];
const firstPlayerFromURL = urlParams.get("firstTurn");
const firstPlayer = atob(firstPlayerFromURL);
const turnPopup = document.querySelector(".turnPopup");
const turnText = document.querySelector(".tableName-name");
const showTurn = document.querySelector(".whoseTurn");

turnArr.push(firstPlayer);

const turn = () => {
	const playerName = sessionStorage.getItem("username");
	if (playerName !== turnArr[0]) {
		turnText.textContent = `Now it's the turn of: ${turnArr[0]}`;
		turnText.style.color = "gold";
		turnPopup.style.display = "flex";
		showTurn.textContent = `Now it's the turn of: ${turnArr[0]}`;
	} else {
		turnText.textContent = `Your Turn`;
		turnText.style.color = "lightGreen";
		turnPopup.style.display = "none";
		showTurn.style.display = "none";
	}
};

turn();
