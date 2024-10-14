// Literal Types
// String Literal: You can specify exact values a variable can take, instead of just 'string' type.
type Env = "development" | "production" | "test"

const currentEnv: Env = "development" // Can only be one of these specific string literals

// --- Readonly --- //
// `readonly` makes properties immutable once set, ensuring no reassignment.
interface Config {
  readonly apiUrl: string
  readonly retryAttempts: number
  readonly isDebugMode: boolean
}

const config: Config = {
  apiUrl: "https://api.example.com",
  retryAttempts: 3,
  isDebugMode: true,
}

// Uncommenting the below line would throw an error since `apiUrl` is readonly
// config.apiUrl = "https://newapi.example.com" // Error: Cannot assign to 'apiUrl' because it is a read-only property.

console.log(config)

// --- 'as const' --- //
// `as const` makes an object deeply immutable and narrows its types to the exact literals.
const configObj = {
  apiUrl: "https://api.example.com",
  retryAttempts: 3,
  isDebugMode: true,
} as const

// The `as const` infers the exact values for properties instead of the broader types (like string or number).
// For example, `configObj.apiUrl` is inferred as "https://api.example.com" instead of `string`.
console.log(configObj.apiUrl) // Output: "https://api.example.com"

// Uncommenting the line below throws an error due to deep immutability.
// configObj.retryAttempts = 5 // Error: Cannot assign to 'retryAttempts' because it is a read-only property.

// --- Unique Symbols --- //
// `unique symbol` ensures a symbol is unique, even with the same name. Good for singleton-like behavior or specific constants.
const UNIQUE_KEY: unique symbol = Symbol("UNIQUE_KEY")

interface Service {
  [UNIQUE_KEY]: string
}

const myService: Service = {
  [UNIQUE_KEY]: "service-token",
}

console.log(myService[UNIQUE_KEY]) // Output: "service-token"

// --- 'as const' with Arrays --- //
// `as const` also works with arrays, locking the array content and types.
const roles = ["admin", "editor", "viewer"] as const

// Without 'as const', the type of 'roles' would be string[].
// With 'as const', it's inferred as a tuple of specific literal values: ['admin', 'editor', 'viewer'].
type Role = (typeof roles)[number] // "admin" | "editor" | "viewer"

const userRole: Role = "admin" // Can only be one of "admin", "editor", or "viewer"

// --- Literal Type Narrowing --- //
// You can use literal types for more precision in function arguments or return values.
const setEnvironment = (env: "development" | "production" | "test"): void => {
  if (env === "production") {
    console.log("Running in production mode")
  } else {
    console.log(`Running in ${env} mode`)
  }
}

setEnvironment("production") // This works
// setEnvironment("staging") // Error: Argument of type '"staging"' is not assignable to parameter of type '"development" | "production" | "test"'.
