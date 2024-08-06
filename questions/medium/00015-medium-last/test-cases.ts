import type { Equal, Expect } from '@/utils'
import { Last } from './answer'

type cases = [
    Expect<Equal<Last<[2]>, 2>>,
    Expect<Equal<Last<[3, 2, 1]>, 1>>,
    Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
]
