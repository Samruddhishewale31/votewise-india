Create a file named ARCHITECTURE.md for the project “VoteWise India”.

Write a concise but strong technical architecture document for hackathon evaluators and developers.

The architecture document must clearly show strong decisions that support:
- Code Quality
- Security
- Efficiency
- Testing
- Accessibility
- Google Services integration

Required sections:

1. Overview
Briefly explain the app architecture and why it was chosen

2. Architecture Goals
Mention:
- modularity
- maintainability
- clear separation of concerns
- accessibility-first design
- safe AI integration
- efficient implementation

3. Frontend Architecture
Explain the use of:
- Next.js
- TypeScript
- Tailwind CSS
- reusable UI components
- page-based structure
- shared utilities

4. Page Structure
Describe pages such as:
- Home
- Learn
- Assistant
- Quiz
- Myth vs Fact
- Resources
- About

5. Component Structure
Explain how components are grouped, for example:
- layout
- home
- assistant
- quiz
- accessibility
- shared components

6. Data Layer
Explain use of:
- static data files for educational content
- helper functions
- constants
- structured JSON/TS content sources
Explain why this is efficient and maintainable

7. API Layer
Explain the assistant API route using Gemini
Include:
- input validation
- safe request handling
- fallback behavior
- output boundaries

8. Personalization Logic
Explain how user category selection drives learning recommendations and quiz guidance

9. Accessibility Architecture
Explain how accessibility is built into:
- layout
- typography
- controls
- semantics
- motion and contrast handling

10. Google Services Architecture
Explain:
- Gemini integration flow
- Google Maps integration flow
- why these services are meaningful to the user journey

11. Security Architecture
Include:
- environment variables
- input sanitization
- safe prompts
- defensive responses
- minimal data handling

12. Testing Architecture
Explain how testing is organized and what logic/components are prioritized

13. Efficiency and Performance Decisions
Include:
- reusable components
- lightweight assets
- static content usage
- minimal API dependence
- simple state management
- optimized user flows

14. Maintainability Notes
Explain why the codebase is easy to extend

15. Conclusion
Summarize why the architecture supports a strong hackathon submission

Tone requirements:
- technical but readable
- concise
- practical
- evaluator-friendly
- should feel mature and thoughtful