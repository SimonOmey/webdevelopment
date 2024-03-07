const setup = () => {
	let button = document.getElementById("button")
    button.addEventListener('click',berekenAn)
}

const berekenAn = () =>{
    let input = document.getElementById("input").value
    input = input.toLowerCase();
    let aantal = document.getElementById("aantal")
    let index = 0
    let aantalKeerAn = 0

    while(input.indexOf("an",index)!== -1){
        index = input.indexOf("an", index)+1;
        aantalKeerAn++;
    }

    aantal.textContent = " = " + aantalKeerAn + " keer";
}

window.addEventListener("load", setup);