import { TOOL_CONFIG } from '../config/tools'

export default function ToolComparisonTable() {
  return (
    <section>
      <h2>Vergelijking van toollimieten en modellen</h2>
      <p style={{ color: 'var(--muted)', fontSize: 12, marginBottom: 16 }}>
        Overzicht naast elkaar van modelklasse, snelheid versus redeneervermogen
        en hoe snel elke setup zijn limieten verbruikt.
      </p>

      <div className="comparison-table-wrap">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Tool (prijstier)</th>
              <th>Gebruikt model</th>
              <th>Dichtstbijzijnde equivalent</th>
              <th>Snel versus zwaar redeneren</th>
              <th>Gebruikslimieten</th>
              <th>Verbruik van limieten</th>
              <th>Wat gebeurt er op de limiet</th>
              <th>IDE-autocomplete na de limiet</th>
              <th>Beschikbare modellen na de limiet</th>
            </tr>
          </thead>
          <tbody>
            {TOOL_CONFIG.map(tool => (
              <tr key={tool.key}>
                <td>
                  <strong>{tool.label}</strong>
                  {tool.sub && <><br /><span className="muted">{tool.sub}</span></>}
                </td>
                <td>{tool.modelUsed}</td>
                <td>{tool.modelEquivalent}</td>
                <td>{tool.workloadProfile}</td>
                <td>{tool.limits}</td>
                <td className={tool.riskLevel}>{tool.burnRate}</td>
                <td>{tool.limitHit}</td>
                <td>{tool.ideCompletionsAtLimit}</td>
                <td>{tool.modelsAfterLimit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ color: 'var(--muted)', fontSize: 11, marginTop: 10 }}>
        <strong>Legenda:</strong> <strong>Ja</strong> = blijft beschikbaar binnen
        het betaalde plan. <strong>Voorwaardelijk</strong> = alleen beschikbaar
        tot de bestedingslimiet of gebruiksfacturatie is bereikt.{' '}
        <strong>Nee</strong> = geblokkeerd tot reset, upgrade of betaalde credits.
      </p>
    </section>
  )
}
