const calculator = require('../src/calculator');

describe('Calculator', () => {
  describe('add', () => {
    test('should add two positive numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('should add negative numbers', () => {
      expect(calculator.add(-5, -3)).toBe(-8);
    });

    test('should handle zero', () => {
      expect(calculator.add(0, 5)).toBe(5);
    });
  });

  describe('subtract', () => {
    test('should subtract two numbers', () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });

    test('should handle negative results', () => {
      expect(calculator.subtract(3, 7)).toBe(-4);
    });
  });

  describe('multiply', () => {
    test('should multiply two numbers', () => {
      expect(calculator.multiply(4, 5)).toBe(20);
    });

    test('should handle multiplication by zero', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
    });

    test('should handle negative numbers', () => {
      expect(calculator.multiply(-3, 4)).toBe(-12);
    });
  });

  describe('divide', () => {
    test('should divide two numbers', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    test('should handle decimal results', () => {
      expect(calculator.divide(7, 2)).toBe(3.5);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => calculator.divide(5, 0)).toThrow('Cannot divide by zero');
    });
  });
});
