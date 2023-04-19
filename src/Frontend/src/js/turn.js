let turnArr = [];
const firstPlayerFromURL = urlParams.get("firstTurn");
const firstPlayer = atob(firstPlayerFromURL);
const turnPopup = document.querySelector(".turnPopup");

turnArr.push(firstPlayer);

console.log(turnArr);

const turn = () => {
	if (playerName !== turnArr[0]) {
		turnPopup.style.display = "flex";
	} else {
		turnPopup.style.display = "none";
	}
};

turn();
