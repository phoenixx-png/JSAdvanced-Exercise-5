// TODO: Create a multiline string using template literals
const multiString = `
This multiline string
has an important message.
Blah blah blah,
blah blah blah.
Thank you for your attention.
`
console.log(multiString)

// TODO: Create a function that uses template literals for HTML generation
const profile = (name, age)=> {
    return`
    <div>
        <h1> Name: ${name} </h1>
        <h2> Age: ${age} </h2>
    </div>`
}

console.log(profile("Phoenix", 20))

// TODO: Convert regular functions to arrow functions
function add(x, y){
    return x + y
}
console.log(add(8,9))

const arrow = (x, y) => x + y;
console.log(arrow(9,8))

function greet(name){
    return "Wassup, " + name + "!"
}
console.log(greet("Phoenix"));

const greetArrow = (name) => `Wasssauup, ${name}!`
console.log(greetArrow("Phoenix"))

// TODO: Use arrow functions with array methods
const numberArray = [1, 2, 3, 4, 5]

const doubleArray = numberArray.map(n => n ** 2)
console.log(doubleArray)

const evenArray = numberArray.filter(n => n % 2 == 0)
console.log(evenArray)

const sumArray = numberArray.reduce((sum, n) => sum + n)
console.log(sumArray)
