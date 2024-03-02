const setup = () => {
    let Btnberekenen = document.getElementById("berekenen")
    Btnberekenen.addEventListener('click', berekenen)
}
const berekenen = () =>{
    let prijs = document.getElementsByClassName("prijs")
    let aantal = document.getElementsByClassName("aantal")
    let btw = document.getElementsByClassName("btw")
    let subtotaal = document.getElementsByClassName("subtotaal")
    let totaal = 0

    for(let i = 0; i<prijs.length;i++){
        let prijsWaarde = parseFloat(prijs[i].textContent)
        let aantalWaarde = parseInt(aantal[i].value)
        let btwWaarde = parseFloat(btw[i].textContent)/100
        let subtotaalWaarde= (aantalWaarde * prijsWaarde)*(1+btwWaarde)
        totaal += subtotaalWaarde

        subtotaal[i].textContent = subtotaalWaarde.toFixed(2) + " EUR"

    }
    let totaalElement = document.getElementById("totaal")
    totaalElement.textContent = totaal.toFixed(2) +" EUR"
}

window.addEventListener("load", setup);