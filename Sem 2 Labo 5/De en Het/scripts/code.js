const setup = () => {
	let button = document.getElementById("button")
    button.addEventListener('click',veranderLidWoord)
}
const veranderLidWoord = () =>{
    let input = document.getElementById("input").value
    let woorden = input.split(' ');
    console.log(woorden)
    let output = ""
    for (let i = 0; i < woorden.length; i++) {
        if(woorden[i]===('de')){
            woorden[i] = 'het';
            output += woorden[i] + " "
        }else if (woorden[i]===('De')){
            woorden[i] = 'Het';
            output += woorden[i] + " "
        }else{
                output += woorden[i] + " "
            }
        }
    console.log(woorden);
    console.log(output.trim());
}
window.addEventListener("load", setup);