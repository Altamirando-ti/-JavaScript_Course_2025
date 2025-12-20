//---------- Challenge#1----------
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
    