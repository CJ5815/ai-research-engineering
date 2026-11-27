"""Generate docs/javascripts/paper-graph.js data and docs/paper-relationships.md from one source."""
import json, sys
from pathlib import Path

root = Path(sys.argv[1])

LANES = [
    ("arch", "Architecture & scaling"),
    ("align", "Training & alignment"),
    ("eff", "Efficiency & serving"),
    ("reason", "Reasoning"),
    ("agents", "Agents & tools"),
    ("know", "Retrieval & memory"),
    ("eval", "Context & evaluation"),
]

# id, short label, full title, authors, year, lane, pdf, guide slug or None, one-line description
P = [
    ("bahdanau", "Bahdanau attn.", "Neural Machine Translation by Jointly Learning to Align and Translate", "Bahdanau et al.", 2014, "arch", "1409.0473v7.pdf", None, "Introduces learned soft alignment (attention) over encoder states for translation."),
    ("transformer", "Transformer", "Attention Is All You Need", "Vaswani et al.", 2017, "arch", "1706.03762v7.pdf", "transformer", "Replaces recurrence with stacked self-attention and feedforward layers."),
    ("bert", "BERT", "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding", "Devlin et al.", 2018, "arch", "1810.04805v2.pdf", None, "Encoder-only Transformer pretrained with masked language modelling."),
    ("scaling", "Scaling laws", "Scaling Laws for Neural Language Models", "Kaplan et al.", 2020, "arch", "2001.08361v1.pdf", None, "Loss falls as a power law in parameters, data and compute."),
    ("gpt3", "GPT-3", "Language Models are Few-Shot Learners", "Brown et al.", 2020, "arch", "2005.14165v4.pdf", None, "A 175B decoder-only model that performs tasks from in-context examples."),
    ("instructgpt", "InstructGPT", "Training Language Models to Follow Instructions with Human Feedback", "Ouyang et al.", 2022, "align", "2203.02155v1.pdf", None, "Supervised fine-tuning plus RLHF (reward model + PPO) to follow instructions."),
    ("dpo", "DPO", "Direct Preference Optimization: Your Language Model is Secretly a Reward Model", "Rafailov et al.", 2023, "align", "2305.18290v3.pdf", None, "Optimises preferences directly with a classification-style loss, no reward model or PPO."),
    ("lora", "LoRA", "LoRA: Low-Rank Adaptation of Large Language Models", "Hu et al.", 2021, "eff", "2106.09685v2.pdf", "lora", "Fine-tunes by learning low-rank updates to frozen weights."),
    ("flash", "FlashAttention", "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness", "Dao et al.", 2022, "eff", "2205.14135v2.pdf", None, "Tiles exact attention to minimise GPU memory reads and writes."),
    ("qlora", "QLoRA", "QLoRA: Efficient Finetuning of Quantized LLMs", "Dettmers et al.", 2023, "eff", "2305.14314v1.pdf", None, "LoRA adapters trained on a 4-bit quantised frozen base model."),
    ("paged", "PagedAttention", "Efficient Memory Management for Large Language Model Serving with PagedAttention", "Kwon et al.", 2023, "eff", "2309.06180v1.pdf", "pagedattention", "Stores the KV cache in non-contiguous blocks, like OS virtual memory (vLLM)."),
    ("cot", "Chain-of-Thought", "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models", "Wei et al.", 2022, "reason", "2201.11903v6.pdf", "cot", "Few-shot exemplars with intermediate reasoning steps improve multistep tasks."),
    ("selfcons", "Self-Consistency", "Self-Consistency Improves Chain of Thought Reasoning in Language Models", "Wang et al.", 2022, "reason", "2203.11171v4.pdf", None, "Samples many reasoning chains and takes the majority answer."),
    ("tot", "Tree of Thoughts", "Tree of Thoughts: Deliberate Problem Solving with Large Language Models", "Yao et al.", 2023, "reason", "2305.10601v2.pdf", None, "Searches over a tree of partial reasoning steps with self-evaluation."),
    ("r1", "DeepSeek-R1", "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning", "DeepSeek-AI", 2025, "reason", "2501.12948v2.pdf", None, "Large-scale RL with verifiable rewards trains long chain-of-thought reasoning."),
    ("react", "ReAct", "ReAct: Synergizing Reasoning and Acting in Language Models", "Yao et al.", 2022, "agents", "2210.03629v3.pdf", "react", "Interleaves reasoning traces with tool actions and observations."),
    ("toolformer", "Toolformer", "Toolformer: Language Models Can Teach Themselves to Use Tools", "Schick et al.", 2023, "agents", "2302.04761v1.pdf", None, "Self-supervised learning of when and how to call APIs."),
    ("reflexion", "Reflexion", "Reflexion: Language Agents with Verbal Reinforcement Learning", "Shinn et al.", 2023, "agents", "2303.11366v4.pdf", None, "Agents write verbal self-reflections after failures and retry."),
    ("rag", "RAG", "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks", "Lewis et al.", 2020, "know", "2005.11401v4.pdf", "rag", "Conditions a generator on documents fetched by a dense retriever."),
    ("selfrag", "Self-RAG", "Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection", "Asai et al.", 2023, "know", "2310.11511v1.pdf", None, "Model decides when to retrieve and critiques its own output with reflection tokens."),
    ("memgpt", "MemGPT", "MemGPT: Towards LLMs as Operating Systems", "Packer et al.", 2023, "know", "2310.08560v2.pdf", None, "Hierarchical memory that pages information in and out of a fixed context."),
    ("graphrag", "GraphRAG", "From Local to Global: A GraphRAG Approach to Query-Focused Summarization", "Edge et al.", 2024, "know", "2404.16130v2.pdf", "graphrag", "Entity graph and community summaries answer corpus-wide questions."),
    ("lostmid", "Lost in the Middle", "Lost in the Middle: How Language Models Use Long Contexts", "Liu et al.", 2023, "eval", "2307.03172v3.pdf", "lost-middle", "Models use information at the start and end of long contexts best."),
    ("ragas", "Ragas", "Ragas: Automated Evaluation of Retrieval Augmented Generation", "Es et al.", 2023, "eval", "2309.15217v2.pdf", None, "Reference-free metrics for faithfulness and relevance of RAG systems."),
]

# source, target, kind ("builds" = direct lineage, "related" = comparison or complementary), explanation
E = [
    ("bahdanau", "transformer", "builds", "Generalises attention from an add-on for RNNs to the whole architecture."),
    ("transformer", "bert", "builds", "Uses the Transformer encoder for bidirectional pretraining."),
    ("transformer", "gpt3", "builds", "Scales a decoder-only Transformer to 175B parameters."),
    ("scaling", "gpt3", "builds", "Power-law scaling results motivated training a much larger model."),
    ("bert", "rag", "builds", "RAG's dense retriever (DPR) encodes queries and documents with BERT."),
    ("gpt3", "instructgpt", "builds", "Fine-tunes GPT-3 with human demonstrations and RLHF."),
    ("instructgpt", "dpo", "builds", "Replaces the RLHF reward model and PPO with a direct preference loss."),
    ("instructgpt", "r1", "builds", "Extends RL post-training from human preferences to verifiable reasoning rewards."),
    ("transformer", "lora", "builds", "Adds low-rank updates to the attention projection matrices."),
    ("gpt3", "lora", "builds", "Motivated by the cost of fully fine-tuning GPT-3 175B."),
    ("lora", "qlora", "builds", "Trains LoRA adapters on top of a 4-bit quantised base model."),
    ("transformer", "flash", "builds", "Computes the same exact attention with IO-aware tiling."),
    ("transformer", "paged", "builds", "Manages the key/value cache produced by autoregressive Transformer decoding."),
    ("flash", "paged", "related", "Complementary: faster attention kernels versus better KV-cache memory management."),
    ("gpt3", "cot", "builds", "Extends few-shot prompting with worked reasoning steps."),
    ("cot", "selfcons", "builds", "Samples many chains of thought and votes on the answer."),
    ("cot", "tot", "builds", "Generalises a single reasoning chain into a search tree."),
    ("selfcons", "tot", "related", "ToT compares against self-consistency as a sampling baseline."),
    ("cot", "r1", "builds", "Learns long chains of thought through RL instead of prompting."),
    ("cot", "react", "builds", "Interleaves chain-of-thought traces with actions."),
    ("react", "reflexion", "builds", "Adds verbal self-reflection between ReAct-style attempts."),
    ("react", "toolformer", "related", "Prompted tool use versus self-supervised learned tool use."),
    ("rag", "selfrag", "builds", "Makes retrieval adaptive and adds self-critique of generations."),
    ("reflexion", "selfrag", "related", "Both use model-generated reflection to improve outputs."),
    ("rag", "graphrag", "builds", "Retrieves over an entity graph to answer global questions."),
    ("rag", "memgpt", "builds", "Retrieves from archival memory as part of a memory hierarchy."),
    ("paged", "memgpt", "related", "Both borrow OS virtual-memory paging: one for GPU KV cache, one for prompt context."),
    ("rag", "lostmid", "related", "Shows that where retrieved documents sit in the prompt changes accuracy."),
    ("lostmid", "memgpt", "related", "Limits of long context motivate explicit memory management."),
    ("rag", "ragas", "builds", "Provides metrics to evaluate RAG pipelines."),
]

ids = {p[0] for p in P}
assert all(a in ids and b in ids for a, b, *_ in E)

# Layout: x by year column, y by lane; two nodes sharing a lane/year cell get stacked.
years = sorted({p[4] for p in P})
COLW, LEFT, LANEH, TOP, NODEH = 114, 132, 84, 36, 28
cells = {}
for p in P:
    cells.setdefault((p[5], p[4]), []).append(p[0])
lane_idx = {k: i for i, (k, _) in enumerate(LANES)}
nodes = []
for p in P:
    cell = cells[(p[5], p[4])]
    k = cell.index(p[0])
    off = 0 if len(cell) == 1 else (-19 if k == 0 else 19)
    x = LEFT + years.index(p[4]) * COLW + COLW / 2
    y = TOP + lane_idx[p[5]] * LANEH + LANEH / 2 + off
    nodes.append(dict(id=p[0], short=p[1], title=p[2], authors=p[3], year=p[4], lane=p[5],
                      pdf=p[6], guide=p[7], desc=p[8], x=x, y=y))

data = dict(lanes=[dict(id=k, name=n) for k, n in LANES], years=years,
            geom=dict(colw=COLW, left=LEFT, laneh=LANEH, top=TOP, nodeh=NODEH,
                      width=LEFT + len(years) * COLW + 10, height=TOP + len(LANES) * LANEH + 10),
            nodes=nodes, edges=[dict(s=a, t=b, kind=k, why=w) for a, b, k, w in E])

js_path = root / "docs/javascripts/paper-graph.js"
js = js_path.read_text()
start, end = "/*DATA-START*/", "/*DATA-END*/"
i, j = js.index(start) + len(start), js.index(end)
js_path.write_text(js[:i] + json.dumps(data, separators=(",", ":"), ensure_ascii=False) + js[j:])

by = {n["id"]: n for n in nodes}
def link(n):
    return f"[{n['short']}](papers/{n['guide']}.md)" if n["guide"] else f"[{n['short']}](papers/{n['pdf']})"

md = ["---", "hide:", "  - navigation", "  - toc", "---", "", "# Paper relationships", "",
      f"How the {len(nodes)} papers in the [PDF library](papers/index.md#pdf-library) connect. "
      "Papers are placed by year (columns) and research area (rows). Click a paper to highlight its "
      "connections and open its guide or PDF.", "",
      '<div id="paper-graph" aria-label="Interactive paper relationship graph"></div>', "",
      "!!! note \"How to read the edges\"",
      "    **Solid arrows** mean the later paper builds directly on the earlier one. "
      "**Dashed lines** mean the papers are closely related: they are compared, complementary or share an idea. "
      "This map shows the main conceptual lineage only, not every citation between the papers.", "",
      "## All relationships", "",
      "| From | To | Type | Relationship |", "|---|---|---|---|"]
for e in data["edges"]:
    a, b = by[e["s"]], by[e["t"]]
    md.append(f"| {link(a)} ({a['year']}) | {link(b)} ({b['year']}) | "
              f"{'Builds on' if e['kind']=='builds' else 'Related'} | {e['why']} |")
md += ["", "## Papers by area", ""]
for k, name in LANES:
    items = sorted((n for n in nodes if n["lane"] == k), key=lambda n: n["year"])
    md.append(f"- **{name}:** " + ", ".join(f"{link(n)} ({n['year']})" for n in items))
(root / "docs/paper-relationships.md").write_text("\n".join(md) + "\n")
print(len(nodes), "nodes", len(E), "edges")
