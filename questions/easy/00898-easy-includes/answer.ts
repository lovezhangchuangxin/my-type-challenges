import { Equal } from '@/utils'

type Includes<T extends readonly any[], U> = T extends [infer F, ...infer R]
    ? Equal<F, U> extends true
        ? true
        : Includes<R, U>
    : false

export { Includes }
