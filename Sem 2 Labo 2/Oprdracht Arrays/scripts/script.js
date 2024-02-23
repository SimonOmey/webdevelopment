const setup = () => {
}
window.addEventListener("load", setup);

let familieleden = ["Mario","Luigi","Toad","Peach","Bowser"]
console.log(familieleden.length)
console.log(familieleden[0],familieleden[2],familieleden[4])
console.log(familieleden)
function VoegNaamToe(){
    let nieuweNaam = prompt("Voer nieuwe naam in: ")
    familieleden.push(nieuweNaam)
}
VoegNaamToe()
console.log(familieleden)

console.log(familieleden.toString())

