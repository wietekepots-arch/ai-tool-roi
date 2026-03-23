const VERDICTS = [
  {
    tool: 'Cursor',
    badge: 'Vermijden voor teams',
    badgeType: 'danger',
    summary:
      'Zodra de inbegrepen teamcap op is, wordt Cursor in de praktijk een kale code-editor. Autocomplete stopt, premium modeltoegang valt weg en de fallback-ervaring is duidelijk slechter dan wat de tool belooft. In de praktijk lopen teams hier vaak al binnen enkele dagen van een sprint tegenaan. Daarbovenop past Cursor prijzen en tariefstructuren soms met beperkte aankondiging aan, wat echte planningsrisico\'s geeft voor teams die capaciteit vooraf begroten.',
    recommendation:
      'Niet gebruiken als standaard teamtool. Alleen opnieuw beoordelen als er transparante per-seat facturatie en voorspelbare maandcaps komen.',
  },
  {
    tool: 'Codex (ChatGPT Plus)',
    badge: 'Behouden - alleen async werk',
    badgeType: 'warn',
    summary:
      'Codex is echt nuttig voor achtergrond- en async taken: repo-breed zoeken, repetitieve refactors en edits in de wachtrij terwijl primaire implementatie op de voorgrond doorgaat. Voor werk met zwaar redeneervermogen haalt het niet het niveau van Opus, maar taken op Sonnet-niveau verwerkt het betrouwbaar. De huidige 2x-periode is een bonus en opvallend genoeg zijn de resource monitors zelfs bij normaal gebruik nog niet in de buurt van 50% benutting gekomen. Er is dus nog ruimte om meer async werk op te nemen voor capaciteit een probleem wordt.',
    recommendation:
      'Behouden in de stack voor afgebakende, async taken met weinig onderbreking. Zie de 2x-rate als tijdelijk voordeel, niet als baseline, en let op de overgang naar standaardprijzen.',
  },
  {
    tool: 'GitHub Copilot Pro',
    badge: 'Sterke dagelijkse basis',
    badgeType: 'accent',
    summary:
      'Copilot levert autocomplete die in dagelijks gebruik vergelijkbaar is met Cursor; de in-editor ervaring is even vloeiend. Door de manier waarop token- en requestlimieten zijn ingericht, rekt premium modelcapaciteit minstens zo lang als vergelijkbare Cursor-gebruikspatronen, vaak langer. De inbegrepen modelselectie (Sonnet, Opus, Codex, Mini) dekt de meeste taaktypen zonder voortdurend de premium request-pool leeg te trekken.',
    recommendation:
      'Gebruik dit als primaire IDE-autocompletelaag. Combineer met Claude Pro voor een complete, portable developerworkflow.',
  },
  {
    tool: 'Claude Pro',
    badge: 'Combineren met Copilot',
    badgeType: 'accent',
    summary:
      'Claude Pro werkt het best als de redeneer- en agentlaag die Copilot alleen niet volledig afdekt. De premium request-pool van Copilot is royaal maar eindig. Als die terugloopt, zorgt Claude Pro als continuiteitslaag ervoor dat complex redeneerwerk, architectuurwerk en langere multi-turn sessies niet stilvallen. De twee producten vullen elkaar structureel aan: Copilot doet autocomplete en lichte inline taken, Claude doet diepte en continuiteit. Samen verkleinen ze het single-provider risico dat elke losse tool kwetsbaar maakt.',
    recommendation:
      'Gebruik naast Copilot Pro als vaste redeneerbasis. Deze combinatie dekt de volledige developerworkflow tegen een gezamenlijke kost die ruim onder de meeste team-tier alternatieven ligt.',
  },
]

const STATUS_COLORS = {
  accent: 'var(--accent)',
  warn:   'var(--warn)',
  danger: 'var(--danger)',
}

export default function Verdict() {
  return (
    <section id="verdict" className="chapter">
      <h2>Oordeel</h2>
      <p className="chapter-lead">
        Op basis van dagelijks praktijkgebruik, modelkwaliteit,
        kostenvoorspelbaarheid en gedrag bij het raken van limieten, is dit nu
        onze aanbeveling voor een praktische teamstack.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 40 }}>
        {VERDICTS.map(item => (
          <div
            key={item.tool}
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 20px',
                borderBottom: '1px solid var(--border)',
              }}
            >
              <span style={{ fontFamily: 'var(--serif)', fontSize: 15, fontWeight: 600 }}>
                {item.tool}
              </span>
              <span
                style={{
                  fontSize: 10,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: STATUS_COLORS[item.badgeType],
                  border: `1px solid ${STATUS_COLORS[item.badgeType]}`,
                  background: `color-mix(in srgb, ${STATUS_COLORS[item.badgeType]} 8%, transparent)`,
                  padding: '3px 10px',
                }}
              >
                {item.badge}
              </span>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '3px 1fr',
                borderBottom: '1px solid var(--border)',
              }}
            >
              <div style={{ background: STATUS_COLORS[item.badgeType] }} />
              <div style={{ padding: '14px 20px' }}>
                <div
                  style={{ fontSize: 12, fontWeight: 500, color: STATUS_COLORS[item.badgeType], marginBottom: 4 }}
                >
                  Beoordeling
                </div>
                <p style={{ margin: 0, fontSize: 12, color: 'var(--muted)', lineHeight: 1.7 }}>
                  {item.summary}
                </p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '3px 1fr' }}>
              <div style={{ background: 'var(--accent)' }} />
              <div style={{ padding: '14px 20px' }}>
                <div
                  style={{ fontSize: 12, fontWeight: 500, color: 'var(--accent)', marginBottom: 4 }}
                >
                  Aanbeveling
                </div>
                <p style={{ margin: 0, fontSize: 12, color: 'var(--muted)', lineHeight: 1.7 }}>
                  {item.recommendation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          border: '1px solid var(--accent)',
          background: 'color-mix(in srgb, var(--accent) 5%, transparent)',
          padding: '24px 28px',
        }}
      >
        <div
          style={{
            fontSize: 10,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: 12,
            fontWeight: 600,
          }}
        >
          Aanbevolen stack
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 16,
            marginBottom: 20,
          }}
        >
          {[
            { label: 'GitHub Copilot Pro', price: '$10 / mnd', role: 'IDE-autocomplete + inline taken' },
            { label: 'Claude Pro',         price: '$20 / mnd', role: 'Diep redeneren + workflowcontinuiteit' },
            { label: 'Codex (Plus)',       price: '$20 / mnd', role: 'Async achtergrondwerk met agents' },
          ].map(item => (
            <div
              key={item.label}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                padding: '14px 16px',
              }}
            >
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>{item.label}</div>
              <div style={{ fontSize: 11, color: 'var(--accent)', marginBottom: 6 }}>{item.price}</div>
              <div style={{ fontSize: 11, color: 'var(--muted)' }}>{item.role}</div>
            </div>
          ))}
        </div>
        <p style={{ margin: 0, fontSize: 12, color: 'var(--muted)', lineHeight: 1.7 }}>
          Bij <strong style={{ color: 'var(--fg)' }}>$50 per maand per ontwikkelaar</strong> dekt deze
          stack autocomplete, inline hulp, diep redeneren en async agentuitvoering
          zonder gedeelde teamcaps, onvoorspelbare overages of single-provider
          risico. Copilot en Claude Pro vullen elkaar structureel aan: als het
          limietvenster van de een leegloopt, bewaart de ander de continuiteit.
          Codex handelt achtergrondwerk af dat anders gefocuste implementatietijd
          zou onderbreken.
        </p>
      </div>
    </section>
  )
}
