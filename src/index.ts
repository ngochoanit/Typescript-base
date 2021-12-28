//INTERFACE FOR CLASS

const lastT = <T>(arr: Array<T>) => arr[arr.length - 1];
const last1 = lastT<string>(["a", "b", "c"]);
console.log(last1);
const makeArr = (x: number, y: number) => [x, y];
const makeArrXY = <X, Y>(x: X, y: Y) => [x, y];
const m1 = makeArrXY(4, "5");

export type ArrayToObjectConfig<T> = {
  keyField: keyof T;
  valueField?: (keyof T)[] | keyof T;
};

function arrayToObject<T>(arr: T[], config: ArrayToObjectConfig<T>) {
  const result: { [key: string | number]: any } = {};
  arr.forEach((item) => {
    if (
      typeof item[config.keyField] !== "string" ||
      typeof item[config.keyField] !== "number"
    ) {
      throw new Error(
        `The keyField must be a string or number. The value is ${
          item[config.keyField]
        }`
      );
    }
    if (config.valueField) {
      const val: { [key: string]: any } = {};
      if (Array.isArray(config.valueField)) {
        config.valueField.forEach((field) => {
          val[field.toString()] = item[field];
        });
        // @ts-ignore
        result[item[config.keyField]] = val;
      } else {
        // @ts-ignore
        result[item[config.keyField]] = {
          [config.valueField.toString()]: item[config.valueField],
        };
      }
    }
  });
}

type userType = {
  id: number;
  name: string;
};
type newuserType = ArrayToObjectConfig<userType>;
let a: ArrayToObjectConfig<userType> = {
  keyField: id,
};
const users: userType[] = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
  { id: 4, name: "d" },
];
const userObject = arrayToObject<userType>(users, a);
