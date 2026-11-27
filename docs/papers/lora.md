# LoRA: Low-Rank Adaptation of Large Language Models

**Hu et al. · 2021 (initial preprint) · Adaptation**

[Original paper](https://arxiv.org/abs/2106.09685) · [PDF](https://arxiv.org/pdf/2106.09685) · [Local PDF](2106.09685v2.pdf)

## Research question

Fine-tune a model by learning low-rank weight updates.

## Method and motivation

Freeze pretrained weights and optimize two smaller matrices. The update can be merged into a compatible base weight for inference. LoRA changes model behavior, whereas RAG supplies information at inference.

## Mathematical formulation

$$
W=W_0+\frac{\alpha}{r}BA,\quad B\in\mathbb R^{d\times r},\ A\in\mathbb R^{r\times k}
$$

This is a teaching formulation; see the original paper for the complete notation and assumptions.

## Worked example

A 4096 by 4096 matrix has 16,777,216 parameters; rank 16 uses 131,072 trainable adapter parameters, about 0.78% of the original matrix.

## Proposed Python experiment

Compare ranks 1, 4 and 16 on a synthetic linear regression task with frozen base weights.

## Findings and limitations

Low rank may limit adaptation; dataset quality matters; adapters are not a reliable factual database. Consult the paper's experimental tables for dataset-specific findings; the worked example above is illustrative rather than reproduced data.

## Investment research application

Use this technique in a synthetic financial research pipeline; measure evidence accuracy, computational cost and failure modes before applying it to real decisions. For the integrated design see [applications](../applications.md).

## Related research

- [Attention Is All You Need](transformer.md)
- [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks](rag.md)

## Review questions

1. What problem does the method solve, and what problem does it not solve?
2. Explain the mathematical formulation and identify its assumptions.
3. Design a baseline, metric and controlled experiment for the proposed lab.

## Reference

Hu et al. (2021). *LoRA: Low-Rank Adaptation of Large Language Models*. [arXiv:2106.09685](https://arxiv.org/abs/2106.09685).
