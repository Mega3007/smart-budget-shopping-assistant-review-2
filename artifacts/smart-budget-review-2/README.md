# Smart Budget Shopping Assistant

## Live Prototype

Open the Replit preview for the runnable Review 2 artifact. The prototype is local-first and stores entries in the current browser.

## Project Better Tomorrow

An intelligent decision-support prototype for everyday budget-conscious shopping.

## Pathway Selected

**Pathway A – Continuation Track**

## Problem Statement

Customers with a fixed shopping budget find it difficult to manage essential purchases when product prices vary or increase. They need a simple way to understand total spending, remaining budget, and possible lower-cost alternatives.

## Why This Problem Matters

Price changes, different brands, and limited budgets can force people to remove essential items or make rushed choices. A useful tool should make trade-offs visible without taking the decision away from the shopper.

## Target Users

Customers who need to purchase everyday items within a limited or fixed shopping budget.

## Design Thinking Process

### Empathize

Review 1 carried forward the existing empathy evidence about checking prices, comparing brands, choosing smaller quantities, and removing items after price increases.

### Define

How might we help customers shopping with a fixed budget make better purchasing decisions by tracking expenses and identifying budget-friendly alternatives?

### Ideate with AI

The existing Review 1 AI ideation audit is preserved and expanded in `AI_INTERACTION_AUDIT.md`.

### Prototype

Review 2 adds a working, responsive browser prototype with calculations, decision support, evidence capture, and transparent demo mode.

### Test

Review 2 requires feedback from at least three real testers. The app starts with 0 / 3 tests and does not fabricate records.

### Iterate

The Feedback & Iteration surface is designed to connect a real tester observation to a problem, improvement, before/after state, and retest result.

## Review 1 Baseline

Review 1 score: **30.8 / 35 (88%)**.

Review 1 included a basic budget input, product price, quantity, total calculation, remaining balance, problem documentation, and initial AI ideation. The exact files are preserved in `review-1-baseline/`.

## Review 1 → Review 2 Improvements

| Feature | Review 1 | Review 2 | Status |
|---|---|---|---|
| Budget calculation | One product | Multi-item plan with dynamic dashboard totals | Implemented |
| Shopping list | Not available | Add, delete, mark purchased, filter, persist | Implemented |
| Need vs Want | Idea only | Current-list intelligence and reflection | Implemented |
| Price comparison | Cheaper alternative idea | Illustrative store comparison with disclosure | Implemented |
| Recommendations | Initial idea | Rule-based cards with reasons and actions | Implemented |
| What-if simulator | Not available | Interactive scenario controls | Implemented |
| Analytics | Not available | Current-list category and budget signals | Implemented |
| Savings goals | Not available | Add, progress, delete, persist | Implemented |
| Ask SmartBudget | Not available | Rule-based assistant reflection | Implemented |
| Real-user validation | Future work | Form, averages, empty state, 0 / 3 status | Testing |
| Feedback iteration | Future work | Evidence surface ready for real records | Testing |
| Three real testers | Not available | Requires genuine student-entered evidence | Pending |

## Core Features

The sidebar contains Dashboard, Shopping List, Budget Planner, Need vs Want, Price Comparison, Recommendations, What-If Simulator, Spending Analytics, Savings Goals, Ask SmartBudget, Prototype Validation, Feedback & Iteration, Design Thinking Journey, AI Interaction Audit, Review 2 Evidence, Project Evolution, and Settings.

## Need vs Want Intelligence

Needs, Wants, and Unsure items are calculated from the current list. The interface shows totals and explains that the labels are decision-support signals, not moral judgements.

## Budget Planner

Monthly income, shopping budget, and category envelopes are editable and persist locally.

## Price Comparison

Prices are illustrative prototype rows and are explicitly labelled as not live market prices.

## Recommendation Engine

Recommendations are rule-based over current list labels, priorities, and budget coverage. The UI explains the responsible rule and provides an action.

## What-If Simulator

Waiting days, removing Wants, and setting aside extra money update a scenario without mutating the saved plan.

## Analytics

Analytics describe the current entered shopping list. No historical spending is invented.

## Savings Goals

Goals show target, saved amount, date, and calculated progress.

## Ask SmartBudget

The assistant uses a transparent reflection pattern. It does not claim an external AI API.

## AI Interaction Audit

See `AI_INTERACTION_AUDIT.md`. Adopted, modified, and rejected decisions are separated from unsupported claims.

## Prototype Validation

Review 2 requires feedback from at least three real testers. Only actual tester records should be entered.

## Feedback-Based Iteration

See `USER_VALIDATION.md` and the in-app Feedback & Iteration view. Do not mark a change implemented unless it is actually present in the prototype.

## Demonstration Instructions

1. Open Dashboard.
2. Select **Load demo data**.
3. Review Shopping List and Need vs Want.
4. Try Price Comparison.
5. Open Recommendations and What-If Simulator.
6. Inspect Analytics and Savings Goals.
7. Review Design Thinking, AI Audit, Review 2 Evidence, and Project Evolution.
8. Run real tester sessions before entering validation records.
9. Use Reset before a fresh demonstration or testing session.

Demo data is for prototype demonstration only and is not user-research evidence.

## Technology Stack

React, TypeScript, Vite, Tailwind CSS, Lucide icons, Wouter, and browser LocalStorage.

## Project Architecture

- `src/App.tsx` contains the local-first product shell, views, calculations, and persistence.
- `src/index.css` contains the product theme and responsive UI rules.
- `review-1-baseline/` preserves the original Review 1 files.
- `USER_VALIDATION.md`, `AI_INTERACTION_AUDIT.md`, `REVIEW_2_CHANGELOG.md`, `REVIEW_2_REPORT.md`, and `TESTING.md` hold evaluator-facing evidence and limitations.

## Installation

From the workspace root:

```bash
pnpm install
```

## Running Locally

Use the managed artifact workflow:

```bash
pnpm --filter @workspace/smart-budget-review-2 run dev
```

## Screenshots

Screenshots are intentionally not fabricated. Use the live Replit preview when preparing submission evidence.

## Testing

See `TESTING.md`.

## Responsible AI Statement

AI supported ideation and development, but final decisions were reviewed and corrected by the student. Rule-based prototype logic is labelled as such.

## Data Transparency

Demo figures and illustrative prices are not user research or live market data. Validated user outcomes remain empty until real tester sessions are entered.

## Limitations

No accounts, cloud sync, live retailer API, historical dataset, or external LLM connection is included.

## Future Enhancements

Collect three real tester sessions, document feedback-led improvements, retest the changed flows, and evaluate verified data integrations separately.

## Review 2 Status

- Working prototype: **Implemented**
- Review 1 → Review 2 documentation: **Implemented**
- AI audit: **Implemented**
- Three real testers: **Pending genuine evidence**
- Feedback iteration: **Pending genuine evidence**
- Predicted mark: **Not displayed**