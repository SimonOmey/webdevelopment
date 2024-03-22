const setup = () => {
    let start = document.getElementById("StaatKip")
    start.addEventListener("click",toonKip)
}
const toonKip = () => {
    let staat = document.getElementById("StaatKip").textContent
    let kip = document.getElementById("img")
    let tekst = document.getElementById("note")
    let letter = document.getElementById("letter").textContent
    tekst.textContent="Hierboven, een kip "
    if(staat.value==="met ei"){
        kip.classList.remove("hidden")
        kip.classList.remove("img")
        kip.classList.add("with-egg")
        tekst.textContent += " met ei"
    }else{
        kip.classList.remove("hidden")
        tekst.textContent += " zonder ei"
    }
    tekst.textContent += " \nLetter " + letter + "komt x keer voor in bovenstaande zin"

}
window.addEventListener("load", setup);