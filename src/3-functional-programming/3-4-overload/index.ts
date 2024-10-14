// Function overloads for different types of input
function sum(a: number, b: number): number
function sum(a: string, b: string): string
function sum(a: number[]): number
function sum(a: string[]): string
function sum(a: any, b?: any): any {
  if (Array.isArray(a)) {
    // If the input is an array, sum the values
    if (typeof a[0] === "number") {
      return a.reduce((acc, val) => acc + val, 0)
    } else if (typeof a[0] === "string") {
      return a.join("")
    }
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b
  } else if (typeof a === "string" && typeof b === "string") {
    return a + b
  }
  throw new Error("Invalid arguments")
}

// Usage Examples:

// Summing two numbers
const result1 = sum(1, 2) // Output: 3

// Concatenating two strings
const result2 = sum("Hello, ", "World!") // Output: "Hello, World!"

// Summing an array of numbers
const result3 = sum([1, 2, 3, 4, 5]) // Output: 15

// Concatenating an array of strings
const result4 = sum(["Hello", " ", "TypeScript", "!"]) // Output: "Hello TypeScript!"

// Invalid usage will throw an error at runtime but TypeScript will prevent most issues during development
// const result5 = sum(1, "Test"); // Compile-time error: No overload matches this call
