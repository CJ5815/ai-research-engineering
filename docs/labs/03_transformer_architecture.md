# Toy decoder Transformer forward pass

[Download notebook](../downloads/03_transformer_architecture.ipynb)

## Model design
A single pre-normalized decoder block with two attention heads, residual connections and a feedforward network. Random weights; no training. This is educational, not a pretrained model.

```python
import numpy as np
rng=np.random.default_rng(42)
T,d,h,vocab=4,8,2,12
tokens=np.array([1,3,5,2])
E=rng.normal(size=(vocab,d))*.1
P=rng.normal(size=(T,d))*.1
x=E[tokens]+P
def ln(x):
    return (x-x.mean(-1,keepdims=True))/np.sqrt(x.var(-1,keepdims=True)+1e-5)
def weight(a,b): return rng.normal(size=(a,b))/np.sqrt(a)
Wq,Wk,Wv,Wo=[weight(d,d) for _ in range(4)]
W1,W2=weight(d,2*d),weight(2*d,d)
Wout=weight(d,vocab)
```

```python
def forward(tokens):
    x=E[tokens]+P[:len(tokens)]
    z=ln(x); outputs=[]; n=len(tokens)
    q,k,v=[(z@w).reshape(n,h,d//h) for w in (Wq,Wk,Wv)]
    for j in range(h):
        scores=q[:,j]@k[:,j].T/np.sqrt(d//h)
        scores=np.where(np.triu(np.ones((n,n),bool),1),-np.inf,scores)
        e=np.exp(scores-scores.max(-1,keepdims=True)); a=e/e.sum(-1,keepdims=True)
        outputs.append(a@v[:,j])
    x=x+np.concatenate(outputs,axis=-1)@Wo
    x=x+np.maximum(ln(x)@W1,0)@W2
    return ln(x)@Wout
logits=forward(tokens)
print(logits.shape)
assert logits.shape==(T,vocab)
changed=tokens.copy(); changed[-1]=9
assert np.allclose(logits[:-1],forward(changed)[:-1])
```

## Exercises
1. Explain the causal invariance assertion.
2. Count parameters in the attention matrices.
3. Add another block and explain how to train next-token prediction.