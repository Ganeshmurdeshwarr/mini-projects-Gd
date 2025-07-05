let gen = document.querySelector(".generate");
let genbtn = document.querySelector(".btn");
let length =12;



let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowrCase = "abcdefghijklmnopqrstuvwxyz";
let num = "1234567890"
let special = "!@#$%^&*()_+-=[]{}|;:',.<>?/`~";

let allChar = upperCase + lowrCase + num + special;

function genPass() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password += lowrCase[Math.floor(Math.random() * lowrCase.length)]
    password += num[Math.floor(Math.random() * num.length)]
    password += special[Math.floor(Math.random() * special.length)];

while(length>password.length ){

    password += allChar[Math.floor(Math.random() * allChar.length)]
    
}
gen.value = password;
}
genbtn.addEventListener("click", () => {
    genPass();
})