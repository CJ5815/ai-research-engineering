// Interactive paper relationship graph. Data is generated; edit the generator, not the JSON.
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('paper-graph');
  if (!root) return;
  const D = /*DATA-START*/{"lanes":[{"id":"arch","name":"Architecture & scaling"},{"id":"align","name":"Training & alignment"},{"id":"eff","name":"Efficiency & serving"},{"id":"reason","name":"Reasoning"},{"id":"agents","name":"Agents & tools"},{"id":"know","name":"Retrieval & memory"},{"id":"eval","name":"Context & evaluation"}],"years":[2014,2017,2018,2020,2021,2022,2023,2024,2025],"geom":{"colw":114,"left":132,"laneh":84,"top":36,"nodeh":28,"width":1168,"height":634},"nodes":[{"id":"bahdanau","short":"Bahdanau attn.","title":"Neural Machine Translation by Jointly Learning to Align and Translate","authors":"Bahdanau et al.","year":2014,"lane":"arch","pdf":"1409.0473v7.pdf","guide":null,"desc":"Introduces learned soft alignment (attention) over encoder states for translation.","x":189.0,"y":78.0},{"id":"transformer","short":"Transformer","title":"Attention Is All You Need","authors":"Vaswani et al.","year":2017,"lane":"arch","pdf":"1706.03762v7.pdf","guide":"transformer","desc":"Replaces recurrence with stacked self-attention and feedforward layers.","x":303.0,"y":78.0},{"id":"bert","short":"BERT","title":"BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding","authors":"Devlin et al.","year":2018,"lane":"arch","pdf":"1810.04805v2.pdf","guide":null,"desc":"Encoder-only Transformer pretrained with masked language modelling.","x":417.0,"y":78.0},{"id":"scaling","short":"Scaling laws","title":"Scaling Laws for Neural Language Models","authors":"Kaplan et al.","year":2020,"lane":"arch","pdf":"2001.08361v1.pdf","guide":null,"desc":"Loss falls as a power law in parameters, data and compute.","x":531.0,"y":59.0},{"id":"gpt3","short":"GPT-3","title":"Language Models are Few-Shot Learners","authors":"Brown et al.","year":2020,"lane":"arch","pdf":"2005.14165v4.pdf","guide":null,"desc":"A 175B decoder-only model that performs tasks from in-context examples.","x":531.0,"y":97.0},{"id":"instructgpt","short":"InstructGPT","title":"Training Language Models to Follow Instructions with Human Feedback","authors":"Ouyang et al.","year":2022,"lane":"align","pdf":"2203.02155v1.pdf","guide":null,"desc":"Supervised fine-tuning plus RLHF (reward model + PPO) to follow instructions.","x":759.0,"y":162.0},{"id":"dpo","short":"DPO","title":"Direct Preference Optimization: Your Language Model is Secretly a Reward Model","authors":"Rafailov et al.","year":2023,"lane":"align","pdf":"2305.18290v3.pdf","guide":null,"desc":"Optimises preferences directly with a classification-style loss, no reward model or PPO.","x":873.0,"y":162.0},{"id":"lora","short":"LoRA","title":"LoRA: Low-Rank Adaptation of Large Language Models","authors":"Hu et al.","year":2021,"lane":"eff","pdf":"2106.09685v2.pdf","guide":"lora","desc":"Fine-tunes by learning low-rank updates to frozen weights.","x":645.0,"y":246.0},{"id":"flash","short":"FlashAttention","title":"FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness","authors":"Dao et al.","year":2022,"lane":"eff","pdf":"2205.14135v2.pdf","guide":null,"desc":"Tiles exact attention to minimise GPU memory reads and writes.","x":759.0,"y":246.0},{"id":"qlora","short":"QLoRA","title":"QLoRA: Efficient Finetuning of Quantized LLMs","authors":"Dettmers et al.","year":2023,"lane":"eff","pdf":"2305.14314v1.pdf","guide":null,"desc":"LoRA adapters trained on a 4-bit quantised frozen base model.","x":873.0,"y":227.0},{"id":"paged","short":"PagedAttention","title":"Efficient Memory Management for Large Language Model Serving with PagedAttention","authors":"Kwon et al.","year":2023,"lane":"eff","pdf":"2309.06180v1.pdf","guide":"pagedattention","desc":"Stores the KV cache in non-contiguous blocks, like OS virtual memory (vLLM).","x":873.0,"y":265.0},{"id":"cot","short":"Chain-of-Thought","title":"Chain-of-Thought Prompting Elicits Reasoning in Large Language Models","authors":"Wei et al.","year":2022,"lane":"reason","pdf":"2201.11903v6.pdf","guide":"cot","desc":"Few-shot exemplars with intermediate reasoning steps improve multistep tasks.","x":759.0,"y":311.0},{"id":"selfcons","short":"Self-Consistency","title":"Self-Consistency Improves Chain of Thought Reasoning in Language Models","authors":"Wang et al.","year":2022,"lane":"reason","pdf":"2203.11171v4.pdf","guide":null,"desc":"Samples many reasoning chains and takes the majority answer.","x":759.0,"y":349.0},{"id":"tot","short":"Tree of Thoughts","title":"Tree of Thoughts: Deliberate Problem Solving with Large Language Models","authors":"Yao et al.","year":2023,"lane":"reason","pdf":"2305.10601v2.pdf","guide":null,"desc":"Searches over a tree of partial reasoning steps with self-evaluation.","x":873.0,"y":330.0},{"id":"r1","short":"DeepSeek-R1","title":"DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning","authors":"DeepSeek-AI","year":2025,"lane":"reason","pdf":"2501.12948v2.pdf","guide":null,"desc":"Large-scale RL with verifiable rewards trains long chain-of-thought reasoning.","x":1101.0,"y":330.0},{"id":"react","short":"ReAct","title":"ReAct: Synergizing Reasoning and Acting in Language Models","authors":"Yao et al.","year":2022,"lane":"agents","pdf":"2210.03629v3.pdf","guide":"react","desc":"Interleaves reasoning traces with tool actions and observations.","x":759.0,"y":414.0},{"id":"toolformer","short":"Toolformer","title":"Toolformer: Language Models Can Teach Themselves to Use Tools","authors":"Schick et al.","year":2023,"lane":"agents","pdf":"2302.04761v1.pdf","guide":null,"desc":"Self-supervised learning of when and how to call APIs.","x":873.0,"y":395.0},{"id":"reflexion","short":"Reflexion","title":"Reflexion: Language Agents with Verbal Reinforcement Learning","authors":"Shinn et al.","year":2023,"lane":"agents","pdf":"2303.11366v4.pdf","guide":null,"desc":"Agents write verbal self-reflections after failures and retry.","x":873.0,"y":433.0},{"id":"rag","short":"RAG","title":"Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks","authors":"Lewis et al.","year":2020,"lane":"know","pdf":"2005.11401v4.pdf","guide":"rag","desc":"Conditions a generator on documents fetched by a dense retriever.","x":531.0,"y":498.0},{"id":"selfrag","short":"Self-RAG","title":"Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection","authors":"Asai et al.","year":2023,"lane":"know","pdf":"2310.11511v1.pdf","guide":null,"desc":"Model decides when to retrieve and critiques its own output with reflection tokens.","x":873.0,"y":479.0},{"id":"memgpt","short":"MemGPT","title":"MemGPT: Towards LLMs as Operating Systems","authors":"Packer et al.","year":2023,"lane":"know","pdf":"2310.08560v2.pdf","guide":null,"desc":"Hierarchical memory that pages information in and out of a fixed context.","x":873.0,"y":517.0},{"id":"graphrag","short":"GraphRAG","title":"From Local to Global: A GraphRAG Approach to Query-Focused Summarization","authors":"Edge et al.","year":2024,"lane":"know","pdf":"2404.16130v2.pdf","guide":"graphrag","desc":"Entity graph and community summaries answer corpus-wide questions.","x":987.0,"y":498.0},{"id":"lostmid","short":"Lost in the Middle","title":"Lost in the Middle: How Language Models Use Long Contexts","authors":"Liu et al.","year":2023,"lane":"eval","pdf":"2307.03172v3.pdf","guide":"lost-middle","desc":"Models use information at the start and end of long contexts best.","x":873.0,"y":563.0},{"id":"ragas","short":"Ragas","title":"Ragas: Automated Evaluation of Retrieval Augmented Generation","authors":"Es et al.","year":2023,"lane":"eval","pdf":"2309.15217v2.pdf","guide":null,"desc":"Reference-free metrics for faithfulness and relevance of RAG systems.","x":873.0,"y":601.0}],"edges":[{"s":"bahdanau","t":"transformer","kind":"builds","why":"Generalises attention from an add-on for RNNs to the whole architecture."},{"s":"transformer","t":"bert","kind":"builds","why":"Uses the Transformer encoder for bidirectional pretraining."},{"s":"transformer","t":"gpt3","kind":"builds","why":"Scales a decoder-only Transformer to 175B parameters."},{"s":"scaling","t":"gpt3","kind":"builds","why":"Power-law scaling results motivated training a much larger model."},{"s":"bert","t":"rag","kind":"builds","why":"RAG's dense retriever (DPR) encodes queries and documents with BERT."},{"s":"gpt3","t":"instructgpt","kind":"builds","why":"Fine-tunes GPT-3 with human demonstrations and RLHF."},{"s":"instructgpt","t":"dpo","kind":"builds","why":"Replaces the RLHF reward model and PPO with a direct preference loss."},{"s":"instructgpt","t":"r1","kind":"builds","why":"Extends RL post-training from human preferences to verifiable reasoning rewards."},{"s":"transformer","t":"lora","kind":"builds","why":"Adds low-rank updates to the attention projection matrices."},{"s":"gpt3","t":"lora","kind":"builds","why":"Motivated by the cost of fully fine-tuning GPT-3 175B."},{"s":"lora","t":"qlora","kind":"builds","why":"Trains LoRA adapters on top of a 4-bit quantised base model."},{"s":"transformer","t":"flash","kind":"builds","why":"Computes the same exact attention with IO-aware tiling."},{"s":"transformer","t":"paged","kind":"builds","why":"Manages the key/value cache produced by autoregressive Transformer decoding."},{"s":"flash","t":"paged","kind":"related","why":"Complementary: faster attention kernels versus better KV-cache memory management."},{"s":"gpt3","t":"cot","kind":"builds","why":"Extends few-shot prompting with worked reasoning steps."},{"s":"cot","t":"selfcons","kind":"builds","why":"Samples many chains of thought and votes on the answer."},{"s":"cot","t":"tot","kind":"builds","why":"Generalises a single reasoning chain into a search tree."},{"s":"selfcons","t":"tot","kind":"related","why":"ToT compares against self-consistency as a sampling baseline."},{"s":"cot","t":"r1","kind":"builds","why":"Learns long chains of thought through RL instead of prompting."},{"s":"cot","t":"react","kind":"builds","why":"Interleaves chain-of-thought traces with actions."},{"s":"react","t":"reflexion","kind":"builds","why":"Adds verbal self-reflection between ReAct-style attempts."},{"s":"react","t":"toolformer","kind":"related","why":"Prompted tool use versus self-supervised learned tool use."},{"s":"rag","t":"selfrag","kind":"builds","why":"Makes retrieval adaptive and adds self-critique of generations."},{"s":"reflexion","t":"selfrag","kind":"related","why":"Both use model-generated reflection to improve outputs."},{"s":"rag","t":"graphrag","kind":"builds","why":"Retrieves over an entity graph to answer global questions."},{"s":"rag","t":"memgpt","kind":"builds","why":"Retrieves from archival memory as part of a memory hierarchy."},{"s":"paged","t":"memgpt","kind":"related","why":"Both borrow OS virtual-memory paging: one for GPU KV cache, one for prompt context."},{"s":"rag","t":"lostmid","kind":"related","why":"Shows that where retrieved documents sit in the prompt changes accuracy."},{"s":"lostmid","t":"memgpt","kind":"related","why":"Limits of long context motivate explicit memory management."},{"s":"rag","t":"ragas","kind":"builds","why":"Provides metrics to evaluate RAG pipelines."}]}/*DATA-END*/;
  const NS = 'http://www.w3.org/2000/svg';
  const el = (tag, attrs = {}, text) => {
    const e = document.createElementNS(NS, tag);
    for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
    if (text != null) e.textContent = text;
    return e;
  };
  const G = D.geom, byId = Object.fromEntries(D.nodes.map(n => [n.id, n]));
  const NW = 104, NH = G.nodeh;

  const svg = el('svg', { viewBox: `0 0 ${G.width} ${G.height}`, class: 'pg-svg', role: 'img',
    'aria-label': 'Paper relationship graph' });
  const defs = el('defs');
  for (const [id, cls] of [['pg-arrow', 'pg-arrowhead'], ['pg-arrow-hi', 'pg-arrowhead hi']]) {
    const m = el('marker', { id, viewBox: '0 0 10 10', refX: 9, refY: 5, markerWidth: 7, markerHeight: 7, orient: 'auto-start-reverse' });
    m.append(el('path', { d: 'M0,0 L10,5 L0,10 z', class: cls }));
    defs.append(m);
  }
  svg.append(defs);

  // Lane bands and labels
  D.lanes.forEach((l, i) => {
    const y = G.top + i * G.laneh;
    svg.append(el('rect', { x: 0, y, width: G.width, height: G.laneh, class: `pg-lane ${i % 2 ? 'odd' : ''}` }));
    svg.append(el('text', { x: 10, y: y + G.laneh / 2 + 4, class: 'pg-lane-label' }, l.name));
  });
  // Year header
  D.years.forEach((yr, i) => {
    svg.append(el('text', { x: G.left + i * G.colw + G.colw / 2, y: G.top - 14, class: 'pg-year', 'text-anchor': 'middle' }, yr));
  });

  // Clip a line from centre a to centre b at the edge of b's box.
  const clip = (a, b, pad) => {
    const dx = b.x - a.x, dy = b.y - a.y;
    const tx = dx ? (NW / 2 + pad) / Math.abs(dx) : Infinity, ty = dy ? (NH / 2 + pad) / Math.abs(dy) : Infinity;
    const t = Math.min(tx, ty, 1);
    return [b.x - dx * t, b.y - dy * t];
  };
  const edgeLayer = el('g'), nodeLayer = el('g');
  svg.append(edgeLayer, nodeLayer);
  const edges = D.edges.map(e => {
    const a = byId[e.s], b = byId[e.t];
    const [x1, y1] = clip(b, a, 0), [x2, y2] = clip(a, b, 2);
    // Gentle curve so edges between same-lane nodes don't run through boxes.
    const mx = (x1 + x2) / 2, my = (y1 + y2) / 2, len = Math.hypot(x2 - x1, y2 - y1) || 1;
    const bend = Math.min(40, len * 0.18), cx = mx - (y2 - y1) / len * bend, cy = my + (x2 - x1) / len * bend;
    const p = el('path', { d: `M${x1},${y1} Q${cx},${cy} ${x2},${y2}`, class: `pg-edge ${e.kind}` });
    if (e.kind === 'builds') p.setAttribute('marker-end', 'url(#pg-arrow)');
    p.append(el('title', {}, `${a.short} → ${b.short}: ${e.why}`));
    edgeLayer.append(p);
    return { e, p };
  });

  const groups = {};
  D.nodes.forEach(n => {
    const g = el('g', { class: `pg-node lane-${n.lane}`, tabindex: 0, role: 'button', 'aria-label': `${n.title} (${n.year})` });
    g.append(el('rect', { x: n.x - NW / 2, y: n.y - NH / 2, width: NW, height: NH, rx: 7 }));
    g.append(el('text', { x: n.x, y: n.y + 4, 'text-anchor': 'middle' }, n.short));
    g.addEventListener('click', () => select(n.id));
    g.addEventListener('keydown', ev => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); select(n.id); } });
    nodeLayer.append(g);
    groups[n.id] = g;
  });

  const wrap = document.createElement('div');
  wrap.className = 'pg-scroll';
  wrap.append(svg);
  const legend = document.createElement('div');
  legend.className = 'pg-legend';
  legend.innerHTML = '<span><svg width="34" height="10"><line x1="0" y1="5" x2="34" y2="5" class="pg-edge builds"/></svg> builds on</span>' +
    '<span><svg width="34" height="10"><line x1="0" y1="5" x2="34" y2="5" class="pg-edge related"/></svg> related</span>' +
    '<button type="button" class="md-button pg-reset">Show all</button>';
  const detail = document.createElement('div');
  detail.className = 'pg-detail';
  detail.setAttribute('aria-live', 'polite');
  root.append(legend, wrap, detail);
  legend.querySelector('.pg-reset').addEventListener('click', () => select(null));

  const href = n => n.guide ? `../papers/${n.guide}/` : `../papers/${n.pdf}`;
  const a = (text, url) => { const x = document.createElement('a'); x.href = url; x.textContent = text; return x; };

  function select(id) {
    const near = new Set(id ? [id] : []);
    edges.forEach(({ e, p }) => {
      const on = id && (e.s === id || e.t === id);
      if (on) { near.add(e.s); near.add(e.t); }
      p.classList.toggle('hi', !!on);
      p.classList.toggle('dim', !!id && !on);
      if (e.kind === 'builds') p.setAttribute('marker-end', on ? 'url(#pg-arrow-hi)' : 'url(#pg-arrow)');
    });
    for (const [k, g] of Object.entries(groups)) {
      g.classList.toggle('sel', k === id);
      g.classList.toggle('dim', !!id && !near.has(k));
    }
    detail.replaceChildren();
    if (!id) {
      detail.append(document.createTextNode(`${D.nodes.length} papers, ${D.edges.length} relationships. Select a paper to see how it connects.`));
      return;
    }
    const n = byId[id];
    const h = document.createElement('p');
    const strong = document.createElement('strong');
    strong.append(a(n.title, href(n)));
    h.append(strong, document.createTextNode(` · ${n.authors} · ${n.year} `));
    h.append(document.createTextNode('· '), a('PDF', `../papers/${n.pdf}`));
    if (n.guide) h.append(document.createTextNode(' · '), a('Study guide', `../papers/${n.guide}/`));
    const d = document.createElement('p');
    d.textContent = n.desc;
    const ul = document.createElement('ul');
    const rank = e => e.kind === 'related' ? 2 : (e.t === id ? 0 : 1);
    const other = e => byId[e.s === id ? e.t : e.s];
    edges.map(({ e }) => e).filter(e => e.s === id || e.t === id)
      .sort((x, y) => rank(x) - rank(y) || other(x).year - other(y).year)
      .forEach(e => {
        const o = other(e), li = document.createElement('li');
        li.append(document.createTextNode(['Builds on ', 'Built on by ', 'Related to '][rank(e)]),
          a(o.short, href(o)), document.createTextNode(` (${o.year}): ${e.why}`));
        ul.append(li);
      });
    detail.append(h, d, ul);
  }
  select(null);
});
