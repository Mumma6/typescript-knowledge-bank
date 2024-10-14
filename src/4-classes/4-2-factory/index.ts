abstract class Shape<T> {
  constructor(public dimensions: T) {}

  abstract getArea(): number
}

// Concrete class extending the abstract class with typed constructor
class Circle extends Shape<{ radius: number }> {
  getArea(): number {
    return Math.PI * this.dimensions.radius ** 2
  }
}

class Square extends Shape<{ side: number }> {
  getArea(): number {
    return this.dimensions.side ** 2
  }
}

// Factory function using generic constructor for abstract class
function createShape<T>(type: { new (dimensions: T): Shape<T> }, dimensions: T): Shape<T> {
  return new type(dimensions)
}

// Usage
const circle = createShape(Circle, { radius: 5 })
const square = createShape(Square, { side: 10 })

console.log(circle.getArea()) // 78.54
console.log(square.getArea()) // 100
