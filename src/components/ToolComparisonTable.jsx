import { useEffect, useId, useRef, useState } from "react";
import { TOOL_CONFIG } from "../config/tools";

export default function ToolComparisonTable() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef(null);
  const closeButtonRef = useRef(null);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
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
      <h2>Vergelijking van toollimieten en modellen</h2>
      <p style={{ color: "var(--muted)", fontSize: 12, marginBottom: 16 }}>
        Overzicht naast elkaar van modelklasse, snelheid versus redeneervermogen
        en hoe snel elke setup zijn limieten verbruikt.
      </p>

      <div className="comparison-callout">
        <div>
          <p className="comparison-callout-label">Interactieve weergave</p>
          <p className="comparison-callout-copy">
            Open de volledige vergelijking in een modal zodat de tabel breed kan
            blijven zonder de hoofdflow van de pagina te breken.
          </p>
        </div>

        <button
          ref={triggerRef}
          type="button"
          className="comparison-open-button"
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          aria-controls="tool-comparison-modal"
          onClick={() => setIsOpen(true)}
        >
          Open vergelijking
        </button>
      </div>

      <p style={{ color: "var(--muted)", fontSize: 11, marginTop: 10 }}>
        <strong>Legenda:</strong> <strong>Ja</strong> = blijft beschikbaar
        binnen het betaalde plan. <strong>Voorwaardelijk</strong> = alleen
        beschikbaar tot de bestedingslimiet of gebruiksfacturatie is bereikt.{" "}
        <strong>Nee</strong> = geblokkeerd tot reset, upgrade of betaalde
        credits.
      </p>

      {isOpen && (
        <div
          className="comparison-modal-backdrop"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <div
            id="tool-comparison-modal"
            className="comparison-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
          >
            <div className="comparison-modal-header">
              <div>
                <p className="comparison-callout-label">Volledige matrix</p>
                <h3 id={titleId} className="comparison-modal-title">
                  Vergelijking van toollimieten en modellen
                </h3>
                <p id={descriptionId} className="comparison-modal-copy">
                  Brede tabel met modelkeuze, quota-gedrag en fallback na het
                  raken van limieten.
                </p>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                className="comparison-close-button"
                onClick={() => setIsOpen(false)}
                aria-label="Sluit vergelijking"
              >
                Sluiten
              </button>
            </div>

            <div className="comparison-table-wrap comparison-table-wrap-modal">
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
                  {TOOL_CONFIG.map((tool) => (
                    <tr key={tool.key}>
                      <td>
                        <strong>{tool.label}</strong>
                        {tool.sub && (
                          <>
                            <br />
                            <span className="muted">{tool.sub}</span>
                          </>
                        )}
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
          </div>
        </div>
      )}
    </section>
  );
}
