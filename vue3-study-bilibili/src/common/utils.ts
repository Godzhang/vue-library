// type IsString<T> = T extends string ? true : false;
// type A = IsString<string>
// type B = IsString<number>

// type ToArray<T> = T[]
// type A = ToArray<number>
// type B = ToArray<number | string>
// const b:B = [1,'b']

// type ToArray2<T> = T extends unknown ? T[] : T[]
// type A2 = ToArray2<number>
// type B2 = ToArray2<number | string>
// const b2:B2 = [1,'2']

// type WithOut<T,U> = T extends U ? never : T;
// type A = WithOut<boolean |number|string, boolean>

// type ElementType<T> = T extends unknown[] ? T[number] : T;
// type A = ElementType<string[]>

// type ElementType2<T> = T extends (infer U)[] ? U : T;
// type B = ElementType2<string[]>

// type SecondArg<F> = F extends (a:any,b:infer B) => any ? B : never;
// type F = typeof Array['prototype']['slice']
// type G = SecondArg<F>

// type A = NonNullable<number|null>

// type User = {
//   name: string;
//   age: number
// }
// type A = keyof 'name'|'age'
// type Res = Omit<User, 'name'|'age'>
