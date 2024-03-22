const setup = () => {
	let colorDemos=document.getElementsByClassName("colorDemo");
	let redSlider = document.getElementsByClassName("red");
	let greenSlider = document.getElementsByClassName("green")
	let blueSlider = document.getElementsByClassName("blue")

	// we moeten zowel op het input als het change event reageren,
	// zie http://stackoverflow.com/questions/18544890
	redSlider[0].addEventListener("change", update);
	greenSlider[0].addEventListener("change", update);
	blueSlider[0].addEventListener("change", update);

	redSlider[0].addEventListener("input", update);
	greenSlider[0].addEventListener("input", update);
	blueSlider[0].addEventListener("input", update);

	// maak het blokje rood
	colorDemos[0].style.backgroundColor="red";
}

const update = () => {
	let redSlider = document.getElementsByClassName("red");
	let greenSlider = document.getElementsByClassName("green");
	let blueSlider = document.getElementsByClassName("blue");
	let blokje = document.getElementsByClassName("colorDemo");
	let redValue=redSlider[0].value;
	let greenValue = greenSlider[0].value;
	let blueValue = blueSlider[0].value;
	console.log("de waarde van de sliders is momenteel rood : " + redValue + " groen : " + greenValue + " blauw : " + blueValue)
	blokje[0].style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`
	red.innerHTML = "Red : " + redValue;
	green.innerHTML = "Green : " + greenValue;
	blue.innerHTML = "Blue : " + blueValue;
}

// dit is de eerste regel code die uitgevoerd wordt,
// de bovenstaande functie declaraties introduceren
// enkel de functies en voeren ze niet uit natuurlijk.
//
// Onderstaande zorgt ervoor dat de setup functie wordt
// uitgevoerd zodra de DOM-tree klaar is.
window.addEventListener("load", setup);