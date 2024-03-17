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
	if(geboortedatum===""){
		txtGeboortedatum.className="invalid";
		errGeboortedatum.innerHTML="is verplicht veld"
	}else if(!geboortedatum.match(/[1-2][0-9][0-9][0-9]-[0-1][0-9]-[0-3][0-9]/)) {
		geboortedatum.className = "invalid"
		errGeboortedatum.innerHTML = "formaat is niet jjjj-mm-dd";
	}
}
const valideerEmail = () =>{
	let txtEmailadres = document.getElementById("txtEmailadres");
	let errEmail = document.getElementById("errEmailadres");
	let email = txtEmailadres.value.trim();
	if(email===""){
		txtEmailadres.className="invalid";
		errEmail.innerHTML="is verplicht veld";
	}else if(email.indexOf("@") === -1){
		txtEmailadres.className="invalid";
		errEmail.innerHTML="geen geldig email adres";
	}
}
const valideerAantalKinderen = () =>{
	let txtAantalKinderen = document.getElementById("txtAantalKinderen");
	let errAantalKinderen = document.getElementById("errAantalkinderen");
	let aantalKinderen = txtAantalKinderen.value;
	if(!isGetal(aantalKinderen)===true){
		txtAantalKinderen.className="invalid";
		errAantalKinderen.innerHTML="is geen getal"
	}
	if(aantalKinderen<0){
		txtAantalKinderen.className="invalid";
		errAantalKinderen.innerHTML="is geen positief getal"
	}else if(aantalKinderen>99){
		txtAantalKinderen.className="invalid";
		errAantalKinderen.innerHTML="is te vruchtbaar"
	}
}
const isGetal = (tekst) => {
		return !isNaN(tekst);
	}
window.addEventListener("load", setup);