// Basic Interface Example
interface Person {
  name: string
  age: number
}

const person: Person = {
  name: "Alice",
  age: 34,
}

console.log(person) // Output: { name: 'Alice', age: 34 }

// Optional Properties in Interfaces
interface Car {
  make: string
  model: string
  year?: number // Optional property, 'year' can be undefined
}

const car1: Car = { make: "Tesla", model: "Model 3" }
console.log(car1) // Output: { make: 'Tesla', model: 'Model 3' }

const car2: Car = { make: "Ford", model: "Mustang", year: 2021 }
console.log(car2) // Output: { make: 'Ford', model: 'Mustang', year: 2021 }

// Extending Interfaces: Demonstrating inheritance in interfaces
interface Animal {
  species: string
  isDomesticated: boolean
}

interface Dog extends Animal {
  breed: string
}

const myDog: Dog = {
  species: "Canine",
  isDomesticated: true,
  breed: "Golden Retriever",
}

console.log(myDog) // Output: { species: 'Canine', isDomesticated: true, breed: 'Golden Retriever' }

// Using Type Aliases for Unions
type StringOrNumber = string | number

let value: StringOrNumber
value = "Hello"
console.log(value) // Output: "Hello"

value = 42
console.log(value) // Output: 42

// Intersection Types: Combining multiple types into one
type Vehicle = {
  make: string
  model: string
}

type Engine = {
  horsepower: number
}

type CarWithEngine = Vehicle & Engine

const myCar: CarWithEngine = {
  make: "Tesla",
  model: "Model 3",
  horsepower: 450,
}

console.log(myCar) // Output: { make: 'Tesla', model: 'Model 3', horsepower: 450 }

// Union Types: Allowing a value to be one of several specific types
type AnimalType = "Dog" | "Cat" | "Bird"

interface Pet {
  name: string
  type: AnimalType // Restricted to one of "Dog", "Cat", or "Bird"
}

const myPet: Pet = {
  name: "Buddy",
  type: "Dog",
}

console.log(myPet) // Output: { name: 'Buddy', type: 'Dog' }

// Using Intersection with Interfaces for Flexibility
interface User {
  username: string
  email: string
}

interface Admin {
  role: "admin"
}

type AdminUser = User & Admin

const admin: AdminUser = {
  username: "adminUser",
  email: "admin@example.com",
  role: "admin",
}

console.log(admin) // Output: { username: 'adminUser', email: 'admin@example.com', role: 'admin' }
