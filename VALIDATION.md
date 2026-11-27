# Validation

## 2026-11-26 · Course infrastructure and Week 1

- **MkDocs:** Strict build passed in the existing Python 3.11 Conda environment. Inspected 35 generated HTML pages and checked 1,708 internal links and fragments. Verified search indexing, math and diagram markup, map hooks, and the original 25 PDF assets. JavaScript syntax checks passed for the maps and MathJax setup.
- **Notebooks:** All four passed schema validation and code execution in fresh Python processes. The Week 1 notebook also ran in a fresh in-process Jupyter kernel, and its two plots rendered with a headless backend. Both standalone lesson code samples ran.
- **Unit tests:** `python -m pytest -q -p no:cacheprovider` passed (one test).
- **Downloads:** All four downloads match their source bytes. A temporary fixture confirmed the sync script rejects missing copies in check mode and creates the expected copy in sync mode.
- **Browser and hosting:** The in-app browser was unavailable. The checks above cover generated HTML and assets. Interactive rendering and live Pages deployment remain unverified. The build-only pull-request workflow has yet to run on GitHub.
