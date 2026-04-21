import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import LearnPage from '@/app/learn/page';

describe('Personalized Learning Path (LearnPage)', () => {
  it('renders the default "first-time" voter path when no query param is provided', async () => {
    // Await the async server component execution
    const ui = await LearnPage({ searchParams: Promise.resolve({}) });
    render(ui);

    // Verify default path content renders
    expect(screen.getByText('First-Time Voter Curriculum')).toBeInTheDocument();
    expect(screen.getByText(/youth entering the democratic process/i)).toBeInTheDocument();
    
    // Check for specific default modules
    expect(screen.getByText('Understanding Electoral Rolls')).toBeInTheDocument();
  });

  it('renders the "professional" path when selected via query param', async () => {
    const ui = await LearnPage({ searchParams: Promise.resolve({ path: 'professional' }) });
    render(ui);

    // Verify professional path renders
    expect(screen.getByText('The Professional Curriculum')).toBeInTheDocument();
    expect(screen.getByText(/workplace voting rights/i)).toBeInTheDocument();
    
    // Check for professional modules
    expect(screen.getByText('Section 135B: Paid Holiday on Poll Day')).toBeInTheDocument();
  });

  it('renders the "senior" path when selected via query param', async () => {
    const ui = await LearnPage({ searchParams: Promise.resolve({ path: 'senior' }) });
    render(ui);

    // Verify senior path renders
    expect(screen.getByText('Senior Citizens & PwD Curriculum')).toBeInTheDocument();
    expect(screen.getByText('Form 12D for Home Voting')).toBeInTheDocument();
  });

  it('falls back safely to default if an unknown path ID is provided', async () => {
    const ui = await LearnPage({ searchParams: Promise.resolve({ path: 'unknown-path' }) });
    render(ui);

    // Should render default
    expect(screen.getByText('First-Time Voter Curriculum')).toBeInTheDocument();
  });
});
