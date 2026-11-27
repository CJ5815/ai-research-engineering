# Week 1 experiment · Linear separability

**Run the guided experiment before reading the results** if you want to test your prediction. This is a deterministic teaching experiment on all four binary inputs.

## Design

**Hypothesis:** A fixed perceptron procedure will reach zero training error on AND within 12 passes and will leave errors on raw XOR. Row order may change the number of passes needed.

| Element | Specification |
|---|---|
| Input and baseline | The four rows $(0,0),(0,1),(1,0),(1,1)$. AND is the separable baseline. Replace its labels with XOR for the comparison. |
| Controls | Same feature matrix, zero initialization, learning rate 1, strict positive threshold, and 12 passes. |
| Order | Enumerate all 24 permutations. Pair AND and XOR on the same order and repeat that order each pass. |
| Metrics | Number of misclassified rows after each pass, fraction of orders reaching zero error, and first zero-error pass where one exists. |
| Reproduction | Run the [Week 1 notebook](../downloads/week-01_perceptron_practice.ipynb) from top to bottom. The four input combinations and all fixed input orders are enumerated, so no seed or sampling interval is needed. |

## Observed results

Ran with Python 3.11.18, NumPy 2.4.6, and Matplotlib 3.11.2.

| Gate | Orders reaching zero error by pass 12 | First perfect pass |
|---|---:|---|
| AND | 24/24 | 4–6 |
| XOR | 0/24 | None observed |

In the original row order, AND’s first five post-pass error counts were 3, 2, 1, 2, and 0, showing that errors can temporarily rise. XOR had two errors after every pass in that order. The finite runs describe this training procedure. The XOR inequalities or geometry establish the stronger representational result. Because the experiment exhausts a toy domain, it is useful for checking the implementation and offers no estimate of out-of-time screening performance.

**Optional follow-up:** Add one feature interaction and rerun the comparison. Explain which conclusion changes and which controls you can still hold fixed.
