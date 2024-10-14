type Person = {
  name: string
  age: number
  address: {
    street: string
    city: string
  }
}

// Simple usage of Indexed Access Type
type PersonName = Person["name"] // string
type PersonAge = Person["age"] // number
type PersonAddress = Person["address"] // { street: string; city: string; }

// Example 1: Function to log a specific property of Person based on Indexed Access Type
const logPersonProperty = <K extends keyof Person>(person: Person, key: K): Person[K] => {
  console.log(`${key}: ${person[key]}`)
  return person[key]
}

const person: Person = {
  name: "Alice",
  age: 30,
  address: { street: "123 Main St", city: "Wonderland" },
}

logPersonProperty(person, "name") // Output: name: Alice
logPersonProperty(person, "age") // Output: age: 30
logPersonProperty(person, "address") // Output: address: { street: '123 Main St', city: 'Wonderland' }

// Example 2: Accessing a nested property type using Indexed Access
type StreetType = Person["address"]["street"] // string

// Example 3: Using Indexed Access with arrays
type PersonArray = Person[]
type FirstPersonName = PersonArray[0]["name"] // string

// Example 4: Dynamically selecting types based on a key
const getPersonProperty = <K extends keyof Person>(key: K): Person[K] => {
  if (key === "name") {
    return "This is a name" as Person[K] // TypeScript knows the return type is string
  }
  if (key === "age") {
    return 25 as Person[K] // TypeScript knows the return type is number
  }
  return { street: "Unknown", city: "Unknown" } as Person[K] // TypeScript infers it as an address object
}

console.log(getPersonProperty("name")) // Output: This is a name
console.log(getPersonProperty("age")) // Output: 25
