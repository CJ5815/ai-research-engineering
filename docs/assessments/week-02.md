# Week 2 assessment · Backpropagation

Use the notation from the [lesson](../weeks/week-02.md). A separate answer key is in the repository at `instructions/solutions/week-02.md`.

## Required work · 60 minutes

Complete **Q1–Q2** (10 minutes), **M1** (20 minutes), and **C1** (25 minutes). Spend five minutes explaining a check that would catch a hidden-layer gradient error. The other questions are additional practice.

## Conceptual questions

1. **Q1 · Multiple choice.** For $X$ of shape $(7,3)$ and $D_A$ of shape $(7,4)$, which expression returns the gradient of the hidden weight matrix? A. $D_A^\top X$ · B. $X^\top D_A$ · C. $X D_A^\top$ · D. $D_A$.
2. **Q2 · Multiple choice.** In this lesson, at which point is the mean loss scaled by batch size? A. Only in $D_Z$ · B. Only in the hidden bias gradient · C. In every parameter-gradient expression · D. After the optimizer step, with no change to gradients.
3. **Q3 · Multiple choice.** The analytic gradient disagrees with a centered difference at a preactivation of exactly zero. What should you check first? A. Whether the perturbation crossed the ReLU kink · B. Whether both splits have equal size · C. Whether the optimizer converged · D. Whether the case is in the test set.
4. **Q4 · Short answer.** Explain why composing two affine layers with no activation produces another affine map.
5. **Q5 · Short answer.** Explain why choosing a width based on test results changes what the test score estimates.

## Mathematics problems

1. **M1 · Trace an update.** Take $x=(2,1)$, $y=0$, $W_1=\begin{bmatrix}0.5&-0.2\\0&0.1\end{bmatrix}$, $b_1=(-0.5,0)$, $W_2=(2,-1)^\top$, and $b_2=-1$. Compute $A,H,Z,P$, then every parameter-gradient block. Apply one simultaneous update with $\eta=0.1$ and recompute the logit. Which hidden units are active after the step?
2. **M2 · Check shapes.** For $n=5,d=3,h=4$, give the shapes of $A,H,Z,D_Z,D_A$ and the four gradients. Explain which axes each bias sum removes.
3. **M3 · Diagnose a sign error.** A parameter’s centered finite-difference probe gives $L(\theta+0.001)=0.6998$ and $L(\theta-0.001)=0.7002$. Compute the numerical estimate and explain what the discrepancy suggests if the analytic result is $+0.2$.

## Coding exercises

1. **C1 · Verify a new batch.** Build at least three rows with both labels, including a hidden unit that is active on some rows and inactive on others. Ensure their preactivations stay away from the kink. Check all four parameter blocks by finite differences. Introduce an extra division by batch size in the analytic gradient and show that your check detects it.
2. **C2 · Test an explicit interaction.** Add the product of the two synthetic features to the linear baseline. Reuse the same split and avoid fitting normalization on the validation block. Compare validation loss and one error case with the two-layer model.

## Research and executive communication

- **R1.** Design a fair comparison between the interaction baseline and network when review capacity is limited. Specify model selection data, the untouched test split, metric, and one plausible source of leakage.
- **E1.** In 100 words or fewer, explain why a lower validation loss on synthetic triage data would justify a follow-up experiment but is insufficient evidence for changing an analyst’s workflow.
