import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useDebounce } from '../use-debounce';

describe('useDebounce', () => {
  it('exists and is a function', () => {
    expect(useDebounce).toBeDefined();
    expect(typeof useDebounce).toBe('function');
  });

  it('returns initial value immediately', () => {
    const { result } = renderHook(() => useDebounce('initial', 400));
    expect(result.current).toBe('initial');
  });

  it('updates value after delay', async () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: 'initial', delay: 100 } }
    );

    expect(result.current).toBe('initial');

    rerender({ value: 'updated', delay: 100 });

    expect(result.current).toBe('initial');

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 150));
    });

    expect(result.current).toBe('updated');
  });

  it('uses default delay of 400ms', async () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value),
      { initialProps: { value: 'initial' } }
    );

    rerender({ value: 'updated' });

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 300));
    });

    expect(result.current).toBe('initial');

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 200));
    });

    expect(result.current).toBe('updated');
  });

  it('cancels previous timeout on rapid changes', async () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: 'first', delay: 200 } }
    );

    rerender({ value: 'second', delay: 200 });
    rerender({ value: 'third', delay: 200 });
    rerender({ value: 'fourth', delay: 200 });

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 250));
    });

    expect(result.current).toBe('fourth');
  });
});
