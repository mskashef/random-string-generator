const RandomStringGenerator = require("..");

test("Test", () => {
  let chars = 'abcdefghij123456'
  const len = 20
  const myRandomStringGenerator = RandomStringGenerator(chars, len)
  const string = myRandomStringGenerator.new();
  expect(string.length).toBe(len)
  for (let i = 0; i < len; i++) {
    expect(chars.includes(string.charAt(i))).toBe(true)
  }
});


test("Test", () => {
  let chars = 'aaaaaaaaaaaa'
  const len = 25
  const myRandomStringGenerator = RandomStringGenerator(chars, len)
  const string = myRandomStringGenerator.new();
  expect(string.length).toBe(len)
  expect(string.length).toBe(len)
  for (let i = 0; i < len; i++) {
    expect(chars.includes(string.charAt(i))).toBe(true)
  }
});


test("Test", () => {
  let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+=-\"\';:?.,~`'
  const len = 1500
  const myRandomStringGenerator = RandomStringGenerator(chars, len)
  const string = myRandomStringGenerator.new();
  expect(string.length).toBe(len)
  expect(string.length).toBe(len)
  for (let i = 0; i < len; i++) {
    expect(chars.includes(string.charAt(i))).toBe(true)
  }
});

test("Multiple run", () => {
  let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const len = 32
  const myRandomStringGenerator = RandomStringGenerator(chars, len)
  const string1 = myRandomStringGenerator.new();
  const string2 = myRandomStringGenerator.new();
  const string3 = myRandomStringGenerator.new();
  expect(string1.length).toBe(len)
  expect(string2.length).toBe(len)
  expect(string3.length).toBe(len)
  for (let i = 0; i < len; i++) {
    expect(chars.includes(string1.charAt(i))).toBe(true)
    expect(chars.includes(string2.charAt(i))).toBe(true)
    expect(chars.includes(string3.charAt(i))).toBe(true)
  }
});

test("Test: Error", () => {
  let chars = [1,2,3]
  const len = 25
  expect(RandomStringGenerator.bind(null, chars, len)).toThrow(TypeError)
});

test("Test: Error", () => {
  let chars = '123456789'
  const len = '25'
  expect(RandomStringGenerator.bind(null, chars, len)).toThrow(TypeError)
});