export const TOOL_CONFIG = [
  // Claude
  {
    key: "claudePro",
    label: "Claude Team {$30/user/mo}",
    sub: "Business team plan",
    usd: "$30",
    eur: 28,
    modelUsed: "Claude Sonnet 4.6, Claude Opus 4.6",
    modelEquivalent:
      "Native Claude stack (Sonnet = speed, Opus = deeper reasoning)",
    workloadProfile: "Sonnet for fast flow, Opus for harder reasoning",
    limits:
      "Team: ~225+ messages/5h for short chats (5x Pro quota); priority access; resets every 5h; admin console, SSO, centralized billing",
    burnRate:
      "Medium: larger headroom than Pro; Opus and long-context chats still consume quota faster",
    limitHit: "Warning at low remaining capacity, then blocked until 5h reset",
    ideCompletionsAtLimit: "No - no native IDE autocomplete in this plan",
    modelsAfterLimit: "None until the 5-hour window resets",
    risk: "Low - fixed per-seat pricing",
    riskLevel: "accent",
  },
  {
    key: "claudeTeamPremium",
    label: "Claude Team — Premium Seat {$100/user/mo}",
    sub: "Max 5x capacity on a Team plan",
    usd: "$100",
    eur: 95,
    modelUsed: "Claude Sonnet 4.6, Claude Opus 4.6",
    modelEquivalent: "Native Claude stack at Max-tier session budget",
    workloadProfile:
      "High reasoning depth with much larger usable session budget; suited for heavy daily agentic use",
    limits:
      "Max 5x seat: ~225+ messages/5h (5x Pro base, same as Claude Max 5x); priority access; resets every 5h; full Team admin console, SSO, centralized billing",
    burnRate:
      "Medium: much higher headroom than base Team seat, but heavy Opus sessions and long contexts still drain faster",
    limitHit:
      "Hit session cap and wait for 5h reset; no overage — you stay within the seat tier",
    modelsAfterLimit: "None until the 5-hour window resets",
    risk: "Low - fixed per-seat pricing",
    riskLevel: "accent",
  },
  // ChatGPT
  {
    key: "codex",
    label: "ChatGPT Team {$30/user/mo}",
    sub: "Business team plan — includes Codex",
    usd: "$30",
    eur: 28,
    modelUsed: "GPT-5.3-Codex (medium/high), GPT-5.1-Codex-Mini (simple tasks)",
    modelEquivalent: "Closest practical equivalent: Claude Sonnet 4.6 class",
    workloadProfile:
      "Fast enough for iteration, stronger reasoning in high mode",
    limits:
      "Team Codex: ~90-450 local msgs/5h or ~20-120 cloud tasks/5h (2x Plus quota), weekly cap applies; 5.1-Codex-Mini gives ~4x local capacity",
    burnRate:
      "Medium-High: high mode and long agent tasks burn quota much faster than mini",
    ideCompletionsAtLimit:
      "No - Codex stops at included cap (resume after reset or paid credits)",
    modelsAfterLimit:
      "None on included quota; same Codex models resume only after reset or paid credits",
    risk: "Low - fixed per-seat pricing; data privacy, no training on conversations",
    riskLevel: "accent",
  },
  {
    key: "chatgptPro",
    label: "ChatGPT Enterprise {~$60/user/mo}",
    sub: "Custom contract pricing — indicative",
    usd: "~$60",
    eur: 57,
    modelUsed:
      "GPT-5.3-Codex, GPT-5.1-Codex-Mini, top-tier ChatGPT models, extended 128k context",
    modelEquivalent:
      "Frontier GPT class with enterprise-grade controls and higher throughput",
    workloadProfile:
      "Very high throughput for sustained heavy usage; strong reasoning with no meaningful soft caps",
    limits:
      "Enterprise: very high usage limits (no fixed message cap on core models under fair use); extended 128k context windows; full Codex access; SOC 2 Type II, SAML SSO, SCIM provisioning, domain verification, private workspace, advanced usage analytics",
    burnRate:
      "Low relative to limits: effectively uncapped on included models; Codex cloud tasks still count toward weekly cap",
    ideCompletionsAtLimit:
      "No - Codex IDE agent stops at weekly cap (resume after reset or paid credits)",
    modelsAfterLimit:
      "Core GPT models remain available; Codex cloud tasks pause until weekly reset",
    risk: "Medium - custom contract, pricing varies by org size and negotiation",
    riskLevel: "warn",
  },
  // GitHub Copilot
  {
    key: "copilot",
    label: "GitHub Copilot Business {$19/user/mo}",
    sub: "300 premium requests + enterprise controls",
    usd: "$19",
    eur: 18,
    modelUsed:
      "Claude Sonnet 4.6, Claude Opus 4.6, GPT-5.3-Codex, GPT-5.1-Codex-Mini",
    modelEquivalent: "Multi-provider model router with business data controls",
    workloadProfile:
      "Very fast for routine coding; premium models for reasoning spikes",
    limits:
      "Business: 300 premium requests/month (reset on 1st). Included models unlimited chat/completions. Adds: IP indemnity, no training on your code, SAML SSO, policy management, content exclusions, audit logs",
    limitHit:
      "Premium model requests stop unless paid overage is enabled; fall back to included models",
    ideCompletionsAtLimit:
      "Yes - base Copilot autocomplete/chat stays on with active Business subscription",
    modelsAfterLimit:
      "Included Copilot models remain; premium models (Sonnet/Opus/Codex family) stop",
    risk: "Low - fixed per-seat pricing",
    riskLevel: "accent",
  },
  {
    key: "copilotEnterprise",
    label: "GitHub Copilot Enterprise {$39/user/mo}",
    sub: "All Business features + custom models",
    usd: "$39",
    eur: 37,
    modelUsed:
      "Claude Sonnet 4.6, Claude Opus 4.6, GPT-5.3-Codex, GPT-5.1-Codex-Mini, org fine-tuned models",
    modelEquivalent:
      "Business multi-provider router + custom/fine-tuned org models",
    workloadProfile:
      "All Copilot Business capabilities plus knowledge bases, custom models, and deeper GitHub integration",
    limits:
      "Enterprise: 1000 premium requests/month per user (reset on 1st). Adds: knowledge bases for codebase context, custom fine-tuned models, GitHub.com Copilot Chat, extended context windows, enterprise audit logs and usage reporting, IP indemnity, SAML SSO",
    limitHit:
      "Premium model requests stop unless paid overage is enabled; fall back to included models",
    ideCompletionsAtLimit:
      "Yes - base Copilot autocomplete/chat stays on with active Enterprise subscription",
    modelsAfterLimit:
      "Included and org fine-tuned models remain; premium request pool models stop",
    risk: "Low - fixed per-seat pricing",
    riskLevel: "accent",
  },
  // Cursor
  {
    key: "cursor",
    label: "Cursor Teams (base only) {$40/mo}",
    sub: "$40/mo, no overages",
    usd: "$40",
    eur: 38,
    modelUsed: "Sonnet, Opus, Codex, Codex Mini, Composer 1, Auto",
    modelEquivalent: "Mixed premium pool + Cursor orchestration",
    workloadProfile:
      "Strong interactive speed; reasoning depends on selected model",
    burnRate:
      "High: Opus, long contexts, Composer loops, and manual non-Auto model use burn fastest",
    limitHit:
      "At included cap, you continue on Auto; selected premium models require usage-based billing",
    ideCompletionsAtLimit:
      "Conditional - autocomplete continues until spending cap is reached",
    modelsAfterLimit:
      "Auto/non-premium models remain; selected premium models require usage billing",
    risk: "Overages unpredictable",
    riskLevel: "warn",
  },
  {
    key: "cursorMax",
    label: "Cursor Teams + full overages {$160/mo max}",
    sub: "$40 base + $120 cap",
    usd: "$160 max",
    eur: 152,
    modelUsed: "Sonnet, Opus, Codex, Codex Mini, Composer 1, Auto",
    modelEquivalent: "Highest available Cursor model set",
    workloadProfile: "Fast and flexible, aimed at sustained heavy usage",
    burnRate:
      "Very high: heavy agent workflows consume usage budget quickly once over included requests",
    limitHit:
      "Usage continues until your spending cap is hit, then premium requests stop",
    ideCompletionsAtLimit:
      "Conditional - autocomplete stays available until spending cap is reached",
    modelsAfterLimit:
      "Auto/non-premium models remain; selected premium models stop at spending cap",
    risk: "High - variable + team shared cap",
    riskLevel: "danger",
  },
];

export const COSTS = Object.fromEntries(
  TOOL_CONFIG.map(({ key, label, sub, eur, risk, riskLevel }) => [
    key,
    { label, sub, eur, risk, riskLevel },
  ])
);
