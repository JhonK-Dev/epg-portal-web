import { beforeEach, describe, expect, it, vi } from 'vitest'

import { ApiError, buildQueryString, fetchApi } from '@/lib/api/shared'

describe('buildQueryString', () => {
  it('returns empty string for empty object', () => {
    expect(buildQueryString({})).toBe('')
  })

  it('filters undefined, null, and empty string values', () => {
    expect(
      buildQueryString({
        valid: 'value',
        invalid: undefined,
        empty: '',
        nullValue: null,
      }),
    ).toBe('?valid=value')
  })

  it('builds query string with multiple params', () => {
    const result = buildQueryString({ search: 'test', page: 1, active: true })

    expect(result).toContain('search=test')
    expect(result).toContain('page=1')
    expect(result).toContain('active=true')
  })

  it('serializes arrays as comma-separated strings', () => {
    expect(buildQueryString({ tags: ['a', 'b', 'c'] })).toBe('?tags=a%2Cb%2Cc')
  })
})

describe('ApiError', () => {
  it('creates an ApiError with message and optional status info', () => {
    const error = new ApiError('Not Found', 404, 'Not Found')

    expect(error.message).toBe('Not Found')
    expect(error.name).toBe('ApiError')
    expect(error.status).toBe(404)
    expect(error.statusText).toBe('Not Found')
  })

  it('extends the base Error class', () => {
    expect(new ApiError('Boom')).toBeInstanceOf(Error)
  })
})

describe('fetchApi', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('calls fetch with the API base URL and default headers', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => ({ ok: true }),
    } as Response)

    const result = await fetchApi<{ ok: boolean }>('/programs')

    expect(result).toEqual({ ok: true })
    expect(fetchMock).toHaveBeenCalledWith(
      'https://api.example.com/programs',
      expect.objectContaining({
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    )
  })

  it('merges custom headers into the request', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => ({ ok: true }),
    } as Response)

    await fetchApi('/programs', {
      headers: {
        Authorization: 'Bearer token',
      },
    })

    expect(fetchMock).toHaveBeenCalledWith(
      'https://api.example.com/programs',
      expect.objectContaining({
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer token',
        },
      }),
    )
  })

  it('throws ApiError when response is not ok', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: false,
      status: 404,
      statusText: 'Not Found',
    } as Response)

    await expect(fetchApi('/missing')).rejects.toMatchObject({
      name: 'ApiError',
      message: 'API request failed: Not Found',
      status: 404,
      statusText: 'Not Found',
    })
  })

  it('wraps generic fetch errors in ApiError', async () => {
    vi.spyOn(globalThis, 'fetch').mockRejectedValue(new Error('Network down'))

    await expect(fetchApi('/programs')).rejects.toMatchObject({
      name: 'ApiError',
      message: 'Network down',
    })
  })

  it('converts AbortError into timeout ApiError', async () => {
    const abortError = new Error('The operation was aborted')
    abortError.name = 'AbortError'

    vi.spyOn(globalThis, 'fetch').mockRejectedValue(abortError)

    await expect(fetchApi('/programs')).rejects.toMatchObject({
      name: 'ApiError',
      message: 'Request timeout after 5000ms',
    })
  })
})
