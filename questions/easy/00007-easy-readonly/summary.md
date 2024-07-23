# 总结

## readonly

TypeScript 中可以使用 `readonly` 来声明对象类型的属性不可变。

```typescript
interface Point {
    readonly x: number
    readonly y: number
}

let p1: Point = { x: 10, y: 20 }
p1.x = 5 // 无法为“x”赋值，因为它是只读属性。
```

使用工具类型 `Readonly<T>` 类型可以将对象类型的所有属性变为只读。

使用 `-` 去除 `readonly`：

```typescript
type MutablePoint<T> = {
    -readonly [P in keyof T]: T[P]
}

let p2: MutablePoint<Point> = { x: 10, y: 20 }
p2.x = 5 // OK
```

## 只读数组

使用 `readonly` 修饰数组类型，可以使数组只读。

```typescript
let a: readonly number[] = [1, 2, 3]
a[0] = 4 // 类型“readonly number[]”中的索引签名仅允许读取。
```

还可以使用 `ReadonlyArray<T>` 类型。

```typescript
let b: ReadonlyArray<number> = [1, 2, 3]
b[0] = 4 // 类型“readonly number[]”中的索引签名仅允许读取。
```

## readonly 和 const 的区别

`readonly` 用于对象属性，`const` 用于变量。
