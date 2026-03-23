import { TOOL_CONFIG } from '../config/tools'

const FINDINGS = [
  {
    toolKey: 'codex',
    status: 'warn',
    statusLabel: 'Wordt onderzocht',
    verdict:
      'Veelbelovende dagelijkse tool, maar houd hem in maandelijkse review tot quota en prijsbeleid stabieler zijn.',
    whatFor:
      'Async agents voor repo-breed zoeken, bestaande code refactoren, ondersteuning bij code review en repetitieve edits terwijl ik gefocust blijf op implementatie. Ik gebruik het voor afgebakende taken met een duidelijke scope, review elke wijziging en merge pas nadat lint, tests en normale code review slagen.',
    goodAt:
      'Sterk in taken met hoog volume die anders de hoofdflow van development zouden onderbreken. Betrouwbaar als achtergrondwerker terwijl implementatie parallel doorgaat; tot nu toe geen onderbrekingen door rate limits gezien, ook niet bij intensief dagelijks gebruik. Werkt over IDE-omgevingen heen, waardoor de workflow portable blijft.',
    concerns:
      'Quota en beleid uit de previewfase kunnen nog veranderen en maken planning minder zeker. Async agents over meerdere bestanden zijn de grootste verbruiker; te veel grote taken tegelijk batchen jaagt quota het snelst op. Als throttling optreedt, schakel ik voor interactief werk over naar VS Code + Claude/Copilot en houd ik Codex voor wachtrijen op de achtergrond.',
    pros: [
      'Geen onderbrekingen door rate limits bij intensief dagelijks gebruik',
      'Betrouwbare achtergrondwerker terwijl development doorgaat',
      'Werkt over IDE-omgevingen heen; workflow blijft portable',
      'Sterk voor repetitieve taken met hoog volume',
    ],
    cons: [
      'Previewquota en beleid kunnen zonder aankondiging veranderen',
      'Minder autonoom wanneer bestandssysteemtoegang beperkt is',
      'Tijdelijke throughput-boosts kunnen een verkeerd delivery-baseline geven',
    ],
  },
  {
    toolKey: 'cursor',
    status: 'danger',
    statusLabel: 'Nu gepauzeerd',
    verdict:
      'Vandaag niet geschikt als standaard teamtool; alleen opnieuw beoordelen als facturatie en quotacontroles per gebruiker voorspelbaar worden.',
    whatFor:
      'All-in-one editorworkflow met ingebouwde AI-codingfeatures voor snelle interactieve implementatie. Nu gepauzeerd; ik gebruik het alleen nog in gerichte evaluatiesessies, niet voor fulltime deliverywerk.',
    goodAt:
      'Productieve editor-native workflows zolang gebruik binnen voorspelbare limieten blijft. Kan iteraties versnellen bij korte, gefocuste codingtaken waar IDE-integratie contextwissels vermindert.',
    concerns:
      'Grote contexten en herhaalde agent-loops verbruiken snel credits, vooral met premium modelinstellingen. Bij het bereiken van de limiet zakt productiviteit hard weg omdat zowel fallbackkwaliteit als workflowcontinuiteit verslechteren. Gedeelde teamcaps geven concurrentierisico en wijzigingen in facturatie of quota kunnen capaciteit plots raken.',
    pros: [
      'Productieve editor-native workflow binnen voorspelbare limieten',
      'Snelle iteratie op korte, gefocuste codingtaken',
    ],
    cons: [
      'Creditverbruik kan midden in een sprint tot modeldowngrades leiden',
      'Gedeelde teamcaps veroorzaken concurrentie en planningsonzekerheid',
      'Minder portable bij terugschakelen naar gewone VS Code',
    ],
  },
  {
    toolKey: 'claudePro',
    status: 'accent',
    statusLabel: 'Huidige dagelijkse basis',
    verdict:
      'Beste huidige standaard voor consistente delivery: voorspelbaar, portable en makkelijk inzetbaar over projecten heen.',
    whatFor:
      'Dagelijkse implementatie, architectuurwerk en lastige debugging waar beter redeneervermogen telt. Sonnet is de standaard voor snelle flow; Opus reserveer ik voor diepere analyse of moeilijke refactors. Ik houd prompts kort en context strak om het 5-uursvenster niet onnodig op te branden.',
    goodAt:
      'Voorspelbare vaste maandkosten met betrouwbare modelkwaliteit. De duidelijke scheiding tussen Sonnet (snelheid) en Opus (diepte) maakt het makkelijk om modelkeuze op taakzwaarte af te stemmen. Portable over omgevingen heen, zonder IDE-lock-in.',
    concerns:
      'Capaciteit kan snel verdwijnen op dagen met veel Opus-gebruik. Verbruik loopt hard op bij lange threads. Als ik de 5-uurscap nader, verschuif ik werk naar Copilot of Codex en bewaar ik Claude alleen voor kritieke prompts. Dynamische limietaanpassingen kunnen bruikbare throughput veranderen zonder dat het plan wijzigt.',
    pros: [
      'Voorspelbare vaste maandkosten',
      'Duidelijke scheiding tussen snel en diep (Sonnet / Opus)',
      'Geen IDE-lock-in; volledig portable',
    ],
    cons: [
      'Capaciteit loopt snel leeg op Opus-zware dagen',
      'Dynamische limietwijzigingen kunnen throughput onverwacht verlagen',
      'Afhankelijkheid van een enkele provider verhoogt storingsrisico',
    ],
  },
  {
    toolKey: 'copilot',
    status: 'accent',
    statusLabel: 'Secundaire hedge',
    verdict:
      'Gebruik als overloop en hedge voor modelrouting; erg efficient tot premium requests op zijn.',
    whatFor:
      'Fallback en burst-capaciteit wanneer Claude- of Codex-vensters onder druk staan. Ik begin standaard met modellen met laag verbruik en schakel alleen naar duurdere modellen als de complexiteit van de taak dat rechtvaardigt.',
    goodAt:
      'Uitstekende modelbreedte voor een lage vaste maandprijs: Sonnet, Opus en Codex-varianten op een plek. Codex Mini met 0,33x multiplier geeft veel capaciteit voor routinetaken. Een sterke hedge tegen limietproblemen bij een enkele provider.',
    concerns:
      'De premium request-pool kan snel verdwijnen als Opus te losjes wordt gebruikt. Verbruik hangt sterk af van het model: Opus kost 3x terwijl Codex Mini 0,33x kost. Ongemonitord gebruik van multipliers kan ongemerkt het grootste deel van het maandbudget opsouperen. Wijzigingen in modelmultipliers kunnen de effectieve capaciteit veranderen terwijl de prijs van het plan gelijk blijft.',
    pros: [
      'Brede modeltoegang voor een lage vaste prijs',
      'Sterke hedge tegen uitval van een enkele provider',
      'Codex Mini verlengt capaciteit tegen 0,33x kosten',
    ],
    cons: [
      'Premium pool raakt snel leeg bij nonchalant Opus-gebruik',
      'Multiplierwijzigingen kunnen effectieve capaciteit stilletjes verkleinen',
    ],
  },
]

const TOOL_BY_KEY = Object.fromEntries(TOOL_CONFIG.map(tool => [tool.key, tool]))

const STATUS_COLORS = {
  accent: 'var(--accent)',
  warn:   'var(--warn)',
  danger: 'var(--danger)',
}

export default function KeyFindings() {
  return (
    <section>
      <h2>Veldnotities uit dagelijkse development</h2>
      <p style={{ color: 'var(--muted)', fontSize: 12, marginBottom: 24 }}>
        Praktische observaties uit gewone codingdagen: wat delivery versnelde,
        wat frictie veroorzaakte en hoe elke tool nu in de workflow past.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        {FINDINGS.map(group => {
          const color = STATUS_COLORS[group.status]
          const warnColor = STATUS_COLORS[group.status === 'accent' ? 'warn' : group.status]
          const tool = TOOL_BY_KEY[group.toolKey]
          return (
            <div
              key={group.toolKey}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 20px',
                  borderBottom: `2px solid ${color}`,
                }}
              >
                <span style={{ fontFamily: 'var(--serif)', fontSize: 15, fontWeight: 600 }}>
                  {tool?.label ?? group.toolKey}
                </span>
                <span
                  style={{
                    fontSize: 10,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color,
                    border: `1px solid ${color}`,
                    background: `color-mix(in srgb, ${color} 8%, transparent)`,
                    padding: '3px 10px',
                  }}
                >
                  {group.statusLabel}
                </span>
              </div>

              {/* Verdict */}
              <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--border)' }}>
                <p style={{ margin: 0, fontSize: 12, color: 'var(--fg)', lineHeight: 1.7, fontStyle: 'italic' }}>
                  {group.verdict}
                </p>
              </div>

              {/* Three narrative sections */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderBottom: '1px solid var(--border)' }}>
                <NarrativeBlock label="Waar ik het voor gebruikte" labelColor="var(--accent)" border>
                  {group.whatFor}
                </NarrativeBlock>
                <NarrativeBlock label="Waar het goed in is" labelColor="var(--accent)" border>
                  {group.goodAt}
                </NarrativeBlock>
                <NarrativeBlock label="Zorgen die ik heb" labelColor={warnColor}>
                  {group.concerns}
                </NarrativeBlock>
              </div>

              {/* Pros / Cons */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                <div style={{ padding: '14px 20px', borderRight: '1px solid var(--border)' }}>
                  <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 10 }}>
                    Pluspunten
                  </div>
                  <ul style={{ margin: 0, paddingLeft: 16, display: 'grid', gap: 5 }}>
                    {group.pros.map(item => (
                      <li key={item} style={{ fontSize: 11, color: 'var(--muted)', lineHeight: 1.6 }}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div style={{ padding: '14px 20px' }}>
                  <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: warnColor, marginBottom: 10 }}>
                    Minpunten
                  </div>
                  <ul style={{ margin: 0, paddingLeft: 16, display: 'grid', gap: 5 }}>
                    {group.cons.map(item => (
                      <li key={item} style={{ fontSize: 11, color: 'var(--muted)', lineHeight: 1.6 }}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function NarrativeBlock({ label, labelColor, border = false, children }) {
  return (
    <div
      style={{
        padding: '16px 20px',
        borderRight: border ? '1px solid var(--border)' : 'none',
      }}
    >
      <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: labelColor, marginBottom: 8 }}>
        {label}
      </div>
      <p style={{ margin: 0, fontSize: 12, color: 'var(--muted)', lineHeight: 1.75 }}>
        {children}
      </p>
    </div>
  )
}
