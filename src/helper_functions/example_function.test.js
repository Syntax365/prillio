const example_function = require("./example_function.js");

test("adds 1 + 2 to equal 3", () => {
  expect(example_function(1, 2)).toBe(3);
});
