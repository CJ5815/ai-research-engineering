# Week 1 · Optional perceptron warm-up

[Download notebook](../downloads/week-01_perceptron_warmup.ipynb)

## NAND gate
A step neuron computes $a=1$ if $w^Tx+b>0$, otherwise zero.

```python
import numpy as np
X=np.array([[0,0],[0,1],[1,0],[1,1]])
w=np.array([-2,-2]); b=3
y=(X@w+b>0).astype(int)
print(y)
assert np.array_equal(y,[1,1,1,0])
```

## Train a sigmoid neuron
Binary cross-entropy gives gradient $X^T(p-y)/n$ for logistic regression.

```python
target=y.astype(float); w=np.zeros(2); b=0.
for step in range(2000):
    p=1/(1+np.exp(-(X@w+b)))
    error=p-target
    w-=0.5*(X.T@error)/len(X)
    b-=0.5*error.mean()
p=1/(1+np.exp(-(X@w+b)))
print(w,b,p)
assert np.array_equal((p>.5).astype(int),y)
```

## Exercises
1. Find weights for AND and OR.
2. Explain why XOR cannot be represented by one linear threshold.
3. Plot loss versus iteration for different learning rates.
