# Agentic investment research — capstone design

Use only public or synthetic data in this repository. Keep proprietary analyst and portfolio data out of Git history and GitHub Pages.

```mermaid
flowchart TD
 D[Public filings and synthetic analyst views] --> V[Vector index]
 D --> G[Knowledge graph]
 V --> C[Context manager]
 G --> C
 C --> A[Research agent]
 A --> T[Validated Python and SQL tools]
 T --> E[Evidence and numerical verification]
 E -->|Revise within budget| A
 E --> O[Research report]
```

Use point-in-time documents to avoid look-ahead bias. Store source, timestamp, thesis, catalyst, risk and horizon. Compare vector RAG, graph retrieval and hybrid retrieval. Evaluate source coverage, numerical accuracy, calibrated forecasts (Brier score), and cost. Start with deterministic tools and human review; no autonomous trading. LoRA and production inference are optional later steps.
