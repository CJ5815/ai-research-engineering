# Attention Is All You Need

**Vaswani et al. · 2017 (initial preprint) · Architecture**

[Original paper](https://arxiv.org/abs/1706.03762) · [PDF](https://arxiv.org/pdf/1706.03762) · [Local PDF](1706.03762v7.pdf)

## Research question

Replace recurrence with attention and feedforward layers.

## Method and motivation

Attention computes a weighted mixture of values using query–key similarity. Multi-head attention learns several projections; positional information preserves order. The original architecture is encoder–decoder; many modern LLMs use decoder-only causal attention.

## Mathematical formulation

$$
\operatorname{Attention}(Q,K,V)=\operatorname{softmax}(QK^\top/\sqrt{d_k})V
$$

This is a teaching formulation; see the original paper for the complete notation and assumptions.

## Worked example

For q=(1,0), keys (1,0) and (0,1), the logits are 0.707 and 0; the weights are approximately 0.67 and 0.33.

## Proposed Python experiment

Compare attention weights with and without scaling; test a causal mask.

## Findings and limitations

Quadratic dense attention cost in sequence length; attention weights alone are not explanations. Consult the paper's experimental tables for dataset-specific findings; the worked example above is illustrative rather than reproduced data.

## Investment research application

Use this technique in a synthetic financial research pipeline; measure evidence accuracy, computational cost and failure modes before applying it to real decisions. For the integrated design see [applications](../applications.md).

## Related research

- [LoRA: Low-Rank Adaptation of Large Language Models](lora.md)
- [Efficient Memory Management for Large Language Model Serving with PagedAttention](pagedattention.md)
- [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks](rag.md)

## Review questions

1. What problem does the method solve, and what problem does it not solve?
2. Explain the mathematical formulation and identify its assumptions.
3. Design a baseline, metric and controlled experiment for the proposed lab.

## Reference

Vaswani et al. (2017). *Attention Is All You Need*. [arXiv:1706.03762](https://arxiv.org/abs/1706.03762).
