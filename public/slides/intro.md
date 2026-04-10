# Semantic Communication

### Bits to Meaning

<div class="slide-author" data-name="Rishab Manocha"></div>

---

## Rishab Manocha

- UFV Computing Science student.
- Abbotsford, British Columbia, Canada.
- Contact: rishab.manocha@student.ufv.ca.

<div class="slide-author" data-name="Rishab Manocha"></div>

---

## Why This Matters

- Wireless gains are slowing now.
- Applications demand richer data.
- Bit-only optimization is insufficient.

<div class="slide-author" data-name="Rishab Manocha"></div>

---

## Capacity Mismatch

- 8K/120 video exceeds WiFi limits.
- Raw streams overwhelm practical links.
- Task relevance is now critical.

<div class="slide-author" data-name="Rishab Manocha"></div>

---

## Shannon-Weaver Levels

- Level A: symbol accuracy focus.
- Level B: meaning understanding required.
- Level C: goal success matters.

<div class="slide-author" data-name="Rishab Manocha"></div>

---

## Semantic Communication Idea

- Extract meaning before transmission.
- Send only task-relevant information.
- Improve utility under constraints.

<div class="slide-author" data-name="Rishab Manocha"></div>

---

## Four Papers Reviewed

- A Theory of Semantic Communication.
- Deep Learning Enabled Semantic Communication Systems.
- Multimodal LLM Integrated Semantic Communications for 6G Immersive Experiences.
- Semantic Edge Computing and Semantic Communications in 6G Networks: A Unifying Survey and Research Challenges.

<div class="slide-author" data-name="Rishab Manocha"></div>

---

# Paper I

## A Theory of Semantic Communication

<div class="slide-author" data-name="Rishab Manocha"></div>

---

## Paper I Contribution

- Formalizes meaning transfer mathematically.
- Extends beyond Shannon symbols.
- Targets semantic communication design.

<div class="slide-author" data-name="Rishab Manocha"></div>

---

## Semantic Channel Steps

- Sender chooses intended meaning.
- Message travels through noise.
- Receiver forms interpreted meaning.

<div class="slide-author" data-name="Rishab Manocha"></div>

---

## Distortion-Cost Tradeoff

- Distortion measures meaning mismatch.
- Cost measures bandwidth and energy.
- Best points balance both.

<div class="slide-author" data-name="Rishab Manocha"></div>

---

## Design vs Exploitation

- Design builds shared codebooks.
- Exploitation uses fixed decoders.
- Most systems use exploitation.

<div class="slide-author" data-name="Rishab Manocha"></div>

---

## Exploitation Strategies

- Sender can adapt encoding.
- Receiver can adapt decoding.
- Joint adaptation can fail.

<div class="slide-author" data-name="Rishab Manocha"></div>

---

# Paper II

## Deep Learning Enabled Semantic Communication Systems

<div class="slide-author" data-name="Rishab Manocha"></div>

---

## DeepSC Motivation

- Bit metrics miss semantic intent.
- Noisy channels hurt conventional designs.
- DeepSC learns end-to-end semantics.

<div class="slide-author" data-name="Rishab Manocha"></div>

---

## DeepSC Architecture

- Transformer encoder extracts semantics.
- Joint channel coding follows.
- Transformer decoder reconstructs meaning.

<div class="slide-author" data-name="Rishab Manocha"></div>

---

## DeepSC Training Objectives

- Cross-entropy preserves linguistic consistency.
- Mutual information improves efficiency.
- Both optimize semantic robustness.

<div class="slide-author" data-name="Rishab Manocha"></div>

---

## DeepSC Evaluation

- BERT similarity measures sentence meaning.
- Outperforms classical coded baselines.
- Works better at low SNR.

<div class="slide-author" data-name="Rishab Manocha"></div>

---

## DeepSC Practical Value

- Graceful degradation under noise.
- Transfer learning adapts quickly.
- Useful for constrained links.

<div class="slide-author" data-name="Rishab Manocha"></div>

---

# Paper III

## Multimodal LLM Integrated Semantic Communications

### for 6G Immersive Experiences

<div class="slide-author" data-name="Rishab Manocha"></div>

---

## Paper III Goal

- Supports immersive multimodal workloads.
- Uses device-edge collaboration architecture.
- Allocates bandwidth by importance.

<div class="slide-author" data-name="Rishab Manocha"></div>

---

## MLLM-SC Modules

- MLLM guidance builds importance masks.
- Dual-path encoder prioritizes regions.
- Adaptive decoder reconstructs efficiently.

<div class="slide-author" data-name="Rishab Manocha"></div>

---

## Reported Results

- Critical regions received higher bandwidth.
- Only 1.3 percent data transmitted.
- Semantic quality improved strongly.

<div class="slide-author" data-name="Rishab Manocha"></div>

---

## Paper III Open Challenges

- Cross-modal alignment remains difficult.
- Time-varying channels break assumptions.
- Edge generation quality is hard.

<div class="slide-author" data-name="Rishab Manocha"></div>

---

# Paper IV

## Semantic Edge Computing and Semantic Communications

### in 6G Networks: A Unifying Survey and Research Challenges

<div class="slide-author" data-name="Rishab Manocha"></div>

---

## Unifying Claim

- SEC and task-SemCom align.
- Both transmit latent features.
- Both split edge intelligence.

<div class="slide-author" data-name="Rishab Manocha"></div>

---

## Three System Levels

- Bit-level ensures symbol fidelity.
- Semantic-level preserves intended meaning.
- Task-level optimizes action success.

<div class="slide-author" data-name="Rishab Manocha"></div>

---

## Optimization Dimensions

- System-level allocates resources dynamically.
- Application-level compresses semantic features.
- Physical-level adapts channel behavior.

<div class="slide-author" data-name="Rishab Manocha"></div>

---

## Survey Challenges

- Joint co-design remains underexplored.
- Security risks target latent data.
- Scaling multi-device inference is hard.

<div class="slide-author" data-name="Rishab Manocha"></div>

---

# Critical Analysis

## Main Gaps Today

<div class="slide-author" data-name="Rishab Manocha"></div>

---

## Gap 1: Weak Metrics

- Proxy metrics dominate evaluations.
- Semantic intent remains undermeasured.
- Task outcomes should dominate.

<div class="slide-author" data-name="Rishab Manocha"></div>

---

## Gap 2: Channel Mismatch

- Training uses simplified channels.
- Deployment channels are messy.
- Distribution shift hurts reliability.

<div class="slide-author" data-name="Rishab Manocha"></div>

---

## Gap 3: Real-Time Feasibility

- 120Hz allows tiny latency budgets.
- MLLM inference is often slow.
- Simulations understate this issue.

<div class="slide-author" data-name="Rishab Manocha"></div>

---

## Gap 4: Security Risk

- Latent features are attackable.
- Mask errors misroute bandwidth.
- Adversarial resilience is missing.

<div class="slide-author" data-name="Rishab Manocha"></div>

---

## Gap 5: System Assumptions

- Encryption limits semantic visibility.
- Networks remain mostly deterministic.
- SemCom adds probabilistic behavior.

<div class="slide-author" data-name="Rishab Manocha"></div>

---

## Proposed Direction 1

- Use task-grounded evaluation metrics.
- Measure action-level success rates.
- Reduce reliance on proxies.

<div class="slide-author" data-name="Rishab Manocha"></div>

---

## Proposed Direction 2

- Map known failure regimes.
- Benchmark against classical baselines.
- Test under strict budgets.

<div class="slide-author" data-name="Rishab Manocha"></div>

---

## Proposed Direction 3

- Close perception-action optimization loop.
- Train encoder with controller.
- Target Level C outcomes.

<div class="slide-author" data-name="Rishab Manocha"></div>

---

## Future Focus: Security

- Defend semantic adversarial attacks.
- Verify latent integrity continuously.
- Detect corrupted semantic streams.

<div class="slide-author" data-name="Rishab Manocha"></div>

---

## Future Focus: Hardware

- Semantic encoding is compute-heavy.
- Co-design models with accelerators.
- Use quantized efficient inference.

<div class="slide-author" data-name="Rishab Manocha"></div>

---

# Conclusion

## Final Position

- Semantic communication is necessary.
- Current systems remain early prototypes.
- Deployment needs robust engineering.

<div class="slide-author" data-name="Rishab Manocha"></div>

---

## Final Takeaways

- Transmit what matters most.
- Evaluate by task success.
- Design for real-world constraints.

<div class="slide-author" data-name="Rishab Manocha"></div>

---

## References

- [1] Deep Learning Enabled Semantic Communication Systems.
- [2] The Mathematical Theory of Communication.
- [3] A Theory of Semantic Communication.

<div class="slide-author" data-name="Rishab Manocha"></div>

---

## References

- [4] Semantic Edge Computing and Semantic Communications in 6G Networks.
- [5] Multimodal LLM Integrated Semantic Communications for 6G Immersive Experiences.
- Full citation details in paper.

<div class="slide-author" data-name="Rishab Manocha"></div>

---

# Thank You

- Questions and discussion welcome.
- Rishab Manocha.
- rishab.manocha@student.ufv.ca.

<div class="slide-author" data-name="Rishab Manocha"></div>
