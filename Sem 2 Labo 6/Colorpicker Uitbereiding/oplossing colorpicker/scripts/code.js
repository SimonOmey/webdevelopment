const initialize = () => {
	let sliders = document.getElementsByClassName("slider");
	for (let i = 0; i < sliders.length; i++) {
		// we moeten zowel op het input als het change event reageren,
		// zie http://stackoverflow.com/questions/18544890
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}
	let saveButton = document.getElementById("save")
	saveButton.addEventListener("click",saveColor)
	update();
};

const update = () => {
	let red=document.getElementById("sldRed").value; //input always value
	let green=document.getElementById("sldGreen").value;
	let blue=document.getElementById("sldBlue").value;
	document.getElementById("lblRed").innerHTML=red;
	document.getElementById("lblGreen").innerHTML=green;// html-element innerHTML
	document.getElementById("lblBlue").innerHTML=blue;
	let swatch=document.getElementById("swatch");
	swatch.style.backgroundColor="rgb("+red+","+green+","+blue+")";
};

const saveColor = () => {
	let red=document.getElementById("sldRed").value; //input always value
	let green=document.getElementById("sldGreen").value;
	let blue=document.getElementById("sldBlue").value;
	let saves = document.getElementById("saves")
	let save = document.createElement("div")
	let verwijder = document.createElement("input")

	const geefSwatchKleur = (kleurcode) => {
		let swatch = document.querySelector(".swatch")
		swatch.style.backgroundColor = kleurcode;
	}
	const verwijderColor = (event) =>{
		let teVerwijderenKleur = event.target.parentElement
		teVerwijderenKleur.remove();
	}

	save.classList.add("swatch")
	save.classList.add("colorSaved")
	save.style.backgroundColor="rgb("+red+","+green+","+blue+")";
	saves.appendChild(save);

	save.addEventListener("click", geefSwatchKleur.bind(null, "rgb(" + red + "," + green + ", " + blue + ")"));


	verwijder.type="button"
	verwijder.value="x"
	verwijder.classList.add("delete")
	save.appendChild(verwijder)
	verwijder.addEventListener("click",verwijderColor)

}
window.addEventListener("load", initialize);