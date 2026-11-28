# Scaled dot-product attention

[Download notebook](../downloads/week-04_attention_from_scratch.ipynb)

## Queries, keys and values
Compute $QK^T/\sqrt{d_k}$, normalize each row and multiply by $V$.

```python
import numpy as np
Q=np.array([[1.,0.],[0.,1.]])
K=Q.copy(); V=np.array([[10.,0.],[0.,20.]])
logits=Q@K.T/np.sqrt(Q.shape[-1])
e=np.exp(logits-logits.max(axis=-1,keepdims=True))
W=e/e.sum(axis=-1,keepdims=True)
print(W, W@V)
assert np.allclose(W.sum(axis=-1),1)
```

## Causal masking
Future tokens cannot influence earlier token outputs.

```python
masked=np.where(np.triu(np.ones_like(logits,dtype=bool),1),-np.inf,logits)
e=np.exp(masked-masked.max(axis=-1,keepdims=True))
W=e/e.sum(axis=-1,keepdims=True)
print(W)
assert W[0,1]==0
```

## Exercises
Change the query; vary the dimension and scale; compare masked and unmasked outputs. Explain why each row sums to one.