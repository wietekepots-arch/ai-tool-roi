export const TOOL_CONFIG = [
  // Claude
  {
    key: "claudePro",
    label: "Claude Team {$30/user/mo}",
    sub: "Zakelijk teamplan",
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
    sub: "Max 5x-capaciteit binnen een Team-plan",
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
    modelsAfterLimit: "Geen tot het venster van 5 uur reset",
    risk: "Laag - vaste prijs per seat",
    riskLevel: "accent",
  },
  // ChatGPT
  {
    key: "codex",
    label: "ChatGPT Team {$30/user/mo}",
    sub: "Zakelijk teamplan - inclusief Codex",
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
    sub: "Prijs via maatwerkcontract - indicatief",
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
    sub: "300 premium requests + enterprise-controls",
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
    sub: "Alle Business-features + custom modellen",
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
    label: "Google Antigravity / Gemini Code Assist Standard {$22.80/user/mo}",
    sub: "VS Code autocomplete, chat en Gemini CLI-licentie",
    usd: "$22.80",
    eur: 22,
    modelUsed:
      "Google Gemini Code Assist-modellen; Gemini 3 genoemd voor previewkanalen",
    modelEquivalent:
      "Gemini-stack gericht op IDE-autocomplete, codegeneratie en terminalworkflows",
    workloadProfile:
      "Sterk voor snelle inline completions, comment-gedreven codegeneratie, IDE-chat en terminaltaken via Gemini CLI",
    limits:
      "Standard-seat met 1M-token contextvenster; autocomplete, chat en CLI inbegrepen. Google publiceert op de businesspagina geen simpele maandelijkse requestcap zoals Copilot of Claude.",
    burnRate:
      "Moeilijker te voorspellen: context is ruim, maar publieksinfo over harde IDE-quotacaps is beperkter dan bij de meeste concurrenten",
    limitHit:
      "Verwacht throttling of quotabeleid via licentie/account in plaats van een eenvoudige zichtbare maandcap; exacte resetregels zijn minder transparant",
    ideCompletionsAtLimit:
      "Voorwaardelijk - hangt af van Google-quota en accountbeleid, niet van een publiek vaste premium-requestpool",
    modelsAfterLimit:
      "Niet duidelijk als vaste fallbackmatrix gepubliceerd; praktische beschikbaarheid hangt af van plan, releasekanaal en quota",
    risk: "Gemiddeld - vaste prijs, maar minder transparante gebruikslimieten",
    riskLevel: "warn",
  },
  // GitLab
  {
    key: "gitlabDuo",
    label: "GitLab Duo voor VS Code {Premium/Ultimate + add-on/credits}",
    sub: "Code Suggestions in VS Code via GitLab AI Gateway",
    usd: "$29+ /user/mo + add-on/credits",
    eur: null,
    eurLabel: "Maatwerk / usage-based",
    modelUsed:
      "GitLab-managed of self-hosted modellen via AI Gateway; modelkeuze is abstracter dan bij directe modelrouters",
    modelEquivalent:
      "GitLab-native autocomplete en generatie met platformkoppeling in plaats van een expliciete modelcatalogus",
    workloadProfile:
      "Geschikt voor VS Code-autocomplete en comment-gedreven generatie, vooral in teams die al zwaar op GitLab leunen",
    limits:
      "Beschikbaar op Premium/Ultimate met Duo Core/Pro/Enterprise. Completioncontext tot 32k tokens, generatiecontext tot 80k tokens; outputlimiet 64 tokens voor completion en 2048 tokens voor generatie.",
    burnRate:
      "Autocomplete zelf is licht, maar kostenstructuur is minder seat-eenvoudig en hangt af van GitLab-plan, add-ons en in bredere Duo-scenario's credits",
    limitHit:
      "Geen eenvoudige publieke resetmatrix voor VS Code-suggesties; gedrag hangt af van Duo-toegang, netwerkroute en organisatiebeleid",
    ideCompletionsAtLimit:
      "Voorwaardelijk - afhankelijk van Premium/Ultimate-toegang, Duo-inschakeling en eventuele usage- of beleidsgrenzen",
    modelsAfterLimit:
      "Afhankelijk van GitLab-managed of self-hosted setup; geen publiek vaste fallbacktabel zoals bij Copilot of Claude",
    risk: "Gemiddeld-hoog - prijsmodel minder transparant dan pure seat-tools",
    riskLevel: "warn",
  },
  // Cursor
  {
    key: "cursor",
    label: "Cursor Teams (base only) {$40/mo}",
    sub: "$40/mnd, geen overages",
    usd: "$40",
    eur: 38,
    modelUsed: "Sonnet, Opus, Codex, Codex Mini, Composer 1, Auto",
    modelEquivalent: "Gemengde premium-pool + Cursor-orkestratie",
    workloadProfile:
      "Sterke interactieve snelheid; redeneervermogen hangt af van het gekozen model",
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
    sub: "$40 basis + $120 cap",
    usd: "$160 max",
    eur: 152,
    modelUsed: "Sonnet, Opus, Codex, Codex Mini, Composer 1, Auto",
    modelEquivalent: "Hoogste beschikbare Cursor-modelset",
    workloadProfile: "Snel en flexibel, gericht op langdurig zwaar gebruik",
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
