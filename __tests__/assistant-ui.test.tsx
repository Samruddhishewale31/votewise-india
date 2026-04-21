import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AssistantPage from '@/app/assistant/page';

describe('Assistant UI Behavior', () => {
  it('renders initial state correctly with disclaimer', () => {
    render(<AssistantPage />);
    expect(screen.getByText(/Strictly Educational & Non-Partisan/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Ask about EVMs/i)).toBeInTheDocument();
  });

  it('handles sending a message and shows loading state', async () => {
    // Mock the global fetch
    global.fetch = vi.fn().mockImplementation(() =>
      new Promise((resolve) => setTimeout(() => resolve({
        ok: true,
        json: () => Promise.resolve({ result: "Mocked response" })
      }), 100))
    );

    render(<AssistantPage />);
    const input = screen.getByPlaceholderText(/Ask about EVMs/i);
    const form = input.closest('form')!;
    
    // Type in a message
    fireEvent.change(input, { target: { value: 'How to vote?' } });
    fireEvent.submit(form);

    // Input should be cleared
    expect(input).toHaveValue('');
    
    // User message should appear
    expect(screen.getByText('How to vote?')).toBeInTheDocument();

    // Loading indicator (button disabled)
    const sendBtn = screen.getByRole('button', { name: /Send message/i });
    expect(sendBtn).toBeDisabled();

    // Wait for mock fetch to finish
    await waitFor(() => {
      expect(screen.getByText('Mocked response')).toBeInTheDocument();
    });
  });

  it('shows error response when API fails', async () => {
    global.fetch = vi.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({ error: "Network disconnected" })
      })
    );

    render(<AssistantPage />);
    const input = screen.getByPlaceholderText(/Ask about EVMs/i);
    const form = input.closest('form')!;
    
    fireEvent.change(input, { target: { value: 'Will it fail?' } });
    fireEvent.submit(form);

    await waitFor(() => {
      expect(screen.getByText(/Sorry, I encountered an error: Network disconnected/i)).toBeInTheDocument();
    });
  });
});
