// Uppercase<StringType>
type UppercaseExample = Uppercase<"hello"> // "HELLO"
console.log("Uppercase example:", "HELLO" as UppercaseExample) // Output: Uppercase example: HELLO

// Lowercase<StringType>
type LowercaseExample = Lowercase<"HELLO"> // "hello"
console.log("Lowercase example:", "hello" as LowercaseExample) // Output: Lowercase example: hello

// Capitalize<StringType>
type CapitalizeExample = Capitalize<"hello"> // "Hello"
console.log("Capitalize example:", "Hello" as CapitalizeExample) // Output: Capitalize example: Hello

// Uncapitalize<StringType>
type UncapitalizeExample = Uncapitalize<"Hello"> // "hello"
console.log("Uncapitalize example:", "hello" as UncapitalizeExample) // Output: Uncapitalize example: hello

// Practical example for string manipulation
type Route = "home" | "aboutUs" | "contactUs"
type UppercaseRoute = Uppercase<Route> // "HOME" | "ABOUTUS" | "CONTACTUS"
console.log("Uppercase route example:", "HOME" as UppercaseRoute) // Output: Uppercase route example: HOME
