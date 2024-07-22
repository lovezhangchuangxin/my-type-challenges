import { Equal, Expect } from '@/utils'

interface Person {
    name: string
    age: number
    alive: boolean
}

type PersonKeys = keyof Person // 'name' | 'age' | 'alive'
type Case1 = Expect<Equal<PersonKeys, 'name' | 'age' | 'alive'>>

type Arrayish = { [n: number]: unknown }
type A = keyof Arrayish // number

type Mapish = { [k: string]: boolean }
type M = keyof Mapish // string | number

type SymbolKeys = keyof { [k: symbol]: any } // symbol

type Error = keyof { [k: `${string}boolean`]: any } // 索引签名参数类型必须是 “string”、“number”、“symbol”或模板文本类型。

type AnyKey = keyof any // string | number | symbol

type NameType = Person['name'] // string
type AgeType = Person['age'] // number
type AliveType = Person['alive'] // boolean

type I1 = Person['age' | 'name'] // string | number
type I2 = Person[keyof Person] // string | number | boolean
type AliveOrName = 'alive' | 'name'
type I3 = Person[AliveOrName] // string | boolean

const arr = [1, '2', true]
type ArrType = (typeof arr)[number] // string | number | boolean

type Readonly<T> = {
    readonly [P in keyof T]: T[P]
}

type ReadonlyPerson = Readonly<Person>

type Getters<Type> = {
    [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
}

type LazyPerson = Getters<Person> // { getName: () => string, getAge: () => number, getAlive: () => boolean }

export {}
