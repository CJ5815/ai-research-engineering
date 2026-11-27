# Neural networks and attention

A neuron computes $z=w^\top x+b$ and $a=\sigma(z)$. A perceptron uses a step activation; sigmoid neurons use $\sigma(z)=1/(1+e^{-z})$. NAND can be implemented with weights $(-2,-2)$ and bias 3. Gradient descent updates $w\leftarrow w-\eta\nabla_w L$.

Attention generalizes weighted aggregation. Query/key dot products are scaled and normalized with softmax. See the [Transformer paper](../papers/transformer.md) and Labs 1–3.

## Study exercise

Derive the central equation or algorithm, implement a minimal baseline, and record a test that could falsify your hypothesis.
