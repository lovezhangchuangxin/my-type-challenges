interface Point {
    readonly x: number
    readonly y: number
}

let p1: Point = { x: 10, y: 20 }
// @ts-expect-error
p1.x = 5 // 无法为“x”赋值，因为它是只读属性。

type MutablePoint<T> = {
    -readonly [P in keyof T]: T[P]
}

let p2: MutablePoint<Point> = { x: 10, y: 20 }
p2.x = 5 // OK

let a: readonly number[] = [1, 2, 3]
// @ts-expect-error
a[0] = 4 // 类型“readonly number[]”中的索引签名仅允许读取。

let b: ReadonlyArray<number> = [1, 2, 3]
// @ts-expect-error
b[0] = 4 // 类型“readonly number[]”中的索引签名仅允许读取。

export {}
