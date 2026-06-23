const cl=console.log

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/


// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the selected option.

// const poll = {
//     question :' What is your favourite programming language?',
//     options: ['0: JavaScript',
//         '1: Python',
//         '2: Rust',
//         '3: C++'],
//     replies :[],
//     registerNewAnswer(){
//         // cl(`${this.question}: ${this.options} `)
//         const answer = Number(prompt(`${this.question}. Choose from : ${this.options} `))
//         // cl(typeof(answer))
//         if (typeof(answer) == 'number' && answer <= 3) {
//             this.replies.push(answer)
//             cl(this.replies)
//             // cl(answer)
//         } else {cl('Tente outra vez!')} 
        
        
//     }
// }

// 1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1.
// const pollTemp = poll.options[0]
// poll.options[0] = poll.options[1]
// poll.options[1] = pollTemp
// cl(poll.options)
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! NÃO FINALIZEI AINDA!!

// 2. Call this method whenever the user clicks the "Answer poll" button.
// poll.registerNewAnswer()
// document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll))


// 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either
//  'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. 
// If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 

// const poll = {
//     question :' What is your favourite programming language?',
//     options: ['0: JavaScript',
//         '1: Python',
//         '2: Rust',
//         '3: C++',
//         '4: Qualquer'
//     ],
//     replies :[0,0,0,0],
//     registerNewAnswer(){
//         // cl(`${this.question}: ${this.options} `)
//         const answer = Number(prompt(`${this.question}\n ${this.options.join('\n')} `))
//         // cl(typeof(answer))
//         if (typeof(answer) == 'number' && answer <= this.options.length-1) {
//             // this.replies.push(answer)
//             this.replies[answer]++
//             cl(this.replies)
//         } else {cl('Tente outra vez!')}    
//     },
//     displayResults(){
//         //preciso chamar a função registerNewAnswer
//         const type = prompt('Qual o tipo de entrada? \n [S]tring ou [A]rray?').toLowerCase()
//         if (type == 'a'){
//             return this.registerNewAnswer()
//         }
//         if (type == 's'){
//             this.registerNewAnswer()
//             cl(`Poll results are ${this.replies}`)
            
//         }
//     },
// }
// document.querySelector('.poll').addEventListener('click',poll.displayResults.bind(poll))
// cl(poll.options)



// ----------- testes:
// const highFun = function(arg1){
//     return function (arg2){
//         cl(`${arg1} ${arg2}`)
//     }
// }

// answers = new Array(4).fill(0)
// cl(answers)
// answers[1]++
// cl(answers)

//////////////////////////////////////////// Resposta corrigida com base na do professor

const poll = {
    question :' What is your favourite programming language?',
    options: ['0: JavaScript',
        '1: Python',
        '2: Rust',
        '3: C++',
        '4: Qualquer'
    ],
    replies :[0,0,0,0],
    registerNewAnswer(){
        const answer = Number(prompt(`${this.question}\n ${this.options.join('\n')} `))
        // cl(typeof(answer))
        if (typeof(answer) == 'number' && answer < this.options.length-1) {
            this.replies[answer]++
            this.displayResults()
            this.displayResults('string')    

        } else {
            cl('Tente outra vez!')}
    },
    displayResults(type = 'array'){
        if (type == 'array'){
            cl(this.replies)
        }
        if (type == 'string'){
                cl(`Poll results are ${this.replies}`)
            
        }
    },
}
document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll))
cl(poll.options)

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀*/

;// Sempre que for usar funções que começam com parênteses () ou colchetes [] logo no início da linha, certifique-se de que a linha anterior termine com ;

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click',function(){
        header.style.color = 'blue';
    })
    
})();


