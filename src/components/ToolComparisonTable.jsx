import { useEffect, useId, useRef, useState } from "react";
import ComparisonDetailCell from "./ComparisonDetailCell";
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
      <div className="comparison-callout">
        <div>
          <p className="comparison-callout-label">Reality check op limieten</p>
          <p className="comparison-callout-copy">
            Gebruik deze vergelijking om te zien welke tools ook na intensief
            dagelijks gebruik bruikbaar blijven. Dat verschil bepaalt of je op
            een tool kunt plannen of alleen op een demo kunt vertrouwen.
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
          Open toolvergelijking
        </button>
      </div>

      <div className="note">
        <strong>Waar je op wilt sturen:</strong> niet welk plan de meeste
        modelnamen noemt, maar welke workflow overeind blijft zodra premium
        gebruik opraakt.
      </div>

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
                  Per tool: welke modellen je krijgt, hoe het verbruik zich in
                  de praktijk gedraagt en wat er overblijft zodra je de cap
                  raakt.
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
                    <th>Tool</th>
                    <th>Modellen</th>
                    <th>Beste inzet</th>
                    <th>Quota en verbruik</th>
                    <th>Na de limiet</th>
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
                      <td>
                        <ComparisonDetailCell
                          items={[
                            { label: "Modellen", value: tool.modelUsed },
                            {
                              label: "Praktische positie",
                              value: tool.modelEquivalent,
                            },
                          ]}
                        />
                      </td>
                      <td>{tool.workloadProfile}</td>
                      <td>
                        <ComparisonDetailCell
                          items={[
                            { label: "Cap", value: tool.limits },
                            {
                              label: "In praktijk",
                              value: tool.burnRate,
                              tone: tool.riskLevel,
                            },
                          ]}
                        />
                      </td>
                      <td>
                        <ComparisonDetailCell
                          items={[
                            { label: "Direct effect", value: tool.limitHit },
                            {
                              label: "Autocomplete",
                              value: tool.ideCompletionsAtLimit,
                            },
                            {
                              label: "Wat overblijft",
                              value: tool.modelsAfterLimit,
                            },
                          ]}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="note" style={{ margin: "0 22px 22px" }}>
              <strong>Belangrijkste leeshulp:</strong> kijk eerst naar de
              laatste kolom. Daar zie je of een tool na intensief gebruik nog
              bruikbaar blijft, of dat je workflow stilvalt tot reset, overages
              of downgrade.
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
