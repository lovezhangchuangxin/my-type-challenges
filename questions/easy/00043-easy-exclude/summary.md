# 总结

## 条件类型

```typescript
SomeType extends SomeOtherType ? TrueType : FalseType
```

TypeScript 中使用 `extends` 实现条件类型，如果 `SomeType` 能够赋值给 `SomeOtherType`，则返回 `TrueType`，否则返回 `FalseType`。

> 条件类型的强大之处在于和泛型的结合

## 条件类型推断

```typescript
type Flatten<Type> = Type extends Array<infer Item> ? Item : Type
```

## 条件类型分配

当条件类型用于联合类型时，联合类型中的每一个类型将分别进行条件类型的判断。

```typescript
type ToArray<Type> = Type extends any ? Type[] : never

type StrArrOrNumArr = ToArray<string | number> // string[] | number[]
```

为了避免这种行为，可以使用 `[]` 来包裹条件类型。

```typescript
type ToArray<Type> = [Type] extends [any] ? Type[] : never

type StrArrOrNumArr = ToArray<string | number> // (string | number)[]
```
