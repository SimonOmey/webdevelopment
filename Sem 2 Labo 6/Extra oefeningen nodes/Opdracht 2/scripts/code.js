const setup = () => {
	let lijst = document.querySelectorAll("li")
    for (let i = 0; i < lijst.length; i++) {
        lijst[i].classList.add("listitem")
    }
    let div = document.querySelector("div")
    let profielfoto = document.createElement("img")
    profielfoto.setAttribute("src","images/Github.png" )
    div.appendChild(profielfoto);
}

window.addEventListener("load", setup);