// unknown 类型是任意类型的父类型，never 类型是任意类型的子类型
// 判断 T 是否是 K 的父类型
type IsFather<T, K> = K extends T ? true : false
// 判断 T 是否是 K 的子类型
type IsSon<T, K> = T extends K ? true : false

// unknown 是任意类型的父类型验证
type A1 = IsFather<unknown, 1> // true
type A2 = IsFather<unknown, '1'> // true
type A3 = IsFather<unknown, true> // true
type A4 = IsFather<unknown, undefined> // true
type A5 = IsFather<unknown, null> // true
type A6 = IsFather<unknown, void> // true
type A7 = IsFather<unknown, any> // true

type A8 = IsFather<unknown, never> // never

// unknown 是全集，与任意类型的联合还是 unknown，但是遇到 any 会被破坏
type A9 = string | unknown
type A10 = unknown | any

// never 是任意类型的子类型验证
type B1 = IsSon<never, 1> // never
type B2 = IsSon<never, '1'> // never
type B3 = IsSon<never, unknown> // never

// 交叉类型
// 基本类型的交叉类型
type C1 = 1 & 2 // never
type C2 = 1 & number // 1
type C3 = 1 & (string | number) // 1
type C4 = 1 & unknown // 1
type C5 = 1 & never // never
type C6 = 1 & any // any

// 引用类型的交叉类型
interface Person1 {
    name: string
}
interface Person2 {
    age: number
}
type Person = Person1 & Person2
type PersonKey = keyof Person // age | name
const person: Person = {
    name: 'zhangsan',
    age: 18,
}

// 合并两个对象
function merge<A, B>(a: A, b: B): A & B {
    return { ...a, ...b }
}
const person1 = merge({ name: 'zhangsan' }, { age: 18 })

// 判断一个类型是否是 any 类型
type IsAny<T> = 0 extends 1 & T ? true : false
// 测试
type D1 = IsAny<any> // true
type D2 = IsAny<unknown> // false
type D3 = IsAny<never> // false
type D4 = IsAny<1> // false

export {}
