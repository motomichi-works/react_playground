type ReadonlyArray<T extends string> = readonly T[];

export default function makeObjFromReadonlyArray<K extends string, T>(
  readonlyArray: ReadonlyArray<K>,
  defaultValue: T,
): Record<K, T> {
  const myObj = {} as Record<K, T>;
  for (let i = 0; i < readonlyArray.length; i += 1) {
    const key = readonlyArray[i];
    myObj[key] = defaultValue;
  }

  return myObj;
}
