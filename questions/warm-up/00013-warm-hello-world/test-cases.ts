import type { Equal, Expect, NotAny } from '@/utils'
import { HelloWorld } from './answer'

type cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>]
