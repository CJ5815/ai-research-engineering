# Efficient Memory Management for Large Language Model Serving with PagedAttention

**Kwon et al. · 2023 (initial preprint) · Infrastructure**

[Original paper](https://arxiv.org/abs/2309.06180) · [PDF](https://arxiv.org/pdf/2309.06180)

## Research question

Manage KV cache using noncontiguous blocks to reduce memory waste.

## Method and motivation

Autoregressive inference caches key and value tensors from previous tokens. PagedAttention maps logical blocks to physical blocks and enables efficient allocation and sharing. The paper introduces vLLM and reports 2–4× throughput versus its tested baselines at comparable latency.

## Mathematical formulation

$$
M_{KV}=2 L T H_{KV} d_h b
$$

This is a teaching formulation; see the original paper for the complete notation and assumptions.

## Worked example

For 32 layers, 2048 tokens, 8 KV heads, head dimension 128 and 2 bytes per element, the cache is 256 MiB for one sequence, excluding overhead.

## Proposed Python experiment

Simulate variable-length requests and compare fixed reservation with block allocation; measure waste.

## Findings and limitations

Does not improve semantic reasoning; performance depends on workload and hardware. Consult the paper's experimental tables for dataset-specific findings; the worked example above is illustrative rather than reproduced data.

## Investment research application

Use this technique in a synthetic financial research pipeline; measure evidence accuracy, computational cost and failure modes before applying it to real decisions. For the integrated design see [applications](../applications.md).

## Related research

- [Attention Is All You Need](transformer.md)
- [Lost in the Middle: How Language Models Use Long Contexts](lost-middle.md)

## Review questions

1. What problem does the method solve, and what problem does it not solve?
2. Explain the mathematical formulation and identify its assumptions.
3. Design a baseline, metric and controlled experiment for the proposed lab.

## Reference

Kwon et al. (2023). *Efficient Memory Management for Large Language Model Serving with PagedAttention*. [arXiv:2309.06180](https://arxiv.org/abs/2309.06180).
