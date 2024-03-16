 	const setup = () => {
	let btnValideer=document.getElementById("btnValideer");
	btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
	valideerVoornaam();
	valideerFamilienaam();
	valideerGeboortedatum();
	valideerEmail();
	valideerAantalKinderen();
};

const valideerVoornaam = () => {
	let txtVoornaam = document.getElementById("txtVoornaam");
	let errVoornaam = document.getElementById("errVoornaam");

	let voornaam = txtVoornaam.value.trim();
	if (voornaam.length > 30) {
		txtVoornaam.className="invalid"; // invalid class instellen
		errVoornaam.innerHTML = "max. 30 karakters";
	} else {
		txtVoornaam.className=""; // alle classes verwijderen
		errVoornaam.innerHTML = "";
	}
};
const valideerFamilienaam = () => {
	let txtFamilienaam = document.getElementById("txtFamilienaam");
	let errFamilienaam = document.getElementById("errFamilienaam");

	let familienaam = txtFamilienaam.value.trim();
	if(familienaam===""){
		txtFamilienaam.className="invalid";
		errFamilienaam.innerHTML="is verplicht veld"
	}else if(familienaam.length > 50){
		txtFamilienaam.className="invalid";
		errFamilienaam.innerHTML="max. 50 karakters"
	} else {
		txtFamilienaam.className="";
		errFamilienaam.innerHTML ="";
	}
}
const valideerGeboortedatum = () =>{
	let txtGeboortedatum = document.getElementById("txtGeboortedatum");
	let errGeboortedatum = document.getElementById("errGeboortedatum");
	let geboortedatum = txtGeboortedatum.value.trim();
	if(geboortedatum===""){
		txtGeboortedatum.className="invalid";
		errGeboortedatum.innerHTML="is verplicht veld"
	}
}
const valideerEmail = () =>{
	let txtEmailadres = document.getElementById("txtEmailadres");
	let errEmail = document.getElementById("errEmailadres");
	let email = txtEmailadres.value.trim();
	if(email===""){
		txtEmailadres.className="invalid";
		errEmail.innerHTML="is verplicht veld"
	}
}
const valideerAantalKinderen = () =>{
	let txtAantalKinderen = document.getElementById("txtAantalKinderen");
	let errAantalKinderen = document.getElementById("errAantalkinderen");
	let aantalKinderen = txtAantalKinderen.value.numberValue;
	if(aantalKinderen<0){
		txtAantalKinderen.className="invalid";
		errAantalKinderen.innerHTML="is geen positief getal"
	}
	}

window.addEventListener("load", setup);