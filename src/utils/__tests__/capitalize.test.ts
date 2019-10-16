import capitalize from "../capitalize";

it("capitalizes first letter of a string", () => {
  expect(capitalize("react")).toEqual("React");
  expect(capitalize("rEACT")).toEqual("React");
});
