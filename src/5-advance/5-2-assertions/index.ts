// Custom type guard to check if an unknown value is a string
const isString = (value: unknown): value is string => {
  return typeof value === "string"
}

// Another custom type guard for arrays
const isArray = <T>(value: unknown): value is T[] => {
  return Array.isArray(value)
}

// Example function using type-safe assertions
const processValue = (value: unknown) => {
  if (isString(value)) {
    console.log("This is a string:", value.toUpperCase())
  } else if (isArray<number>(value)) {
    console.log(
      "This is an array of numbers:",
      value.map((num) => num * 2)
    )
  } else {
    console.log("Unknown type")
  }
}

// Usage
processValue("hello") // This is a string: HELLO
processValue([1, 2, 3]) // This is an array of numbers: [2, 4, 6]
processValue(42) // Unknown type
