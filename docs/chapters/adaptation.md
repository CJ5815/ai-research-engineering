# Model training and adaptation

Autoregressive training minimizes $-\sum_t\log p_\theta(x_t\mid x_{<t})$. Pretraining learns general statistical representations; instruction tuning and preference optimization change behavior. LoRA freezes base weights and learns low-rank updates. See [LoRA](../papers/lora.md).

## Study exercise

Derive the central equation or algorithm, implement a minimal baseline, and record a test that could falsify your hypothesis.
