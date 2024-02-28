const setup = () => {
	let pbelangrijk = document.getElementsByClassName("belangrijk")
    let i ;
    for (i=0; i<pbelangrijk.length; i++){
        pbelangrijk[i].classList.add("opvallend")
    }
}

window.addEventListener("load", setup);