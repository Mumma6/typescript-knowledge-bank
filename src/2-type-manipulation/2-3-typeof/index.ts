// Defining a constant person object
const person = {
  name: "Alice",
  age: 25,
  address: "123 Main St",
}

// typeof infers the type of the object
type PersonType = typeof person
// PersonType is now { name: string; age: number; address: string; }

// Example 1: Creating a function that accepts the same structure
const printPerson = (p: typeof person): void => {
  console.log(`Name: ${p.name}, Age: ${p.age}, Address: ${p.address}`)
}

printPerson(person) // Correct usage

// Example 2: Working with typeof for function types
const add = (a: number, b: number): number => a + b

type AddFunctionType = typeof add // Infers (a: number, b: number) => number

// Using the inferred type for another function
const multiply: AddFunctionType = (x, y) => x * y
console.log(multiply(2, 3)) // Output: 6

// Example 3: Combining typeof with keyof
const logPersonKey = (key: keyof typeof person): void => {
  console.log(`Key: ${key}, Value: ${person[key]}`)
}

logPersonKey("name") // Key: name, Value: Alice
logPersonKey("age") // Key: age, Value: 25
