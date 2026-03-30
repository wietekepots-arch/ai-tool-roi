import { useState } from "react";
import { TOOL_CONFIG } from "../config/tools";

const FINDINGS = [
  {
    toolKey: "codex",
    status: "warn",
    statusLabel: "Wordt onderzocht",
    verdict:
      "Behouden voor afgebakend async werk; niet positioneren als primaire redeneerlaag.",
    judgmentDetail:
      "Codex is vooral waardevol voor achtergrond- en wachtrijtaken: repo-breed zoeken, repetitieve refactors en edits terwijl implementatie doorloopt. Voor zwaar redeneerwerk haalt het niet het niveau van Opus, maar voor Sonnet-niveau taken werkt het betrouwbaar. De huidige ruime preview-capaciteit voelt nog als bonus; gebruik die dus niet als vaste baseline voor planning.",
    recommendation:
      "Houd in de stack voor async agentwerk en queue-based taken, maar review maandelijks of quota en prijsbeleid stabiel blijven.",
    whatFor:
      "Async agents voor repo-breed zoeken, bestaande code refactoren, ondersteuning bij code review en repetitieve edits terwijl ik gefocust blijf op implementatie. Ik gebruik het voor afgebakende taken met een duidelijke scope, review elke wijziging en merge pas nadat lint, tests en normale code review slagen.",
    goodAt:
      "Sterk in taken met hoog volume die anders de hoofdflow van development zouden onderbreken. Betrouwbaar als achtergrondwerker terwijl implementatie parallel doorgaat; tot nu toe geen onderbrekingen door rate limits gezien, ook niet bij intensief dagelijks gebruik. Werkt over IDE-omgevingen heen, waardoor de workflow portable blijft.",
    concerns:
      "Quota en beleid uit de previewfase kunnen nog veranderen en maken planning minder zeker. Async agents over meerdere bestanden zijn de grootste verbruiker; te veel grote taken tegelijk batchen jaagt quota het snelst op. Als throttling optreedt, schakel ik voor interactief werk over naar VS Code + Claude/Copilot en houd ik Codex voor wachtrijen op de achtergrond.",
    pros: [
      "Geen onderbrekingen door rate limits bij intensief dagelijks gebruik",
      "Betrouwbare achtergrondwerker terwijl development doorgaat",
      "Werkt over IDE-omgevingen heen; workflow blijft portable",
      "Sterk voor repetitieve taken met hoog volume",
    ],
    cons: [
      "Previewquota en beleid kunnen zonder aankondiging veranderen",
      "Minder autonoom wanneer bestandssysteemtoegang beperkt is",
      "Tijdelijke throughput-boosts kunnen een verkeerd delivery-baseline geven",
    ],
  },
  {
    toolKey: "cursor",
    status: "danger",
    statusLabel: "Nu gepauzeerd",
    verdict:
      "Nu niet geschikt als standaard teamtool; de waarde valt te snel weg zodra caps of overages in beeld komen.",
    judgmentDetail:
      "Zodra de inbegrepen teamcap op is, zakt Cursor terug naar een veel zwakkere editorervaring: premiummodellen verdwijnen, fallbackkwaliteit zakt en de workflow verliest continuiteit. Grote contexten en agentloops maken dat risico te concreet voor teams die capaciteit vooraf willen plannen.",
    recommendation:
      "Alleen opnieuw beoordelen als per-seat facturatie, quota en fallbackgedrag voorspelbaar genoeg worden voor sprintplanning.",
    whatFor:
      "All-in-one editorworkflow met ingebouwde AI-codingfeatures voor snelle interactieve implementatie. Nu gepauzeerd; ik gebruik het alleen nog in gerichte evaluatiesessies, niet voor fulltime deliverywerk.",
    goodAt:
      "Productieve editor-native workflows zolang gebruik binnen voorspelbare limieten blijft. Kan iteraties versnellen bij korte, gefocuste codingtaken waar IDE-integratie contextwissels vermindert.",
    concerns:
      "Grote contexten en herhaalde agent-loops verbruiken snel credits, vooral met premium modelinstellingen. Bij het bereiken van de limiet zakt productiviteit hard weg omdat zowel fallbackkwaliteit als workflowcontinuiteit verslechteren. Gedeelde teamcaps geven concurrentierisico en wijzigingen in facturatie of quota kunnen capaciteit plots raken.",
    pros: [
      "Productieve editor-native workflow binnen voorspelbare limieten",
      "Snelle iteratie op korte, gefocuste codingtaken",
    ],
    cons: [
      "Creditverbruik kan midden in een sprint tot modeldowngrades leiden",
      "Gedeelde teamcaps veroorzaken concurrentie en planningsonzekerheid",
      "Minder portable bij terugschakelen naar gewone VS Code",
    ],
  },
  {
    toolKey: "claudePro",
    status: "accent",
    statusLabel: "Huidige dagelijkse basis",
    verdict:
      "Beste huidige standaard voor consistente delivery: voorspelbaar, portable en makkelijk inzetbaar over projecten heen.",
    judgmentDetail:
      "De vaste seat-prijs en het verschil tussen Sonnet voor flow en Opus voor diepte maken Claude nog steeds de meest stabiele redeneerlaag in deze stack. De limieten zijn niet oneindig, maar wel duidelijk genoeg om er een dagelijkse werkwijze omheen te bouwen zonder IDE-lock-in.",
    recommendation:
      "Gebruik als primaire redeneer- en analyse-laag, met Copilot of Codex als overloop wanneer het 5-uursvenster onder druk staat.",
    whatFor:
      "Dagelijkse implementatie, architectuurwerk en lastige debugging waar beter redeneervermogen telt. Sonnet is de standaard voor snelle flow; Opus reserveer ik voor diepere analyse of moeilijke refactors. Ik houd prompts kort en context strak om het 5-uursvenster niet onnodig op te branden.",
    goodAt:
      "Voorspelbare vaste maandkosten met betrouwbare modelkwaliteit. De duidelijke scheiding tussen Sonnet (snelheid) en Opus (diepte) maakt het makkelijk om modelkeuze op taakzwaarte af te stemmen. Portable over omgevingen heen, zonder IDE-lock-in.",
    concerns:
      "Capaciteit kan snel verdwijnen op dagen met veel Opus-gebruik. Verbruik loopt hard op bij lange threads. Als ik de 5-uurscap nader, verschuif ik werk naar Copilot of Codex en bewaar ik Claude alleen voor kritieke prompts. Dynamische limietaanpassingen kunnen bruikbare throughput veranderen zonder dat het plan wijzigt.",
    pros: [
      "Voorspelbare vaste maandkosten",
      "Duidelijke scheiding tussen snel en diep (Sonnet / Opus)",
      "Geen IDE-lock-in; volledig portable",
    ],
    cons: [
      "Capaciteit loopt snel leeg op Opus-zware dagen",
      "Dynamische limietwijzigingen kunnen throughput onverwacht verlagen",
      "Afhankelijkheid van een enkele provider verhoogt storingsrisico",
    ],
  },
  {
    toolKey: "copilot",
    status: "accent",
    statusLabel: "Huidige dagelijkse basis",
    verdict:
      "Sterke dagelijkse IDE-basis en goed vangnet voor modelrouting, zolang premium requests bewaakt worden.",
    judgmentDetail:
      "Copilot is efficient zolang je de premiumpool bewust inzet: lichte modellen voor routinewerk, zwaardere modellen alleen voor echte pieken. Dat maakt het een goedkope hedge tegen provider-specifieke limieten, vooral omdat basischat en autocomplete blijven doorlopen wanneer de premiumpool opraakt.",
    recommendation:
      "Gebruik als primaire IDE-laag en combineer met Claude voor dieper redeneerwerk in plaats van alles uit dezelfde premium pool te trekken.",
    whatFor:
      "Fallback en burst-capaciteit wanneer Claude- of Codex-vensters onder druk staan. Ik begin standaard met modellen met laag verbruik en schakel alleen naar duurdere modellen als de complexiteit van de taak dat rechtvaardigt.",
    goodAt:
      "Uitstekende modelbreedte voor een lage vaste maandprijs: Sonnet, Opus en Codex-varianten op een plek. Codex Mini met 0,33x multiplier geeft veel capaciteit voor routinetaken. Een sterke hedge tegen limietproblemen bij een enkele provider.",
    concerns:
      "De premium request-pool kan snel verdwijnen als Opus te losjes wordt gebruikt. Verbruik hangt sterk af van het model: Opus kost 3x terwijl Codex Mini 0,33x kost. Ongemonitord gebruik van multipliers kan ongemerkt het grootste deel van het maandbudget opsouperen. Wijzigingen in modelmultipliers kunnen de effectieve capaciteit veranderen terwijl de prijs van het plan gelijk blijft.",
    pros: [
      "Brede modeltoegang voor een lage vaste prijs",
      "Sterke hedge tegen uitval van een enkele provider",
      "Codex Mini verlengt capaciteit tegen 0,33x kosten",
    ],
    cons: [
      "Premium pool raakt snel leeg bij nonchalant Opus-gebruik",
      "Multiplierwijzigingen kunnen effectieve capaciteit stilletjes verkleinen",
    ],
  },
  {
    toolKey: "googleAntigravity",
    status: "warn",
    statusLabel: "Aanvulling, geen basis",
    verdict:
      "Bewezen niet sterk genoeg als dagelijkse basis, maar wel nuttig als aanvullende tool voor browser debugging wanneer we toch Google-credits of capaciteit hebben.",
    judgmentDetail:
      "Omdat we al in Google Workspace zitten, is dit laagdrempelig om mee te nemen zonder eerst een apart procurement-traject op te tuigen. De echte reden om het erbij te houden zit in browser debugging: localhost testen, UI-fouten reproduceren en walkthroughs terugkijken voelen sterker geïntegreerd dan bij de meeste alternatieven. Daar staat tegenover dat autocomplete voor jou niet heel sterk voelt en dat de agents in de praktijk trager reageren dan in gewone VS Code-workflows. Daarmee is inmiddels wel duidelijk dat dit niet voldoende is als dagelijkse basis, maar eerder een nuttige aanvulling als er toch al Google-credits of planruimte beschikbaar zijn.",
    recommendation:
      "Alleen aanhouden als aanvullende tool voor browser debugging en Google-native workflows; niet standaardiseren als primaire editor of hoofdstack.",
    whatFor:
      "Voor browsergestuurde debugging, localhost-validatie en testen van de agentflow over editor, terminal en browser heen. Vooral zinvol als extra tool wanneer we via Google Workspace of een bestaand plan toch al credits of capaciteit beschikbaar hebben.",
    goodAt:
      "Sterk in browser debugging en UI-verificatie: de browser-agent kan flows doorlopen, fouten visueel reproduceren en artifacts opleveren die de debugloop versnellen. Juist daar onderscheidt het zich nu het duidelijkst van de rest van de stack, en als aanvullende tool is het logisch om erbij te houden wanneer er toch Google-capaciteit beschikbaar is.",
    concerns:
      "De editor voelt nog minder volwassen dan de dagelijkse basis van Claude of Copilot: autocomplete is niet heel sterk, agents reageren trager dan in VS Code en limieten, fallback en stabiliteit zijn nog niet consistent genoeg om blind op te plannen. Daardoor is het geen serieuze kandidaat meer voor de primaire dagflow, ook niet als de instapkosten laag blijven.",
    pros: [
      "Sterk in browser debugging en localhost-validatie",
      "Past organisatorisch logisch naast een bestaande Google Workspace-stack",
      "Nuttig als aanvullende tool wanneer er toch Google-credits of capaciteit zijn",
      "Autocomplete, chat, terminal en browserflow in een product",
    ],
    cons: [
      "Autocomplete voelt zwakker dan in de dagelijkse VS Code-flow",
      "Agents reageren trager dan in VS Code",
      "Dagelijkse throughput en fallback zijn minder voorspelbaar dan bij Claude of Copilot",
      "Previewvolwassenheid blijft een risico voor deadlines",
      "Bewezen onvoldoende als vaste primaire editor in deze stack",
    ],
  },
  {
    toolKey: "gitlabDuo",
    status: "warn",
    statusLabel: "Nog in evaluatie",
    verdict:
      "Organisatorisch logisch om mee te nemen, maar nu nog geen overtuigende vervanger van Copilot in de dagelijkse IDE-flow.",
    judgmentDetail:
      "De instapdrempel is laag omdat GitLab Premium SaaS al in huis is en Duo Core daardoor beschikbaar is. Tegelijk voelt de autocomplete voor jou nog te zwak, vermoedelijk door de huidige modelkeuze onder water, en mist GitLab het praktische voordeel dat Copilot wel heeft: zelf modellen kiezen voor verschillende taken. Daarbovenop brand je door de inbegrepen $12 GitLab Credits per gebruiker per maand voor Agent Platform-features vrij snel heen, waardoor het als enige AI-tool te dun wordt voor een volledige developerflow.",
    recommendation:
      "Houd in evaluatie voor GitLab-first workflows en platformcontext, maar standaardiseer voorlopig niet als primaire IDE-tool zolang autocomplete, modelkeuze en post-credit gedrag onvoldoende overtuigen.",
    whatFor:
      "Voor evaluaties in teams die broncode, merge requests, policies en governance al in GitLab centraliseren en willen meten hoeveel extra waarde die platformcontext in IDE-suggesties en agentflows echt oplevert.",
    goodAt:
      "Logische organisatorische fit wanneer Premium toch al loopt: Duo Core zit erbij en GitLab-context kan relevant zijn voor teams die sterk vanuit GitLab werken. Voor governance, centrale instellingen en eventuele self-managed routes blijft het interessanter dan een losse editorplugin.",
    concerns:
      "Autocomplete overtuigt nog niet genoeg voor dagelijkse flow. De packaging is ook minder helder dan bij seat-tools: Duo Core en Agent Platform lopen door elkaar, terwijl de $12 maandelijkse credits voor zwaardere agent- en chatflows snel opraken. Als die credits op zijn, is er geen simpele gratis model-fallback voor de credit-based laag; als enige tool voelt dat te fragiel.",
    pros: [
      "Lage extra adoptiedrempel als GitLab Premium al aanwezig is",
      "Sterke fit voor GitLab-first governance en platformcontext",
      "Duo Core Code Suggestions zijn organisatorisch logisch om mee te evalueren",
    ],
    cons: [
      "Autocomplete voelt momenteel te zwak als dagelijkse basis",
      "Zelf modellen kiezen is minder direct dan bij Copilot",
      "$12 maandelijkse credits zijn snel op bij intensiever agentgebruik",
      "Geen duidelijke gratis fallback voor de credit-based Agent Platform-laag",
    ],
  },
];

const TOOL_BY_KEY = Object.fromEntries(
  TOOL_CONFIG.map((tool) => [tool.key, tool])
);

const STATUS_COLORS = {
  accent: "var(--accent)",
  warn: "var(--warn)",
  danger: "var(--danger)",
};

const DISPLAY_FINDINGS = [...FINDINGS].sort((a, b) => {
  if (a.toolKey === "cursor") return -1;
  if (b.toolKey === "cursor") return 1;
  return 0;
});

export default function KeyFindings() {
  const [openFindings, setOpenFindings] = useState(() => new Set(["cursor"]));

  return (
    <section>
      <div className="findings-list">
        {DISPLAY_FINDINGS.map((group) => {
          const color = STATUS_COLORS[group.status];
          const warnColor =
            STATUS_COLORS[group.status === "accent" ? "warn" : group.status];
          const tool = TOOL_BY_KEY[group.toolKey];
          const isOpen = openFindings.has(group.toolKey);
          return (
            <details
              key={group.toolKey}
              className="finding-card"
              open={isOpen}
              onToggle={(event) => {
                setOpenFindings((current) => {
                  const next = new Set(current);

                  if (event.currentTarget.open) {
                    next.add(group.toolKey);
                  } else {
                    next.delete(group.toolKey);
                  }

                  return next;
                });
              }}
              style={{
                "--finding-color": color,
                "--finding-warn-color": warnColor,
              }}
            >
              <summary className="finding-summary">
                <div className="finding-summary-main">
                  <div className="finding-summary-row">
                    <div className="finding-heading">
                      <span className="finding-title">
                        {tool?.label ?? group.toolKey}
                      </span>
                      {tool?.sub && (
                        <span className="finding-subtitle">{tool.sub}</span>
                      )}
                    </div>
                    <span className="finding-badge">{group.statusLabel}</span>
                  </div>
                  <p className="finding-summary-copy">{group.verdict}</p>
                  <p className="finding-summary-recommendation">
                    <span className="finding-summary-recommendation-label">
                      Oordeel
                    </span>
                    {group.recommendation}
                  </p>
                </div>
                <span className="finding-toggle" aria-hidden="true">
                  <span className="finding-toggle-label finding-toggle-expand">
                    Open
                  </span>
                  <span className="finding-toggle-label finding-toggle-collapse">
                    Sluit
                  </span>
                  <span className="finding-toggle-icon" />
                </span>
              </summary>

              <div className="finding-body">
                <div className="finding-decision-section">
                  <NarrativeBlock label="Waarom dit oordeel" border>
                    {group.judgmentDetail}
                  </NarrativeBlock>
                </div>

                <div className="finding-narrative-grid">
                  <NarrativeBlock label="Waar ik het voor gebruikte" border>
                    {group.whatFor}
                  </NarrativeBlock>
                  <NarrativeBlock label="Waar het goed in is" border>
                    {group.goodAt}
                  </NarrativeBlock>
                  <NarrativeBlock label="Zorgen die ik heb">
                    {group.concerns}
                  </NarrativeBlock>
                </div>

                <div className="finding-points-grid">
                  <div className="finding-points-column finding-points-column-border">
                    <div className="finding-points-label finding-points-label-accent">
                      Pluspunten
                    </div>
                    <ul className="finding-points-list">
                      {group.pros.map((item) => (
                        <li key={item} className="finding-points-item">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="finding-points-column">
                    <div className="finding-points-label finding-points-label-warn">
                      Minpunten
                    </div>
                    <ul className="finding-points-list">
                      {group.cons.map((item) => (
                        <li key={item} className="finding-points-item">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </details>
          );
        })}
      </div>
    </section>
  );
}

function NarrativeBlock({ label, border = false, children }) {
  const className = ["finding-block", border ? "finding-block-border" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className}>
      <div className="finding-block-label">{label}</div>
      <p className="finding-block-copy">{children}</p>
    </div>
  );
}
