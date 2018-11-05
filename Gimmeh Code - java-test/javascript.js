document.addEventListener("DOMContentLoaded", getJSON);

let events = [];
let postTemplate = document.querySelector("[data-template]");
let postContainer = document.querySelector("[data-container]");

async function getJSON() {

	let musicJson = await fetch("http://ceciliewig.com/kea/07-cms/huset_kbh/wordpress/wp-json/wp/v2/musikevents");
	let musicev = await musicJson.json();

	musicev.forEach(event => {

		events.push(event);
	});


	let filmJson = await fetch("http://ceciliewig.com/kea/07-cms/huset_kbh/wordpress/wp-json/wp/v2/filmevents");
	let filmev = await filmJson.json();

	filmev.forEach(event => {

		events.push(event);
	});

	let ordJson = await fetch("http://ceciliewig.com/kea/07-cms/huset_kbh/wordpress/wp-json/wp/v2/ordevents");
	let ordev = await ordJson.json();

	ordev.forEach(event => {

		events.push(event);
	});


	let scenekunstJson = await fetch("http://ceciliewig.com/kea/07-cms/huset_kbh/wordpress/wp-json/wp/v2/scenekunst");
	let scenekunstev = await scenekunstJson.json();

	scenekunstev.forEach(event => {

		events.push(event);
	});

	let andetJson = await fetch("http://ceciliewig.com/kea/07-cms/huset_kbh/wordpress/wp-json/wp/v2/andet");
	let andetev = await andetJson.json();

	andetev.forEach(event => {

		events.push(event);

	});


	visPosts();
}

function visPosts() {

	console.log(events);

	events.forEach(event => {
		let klon = postTemplate.cloneNode(true).content;
		klon.querySelector("[data-title]").textContent = event.title.rendered;
		klon.querySelector("[data-text]").innerHTML = event.content.rendered;
		klon.querySelector("[data-text]").textContent = "Entre: " + event.acf.pris + " " + "kr";
		klon.querySelector("[data-img]").setAttribute("src", event.acf.billede);
		klon.querySelector("[data-dato]").textContent = event.acf.dato;
		klon.querySelector("[data-dato]").textContent = "Tidspunkt: " + event.acf.tid;
		klon.querySelector("[data-sted]").textContent = "Sted: " + event.acf.sted;
		klon.querySelector("[data-genre]").textContent = "Genre: " + event.acf.genre;

		postContainer.appendChild(klon);
	})
}



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
