# Lost in the Middle: How Language Models Use Long Contexts

**Liu et al. · 2023 (initial preprint) · Context**

[Original paper](https://arxiv.org/abs/2307.03172) · [PDF](https://arxiv.org/pdf/2307.03172) · [Local PDF](2307.03172v3.pdf) · [TACL PDF](2024.tacl-1.9.pdf)

## Research question

Study the effect of relevant information position in long prompts.

## Method and motivation

The paper reports position-sensitive performance on tasks including multi-document QA and key-value retrieval. Relevant information near the beginning or end was often used more effectively than information in the middle. This is model- and task-dependent.

## Mathematical formulation

$$
A(p,L)=\Pr(\hat y=y\mid\text{position }p,\text{length }L)
$$

This is a teaching formulation; see the original paper for the complete notation and assumptions.

## Worked example

Hold ten passages fixed and place the answer-bearing passage at positions 1, 5 and 10; compare accuracy across randomized questions.

## Proposed Python experiment

Run a controlled position experiment with fixed context length, randomized distractors and repeated trials.

## Findings and limitations

Results are not a universal U-shaped law; changes in prompt format and model can change the effect. Consult the paper's experimental tables for dataset-specific findings; the worked example above is illustrative rather than reproduced data.

## Investment research application

Use this technique in a synthetic financial research pipeline; measure evidence accuracy, computational cost and failure modes before applying it to real decisions. For the integrated design see [applications](../applications.md).

## Related research

- [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks](rag.md)
- [From Local to Global: A Graph RAG Approach to Query-Focused Summarization](graphrag.md)
- [ReAct: Synergizing Reasoning and Acting in Language Models](react.md)
- [Efficient Memory Management for Large Language Model Serving with PagedAttention](pagedattention.md)

## Review questions

1. What problem does the method solve, and what problem does it not solve?
2. Explain the mathematical formulation and identify its assumptions.
3. Design a baseline, metric and controlled experiment for the proposed lab.

## Reference

Liu et al. (2023). *Lost in the Middle: How Language Models Use Long Contexts*. [arXiv:2307.03172](https://arxiv.org/abs/2307.03172).
