// Basic Types in TypeScript

// String
const name: string = "Alice"

// Number
const userAge: number = 34

// Boolean
const isDeveloper: boolean = true

// Array: A list of strings
const skills: string[] = ["TypeScript", "JavaScript", "Node.js"]

// Tuple: Array with a fixed number of elements of specified types
const personInfo: [string, number, boolean] = ["Alice", 34, true]

// Union Type: Allows a variable to be one of multiple types
let statusCode: string | number
statusCode = "Success"
statusCode = 200 // Both are valid

// Enum: Enumerates a set of named constants
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}
const userRole: Role = Role.User

// Any: Can be any type, but should be avoided when possible
let anyTypeValue: any = 10
anyTypeValue = "Now I'm a string"

// Unknown: Similar to any, but safer, requires type checking before use
let unknownTypeValue: unknown = "Could be anything"
if (typeof unknownTypeValue === "string") {
  console.log(unknownTypeValue.toUpperCase())
}

// Void: Used for functions that don't return a value
const logMessage = (message: string): void => {
  console.log(message)
}

// Null and Undefined
const noValue: null = null
const undefinedValue: undefined = undefined

// Never: For functions that never return or always throw an error
const throwCustomError = (errorMsg: string): never => {
  throw new Error(errorMsg)
}

// Example output to see the types in action
console.log(`Hello, my name is ${name}`)
console.log(`I am ${userAge} years old.`)
console.log(`Am I a developer? ${isDeveloper}`)
console.log(`Skills: ${skills.join(", ")}`)
console.log(`Status Code: ${statusCode}`)
console.log(`User Role: ${userRole}`)
logMessage("This is an example of TypeScript's basic types.")
