// Example 1: Basic conditional type to check if a type is a string
type IsString<T> = T extends string ? true : false

type Test1 = IsString<string> // true
type Test2 = IsString<number> // false

// Example 2: Check if a type is a union containing `string`
type IsUnionWithString<T> = T extends string ? true : false

type Test3 = IsUnionWithString<string | number> // true (string is part of the union)
type Test4 = IsUnionWithString<number | boolean> // false (no string in the union)

// Example 3: Conditional Types to Extract a Type From a Union
type ExtractString<T> = T extends string ? T : never

type OnlyString = ExtractString<string | number | boolean> // string (only string is extracted)

// Infer the argument type of a function and conditionally check if it extends a specific type
type FunctionArgument<T> = T extends (arg: infer U) => any ? U : never

const stringFn = (arg: string) => arg.toUpperCase()
const numberFn = (arg: number) => arg * 2

type StringArg = FunctionArgument<typeof stringFn> // string
type NumberArg = FunctionArgument<typeof numberFn> // number

type Filter<T, Condition> = T extends Condition ? T : never

type NumbersOnly = Filter<string | number | boolean, number> // number
type StringsAndNumbers = Filter<string | number | boolean, string | number> // string | number

type MixedArray = (string | number | boolean)[]
type FilterArray<T, Condition> = T extends (infer U)[] ? (U extends Condition ? U[] : never) : never

// Example: Filter only numbers from a mixed array
type NumbersOnlyArray = FilterArray<MixedArray, number> // number[]

const mixedArray: MixedArray = ["Alice", 42, true, 23, "Bob", false]

const filterNumbers = (arr: MixedArray): NumbersOnlyArray => {
  return arr.filter((item): item is number => typeof item === "number")
}

const numbers = filterNumbers(mixedArray)
console.log(numbers) // Output: [42, 23]

type Person = {
  name: string
  age?: number
  address?: string
}

// Conditional type to exclude optional properties
type NonOptionalKeys<T> = { [k in keyof T]-?: undefined extends T[k] ? never : k }[keyof T]

type RequiredPersonKeys = NonOptionalKeys<Person> // "name" (only non-optional key)
