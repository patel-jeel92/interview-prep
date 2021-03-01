import allCaps from "../environmentValidation";

test("Should return all caps of the string", () => {
  expect(allCaps("hello world")).toBe("HELLO WORLD");
});
