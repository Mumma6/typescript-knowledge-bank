const double = (x: number) => x * 2
const increment = (x: number) => x + 1

const pipe =
  <T>(...fns: Array<(arg: T) => T>) =>
  (initial: T): T =>
    fns.reduce((acc, fn) => fn(acc), initial)

const result = pipe(double, increment)(5) // Output: 11
