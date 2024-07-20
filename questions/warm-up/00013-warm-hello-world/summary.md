# 总结

`Hello World` 是类型体操的热身题目，本身不难，主要是熟悉做题的规则，以及提前复习一些基本的概念。

## 知识点

typescript 中的基本类型不必多说，常见基本类型简要列举如下：

-   number
-   boolean
-   string
-   symbol
-   bigint
-   null
-   undefined
-   unknown
-   never
-   void
-   any

**unknown 类型是所有类型的父类型，是全集。never 类型是所有类型的子类型，是空集**

**any 是表示任意类型，它其实破坏了 typescript 的类型系统**

### 对交叉类型 & 的理解

交叉类型的本质是对多个类型的合并，相当于集合运算中的交集。

**基本类型的交叉类型：**

```typescript
type C1 = 1 & 2 // never 因为1和2不相交，结果为空集
type C2 = 1 & number // 1 1是数字字面量类型，字面量类型是对应基本类型的子类型，所以1和number的交叉类型就是1
type C3 = 1 & (string | number) // 1
type C4 = 1 & unknown // 1
type C5 = 1 & never // never
type C6 = 1 & any // any 注意 any 破坏了typescript类型系统，和 any 类型运算的结果依然是any类型
```

**引用类型的交叉类型**

我们先看下面这个例子

```typescript
interface Person1 {
    name: string
}
interface Person2 {
    age: number
}
type Person = Person1 & Person2

const person: Person = {
    name: 'zhangsan',
    age: 18,
}
```

Person1 和 Person2 的交叉类型，居然同时具有了 name 和 age 属性！直观上看 Person1 和 Person2 不相交呀？

其实，Person1 这个类型并不是限制对象只有 name 属性，而是说对象至少包含 name 属性，所以 Person1 类型是所有包含 name 属性的类型的父类型，Person2 同理。

### 联合类型和交叉类型

A 和 B 是两个对象类型
则有 `keyof(A | B) = keyof(A) & keyof(B)`

### IsAny

现在我们来实现一个类型，用来判断一个类型是否是 any 类型
首先我们要知道，类型系统中不能用 = 号，而是用 `extends` 来表示继承关系。_对于基本类型来说，它要么继承自身类型，要么继承 any 类型_。

构造如下：

```typescript
// 判断一个类型是否是any类型
type IsAny<T> = 0 extends 1 & T ? true : false
// 测试
type D1 = IsAny<any> // true
type D2 = IsAny<unknown> // false
type D3 = IsAny<never> // false
type D4 = IsAny<1> // false
```
