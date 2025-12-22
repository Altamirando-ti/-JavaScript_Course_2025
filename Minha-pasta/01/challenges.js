//---------- Challenge#1----------
console.log("---------- Challenge#1----------")
//data1
let massMark = 78 , heightMark = 1.69;
let massJohn = 92 , heightJohn = 1.95;

//data 2
// let massMark = 95 , heightMark = 1.88;
// let massJohn = 85 , heightJohn = 1.76;


let mass = massMark;
let height = heightMark;
let BMI = mass / (height**2);
let markBMI = BMI
console.log(BMI)

mass = massJohn;
height = heightJohn;
BMI = mass / (height**2);
let johnBMI = BMI
console.log(BMI)

console.log(markBMI, johnBMI)

let markHigherBMI = markBMI > johnBMI
console.log(markHigherBMI)

//---------- Challenge#2----------
console.log("---------- Challenge#2----------")

if(markBMI > johnBMI){
    console.log(" Mark BMI is higher than John!")
}else{
    console.log(" John's BMI is higher than Mark's")
}

// Template Literals
if(markBMI > johnBMI){
    console.log(`Mark BMI (${markBMI}) is higher than John's (${johnBMI})!`)
}else{
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`)
}

//---------- Challenge#3----------
console.log("---------- Challenge#3----------")
const scoreAvaregeDolphins = (96+ 108+ 89)/3
const scoreAvaregeKoalas = (88 + 91 + 110)/3
console.log(scoreAvaregeDolphins,scoreAvaregeKoalas)

if(scoreAvaregeDolphins > scoreAvaregeKoalas){
    console.log("Dolphins are the winners")
}
else if(scoreAvaregeDolphins < scoreAvaregeKoalas){
    console.log("Koalas are the winners")
}else{
    console.log("It's a draw!")
}

const scoreAvaregeDolphins_bonus = (97+ 99+ 101)/3; //(97+ 112+ 101)/3 //teste: (97+ 99+ 101)/3
const scoreAvaregeKoalas_bonus = (109 + 95 + 90)/3 ; //b1:(109 + 95 + 123)/3 ;b2: (109 + 95 + 106)/3; teste:(109 + 95 + 90)/3 
console.log(scoreAvaregeDolphins_bonus,scoreAvaregeKoalas_bonus)

if(scoreAvaregeDolphins_bonus >= 100 && scoreAvaregeDolphins_bonus > scoreAvaregeKoalas_bonus){
    console.log("Dolphins are the winners")
}else if(scoreAvaregeKoalas_bonus >= 100 && scoreAvaregeKoalas_bonus > scoreAvaregeDolphins_bonus){
    console.log("Koalas are the winners")
}
else if (scoreAvaregeDolphins_bonus === scoreAvaregeKoalas_bonus && scoreAvaregeDolphins_bonus >= 100 && scoreAvaregeKoalas_bonus >= 100){
    console.log("It's a draw!")
}
else{
    console.log("Nobody wins!")
}

