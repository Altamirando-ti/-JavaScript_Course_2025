'use strict';
const cl = console.log;
// ----------------- 155 - CHALLENGE 1 ------------------
cl('----------------- 155 - CHALLENGE 1 ------------------')


// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age,
 and stored the data into an array (one array for each). 
 For now, they are just interested in knowing whether a dog is an adult or a puppy. 
 A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'),
 and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats,
 not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that 
 copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an 
adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
// ////////////////////////////////////
*/
// TEST DATA 1
const juliaData = [3, 5, 2, 12, 7];
const kateData = [4, 1, 15, 8, 3];

const juliaDataCorrected = juliaData.slice()
cl(juliaDataCorrected)
juliaDataCorrected.splice(0,1)
juliaDataCorrected.splice(-2)
cl(juliaDataCorrected)

// TEST DATA 2
const juliaData2 = [9, 16, 6, 8, 3];
const kateData2 = [10, 5, 6, 1, 4];

const checkDogs = function(arg1, arg2){
    cl("Julia's dogs")
    arg1.forEach( (value,index) => {
        // cl(value,index)
        const age = value >= 3 ? 'adult' : 'puppy'
        cl(`Dog number ${index} is an ${age}, and is ${value} years old`)
    });

    cl("Kate's dogs")
    arg2.forEach( (value,index) => {
        // cl(value,index)
        const age = value >= 3 ? 'adult' : 'puppy'
        cl(`Dog number ${index} is an ${age}, and is ${value} years old`)
    });
}

cl('TEST DATA 1')
checkDogs(juliaDataCorrected,kateData)
cl('TEST DATA 2')
checkDogs(juliaData2,kateData2)

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and 
calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following 
things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, 
humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18
 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we 
calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// ----------------- 161 - CHALLENGE 2 ------------------
cl('----------------- 161 - CHALLENGE 2 ------------------')

const testData1 = [5, 2, 4, 1, 15, 8, 3]
const testData2 = [16, 6, 10, 5, 6, 1, 4]

cl('TestData1')
// 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, 
// humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
const calcAverageHumanAge = arg =>{return arg.map( item => {
    if(item <=2){return item*2} else{return 16 + item * 4}
 })}
cl(calcAverageHumanAge(testData1)) //[36, 4, 32, 2, 76, 48, 28]

// 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18
//  years old)
const excludeLess18 = function(arg){
    return calcAverageHumanAge(arg).filter(function(item){
    return item >= 18
    })
}
cl(excludeLess18(testData1))//[36, 32, 76, 48, 28]


// 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we 
// calculate averages 😉)

const averageAdultDogs = function(arg){
    return  excludeLess18(arg)
    .reduce((prev, item)=>{return prev + item},0) / excludeLess18(arg).length
}

// cl(averageAdultDogs(testData1))
// cl(excludeLess18(testData1))
cl(averageAdultDogs(testData1))

// --- TestData2 ---
cl('TestData2')
cl(calcAverageHumanAge(testData2)) 
cl(excludeLess18(testData2))//[36, 32, 76, 48, 28]
cl(averageAdultDogs(testData2))

// Testando coisas
cl('Testando coisas')
// const calcTeste = function(arg){
//     const argMap = arg.map(function(item){
//         return item*2
//     })
//     return argMap
// }
// cl(calcTeste(testData1))


// Reescrevendo a função acima de outra maneira:

// const calcTeste = function(arg){
//     return arg.map(function(item){
//         return item*2
//     })
// }
// cl(calcTeste(testData1))


// Reescrevendo a função acima de outra maneira:
// const calcTeste = arg =>{ return arg.map( item => {return item*2})}
// cl(calcTeste(testData1))


// Reescrevendo a função acima de outra maneira:
const calcTeste = arg => arg.map( item => item*2)

cl(calcTeste(testData1))

// cl(testData1.length)