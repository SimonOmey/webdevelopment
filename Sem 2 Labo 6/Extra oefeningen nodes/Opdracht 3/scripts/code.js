const setup = () => {
    let button = document.getElementById("button")
    button.addEventListener("click", voegPToe)
}
const voegPToe = () =>{
    let div = document.querySelector("div")
    let newP = document.createElement("p")
    newP.textContent = "Extra tekst in div"
    div.appendChild(newP)
}

window.addEventListener("load", setup);