const setup = () => {
    let substring = document.getElementById("substring")

    substring.addEventListener("click", splits)
}
window.addEventListener("load", setup);

const splits = () =>{
    let txtInput = document.getElementById("txtInput")
    let startNmr = parseInt(document.getElementById("startNummer").value)
    let eindNmr = parseInt(document.getElementById("eindNummer").value)
    let txtOutput = document.getElementById("txtOutput")
    txtOutput.innerHTML = txtInput.substring(startNmr,eindNmr)
}