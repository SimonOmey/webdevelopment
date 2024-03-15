const setup = () => {

    vraagGemeentes();
    gemeenteToevoegen(gemeenten);
}
let gemeenten = [];

const vraagGemeentes = () =>{
    let stop = false;
    while (!stop) {
            let gemeente = window.prompt("Geef gemeente op : \nTyp stop om te stoppen")
        if (gemeente !== "stop") {
            gemeenten.push(gemeente);
        } else {
            stop = true;
        }
    }
}
const gemeenteToevoegen = (gemeenten) =>{
    let select = document.getElementById("select")
    gemeenten.sort(vergelijk)
    for (let i = 0; i < gemeenten.length; i++) {
        let nieuweGemeente = gemeenten[i]
        select.innerHTML += "<option value=\"" + nieuweGemeente + "\">" + nieuweGemeente + "</option>";
    }
}
const vergelijk = (a,b) =>{
    return a.localeCompare(b)
}
window.addEventListener("load", setup);
