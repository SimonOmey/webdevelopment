const setup = () => {
    let button = document.getElementById("button")
    button.addEventListener('click', maakTrigrams)
}
const maakTrigrams = () => {
    let input = document.getElementById("input").value
    let triagram = ""
    for (let i  = 0; i < input.length - 2; i++) {
        triagram = input[i] + input[i+1] + input[i+2]
        console.log(triagram)
    }
}
window.addEventListener("load", setup);