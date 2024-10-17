// Solutions for all exercises in Section 1
// Solutions

// 1-1 Basic Types
let userName: string = "Alice"
let userAge: number = 34

let personInfo: [string, number, boolean] = ["Alice", 34, true]

let statusCode: string | number = "Success"
statusCode = 200 // Both are valid

// 1-2 Interfaces and Type Aliases
interface Product {
  name: string
  price: number
  category?: string // Optional
}

type ID = string | number

const product1: Product = { name: "Laptop", price: 1000 }
const product2: Product = { name: "Phone", price: 800, category: "Electronics" }

// 1-3 Type Annotations
const greet = (name: string, age: number): string => {
  return `Hello, my name is ${name} and I am ${age} years old.`
}

console.log(greet("Alice", 34)) // Output: Hello, my name is Alice and I am 34 years old.

// 1-4 Literal Types
type Env = "development" | "production" | "test"

const setEnv = (env: Env): void => {
  console.log(`The current environment is ${env}`)
}

setEnv("development") // Output: The current environment is development

// 1-5 Utility Types
type PartialProduct = Partial<Product>
const partialProduct: PartialProduct = { name: "Laptop" }

type ProductOverview = Pick<Product, "name" | "price">
const productOverview: ProductOverview = { name: "Laptop", price: 1000 }
