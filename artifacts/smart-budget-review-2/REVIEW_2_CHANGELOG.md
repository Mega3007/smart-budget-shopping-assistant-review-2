# Review 1 Baseline

Review 1 received **30.8 / 35 (88%)**. The repository contained:

- A single-page budget calculator.
- Inputs for budget, product, price, and quantity.
- A total-cost calculation.
- A remaining-budget calculation.
- A within-budget / over-budget message.
- `Problem_Statement.md` documenting the fixed-budget shopping problem.
- `AI_Ideation_Audit.md` documenting the first ideation interaction.

The exact Review 1 files are preserved in [`review-1-baseline/`](./review-1-baseline/).

## Review 1 Strengths

- The problem was clearly defined.
- The original prototype had a working calculation flow.
- The first AI ideation record included adopted ideas, rejected ideas, and an important live-data limitation.
- The pathway was identified as Pathway A – Continuation Track.

## Review 1 Limitations

- The calculator supported one product at a time.
- There was no persistent shopping list or purchase status.
- Budget planning did not include categories or dynamic health.
- Need-versus-want reasoning was not represented.
- There was no what-if simulation, savings goal, analytics, or evidence center.
- Validation and feedback capture were still future work.

## Review 2 Objectives

1. Turn the calculator into a decision-support workspace.
2. Make Review 1 → Review 2 progression easy to verify.
3. Keep calculations dynamic and transparent.
4. Provide genuine evidence-entry surfaces without inventing testers or results.
5. Make demo data and prototype price data visibly distinct from research evidence.

## Features Added

- Responsive workspace navigation covering every required Review 2 area.
- Multi-item shopping list with add, delete, purchased state, filters, and local persistence.
- Budget planner with monthly income, shopping boundary, category envelopes, and coverage progress.
- Need vs Want reflection and dynamic item summaries.
- Prototype price comparison with explicit non-live disclosure.
- Rule-based recommendations with visible reasoning.
- What-if scenario controls that leave the saved plan unchanged.
- Spending analytics based only on current entered data.
- Savings goals with progress indicators and delete confirmation.
- Rule-based Ask SmartBudget reflection surface with no false LLM claim.
- Prototype Validation page starting at 0 / 3 real tests.
- Review 2 Evidence, Project Evolution, Design Thinking, AI Audit, and Feedback & Iteration views.
- Load Demo Data and Reset controls.
- LocalStorage persistence for budget, shopping data, goals, and validation records.

## Features Improved

- Currency presentation now uses Indian rupees.
- Budget health is calculated from plan coverage and need signals rather than hard-coded.
- Empty states and confirmation prompts make data status explicit.
- The dashboard distinguishes demonstration data from real-user validation.
- The interface is keyboard-friendly and responsive across desktop, tablet, and mobile widths.

## Bugs Fixed

- Replaced the Review 1 one-product interface with a persistent multi-item flow.
- Removed the possibility of presenting sample price rows as live market data.
- Added reset confirmation before clearing local prototype data.
- Added safe empty-state behavior when there are no validation records or list matches.

## User Feedback Implemented

No user feedback has been entered yet. This section is intentionally empty until genuine tester sessions are completed. The app includes a form to record feedback and a separate iteration area so future changes can be traced.

## Current Limitations

- Data is local to the browser; there is no account or cloud sync.
- Prices are illustrative and not connected to retailer APIs.
- Recommendations are transparent frontend rules, not an external AI model.
- Historical spending charts need real purchases entered over time.
- Three real testers, their scores, issues, and retest outcomes are still required from the student.

## Future Work

- Run at least three real prototype sessions.
- Record the actual task, feedback, problem, and suggestion from each tester.
- Add iteration records only when a feedback-led change has genuinely been implemented.
- Retest changed flows and document the before/after evidence.
- Consider a real product-price source only after its data quality and scope are verified.