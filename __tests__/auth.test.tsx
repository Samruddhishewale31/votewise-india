import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import { TopAppBar } from '@/components/layout/TopAppBar';

// Mock routing for TopAppBar
vi.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

// Mock Accessibility
vi.mock('@/contexts/AccessibilityContext', () => ({
  useAccessibility: () => ({ setIsPanelOpen: vi.fn() }),
  AccessibilityProvider: ({ children }: any) => <>{children}</>
}));

// Create a component just to expose context for testing
function MockAuthConsumer() {
  const { user, isGuest, firebaseEnabled, signIn } = useAuth();
  return (
    <div>
      <span data-testid="is-guest">{isGuest.toString()}</span>
      <span data-testid="firebase-enabled">{firebaseEnabled.toString()}</span>
      <button onClick={signIn}>Test SignIn</button>
    </div>
  );
}

describe('Authentication Flow & Fallbacks', () => {

  beforeEach(() => {
    // Suppress console.warn about Firebase during test runs
    vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  it('defaults to Guest mode safely when Firebase environment is disconnected', async () => {
    // Tests what happens when NEXT_PUBLIC env is completely wiped
    // Handled intrinsically because in vitest environment, variables are unhandled if not prefixed correctly.
    // AuthProvider should just fall back to a Guest safely
    render(
      <AuthProvider>
        <MockAuthConsumer />
      </AuthProvider>
    );

    expect(screen.getByTestId('is-guest').textContent).toBe("true");
    
    // Test that the safe mock doesn't crash on invoking a bound function
    const btn = screen.getByText('Test SignIn');
    await act(async () => {
      btn.click();
    });

    // Check that it's gracefully suppressed
    expect(console.warn).toHaveBeenCalledWith("Firebase Auth is not configured. Redirecting to Guest Mode.");
  });

  it('renders the TopAppBar correctly without forcing intrusive sign-in modals', () => {
    render(
      <AuthProvider>
        <TopAppBar />
      </AuthProvider>
    );

    // Verify nav links render
    expect(screen.getByText('Learning Hub')).toBeInTheDocument();
    
    // There shouldn't be a jarring sign in modal
    // But there also might not be a "Sign In" button if Firebase is not enabled (which it wouldn't be in a strict local vitest run unless mocked).
    // The important thing is it doesn't crash, maintaining Guest flow natively.
    expect(screen.queryByText(/Sign Out/i)).not.toBeInTheDocument();
  });
});
