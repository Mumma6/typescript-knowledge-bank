// Parameters<Type>
type FunctionExample = (x: number, y: string) => boolean
type FunctionParams = Parameters<FunctionExample> // [number, string]

const logParams = (...params: FunctionParams) => {
  console.log("Parameters example:", params)
}
logParams(42, "Hello") // Output: Parameters example: [ 42, 'Hello' ]

// ConstructorParameters<Type>
class UserClass {
  constructor(public name: string, public age: number) {}
}
type ConstructorParams = ConstructorParameters<typeof UserClass> // [string, number]

const userInstance = new UserClass(...(["Alice", 30] as ConstructorParams))
console.log("ConstructorParameters example:", userInstance) // Output: ConstructorParameters example: UserClass { name: 'Alice', age: 30 }

// ReturnType<Type>
type FunctionReturnType = ReturnType<FunctionExample> // boolean
const getBoolean: FunctionExample = (x, y) => x > 10
const boolResult: FunctionReturnType = getBoolean(12, "Test")
console.log("ReturnType example:", boolResult) // Output: ReturnType example: true

// InstanceType<Type>
type InstanceExample = InstanceType<typeof UserClass> // UserClass
const instance: InstanceExample = new UserClass("Bob", 28)
console.log("InstanceType example:", instance) // Output: InstanceType example: UserClass { name: 'Bob', age: 28 }
