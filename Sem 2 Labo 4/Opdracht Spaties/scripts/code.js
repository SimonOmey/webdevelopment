const setup = () => {
	let button = document.getElementById("button");
    button.addEventListener('click', printZin);
}

const printZin = () =>{
    let zin = document.getElementById("input").value
    console.log(maakMetSpaties(zin))
}
const maakMetSpaties = (inputText) => {
    let zinMetSpaties ="";
    let inputZonderSpaties = inputText.replaceAll(" ","");
    for (let i = 0; i < inputText.length; i++) {
        zinMetSpaties += inputZonderSpaties.charAt(i) + " ";
    }
    zinMetSpaties.trim()
    return zinMetSpaties;
}
window.addEventListener("load", setup);