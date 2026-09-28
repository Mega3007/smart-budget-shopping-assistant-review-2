# AI Interaction Audit

## Transparency statement

AI served as an ideation and development partner. Final decisions were reviewed, corrected, and selected by the student. The Review 2 prototype does **not** claim ChatGPT, Gemini, Claude, or another external LLM integration.

## Carried-forward Review 1 interaction

| Date | Stage | Goal | Prompt Used | AI Suggestion | Decision | Reason | Human Correction | Final Outcome | Hallucination / Limitation |
|---|---|---|---|---|---|---|---|---|---|
| Review 1 record | Ideate with AI | Generate practical solutions for fixed-budget shopping | Suggest practical solutions to help customers who have a fixed shopping budget manage purchases when product prices increase or vary between brands. | Budget calculator, cheaper-brand comparison, shopping list, price alerts, alternatives, progress indicator, need-versus-optional classification, and a mobile assistant. | ADOPTED + REJECTED | Calculator, comparison, and alternatives directly matched the observed problem. | Real-time price alerts would require continuously updated store data that was not available. | A user-entered-price budget calculator was selected for Review 1. | The AI suggested live-data-dependent features; the project explicitly narrowed scope instead of pretending those APIs existed. |

## Review 2 development decisions

| Date | Stage | Goal | Prompt / requirement considered | AI suggestion or design direction | Decision | Reason | Human correction | Final outcome | Hallucination / Limitation |
|---|---|---|---|---|---|---|---|---|---|
| 2026-09-28 | Prototype | Continue the selected idea without fabricating research | Review 2 continuation brief | Make the product an evidence-ready decision-support workspace with dynamic shopping, budget, scenario, goal, and validation surfaces. | ADOPTED | It makes the Review 1 → Review 2 progression visible and testable. | Keep real-user evidence empty until sessions happen. | A local-first Review 2 prototype with explicit evidence states. | Local storage is not multi-user persistence. |
| 2026-09-28 | Prototype | Represent intelligent behaviour safely | Requirement for Smart Recommendations and Ask SmartBudget | Use explainable rules over current entered data rather than an external model. | MODIFIED | A real LLM integration was not required to demonstrate decision support and would create an unsupported claim. | Label the assistant as rule-based and show the reasoning. | Recommendations and answers are generated from current list and budget values. | No external AI response or live market intelligence is available. |
| 2026-09-28 | Prototype | Make price comparison demonstrable | Requirement for store comparison | Show illustrative store alternatives and highlight the lowest sample value. | MODIFIED | A visual comparison is useful for testing the interaction, but the project has no verified live price feed. | Add a persistent “Prototype prices – not live market prices” disclosure. | Price comparison is clearly labelled demonstration-only. | Sample values must not be reported as market research. |

## Audit rules for future entries

- Use `ADOPTED`, `MODIFIED`, or `REJECTED`.
- Record the reason and any human correction.
- Record a limitation whenever a suggestion depends on data, APIs, or evidence that is not available.
- Do not add historical interactions that did not occur.