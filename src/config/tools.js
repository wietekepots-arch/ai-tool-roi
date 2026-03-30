export const TOOL_CONFIG = [
  // Claude
  {
    key: "claudePro",
    label: "Claude Team {$30/user/mo}",

    usd: "$30",
    eur: 28,
    modelUsed: "Claude Sonnet 4.6, Claude Opus 4.6",
    modelEquivalent:
      "Native Claude-stack (Sonnet = snelheid, Opus = dieper redeneren)",
    workloadProfile: "Sonnet voor snelle flow, Opus voor zwaarder redeneerwerk",
    limits:
      "Team: ~225+ berichten/5u voor korte chats (5x Pro-quota); priority access; reset elke 5u; adminconsole, SSO, centrale facturatie",
    burnRate:
      "Gemiddeld: meer ruimte dan Pro; Opus en chats met lange context verbruiken quota nog steeds sneller",
    limitHit:
      "Waarschuwing bij lage resterende capaciteit, daarna geblokkeerd tot de reset na 5u",
    ideCompletionsAtLimit: "Nee - geen native IDE-autocomplete in dit plan",
    modelsAfterLimit: "Geen tot het venster van 5 uur reset",
    risk: "Laag - vaste prijs per seat",
    riskLevel: "accent",
  },
  {
    key: "claudeTeamPremium",
    label: "Claude Team — Premium Seat {$100/user/mo}",
    usd: "$100",
    eur: 95,
    modelUsed: "Claude Sonnet 4.6, Claude Opus 4.6",
    modelEquivalent: "Native Claude-stack met sessiebudget van de Max-tier",
    workloadProfile:
      "Veel redeneerdiepte met veel groter bruikbaar sessiebudget; geschikt voor zwaar dagelijks agentgebruik",
    limits:
      "Max 5x-seat: ~225+ berichten/5u (5x Pro-basis, gelijk aan Claude Max 5x); priority access; reset elke 5u; volledige Team-adminconsole, SSO, centrale facturatie",
    burnRate:
      "Gemiddeld: veel meer ruimte dan de basis Team-seat, maar zware Opus-sessies en lange contexten lopen nog steeds sneller leeg",
    limitHit:
      "Je raakt de sessiecap en wacht op reset na 5u; geen overage, je blijft binnen de seat-tier",
    ideCompletionsAtLimit: "Nee - geen native IDE-autocomplete in dit plan",
    modelsAfterLimit: "Geen tot het venster van 5 uur reset",
    risk: "Laag - vaste prijs per seat",
    riskLevel: "accent",
  },
  // ChatGPT
  {
    key: "codex",
    label: "ChatGPT Team {$30/user/mo}",
    usd: "$30",
    eur: 28,
    modelUsed:
      "GPT-5.3-Codex (medium/high), GPT-5.1-Codex-Mini (simpele taken)",
    modelEquivalent:
      "Dichtstbijzijnde praktische equivalent: klasse Claude Sonnet 4.6",
    workloadProfile:
      "Snel genoeg voor iteratie, sterker redeneervermogen in high mode",
    limits:
      "Team Codex: ~90-450 lokale berichten/5u of ~20-120 cloudtaken/5u (2x Plus-quota), wekelijkse cap van toepassing; 5.1-Codex-Mini geeft ~4x lokale capaciteit",
    burnRate:
      "Gemiddeld-hoog: high mode en lange agenttaken verbruiken quota veel sneller dan mini",
    limitHit:
      "Binnen het inbegrepen Team-quota stopt Codex tot de reset van het 5-uurs- of weekvenster, tenzij je betaalde credits activeert.",
    ideCompletionsAtLimit:
      "Nee - Codex stopt bij de inbegrepen cap (gaat weer verder na reset of betaalde credits)",
    modelsAfterLimit:
      "Geen binnen het inbegrepen quota; dezelfde Codex-modellen komen pas terug na reset of betaalde credits",
    risk: "Laag - vaste prijs per seat; dataprivacy, geen training op gesprekken",
    riskLevel: "accent",
  },
  {
    key: "chatgptPro",
    label: "ChatGPT Enterprise {~$60/user/mo}",
    usd: "~$60",
    eur: 57,
    modelUsed:
      "GPT-5.3-Codex, GPT-5.1-Codex-Mini, top-tier ChatGPT models, extended 128k context",
    modelEquivalent:
      "Frontier GPT-klasse met enterprise-controls en hogere throughput",
    workloadProfile:
      "Zeer hoge throughput voor langdurig zwaar gebruik; sterk redeneren zonder betekenisvolle soft caps",
    limits:
      "Enterprise: zeer hoge gebruikslimieten (geen vaste berichtencap op kernmodellen onder fair use); uitgebreide contextvensters van 128k; volledige Codex-toegang; SOC 2 Type II, SAML SSO, SCIM provisioning, domeinverificatie, private workspace, geavanceerde usage analytics",
    burnRate:
      "Laag ten opzichte van de limieten: inbegrepen modellen zijn praktisch ongelimiteerd; Codex-cloudtaken tellen nog wel mee voor de wekelijkse cap",
    ideCompletionsAtLimit:
      "Nee - de Codex IDE-agent stopt bij de wekelijkse cap (gaat weer verder na reset of betaalde credits)",
    modelsAfterLimit:
      "Kernmodellen van GPT blijven beschikbaar; Codex-cloudtaken pauzeren tot de wekelijkse reset",
    risk: "Gemiddeld - maatwerkcontract, prijs hangt af van org-grootte en onderhandeling",
    riskLevel: "warn",
  },
  // GitHub Copilot
  {
    key: "copilot",
    label: "GitHub Copilot Business {$19/user/mo}",
    usd: "$19",
    eur: 18,
    modelUsed:
      "Claude Sonnet 4.6, Claude Opus 4.6, GPT-5.3-Codex, GPT-5.1-Codex-Mini",
    modelEquivalent:
      "Modelrouter met meerdere providers en zakelijke datacontroles",
    workloadProfile:
      "Zeer snel voor routinecoding; premiummodellen voor pieken in redeneerwerk",
    limits:
      "Business: 300 premium requests/maand (reset op de 1e). Inbegrepen modellen hebben ongelimiteerde chat/completions. Extra's: IP-indemnity, geen training op je code, SAML SSO, beleidsbeheer, content exclusions, auditlogs",
    limitHit:
      "Requests naar premiummodellen stoppen tenzij betaalde overage actief is; fallback naar inbegrepen modellen",
    ideCompletionsAtLimit:
      "Ja - basis Copilot-autocomplete/chat blijft actief met een Business-abonnement",
    modelsAfterLimit:
      "Inbegrepen Copilot-modellen blijven; premiummodellen (Sonnet/Opus/Codex-familie) stoppen",
    risk: "Laag - vaste prijs per seat",
    riskLevel: "accent",
  },
  {
    key: "copilotEnterprise",
    label: "GitHub Copilot Enterprise {$39/user/mo}",
    usd: "$39",
    eur: 37,
    modelUsed:
      "Claude Sonnet 4.6, Claude Opus 4.6, GPT-5.3-Codex, GPT-5.1-Codex-Mini, org fine-tuned models",
    modelEquivalent:
      "Zakelijke modelrouter met meerdere providers + custom/fine-tuned org-modellen",
    workloadProfile:
      "Alle Copilot Business-mogelijkheden plus knowledge bases, custom modellen en diepere GitHub-integratie",
    limits:
      "Enterprise: 1000 premium requests/maand per gebruiker (reset op de 1e). Extra's: knowledge bases voor codebasecontext, custom fine-tuned modellen, GitHub.com Copilot Chat, uitgebreide contextvensters, enterprise auditlogs en usage reporting, IP-indemnity, SAML SSO",
    limitHit:
      "Requests naar premiummodellen stoppen tenzij betaalde overage actief is; fallback naar inbegrepen modellen",
    ideCompletionsAtLimit:
      "Ja - basis Copilot-autocomplete/chat blijft actief met een Enterprise-abonnement",
    modelsAfterLimit:
      "Inbegrepen en org fine-tuned modellen blijven; modellen uit de premium request-pool stoppen",
    risk: "Laag - vaste prijs per seat",
    riskLevel: "accent",
  },
  // Google
  {
    key: "googleAntigravity",
    label: "Google Antigravity {$0/user/mo tijdens evaluatie}",
    sub: "Nuttige add-on als we via Google Workspace toch credits of planruimte hebben",
    usd: "$0",
    eur: 0,
    modelUsed:
      "Gemini 3 en Gemini 2.5 in previewkanalen, plus browser-agent voor lokale tests",
    modelEquivalent:
      "Gemini-stack gericht op browsergestuurde debugging, met editor- en terminalhulp als secundaire laag",
    workloadProfile:
      "Vooral interessant als aanvullende tool voor browser debugging op localhost en visuele validatie; niet sterk genoeg als dagelijkse basis omdat autocomplete minder sterk voelt en agents trager reageren dan in gewone VS Code-workflows",
    limits:
      "Individual-plan: $0/maand met onbeperkte Tab completions en Command requests plus genereuze wekelijkse limieten. Voor teamuitrol bestaat een pad via Google Workspace, maar hogere businesscaps hangen van licentie en rollout af.",
    burnRate:
      "Alleen aantrekkelijk als extra toevoeging wanneer er al Google-credits of planruimte zijn. De praktische throughput blijft minder voorspelbaar dan bij Copilot of Claude, en de agentflow voelt in gebruik trager dan in gewone VS Code-workflows.",
    limitHit:
      "Bij het gratis plan wacht je op de reset van de weeklimiet of stap je over naar een betaald plan; er is geen eenvoudige publieke premium-pool zoals bij Copilot.",
    ideCompletionsAtLimit:
      "Nee - gratis editorfuncties pauzeren zodra de weeklimiet op is en hervatten na reset of upgrade",
    modelsAfterLimit:
      "Geen duidelijk gepubliceerde fallbackmatrix; praktische beschikbaarheid hangt af van plan, releasekanaal en quota",
    risk: "Geschikt als add-on, niet als primaire dagtool",
    riskLevel: "warn",
  },
  // GitLab
  {
    key: "gitlabDuo",
    label:
      "GitLab Duo voor VS Code {Premium $29/user/mo + Duo Core, $12 credits}",
    usd: "$29 /user/mo + usage voor Agent Platform",
    eur: null,
    eurLabel: "Premium + usage-based credits",
    modelUsed:
      "Duo Core Code Suggestions plus GitLab-managed of self-hosted modellen via AI Gateway voor Agent Platform",
    modelEquivalent:
      "GitLab-native suggestions met platformcontext; minder expliciete modelkeuze dan bij Copilot",
    workloadProfile:
      "Interessant als GitLab al de primaire deliveryhub is; minder overtuigend als standalone IDE-tool door zwakkere autocomplete en minder directe modelkeuze",
    limits:
      "Premium SaaS kost $29/user/mo billed annually en bevat Duo Core plus $12 GitLab Credits/user/mo voor Duo Agent Platform. Code Suggestions-context tot 32k tokens, generatiecontext tot 80k tokens; outputlimiet 64 tokens voor completion en 2048 tokens voor generatie.",
    burnRate:
      "Autocomplete zelf is licht, maar de $12 credits lopen snel leeg bij agentic chat en andere Agent Platform-features; als enige AI-tool is dat krap voor een volledige developerflow",
    limitHit:
      "Na verbruik van inbegrepen credits stopt de credit-based Agent Platform-laag tenzij extra credits of on-demand billing actief zijn. Duo Core Code Suggestions valt in een aparte packaginglaag met eigen usage limits, maar GitLab documenteert post-limit gedrag minder helder dan Copilot.",
    ideCompletionsAtLimit:
      "Voorwaardelijk - als Agent Platform-credits op zijn, stoppen credit-based features; Duo Core Code Suggestions kan blijven werken binnen eigen usage limits, maar het fallbackverhaal is minder transparant dan bij Copilot",
    modelsAfterLimit:
      "Geen gratis fallback voor credit-based Agent Platform-features; Duo Core volgt een aparte limitlaag, maar zonder duidelijke publieke fallbackmatrix",
    risk:
      "Gemiddeld-hoog - packaging en post-limit gedrag zijn minder voorspelbaar dan bij pure seat-tools",
    riskLevel: "warn",
  },
  // Cursor
  {
    key: "cursor",
    label: "Cursor Teams (base only) {$40/mo}",
    usd: "$40",
    eur: 38,
    modelUsed: "Sonnet, Opus, Codex, Codex Mini, Composer 1, Auto",
    modelEquivalent: "Gemengde premium-pool + Cursor-orkestratie",
    workloadProfile:
      "Sterke interactieve snelheid; redeneervermogen hangt af van het gekozen model",
    limits:
      "Teams-seat met inbegrepen basisgebruik; zodra dat op is, ga je verder op Auto of op usage-based premium requests voor gekozen modellen.",
    burnRate:
      "Hoog: Opus, lange contexten, Composer-loops en handmatig gebruik van niet-Auto-modellen verbruiken het snelst",
    limitHit:
      "Na de inbegrepen cap ga je verder op Auto; gekozen premiummodellen vragen gebruiksafhankelijke facturatie",
    ideCompletionsAtLimit:
      "Voorwaardelijk - autocomplete blijft actief tot de bestedingslimiet is bereikt",
    modelsAfterLimit:
      "Auto- en niet-premiummodellen blijven; gekozen premiummodellen vragen gebruiksfacturatie",
    risk: "Overages zijn onvoorspelbaar",
    riskLevel: "warn",
  },
  {
    key: "cursorMax",
    label: "Cursor Teams + full overages {$160/mo max}",
    usd: "$160 max",
    eur: 152,
    modelUsed: "Sonnet, Opus, Codex, Codex Mini, Composer 1, Auto",
    modelEquivalent: "Hoogste beschikbare Cursor-modelset",
    workloadProfile: "Snel en flexibel, gericht op langdurig zwaar gebruik",
    limits:
      "Teams-seat met $40 basis plus usage tot de ingestelde teamcap; bedoeld voor zwaar gebruik, maar kosten lopen door tot die cap is bereikt.",
    burnRate:
      "Zeer hoog: zware agentworkflows verbruiken het usage-budget snel zodra je boven het inbegrepen gebruik uitkomt",
    limitHit:
      "Gebruik loopt door tot je bestedingslimiet is bereikt; daarna stoppen premium requests",
    ideCompletionsAtLimit:
      "Voorwaardelijk - autocomplete blijft beschikbaar tot de bestedingslimiet is bereikt",
    modelsAfterLimit:
      "Auto- en niet-premiummodellen blijven; gekozen premiummodellen stoppen bij de bestedingslimiet",
    risk: "Hoog - variabel + gedeelde teamcap",
    riskLevel: "danger",
  },
];

export const COSTS = Object.fromEntries(
  TOOL_CONFIG.map(({ key, label, sub, eur, eurLabel, risk, riskLevel }) => [
    key,
    { label, sub, eur, eurLabel, risk, riskLevel },
  ])
);
