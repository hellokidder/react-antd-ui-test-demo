import "@testing-library/jest-dom";

//  常见断言demo
describe("Common Assertion", () => {
  test("基础类型比较", () => {
    let a;
    let b = 1;
    // toBe
    expect(1 + 1).toBe(2);
    expect(true).toBe(true);
    expect(false).toBe(false);
    expect(NaN).toBe(NaN);
    expect(undefined).toBe(undefined);
    expect(a).toBe(undefined);
    expect(null).toBe(null);

    // true、false、undefined、defined、NaN、null 有单独的api
    expect(a).not.toBeDefined();
    expect(b).toBeDefined();
    expect(a).toBeUndefined();
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
    expect(NaN).toBeNaN();
    expect(null).toBeNull();

    // toBeCloseTo
    expect(0.1 + 0.2).not.toBe(0.3);
    expect(0.1 + 0.2).toBeCloseTo(0.3);

    // not
    expect(1 + 1).not.toBe(3);
  });

  test("引用类型比较", () => {
    const a = { obj: { name: "n1", age: 10 }, obj2: { name: "n2", age: 19 } };
    const b = Object.assign(a);
    const c = JSON.parse(JSON.stringify(a));
    // toBe 对引用类型进行比较时只会比较内存地址
    expect(a).toBe(b);
    expect(a).not.toBe(c);
    // toEqual 会深度递归每个属性比较
    expect(a).toEqual(b);
    expect(a).toEqual(c);
  });

  test("数字比较", () => {
    expect(1).toBeGreaterThan(0);
    expect(1).toBeGreaterThanOrEqual(1);
    expect(1).toBeLessThan(2);
    expect(1).toBeLessThanOrEqual(1);
    expect(0.2 + 0.1).toBeGreaterThan(0.3);
  });

  test("正则比较", () => {
    // Match
    expect("This is a Match").toMatch(/Match/);

    // toMatchObject 验证对象能否包含 value 的全部属性，即 value 是否是匹配对象的子集
    const obj = { prop1: "test", prop2: "regexp validation" };
    const childObj = { prop1: "test" };
    expect(obj).toMatchObject(childObj);
  });

  test("表单验证", () => {
    //toContain 某值是否存在数组中
    expect([1, 2, 3]).toContain(2);
    // arrayContaining 匹配接收到的数组，与 toEqual 结合使用可以用于判定某个数组是否是另一个数组的子集。
    expect([1, 2, 3]).toEqual(expect.arrayContaining([1, 2]));
    // toContainEqual(value) 用于判定某个对象元素是否在数组中。
    expect([
      { a: 1, b: 2 },
      { c: 3, d: 4 },
    ]).toContainEqual({ a: 1, b: 2 });
    //toHaveLength  断言数组长度
    expect([1, 2, 3, 4, 7]).toHaveLength(5);
    //toHaveProperty  断言对象是否包含某个属性
    expect({ a: 1, b: 2 }).toHaveProperty("a");
    expect({ a: 1, b: 2 }).toHaveProperty("a", 1);
    expect({ a: { c: 3, d: { e: 5 } }, b: 2 }).toHaveProperty("a.d.e", 5);
  });

  test("error", () => {
    // toThrow 是 toThrowError 的别名 两者等同
    const throwError = () => {
      const err = new Error("console err: this is a test error!");
      throw err;
    };
    expect(throwError).toThrow();
    expect(throwError).toThrowError();

    const catchError = () => {
      try {
        const err = new Error("console err: this is a test error!");
        throw err;
      } catch (err) {
        console.log(err);
      }
    };
    expect(catchError).not.toThrow();
    expect(catchError).not.toThrowError();
  });
});

const toBeWithinRange = (
  actual: number,
  floor: number = 0,
  ceiling: number = 100
) => {
  if (
    typeof actual !== "number" ||
    typeof floor !== "number" ||
    typeof ceiling !== "number"
  ) {
    throw new Error("These must be of type number!");
  }
  const pass = actual >= floor && actual <= ceiling;
  if (pass) {
    return {
      message: () => `这个数在${floor}-${ceiling}之间`,
      pass: true,
    };
  } else {
    return {
      message: () => `这个数不在在${floor}-${ceiling}之间`,
      pass: false,
    };
  }
};
describe("自定义同步匹配器", () => {
  expect.extend({
    toBeWithinRange,
  });

  test("is within range", () => expect(100).toBeWithinRange(90, 110));

  test("is NOT within range", () => expect(6).not.toBeWithinRange(0, 5));

  test("is within range2", () => expect(50).toBeWithinRange());
});

const toBeAsyncWithinRange = async (
  actual: number,
  floor: number = 0,
  ceiling: number = 100
) => {
  if (
    typeof actual !== "number" ||
    typeof floor !== "number" ||
    typeof ceiling !== "number"
  ) {
    throw new Error("These must be of type number!");
  }
  let res = new Promise<{ message: () => string; pass: boolean }>((resolve) => {
    const pass = actual >= floor && actual <= ceiling;
    if (pass) {
      resolve({
        message: () => `这个数在${floor}-${ceiling}之间`,
        pass: true,
      });
    } else {
      resolve({
        message: () => `这个数不在在${floor}-${ceiling}之间`,
        pass: false,
      });
    }
  });
  return res;
};

describe("自定义异步匹配器", () => {
  expect.extend({
    toBeAsyncWithinRange,
  });

  test("is within range", async () =>
    await expect(100).toBeAsyncWithinRange(90, 110));
  test("is NOT within range", async () =>
    await expect(6).not.toBeAsyncWithinRange(0, 5));
  test("is within range2", async () => await expect(50).toBeAsyncWithinRange());
});
