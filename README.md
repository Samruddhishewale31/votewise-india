# VoteWise India 🇮🇳

VoteWise India is an accessibility-first, strictly non-partisan civic education platform built as a high-quality technology prototype. It is designed to simplify the Indian election process for first-time voters, working professionals, senior citizens, and anyone seeking clear, trustworthy guidance.

The platform combines modern web technologies with meaningful Google service integrations to deliver a practical, inclusive, and scalable civic learning experience.

---

## Core Features & Google Service Integrations

We focus on practical integrations that improve usability, reliability, and real-world value.

### Firebase Authentication (Google Sign-In)

A secure and optional authentication system allowing users to:

- Continue with Google Sign-In
- Use Guest Mode without creating an account
- Sync progress across sessions when signed in

### Firestore Persistence

When users sign in, the platform securely stores:

- Quiz scores and progress
- Learning path completion
- Accessibility preferences
- Recent activity state

If Firebase is unavailable, the app gracefully falls back to local browser storage.

### Firebase Analytics

Tracks meaningful product events to improve the platform experience, including:

- `login_success`
- `guest_mode_selected`
- `resources_viewed`
- `quiz_completed`
- `assistant_question_asked`
- `learning_path_selected`

### Gemini Educational Assistant

An AI-powered assistant using **Gemini 1.5 Flash** that helps users understand:

- Voter eligibility
- Election process steps
- EVM / VVPAT basics
- Polling day procedures
- Common civic questions

Strict prompt boundaries ensure responses remain:

- Neutral
- Non-partisan
- Educational
- Safe and beginner-friendly

### Google Maps API (Resources Locator)

Used to power the civic resources section for location-based guidance.

Includes graceful fallback behavior if API keys are unavailable.

---

## Product Features

### Personalized Learning Hub

Structured modules that explain:

- How elections work
- How to vote
- Important voter rights
- Registration basics
- Polling day guidance

### Voter Readiness Quiz

Interactive quiz experience with scoring and progress tracking.

### Myth vs Fact Module

Helps users understand common misconceptions related to elections.

### Accessibility Controls

Built-in accessibility support including:

- High Contrast Mode
- Adjustable Text Size
- Reduced Motion Mode

All preferences persist automatically.

---

## Architecture

- **Framework:** Next.js 16 (App Router)
- **Frontend:** React + TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** Radix UI + Lucide Icons
- **Backend:** Next.js Route Handlers / API Routes
- **Database:** Firebase Firestore
- **Authentication:** Firebase Auth
- **Analytics:** Firebase Analytics
- **Testing:** Vitest + React Testing Library

---

## Reliability & Engineering Focus

VoteWise India is built with strong engineering principles:

- Clean and modular code structure
- Graceful fallbacks when services are unavailable
- Strong accessibility support
- Efficient client performance
- Secure environment variable usage
- Maintainable scalable architecture

---

## Quick Start (For Evaluators)

### 1. Install Dependencies

```bash
npm install