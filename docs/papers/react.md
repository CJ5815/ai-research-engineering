# ReAct: Synergizing Reasoning and Acting in Language Models

**Yao et al. · 2022 (initial preprint) · Agents**

[Original paper](https://arxiv.org/abs/2210.03629) · [PDF](https://arxiv.org/pdf/2210.03629)

## Research question

Interleave reasoning, actions and observations.

## Method and motivation

An agent selects an action, receives an observation and updates its state before choosing another action. ReAct is a prompting approach, not inherently reinforcement learning. A production harness adds validation, timeouts and stopping rules.

## Mathematical formulation

$$
a_t\sim\pi_\theta(a_t\mid h_t),\quad h_{t+1}=(h_t,a_t,o_{t+1})
$$

This is a teaching formulation; see the original paper for the complete notation and assumptions.

## Worked example

An agent retrieves revenue, calls a calculator to compute growth, checks the source and produces a cited answer.

## Proposed Python experiment

Implement a bounded tool loop with a calculator and a toy document search; test malformed actions and stopping rules.

## Findings and limitations

Tool errors, prompt injection, accumulating context and repeated actions can degrade results. Consult the paper's experimental tables for dataset-specific findings; the worked example above is illustrative rather than reproduced data.

## Investment research application

Use this technique in a synthetic financial research pipeline; measure evidence accuracy, computational cost and failure modes before applying it to real decisions. For the integrated design see [applications](../applications.md).

## Related research

- [Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](cot.md)
- [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks](rag.md)
- [From Local to Global: A Graph RAG Approach to Query-Focused Summarization](graphrag.md)
- [Lost in the Middle: How Language Models Use Long Contexts](lost-middle.md)

## Review questions

1. What problem does the method solve, and what problem does it not solve?
2. Explain the mathematical formulation and identify its assumptions.
3. Design a baseline, metric and controlled experiment for the proposed lab.

## Reference

Yao et al. (2022). *ReAct: Synergizing Reasoning and Acting in Language Models*. [arXiv:2210.03629](https://arxiv.org/abs/2210.03629).
