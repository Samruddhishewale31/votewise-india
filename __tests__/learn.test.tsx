import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import LearnPage from '@/app/learn/page';
import * as navigation from 'next/navigation';
import * as AuthContext from '@/contexts/AuthContext';

vi.mock('next/navigation', () => ({
  useSearchParams: vi.fn(),
}));

vi.mock('@/contexts/AuthContext', () => ({
  useAuth: vi.fn(),
}));

describe('Personalized Learning Path (LearnPage)', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (AuthContext.useAuth as any).mockReturnValue({ user: null });
  });

  it('renders the default "first-time" voter path when no query param is provided', () => {
    (navigation.useSearchParams as any).mockReturnValue(new URLSearchParams(''));
    
    render(<LearnPage />);

    // Verify default path content renders
    expect(screen.getByText('First-Time Voter Curriculum')).toBeInTheDocument();
    expect(screen.getByText(/youth entering the democratic process/i)).toBeInTheDocument();
    
    // Check for specific default modules
    expect(screen.getByText('Understanding Electoral Rolls')).toBeInTheDocument();
  });

  it('renders the "professional" path when selected via query param', () => {
    (navigation.useSearchParams as any).mockReturnValue(new URLSearchParams('?path=professional'));
    
    render(<LearnPage />);

    // Verify professional path renders
    expect(screen.getByText('The Professional Curriculum')).toBeInTheDocument();
    expect(screen.getByText(/workplace voting rights/i)).toBeInTheDocument();
    
    // Check for professional modules
    expect(screen.getByText('Section 135B: Paid Holiday on Poll Day')).toBeInTheDocument();
  });

  it('renders the "senior" path when selected via query param', () => {
    (navigation.useSearchParams as any).mockReturnValue(new URLSearchParams('?path=senior'));
    
    render(<LearnPage />);

    // Verify senior path renders
    expect(screen.getByText('Senior Citizens & PwD Curriculum')).toBeInTheDocument();
    expect(screen.getByText('Form 12D for Home Voting')).toBeInTheDocument();
  });

  it('falls back safely to default if an unknown path ID is provided', () => {
    (navigation.useSearchParams as any).mockReturnValue(new URLSearchParams('?path=unknown-path'));
    
    render(<LearnPage />);

    // Should render default
    expect(screen.getByText('First-Time Voter Curriculum')).toBeInTheDocument();
  });
});
