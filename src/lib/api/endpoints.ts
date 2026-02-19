/**
 * Centralized API Endpoints Manager
 * 
 * This class provides a centralized way to manage all API endpoints,
 * avoiding hardcoded strings scattered throughout the codebase.
 */

export class ApiEndpoints {
  constructor(private baseUrl: string) {}

  // Program endpoints
  get programs() {
    return {
      list: '/program/program/',
      detail: (uuid: string) => `/program/program/${uuid}/`,
      byType: (typeId: number) => `/program/program/?program_type=${typeId}`,
      active: '/program/program/?is_active=true',
    };
  }

  // Helper method to build full URL
  buildUrl(endpoint: string): string {
    return `${this.baseUrl}${endpoint}`;
  }

  // Helper method to build URL with query parameters
  buildUrlWithParams(endpoint: string, params: Record<string, string | number | boolean>): string {
    const searchParams = new URLSearchParams();
    
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        searchParams.append(key, String(value));
      }
    });

    const queryString = searchParams.toString();
    return `${this.baseUrl}${endpoint}${queryString ? `?${queryString}` : ''}`;
  }
}

// Service identifiers for type-safe endpoint access
export const ApiServices = {
  PROGRAMS: 'programs',
} as const;

export type ApiServiceType = typeof ApiServices[keyof typeof ApiServices];
