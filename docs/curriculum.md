# 20-week curriculum

Build from NumPy and neural networks to an evidence-grounded investment research system. Start with [Week 1](weeks/week-01.md), or choose a ready lesson below. Each row links to its assigned readings in the [AI Foundations and Reading Guide](chapters/ai-foundations-and-reading-guide.md).

## Weekly rhythm

Budget 6–8 hours per week, with 140 hours across the course at the seven-hour pace. Prepare, read and derive, implement, experiment, assess, and record evidence.

| Activity | Minutes |
|---|---:|
| Theory and mathematics | 90 |
| Assigned reading | 60 |
| Core lab | 120 |
| Experiment | 60 |
| Problem solving and assessment | 60 |
| Research notes | 30 |

For six hours, shorten the reading and experiment to 30 minutes each. Use the eighth hour for optional material. **Ready** means the lesson and its learning materials are available. **Planned** weeks have reading and lab targets that can be used for preview.

## Weeks 1–5 · Model foundations

Develop the numerical tools to train a small network and trace a causal decoder.

| Week and topic | Core work | Reading | Readiness |
|---|---|---|---|
| 1 · [Mathematical foundations and perceptrons](weeks/week-01.md) | Implement a NumPy perceptron and explain the AND–XOR comparison | [Week 1](chapters/ai-foundations-and-reading-guide.md#week-01-reading) | Ready |
| 2 · [Neural networks and backpropagation](weeks/week-02.md) | Check manual gradients and compare a NumPy network with a linear baseline. Check CPU PyTorch parity if available. | [Week 2](chapters/ai-foundations-and-reading-guide.md#week-02-reading) | Ready |
| 3 · NLP, tokenization, and embeddings | Build a toy tokenizer and compare text representations | [Week 3](chapters/ai-foundations-and-reading-guide.md#week-03-reading) | Planned |
| 4 · Attention from first principles | Hand-trace and implement scaled dot-product attention with masking checks | [Week 4](chapters/ai-foundations-and-reading-guide.md#week-04-reading) | Planned |
| 5 · Transformer architectures | Trace dimensions and verify causal invariance in a tiny decoder | [Week 5](chapters/ai-foundations-and-reading-guide.md#week-05-reading) | Planned |

[Week 5 checkpoint evidence](assessments/index.md#checkpoint-05)

## Weeks 6–10 · Language models and evidence

Connect language models to structured outputs, retrieval, and cited evidence.

| Week and topic | Core work | Reading | Readiness |
|---|---|---|---|
| 6 · Language modeling and decoding | Calculate next-token loss and compare decoding settings | [Week 6](chapters/ai-foundations-and-reading-guide.md#week-06-reading) | Planned |
| 7 · Prompting, APIs, and structured outputs | Validate an extractor for synthetic financial text | [Week 7](chapters/ai-foundations-and-reading-guide.md#week-07-reading) | Planned |
| 8 · Training, adaptation, and alignment | Compare dense and low-rank updates | [Week 8](chapters/ai-foundations-and-reading-guide.md#week-08-reading) | Planned |
| 9 · Embeddings and retrieval | Compare sparse and dense search on labeled passages | [Week 9](chapters/ai-foundations-and-reading-guide.md#week-09-reading) | Planned |
| 10 · Retrieval-augmented generation | Produce cited document answers and diagnose retrieval errors | [Week 10](chapters/ai-foundations-and-reading-guide.md#week-10-reading) | Planned |

[Week 10 checkpoint evidence](assessments/index.md#checkpoint-10)

## Weeks 11–15 · Reasoning, decisions, and tools

Use classical AI to reason about context, search, uncertainty, and tool actions.

| Week and topic | Core work | Reading | Readiness |
|---|---|---|---|
| 11 · Context engineering and memory | Run a controlled evidence-position experiment | [Week 11](chapters/ai-foundations-and-reading-guide.md#week-11-reading) | Planned |
| 12 · Knowledge graphs and GraphRAG | Compare passage and graph retrieval on issuer–supplier questions | [Week 12](chapters/ai-foundations-and-reading-guide.md#week-12-reading) | Planned |
| 13 · Reasoning, planning, and verification | Implement a search baseline and verify proposed plans and numerical answers | [Week 13](chapters/ai-foundations-and-reading-guide.md#week-13-reading) | Planned |
| 14 · Forecasting and behavioral decisions | Update Bayesian forecasts, calculate expected utility, and test sensitivity to an anchor | [Week 14](chapters/ai-foundations-and-reading-guide.md#week-14-reading) | Planned |
| 15 · ReAct, tools, and agents | Compare a bounded tool-enabled agent with a fixed workflow | [Week 15](chapters/ai-foundations-and-reading-guide.md#week-15-reading) | Planned |

[Week 15 checkpoint evidence](assessments/index.md#checkpoint-15)

## Weeks 16–20 · Harnesses, systems, and evaluation

Build an observable workflow and evaluate it on held-out investment research cases.

| Week and topic | Core work | Reading | Readiness |
|---|---|---|---|
| 16 · Loops and harness engineering | Add checkpointing and bounded verification, then distinguish workflow feedback from policy learning | [Week 16](chapters/ai-foundations-and-reading-guide.md#week-16-reading) | Planned |
| 17 · Inference and systems | Test cached decoding and measure latency and throughput | [Week 17](chapters/ai-foundations-and-reading-guide.md#week-17-reading) | Planned |
| 18 · Evaluation, safety, and reliability | Document failure modes and freeze the held-out evaluation | [Week 18](chapters/ai-foundations-and-reading-guide.md#week-18-reading) | Planned |
| 19 · Capstone integration | Assemble and rehearse a reproducible workflow on development cases | [Week 19](chapters/ai-foundations-and-reading-guide.md#week-19-reading) | Planned |
| 20 · Capstone evaluation and communication | Run the frozen comparison and present a technical and executive briefing | [Week 20](chapters/ai-foundations-and-reading-guide.md#week-20-reading) | Planned |

[Week 20 checkpoint evidence](assessments/index.md#checkpoint-20)

[Capstone design](capstone/index.md) · [Original eight-week reading path](legacy-curriculum.md)
