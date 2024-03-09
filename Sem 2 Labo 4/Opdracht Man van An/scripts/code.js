const setup = () => {
	let button = document.getElementById("button")
    button.addEventListener('click',berekenAn)
    let button2 = document.getElementById("button2")
    button2.addEventListener('click',berekenAn2)
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

const berekenAn2 = () =>{
    let input2 = document.getElementById("input2").value
    input2 = input2.toLowerCase();
    let aantal2 = document.getElementById("aantal2")
    let index = input2.length
    let aantalKeerAn2 = 0

    while(input2.lastIndexOf("an",index)!== -1){
        index = input2.lastIndexOf("an", index)-1;
        aantalKeerAn2++;
    }

    aantal2.textContent = " = " + aantalKeerAn2 + " keer";
}

window.addEventListener("load", setup);