# AI Research & Engineering

A MkDocs learning website and local Python laboratory. Eight foundational paper guides, six introductory chapters, interactive research map, curriculum and three executable NumPy notebooks.

## Mac / VS Code quick start

Open the extracted `ai-research-engineering` folder in VS Code. In its terminal:

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

## Publish to GitHub Pages

1. Create a new EMPTY repository named `ai-research-engineering` at https://github.com/new (do not initialize README or license). Public Pages hosting makes your notes public; never include confidential data.
2. In the extracted folder, run the following, replacing YOUR_USERNAME:

```bash
git init -b main
git add .
git commit -m "Initial AI research learning hub"
git remote add origin https://github.com/YOUR_USERNAME/ai-research-engineering.git
git push -u origin main
```

3. In GitHub repository Settings > Pages, set Source to GitHub Actions. In Actions, select Deploy documentation and Run workflow if the initial push did not deploy.
4. Open the URL shown in the Pages settings, usually `https://YOUR_USERNAME.github.io/ai-research-engineering/`.
5. Edit Markdown files in `docs/`; commit and push to publish changes. The GitHub workflow builds strictly and deploys automatically.

If Git requests authentication, use GitHub CLI or a supported credential manager; do not put credentials in files. If port 8000 is busy run `mkdocs serve -a 127.0.0.1:8001`.

## Scope and limitations

The paper guides are original study summaries, not full paper reproductions. Copies of 25 paper PDFs are hosted in `docs/papers/` alongside links to the primary arXiv sources; check each paper's license before reuse. The three notebooks use small synthetic examples; the Transformer notebook implements a forward pass rather than training an LLM. Later RAG, GraphRAG, LoRA and serving labs are proposed experiments, not completed implementations. Diagrams represent conceptual relationships, not measured data or citation networks. GitHub deployment requires your account. No license has been selected; choose one before accepting external contributions.
