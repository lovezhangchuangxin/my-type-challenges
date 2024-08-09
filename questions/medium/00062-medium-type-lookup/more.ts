type A = 'a' | 'b' extends 'a' ? 1 : 2 // 2

type Test<T> = T extends 'a' ? 1 : 2
type B = Test<'a' | 'b'> // 1 | 2
