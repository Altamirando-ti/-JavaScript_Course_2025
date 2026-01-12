'use strict';

//----------- Challenge 1 - Part 2 ---------------
console.log('----------- Challenge 1 - Part 2 ---------------')

let calcAverage = (sc1, sc2, sc3) => (sc1 + sc2 + sc3)/3 

let avgDolphins = calcAverage(44,23,71);
let avgKoalas = calcAverage(65,54,49);
console.log(avgDolphins, avgKoalas);

function checkWinner(scoreDolphins,scoreKoalas){
    if(scoreDolphins >= 2*scoreKoalas){
    console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`)
    }
    else if(scoreKoalas >= 2*scoreDolphins ){
    console.log(`Koalas win (${scoreKoalas} vs. ${scoreDolphins})`)
    }else console.log("No team wins!!")
}
console.log(checkWinner(avgDolphins,avgKoalas));

avgDolphins = calcAverage(85,54,41);
avgKoalas = calcAverage(23,34,27);
console.log(avgDolphins, avgKoalas);
console.log(checkWinner(avgDolphins,avgKoalas));

//----------- Challenge 2 - Part 2 ---------------
console.log('----------- Challenge 2 - Part 2 ---------------')
// let bill = Number(prompt("Digite o valor da conta:"))
let bill = 100
console.log(bill)

let calcTip = function(bill){
    let tip = bill >=50 && bill <=300 ? bill * 15/100 : bill * 20/100;
    return tip
}

let calculationTip = calcTip(bill)
console.log(`O valor da conta é de ${bill} e o valor da gorjeta é de ${calculationTip} sendo o total a pagar de ${calculationTip + bill}`)

const bills = [125, 555, 44]
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(tips)
console.log(`O valor da conta é de ${bills[0]} e o valor da gorjeta é de ${calcTip(bills[0])} sendo o total a pagar de ${calcTip(bills[0]) + bills[0]}`)
console.log(`O valor da conta é de ${bills[1]} e o valor da gorjeta é de ${calcTip(bills[1])} sendo o total a pagar de ${calcTip(bills[1]) + bills[1]}`)
console.log(`O valor da conta é de ${bills[2]} e o valor da gorjeta é de ${calcTip(bills[2])} sendo o total a pagar de ${calcTip(bills[2]) + bills[2]}`)

let arrayTotal = new Array(calcTip(bills[0]) + bills[0], calcTip(bills[1]) + bills[1],calcTip(bills[2]) + bills[2])
console.log(arrayTotal)


//----------- Challenge 3 - Part 2 ---------------
console.log('----------- Challenge 3 - Part 2 ---------------')

const mark = {
    name: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = (this.mass) / (this.height)**2;
        return this.bmi;
    }
}

const john = {
    name: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = (this.mass) / (this.height)**2;
        return this.bmi;
    }
}

console.log(`${mark.name}'s BMI is: ${mark.calcBMI()}`)
console.log(`${john.name}'s BMI is: ${john.calcBMI()}`)

if(mark.bmi > john.bmi) console.log(`${mark.name}'s BMI (${mark.calcBMI()}) is higher than ${john.name}'s (${john.calcBMI()})`)
else if(mark.bmi < john.bmi) console.log(`${mark.name}'s BMI (${mark.calcBMI()}) is higher than ${john.name}'s (${john.calcBMI()})`)
else console.log('Informações inválidas.')    

//----------- Challenge 4 - Part 2 ---------------
console.log('----------- Challenge 4 - Part 2 ---------------')
// let bill = Number(prompt("Digite o valor da conta:"))
let bill2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
// console.log(bill2.length)

let tips2 = []
let totals = []

let calcTip2 = function(x){
    let tip = x >=50 && x <=300 ? x * 15/100 : x * 20/100;
    return tip;
}

for(let i=0; i< bill2.length; i++){
    // console.log(calcTip2(bill2[i]))   
    tips2.push(calcTip2(bill2[i]));
    totals.push(bill2[i]+tips2[i])
}

console.log(tips2);
console.log(totals)

// let calculationTip2 = calcTip2(bill2)
// console.log(`O valor da conta é de ${bill2} e o valor da gorjeta é de ${calculationTip2} sendo o total a pagar de ${calculationTip2 + bill2}`)

//-------Bonus------
// let sum =0;
// for(let i = 0; i <= 10; i ++ ){
//     sum = sum + i;
// }
// console.log(sum)    

function calcAverage2 (arr){
    // let avg = (arr[0] + arr[1])/(arr.length);
    let sum = 0;
    for(let i = 0; i < arr.length; i ++ ){
    sum = sum + arr[i];
    }
    return sum/(arr.length);
}
const array =[1,2,3,4,10]
console.log(array.length)
console.log(`A média dos valores do array é ${calcAverage2(array)}`)

// Utilizando esta função para o cálculo da media do arry totals
console.log(`A média dos valores do array é ${calcAverage2(totals)}`)
