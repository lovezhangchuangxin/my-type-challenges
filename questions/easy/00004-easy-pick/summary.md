# 总结

## keyof 和 索引签名

`keyof` 操作符接收一个对象类型，返回其所有属性组成的联合类型。

```typescript
interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person // 'name' | 'age'
```

如果对象类型具有数字或者字符串的索引签名，则 `keyof` 会返回这些类型：

```typescript
type Arrayish = { [n: number]: unknown }
type A = keyof Arrayish // number

type Mapish = { [k: string]: boolean }
type M = keyof Mapish // string | number

type SymbolKeys = keyof { [k: symbol]: any } // symbol
```

注意，由于 JavaScript 中对象的数字类型的键会被转为字符串，所以字符串索引签名的键会包含数字类型。

注意，索引签名参数类型只能是 `string`、`number`、`symbol`、**模板文本类型**或者它们的联合类型。一旦涉及其他类型，`keyof` 就会报错。

```typescript
type Error = keyof { [k: boolean]: any } // 索引签名参数类型必须是 “string”、“number”、“symbol”或模板文本类型。
```

## 模板文本类型（模板字面量）

[模板字面量类型参考](https://bosens-china.github.io/Typescript-manual/download/zh/handbook-v2/type-manipulation/template-literal-types.html#%E6%A8%A1%E7%89%88%E5%AD%97%E9%9D%A2%E9%87%8F%E7%B1%BB%E5%9E%8B)

## 索引访问类型

我们可以通过索引访问类型来获取对象类型的属性类型。

```typescript
interface Person {
    age: number
    name: string
    alive: boolean
}

type NameType = Person['name'] // string
type AgeType = Person['age'] // number
type AliveType = Person['alive'] // boolean
```

索引类型本身也是类型，因此我们可以使用联合类型，`keyof` 或者其他类型：

```typescript
type I1 = Person['age' | 'name'] // string | number
type I2 = Person[keyof Person] // string | number | boolean
type AliveOrName = 'alive' | 'name'
type I3 = Person[AliveOrName] // string | boolean
```

可以使用索引访问类型来获取数组的元素类型：

```typescript
const arr = [1, '2', true]
type ArrType = (typeof arr)[number] // string | number | boolean
```

## 映射类型

基于一个类型得到另一个类型。映射类型建立在索引签名的语法上，

```typescript
type Readonly<T> = {
    readonly [P in keyof T]: T[P]
}

type ReadonlyPerson = Readonly<Person>
```

重新映射 key：

```typescript
type Getters<Type> = {
    [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
}

type LazyPerson = Getters<Person> // { getName: () => string, getAge: () => number, getAlive: () => boolean }
```
