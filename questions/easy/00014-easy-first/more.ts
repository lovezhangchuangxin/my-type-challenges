// 本题的 n 种答案

type First1<T extends any[]> = T extends [] ? never : T[0]
type First2<T extends any[]> = T['length'] extends 0 ? never : T[0]
type First3<T extends any[]> = T extends [infer A, ...any[]] ? A : never
type First4<T extends any[]> = T[number] extends never ? never : T[0]
type First5<T extends any[]> = '0' extends keyof T ? never : T[0]

type First<T extends any[]> = T extends [infer A, ...infer _] ? A : never
type A = First<number[]> // never

export {}
