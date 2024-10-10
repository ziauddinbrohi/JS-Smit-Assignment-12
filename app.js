// Qustion # 01 
let outcome = Math.random() < 0.5 ? "Head" : "Tail";
document.write(outcome+"<br>");   

// Question # 02
let roll = Math.floor(Math.random() * 6) + 1;
document.write(`You rolled a ${roll}!`+"<br>"); 

// Question # 03
let password = "";

for (let i = 0; i < 10; i++) {
  let randomChar = Math.floor(Math.random() * 94) + 33;
  password += String.fromCharCode(randomChar);
}

document.write(`Generated Password: ${password}`);