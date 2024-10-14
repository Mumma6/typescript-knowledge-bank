# TypeScript Knowledge Bank

This repository is a collection of TypeScript examples and knowledge, ranging from fundamental topics to advanced techniques. It is intended to serve as a comprehensive resource for developers looking to learn and master TypeScript, as well as a showcase of advanced TypeScript skills.

## Structure

The repository is organized into folders by topic, with each folder containing TypeScript files that demonstrate specific concepts. Below are the key sections:

### 1. Essential Types
Covers basic TypeScript types and concepts:
- **1-1 Basic Types**: Demonstrates primitive types like `string`, `number`, `boolean`.
- **1-2 Interfaces and Types**: Differences between `interface` and `type`.
- **1-3 Type Annotations**: How to explicitly annotate types in functions and variables.
- **1-4 Literals**: Usage of literal types.
- **1-5 Utility Types**: Key TypeScript utility types like `Partial`, `Readonly`, `Record`.

### 2. Type Manipulation
Advanced type operations:
- **2-1 Generics**: Types that take parameters.
- **2-2 Keyof Type Operator**: Creating new types using the `keyof` operator.
- **2-3 Typeof Type Operator**: Creating new types based on the value using the `typeof` operator.
- **2-4 Indexed Access Types**: Accessing types using `Type['property']`.
- **2-5 Conditional Types**: Types that behave like conditional logic.
- **2-6 Mapped Types**: Transforming types using mapped type patterns.
- **2-7 Template Literal Types**: Constructing types using template literals.

### 3. Functional Programming
TypeScript examples focused on functional programming techniques:
- **3-1 Option Types**: Creating `Some` and `None` types for safer null checks.
- **3-2 Pipes**: Function composition using pipes.
- **3-3 Partial Application**: How to partially apply arguments to functions.
- **3-4 Currying**: Breaking down functions into unary versions.
- **3-5 Overloading**: Function overloading for different input types.

### 4. Classes and OOP
TypeScript class examples and object-oriented programming patterns:
- **4-1 Map**: Demonstrating mapping patterns with classes.
- **4-2 Factory**: Implementing the factory pattern with TypeScript classes.
- **4-3 Zod validation**: Schema validations with ZOD.

### 5. Advanced Topics
In-depth TypeScript features:
- **5-1 Branded Types**: Using branded types to prevent accidental type misuse.
- **5-2 Type-Safe Assertions**: Creating assertions and type guards.

## Running Examples

To install the dependencies, run the following command:

```bash
npm install
```

Each folder contains runnable TypeScript files. You can run a specific example using npm scripts. For example, to run the example from `1-1-basic-types`, use the following command:

```bash
npm run 1-1
```

You can find the specific commands for each folder under the scripts section in package.json. Adjust the folder names accordingly for each example you'd like to run.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, feel free to:

- **Open an issue**: If you have any suggestions, bugs, or questions, open an issue.
- **Submit a pull request (PR)**: If you have code improvements or new examples, feel free to fork the repository, make your changes, and submit a PR.

All contributions are appreciated, and together we can improve this knowledge bank for the TypeScript community.
