import assert from 'assert';
import { Validation } from '../src/validation';

describe('Validation Class', () => {
  it('should return true for valid book input', () => {
    const isValid = Validation.validateBookInput('Title', 'Author', 2020);
    assert.strictEqual(isValid, true);
  });

  it('should return false for invalid book input', () => {
    const isValid = Validation.validateBookInput('', 'Author', -1);
    assert.strictEqual(isValid, false);
  });

  it('should return true for valid user input', () => {
    const isValid = Validation.validateUserInput('John Doe', 'john@example.com');
    assert.strictEqual(isValid, true);
  });

  it('should return false for invalid user input', () => {
    const isValid = Validation.validateUserInput('', 'invalid-email');
    assert.strictEqual(isValid, false);
  });
});
