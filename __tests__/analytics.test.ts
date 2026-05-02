import { describe, it, expect, vi } from 'vitest';
import { trackEvent } from '../src/lib/analytics';

// Mock the firebase/analytics module
vi.mock('firebase/analytics', () => ({
  logEvent: vi.fn(),
  getAnalytics: vi.fn(),
  isSupported: vi.fn(() => Promise.resolve(false)),
}));

describe('Analytics Utility', () => {
  it('safely no-ops when analytics is unavailable without crashing', () => {
    expect(() => {
      // Should not throw even though analytics is not configured in test environment
      trackEvent('login_success', { method: 'test' });
    }).not.toThrow();
  });
});
