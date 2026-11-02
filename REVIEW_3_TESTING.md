# Review 3 – Testing, Validation and Error Boundaries

## Project Information

**Project Name:** Smart Budget Shopping Assistant  
**Program:** Project Better Tomorrow  
**Pathway:** A – Continuation Track  
**Review:** 3  
**Application Type:** React and TypeScript Web Prototype

## 1. Testing Objectives

The purpose of Review 3 testing is to evaluate the functionality, usability, reliability, and limitations of the Smart Budget Shopping Assistant.

The main objectives are:

- Verify that shopping items can be added, edited, deleted, searched, filtered, and sorted.
- Check budget calculations and Need vs Want classification.
- Confirm that Price Comparison reflects newly added shopping items.
- Verify that savings contributions update goal progress.
- Collect user feedback and document improvements.
- Identify error boundaries and areas requiring further testing.

## 2. Functional Testing Results

The following results summarize functionality checked during prototype development and Review 3 preparation.

| Test ID | Feature | Test Scenario | Observed Result | Status |
|---|---|---|---|---|
| TC01 | Dashboard | Load demonstration data | Sample shopping items and budget loaded | Passed |
| TC02 | Shopping List | Add a new shopping item | Item appeared in the list | Passed |
| TC03 | Shopping List | Edit an existing item | Updated information displayed | Passed |
| TC04 | Shopping List | Delete an item | Item removed from the list | Passed |
| TC05 | Shopping List | Search for a product | Matching items displayed | Passed |
| TC06 | Shopping List | Filter Needs and Wants | Relevant items displayed | Passed |
| TC07 | Shopping List | Sort by estimated price | Item order updated | Passed |
| TC08 | Budget Planner | Change shopping budget | Updated budget displayed and saved locally | Passed |
| TC09 | Need vs Want | Add Notebook as a Need | Needs total changed from 3 items (₹22) to 4 items (₹72) | Passed |
| TC10 | Price Comparison | Add Notebook to Shopping List | Notebook appeared in Price Comparison | Passed |
| TC11 | Price Comparison | Check item without comparison prices | Price comparison data unavailable message displayed | Passed |
| TC12 | Savings Goals | Add a savings contribution | Saved amount and progress percentage updated | Passed |

**Testing note:** These are documented prototype checks and manual observations. They are not presented as an automated unit-test suite.

## 3. User Validation

The Prototype Validation section contains four recorded feedback entries.

The application displays:

- Required user-testing threshold: 3/3
- Feedback records stored: 4
- Average ease of use: 3.0/5
- Average usefulness: 3.5/5
- Average design rating: 3.0/5

### Tester Feedback Summary

| Tester | Task | Main Observation |
|---|---|---|
| Tester 01 | Create shopping list and compare prices | Difficulty understanding comparison prices for new items |
| Tester 02 | Add item and use Need vs Want Intelligence | Needed clearer confirmation of updated classification |
| Tester 03 | Create savings goal and add contribution | Savings progress update was not immediately clear |
| Tester 04 | Add, search, filter, and sort shopping items | Search and filter controls were initially difficult to understand |

These figures and observations reflect records entered in the prototype. Original testing notes or screenshots should be retained as supporting evidence.

## 4. Feedback, Improvement and Retesting

### Improvement 1: Dynamic Price Comparison

**Problem:** Newly added shopping items were missing from Price Comparison.

**Improvement:** Price Comparison was updated to read the current Shopping List dynamically.

**Retest:** Notebook appeared with its category, quantity, and Need classification. Missing retailer prices were explicitly identified as unavailable.

**Result:** Passed.

### Improvement 2: Need vs Want Classification

**Problem:** Users needed clearer confirmation that new items were included in classification totals.

**Improvement:** The workflow was checked to ensure newly added items contribute to the appropriate Need, Want, or Unclear totals.

**Retest:** Adding Notebook as a Need for ₹50 changed the Needs summary from 3 items (₹22) to 4 items (₹72).

**Result:** Passed.

### Improvement 3: Savings Goal Progress

**Problem:** The effect of a savings contribution was not immediately clear.

**Improvement:** The contribution workflow was checked for automatic updates to saved amount, remaining amount, and progress percentage.

**Retest:** The saved amount and progress percentage updated after a contribution.

**Result:** Passed.

## 5. Error Boundaries and Negative Testing

The following cases are important for evaluating reliability.

| Test Case | Expected Behaviour | Verification Status |
|---|---|---|
| Negative item price | Reject or safely handle invalid amount | Further testing required |
| Zero or negative quantity | Prevent invalid quantity | Further testing required |
| Empty product name | Show appropriate validation | Further testing required |
| Missing comparison prices | Display an unavailable-data message | Passed |
| Empty shopping list | Display an appropriate empty state | Further testing required |
| Browser storage unavailable | Handle storage failure without crashing | Further testing required |
| Browser refresh | Preserve saved information in the same browser | Further verification required |
| Different browser or device | Do not assume automatic data synchronization | Known limitation |

Unverified scenarios are intentionally not marked as passed.

## 6. Technical Testing

The project documentation records the following development checks:

- TypeScript typecheck.
- Production Vite build.
- Source review of navigation labels.
- Review of demo-data and real-user-validation separation.

The project uses React and TypeScript for its frontend. The prototype stores application information locally in the browser.

These documented development checks do not establish complete automated test coverage.

## 7. System Architecture and Data Handling

### Frontend

The application provides interactive pages for shopping management, budgeting, analysis, and validation.

### Data Storage

The prototype uses browser localStorage to preserve application data within the same browser environment.

### Price Comparison

Comparison values are demonstration data. The application does not claim to retrieve verified live retailer prices.

### AI Assistance

AI was used during ideation and development. Recommendations shown within the prototype are rule-based; the application does not claim a connected external language model.

### API and Database Scope

No verified live retailer API or persistent server database is documented as part of the current prototype. Therefore, live API endpoints and database schemas are not claimed.

## 8. Known Limitations

1. Retailer prices are not live.
2. Data is stored locally rather than synchronized across devices.
3. The assistant uses rule-based guidance instead of a connected AI model.
4. Additional automated unit tests and boundary tests are needed.
5. Search and filter usability could be improved based on recorded tester feedback.
6. Recommendations may require further personalization for newly added products.

## 9. Future Improvements

- Add automated unit tests for calculation functions.
- Expand invalid-input and boundary-case testing.
- Improve code comments and technical documentation.
- Improve search and filter instructions.
- Integrate verified retailer APIs where available.
- Consider a secure backend for optional account-based synchronization.
- Conduct additional usability tests and document results.

## 10. Review 3 Conclusion

The Smart Budget Shopping Assistant has progressed from a design-thinking concept into a functional web prototype with documented manual testing and user-feedback records.

Three feedback-driven improvements have been retested and recorded as passed. The prototype also documents its limitations, including demonstration price data and local browser storage.

Review 3 focuses on validating functionality, demonstrating evidence-based iteration, and identifying the remaining technical work required before broader deployment.
