// Define the Some variant of the Option type
interface Some<A> {
  readonly _tag: "Some"
  readonly value: A // Stores the value when it's a valid value
}

// Define the None variant of the Option type (represents "no value")
interface None {
  readonly _tag: "None"
}

// Union type for Option, which can be Some or None
type Option<A> = Some<A> | None

// Utility function to check if a value is null or undefined
const isNullOrUndefiend = (x: unknown): boolean => x === null || x === undefined

// Function to create a Some option (for valid values)
const some = <A>(x: A): Option<A> => ({
  _tag: "Some",
  value: x,
})

// Predefined None option for "no value"
const none: Option<never> = {
  _tag: "None",
}

// Type guard to check if an option is Some
const isSome = <A>(x: Option<A>): x is Some<A> => x._tag === "Some"

// Function to create an Option from a value, returns None if null or undefined
const getOption = <A>(a: A): Option<NonNullable<A>> => (isNullOrUndefiend(a) ? none : some(a as NonNullable<A>))

// Function to fold (reduce) an Option: apply one function for None, another for Some
const optionFold = <A, B>(oa: Option<A>, onNone: () => B, onSome: (a: A) => A | B): A | B => (isSome(oa) ? onSome(oa.value) : onNone())

// Function to get the value of an Option or return a default value (else)
const getOptionOrElse = <A, B>(x: Option<A>, e: B) => (isSome(x) ? x.value : e)

// Pipe functions together, applying transformations if Some, otherwise return None
function optionPipe<A, B>(oa: Option<A>, f: (a: A) => B): Option<B>
function optionPipe<A, B, C>(oa: Option<A>, f: (a: A) => B, g: (b: B) => C): Option<C>
function optionPipe<A, B, C, D>(oa: Option<A>, f: (a: A) => B, g: (b: B) => C, h: (c: C) => D): Option<D>
function optionPipe(oa: Option<unknown>, ...fns: ((a: unknown) => unknown)[]): Option<unknown> {
  return fns.reduce((acc: Option<unknown>, fn) => {
    if (isSome(acc)) {
      const result = fn(acc.value)
      if (isNullOrUndefiend(result)) {
        return none
      }
      return some(result)
    }
    return none
  }, oa)
}

// getOption
const option1 = getOption(10) // Some(10)
const option2 = getOption(null) // None

console.log(option1) // Output: { _tag: 'Some', value: 10 }
console.log(option2) // Output: { _tag: 'None' }

// optionFold
const result1 = optionFold(
  option1,
  () => "No value",
  (v) => `Number: ${v * 2}`
)
const result2 = optionFold(
  option2,
  () => "No value",
  (v) => `Number: ${v * 2}`
)

console.log(result1) // Output: Number: 20
console.log(result2) // Output: "No value"

// getOptionOrElse
const oresult3 = getOptionOrElse(option1, 0) // 10
const oresult4 = getOptionOrElse(option2, 0) // 0

console.log(oresult3) // Output: 10
console.log(oresult4) // Output: 0

// optionPipe
const pipeResult1 = optionPipe(
  option1,
  (x) => x + 5,
  (x) => x * 2
)
const pipeResult2 = optionPipe(
  option2,
  (x) => x + 5,
  (x) => x * 2
)

console.log(pipeResult1) // Output: { _tag: 'Some', value: 30 }
console.log(pipeResult2) // Output: { _tag: 'None' }
