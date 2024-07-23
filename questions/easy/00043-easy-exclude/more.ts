type Flatten<Type> = Type extends Array<infer Item> ? Item : Type

type Str = Flatten<string[]> // string

type ToArray<Type> = [Type] extends [any] ? Type[] : never

type StrArrOrNumArr = ToArray<string | number> // (string | number)[]

export {}
