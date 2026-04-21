import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent, renderHook, act } from '@testing-library/react';
import { AccessibilityProvider, useAccessibility } from '@/contexts/AccessibilityContext';

describe('Accessibility Features', () => {
  beforeEach(() => {
    // Clean up DOM between tests
    document.body.className = '';
    document.documentElement.style.fontSize = '';
    document.documentElement.className = '';
  });

  it('provides default accessibility context values', () => {
    const { result } = renderHook(() => useAccessibility(), {
      wrapper: AccessibilityProvider,
    });

    expect(result.current.highContrast).toBe(false);
    expect(result.current.textSize).toBe('normal');
    expect(result.current.reducedMotion).toBe(false);
  });

  it('updates document fontSize when textSize changes', () => {
    const { result } = renderHook(() => useAccessibility(), {
      wrapper: AccessibilityProvider,
    });

    act(() => {
      result.current.setTextSize('large');
    });

    expect(result.current.textSize).toBe('large');
    expect(document.documentElement.style.fontSize).toBe('18px');

    act(() => {
      result.current.setTextSize('extra-large');
    });

    expect(document.documentElement.style.fontSize).toBe('20px');
  });

  it('applies hc class to body when high contrast is toggled', () => {
     const { result } = renderHook(() => useAccessibility(), {
      wrapper: AccessibilityProvider,
    });

    act(() => {
      result.current.toggleHighContrast();
    });

    expect(document.body.classList.contains('hc')).toBe(true);

    act(() => {
      result.current.toggleHighContrast(); // toggle back
    });

    expect(document.body.classList.contains('hc')).toBe(false);
  });

  it('applies reduced-motion class when toggled', () => {
     const { result } = renderHook(() => useAccessibility(), {
      wrapper: AccessibilityProvider,
    });

    act(() => {
      result.current.toggleReducedMotion();
    });

    expect(document.documentElement.classList.contains('reduced-motion')).toBe(true);
  });
});
