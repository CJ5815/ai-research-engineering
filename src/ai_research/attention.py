import numpy as np

def softmax(x):
    x = np.asarray(x, dtype=float)
    e = np.exp(x - x.max(axis=-1, keepdims=True))
    return e / e.sum(axis=-1, keepdims=True)

def attention(q, k, v, causal=False):
    q, k, v = map(np.asarray, (q,k,v))
    logits = q @ k.T / np.sqrt(q.shape[-1])
    if causal:
        if len(q) != len(k):
            raise ValueError('Toy causal attention requires equal sequence lengths')
        logits = np.where(np.triu(np.ones_like(logits, dtype=bool), 1), -np.inf, logits)
    weights = softmax(logits)
    return weights @ v, weights
