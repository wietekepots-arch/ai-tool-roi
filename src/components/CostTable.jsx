import { COSTS, TOOL_CONFIG } from "../config/tools";

export default function CostTable({ tiers }) {
  // tiers already computed in useROI, keyed by same keys as COSTS
  const tierMap = Object.fromEntries(tiers.map((t) => [t.key, t]));

  return (
    <section>
      <h2>Full Cost Scenario Table</h2>
      <table>
        <thead>
          <tr>
            <th>Scenario</th>
            <th>Monthly Cost</th>
            <th>Min. Hours to Break Even</th>
            <th>Risk</th>
          </tr>
        </thead>
        <tbody>
          {TOOL_CONFIG.map(({ key }) => {
            const t = tierMap[key];
            const c = COSTS[key];
            return (
              <tr key={key}>
                <td>
                  <strong>{c.label}</strong>
                  {c.sub && (
                    <>
                      <br />
                      <span className="muted">{c.sub}</span>
                    </>
                  )}
                </td>
                <td className={t.costColor}>€{c.eur}</td>
                <td className={t.costColor}>{t.breakEven}</td>
                <td className={c.riskLevel}>{c.risk}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="note" style={{ marginTop: 16 }}>
        <strong>How to read "Min. Hours to Break Even":</strong> This is how
        many hours you need to save per month for the tool cost to pay for
        itself at your hourly rate. Everything beyond that is pure productivity
        gain for the business. Even ChatGPT Pro at €190/month only requires
        saving <em>~2.5 hours per month</em> — roughly 30 minutes a week.
      </div>
    </section>
  );
}
