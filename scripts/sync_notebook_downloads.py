"""Synchronize MkDocs notebook downloads with canonical notebooks."""

import argparse
from pathlib import Path
from shutil import copyfile


# Keep the original GitHub Pages download URLs after renaming the source notebooks.
LEGACY_DOWNLOADS = {
    "01_perceptron_and_neural_networks.ipynb": "week-01_perceptron_warmup.ipynb",
    "02_attention_from_scratch.ipynb": "week-04_attention_from_scratch.ipynb",
    "03_transformer_architecture.ipynb": "week-05_transformer_architecture.ipynb",
}


def main() -> int:
    """Write download copies, or report missing and outdated copies in check mode."""
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true", help="Check without writing files")
    args = parser.parse_args()

    root = Path(__file__).resolve().parents[1]
    source_dir = root / "notebooks"
    download_dir = root / "docs" / "downloads"
    sources = {path.name: path for path in source_dir.glob("*.ipynb")}
    sources.update({old: source_dir / new for old, new in LEGACY_DOWNLOADS.items()})
    errors = []
    for name, source in sorted(sources.items()):
        if not source.is_file():
            errors.append(f"Notebook source missing: {source.name}")
            continue
        download = download_dir / name
        if download.is_file() and source.read_bytes() == download.read_bytes():
            continue
        if args.check:
            errors.append(f"Notebook download missing or outdated: {name}")
        else:
            download_dir.mkdir(parents=True, exist_ok=True)
            copyfile(source, download)

    for error in errors:
        print(error)
    return int(bool(errors))


if __name__ == "__main__":
    raise SystemExit(main())
