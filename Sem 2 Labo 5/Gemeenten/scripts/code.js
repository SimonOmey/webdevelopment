const setup = () => {
    let stop = false;
    let gemeentes = [];
    while(stop === false){
        let gemeente = window.prompt("Gemeente: ")
        if(gemeente !=="stop"){
            gemeentes += gemeente + " ";
        }else{
            stop = true;
        }
    }
    console.log(gemeentes)
}

window.addEventListener("load", setup);

// TIP Gebruik bij opdracht fromvalidatie enkel type = "text"