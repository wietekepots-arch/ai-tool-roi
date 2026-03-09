import { TOOL_CONFIG } from '../config/tools'

export default function ToolComparisonTable() {
  return (
    <section>
      <h2>Tool Limits and Model Comparison</h2>
      <p style={{ color: 'var(--muted)', fontSize: 12, marginBottom: 16 }}>
        Side-by-side view of model class, speed vs reasoning profile, and how fast each setup burns through limits.
      </p>

      <div className="comparison-table-wrap">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Tool (Pricing Tier)</th>
              <th>Model Used</th>
              <th>Closest Equivalent</th>
              <th>Fast vs High Reasoning</th>
              <th>Rate Limits</th>
              <th>Burn Through Limits</th>
              <th>What Happens at Limit</th>
              <th>IDE Autocomplete After Cap</th>
              <th>Models Available After Cap</th>
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
        <strong>Legend:</strong> <strong>Yes</strong> = remains available on the paid plan.{' '}
        <strong>Conditional</strong> = available only until spending cap/usage billing limit is reached.{' '}
        <strong>No</strong> = blocked until reset, upgrade, or paid credits.
      </p>
    </section>
  )
}
