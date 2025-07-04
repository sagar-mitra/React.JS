import { sum } from "../sum"


test("Sum function should calculate the sum of two numbers", () => {
    const result = sum(10,9);

    expect(result).toBe(19);
})

test("Sum of negative numbers", () => {
  expect(sum(-2, -3)).toBe(-5);
});