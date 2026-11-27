# Chain-of-Thought Prompting Elicits Reasoning in Large Language Models

**Wei et al. · 2022 (initial preprint) · Reasoning**

[Original paper](https://arxiv.org/abs/2201.11903) · [PDF](https://arxiv.org/pdf/2201.11903)

## Research question

Use worked intermediate steps to improve multistep task performance.

## Method and motivation

Few-shot worked examples can elicit intermediate reasoning, particularly in sufficiently capable models. Explanations are not necessarily faithful to underlying computations. Evaluate final answers independently.

## Mathematical formulation

$$
p(y,r\mid x)=p(r\mid x)p(y\mid x,r)
$$

This is a teaching formulation; see the original paper for the complete notation and assumptions.

## Worked example

A 20% loss followed by a 20% gain gives 100 × 0.8 × 1.2 = 96, a 4% loss.

## Proposed Python experiment

Compare direct and worked-example prompts on a fixed set of arithmetic problems; score exact answers.

## Findings and limitations

Reasoning text may be incorrect or unfaithful; benefits depend on model and task. Consult the paper's experimental tables for dataset-specific findings; the worked example above is illustrative rather than reproduced data.

## Investment research application

Use this technique in a synthetic financial research pipeline; measure evidence accuracy, computational cost and failure modes before applying it to real decisions. For the integrated design see [applications](../applications.md).

## Related research

- [ReAct: Synergizing Reasoning and Acting in Language Models](react.md)
- [Lost in the Middle: How Language Models Use Long Contexts](lost-middle.md)

## Review questions

1. What problem does the method solve, and what problem does it not solve?
2. Explain the mathematical formulation and identify its assumptions.
3. Design a baseline, metric and controlled experiment for the proposed lab.

## Reference

Wei et al. (2022). *Chain-of-Thought Prompting Elicits Reasoning in Large Language Models*. [arXiv:2201.11903](https://arxiv.org/abs/2201.11903).
