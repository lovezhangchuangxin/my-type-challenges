// type TupleToUnion<T extends any[]> = T[number]

// type TupleToUnion<T extends readonly any[]> =
//     T extends ReadonlyArray<infer R> ? R : never

type TupleToUnion<T> = T extends (infer R)[] ? R : never

export { TupleToUnion }
