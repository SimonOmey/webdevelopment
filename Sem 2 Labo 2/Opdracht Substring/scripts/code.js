const setup = () => {
    let btnSubstring = document.getElementById("substring")
    btnSubstring.addEventListener("click", splits)
}


const splits = () =>{
    let txtInput = document.getElementById("txtInput")
    let txtOutput = document.getElementById("txtOutput")
    startNmr = parseInt(document.getElementById("startNummer").value)
    eindNmr = parseInt(document.getElementById("eindNummer").value)

    let substring = txtInput.value.substring(startNmr,eindNmr);
    txtOutput.innerHTML = substring;
}
window.addEventListener("load", setup);