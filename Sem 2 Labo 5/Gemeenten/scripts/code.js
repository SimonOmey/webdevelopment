const setup = () => {

    vraagGemeentes();
    gemeenteToevoegen(gemeenten);
}
let gemeenten = [];

const vraagGemeentes = () =>{
    let stop = false;
    while (!stop) {
            let gemeente = window.prompt("Typ stop om te stoppen    Geef gemeente op :")
        if (gemeente !== "stop") {
            gemeenten.push(gemeente);
        } else {
            stop = true;
        }
    }
}
const gemeenteToevoegen = (gemeenten) =>{
    let select = document.getElementById("select")
    for (let i = 0; i < gemeenten.length; i++) {
        let nieuweGemeente = gemeenten[i]
        select.innerHTML += "<option value=\"" + nieuweGemeente + "\">" + nieuweGemeente + "</option>";
    }
}
window.addEventListener("load", setup);
