# Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks

**Lewis et al. · 2020 (initial preprint) · Knowledge**

[Original paper](https://arxiv.org/abs/2005.11401) · [PDF](https://arxiv.org/pdf/2005.11401) · [Local PDF](2005.11401v4.pdf)

## Research question

Combine learned model parameters with retrieved external documents.

## Method and motivation

The original RAG uses a dense retriever and a generator, marginalizing over retrieved passages. Modern pipelines often retrieve, rerank and concatenate passages instead. Retrieval quality and grounding must be evaluated separately.

## Mathematical formulation

$$
p(y\mid x)\approx\sum_{z\in Z_k(x)}p_\eta(z\mid x)p_\theta(y\mid x,z)
$$

This is a teaching formulation; see the original paper for the complete notation and assumptions.

## Worked example

If two documents have retrieval probabilities 0.7 and 0.3 and answer likelihoods 0.8 and 0.2, the mixture likelihood is 0.62.

## Proposed Python experiment

Build a small TF-IDF retriever; compare recall@k and answer evidence coverage.

## Findings and limitations

Retrieval can miss evidence or return stale or misleading text; citations do not ensure entailment. Consult the paper's experimental tables for dataset-specific findings; the worked example above is illustrative rather than reproduced data.

## Investment research application

Use this technique in a synthetic financial research pipeline; measure evidence accuracy, computational cost and failure modes before applying it to real decisions. For the integrated design see [applications](../applications.md).

## Related research

- [Lost in the Middle: How Language Models Use Long Contexts](lost-middle.md)
- [From Local to Global: A Graph RAG Approach to Query-Focused Summarization](graphrag.md)
- [ReAct: Synergizing Reasoning and Acting in Language Models](react.md)

## Review questions

1. What problem does the method solve, and what problem does it not solve?
2. Explain the mathematical formulation and identify its assumptions.
3. Design a baseline, metric and controlled experiment for the proposed lab.

## Reference

Lewis et al. (2020). *Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks*. [arXiv:2005.11401](https://arxiv.org/abs/2005.11401).
