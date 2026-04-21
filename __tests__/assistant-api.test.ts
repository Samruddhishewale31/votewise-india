import { describe, it, expect } from 'vitest';
import { POST } from '@/app/api/assistant/route';

describe('Assistant API Route Boundaries & Fallbacks', () => {
  it('rejects blank inputs', async () => {
    const req = new Request('http://localhost/api/assistant', {
      method: 'POST',
      body: JSON.stringify({ query: '   ' }),
    });

    const response = await POST(req);
    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data.error).toBe('Invalid query provided.');
  });

  it('rejects abnormally long inputs', async () => {
    const longString = 'a'.repeat(600);
    const req = new Request('http://localhost/api/assistant', {
      method: 'POST',
      body: JSON.stringify({ query: longString }),
    });

    const response = await POST(req);
    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data.error).toContain('too long');
  });

  it('provides a safe fallback when API key is unassigned', async () => {
    // Delete GEMINI_API_KEY from environment to trigger fallback
    const originalEnv = process.env.GEMINI_API_KEY;
    delete process.env.GEMINI_API_KEY;

    const req = new Request('http://localhost/api/assistant', {
      method: 'POST',
      body: JSON.stringify({ query: 'What is an EVM?' }),
    });

    const response = await POST(req);
    expect(response.status).toBe(200);
    const data = await response.json();
    
    // Validate fallback behavior is returned
    expect(data.result).toContain('[Mock AI Response]');
    expect(data.result).toContain('What is an EVM?');
    expect(data.result).toContain('strictly non-partisan');

    // Restore env if it existed
    if (originalEnv) process.env.GEMINI_API_KEY = originalEnv;
  });

  it('handles malformed JSON body safely', async () => {
    // Calling POST without a valid json body will crash `await req.json()` usually, 
    // but the `try/catch` in the route should catch it and return 500
    const req = new Request('http://localhost/api/assistant', {
       method: 'POST',
       body: "Not a json",
    });

    const response = await POST(req);
    expect(response.status).toBe(500);
    const data = await response.json();
    expect(data.result).toContain('technical difficulties');
  });
});
