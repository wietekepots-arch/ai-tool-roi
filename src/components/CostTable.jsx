import { useEffect, useId, useRef, useState } from "react";
import { COSTS, TOOL_CONFIG } from "../config/tools";

export default function CostTable({ tiers }) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef(null);
  const closeButtonRef = useRef(null);
  const titleId = useId();
  const descriptionId = useId();

  const tierMap = Object.fromEntries(tiers.map((t) => [t.key, t]));

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [isOpen]);

  return (
    <section>
      <h2>Volledige kostenscenario's</h2>
      <p style={{ color: "var(--muted)", fontSize: 12, marginBottom: 16 }}>
        Maandelijkse kosten, break-even per tool en risicoclassificatie per
        tier.
      </p>

      <div className="comparison-callout">
        <div>
          <p className="comparison-callout-label">Interactieve weergave</p>
          <p className="comparison-callout-copy">
            Open de volledige kostenmatrix in een modal voor een overzichtelijke
            zij-aan-zij vergelijking van alle tiers.
          </p>
        </div>

        <button
          ref={triggerRef}
          type="button"
          className="comparison-open-button"
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          aria-controls="cost-scenarios-modal"
          onClick={() => setIsOpen(true)}
        >
          Open kostenscenario's
        </button>
      </div>

      {isOpen && (
        <div
          className="comparison-modal-backdrop"
          onClick={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <div
            id="cost-scenarios-modal"
            className="comparison-modal cost-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
          >
            <div className="comparison-modal-header">
              <div>
                <p className="comparison-callout-label">Kostenmatrix</p>
                <h3 id={titleId} className="comparison-modal-title">
                  Volledige kostenscenario's
                </h3>
                <p id={descriptionId} className="comparison-modal-copy">
                  Maandelijkse kosten, break-even en risicoclassificatie per
                  tool en tier.
                </p>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                className="comparison-close-button"
                onClick={() => setIsOpen(false)}
                aria-label="Sluit kostenscenario's"
              >
                Sluiten
              </button>
            </div>

            <div className="comparison-table-wrap comparison-table-wrap-modal">
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
                        <td className={t.costColor}>
                          {c.eurLabel ?? `€${c.eur}`}
                        </td>
                        <td className={t.costColor}>{t.breakEven}</td>
                        <td className={c.riskLevel}>{c.risk}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div
              className="note"
              style={{
                margin: "0 22px 22px",
                borderLeft: "2px solid var(--accent)",
              }}
            >
              <strong>Hoe je "Min. uren om quitte te draaien" leest:</strong>{" "}
              Dit is het aantal uren dat je per maand moet besparen om de
              toolkosten terug te verdienen tegen jouw uurtarief. Alles
              daarboven is pure productiviteitswinst. Zelfs ChatGPT Pro voor
              EUR&nbsp;190 per maand vraagt maar{" "}
              <em>ongeveer 2,5 uur per maand</em>, dus grofweg 30 minuten per
              week.
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
