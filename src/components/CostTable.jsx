import { COSTS, TOOL_CONFIG } from "../config/tools";

export default function CostTable({ tiers }) {
  // tiers already computed in useROI, keyed by same keys as COSTS
  const tierMap = Object.fromEntries(tiers.map((t) => [t.key, t]));

  return (
    <section>
      <h2>Volledige kostenscenario's</h2>
      <table>
        <thead>
          <tr>
            <th>Situatie</th>
            <th>Maandelijkse kosten</th>
            <th>Min. uren om quitte te draaien</th>
            <th>Risico</th>
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
        <strong>Hoe je "Min. uren om quitte te draaien" leest:</strong> Dit is
        het aantal uren dat je per maand moet besparen om de toolkosten terug
        te verdienen tegen jouw uurtarief. Alles daarboven is pure
        productiviteitswinst voor het bedrijf. Zelfs ChatGPT Pro voor
        EUR 190 per maand vraagt maar <em>ongeveer 2,5 uur per maand</em>, dus
        grofweg 30 minuten per week.
      </div>
    </section>
  );
}
