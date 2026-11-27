# Week 1 assessment · Perceptrons

Use the threshold $\hat y=\mathbf{1}\{w^\top x+b>0\}$ throughout. Attempt the questions independently. An answer key is available in the local repository at `instructions/solutions/week-01.md`.

## Entry diagnostic

Spend up to ten minutes before the lesson. Describe the shape of the score vector for six examples with three features. Compute $(2,-1)^\top(1,3)+0.5$. Describe what changes if the cutoff moves while the weights stay fixed. Record which steps you can explain independently.

## Required work · 60 minutes

Complete **Q1–Q2** (10 minutes), **M1** (20 minutes), **C1** (25 minutes), and a five-minute reflection on an error you caught or a check you added. Use the remaining items for practice. The [competency rubric](index.md) describes the evidence levels.

## Conceptual questions

1. **Q1 · Multiple choice.** $X$ has 12 rows and 3 features, and $w$ is a one-dimensional NumPy array of length 3. What is the shape of `X @ w`? A. `(3,)` · B. `(12,)` · C. `(12, 3)` · D. Scalar.
2. **Q2 · Multiple choice.** Which operation shifts the boundary parallel to itself with a fixed nonzero $w$? A. Increase the learning rate with the fitted parameters held fixed. · B. Multiply $w$ and $b$ by the same positive constant. · C. Change $b$ only. · D. Replace $w$ with a non-collinear vector.
3. **Q3 · Multiple choice.** A model has perfect training accuracy on classification labels. What follows? A. Its probabilities are calibrated. · B. Its accuracy transfers to later periods. · C. Its labels agree with the training labels under the stated threshold. · D. Its fitted weights are unique.
4. **Q4 · Short answer.** Explain why multiplying $w$ and $b$ by the same positive constant preserves threshold predictions and can still alter sigmoid probabilities.
5. **Q5 · Short answer.** Why can more passes fail to fit a truth table even when the implementation matches the update rule?

## Mathematics problems

1. **M1 · Trace two updates.** Start with $w=(0,0)$ and $b=0$, using $\eta=0.5$. Visit the labeled row $(1,2)$ with $y=1$, then $(2,0)$ with $y=0$. For each row give the score and prediction before its update, then the updated weights and bias. Recompute both row predictions after the second update. Explain the result under the tie rule.
2. **M2 · Show a representation limit.** Write the four score inequalities for XOR and use them to derive a contradiction under the strict threshold convention.
3. **M3 · Compare loss and label accuracy.** For a positive example, calculate binary cross-entropy at scores $z=0$ and $z=\log 3$. Calculate $d\ell/dz$ at both points. State the predicted labels and explain what loss reveals that a label alone omits.

## Coding exercises

1. **C1 · Batch and scalar agreement.** Independently implement a NumPy strict-threshold scorer for an $(n,d)$ feature matrix and a $(d,)$ weight vector. Reject incompatible shapes and nonfinite inputs. Compare with a scalar loop on at least three rows, including a positive score, a negative score, and a tie. Include one invalid-input test.
2. **C2 · Add one interaction.** Extend the two binary features with their product and find a single score that fits XOR on all four rows. Check the truth table, then explain why the result depends on the feature representation.

## Research and executive communication

- **R1.** Would the AND–XOR result change if the data order or pass budget changed? Design a comparison that distinguishes an optimization effect from a representation limit.
- **E1.** In 100 words or fewer, explain to a portfolio research lead why perfect performance on the truth table warrants a code check but cannot justify a workflow rollout. Specify what evidence would support the next decision.
