---
hide:
  - navigation
  - toc
---

# Paper relationships

How the 24 papers in the [PDF library](papers/index.md#pdf-library) connect. Papers are placed by year (columns) and research area (rows). Click a paper to highlight its connections and open its guide or PDF.

<div id="paper-graph" aria-label="Interactive paper relationship graph"></div>

!!! note "How to read the edges"
    **Solid arrows** mean the later paper builds directly on the earlier one. **Dashed lines** mean the papers are closely related: they are compared, complementary or share an idea. This map shows the main conceptual lineage only, not every citation between the papers.

## All relationships

| From | To | Type | Relationship |
|---|---|---|---|
| [Bahdanau attn.](papers/1409.0473v7.pdf) (2014) | [Transformer](papers/transformer.md) (2017) | Builds on | Generalises attention from an add-on for RNNs to the whole architecture. |
| [Transformer](papers/transformer.md) (2017) | [BERT](papers/1810.04805v2.pdf) (2018) | Builds on | Uses the Transformer encoder for bidirectional pretraining. |
| [Transformer](papers/transformer.md) (2017) | [GPT-3](papers/2005.14165v4.pdf) (2020) | Builds on | Scales a decoder-only Transformer to 175B parameters. |
| [Scaling laws](papers/2001.08361v1.pdf) (2020) | [GPT-3](papers/2005.14165v4.pdf) (2020) | Builds on | Power-law scaling results motivated training a much larger model. |
| [BERT](papers/1810.04805v2.pdf) (2018) | [RAG](papers/rag.md) (2020) | Builds on | RAG's dense retriever (DPR) encodes queries and documents with BERT. |
| [GPT-3](papers/2005.14165v4.pdf) (2020) | [InstructGPT](papers/2203.02155v1.pdf) (2022) | Builds on | Fine-tunes GPT-3 with human demonstrations and RLHF. |
| [InstructGPT](papers/2203.02155v1.pdf) (2022) | [DPO](papers/2305.18290v3.pdf) (2023) | Builds on | Replaces the RLHF reward model and PPO with a direct preference loss. |
| [InstructGPT](papers/2203.02155v1.pdf) (2022) | [DeepSeek-R1](papers/2501.12948v2.pdf) (2025) | Builds on | Extends RL post-training from human preferences to verifiable reasoning rewards. |
| [Transformer](papers/transformer.md) (2017) | [LoRA](papers/lora.md) (2021) | Builds on | Adds low-rank updates to the attention projection matrices. |
| [GPT-3](papers/2005.14165v4.pdf) (2020) | [LoRA](papers/lora.md) (2021) | Builds on | Motivated by the cost of fully fine-tuning GPT-3 175B. |
| [LoRA](papers/lora.md) (2021) | [QLoRA](papers/2305.14314v1.pdf) (2023) | Builds on | Trains LoRA adapters on top of a 4-bit quantised base model. |
| [Transformer](papers/transformer.md) (2017) | [FlashAttention](papers/2205.14135v2.pdf) (2022) | Builds on | Computes the same exact attention with IO-aware tiling. |
| [Transformer](papers/transformer.md) (2017) | [PagedAttention](papers/pagedattention.md) (2023) | Builds on | Manages the key/value cache produced by autoregressive Transformer decoding. |
| [FlashAttention](papers/2205.14135v2.pdf) (2022) | [PagedAttention](papers/pagedattention.md) (2023) | Related | Complementary: faster attention kernels versus better KV-cache memory management. |
| [GPT-3](papers/2005.14165v4.pdf) (2020) | [Chain-of-Thought](papers/cot.md) (2022) | Builds on | Extends few-shot prompting with worked reasoning steps. |
| [Chain-of-Thought](papers/cot.md) (2022) | [Self-Consistency](papers/2203.11171v4.pdf) (2022) | Builds on | Samples many chains of thought and votes on the answer. |
| [Chain-of-Thought](papers/cot.md) (2022) | [Tree of Thoughts](papers/2305.10601v2.pdf) (2023) | Builds on | Generalises a single reasoning chain into a search tree. |
| [Self-Consistency](papers/2203.11171v4.pdf) (2022) | [Tree of Thoughts](papers/2305.10601v2.pdf) (2023) | Related | ToT compares against self-consistency as a sampling baseline. |
| [Chain-of-Thought](papers/cot.md) (2022) | [DeepSeek-R1](papers/2501.12948v2.pdf) (2025) | Builds on | Learns long chains of thought through RL instead of prompting. |
| [Chain-of-Thought](papers/cot.md) (2022) | [ReAct](papers/react.md) (2022) | Builds on | Interleaves chain-of-thought traces with actions. |
| [ReAct](papers/react.md) (2022) | [Reflexion](papers/2303.11366v4.pdf) (2023) | Builds on | Adds verbal self-reflection between ReAct-style attempts. |
| [ReAct](papers/react.md) (2022) | [Toolformer](papers/2302.04761v1.pdf) (2023) | Related | Prompted tool use versus self-supervised learned tool use. |
| [RAG](papers/rag.md) (2020) | [Self-RAG](papers/2310.11511v1.pdf) (2023) | Builds on | Makes retrieval adaptive and adds self-critique of generations. |
| [Reflexion](papers/2303.11366v4.pdf) (2023) | [Self-RAG](papers/2310.11511v1.pdf) (2023) | Related | Both use model-generated reflection to improve outputs. |
| [RAG](papers/rag.md) (2020) | [GraphRAG](papers/graphrag.md) (2024) | Builds on | Retrieves over an entity graph to answer global questions. |
| [RAG](papers/rag.md) (2020) | [MemGPT](papers/2310.08560v2.pdf) (2023) | Builds on | Retrieves from archival memory as part of a memory hierarchy. |
| [PagedAttention](papers/pagedattention.md) (2023) | [MemGPT](papers/2310.08560v2.pdf) (2023) | Related | Both borrow OS virtual-memory paging: one for GPU KV cache, one for prompt context. |
| [RAG](papers/rag.md) (2020) | [Lost in the Middle](papers/lost-middle.md) (2023) | Related | Shows that where retrieved documents sit in the prompt changes accuracy. |
| [Lost in the Middle](papers/lost-middle.md) (2023) | [MemGPT](papers/2310.08560v2.pdf) (2023) | Related | Limits of long context motivate explicit memory management. |
| [RAG](papers/rag.md) (2020) | [Ragas](papers/2309.15217v2.pdf) (2023) | Builds on | Provides metrics to evaluate RAG pipelines. |

## Papers by area

- **Architecture & scaling:** [Bahdanau attn.](papers/1409.0473v7.pdf) (2014), [Transformer](papers/transformer.md) (2017), [BERT](papers/1810.04805v2.pdf) (2018), [Scaling laws](papers/2001.08361v1.pdf) (2020), [GPT-3](papers/2005.14165v4.pdf) (2020)
- **Training & alignment:** [InstructGPT](papers/2203.02155v1.pdf) (2022), [DPO](papers/2305.18290v3.pdf) (2023)
- **Efficiency & serving:** [LoRA](papers/lora.md) (2021), [FlashAttention](papers/2205.14135v2.pdf) (2022), [QLoRA](papers/2305.14314v1.pdf) (2023), [PagedAttention](papers/pagedattention.md) (2023)
- **Reasoning:** [Chain-of-Thought](papers/cot.md) (2022), [Self-Consistency](papers/2203.11171v4.pdf) (2022), [Tree of Thoughts](papers/2305.10601v2.pdf) (2023), [DeepSeek-R1](papers/2501.12948v2.pdf) (2025)
- **Agents & tools:** [ReAct](papers/react.md) (2022), [Toolformer](papers/2302.04761v1.pdf) (2023), [Reflexion](papers/2303.11366v4.pdf) (2023)
- **Retrieval & memory:** [RAG](papers/rag.md) (2020), [Self-RAG](papers/2310.11511v1.pdf) (2023), [MemGPT](papers/2310.08560v2.pdf) (2023), [GraphRAG](papers/graphrag.md) (2024)
- **Context & evaluation:** [Lost in the Middle](papers/lost-middle.md) (2023), [Ragas](papers/2309.15217v2.pdf) (2023)
