const { multiply } = require("../calculator")

describe("Multiply", () => {
    test("should return multiplication of two positive integers", () => {
        const result = multiply(2, 3)
        expect(result).toBe(6)
    })

    test("should return a negative value when one of the integers is negative", () => {
        const result = multiply(-2, 3)
        expect(result).toBe(-6)
    })

    test("should return 0 when one of the integers is 0", () => {
        const result = multiply(0, 3)
        expect(result).toBe(0)
    })

    test("should return 0 when function is called without arguments", () => {
        const result = multiply()
        expect(result).toBe(0)
    })

    test("should return 0 if the function is called with a single argument", () => {
        const result = multiply(42)
        expect(result).toBe(0)
    })
})
