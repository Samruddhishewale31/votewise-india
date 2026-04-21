import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import HomePage from '@/app/page';
import AboutPage from '@/app/about/page';
import MythsFactsPage from '@/app/myths-facts/page';
import ResourcesPage from '@/app/resources/page';

describe('Rendering Smoke Tests & Disclaimers', () => {

  it('renders Home Page sections properly', () => {
    render(<HomePage />);
    expect(screen.getByText(/Your Voting Roadmap/i)).toBeInTheDocument();
    expect(screen.getByText(/Check Eligibility/i)).toBeInTheDocument();
  });

  it('renders Myths vs Facts cards properly', () => {
    render(<MythsFactsPage />);
    expect(screen.getByText(/Electoral Misinformation/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Myth Detected/i).length).toBeGreaterThan(0);
  });

  it('renders Resources Page empty/fallback state when no search is done', () => {
     render(<ResourcesPage />);
     expect(screen.getByText(/Waiting for search criteria/i)).toBeInTheDocument();
     expect(screen.getByRole('button', { name: /Search Registered Booth/i })).toBeInTheDocument();
  });

  it('renders About page with explicit Disclaimers and Neutrality Statement', () => {
     render(<AboutPage />);
     // 7. Disclaimer and neutrality tests
     expect(screen.getByText(/Strict Regulatory Disclaimer/i)).toBeInTheDocument();
     expect(screen.getByText(/100% Non-Partisan/i)).toBeInTheDocument();
     expect(screen.getByText(/affiliated with, endorsed by, or operated by the Election Commission/i)).toBeInTheDocument();
  });
});
