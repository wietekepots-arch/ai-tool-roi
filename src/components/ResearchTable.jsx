const RESEARCH = [
  { source: 'GitHub internal study',       gain: '55% faster',           funder: 'Microsoft/GitHub', task: 'Scoped single tasks',          type: 'vendor'      },
  { source: 'Google / Sundar Pichai',      gain: '~10% velocity',        funder: 'Google',           task: 'Engineering org-wide',         type: 'vendor'      },
  { source: 'Microsoft 2025 market study', gain: '3.5× ROI average',     funder: 'Microsoft',        task: 'M365 + Copilot users',         type: 'vendor'      },
  { source: 'METR RCT (Jul 2025)',         gain: '−19% (slower)',        funder: 'Independent',      task: 'Mature repos, experienced devs',type: 'independent' },
  { source: 'Faros AI (10,000+ devs)',     gain: 'More code, more bugs', funder: 'Independent',      task: 'Real teams, delivery metrics', type: 'independent' },
  { source: 'Stack Overflow Survey 2025',  gain: '52% say "positive"',   funder: 'Independent',      task: 'Self-reported, 65,000 devs',   type: 'mixed'       },
  { source: 'Index.dev 2026 aggregation',  gain: '10–30% average',       funder: 'Mixed sources',    task: 'Coding, testing, docs',        type: 'mixed'       },
]

const GAIN_COLOR   = { vendor: 'accent', independent: 'danger', mixed: 'warn' }
const BADGE_CLASS  = { vendor: 'badge badge-vendor', independent: 'badge badge-independent', mixed: 'badge badge-mixed' }
const BADGE_LABEL  = { vendor: 'Vendor — use with caution', independent: 'Independent — most rigorous', mixed: 'Mixed — aggregated' }

export default function ResearchTable() {
  return (
    <section>
      <h2>Research Reality Check</h2>
      <p style={{ color: 'var(--muted)', fontSize: 12, marginBottom: 16 }}>
        The productivity gain % you use in your business case determines whether it's credible.
        Here's what the research actually says — and who funded it.
      </p>

      <table>
        <thead>
          <tr>
            <th>Study / Source</th>
            <th>Claimed Gain</th>
            <th>Funded by</th>
            <th>Task Type</th>
            <th>Credibility</th>
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
        <strong>Recommended % to use with your manager: 15–20%.</strong> This sits in the middle
        of the credible range, reflects real-world (not lab) conditions, and holds up to scrutiny
        if challenged. The METR study's −19% finding applies specifically to{' '}
        <em>experienced developers on mature codebases</em> — relevant for you, but can be countered
        by noting that async agents (like Codex) offload background tasks rather than interrupt your flow.
      </div>
    </section>
  )
}
