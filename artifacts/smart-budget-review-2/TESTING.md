# Testing

## Checks completed during development

- TypeScript typecheck for the React artifact.
- Production Vite build with the artifact workflow environment.
- Source review for all required navigation labels.
- Source review for demo-data and real-user-validation separation.

## Manual acceptance checklist

Use this checklist before submitting Review 2:

- [ ] Application starts in the Replit preview.
- [ ] Dashboard renders without console errors.
- [ ] Every sidebar/mobile navigation item opens a meaningful view.
- [ ] Load Demo Data restores sample budget, shopping list, and goals.
- [ ] Reset asks for confirmation and restores the sample workspace.
- [ ] Shopping item can be added, marked purchased, and deleted.
- [ ] Need vs Want filters update the visible list.
- [ ] Budget values and category envelopes update totals.
- [ ] Recommendation explanations describe the current data/rule.
- [ ] What-if controls update the scenario without changing the saved list.
- [ ] Price comparison clearly says prices are not live.
- [ ] Savings goal progress is calculated from target and saved amount.
- [ ] Ask SmartBudget states that it is a prototype rule-based assistant.
- [ ] Prototype Validation begins at 0 / 3 when no real feedback exists.
- [ ] Validation scores are calculated only from submitted records.
- [ ] Demo reset never creates tester feedback.
- [ ] Data remains after refresh in the same browser.
- [ ] Layout remains usable at mobile width.

## Evidence integrity checks

- No predicted mark is shown.
- No tester result is pre-filled.
- No live API is claimed.
- No sample price is presented as live market research.
- Review 1 baseline files remain available in `review-1-baseline/`.