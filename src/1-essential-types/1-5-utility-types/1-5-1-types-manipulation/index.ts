// Awaited<Type>
// Used to get the resolved type of a Promise or a function returning a Promise.
type AwaitedExample = Awaited<Promise<number>> // number

async function fetchData(): Promise<string> {
  return "Data"
}
type FetchDataType = Awaited<ReturnType<typeof fetchData>> // string

fetchData().then((data) => console.log("Awaited type example:", data)) // Output: Awaited type example: Data

// Partial<Type>
interface User {
  name: string
  age: number
  email?: string // Optional property
}
type PartialUser = Partial<User>

const partialUser: PartialUser = { name: "Alice" }
console.log("Partial user:", partialUser) // Output: Partial user: { name: 'Alice' }

// Required<Type>
type RequiredUser = Required<User>

const requiredUser: RequiredUser = {
  name: "Alice",
  age: 30,
  email: "alice@example.com",
}
console.log("Required user:", requiredUser) // Output: Required user: { name: 'Alice', age: 30, email: 'alice@example.com' }

// Readonly<Type>
type ReadonlyUser = Readonly<User>

const readonlyUser: ReadonlyUser = {
  name: "Bob",
  age: 25,
}
console.log("Readonly user:", readonlyUser) // Output: Readonly user: { name: 'Bob', age: 25 }

// Record<Keys, Type>
type RecordExample = Record<"name" | "age" | "email", string>

const recordExample: RecordExample = {
  name: "Charlie",
  age: "25",
  email: "charlie@example.com",
}
console.log("Record example:", recordExample) // Output: Record example: { name: 'Charlie', age: '25', email: 'charlie@example.com' }
