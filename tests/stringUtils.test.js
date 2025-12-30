const stringUtils = require('../src/stringUtils');

describe('String Utilities', () => {
  describe('capitalize', () => {
    test('should capitalize first letter and lowercase rest', () => {
      expect(stringUtils.capitalize('hello')).toBe('Hello');
    });

    test('should handle already capitalized strings', () => {
      expect(stringUtils.capitalize('WORLD')).toBe('World');
    });

    test('should handle empty strings', () => {
      expect(stringUtils.capitalize('')).toBe('');
    });

    test('should handle non-string input', () => {
      expect(stringUtils.capitalize(null)).toBe('');
      expect(stringUtils.capitalize(undefined)).toBe('');
    });
  });

  describe('reverse', () => {
    test('should reverse a string', () => {
      expect(stringUtils.reverse('hello')).toBe('olleh');
    });

    test('should handle single character', () => {
      expect(stringUtils.reverse('a')).toBe('a');
    });

    test('should handle empty strings', () => {
      expect(stringUtils.reverse('')).toBe('');
    });
  });

  describe('isPalindrome', () => {
    test('should return true for palindromes', () => {
      expect(stringUtils.isPalindrome('racecar')).toBe(true);
      expect(stringUtils.isPalindrome('A man a plan a canal Panama')).toBe(true);
    });

    test('should return false for non-palindromes', () => {
      expect(stringUtils.isPalindrome('hello')).toBe(false);
    });

    test('should handle empty strings', () => {
      expect(stringUtils.isPalindrome('')).toBe(false);
    });

    test('should be case insensitive', () => {
      expect(stringUtils.isPalindrome('RaceCar')).toBe(true);
    });
  });
});
