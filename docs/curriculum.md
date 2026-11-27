# Eight-week curriculum

Four one-hour sessions per week: paper reading, mathematical derivation, implementation, experiment and notes.

| Week | Paper | Lab objective |
|---|---|---|
| 1 | [Attention Is All You Need](papers/transformer.md) | For q=(1,0), keys (1,0) and (0,1), the logits are 0.707 and 0; the weights are approximately 0.67 and 0.33. |
| 2 | [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks](papers/rag.md) | If two documents have retrieval probabilities 0.7 and 0.3 and answer likelihoods 0.8 and 0.2, the mixture likelihood is 0.62. |
| 3 | [Lost in the Middle: How Language Models Use Long Contexts](papers/lost-middle.md) | Hold ten passages fixed and place the answer-bearing passage at positions 1, 5 and 10; compare accuracy across randomized questions. |
| 4 | [From Local to Global: A Graph RAG Approach to Query-Focused Summarization](papers/graphrag.md) | Connect firms to suppliers, customers and shared risks; community summaries can expose themes that isolated passage retrieval misses. |
| 5 | [Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](papers/cot.md) | A 20% loss followed by a 20% gain gives 100 × 0.8 × 1.2 = 96, a 4% loss. |
| 6 | [ReAct: Synergizing Reasoning and Acting in Language Models](papers/react.md) | An agent retrieves revenue, calls a calculator to compute growth, checks the source and produces a cited answer. |
| 7 | [LoRA: Low-Rank Adaptation of Large Language Models](papers/lora.md) | A 4096 by 4096 matrix has 16,777,216 parameters; rank 16 uses 131,072 trainable adapter parameters, about 0.78% of the original matrix. |
| 8 | [Efficient Memory Management for Large Language Model Serving with PagedAttention](papers/pagedattention.md) | For 32 layers, 2048 tokens, 8 KV heads, head dimension 128 and 2 bytes per element, the cache is 256 MiB for one sequence, excluding overhead. |