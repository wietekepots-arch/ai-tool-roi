const RESEARCH = [
  { source: 'Intern GitHub-onderzoek',       gain: '55% sneller',              funder: 'Microsoft/GitHub', task: 'Afgebakende losse taken',        type: 'vendor'      },
  { source: 'Google / Sundar Pichai',        gain: '~10% meer snelheid',       funder: 'Google',           task: 'Hele engineeringorganisatie',   type: 'vendor'      },
  { source: 'Microsoft marktonderzoek 2025', gain: 'Gemiddeld 3,5x ROI',       funder: 'Microsoft',        task: 'M365 + Copilot-gebruikers',     type: 'vendor'      },
  { source: 'METR RCT (jul 2025)',           gain: '−19% (trager)',            funder: 'Onafhankelijk',    task: 'Volwassen repo\'s, ervaren devs',type: 'independent' },
  { source: 'Faros AI (10.000+ devs)',       gain: 'Meer code, meer bugs',     funder: 'Onafhankelijk',    task: 'Echte teams, delivery-metrics', type: 'independent' },
  { source: 'Stack Overflow Survey 2025',    gain: '52% zegt "positief"',      funder: 'Onafhankelijk',    task: 'Zelfrapportage, 65.000 devs',   type: 'mixed'       },
  { source: 'Index.dev aggregatie 2026',     gain: 'Gemiddeld 10-30%',         funder: 'Gemengde bronnen', task: 'Coding, testen, docs',          type: 'mixed'       },
]

const GAIN_COLOR   = { vendor: 'accent', independent: 'danger', mixed: 'warn' }
const BADGE_CLASS  = { vendor: 'badge badge-vendor', independent: 'badge badge-independent', mixed: 'badge badge-mixed' }
const BADGE_LABEL  = { vendor: 'Vendor - voorzichtig gebruiken', independent: 'Onafhankelijk - meest streng', mixed: 'Gemengd - geaggregeerd' }

export default function ResearchTable() {
  return (
    <section>
      <h2>Reality check op onderzoek</h2>
      <p style={{ color: 'var(--muted)', fontSize: 12, marginBottom: 16 }}>
        Het percentage productiviteitswinst dat je gebruikt in je businesscase
        bepaalt of die geloofwaardig is. Dit is wat het onderzoek echt zegt en
        wie het heeft gefinancierd.
      </p>

      <table>
        <thead>
          <tr>
            <th>Studie / bron</th>
            <th>Geclaimde winst</th>
            <th>Gefinancierd door</th>
            <th>Type taak</th>
            <th>Geloofwaardigheid</th>
          </tr>
        </thead>
        <tbody>
          {RESEARCH.map(r => (
            <tr key={r.source}>
              <td>{r.source}</td>
              <td className={GAIN_COLOR[r.type]}>{r.gain}</td>
              <td>{r.funder}</td>
              <td className="muted">{r.task}</td>
              <td><span className={BADGE_CLASS[r.type]}>{BADGE_LABEL[r.type]}</span></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="note" style={{ marginTop: 16 }}>
        <strong>Aanbevolen percentage richting je manager: 15-20%.</strong> Dat
        zit midden in de geloofwaardige bandbreedte, sluit aan op echte
        praktijksituaties in plaats van labomstandigheden, en houdt stand als
        iemand doorvraagt. De METR-uitkomst van -19% geldt specifiek voor{' '}
        <em>ervaren developers op volwassen codebases</em>. Dat is relevant,
        maar je kunt daartegenover zetten dat async agents zoals Codex
        achtergrondtaken overnemen in plaats van je flow te onderbreken.
      </div>
    </section>
  )
}
