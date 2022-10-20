let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let specialCha = false
let noNums = false
let password = []

function generateBtn (){
    setArray ()
    for (let x = 0; x < 2; x++){
    let pass = "";
    for (let i = 0; i < 15; i++){
         let n = characters[Math.floor(Math.random()*characters.length)]
         pass +=n
    } 
        password.push(pass)
    if (x === 0){
      document.getElementById("password-a").innerHTML = password[x]
    } else (x === 1 )
     { document.getElementById("passowrd-b").innerHTML = password[x] } 
    } 
    
}

function setArray () {
    if (noNums === true && specialCha === true){
        characters.splice(52, 39)
    } else if (noNums === true){
        characters.splice(52, 10)
    } else if (specialCha === true){
        characters.splice(62, 29)
    } else {
        characters = characters
    }
}
function switchSpecials () {
    if (specialCha === false){
        specialCha = true
    } else if (specialCha === true) {
        specialCha = false}
}

function switchNumbers () {
    if (noNums === false){
        noNums = true
    } else if (noNums === true) {
        noNums = false}
}
