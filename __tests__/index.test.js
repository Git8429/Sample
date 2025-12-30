const { main } = require('../src/index');

describe('Main Application', () => {
  test('main function should execute without errors', () => {
    // Mock console.log to avoid output during tests
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    
    expect(() => main()).not.toThrow();
    
    // Verify console.log was called
    expect(consoleSpy).toHaveBeenCalled();
    
    consoleSpy.mockRestore();
  });
});
