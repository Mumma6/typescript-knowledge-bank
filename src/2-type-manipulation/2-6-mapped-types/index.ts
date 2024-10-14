type Person = {
  name: string
  age: number
}

type ReadOnlyPerson = {
  readonly [K in keyof Person]: Person[K]
}

const person: ReadOnlyPerson = {
  name: "Alice",
  age: 30,
}

// Error: Cannot assign to 'age' because it is a read-only property.
// person.age = 31

type ReadonlyPerson = {
  readonly name: string
  readonly age: number
}

type Mutable<T> = {
  -readonly [K in keyof T]: T[K]
}

type MutablePerson = Mutable<ReadonlyPerson>

const mutablePerson: MutablePerson = {
  name: "Alice",
  age: 30,
}

// Now we can modify the properties
mutablePerson.age = 31 // Works now

type OptionalPerson = {
  [K in keyof Person]?: Person[K]
}

const partialPerson: OptionalPerson = {
  name: "Alice",
  // 'age' is optional here
}

type NumberToString<T> = {
  [K in keyof T]: T[K] extends number ? string : T[K]
}

type PersonWithStringifiedAge = NumberToString<Person>

const stringifiedPerson: PersonWithStringifiedAge = {
  name: "Alice",
  age: "30", // Now 'age' is a string instead of a number
}

type PersonPromises = {
  [K in keyof Person]: Promise<Person[K]>
}

const personWithPromises: PersonPromises = {
  name: Promise.resolve("Alice"),
  age: Promise.resolve(30),
}

// Example usage
personWithPromises.name.then((name) => console.log(name)) // "Alice"

type WrapStringInArray<T> = {
  [K in keyof T]: T[K] extends string ? T[K][] : T[K]
}

type WrappedPerson = WrapStringInArray<Person>

const wrappedPerson: WrappedPerson = {
  name: ["Alice"], // String property is now an array of strings
  age: 30, // Non-string properties remain unchanged
}

type PersonWithAddress = {
  name: string
  age: number
  address: {
    street: string
    city: string
  }
}

type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K]
}

type ReadonlyPersonWithAddress = DeepReadonly<PersonWithAddress>

const personWithAddress: ReadonlyPersonWithAddress = {
  name: "Alice",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Wonderland",
  },
}

// Error: Cannot assign to 'city' because it is a read-only property.
// personWithAddress.address.city = "New City"

type AddPrefix<T, P extends string> = {
  [K in keyof T as `${P}${Capitalize<string & K>}`]: T[K]
}

type PersonWithPrefixedKeys = AddPrefix<Person, "get">

// Resulting type:
// {
//   getName: string;
//   getAge: number;
// }

const personWithPrefix: PersonWithPrefixedKeys = {
  getName: "Alice",
  getAge: 30,
}
