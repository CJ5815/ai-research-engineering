# From Local to Global: A Graph RAG Approach to Query-Focused Summarization

**Edge et al. · 2024 (initial preprint) · Knowledge**

[Original paper](https://arxiv.org/abs/2404.16130) · [PDF](https://arxiv.org/pdf/2404.16130)

## Research question

Use entity graphs and community summaries for corpus-wide synthesis.

## Method and motivation

Extract entities and relationships, detect graph communities, generate hierarchical summaries and combine partial answers to global questions. Local graph retrieval and global community synthesis are distinct. Hybrid vector and graph retrieval can be useful.

## Mathematical formulation

$$
G=(V,E)
$$

This is a teaching formulation; see the original paper for the complete notation and assumptions.

## Worked example

Connect firms to suppliers, customers and shared risks; community summaries can expose themes that isolated passage retrieval misses.

## Proposed Python experiment

Build a NetworkX graph from synthetic company relationships; compare local neighbor retrieval with community-level summaries.

## Findings and limitations

Graph extraction errors, indexing cost and summary loss can propagate; graph retrieval is not always better. Consult the paper's experimental tables for dataset-specific findings; the worked example above is illustrative rather than reproduced data.

## Investment research application

Use this technique in a synthetic financial research pipeline; measure evidence accuracy, computational cost and failure modes before applying it to real decisions. For the integrated design see [applications](../applications.md).

## Related research

- [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks](rag.md)
- [Lost in the Middle: How Language Models Use Long Contexts](lost-middle.md)
- [ReAct: Synergizing Reasoning and Acting in Language Models](react.md)

## Review questions

1. What problem does the method solve, and what problem does it not solve?
2. Explain the mathematical formulation and identify its assumptions.
3. Design a baseline, metric and controlled experiment for the proposed lab.

## Reference

Edge et al. (2024). *From Local to Global: A Graph RAG Approach to Query-Focused Summarization*. [arXiv:2404.16130](https://arxiv.org/abs/2404.16130).
