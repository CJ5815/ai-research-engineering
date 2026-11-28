# Week 2 · Neural networks and backpropagation

**Question:** How does a prediction error change the weights in a hidden layer?

Start with [Week 1’s affine score and binary loss](week-01.md#a-smooth-score-and-a-loss). You’ll learn to derive a two-layer network’s gradients with dimensions, verify them independently, and evaluate when a hidden layer improves on a linear baseline.

| Block | Minutes | Work |
|---|---:|---|
| Theory and math | 90 | Derive the batch gradients and trace two small cases by hand. |
| Reading | 60 | Read the three excerpts below and write one sentence about each. |
| Lab and mini-project | 120 | Run the NumPy notebook, check all gradient blocks, and test an unseen batch. Run the matched CPU PyTorch comparison if available. |
| Experiment | 60 | Compare linear and nonlinear models and diagnose one validation error. |
| Assessment | 60 | Work the required mix of questions and exercises in the [practice bank](../assessments/week-02.md). |
| Research notes | 30 | Record your gradient check, the comparison, and its limits. |

For six hours, spend 30 minutes on the Prince gradient excerpt and notes, and 30 minutes comparing the fixed validation curves. Leave width sensitivity for optional practice. For an eighth hour, vary hidden width with the same split or inspect gradient flow near a ReLU kink.

## Reading

- **Required, 15 minutes.** Simon Prince, *Understanding Deep Learning* (2023), Ch. 5 on binary classification loss. Review the Week 1 Bernoulli likelihood first. Explain why working with logits is numerically useful. [Prince’s book and companion notebooks](https://udlbook.github.io/udlbook/)
- **Required, 25 minutes.** Prince, Ch. 7 on computing gradients. Trace the small example and identify which derivative each layer needs from the layer above it. [Prince’s book and companion notebooks](https://udlbook.github.io/udlbook/)
- **Required, 20 minutes.** Russell and Norvig, *Artificial Intelligence: A Modern Approach*, third edition, selected §§18.4, 18.7.3, and 18.7.4. Focus on the distinction between fitting a training set and selecting a model with validation data. [Third-edition contents](https://aima.cs.berkeley.edu/3rd-ed/contents.html)
- **Optional, 15 minutes.** Use the PyTorch documentation to identify the operations that build the computation graph and produce each parameter’s gradient. [PyTorch autograd mechanics](https://docs.pytorch.org/docs/stable/notes/autograd.html)

## Forward pass with dimensions

Let $X\in\mathbb R^{n\times d}$ contain $n$ examples with $d$ features. The hidden layer has $h$ units. Write the labels and logits as columns, $Y,Z\in\mathbb R^{n\times1}$, to keep subtraction from accidentally broadcasting into an $n\times n$ matrix.

| Operation | Shapes | Role |
|---|---|---|
| $A=XW_1+b_1$ | $(n,d)(d,h)+(h,)\to(n,h)$ | Compute hidden preactivations. The bias broadcasts across rows. |
| $H=\operatorname{ReLU}(A)=\max(0,A)$ | $(n,h)\to(n,h)$ | Introduce a nonlinearity so the two affine maps do more than compose into one. |
| $Z=HW_2+b_2$ | $(n,h)(h,1)+(1,)\to(n,1)$ | Produce one logit per row. |
| $P=\sigma(Z)$ | $(n,1)\to(n,1)$ | Map scores to model probabilities. |

For binary labels use $L=n^{-1}\sum_i\operatorname{softplus}((1-2y_i)z_i)$. Compute softplus with `np.logaddexp(0, t)`. A dense forward or backward pass takes $O(ndh)$ leading arithmetic work and retains $O(nh)$ hidden activations.

## Backward pass from the chain rule

Week 1 gave $\partial\ell_i/\partial z_i=p_i-y_i$. The batch mean gives $D_Z=(P-Y)/n$. For each output weight $W_{2,j}$, the derivative of $z_i$ is $H_{ij}$. Each output bias contributes $1$ to every $z_i$. Summing over the batch gives

$$
\nabla_{W_2}L=H^\top D_Z,\qquad
\nabla_{b_2}L=\sum_i D_{Z,i}.
$$

Each hidden activation receives the product of its outgoing weight and the output gradient. The derivative of ReLU is $1$ for positive preactivations and $0$ for negative ones. The implementation uses $0$ at the kink.

$$
D_A=(D_Z W_2^\top)\odot\mathbf{1}\{A>0\},\qquad
\nabla_{W_1}L=X^\top D_A,\qquad
\nabla_{b_1}L=\sum_i D_{A,i,:}.
$$

The gradient of each parameter has that parameter’s shape. Both bias sums run along the batch axis. The division by $n$ already happened in $D_Z$. Use the same weight snapshot for every derivative before applying $\theta\leftarrow\theta-\eta\nabla_\theta L$.

### Worked example 1 · Trace an inactive unit

Let $x=(1,2)$, $y=1$, $W_1=\begin{bmatrix}0.2&-0.4\\0.1&0.1\end{bmatrix}$, $b_1=(0,0.1)$, $W_2=(1.5,-0.5)^\top$, and $b_2=-0.6$.

1. Compute $A=(0.4,-0.1)$ and $H=(0.4,0)$. Then $z=0.4(1.5)-0.6=0$, $p=0.5$, and $L=\log 2$.
2. The output residual is $D_Z=-0.5$. Therefore $\nabla_{W_2}L=(-0.2,0)^\top$ and $\nabla_{b_2}L=-0.5$.
3. The incoming hidden gradient is $(-0.75,0.25)$. After the ReLU mask it becomes $D_A=(-0.75,0)$. The input outer product yields $\nabla_{W_1}L=\begin{bmatrix}-0.75&0\\-1.5&0\end{bmatrix}$ and $\nabla_{b_1}L=(-0.75,0)$.
4. With $\eta=0.1$, simultaneous updates give first hidden weights $(0.275,0.25)^\top$, first hidden bias $0.075$, first output weight $1.52$, and output bias $-0.55$. The updated first activation is $0.85$, so the new logit is $0.85(1.52)-0.55=0.742$ and the positive-label loss falls.

```python
import numpy as np

x = np.array([[1.0, 2.0]])
w1 = np.array([[0.2, -0.4], [0.1, 0.1]])
w2 = np.array([[1.5], [-0.5]])
a = x @ w1 + np.array([0.0, 0.1])
z = np.maximum(a, 0.0) @ w2 - 0.6
dz = np.array([[-0.5]])  # p - y for this one-row example
da = (dz @ w2.T) * (a > 0)
np.testing.assert_allclose(z, [[0.0]], atol=1e-12)
np.testing.assert_allclose(x.T @ da, [[-0.75, 0.0], [-1.5, 0.0]])
```

### Worked example 2 · A zero bias gradient with nonzero weight gradients

Suppose two rows have hidden activations $H=\begin{bmatrix}2&1\\1&3\end{bmatrix}$, probabilities $(0.75,0.25)^\top$, and labels $(0,1)^\top$. The mean-loss residuals are $(0.375,-0.375)^\top$. Their sum is zero, so the output bias stays fixed in this step. The activation-weighted sum is $(0.375,-0.75)^\top$, so both output weights move.

```python
import numpy as np

h = np.array([[2.0, 1.0], [1.0, 3.0]])
p = np.array([[0.75], [0.25]])
y = np.array([[0.0], [1.0]])
dz = (p - y) / len(y)
np.testing.assert_allclose(dz.sum(axis=0), [0.0])
np.testing.assert_allclose(h.T @ dz, [[0.375], [-0.75]])
```

## Lab, experiment, and independent work

1. Open the [Week 2 notebook](../downloads/week-02_backpropagation.ipynb) in the existing Python 3.11 environment. Run the cells in order. NumPy and Matplotlib cover the full core lab. The notebook also includes a CPU PyTorch gradient and training comparison that runs when PyTorch is installed.
2. Trace the worked case, then verify all four gradient blocks using centered finite differences on a batch away from ReLU’s kink. Explain what changes if your perturbation crosses zero or is so small that rounding dominates.
3. Run the [linear versus nonlinear experiment](../experiments/week-02.md). Explain the curves and inspect one missed synthetic review case. For the longer route, change one factor while keeping the split and training budget fixed.
4. Build an independent batch with both labels and with a hidden unit inactive on only some rows. Submit the inputs, gradient shapes, numeric tolerance, and a short explanation. Demonstrate that your finite-difference check catches an extra division by batch size. Use the [assessment](../assessments/week-02.md) to check transfer.

## Investment research perspective

- A hidden layer can model interactions between two signals without an explicit product feature. Compare it with the simpler explicit-interaction baseline before adding complexity to a real screen.
- Chronological splits keep later outcomes out of model fitting. In real data, verify when each feature became observable and group related documents by issuer.
- Review precision and missed priorities affect analysts differently. Pick a review-budget metric before comparing models.

**Hypothesis:** At fixed review capacity, a surprise–market-reaction interaction improves recall of independently labeled high-priority earnings cases. Compare a linear model, a linear model with the explicit interaction, and a small network on the same time-ordered holdout. Report the sensitivity to label definitions and market regime.

**Communication exercise:** Write a short brief stating what the synthetic comparison establishes, what would need to be measured on real cases, and why the review budget matters.
