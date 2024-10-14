// Partial Application: A technique where a function doesn't receive all its arguments at once.
// Instead, it returns a new function that takes the remaining arguments.
// This is useful when you want to preset or "lock-in" some values to be reused later.

const add =
  (a: number) =>
  (b: number): number =>
    a + b

// Partially apply '5' to the add function
const add5 = add(5) // The function remembers that 'a' is 5

// Later, apply '10' to complete the addition
const num = add5(10) // Output: 15

console.log(`Result of adding 5 and 10: ${num}`) // Output: 15

// More Realistic Example: Partial Application for Tax Calculation
// We create a function to calculate tax based on a rate, and we "lock in" the tax rate for later use.

const calculateTax =
  (taxRate: number) =>
  (price: number): number =>
    price + price * taxRate

// Partially apply a 20% tax rate
const with20PercentTax = calculateTax(0.2)

// Apply it to different prices
console.log(`Price with 20% tax: ${with20PercentTax(100)}`) // Output: 120
console.log(`Price with 20% tax: ${with20PercentTax(200)}`) // Output: 240

// Currying: It's the transformation of a function with multiple arguments
// into a sequence of functions, each taking a single argument.

const multiply =
  (a: number) =>
  (b: number): number =>
    a * b

// This is a curried function. Instead of calling multiply(2, 3),
// you call it as multiply(2)(3)
const curriedMultiply = multiply(2)(3) // Output: 6

console.log(`Result of multiplying 2 and 3: ${curriedMultiply}`) // Output: 6

// More Realistic Example: Currying for Discount Application
// Currying allows us to create more specific functions by providing arguments step-by-step.

const applyDiscount =
  (discount: number) =>
  (price: number): number =>
    price - price * discount

// Curried function to apply a 10% discount
const apply10PercentDiscount = applyDiscount(0.1)

console.log(`Price after 10% discount: ${apply10PercentDiscount(100)}`) // Output: 90
console.log(`Price after 10% discount: ${apply10PercentDiscount(50)}`) // Output: 45

// Currying with Multiple Steps: Filtering and Transforming Data
// Suppose we want to filter a list of users based on their age and then map their names.

interface CurryUser {
  name: string
  age: number
}

const curryUsers: CurryUser[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
]

// Currying the filtering and mapping functions
const filterByAge =
  (minAge: number) =>
  (users: CurryUser[]): CurryUser[] =>
    users.filter((user) => user.age >= minAge)
const mapToNames = (users: CurryUser[]): string[] => users.map((user) => user.name)

// Filtering users older than 18 and mapping to their names
const getAdultNames =
  (minAge: number) =>
  (users: CurryUser[]): string[] =>
    mapToNames(filterByAge(minAge)(users))

console.log(`Adults: ${getAdultNames(18)(users)}`) // Output: Adults: Alice, Charlie

// Benefits: Partial application and currying provide flexibility and composability.
// They allow us to create specialized functions without repeating logic.
