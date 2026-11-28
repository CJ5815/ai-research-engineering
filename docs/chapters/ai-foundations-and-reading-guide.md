# AI Foundations and Reading Guide

Follow the [20-week syllabus](../curriculum.md). Use Russell and Norvig’s *Artificial Intelligence: A Modern Approach*, **third edition**, for search, knowledge representation, inference, and decision-making. Use modern texts and the existing [paper guides](../papers/index.md) for neural networks, LLMs, agents, and evaluation. Section numbers below refer to the third edition. [AIMA contents](https://aima.cs.berkeley.edu/3rd-ed/contents.html)

Each week assigns up to 60 minutes of reading. The minutes below are planning estimates for excerpts and notes. Optional readings can fill the eighth hour or serve as later references. Start with the weekly question, sketch a derivation, and apply it to the notebook’s baseline before reading further.

## Weeks 1–5 · Model foundations

| Week | Required reading | Optional depth | Derivation and practical check |
|---|---|---|---|
| [1](../weeks/week-01.md) · Perceptrons | Nielsen on perceptrons and sigmoid neurons, 60 min. | AIMA §§18.6.3–18.6.4, Rosenblatt’s introduction. | Trace affine scores and the logistic gradient. Explain the XOR representation limit and test threshold behavior. |
| [2](../weeks/week-02.md) · Backpropagation | Prince on loss and computing gradients, 40 min. AIMA §§18.4 and 18.7, 20 min. | AIMA Chs. 19–20 for learning with prior knowledge and probabilistic models. | Derive every layer gradient. Check NumPy against central differences and compare a nonlinear network with a linear review rule. |
| 3 · Tokenization | Raschka Ch. 2 text processing excerpts, 40 min. AIMA §22.1 on n-grams, 20 min. | AIMA Ch. 23 for grammars and historical NLP. | Count estimates for a bigram and trace a byte-pair merge. Test round trips and inspect numeric tokens. |
| 4 · Attention | Transformer paper on scaled dot-product attention, 30 min. Raschka Ch. 3, 30 min. | Original attention material in the paper catalog. | Derive the score matrix, softmax axes, and mask. Reuse the [attention lab](../labs/02_attention_from_scratch.md). |
| 5 · Decoder architecture | Transformer architecture overview, 25 min. Raschka Ch. 4, 35 min. | Review encoder–decoder differences and positional alternatives. | Trace residual, head, and projection shapes in the [decoder lab](../labs/03_transformer_architecture.md). Verify that a future-token change cannot affect earlier logits. |

Use [Prince’s book and notebooks](https://udlbook.github.io/udlbook/) for chain-rule practice, [Raschka’s companion code](https://github.com/rasbt/LLMs-from-scratch) for model implementation, and the [Transformer guide](../papers/transformer.md) for research context.

## Weeks 6–10 · Language models and evidence

| Week | Required reading | Optional depth | Derivation and practical check |
|---|---|---|---|
| 6 · Language modeling and decoding | Raschka Ch. 5 selected sections, 35 min. Huyen Ch. 2 sampling excerpt, 25 min. | Compare AIMA §22.1 model evaluation with a neural decoder. | Derive negative log-likelihood and perplexity. Compare greedy and stochastic decoding on fixed logits. |
| 7 · Prompts and structured outputs | Huyen Ch. 2 structured outputs and Ch. 5 examples, 40 min. [GPT-3](https://arxiv.org/abs/2005.14165) setup and example tasks, 20 min. | AIMA §22.4 for historical extraction methods. | Compute coverage and field accuracy. Compare zero- and few-shot extraction of units, values, and dates from synthetic earnings text. |
| 8 · Adaptation and alignment | LoRA method excerpt, 40 min. [InstructGPT](https://arxiv.org/abs/2203.02155) post-training overview, 20 min. | [DPO](https://arxiv.org/abs/2305.18290) or [QLoRA](https://arxiv.org/abs/2305.14314). | Derive low-rank adapter dimensions. Compare approximation error and trainable parameter counts at fixed ranks. |
| 9 · Embeddings and retrieval | AIMA §22.3 scoring and evaluation, 20 min. Huyen Ch. 6 retrieval algorithms, 40 min. | Hybrid retrieval and approximate indexing. | Derive cosine scores and calculate recall@k and reciprocal rank. Test sparse and dense rankers on the same labeled passage set. |
| 10 · RAG | RAG method excerpt, 35 min. Huyen Ch. 6 architecture and evaluation excerpt, 25 min. | Self-RAG and FinQA for financial arithmetic cases. | Calculate a retrieval-conditioned mixture and compare it with the implemented pipeline. Score retrieval, answer accuracy, and claim support separately. |

Use [Huyen’s table of contents](https://github.com/chiphuyen/aie-book/blob/main/ToC.md), the [LoRA guide](../papers/lora.md), the [RAG guide](../papers/rag.md), and optional [Self-RAG](https://arxiv.org/abs/2310.11511) and [FinQA](https://arxiv.org/abs/2109.00122).

## Weeks 11–15 · Reasoning, decisions, and tools

| Week | Required reading | Optional depth | Derivation and practical check |
|---|---|---|---|
| 11 · Context and memory | Lost in the Middle, 40 min. Huyen Ch. 6 memory excerpt, 20 min. | AIMA Ch. 15 for temporal beliefs and the MemDelta preprint for confounds. | Use paired differences to test evidence position under a fixed prompt budget. Check source freshness and abstention. |
| 12 · Knowledge representation | AIMA §§12.1–12.2 and 12.5 excerpts, 30 min. GraphRAG pipeline excerpt, 30 min. | AIMA §§7.4–7.5 for chaining and Chs. 8–9 for first-order logic. | Trace graph relations and one rule. Compare issuer–supplier graph queries with passage retrieval. |
| 13 · Search and planning | AIMA §§3.4–3.5, 30 min. §§10.1–10.2 and §11.3 excerpts, 20 min. Chain-of-Thought example, 10 min. | AIMA Ch. 4 for nondeterministic actions and partial observations. Tree of Thoughts for a model-guided search example. | Trace path cost and A* priorities. Run a search baseline and validate proposed plan steps and financial calculations. |
| 14 · Forecasting and decisions | AIMA §§13.4–13.5, 25 min. Ch. 16 utility excerpt, 20 min. Tversky and Kahneman on anchoring, 15 min. | AIMA Chs. 14–15 on graphical and temporal inference. *Algorithms for Decision Making* for utility and information value. | Derive posterior odds and evaluate utility and Brier score. Compare a base-rate forecast with an updater and simulate exposure to an anchor. |
| 15 · Tools and agents | AIMA §§2.1–2.4 selected excerpts, 25 min. ReAct method and one trace, 35 min. | AIMA Chs. 5–6 on strategic and constrained actions. | Define states, legal actions, and termination. Compare a fixed workflow and a bounded agent using the same numerical tool. |

See [Lost in the Middle](../papers/lost-middle.md), [GraphRAG](../papers/graphrag.md), [Chain-of-Thought](../papers/cot.md), [ReAct](../papers/react.md), [Algorithms for Decision Making](https://algorithmsbook.com/), [Tversky and Kahneman](https://doi.org/10.1126/science.185.4157.1124), and the optional [MemDelta preprint](https://arxiv.org/abs/2606.29914).

## Weeks 16–20 · Harnesses, systems, and evidence

| Week | Required reading | Optional depth | Derivation and practical check |
|---|---|---|---|
| 16 · Feedback and RL | AIMA §§17.1–17.2 and Ch. 21 exploration excerpts, 30 min. Sutton–Barto on bandits, 15 min. Reflexion method, 15 min. | AIMA §17.4 on partially observable decisions and Ch. 21 on temporal differences. | Trace a Bellman backup and run a scaffolded bandit comparison. Add state, checkpoints, retry limits, and a verification step to the research harness. |
| 17 · Inference systems | PagedAttention overview, 35 min. Huyen Ch. 9 metrics excerpt, 25 min. | FlashAttention for attention execution. | Derive cache bytes and compare cached and uncached decoding for output agreement, latency, and throughput. |
| 18 · Evaluation and safety | Huyen Ch. 4 evaluation design, 35 min. τ²-Bench on evaluation conditions, 25 min. | AIMA Chs. 26–27 on historical limitations. | Define paired differences and failure rates. Freeze a chronological holdout and check cutoffs, cited evidence, units, abstention, and termination. |
| 19 · Capstone integration | Revisit the planning representation in AIMA Chs. 10–11, 20 min, and selected RAG and ReAct methods, 40 min. | Optional transfer case on a second synthetic sector. | Rehearse the fixed and agentic workflows on development cases. Check costs, traces, and reproducibility. |
| 20 · Held-out evaluation | Review the frozen rubric, experiment protocol, and selected Huyen evaluation notes, 60 min. | AIMA Chs. 24–25 as background for a future perception or robotics study. | Run the [capstone comparison](../capstone/index.md). Report paired evidence and limitations in a technical note and an executive briefing. |

See [Sutton and Barto](https://mitpress.mit.edu/9780262039246/reinforcement-learning/), [Reflexion](https://arxiv.org/abs/2303.11366), [PagedAttention](../papers/pagedattention.md), and [τ²-Bench](https://arxiv.org/abs/2506.07982).

## Research questions to carry forward

- **Anchoring:** Vary the order of a base rate, analyst estimate, and conflicting evidence. Compare forecast revisions and Brier scores with the same information on every case. Treat a simulation as a test of the protocol before studying human analysts.
- **Verification:** Compare the same workflow with and without its verifier. Hold the model, cases, evidence, and tool limits fixed. Measure unsupported claims, arithmetic errors, abstention, and latency.
- **Value of information:** Compare a fixed research budget with a stopping policy that estimates the value of one more observation. State the assumptions that would change the result and present the trade-off as an executive decision memo.

Use timestamped synthetic or authorized data. Record information cutoffs, splits, baselines, configurations, seeds, and uncertainty. Start with [Week 2’s experiment](../experiments/week-02.md) for the distinction between a controlled teaching case and real investment evidence.
