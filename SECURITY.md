Create a file named SECURITY.md for the project “VoteWise India”.

Write a professional security and responsible implementation document.

This file must clearly support the evaluation criteria for:
- Security
- Code Quality
- Responsible AI usage
- Maintainability

Required sections:

1. Security Overview
Explain the security mindset of the project

2. Security Goals
List goals such as:
- safe and responsible user interactions
- secure handling of AI requests
- protected secrets
- minimal user data handling
- neutral and non-partisan boundaries

3. Responsible AI Boundaries
Explain clearly:
- the assistant is only for election process education
- it must not recommend parties or candidates
- it must not provide persuasion or political targeting
- it must stay neutral and educational
- it must use safe fallback responses when needed

4. Input Validation and Sanitization
Explain:
- validation of user prompts
- empty input handling
- limiting unexpected or abusive inputs
- safe formatting before API requests
- defensive handling of malformed requests

5. Secrets and Environment Variables
Explain:
- API keys must never be hardcoded
- use of environment variables
- presence of .env.example
- safe local development practices

6. Data Privacy Approach
Explain:
- minimal data collection
- no unnecessary personal data storage
- no user profiling for political influence
- no sensitive persistent storage unless needed

7. Safe Failure Handling
Explain:
- how assistant/API failures are handled
- graceful fallbacks
- generic safe responses
- user messaging during service issues

8. Client and Server Responsibility Split
Explain:
- what validation can happen on the client
- what must be enforced on the server/API route
- safe boundaries for assistant logic

9. Non-Partisan Scope Protection
Explain how the platform stays within election education and avoids misuse

10. Dependency and Code Hygiene
Include:
- maintainable dependencies
- avoiding unnecessary packages
- readable code
- minimizing risky complexity

11. Potential Risks and Mitigations
Mention risks like:
- AI misuse
- misleading user assumptions
- prompt abuse
- exposed secrets
- invalid user input
- dependency-related issues
Give mitigations for each

12. Limitations
Acknowledge realistic security limitations of a hackathon prototype while still showing responsible implementation

13. Conclusion
Summarize the responsible and safe approach of the project

Tone requirements:
- professional
- practical
- responsible
- evaluator-friendly
- specific to this project