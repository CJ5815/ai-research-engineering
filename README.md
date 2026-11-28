# AI Research & Engineering

A MkDocs learning website and local Python laboratory. Start with the [20-week curriculum](docs/curriculum.md) and its [AI Foundations and Reading Guide](docs/chapters/ai-foundations-and-reading-guide.md). [Week 1](docs/weeks/week-01.md) covers perceptrons and [Week 2](docs/weeks/week-02.md) builds a small neural network. Browse the eight foundational paper guides, six introductory chapters, and interactive research maps.

## Mac / VS Code quick start

Open the `ai-research-engineering` folder in VS Code. Activate the `ai-research` Conda environment if it already exists. To create it for a first-time setup:

```bash
conda env create -f environment.yml
conda activate ai-research
mkdocs serve
```

Open http://127.0.0.1:8000. If using Python instead of Conda:

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt -r requirements-labs.txt
mkdocs serve
```

Run `python -m notebook` from the project root and open `notebooks/`. Run `python -m pytest` for source tests. Run `mkdocs build --strict` to validate the website.

## Validate and publish

Edit the canonical notebooks under `notebooks/` and use `python scripts/sync_notebook_downloads.py` to update their Pages downloads. Run the same command with `--check` to check parity. The pull request validation workflow checks the downloads and runs a strict MkDocs build.

The existing remote is `CJ5815/ai-research-engineering`. With GitHub Pages set to GitHub Actions, the deploy workflow builds and publishes on pushes to `main` or manual dispatch. Confirm publishing approval before using either route. The configured site is [AI Research & Engineering](https://cj5815.github.io/ai-research-engineering/). Keep private notes and firm data out of the repository and its history.

## Scope and limitations

The paper guides are original study summaries, not full paper reproductions. Copies of 25 paper PDFs are hosted in `docs/papers/` alongside links to the primary arXiv sources; check each paper's license before reuse. The foundational notebooks use small synthetic examples; the Transformer notebook implements a forward pass rather than training an LLM. Later RAG, GraphRAG, LoRA and serving labs are proposed experiments, not completed implementations. Diagrams represent conceptual relationships, not measured data or citation networks. GitHub deployment requires your account. No license has been selected; choose one before accepting external contributions.
