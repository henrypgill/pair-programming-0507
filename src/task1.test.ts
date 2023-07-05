import countOccurrences from "./task1";

test.skip("test", () => {
  expect(countOccurrences("test")).toEqual({
    t: 2,
    e: 1,
    s: 1
  });
});


test.skip("welcome to the danger zone", () => {
  expect(countOccurrences("welcome to the danger zone")).toEqual({
    w: 1,
    e: 5,
    l: 1,
    c: 1,
    o: 3,
    m: 1,
    t: 2,
    h: 1,
    d: 1,
    a: 1,
    n: 2,
    g: 1,
    r: 1,
    z: 1,
  });
});
