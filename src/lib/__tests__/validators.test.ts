import { describe, it, expect } from 'vitest';
import {
	validateEmail,
	isNotEmpty,
	hasMinLength,
	hasMaxLength,
} from '../validators';

describe('validateEmail', () => {
	it('should return true for valid emails', () => {
		expect(validateEmail('test@example.com')).toBe(true);
		expect(validateEmail('user.name@domain.org')).toBe(true);
		expect(validateEmail('user+tag@domain.co')).toBe(true);
		expect(validateEmail('test@sub.domain.com')).toBe(true);
	});

	it('should return false for invalid emails', () => {
		expect(validateEmail('')).toBe(false);
		expect(validateEmail('invalid')).toBe(false);
		expect(validateEmail('missing@domain')).toBe(false);
		expect(validateEmail('@nodomain.com')).toBe(false);
		expect(validateEmail('spaces in@email.com')).toBe(false);
	});
});

describe('isNotEmpty', () => {
	it('should return true for non-empty strings', () => {
		expect(isNotEmpty('hello')).toBe(true);
		expect(isNotEmpty('a')).toBe(true);
		expect(isNotEmpty('  text  ')).toBe(true);
	});

	it('should return false for empty strings', () => {
		expect(isNotEmpty('')).toBe(false);
		expect(isNotEmpty('   ')).toBe(false);
		expect(isNotEmpty('\n')).toBe(false);
	});
});

describe('hasMinLength', () => {
	it('should return true when string meets minimum length', () => {
		expect(hasMinLength('hello', 3)).toBe(true);
		expect(hasMinLength('ab', 2)).toBe(true);
		expect(hasMinLength('a', 1)).toBe(true);
	});

	it('should return false when string is below minimum length', () => {
		expect(hasMinLength('hi', 5)).toBe(false);
		expect(hasMinLength('', 1)).toBe(false);
		expect(hasMinLength('ab', 3)).toBe(false);
	});

	it('should trim whitespace before checking length', () => {
		expect(hasMinLength('  abc  ', 3)).toBe(true);
		expect(hasMinLength('  ab  ', 3)).toBe(false);
	});
});

describe('hasMaxLength', () => {
	it('should return true when string is within max length', () => {
		expect(hasMaxLength('hello', 10)).toBe(true);
		expect(hasMaxLength('ab', 2)).toBe(true);
		expect(hasMaxLength('a', 1)).toBe(true);
	});

	it('should return false when string exceeds max length', () => {
		expect(hasMaxLength('hello', 3)).toBe(false);
		expect(hasMaxLength('abc', 2)).toBe(false);
		expect(hasMaxLength('long string', 5)).toBe(false);
	});

	it('should trim whitespace before checking length', () => {
		expect(hasMaxLength('  abcdef  ', 4)).toBe(false);
		expect(hasMaxLength('  abc  ', 5)).toBe(true);
	});
});
