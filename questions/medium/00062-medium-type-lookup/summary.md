# 总结

## Distribute Conditional Types

当条件类型用于范型时，如果给定联合类型，它们会变成分配类型。

```typescript
type A = 'a' | 'b' extends 'a' ? 1 : 2 // 2

type Test<T> = T extends 'a' ? 1 : 2
type B = Test<'a' | 'b'> // 1 | 2
```

没有使用范型时，条件类型中的联合类型并不会分配。
而使用范型和条件类型时，上面的 `Test<'a' | 'b'>` 等价于 `Test<'a'> | Test<'b'>`
