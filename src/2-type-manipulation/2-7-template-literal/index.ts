type Method = "GET" | "POST"
type Resource = "User" | "Order"

// Dynamically generate API method names
type ApiEndpoint = `${Method}_${Resource}`

// Result: "GET_User" | "GET_Order" | "POST_User" | "POST_Order"
const exampleEndpoint: ApiEndpoint = "GET_User"

type StyleName = "fontSize" | "backgroundColor" | "marginTop"

// Converts camelCase to kebab-case
type ToKebabCase<S extends string> = S extends `${infer T}${infer U}`
  ? `${Lowercase<T>}${U extends Capitalize<U> ? `-${ToKebabCase<U>}` : ToKebabCase<U>}`
  : S

type CssStyleName = ToKebabCase<StyleName>
// Result: "font-size" | "background-color" | "margin-top"

type UserId = number
type Route = `/users/${UserId}/profile` | `/orders/${UserId}`

// You can now dynamically create routes for different users
const userRoute: Route = `/users/123/profile` // Valid
const orderRoute: Route = `/orders/456` // Valid

type TableName = "users" | "orders"
type ColumnName<T extends TableName> = T extends "users" ? "id" | "name" | "email" : T extends "orders" ? "id" | "total" | "status" : never

type SqlQuery<T extends TableName> = `SELECT ${ColumnName<T>} FROM ${T}`

// Example usage:
const userQuery: SqlQuery<"users"> = "SELECT name FROM users" // Valid
const orderQuery: SqlQuery<"orders"> = "SELECT total FROM orders" // Valid

// const invalidQuery: SqlQuery<"users"> = "SELECT total FROM users"; // Error: Type '"total"' is not assignable to type 'ColumnName<"users">'

type Person = {
  name: string
  age: number
}

// Create dynamic getters
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K]
}

type PersonGetters = Getters<Person>

// Example usage:
const personGetters: PersonGetters = {
  getName: () => "Alice",
  getAge: () => 30,
}

console.log(personGetters.getName()) // Output: "Alice"
