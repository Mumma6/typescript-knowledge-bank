# Essential Types in TypeScript

This section covers the fundamental types and concepts in TypeScript, including:

## 1-1: Basic Types
- **String**: Text values (`const name: string = "Alice";`)
- **Number**: Numeric values (`const age: number = 34;`)
- **Boolean**: Boolean values (`const isDeveloper: boolean = true;`)
- **Array**: List of elements (`const skills: string[] = ["TypeScript", "Node.js"];`)
- **Tuple**: Fixed-length array with different types (`const personInfo: [string, number, boolean];`)
- **Union Types**: Values that can be one of multiple types (`let statusCode: string | number;`)
- **Enums**: Set of named constants (`enum Role { Admin = "ADMIN", User = "USER" }`)

## 1-2: Interfaces and Type Aliases
- **Interfaces**: Defining object shapes (`interface Person { name: string; age: number; }`)
- **Optional Properties**: Allowing optional fields (`interface Car { make: string; year?: number; }`)
- **Extending Interfaces**: Inheritance for interfaces (`interface Dog extends Animal { breed: string; }`)
- **Union & Intersection Types**: Combining or restricting types (`type StringOrNumber = string | number;`)

## 1-3: Type Annotations
- **Function Type Annotations**: Adding types to function parameters and return values.
- **Optional Parameters & Default Values**: Setting optional function parameters and defaults.
- **Object and Array Annotations**: Annotating objects and arrays.

## 1-4: Literal Types
- **String Literals**: Limiting possible values (`type Env = "development" | "production";`)
- **Readonly**: Preventing reassignment of properties.
- **Unique Symbols**: Guaranteeing uniqueness in symbols.

## 1-5: Utility Types
- **Partial, Required, Readonly**: Utility types to transform types.
- **Pick, Omit, Exclude, Extract**: Narrowing or expanding type shapes.
- **Awaited, Parameters, ReturnType**: Working with function and promise types.

Refer to `index.ts` files in each subfolder for detailed code examples.