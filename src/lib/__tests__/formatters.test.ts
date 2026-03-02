import { describe, it, expect } from 'vitest';
import {
	formatDate,
	formatDateTime,
	formatShortDate,
	formatEventDate,
	formatDateSafe,
} from '../formatters';

describe('formatDate', () => {
	it('should format date in Spanish (Peru) long format', () => {
		const result = formatDate('2025-01-15T00:00:00');
		expect(result).toBe('15 de enero de 2025');
	});

	it('should handle different months', () => {
		expect(formatDate('2025-06-20T00:00:00')).toBe('20 de junio de 2025');
		expect(formatDate('2025-12-25T00:00:00')).toBe('25 de diciembre de 2025');
	});

	it('should handle single digit days and months', () => {
		expect(formatDate('2025-01-05T00:00:00')).toBe('5 de enero de 2025');
		expect(formatDate('2025-03-15T00:00:00')).toBe('15 de marzo de 2025');
	});
});

describe('formatDateTime', () => {
	it('should format date with weekday in Spanish', () => {
		const result = formatDateTime('2025-01-15T00:00:00');
		expect(result).toContain('de enero de 2025');
	});
});

describe('formatShortDate', () => {
	it('should format date in short format', () => {
		const result = formatShortDate('2025-01-15T00:00:00');
		expect(result).toMatch(/15 ene\.? 2025/);
	});

	it('should handle different months', () => {
		expect(formatShortDate('2025-06-20T00:00:00')).toMatch(/20 jun\.? 2025/);
		expect(formatShortDate('2025-12-25T00:00:00')).toMatch(/25 dic\.? 2025/);
	});
});

describe('formatEventDate', () => {
	it('should return object with day and month', () => {
		const result = formatEventDate('2025-01-15T00:00:00');
		expect(result.day).toBe('15');
		expect(result.month).toMatch(/ENE\.?/);
	});

	it('should pad single digit days with zero', () => {
		const result = formatEventDate('2025-01-05T00:00:00');
		expect(result.day).toBe('05');
		expect(result.month).toMatch(/ENE\.?/);
	});

	it('should uppercase month abbreviation', () => {
		const result = formatEventDate('2025-06-20T00:00:00');
		expect(result.day).toBe('20');
		expect(result.month).toMatch(/JUN\.?/);
	});
});

describe('formatDateSafe', () => {
	it('should return formatted date for valid input', () => {
		expect(formatDateSafe('2025-01-15T00:00:00')).toBe('15 de enero de 2025');
	});

	it('should return fallback for undefined input', () => {
		expect(formatDateSafe(undefined)).toBe('Por definir');
	});

	it('should return fallback for empty string', () => {
		expect(formatDateSafe('')).toBe('Por definir');
	});

	it('should return custom fallback when provided', () => {
		expect(formatDateSafe(undefined, 'Fecha no disponible')).toBe(
			'Fecha no disponible'
		);
	});
});
