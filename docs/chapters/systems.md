# Inference and systems engineering

Prefill processes input tokens; decode generates new tokens sequentially. KV caching avoids recomputing past keys and values. PagedAttention reduces allocation waste. Track latency, throughput, peak memory and answer quality separately. See [PagedAttention](../papers/pagedattention.md).

## Study exercise

Derive the central equation or algorithm, implement a minimal baseline, and record a test that could falsify your hypothesis.
