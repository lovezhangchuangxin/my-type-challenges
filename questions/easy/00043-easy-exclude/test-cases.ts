import type { Equal, Expect } from '@/utils'
import { MyExclude } from './answer'

type cases = [
    Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
    Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
    Expect<
        Equal<
            MyExclude<string | number | (() => void), Function>,
            string | number
        >
    >,
]
