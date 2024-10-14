class TypeSafeMap<TMap extends Record<string, unknown> = {}> {
  // The map holds key-value pairs with strict typing
  private map: TMap

  // Constructor initializes the map as an empty object of type TMap
  constructor() {
    this.map = {} as TMap
  }

  // The 'get' method returns the value associated with the provided key.
  // K extends keyof TMap ensures that the key exists in the map and returns the corresponding value type.
  get<K extends keyof TMap>(key: K): TMap[K] {
    return this.map[key]
  }

  // The 'set' method allows us to add new key-value pairs to the map.
  // K is constrained to strings, and P is constrained to string | number | boolean | arrays | objects.
  // The method returns a new instance of TypeSafeMap with the updated map, maintaining immutability.
  set<K extends string, P extends string | number | boolean | Array<unknown> | object>(key: K, value: P): TypeSafeMap<TMap & Record<K, P>> {
    // We cast this.map to Record<K, P> to safely assign the value to the key.
    ;(this.map as Record<K, P>)[key] = value as P

    // Return the new TypeSafeMap with the updated key-value pair.
    return this as unknown as TypeSafeMap<TMap & Record<K, P>>
  }
}

// Example usage: Creating a configuration map using the TypeSafeMap class
const appConfig = new TypeSafeMap()
  .set("appName", "MyApp") // String value
  .set("version", 1.0) // Number value
  .set("isFeatureEnabled", true) // Boolean value
  .set("supportedLanguages", ["en", "fr", "es"] as const) // 'as const' ensures literal string array type
  .set("theme", { primaryColor: "blue", secondaryColor: "green" } as const) // 'as const' ensures literal object type

// Retrieving values using the 'get' method:
const appName = appConfig.get("appName") // Expected: "MyApp"
const version = appConfig.get("version") // Expected: 1.0
const isFeatureEnabled = appConfig.get("isFeatureEnabled") // Expected: true
const supportedLanguages = appConfig.get("supportedLanguages") // Expected: ["en", "fr", "es"]
const theme = appConfig.get("theme") // Expected: { primaryColor: "blue", secondaryColor: "green" }

// Outputs for verification:
console.log(appName) // Output: "MyApp"
console.log(version) // Output: 1.0
console.log(isFeatureEnabled) // Output: true
console.log(supportedLanguages) // Output: ["en", "fr", "es"]
console.log(theme) // Output: { primaryColor: "blue", secondaryColor: "green" }
