# Week 1 · Answer key

## Entry diagnostic

The score has shape `(6,)`. The supplied score is $2-3+0.5=-0.5$. A change to the cutoff shifts a nondegenerate boundary without changing its normal vector.

## Conceptual answers

- **Q1: B.** The three feature coordinates contract, producing one score for each of 12 rows. A confuses the output with the weight dimension. C retains the dimension eliminated by matrix multiplication. D is the result of scoring one row.
- **Q2: C.** Changing the bias changes the location while preserving the normal. A leaves the fitted score unchanged. B rescales scores without changing their zeros. D changes the normal and therefore the orientation.
- **Q3: C.** Training accuracy measures label agreement on those examples. A confuses classification with probability calibration. B requires an out-of-time test. D overlooks equivalent parameterizations, including positive rescaling.
- **Q4.** For $a>0$, $az$ and $z$ have the same sign and share the same zero. A sigmoid is strictly increasing, so $\sigma(az)$ differs from $\sigma(z)$ whenever $(a-1)z\ne0$.
- **Q5.** If no affine boundary represents the required labels, every finite training run leaves an error. For a separable task, an inadequate pass budget can also leave an error. Check representability and inspect the update trace.

## Mathematics

1. **M1.** The first score is 0 and the prediction is 0, so $e=1$. The new parameters are $w=(0.5,1)$ and $b=0.5$. On $(2,0)$ the pre-update score is $1.5$, so $\hat y=1$ and $e=-1$. The second update gives $w=(-0.5,1)$ and $b=0$. The final scores are $1.5$ for $(1,2)$ and $-1$ for $(2,0)$, yielding the correct labels 1 and 0. The initial tie produces label 0 and therefore triggers the first update.
2. **M2.** The inequalities are $b\le0$, $w_1+b>0$, $w_2+b>0$, and $w_1+w_2+b\le0$. Adding the strict positives gives $w_1+w_2+2b>0$. Adding the two nonpositive expressions gives $w_1+w_2+2b\le0$. These requirements contradict each other.
3. **M3.** At $z=0$, $p=1/2$, the loss is $\log 2\approx0.6931$, and the derivative is $-1/2$. At $z=\log 3$, $p=3/4$, the loss is $\log(4/3)\approx0.2877$, and the derivative is $-1/4$. The predictions are 0 and 1. The loss also distinguishes two scores on the same side of the threshold, and the derivative measures how the loss changes locally.

## Coding acceptance and example

- **C1.** Use $w=(1,-1)$ and $b=0$. Rows $(2,0)$, $(0,2)$, and $(1,1)$ must return $[1,0,0]$. Reject a weight vector of length 3 when there are two features. Reject a NaN feature or an infinite score input. Check that a row permutation permutes the predictions. A scalar reference can use one dot product and one explicit comparison per row.
- **C2.** With $\phi(x)=(x_1,x_2,x_1x_2)$, choose $w=(1,1,-2)$ and $b=-0.5$. The scores for $(0,0),(0,1),(1,0),(1,1)$ are $(-0.5,0.5,0.5,-0.5)$. Acceptance requires finding valid parameters, verifying all four rows, and explaining how the product enables the interaction.

## Research and executive responses

- **R1.** Pair runs by input order and hold the initialization, threshold, learning rate, and features fixed. Compare first perfect pass and minimum error over several pass budgets. Then add an interaction under the same protocol. The proof in M2 establishes the raw representation limit independently of the finite runs. Full credit requires an explicit control, metric, and interpretation.
- **E1.** “The truth table checks that our classifier implements the intended four input cases. Before using it for analyst triage, I would compare it with the current rule on later reporting periods using only data that was available at the time. I would track missed priority cases, analyst review volume, and failures by issuer type.” Full credit requires an engineering conclusion, a realistic next test, and a decision metric.

For M1, require both updates and the correct tie convention for mathematical competency evidence. For C1, require the scalar comparison, tie test, and at least one invalid-input check for independent implementation evidence.
