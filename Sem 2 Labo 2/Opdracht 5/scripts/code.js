const setup = () => {
    let btnWijzig = document.getElementById("btnWijzig")
    btnWijzig.addEventListener("click",wijzig)
}
window.addEventListener("load", setup);

const wijzig = () =>{
    let btnWijzig = document.getElementById("txtOutput")
    btnWijzig.innerHTML = "Welkom"
}