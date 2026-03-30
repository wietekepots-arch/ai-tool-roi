import { TOOL_CONFIG } from "../config/tools";
import { FINDINGS } from "../config/findings";

const TOOL_BY_KEY = Object.fromEntries(
  TOOL_CONFIG.map((tool) => [tool.key, tool])
);

const STATUS_COLORS = {
  accent: "var(--accent)",
  warn: "var(--warn)",
  danger: "var(--danger)",
};

const DISPLAY_FINDINGS = [...FINDINGS].sort((a, b) => {
  if (a.toolKey === "cursor") return -1;
  if (b.toolKey === "cursor") return 1;
  return 0;
});

export default function KeyFindings() {
  return (
    <section>
      <div className="findings-list">
        {DISPLAY_FINDINGS.map((group) => {
          const color = STATUS_COLORS[group.status];
          const warnColor =
            STATUS_COLORS[group.status === "accent" ? "warn" : group.status];
          const tool = TOOL_BY_KEY[group.toolKey];
          return (
            <details
              key={group.toolKey}
              className="finding-card"
              open={group.toolKey === "cursor" || undefined}
              style={{
                "--finding-color": color,
                "--finding-warn-color": warnColor,
              }}
            >
              <summary className="finding-summary">
                <div className="finding-summary-main">
                  <div className="finding-summary-row">
                    <div className="finding-heading">
                      <span className="finding-title">
                        {tool?.label ?? group.toolKey}
                      </span>
                    </div>
                    <span className="finding-badge">{group.statusLabel}</span>
                  </div>
                  <p className="finding-summary-copy">{group.verdict}</p>
                  <p className="finding-summary-recommendation">
                    <span className="finding-summary-recommendation-label">
                      Advies
                    </span>
                    {group.recommendation}
                  </p>
                </div>
                <span className="finding-toggle" aria-hidden="true">
                  <span className="finding-toggle-label finding-toggle-expand">
                    Open
                  </span>
                  <span className="finding-toggle-label finding-toggle-collapse">
                    Sluit
                  </span>
                  <span className="finding-toggle-icon" />
                </span>
              </summary>

              <div className="finding-body">
                <div className="finding-decision-section">
                  <NarrativeBlock label="Waarom dit oordeel" border>
                    {group.judgmentDetail}
                  </NarrativeBlock>
                </div>

                <div className="finding-narrative-grid">
                  <NarrativeBlock
                    label="Hoe deze tool ingezet kan worden"
                    border
                  >
                    {group.whatFor}
                  </NarrativeBlock>
                  <NarrativeBlock label="Waar het goed in is" border>
                    {group.goodAt}
                  </NarrativeBlock>
                  <NarrativeBlock label="Zorgen die ik heb">
                    {group.concerns}
                  </NarrativeBlock>
                </div>

                <div className="finding-points-grid">
                  <div className="finding-points-column finding-points-column-border">
                    <div className="finding-points-label finding-points-label-accent">
                      Pluspunten
                    </div>
                    <ul className="finding-points-list">
                      {group.pros.map((item) => (
                        <li key={item} className="finding-points-item">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="finding-points-column">
                    <div className="finding-points-label finding-points-label-warn">
                      Minpunten
                    </div>
                    <ul className="finding-points-list">
                      {group.cons.map((item) => (
                        <li key={item} className="finding-points-item">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </details>
          );
        })}
      </div>
    </section>
  );
}

function NarrativeBlock({ label, border = false, children }) {
  const className = ["finding-block", border ? "finding-block-border" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className}>
      <div className="finding-block-label">{label}</div>
      <p className="finding-block-copy">{children}</p>
    </div>
  );
}
