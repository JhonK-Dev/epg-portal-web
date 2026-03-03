describe('buildQueryString', () => {
  const buildQueryString = (params: Record<string, unknown>): string => {
    const searchParams = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        searchParams.append(key, String(value));
      }
    });

    const queryString = searchParams.toString();
    return queryString ? `?${queryString}` : '';
  };

  it('returns empty string for empty object', () => {
    const result = buildQueryString({});
    expect(result).toBe('');
  });

  it('returns empty string for undefined values', () => {
    const result = buildQueryString({
      foo: undefined,
      bar: null,
    });
    expect(result).toBe('');
  });

  it('returns empty string for empty string values', () => {
    const result = buildQueryString({
      foo: '',
      bar: '',
    });
    expect(result).toBe('');
  });

  it('builds query string with single param', () => {
    const result = buildQueryString({ search: 'test' });
    expect(result).toBe('?search=test');
  });

  it('builds query string with multiple params', () => {
    const result = buildQueryString({
      search: 'test',
      page: 1,
      limit: 10,
    });
    expect(result).toContain('search=test');
    expect(result).toContain('page=1');
    expect(result).toContain('limit=10');
  });

  it('converts numbers to strings', () => {
    const result = buildQueryString({ page: 1, limit: 50 });
    expect(result).toBe('?page=1&limit=50');
  });

  it('converts booleans to strings', () => {
    const result = buildQueryString({ active: true, featured: false });
    expect(result).toBe('?active=true&featured=false');
  });

  it('handles arrays by converting to comma-separated string', () => {
    const result = buildQueryString({ tags: ['a', 'b', 'c'] });
    expect(result).toBe('?tags=a%2Cb%2Cc');
  });

  it('filters out undefined, null, and empty string values', () => {
    const result = buildQueryString({
      valid: 'value',
      invalid: undefined,
      empty: '',
      nullValue: null,
    });
    expect(result).toBe('?valid=value');
  });

  it('starts with ? when there are params', () => {
    const result = buildQueryString({ foo: 'bar' });
    expect(result.startsWith('?')).toBe(true);
  });
});

describe('ApiError', () => {
  class ApiError extends Error {
    constructor(
      message: string,
      public status?: number,
      public statusText?: string
    ) {
      super(message);
      this.name = 'ApiError';
    }
  }

  it('creates error with message only', () => {
    const error = new ApiError('Something went wrong');
    expect(error.message).toBe('Something went wrong');
    expect(error.name).toBe('ApiError');
    expect(error.status).toBeUndefined();
    expect(error.statusText).toBeUndefined();
  });

  it('creates error with message and status', () => {
    const error = new ApiError('Not Found', 404, 'Not Found');
    expect(error.message).toBe('Not Found');
    expect(error.status).toBe(404);
    expect(error.statusText).toBe('Not Found');
  });

  it('creates error with status 500', () => {
    const error = new ApiError('Server Error', 500, 'Internal Server Error');
    expect(error.status).toBe(500);
    expect(error.statusText).toBe('Internal Server Error');
  });

  it('extends Error class', () => {
    const error = new ApiError('Test');
    expect(error instanceof Error).toBe(true);
  });

  it('can be caught as Error', () => {
    try {
      throw new ApiError('Caught me!');
    } catch (e) {
      expect(e).toBeInstanceOf(ApiError);
      expect(e).toBeInstanceOf(Error);
    }
  });
});
