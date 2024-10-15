// Pick<Type, Keys>
interface User {
  name: string
  age: number
  email: string
}

type PickUser = Pick<User, "name" | "email"> // Includes only 'name' and 'email'
const pickedUser: PickUser = { name: "Alice", email: "alice@example.com" }
console.log("Picked user:", pickedUser) // Output: Picked user: { name: 'Alice', email: 'alice@example.com' }

// Omit<Type, Keys>
type OmitUser = Omit<User, "age"> // Includes everything except 'age'
const omitUser: OmitUser = { name: "Bob", email: "bob@example.com" }
console.log("Omitted user:", omitUser) // Output: Omitted user: { name: 'Bob', email: 'bob@example.com' }

// Exclude<UnionType, ExcludedMembers>
type Status = "success" | "error" | "loading"
type ExcludeExample = Exclude<Status, "loading"> // "success" | "error"
console.log("Exclude example:", "success" as ExcludeExample) // Output: Exclude example: success

// Extract<Type, Union>
type ExtractExample = Extract<Status, "success" | "loading"> // "success" | "loading"
console.log("Extract example:", "loading" as ExtractExample) // Output: Extract example: loading

// NonNullable<Type>
type NullableString = string | null | undefined
type NonNullableString = NonNullable<NullableString> // string
const stringValue: NonNullableString = "Hello"
console.log("NonNullable example:", stringValue) // Output: NonNullable example: Hello
