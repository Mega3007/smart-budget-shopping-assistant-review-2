# Smart Budget Shopping Assistant
## Review 3 – Prototype Validation and Improvement Report

**Project:** Smart Budget Shopping Assistant  
**Program:** Project Better Tomorrow  
**Pathway:** A – Continuation Track  
**Review:** 3  
**Technology:** React, TypeScript, Browser LocalStorage

---

## 1. Project Overview

Smart Budget Shopping Assistant is a web-based prototype designed to help users manage shopping expenses, distinguish essential purchases from optional purchases, compare available product-price information, and track savings goals.

The project follows the Design Thinking methodology:

**Empathize → Define → Ideate → Prototype → Test → Iterate**

Review 3 focuses on testing the prototype with real users, collecting feedback, implementing improvements, and documenting retesting evidence.

## 2. Problem Statement

How might we help customers shopping with a fixed budget make better purchasing decisions by tracking expenses and identifying budget-friendly alternatives?

The application aims to improve spending awareness and support informed purchasing decisions.

## 3. Project Objectives

- Help users prepare and manage shopping lists.
- Track planned expenses against a fixed budget.
- Classify purchases into Needs, Wants, and Unclear.
- Display available price-comparison information.
- Provide rule-based spending recommendations.
- Track savings goals and contributions.
- Collect real-user feedback and improve usability.

## 4. Prototype Features

| Feature | Description |
|---|---|
| Dashboard | Displays shopping and budget summaries |
| Shopping List | Add, edit, delete, search, filter, and sort products |
| Budget Planner | Manage shopping budget and spending categories |
| Need vs Want Intelligence | Classify purchases and calculate totals |
| Price Comparison | Display available demonstration price data |
| Smart Recommendations | Provide rule-based spending suggestions |
| What-If Simulator | Explore alternative spending scenarios |
| Spending Analytics | Summarize planned spending |
| Savings Goals | Track savings targets and contributions |
| Ask SmartBudget | Provide structured, rule-based guidance |
| Prototype Validation | Record user-testing feedback |
| Feedback & Iteration | Track issues, improvements, and retesting |
| AI Interaction Audit | Document AI assistance and limitations |

## 5. Review 3 Testing Methodology

The prototype was evaluated through manual functional testing and recorded user-validation activities.

The testing process included:

1. Selecting representative shopping and budgeting tasks.
2. Asking users to interact with the prototype.
3. Recording usability ratings and observations.
4. Identifying difficulties in important workflows.
5. Improving selected features.
6. Retesting the improved workflows.
7. Documenting completed and pending checks.

The detailed testing checklist is available in `REVIEW_3_TESTING.md`.

## 6. User Validation Results

The Prototype Validation section contains four feedback records, exceeding the required threshold of three.

### Recorded Results

| Measurement | Result |
|---|---|
| Required user tests | 3 |
| Recorded feedback entries | 4 |
| Average ease of use | 3.0/5 |
| Average usefulness | 3.5/5 |
| Average design rating | 3.0/5 |

### User Feedback Summary

**Tester 01 – Price Comparison**

The tester found it difficult to understand comparison prices for newly added shopping items.

**Tester 02 – Need vs Want Intelligence**

The improvement record identified a need for clearer confirmation that newly added products were included in classification totals.

**Tester 03 – Savings Goals**

The tester needed clearer feedback after making a savings contribution.

**Tester 04 – Search and Filtering**

The tester initially found the search and filter controls difficult to understand.

The Tester 04 usability observation remains a future improvement opportunity.

## 7. Feedback-Driven Improvements

### Improvement 1: Dynamic Price Comparison

**Priority:** High

**Before:** Price Comparison displayed only the original demonstration products.

**Improvement:** The feature was updated to read products from the current Shopping List.

**Retest:** A newly added Notebook appeared with its category, quantity, and Need classification. When comparison prices were unavailable, the interface displayed an appropriate message.

**Result:** Passed.

### Improvement 2: Need vs Want Totals

**Priority:** Medium

**Before:** Users needed clearer confirmation that new shopping items were included in the summary.

**Improvement:** The classification workflow was checked to ensure item counts and amounts reflected new entries.

**Retest:** Adding Notebook as a Need for ₹50 changed the Needs summary from 3 items (₹22) to 4 items (₹72).

**Result:** Passed.

### Improvement 3: Savings Goal Progress

**Priority:** Low

**Before:** The effect of a contribution was not immediately clear.

**Improvement:** The contribution workflow was checked to display updated saved amounts, remaining amounts, and progress percentages.

**Retest:** The relevant savings information updated after a contribution.

**Result:** Passed.

## 8. Functional Testing Summary

The Review 3 testing documentation records 12 passed manual functional checks covering:

- Demonstration data loading.
- Shopping item creation, editing, and deletion.
- Product search, filtering, and sorting.
- Budget updates.
- Need vs Want calculations.
- Dynamic Price Comparison.
- Missing price-data handling.
- Savings goal contributions.

Additional negative-input and browser-storage boundary tests remain to be completed.

## 9. Technical Implementation

### Frontend

The application uses React and TypeScript to implement interactive user interfaces and application logic.

### Data Storage

The prototype uses browser LocalStorage for application data. Information is not automatically synchronized across browsers or devices.

### Price Comparison

Price information is demonstration data rather than verified live retailer prices. Newly added products can appear without invented comparison values.

### Smart Recommendations

The prototype provides rule-based recommendations. It does not claim to connect to an external language model for live inference.

### Backend and API Scope

The current prototype does not document a live retailer-price API or persistent server database. Backend endpoints and database schemas are therefore not claimed.

## 10. AI Interaction and Responsible Use

AI assistance was used during project ideation, implementation support, and documentation preparation.

Important principles followed include:

- Separating demonstration data from real-user feedback.
- Avoiding fabricated live retailer prices.
- Documenting limitations clearly.
- Using user feedback to guide improvements.
- Recording retesting outcomes rather than assuming success.

The AI Interaction Audit section provides additional context.

## 11. Known Limitations

1. Retailer prices are not live.
2. Browser LocalStorage does not provide cross-device synchronization.
3. Recommendations are rule-based.
4. Automated unit-test coverage requires further development.
5. Input validation and error boundaries require additional systematic testing.
6. Search and filter usability can be improved.
7. Personalized recommendations require further refinement.

## 12. Future Development Plan

- Improve search and filter guidance based on Tester 04 feedback.
- Add automated tests for budget and savings calculations.
- Expand input-validation and error-boundary testing.
- Improve inline code documentation.
- Integrate verified retailer-price information if reliable APIs become available.
- Consider secure cloud-based storage for optional synchronization.
- Conduct additional user testing.

## 13. Review 3 Evidence

The following project materials support the Review 3 documentation:

- `README.md` – Project overview and technical information.
- `REVIEW_3_TESTING.md` – Functional testing and validation report.
- `artifacts/smart-budget-review-2/` – Existing project implementation and earlier review artifacts.
- Prototype Validation – Recorded feedback entries within the application.
- Feedback & Iteration – Improvement and retesting records within the application.
- AI Interaction Audit – AI-use documentation within the application.

Supporting screenshots of prototype testing and feedback should be retained for evaluator review.

## 14. Conclusion

The Smart Budget Shopping Assistant demonstrates a functional continuation of the earlier design-thinking project.

During Review 3 preparation, four user-feedback records were documented and three feedback-driven improvements were recorded as successfully retested.

The project demonstrates the Design Thinking cycle from identifying user difficulties to improving and validating selected workflows.

Further work will focus on usability, automated testing, stronger error handling, and reliable data integration.

**Review 3 Status:** Prototype testing and documentation prepared; additional boundary testing and evidence verification remain as future work.
