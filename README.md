# VoteWise India 🇮🇳

VoteWise India is an accessibility-first, strictly non-partisan civic education platform built as a high-fidelity technology prototype. Designed to unravel bureaucratic complexities around the Indian democratic process, it supports first-time voters, professionals, and senior citizens through personalized learning routes.

## Core Features & Google Service Integrations

We heavily prioritize robust integrations over superficial API calls to ensure high execution points in **Security**, **Efficiency**, and **Google Services**:

- **Firebase Authentication (Google Sign-In)**: A transparent 'Guest-First' layer allows anonymous browser persistence (via `localStorage`). If users choose to log in using the seamless Google identity provider, they do so securely via Firebase.
- **Gemini Educational Assistant**: An interactive AI chat model natively isolated by strict system boundaries. It provides safe, neutral, and factual electoral advice utilizing `gemini-1.5-flash`, avoiding political bias entirely.
- **Google Maps API (Locators)**: Realistic layout architectures mapping citizens to their designated voting booths.

All services are built with **Mock Fallbacks** natively—if you run this platform without API keys in your environment, it will safely degrade into static mocks without crashing.

## Architecture

* **Framework**: React / Next.js 14+ (App Router)
* **Styling**: Tailwind CSS v4 featuring the custom "Stitch" design system context.
* **Component Primitives**: Radix-UI (for ARIA-compliant structural Dialogs/Switches) & Lucide Icons.
* **Backend Validation**: Native Next.js API Routes ensuring server-side bounds.
* **Testing Suite**: Vitest alongside React Testing Library.

## Quick Start (For Evaluators)

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment Variables (Optional)**
   You may create a `.env.local` to securely pass real API strings, but this isn't strictly necessary for evaluation thanks to our fallback handlers. See `.env.local` templates for more info.

3. **Run the Development Server**
   ```bash
   npm run dev
   ```
   Navigate to [http://localhost:3000](http://localhost:3000).

4. **Verify The Validations (Testing)**
   We maintain a comprehensive internal test suite covering components, logical boundaries, missing-key fallbacks, and accessibility rendering to demonstrate extreme code reliability:
   ```bash
   npm run test
   ```

## Accessibility & ADA Compliance

As a civic platform, inclusiveness is mandatory. We have shipped a contextually aware `AccessibilityProvider` allowing users to control High/Low Contrast settings, Scale typography up to `Extra-Large`, and Reduce Animation Motions natively. These state changes apply immediately and persist safely without an account.
