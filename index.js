const receber = require('prompt-sync')({sigint: true});
//let x;

//x = receber("Digite X:");
//console.log(x);

var nome = receber("heroi digite seu nome: ");
var exp = receber("heroi digite sua experiencia: ");
console.log(nome);
console.log(parseFloat(exp));

if (exp<1000){
    console.log("Ferro");
}
else if (exp>=1001 && exp<=2000){
    console.log("Bronze");
}
else if (exp>=2001 && exp<=5000){
    console.log("Prata");
}
else if (exp>=6001 && exp<=7000){
    console.log("Ouro");
}
else if (exp>=7001 && exp<=8000){
    console.log("Platina");
}
else if (exp>=8001 && exp<=9000){
    console.log("Ascendente");
}
else if (exp>=9001 && exp<=10000){
    console.log("Imortal");
}
else if (exp>=10.001){
    console.log("Radiante");
}
console.log("O Herói de nome " + nome + " está no nível de " + exp);