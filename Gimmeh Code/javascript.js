function openNav() {
	document.getElementById("sideNavigation").style.width = "40vw";

	console.log("Åben Menu");

}

function closeNav() {
	document.getElementById("sideNavigation").style.width = "0";

	document.getElementById("main").style.marginLeft = "0";
	console.log("Luk Menu")
}

document.querySelector("#modal_vindue").addEventListener("click", lukModal);

function visModal() {
	document.getElementById("modal_vindue").style.opacity = "1";
	document.getElementById("modal_vindue").style.pointerEvents = "auto";
	console.log("Vis Modal");
}

function lukModal() {
	document.getElementById("modal_vindue").style.opacity = "0";
	document.getElementById("modal_vindue").style.pointerEvents = "none";
	console.log("luk Modal")
}
