# 总结

## PropertyKey

`PropertyKey` 是 TypeScript 的内置类型， 表示所有属性名的类型。

```typescript
declare type PropertyKey = string | number | symbol
```

我们之前学过 `keyof`，也可以通过它得到相同的类型。

```typescript
type Key = keyof any
```

## 元组

元组是 TypeScript 的一种特殊的数组类型，它可以指定每个元素的类型。

```typescript
let tuple: [string, number] = ['foo', 1]
```

获取数组或者元组的成员的类型可以使用索引访问类型，甚至还可以计算长度：

```typescript
type Tuple = [string, number, boolean]
type TupleValue = Tuple[number]
type TupleLength = Tuple['length']
```

## as const

`as const` 是 TypeScript 的一种类型断言，可以将一个对象字面量转换为只读的形式。

```typescript
const obj = { foo: 'bar' } as const // { readonly foo: 'bar' }
```

也可以用于元组。

```typescript
const tuple2 = ['foo', 'bar'] as const // readonly ['foo', 'bar']
```
