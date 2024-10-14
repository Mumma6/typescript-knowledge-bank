declare const brand: unique symbol

// The Brand type to create unique types for each identifier
type Brand<T, TBrand> = T & { [brand]: TBrand }

// Defining branded types for PostId and UserId
type PostId = Brand<string, "PostId">
type UserId = Brand<string, "UserId">

// Interfaces using branded types for ID fields
interface User {
  id: UserId
  name: string
}

interface Post {
  id: PostId
  title: string
}

// Bad example using simple strings for IDs, which can be mixed up
interface BadUser {
  id: string
  name: string
}

interface BadPost {
  id: string
  title: string
}

// Example database
const db = {
  users: [
    { id: "user-123", name: "Alice" },
    { id: "user-456", name: "Bob" },
  ] as BadUser[], // BadUser[] uses string-based IDs
  posts: [
    { id: "post-abc", title: "First Post" },
    { id: "post-def", title: "Second Post" },
  ] as BadPost[], // BadPost[] uses string-based IDs
}

// Functions using simple string types (error-prone)
const getUserById = (id: string) => {
  return db.users.find((user) => user.id === id)
}

const getPostById = (id: string) => {
  return db.posts.find((post) => post.id === id)
}

// Calling the functions with string-based IDs (can be mixed up at runtime)
const badUser = getUserById("post-abc") // Mistakenly passing a PostId to getUserById
const badPost = getPostById("user-123") // Mistakenly passing a UserId to getPostById

console.log(badUser) // Undefined or incorrect result
console.log(badPost) // Undefined or incorrect result

// --------------------------- //
// With Branded Types (Type-safe) //
// --------------------------- //

// Users and posts using branded types
const user1: User = { id: "user-123" as UserId, name: "Alice" }
const user2: User = { id: "user-456" as UserId, name: "Bob" }

const post1: Post = { id: "post-abc" as PostId, title: "First Post" }
const post2: Post = { id: "post-def" as PostId, title: "Second Post" }

// Database with branded types
const brandedDb = {
  users: [user1, user2],
  posts: [post1, post2],
}

// Functions using branded types (type-safe)
const getBrandedUserById = (id: UserId) => {
  return brandedDb.users.find((user) => user.id === id)
}

const getBrandedPostById = (id: PostId) => {
  return brandedDb.posts.find((post) => post.id === id)
}

// Calling branded functions with the correct IDs (compile-time safety)
const user = getBrandedUserById(user1.id) // Correct: Only accepts UserId
const post = getBrandedPostById(post1.id) // Correct: Only accepts PostId

// Uncommenting the following lines will cause compile-time errors:
// const wrongUser = getBrandedUserById(post1.id)  // Error: Argument of type 'PostId' is not assignable to parameter of type 'UserId'
// const wrongPost = getBrandedPostById(user1.id)  // Error: Argument of type 'UserId' is not assignable to parameter of type 'PostId'

console.log(user) // Correct user
console.log(post) // Correct post
