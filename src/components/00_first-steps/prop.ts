export default function prop<T extends Record<string, unknown>>(object: T, key: keyof T) {
  return object[key];
}
