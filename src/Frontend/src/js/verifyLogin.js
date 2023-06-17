const isUserLoggedIn = () => {
	const token = sessionStorage.getItem("token");
	return !!token;
};

if (isUserLoggedIn()) {
	document.querySelector(".signOut").style.display = "block";
	document.querySelector(".loginEL").style.display = "none";
	document.querySelector(".registerEl").style.display = "none";
} else {
	document.querySelector(".signOut").style.display = "none";
	document.querySelector(".loginEL").style.display = "block";
	document.querySelector(".registerEl").style.display = "block";
}

document.querySelector(".signOut").addEventListener("click", () => {
	sessionStorage.removeItem("token");
	sessionStorage.removeItem("username");
	location.reload();
});
