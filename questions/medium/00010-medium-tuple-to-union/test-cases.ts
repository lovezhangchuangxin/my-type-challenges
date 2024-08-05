import type { Equal, Expect } from '@/utils'
import { TupleToUnion } from './answer'

type cases = [
    Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
    Expect<Equal<TupleToUnion<[123]>, 123>>,
]
