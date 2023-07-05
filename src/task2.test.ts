import collectByLetter from "./task2";

test("test", () => {
  expect(collectByLetter(["test"])).toEqual({
    t: ["test"]
  });
});


test("welcome to the danger zone", () => {
  expect(collectByLetter(["welcome", "to", "the", "danger", "zone"])).toEqual({
    w: ["welcome"],
    t: ["to", "the"],
    d: ["danger"],
    z: ["zone"]
  });
});
