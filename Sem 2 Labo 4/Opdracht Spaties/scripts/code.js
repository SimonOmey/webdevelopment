const setup = () => {
	let button = document.getElementById("button");
    button.addEventListener('click', schrijfZin);
}

const schrijfZin = () =>{
    let zin = document.getElementById("input").value
    console.log(maakMetSpaties(zin))
}
const maakMetSpaties = (inputText) => {
    let zinMetSpaties ="";
    for (let i = 0; i < inputText.length; i++) {
        zinMetSpaties += inputText.charAt(i) + " ";
    }
    zinMetSpaties.trim()
    return zinMetSpaties;
}
window.addEventListener("load", setup);