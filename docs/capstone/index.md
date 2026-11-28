# Investment research capstone

**Status:** Planned. The existing [application design](../applications.md) sketches the research workflow.

Build a local system that answers a point-in-time investment research question using public or synthetic documents. It should retrieve evidence with stable citations, call one read-only numerical tool, and return a structured brief with a thesis, supporting and contradictory evidence, risks, catalysts, horizon, and uncertainty. Verify the source dates and calculations before human review.

| Weeks | Milestone |
|---|---|
| 7, 9–10 | Define the report contract and build the labeled evidence and RAG baselines. |
| 11–15 | Test context and conflicts, add a verified search baseline and Bayesian forecast experiment, then compare fixed and tool-enabled workflows. |
| 16–18 | Add bounded state and retries, measure serving costs, and freeze the held-out evaluation. |
| 19 | Integrate and rehearse on development cases. |
| 20 | Compare standalone generation, RAG, a fixed workflow, and a verified agent on the frozen set. Present a reproducible demo and an executive briefing. |

Report claim support, numerical accuracy, coverage, abstention, reliability, latency, and cost. Review paired results on the same cases and document uncertainty and failure examples. Keep forecasts tied to explicit horizons and score them when outcomes are available.

The proposed pilot has 32 cases from a few synthetic issuers across two reporting periods. Divide cases by issuer-period or document group into development and held-out sets. Annotate source spans, availability timestamps, and arithmetic answers with units. Include conflicting evidence, missing evidence, and future-dated documents that should be excluded. Keep the case order, eligible evidence, and comparable model and tool budgets fixed across runs.

A single documented local command should reproduce the demonstration. Acceptance requires resolvable citations, correct cutoff handling, bounded termination, and abstention or escalation when evidence is insufficient. A fixed workflow can score higher than the agent and still yield a successful capstone.
