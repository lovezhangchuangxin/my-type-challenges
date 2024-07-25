// type MyReadonly2<T, K extends keyof T = keyof T> = {
//     [P in keyof T as P extends K ? never : P]: T[P]
// } & {
//     readonly [P in K]: T[P]
// }

// type MyReadonly2<T, K extends keyof T = keyof T> = {
//     [P in keyof T as Exclude<P, K>]: T[P]
// } & {
//     readonly [P in K]: T[P]
// }

type MyReadonly2<T, K extends keyof T = keyof T> = Omit<T, K> &
    Readonly<Pick<T, K>>

export { MyReadonly2 }
