// Type Annotations in TypeScript

// Function with type annotations for parameters and return type
const greet = (name: string, age: number): string => {
  return `Hello, my name is ${name} and I am ${age} years old.`
}

const greetingMessage = greet("Alice", 34)
console.log(greetingMessage) // Output: Hello, my name is Alice and I am 34 years old.

// Optional Parameters & Default Values
const introduce = (name: string, age?: number, city: string = "Stockholm"): string => {
  return `I am ${name} from ${city}, and I am ${age ?? "unknown"} years old.`
}

console.log(introduce("Alice", 34)) // Output: I am Alice from Stockholm, and I am 34 years old.
console.log(introduce("Anna")) // Output: I am Anna from Stockholm, and I am unknown years old.

// Object Type Annotation
let car: { make: string; model: string; year: number } = {
  make: "Tesla",
  model: "Model 3",
  year: 2020,
}

console.log(car) // Output: { make: 'Tesla', model: 'Model 3', year: 2020 }

// Object with optional property
let person: { name: string; age?: number } = {
  name: "Alice",
}

console.log(person) // Output: { name: 'Alice' }

// Array Annotations
const technologies: string[] = ["TypeScript", "React", "Node.js"]
const numbers: number[] = [1, 2, 3, 4, 5]
const users: { name: string; age: number }[] = [
  { name: "Alice", age: 34 },
  { name: "Bob", age: 28 },
]

console.log(technologies) // Output: [ 'TypeScript', 'React', 'Node.js' ]
console.log(users) // Output: [ { name: 'Alice', age: 34 }, { name: 'Bob', age: 28 } ]

// Union Type in Function Parameter
const getStatus = (status: string | number): string => {
  return `The current status is: ${status}`
}

console.log(getStatus("Success")) // Output: The current status is: Success
console.log(getStatus(200)) // Output: The current status is: 200

// Type Alias for object structure
type Product = { name: string; price: number }

const product1: Product = { name: "Laptop", price: 1000 }
const product2: Product = { name: "Phone", price: 800 }

console.log(product1) // Output: { name: 'Laptop', price: 1000 }
console.log(product2) // Output: { name: 'Phone', price: 800 }

// Function Types
type Logger = (message: string) => void

const log: Logger = (message) => {
  console.log(message)
}

log("This is a log message") // Output: This is a log message

// Type Assertion (casting)
let someValue: unknown = "This is a string"
let stringLength: number = (someValue as string).length

console.log(stringLength) // Output: 16

// Example output
console.log(greet("Alice", 34)) // Output: Hello, my name is Alice and I am 34 years old.
console.log(introduce("Anna")) // Output: I am Anna from Stockholm, and I am unknown years old.
console.log(product1.name) // Output: Laptop
