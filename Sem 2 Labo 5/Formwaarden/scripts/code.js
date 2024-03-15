const setup = () => {
    let button = document.getElementById("submit")
    button.addEventListener('click',drukAf)
}
const drukAf = () => {
    let rookt = document.getElementById("rookt")
    if (rookt.checked) {
        console.log("is roker")
    } else {
        console.log("is geen roker")
    }
    let moedertaal = document.getElementsByName("taal")
    for (let i = 0; i < moedertaal.length; i++) {
        if(moedertaal[i].checked){
            console.log("moedertaal is " + moedertaal[i].value)
        }
    }
    let buurland = document.getElementById("select").options
    for (let i = 0; i < buurland.length; i++) {
        if(buurland[i].selected){
            console.log("favoriete buurland is " + buurland[i].value)
        }
    }
    let dingen = ""
    let bestelling = document.getElementById("bestelling").options
    for (let i = 0; i < bestelling.length; i++) {

        if(bestelling[i].selected){
            dingen += bestelling[i].value + " "
        }
    }
    dingen.trim()
    console.log("bestelling bestaat uit " + dingen)
}
window.addEventListener("load", setup);