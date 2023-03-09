let characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

let specialCha = false;
let noNums = false;
let passwordA = document.getElementById("password-a");
let passwordB = document.getElementById("password-b");

function generateBtn() {
    setArray();
    let passA = "";
    let passB = "";
    for (let i = 0; i < 15; i++) {
        let n = characters[Math.floor(Math.random() * characters.length)];
        passA += n;
        passB += n;
    }
    if (noNums) {
        passA = passA.replace(/[0-9]/g, '');
    }
    if (specialCha) {
        passA = passA.replace(/[^a-zA-Z0-9]/g, '');
    }
    passwordA.innerText = passA;
    passwordB.innerText = passB;
}

function setArray() {
    if (noNums === true && specialCha === true) {
        characters = characters.filter(c => !/[\d~`!@#$%^&*()_+\-={[}\]|;:'",<.>/?]/.test(c));
    } else if (noNums === true) {
        characters = characters.filter(c => !/\d/.test(c));
    } else if (specialCha === true) {
        characters = characters.filter(c => !/[\d~`!@#$%^&*()_+\-={[}\]|;:'",<.>/?]/.test(c) || /\w/.test(c));
    } else {
        characters = characters;
    }
}

function switchSpecials() {
    passwordA.innerText = "";
    passwordB.innerText = "";
    specialCha = !specialCha;
    generateBtn();
}

function switchNumbers() {
    passwordA.innerText = "";
    passwordB.innerText = "";
    noNums = !noNums;
    generateBtn();
}

function copy(text) {
    navigator.clipboard.writeText(text);
}

passwordA.addEventListener("click", () => {
    copy(passwordA.innerText);
});

passwordB.addEventListener("click", () => {
    copy(passwordB.innerText);
});
