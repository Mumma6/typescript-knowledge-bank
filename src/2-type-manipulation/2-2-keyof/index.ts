// Define a Person type
type Person = {
  name: string
  age: number
  address?: string // Optional property
}

// keyof creates a union of all keys of the Person type
type PersonKeys = keyof Person // "name" | "age" | "address"

// Example 1: A function that gets a value from an object using keyof
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

const person: Person = {
  name: "Alice",
  age: 30,
  address: "123 Main St",
}

// Dynamic access to values using keyof
const personName = getValue(person, "name") // "Alice"
const personAge = getValue(person, "age") // 30
const personAddress = getValue(person, "address") // "123 Main St" | undefined

// Example 2: Function to update a property dynamically
const updateProperty = <T, K extends keyof T>(obj: T, key: K, value: T[K]): T => {
  return { ...obj, [key]: value }
}

const updatedPerson = updateProperty(person, "age", 35)
console.log(updatedPerson) // { name: "Alice", age: 35, address: "123 Main St" }
