"""Synchronize MkDocs notebook downloads with canonical notebooks."""

import argparse
from pathlib import Path
from shutil import copyfile


def main() -> int:
    """Write download copies, or report missing and outdated copies in check mode."""
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true", help="Check without writing files")
    args = parser.parse_args()

    root = Path(__file__).resolve().parents[1]
    download_dir = root / "docs" / "downloads"
    out_of_sync = []
    for source in sorted((root / "notebooks").glob("*.ipynb")):
        download = download_dir / source.name
        if download.is_file() and source.read_bytes() == download.read_bytes():
            continue
        if args.check:
            out_of_sync.append(source.name)
        else:
            download_dir.mkdir(parents=True, exist_ok=True)
            copyfile(source, download)

    for name in out_of_sync:
        print(f"Notebook download missing or outdated: {name}")
    return int(bool(out_of_sync))


if __name__ == "__main__":
    raise SystemExit(main())
