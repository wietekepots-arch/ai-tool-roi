const VERDICTS = [
  {
    tool: 'Cursor',
    badge: 'Avoid for teams',
    badgeType: 'danger',
    summary:
      'Once the included team cap is exhausted, Cursor effectively becomes a bare-code editor. Autocomplete stops, premium model access drops, and the fallback experience is a significant step down from what the tool promises. In practice, teams hit this wall within days of a sprint starting. Compounding that, Cursor has a track record of adjusting pricing and rate structures with limited notice, creating real planning risk for anyone budgeting capacity ahead of a delivery cycle.',
    recommendation:
      'Do not use as a default team tool. Revisit only if per-seat billing transparency and predictable monthly caps are introduced.',
  },
  {
    tool: 'Codex (ChatGPT Plus)',
    badge: 'Keep — async work only',
    badgeType: 'warn',
    summary:
      'Codex is a genuinely useful tool for background and async tasks: repo-wide search, repetitive refactors, and queued edits that run while primary implementation continues in the foreground. For high-reasoning work it does not reach Opus-class output quality, but it handles Sonnet-level tasks reliably. The current 2x rate period is a bonus, and notably, even under regular use the resource monitors have not come close to 50% utilisation — meaning there is headroom to absorb more async workload before capacity becomes a concern.',
    recommendation:
      'Keep in the stack for bounded, async, low-interruption tasks. Treat the 2x rate as a temporary upside, not a baseline, and monitor for the transition to standard pricing.',
  },
  {
    tool: 'GitHub Copilot Pro',
    badge: 'Strong daily base',
    badgeType: 'accent',
    summary:
      'Copilot delivers autocomplete that is on par with Cursor in day-to-day use — the in-editor experience is equally fluid. Because of how its token and request limits are structured, premium model capacity also stretches at least as long as comparable Cursor usage patterns, often further. The included model selection (Sonnet, Opus, Codex, Mini) covers most task types without constantly burning the premium request pool.',
    recommendation:
      'Use as the primary IDE autocomplete layer. Pair with Claude Pro for a complete, portable developer workflow (see Recommended Stack below).',
  },
  {
    tool: 'Claude Pro',
    badge: 'Pair with Copilot',
    badgeType: 'accent',
    summary:
      'Claude Pro is best understood as the reasoning and agentic layer that Copilot alone cannot fully cover. Copilot\'s premium request pool, while generous, is finite — and when it runs low, having Claude Pro as the continuity layer means complex reasoning, architecture work, and longer multi-turn sessions remain uninterrupted. The two products complement each other structurally: Copilot handles autocomplete and light inline tasks, Claude handles depth and continuity. Together they eliminate the single-provider risk that makes relying on either tool alone fragile.',
    recommendation:
      'Run alongside Copilot Pro as the persistent reasoning baseline. This pairing covers the full developer workflow at a combined cost well below most team-tier alternatives.',
  },
]

const STATUS_COLORS = {
  accent: 'var(--accent)',
  warn:   'var(--warn)',
  danger: 'var(--danger)',
}

export default function Verdict() {
  return (
    <section id="verdict" className="chapter">
      <h2>Verdict</h2>
      <p className="chapter-lead">
        Based on hands-on daily use, model quality, cost predictability, and how each tool behaves
        when limits are reached, here is our current recommendation for a practical team stack.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 40 }}>
        {VERDICTS.map(item => (
          <div
            key={item.tool}
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 20px',
                borderBottom: '1px solid var(--border)',
              }}
            >
              <span style={{ fontFamily: 'var(--serif)', fontSize: 15, fontWeight: 600 }}>
                {item.tool}
              </span>
              <span
                style={{
                  fontSize: 10,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: STATUS_COLORS[item.badgeType],
                  border: `1px solid ${STATUS_COLORS[item.badgeType]}`,
                  background: `color-mix(in srgb, ${STATUS_COLORS[item.badgeType]} 8%, transparent)`,
                  padding: '3px 10px',
                }}
              >
                {item.badge}
              </span>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '3px 1fr',
                borderBottom: '1px solid var(--border)',
              }}
            >
              <div style={{ background: STATUS_COLORS[item.badgeType] }} />
              <div style={{ padding: '14px 20px' }}>
                <div
                  style={{ fontSize: 12, fontWeight: 500, color: STATUS_COLORS[item.badgeType], marginBottom: 4 }}
                >
                  Assessment
                </div>
                <p style={{ margin: 0, fontSize: 12, color: 'var(--muted)', lineHeight: 1.7 }}>
                  {item.summary}
                </p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '3px 1fr' }}>
              <div style={{ background: 'var(--accent)' }} />
              <div style={{ padding: '14px 20px' }}>
                <div
                  style={{ fontSize: 12, fontWeight: 500, color: 'var(--accent)', marginBottom: 4 }}
                >
                  Recommendation
                </div>
                <p style={{ margin: 0, fontSize: 12, color: 'var(--muted)', lineHeight: 1.7 }}>
                  {item.recommendation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          border: '1px solid var(--accent)',
          background: 'color-mix(in srgb, var(--accent) 5%, transparent)',
          padding: '24px 28px',
        }}
      >
        <div
          style={{
            fontSize: 10,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: 12,
            fontWeight: 600,
          }}
        >
          Recommended Stack
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 16,
            marginBottom: 20,
          }}
        >
          {[
            { label: 'GitHub Copilot Pro', price: '$10 / mo', role: 'IDE autocomplete + inline tasks' },
            { label: 'Claude Pro',         price: '$20 / mo', role: 'Deep reasoning + workflow continuity' },
            { label: 'Codex (Plus)',       price: '$20 / mo', role: 'Async background agent work' },
          ].map(item => (
            <div
              key={item.label}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                padding: '14px 16px',
              }}
            >
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>{item.label}</div>
              <div style={{ fontSize: 11, color: 'var(--accent)', marginBottom: 6 }}>{item.price}</div>
              <div style={{ fontSize: 11, color: 'var(--muted)' }}>{item.role}</div>
            </div>
          ))}
        </div>
        <p style={{ margin: 0, fontSize: 12, color: 'var(--muted)', lineHeight: 1.7 }}>
          At <strong style={{ color: 'var(--fg)' }}>$50 / month per developer</strong>, this stack
          covers autocomplete, inline assistance, deep reasoning, and async agent execution — without
          shared team caps, unpredictable overages, or single-provider risk. Copilot and Claude Pro
          are structurally complementary: when one limit window is running low, the other carries
          continuity. Codex handles background workloads that would otherwise interrupt focused
          implementation time.
        </p>
      </div>
    </section>
  )
}
