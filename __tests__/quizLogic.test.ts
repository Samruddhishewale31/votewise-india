import { describe, it, expect } from 'vitest';
import { calculateReadinessScore } from '@/data/quizData';

describe('Quiz Logic: Readiness Score Calculation', () => {
  it('identifies an excellent perfect score correctly', () => {
    const result = calculateReadinessScore(5, 5);
    expect(result.rating).toBe('Excellent');
    expect(result.message).toContain('fully prepared');
  });

  it('identifies a good score correctly', () => {
    const result = calculateReadinessScore(3, 5);
    expect(result.rating).toBe('Good');
    expect(result.message).toContain('solid understanding');
  });

  it('identifies a low score and recommends review', () => {
    const result = calculateReadinessScore(1, 5);
    expect(result.rating).toBe('Needs Review');
    expect(result.message).toContain('Learning Hub');
  });

  it('handles absolute zero correctly', () => {
    const result = calculateReadinessScore(0, 5);
    expect(result.rating).toBe('Needs Review');
  });

  it('handles negative or invalid boundary inputs safely as lowest category', () => {
    const result = calculateReadinessScore(-2, 5);
    expect(result.rating).toBe('Needs Review');
  });

  it('handles incomplete quiz states (total questions not met or 0) safely', () => {
    // If somehow total is passed as 0, score calculation shouldn't crash
    const result = calculateReadinessScore(0, 0);
    // 0 / 0 in JS is NaN, making it fail the >=60% check
    expect(result.rating).toBe('Needs Review');
  });
});
