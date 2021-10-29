type MyObj<K extends string, T> = { [K0 in K]: T };
type MyKeys<T extends string> = readonly T[];

export default function makeObj<K extends string, T>(
  myKeys: MyKeys<K>,
  defaultValue: T,
): MyObj<K, T> {
  const myObj = {} as MyObj<K, T>;
  for (let i = 0; i < myKeys.length; i += 1) {
    const key = myKeys[i];
    myObj[key] = defaultValue;
  }

  return myObj;
}
