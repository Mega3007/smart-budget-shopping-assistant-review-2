# Smart Budget Shopping Assistant

Responsive Review 2 continuation prototype for transparent budget-conscious shopping decisions.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/smart-budget-review-2/src/App.tsx` — source of truth for the local-first app shell, views, calculations, and browser persistence.
- `artifacts/smart-budget-review-2/src/index.css` — source of truth for the visual theme and responsive utilities.
- `artifacts/smart-budget-review-2/review-1-baseline/` — preserved Review 1 files from the GitHub baseline.
- `artifacts/smart-budget-review-2/REVIEW_2_CHANGELOG.md` — Review 1 → Review 2 traceability.
- `artifacts/smart-budget-review-2/USER_VALIDATION.md` — genuine tester evidence template; no results are fabricated.
- `artifacts/smart-budget-review-2/AI_INTERACTION_AUDIT.md` — AI decision traceability and limitations.

## Architecture decisions

- Review 2 is a frontend-only local-first prototype because no live API or external service is required to demonstrate the continuation track.
- Demo data is seeded in the browser but real validation data starts empty and is kept separate.
- Price comparison and assistant behavior are explicitly rule-based/illustrative; the app does not claim live market or LLM data.
- Review 1 source files are copied into the artifact as a preserved baseline instead of being overwritten.

## Product

The app turns the original one-product budget calculator into a multi-view shopping decision workspace with a persistent shopping list, category budget planner, Need vs Want intelligence, price comparison, explainable recommendations, what-if simulation, analytics, savings goals, a rule-based SmartBudget assistant, and evidence-ready validation workflows.

## User preferences

The student requested honest, evaluator-friendly Review 2 evidence with no fabricated testers, research, results, live APIs, AI usage, or predicted marks.

## Gotchas

- Do not populate tester feedback, iteration outcomes, or validated impact without genuine sessions.
- Prototype price rows must remain labelled as non-live.
- The Vite build expects `PORT` and `BASE_PATH` from the artifact workflow.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
