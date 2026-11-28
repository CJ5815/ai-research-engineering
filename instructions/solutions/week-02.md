# Week 2 · Answer key

## Conceptual answers

- **Q1: B.** $X^\top D_A$ has shape $(3,7)(7,4)=(3,4)$. A returns the transpose of the wanted result. C attempts to contract axes of length 3 and 4. D is the per-example preactivation gradient.
- **Q2: A.** Scaling $D_Z$ by $1/n$ scales every gradient downstream. B leaves most gradients unscaled. C divides twice. D cannot correct an already-applied update.
- **Q3: A.** A centered difference can average slopes from both sides of the kink, while the implementation uses a chosen derivative at zero. B and D concern the split. C concerns optimization after the derivative is computed.
- **Q4.** Without a nonlinearity, $(XW_1+b_1)W_2+b_2=X(W_1W_2)+(b_1W_2+b_2)$. The composed weights and bias define one affine model.
- **Q5.** Repeated selection against test results adapts the design to those cases. Use validation for selection and evaluate the frozen choice on an untouched test block.

## Mathematics

1. **M1.** $A=(0.5,-0.3)$ and $H=(0.5,0)$. The logit is $2(0.5)-1=0$ and $P=0.5$. Since $y=0$, $D_Z=0.5$. Then $\nabla_{W_2}=(0.25,0)^\top$, $\nabla_{b_2}=0.5$, and the masked $D_A=(1,0)$. Thus $\nabla_{W_1}=\begin{bmatrix}2&0\\1&0\end{bmatrix}$ and $\nabla_{b_1}=(1,0)$. The new first hidden weights are $(0.3,-0.1)^\top$ and its bias is $-0.6$. Its new preactivation is $2(0.3)-0.1-0.6=-0.1$. The other preactivation is unchanged at $-0.3$. Both units are inactive, so the new logit is the updated $b_2=-1.05$.
2. **M2.** $A,H,D_A$ are $(5,4)$ and $Z,D_Z$ are $(5,1)$. Weight gradients are $(3,4)$ and $(4,1)$. Bias gradients have shapes $(4,)$ and $(1,)$ because each bias sum removes the row axis.
3. **M3.** $(0.6998-0.7002)/0.002=-0.2$. The analytic value has the opposite sign. Check the residual sign and the order of the finite-difference subtraction. Confirm that both perturbations stay in a smooth region before attributing the discrepancy to backward propagation.

## Coding acceptance

- **C1.** One suitable batch for the notebook’s worked weights is $X=\begin{bmatrix}1&1\\-1&0.25\\0.25&-1\end{bmatrix}$ with labels $(1,0,1)^\top$. The first hidden preactivations are $(0.3,-0.175,-0.05)^\top$, so the derivative mask is mixed and clear of zero. Check both weight and both bias blocks with `rtol=1e-5, atol=1e-7` using a step of $10^{-5}$. A second batch division scales each nonzero analytic coordinate by $1/3$ and must fail at least one comparison.
- **C2.** For each split, concatenate $x_1x_2$ as the third column and fit the resulting logistic model on training rows only. Match the training budget or state why a separately tuned baseline is appropriate. Report both validation metrics and one case trace. Changes in performance depend on the training and selection protocol.

## Research and executive responses

- **R1.** Select models and thresholds using training and validation periods. Freeze both models’ rules at the same number of flags, then measure recall of labeled priority cases on a later held-out issuer-period group. Exclude market data timestamped after the review decision. Full credit requires credible splits, a matched budget, a metric, and a concrete leakage channel.
- **E1.** “The synthetic results show that the model learned an interaction we deliberately built into the data. Before using it for reviews, I’d compare it with a simpler model that receives the interaction explicitly. I’d hold the number of flags fixed and test on later earnings cases with independent labels. The decision is whether the network catches more priority cases at the same review workload.” Full credit requires the synthetic limitation, a credible benchmark, and a decision metric.
