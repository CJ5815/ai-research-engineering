# 20-week curriculum

Build from NumPy and neural networks to a tested, evidence-grounded investment research system. Start with [Week 1](weeks/week-01.md). Use the [AI Foundations and Reading Guide](chapters/ai-foundations-and-reading-guide.md) for textbook excerpts, mathematical prerequisites, and exercises. The table shows the required work in sequence at 6–8 hours per week and 140 hours total at the default pace.

A seven-hour week includes 90 minutes of theory and math, 60 of reading, 120 of lab work, 60 of experiments, 60 of assessment, and 30 of research notes. The six-hour route cuts reading and experiments to 30 minutes each. Use an eighth hour for optional practice.

| Week | Topic | Required deliverable | Status |
|---|---|---|---|
| 1 | [Mathematical foundations and perceptrons](weeks/week-01.md) | Implement a NumPy perceptron and explain the AND–XOR comparison | Ready |
| 2 | [Neural networks and backpropagation](weeks/week-02.md) | Check gradients and compare a NumPy network with a linear baseline and CPU PyTorch autograd | Ready |
| 3 | NLP, tokenization, and embeddings | Build a toy tokenizer and compare text representations | Planned |
| 4 | Attention from first principles | Hand-trace and implement scaled dot-product attention with masking checks | Planned |
| 5 | Transformer architectures | Trace dimensions and verify causal invariance in a tiny decoder | Planned |
| 6 | Language modeling and decoding | Calculate next-token loss and compare decoding settings | Planned |
| 7 | Prompting, APIs, and structured outputs | Validate an extractor for synthetic financial text | Planned |
| 8 | Training, adaptation, and alignment | Compare dense and low-rank updates | Planned |
| 9 | Embeddings and retrieval | Compare sparse and dense search on labeled passages | Planned |
| 10 | Retrieval-augmented generation | Produce cited document answers and diagnose retrieval errors | Planned |
| 11 | Context engineering and memory | Run a controlled evidence-position experiment | Planned |
| 12 | Knowledge graphs and GraphRAG | Compare passage and graph retrieval on issuer–supplier questions | Planned |
| 13 | Reasoning, planning, and verification | Implement a search baseline and verify proposed plans and numerical answers | Planned |
| 14 | Forecasting and behavioral decisions | Update Bayesian forecasts, calculate expected utility, and test sensitivity to an anchor | Planned |
| 15 | ReAct, tools, and agents | Compare a bounded tool-enabled agent with a fixed workflow | Planned |
| 16 | Loops and harness engineering | Add checkpointing and bounded verification, then distinguish workflow feedback from policy learning | Planned |
| 17 | Inference and systems | Test cached decoding and measure latency and throughput | Planned |
| 18 | Evaluation, safety, and reliability | Document failure modes and freeze the held-out evaluation | Planned |
| 19 | Capstone integration | Assemble and rehearse a reproducible workflow on development cases | Planned |
| 20 | Capstone evaluation and communication | Run the frozen comparison and present a technical and executive briefing | Planned |

Weeks 1–5 build the numerical and model foundations. Weeks 6–10 connect models to structured outputs and external evidence. Weeks 11–15 add context, reasoning, decision science, and tools. Weeks 16–20 turn those components into an observable system with a held-out evaluation.

[Assessment rubric](assessments/index.md) · [Capstone design](capstone/index.md) · [Original eight-week reading path](legacy-curriculum.md)
