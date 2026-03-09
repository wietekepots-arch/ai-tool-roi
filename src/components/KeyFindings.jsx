import { TOOL_CONFIG } from '../config/tools'

const FINDINGS = [
  {
    toolKey: 'codex',
    status: 'warn',
    statusLabel: 'Under investigation',
    verdict:
      'Promising daily tool, but keep it on monthly review until quota and pricing behavior stabilizes.',
    whatFor:
      'Async agent execution for repo-wide search, refactoring existing code, code review support, and repetitive edits while I stay focused on implementation. I run it on bounded tasks with clear scope, review every proposed change, and only merge after lint, tests, and standard code review pass.',
    goodAt:
      'Strong for high-volume tasks that would otherwise interrupt mainline coding flow. Reliable as a background worker while primary implementation continues in parallel — no rate-limit interruptions observed so far, even under intensive daily use. Works across IDE environments, which keeps workflow setup portable.',
    concerns:
      'Preview-era quota and policy behavior can still change and reduce planning certainty. Async multi-file agents are the main burn source; batching too many large tasks at once is what pushes quota fastest. When throttling appears, I shift to VS Code + Claude/Copilot for interactive work and keep Codex for queued background jobs.',
    pros: [
      'No rate-limit interruptions under intensive daily use',
      'Reliable background worker while mainline coding continues',
      'Works across IDE environments — workflow stays portable',
      'Strong for high-volume repetitive tasks',
    ],
    cons: [
      'Preview quota and policy can change without notice',
      'Less autonomous when file-system access is constrained',
      'Temporary throughput boosts can create false delivery baselines',
    ],
  },
  {
    toolKey: 'cursor',
    status: 'danger',
    statusLabel: 'Paused for now',
    verdict:
      'Not suitable as a default team tool today; reassess only if billing and quota controls become predictable per user.',
    whatFor:
      'All-in-one editor workflow with built-in AI coding features for fast interactive implementation. Currently paused — I only revisit for targeted evaluation sessions, not for full-time delivery work.',
    goodAt:
      'Productive editor-native workflows when usage stays inside predictable limits. Can accelerate iteration speed on short, focused coding tasks where the IDE integration removes context-switching friction.',
    concerns:
      'Large contexts and repeated agent loops consume credits quickly, especially with premium model settings. At cap, productivity drops fast because fallback quality and workflow continuity both degrade. Shared team caps create contention risk, and billing or quota rule changes can hit capacity suddenly.',
    pros: [
      'Productive editor-native workflow within predictable limits',
      'Fast iteration on short, focused coding tasks',
    ],
    cons: [
      'Credit burn can force model downgrades mid-sprint',
      'Shared team caps create contention and planning uncertainty',
      'Less portable when switching back to plain VS Code',
    ],
  },
  {
    toolKey: 'claudePro',
    status: 'accent',
    statusLabel: 'Current daily baseline',
    verdict:
      'Best current default for consistent delivery: predictable, portable, and easy to operate across projects.',
    whatFor:
      'Daily implementation, architecture thinking, and difficult debugging where higher-quality reasoning matters. Sonnet is default for fast flow; Opus is reserved for deeper analysis or difficult refactors. I keep prompts short and context tight to avoid burning the 5-hour window.',
    goodAt:
      'Predictable fixed monthly cost with reliable model quality. The clear split between Sonnet (speed) and Opus (depth) makes it easy to match model choice to task weight. Portable across environments — no IDE lock-in.',
    concerns:
      'Capacity can disappear fast on Opus-heavy days. Burn rises quickly when Opus is used for long threads. When I approach the 5-hour cap, I shift workload to Copilot or Codex and keep Claude for critical prompts only. Dynamic limit adjustments can change usable throughput without a plan change.',
    pros: [
      'Predictable fixed monthly cost',
      'Clear fast/deep model split (Sonnet / Opus)',
      'No IDE lock-in — fully portable',
    ],
    cons: [
      'Capacity drains fast on Opus-heavy days',
      'Dynamic limit changes can reduce throughput unexpectedly',
      'Single-provider dependency increases outage risk',
    ],
  },
  {
    toolKey: 'copilot',
    status: 'accent',
    statusLabel: 'Secondary hedge',
    verdict:
      'Use as overflow and model-routing hedge; very efficient until premium requests are depleted.',
    whatFor:
      'Fallback and burst-capacity coverage when Claude/Codex windows are constrained. I default to low-burn models and switch to higher-cost models only when task complexity justifies it.',
    goodAt:
      'Excellent model breadth for a low fixed monthly price — Sonnet, Opus, and Codex variants all in one place. Codex Mini at 0.33x multiplier gives strong capacity for routine tasks. A strong hedge against single-provider limit events.',
    concerns:
      'The premium request pool can vanish quickly if Opus is used casually. Burn is highly model-dependent: Opus costs 3x while Codex Mini costs 0.33x. Untracked multiplier use can silently consume most of the monthly budget. Model multiplier changes can alter effective capacity even when the plan price stays fixed.',
    pros: [
      'Broad model access for a low fixed price',
      'Strong hedge against single-provider outages',
      'Codex Mini extends capacity at 0.33x cost',
    ],
    cons: [
      'Premium pool depletes quickly with casual Opus use',
      'Multiplier changes can shrink effective capacity silently',
    ],
  },
]

const TOOL_BY_KEY = Object.fromEntries(TOOL_CONFIG.map(tool => [tool.key, tool]))

const STATUS_COLORS = {
  accent: 'var(--accent)',
  warn:   'var(--warn)',
  danger: 'var(--danger)',
}

export default function KeyFindings() {
  return (
    <section>
      <h2>Field Notes From Daily Development</h2>
      <p style={{ color: 'var(--muted)', fontSize: 12, marginBottom: 24 }}>
        Practical observations from regular coding days: what sped up delivery, what created friction,
        and how each tool currently fits the workflow.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        {FINDINGS.map(group => {
          const color = STATUS_COLORS[group.status]
          const warnColor = STATUS_COLORS[group.status === 'accent' ? 'warn' : group.status]
          const tool = TOOL_BY_KEY[group.toolKey]
          return (
            <div
              key={group.toolKey}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 20px',
                  borderBottom: `2px solid ${color}`,
                }}
              >
                <span style={{ fontFamily: 'var(--serif)', fontSize: 15, fontWeight: 600 }}>
                  {tool?.label ?? group.toolKey}
                </span>
                <span
                  style={{
                    fontSize: 10,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color,
                    border: `1px solid ${color}`,
                    background: `color-mix(in srgb, ${color} 8%, transparent)`,
                    padding: '3px 10px',
                  }}
                >
                  {group.statusLabel}
                </span>
              </div>

              {/* Verdict */}
              <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--border)' }}>
                <p style={{ margin: 0, fontSize: 12, color: 'var(--fg)', lineHeight: 1.7, fontStyle: 'italic' }}>
                  {group.verdict}
                </p>
              </div>

              {/* Three narrative sections */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderBottom: '1px solid var(--border)' }}>
                <NarrativeBlock label="What I used it for" labelColor="var(--accent)" border>
                  {group.whatFor}
                </NarrativeBlock>
                <NarrativeBlock label="What it is good at" labelColor="var(--accent)" border>
                  {group.goodAt}
                </NarrativeBlock>
                <NarrativeBlock label="Concerns I have" labelColor={warnColor}>
                  {group.concerns}
                </NarrativeBlock>
              </div>

              {/* Pros / Cons */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                <div style={{ padding: '14px 20px', borderRight: '1px solid var(--border)' }}>
                  <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 10 }}>
                    Pros
                  </div>
                  <ul style={{ margin: 0, paddingLeft: 16, display: 'grid', gap: 5 }}>
                    {group.pros.map(item => (
                      <li key={item} style={{ fontSize: 11, color: 'var(--muted)', lineHeight: 1.6 }}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div style={{ padding: '14px 20px' }}>
                  <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: warnColor, marginBottom: 10 }}>
                    Cons
                  </div>
                  <ul style={{ margin: 0, paddingLeft: 16, display: 'grid', gap: 5 }}>
                    {group.cons.map(item => (
                      <li key={item} style={{ fontSize: 11, color: 'var(--muted)', lineHeight: 1.6 }}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function NarrativeBlock({ label, labelColor, border = false, children }) {
  return (
    <div
      style={{
        padding: '16px 20px',
        borderRight: border ? '1px solid var(--border)' : 'none',
      }}
    >
      <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: labelColor, marginBottom: 8 }}>
        {label}
      </div>
      <p style={{ margin: 0, fontSize: 12, color: 'var(--muted)', lineHeight: 1.75 }}>
        {children}
      </p>
    </div>
  )
}
