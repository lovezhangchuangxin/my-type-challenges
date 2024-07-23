type Key = keyof any

let tuple: [string, number] = ['foo', 1]

type Tuple = [string, number, boolean]
type TupleValue = Tuple[number]
type TupleLength = Tuple['length']

const obj = { foo: 'bar' } as const

const tuple2 = ['foo', 'bar'] as const // readonly ['foo', 'bar']

export {}
