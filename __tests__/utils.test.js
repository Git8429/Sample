const { add, multiply, greet } = require('../src/utils');

describe('Utils Functions', () => {
  describe('add', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add negative numbers', () => {
      expect(add(-2, -3)).toBe(-5);
    });

    test('should add zero', () => {
      expect(add(5, 0)).toBe(5);
    });
  });

  describe('multiply', () => {
    test('should multiply two positive numbers', () => {
      expect(multiply(3, 4)).toBe(12);
    });

    test('should multiply by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });

    test('should multiply negative numbers', () => {
      expect(multiply(-2, 3)).toBe(-6);
    });
  });

  describe('greet', () => {
    test('should return greeting message', () => {
      expect(greet('World')).toBe('Hello, World!');
    });

    test('should greet with any name', () => {
      expect(greet('Alice')).toBe('Hello, Alice!');
    });
  });
});
