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
    statusLabel: "Nog in evaluatie",
    verdict:
      "Interessante VS Code-kandidaat, maar nog onvoldoende transparant om nu als vaste standaard te kiezen.",
    judgmentDetail:
      "De combinatie van autocomplete, chat en terminalhulp in een Google-stack is aantrekkelijk, vooral voor teams met veel Google Cloud-context. Zolang harde quota, fallback en praktische throughput minder zichtbaar zijn dan bij Copilot of Claude, blijft het lastig om de werkelijke dagelijkse capaciteit betrouwbaar te modelleren.",
    recommendation:
      "Alleen verder testen in echte repo's; pas opnemen als limieten, fallback en kwaliteit in dagelijkse flow beter voorspelbaar blijken.",
    whatFor:
      "Voor gerichte evaluaties van editor-native autocomplete, comment-gedreven codegeneratie en terminalassistentie via Gemini CLI. Vooral relevant als snelle inline hulp en brede Google-integratie belangrijker zijn dan zware multi-agent orchestration.",
    goodAt:
      "Sterk verhaal voor teams die al in Google Cloud, Firebase of Apigee werken. Een ruime context, autocomplete, chat en terminal in een licentie maken het aantrekkelijk als je een Google-native developerstack wilt testen.",
    concerns:
      "Publieke informatie over harde IDE-quotacaps en fallbackgedrag is minder concreet dan bij Copilot of Claude. Daardoor is het lastiger om vooraf in te schatten hoeveel dagelijkse throughput je echt koopt en wat er precies gebeurt als je grenzen raakt.",
    pros: [
      "Autocomplete, chat en terminalworkflow in een product",
      "Sterke fit voor teams met veel Google Cloud-context",
      "Ruim contextvenster voor grotere bestanden en prompts",
    ],
    cons: [
      "Minder transparante limietcommunicatie dan de meeste directe concurrenten",
      "Fallback na quota is minder duidelijk vooraf te modelleren",
      "Nog niet bewezen als vaste dagelijkse basis in deze stack",
    ],
  },
  {
    toolKey: "gitlabDuo",
    status: "warn",
    statusLabel: "Context-afhankelijk",
    verdict:
      "Alleen logisch in een GitLab-first organisatie; als losse developertool is het prijs- en platformmodel te zwaar.",
    judgmentDetail:
      "GitLab Duo kan interessant zijn wanneer governance, self-managed hosting en platformcontext belangrijker zijn dan pure modelkeuze. Voor een losse VS Code-autocomplete-oplossing blijft het minder aantrekkelijk, omdat prijsstructuur, toegangslagen en fallback minder direct te begrijpen zijn dan bij seat-tools.",
    recommendation:
      "Overweeg alleen als GitLab al het centrum van je deliveryproces is; anders liever een eenvoudigere seat-tool met duidelijkere limieten.",
    whatFor:
      "Voor evaluaties in teams die broncode, reviews, policies en governance al in GitLab centraliseren en IDE-suggesties zo dicht mogelijk op die platformcontext willen houden.",
    goodAt:
      "Logische fit voor GitLab-first organisaties. Code Suggestions sluit aan op bestaande GitLab-processen en kan interessanter worden als self-managed hosting, compliance of centrale controle belangrijker is dan pure modelkeuzevrijheid.",
    concerns:
      "De prijsstructuur is minder simpel dan een losse seat-tool en hangt af van Premium of Ultimate plus Duo-toegang of credits. Daarnaast is de modelkeuze abstracter en zijn de completion- en generatielimieten functioneler, maar minder ruim dan sommige andere tools in deze vergelijking.",
    pros: [
      "Sterke governance-fit voor GitLab-gecentreerde teams",
      "Kan goed aansluiten op self-managed en compliance-eisen",
      "Platformcontext kan waardevol zijn binnen een bestaande GitLab-stack",
    ],
    cons: [
      "Minder aantrekkelijk als standalone VS Code-autocomplete",
      "Prijs- en gebruiksmodel is complexer dan vaste seat-tools",
      "Modelrouting en fallback zijn minder direct inzichtelijk voor developers",
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

export default function KeyFindings() {
  return (
    <section>
      <div className="findings-list">
        {FINDINGS.map((group) => {
          const color = STATUS_COLORS[group.status];
          const warnColor =
            STATUS_COLORS[group.status === "accent" ? "warn" : group.status];
          const tool = TOOL_BY_KEY[group.toolKey];
          return (
            <details
              key={group.toolKey}
              className="finding-card"
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
                      Advies
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
                <div className="finding-decision-grid">
                  <NarrativeBlock
                    label="Waarom dit oordeel"
                    labelColor="var(--finding-color)"
                    border
                  >
                    {group.judgmentDetail}
                  </NarrativeBlock>
                  <NarrativeBlock
                    label="Aanbeveling"
                    labelColor="var(--accent)"
                  >
                    {group.recommendation}
                  </NarrativeBlock>
                </div>

                <div className="finding-narrative-grid">
                  <NarrativeBlock
                    label="Waar ik het voor gebruikte"
                    labelColor="var(--accent)"
                    border
                  >
                    {group.whatFor}
                  </NarrativeBlock>
                  <NarrativeBlock
                    label="Waar het goed in is"
                    labelColor="var(--accent)"
                    border
                  >
                    {group.goodAt}
                  </NarrativeBlock>
                  <NarrativeBlock
                    label="Zorgen die ik heb"
                    labelColor="var(--finding-warn-color)"
                  >
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

function NarrativeBlock({ label, labelColor, border = false, children }) {
  return (
    <div
      className={
        border ? "finding-block finding-block-border" : "finding-block"
      }
    >
      <div className="finding-block-label" style={{ color: labelColor }}>
        {label}
      </div>
      <p className="finding-block-copy">{children}</p>
    </div>
  );
}
