# Week 1 · Mathematical foundations and perceptrons

**Question:** When can an additive score implement a decision rule, and when do we need a different representation?

[Download the Week 1 math handout (PDF)](../downloads/week-01_perceptron_math.pdf) for step-by-step derivations, practice problems, and worked solutions.

**Prerequisites:** Python expressions and loops, vectors, dot products, and basic probability. Use the existing `ai-research` Conda environment and a Python 3.11 Jupyter kernel in VS Code. The labs use NumPy, Matplotlib, and synthetic data.

By the end, you should be able to trace a batch score with its dimensions, update a perceptron by hand, implement and test a binary gate classifier, and diagnose the difference between an optimization problem and a representation limit.

**Learning objectives.** Trace an affine score and update with their dimensions, implement and test a perceptron, and explain what the AND–XOR comparison reveals about feature representation.

[Reading](#reading) · [Derivation](#an-affine-score-and-a-decision-boundary) · [Core lab and experiment](#lab-and-independent-mini-project) · [Assessment and evidence](#assess-and-record-evidence)

| Block | Minutes | Work |
|---|---:|---|
| Theory and math | 90 | Try the short [entry diagnostic](../assessments/week-01.md#entry-diagnostic), then derive the score, update, and binary cross-entropy below. |
| Reading | 60 | Open the [assigned reading](#reading), then sketch a boundary and explain why a smooth activation matters. |
| Lab and mini-project | 120 | Run the original lab, follow the training and geometry notebook, then implement and test your own batch scorer. |
| Experiment | 60 | Run and interpret the [paired gate experiment](../experiments/week-01.md). |
| Assessment | 60 | Complete the required subset in the [practice bank](../assessments/week-01.md). |
| Research notes | 30 | Record one result, its limitations, and a professional implication. |

For a six-hour week, read the two Nielsen sections for 30 minutes and run the experiment for 30 minutes. For an eighth hour, test a feature interaction or work through the optional problems.

## Reading

Follow the [Week 1 assignments in the AI Foundations and Reading Guide](../chapters/ai-foundations-and-reading-guide.md#week-01-reading) for excerpts and timing. Sketch a decision boundary as you read and explain what changes when a hard threshold becomes smooth.

Open [Nielsen’s Chapter 1](http://neuralnetworksanddeeplearning.com/chap1.html) for the required reading.

For optional historical context, compare the modern two-feature model with the motivation in Frank Rosenblatt (1958), *The Perceptron: A Probabilistic Model for Information Storage and Organization in the Brain*, *Psychological Review* 65(6), 386–408. [Paper PDF](../downloads/rosenblatt58.pdf) · [DOI](https://doi.org/10.1037/h0042519)

## An affine score and a decision boundary

A perceptron turns an input into a binary decision by thresholding an affine score. Let $x,w\in\mathbb{R}^d$ and $b\in\mathbb{R}$. The scalar score is $z=w^\top x+b$, and the prediction is $\hat y=\mathbf{1}\{z>0\}$. A score exactly at zero receives label 0. With $n$ row examples in $X\in\mathbb{R}^{n\times d}$, the batch score vector is $z=Xw+b\mathbf 1_n\in\mathbb{R}^n$. Computing it costs $O(nd)$ operations.

When $w\ne 0$, $z=0$ defines a hyperplane. The vector $w$ is perpendicular to that boundary and the bias moves it. A dataset is linearly separable in the chosen representation if an affine boundary can strictly separate the two classes.

### Worked example 1 · Verify NAND

Take $w=(-2,-2)$ and $b=3$. The input $(1,0)$ gives $(-2)\cdot 1+(-2)\cdot 0+3=1$, so the prediction is 1. In row order $(0,0),(0,1),(1,0),(1,1)$, the scores are $(3,1,1,-1)$ and the labels are $(1,1,1,0)$.

```python
import numpy as np

inputs = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
weights = np.array([-2, -2])
scores = inputs @ weights + 3
assert scores.tolist() == [3, 1, 1, -1]
assert (scores > 0).astype(int).tolist() == [1, 1, 1, 0]
```

### Worked example 2 · Trace a mistake-driven update

Given binary target $y$, set $e=y-\hat y$ and choose $\eta>0$. Update $w\leftarrow w+\eta ex$ and $b\leftarrow b+\eta e$. On the same example, the score changes by $\eta e(\lVert x\rVert_2^2+1)$. A false negative raises the score, a false positive lowers it, and a correct prediction leaves the parameters unchanged.

For $x=(0,1)$, $y=1$, $w=(-1,-1)$, $b=0$, and $\eta=1$, the old score is $-1$. Then $e=1$, $w'=(-1,0)$ and $b'=1$. The new score on this row is $1$. Changes to one row can affect other rows, which is why we measure errors over the entire truth table after a pass.

```python
import numpy as np

row = np.array([0., 1.])
weights = np.array([-1., -1.])
bias, target, rate = 0.0, 1, 1.0
old_score = row @ weights + bias
error = target - int(old_score > 0)
weights += rate * error * row
bias += rate * error
assert (row @ weights + bias) - old_score == 2
```

## A smooth score and a loss

The hard decision rule motivates the smooth neurons used in Week 2. For a sigmoid neuron, $p=\sigma(z)=1/(1+e^{-z})$ is the Bernoulli model probability for label 1. The likelihood of a single label is $p^y(1-p)^{1-y}$. Taking the negative logarithm gives binary cross-entropy $\ell=-y\log p-(1-y)\log(1-p)$. At $z=0$ and $y=1$, the probability is $0.5$ and the loss is $\log 2\approx 0.693$ nats.

Because $dp/dz=p(1-p)$ and $d\ell/dp=-y/p+(1-y)/(1-p)$, the chain rule gives $d\ell/dz=p-y$. For mean loss over $n$ rows, $\nabla_w L=X^\top(p-y)/n$ has shape $(d,)$, and $\partial L/\partial b=\operatorname{mean}(p-y)$ is scalar. For large logits, compute the loss directly from the score as $\log(1+e^z)-yz$ using `np.logaddexp(0, z) - y*z`. Week 2 extends the same chain-rule idea through a hidden layer.

## Lab and independent mini-project

1. For an optional warm-up, run the [NAND and sigmoid notebook](../downloads/week-01_perceptron_warmup.ipynb) to connect a truth table to scores and loss.
2. Open the [core Week 1 training and diagnosis notebook](../downloads/week-01_perceptron_practice.ipynb). Trace the trainer and inspect its boundary and error plots. Finish the guided experiment before reading the [experiment record](../experiments/week-01.md).
3. Build a NumPy classifier independently. In the same local environment, run your four-row tests from a fresh kernel. Verify AND and OR on every row, repeat after a row permutation, and include a boundary-tie case and a shape check. Explain XOR with inequalities or geometry. Submit your code, results, and a short explanation. Use the [practice bank](../assessments/week-01.md) to test transfer.

## Assess and record evidence

Complete the required subset in the [Week 1 practice bank](../assessments/week-01.md). Save your gate checks and a short explanation of the XOR limit under a changed feature representation. Note one implementation error you found or an input your checks could miss. Use the [evidence record](../assessments/index.md#record-your-evidence) to track what you demonstrated independently.

[Continue to Week 2 · Backpropagation](week-02.md) · [View the Week 5 checkpoint](../assessments/index.md#checkpoint-05)

## Investment research and decision-making

- An additive score makes a research triage decision inspectable. Show how each signal moved the score and what threshold triggered human review.
- A rule based on interactions can exceed the expressive power of additive features. Try an interaction using information available before the decision cutoff.
- A perfect synthetic truth table establishes behavior on that exercise. For a triage decision, test accuracy and review burden separately on management releases from a later date.

**Hypothesis:** At a fixed review capacity, adding a surprise–valuation interaction to an additive screening baseline improves recall of researcher-labeled priority cases on a time-ordered holdout. Predefine the labels, review budget, feature timestamps, and baseline. Compare paired errors, inspect disagreements, and account for false negatives.

**Communication exercise:** Draft a one-slide walkthrough of a screening rule that failed because its features omitted an interaction. Show the failure, the proposed change, and how you would test it.
