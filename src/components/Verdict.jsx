const RECOMMENDED_STACK = [
  {
    label: "GitHub Copilot Business",
    price: "vanaf $19 / user / mnd",
    role: "IDE-autocomplete, lichte modelrouting en fallback als premium pools onder druk staan",
  },
  {
    label: "Claude Team seat",
    price: "vanaf $30 / user / mnd",
    role: "Primair redeneerwerk, architectuurkeuzes en lastigere debugging",
  },
  {
    label: "ChatGPT Team met Codex",
    price: "vanaf $30 / user / mnd",
    role: "Async agents, wachtrijtaken en repo-brede achtergrondklussen",
  },
];

export default function Verdict() {
  return (
    <section id="verdict" className="chapter">
      <h2>Aanbevolen stack</h2>
      <p className="chapter-lead">
        Samengevat werkt een combinatie van gespecialiseerde tools nu beter dan
        een enkele editor- of modelstack. Dit is de meest bruikbare verdeling
        voor dagelijkse delivery met voorspelbare capaciteit.
      </p>

      <div
        style={{
          border: "1px solid var(--accent)",
          background: "color-mix(in srgb, var(--accent) 5%, transparent)",
          padding: "24px 28px",
        }}
      >
        <div
          style={{
            fontSize: 10,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: 12,
            fontWeight: 600,
          }}
        >
          Praktische combinatie
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 16,
            marginBottom: 20,
          }}
        >
          {RECOMMENDED_STACK.map((item) => (
            <div
              key={item.label}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                padding: "14px 16px",
              }}
            >
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>
                {item.label}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "var(--accent)",
                  marginBottom: 6,
                }}
              >
                {item.price}
              </div>
              <div style={{ fontSize: 11, color: "var(--muted)" }}>
                {item.role}
              </div>
            </div>
          ))}
        </div>
        <p
          style={{
            margin: 0,
            fontSize: 12,
            color: "var(--muted)",
            lineHeight: 1.7,
          }}
        >
          Rond{" "}
          <strong style={{ color: "var(--text)" }}>
            $79 per gebruiker per maand
          </strong>{" "}
          dekt deze combinatie autocomplete, inline hulp, diep redeneren en
          async agentuitvoering zonder gedeelde teamcaps of onvoorspelbare
          overages in een enkele tool te concentreren. Copilot en Claude houden
          de interactieve flow stabiel; Codex pakt het achtergrondwerk op dat
          anders gefocuste implementatietijd zou onderbreken.
        </p>
      </div>
    </section>
  );
}
