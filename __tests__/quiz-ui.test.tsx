import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import QuizPage from '@/app/quiz/page';

describe('Voter Quiz UI', () => {
  beforeEach(() => {
    localStorage.clear();
  });
  it('renders the first question properly', () => {
    render(<QuizPage />);
    expect(screen.getByText(/What is the minimum age/i)).toBeInTheDocument();
    
    // Check that 'Next Question' is disabled initially
    const nextBtn = screen.getByRole('button', { name: /Next Question/i });
    expect(nextBtn).toBeDisabled();
  });

  it('allows answering a question and validates answer state', () => {
    render(<QuizPage />);
    
    // Click the correct answer (index 1 which is '18')
    const optionBtn = screen.getByText('18');
    fireEvent.click(optionBtn);
    
    // After clicking, button should be selected (aria-pressed=true)
    expect(optionBtn).toHaveAttribute('aria-pressed', 'true');
    
    // Shows Correct banner
    expect(screen.getByText('Correct!')).toBeInTheDocument();
    
    // Next button should be enabled
    const nextBtn = screen.getByRole('button', { name: /Next Question/i });
    expect(nextBtn).not.toBeDisabled();
  });

  it('prevents changing answer once selected (invalid answer handling)', () => {
    render(<QuizPage />);
    
    // Click wrong answer
    const wrongOpt = screen.getByText('16');
    fireEvent.click(wrongOpt);
    
    expect(screen.getByText('Actually...')).toBeInTheDocument();
    
    // Try to click correct answer now
    const correctOpt = screen.getByText('18');
    fireEvent.click(correctOpt);
    
    // It should still register the wrong answer
    expect(wrongOpt).toHaveAttribute('aria-pressed', 'true');
    expect(correctOpt).toHaveAttribute('aria-pressed', 'false');
  });

  it('completes the quiz and shows results', () => {
    render(<QuizPage />);
    
    // Complete 5 questions linearly 
    for(let i=0; i<5; i++) {
        // Just click the first option to advance
        const opts = screen.getAllByRole('button');
        // Filter options that are actual answers (first 4 usually)
        fireEvent.click(opts[0]);
        
        // Click Next or See Results
        const nextBtn = screen.getByRole('button', { name: /(Next Question|See Results)/i });
        fireEvent.click(nextBtn);
    }
    
    // Should show results
    expect(screen.getByText(/Your Readiness Score/i)).toBeInTheDocument();
    expect(screen.getByText(/Retake Quiz/i)).toBeInTheDocument();
  });
});
