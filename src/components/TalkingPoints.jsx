import { fmt, fmtHrs, beHrs, COSTS } from '../useROI'

export default function TalkingPoints({ rate, monthlyHours, hoursSaved, valueSaved, roi }) {
  const beRange   = `${beHrs(COSTS.codex.eur, rate)}–${beHrs(COSTS.cursor.eur, rate)}`
  const beUpgrade = `~${beHrs(COSTS.copilotEnterprise.eur, rate)}`
  const bePro     = `~${beHrs(COSTS.chatgptPro.eur, rate)}`

  return (
    <section>
      <h2>Manager Talking Points</h2>
      <table>
        <thead>
          <tr><th>Point</th><th>What to say</th></tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ width: 180, color: 'var(--accent)' }}>The math</td>
            <td>
              At <strong>€{rate}/hr</strong>, the tool costs <strong>{beRange}</strong> per month
              to break even. I recover that before 9am on the first working day. There is no
              financial scenario where this is a bad spend.
            </td>
          </tr>
          <tr>
            <td style={{ color: 'var(--accent)' }}>Conservative estimate</td>
            <td>
              Using the most conservative independent research (15% gain at {monthlyHours} hrs/month),
              I recover approximately <strong>{fmtHrs(hoursSaved)}/month</strong> — worth{' '}
              <strong>{fmt(valueSaved)}</strong> at my rate. ROI vs tool cost:{' '}
              <strong>{Math.round(roi)}×</strong>.
            </td>
          </tr>
          <tr>
            <td style={{ color: 'var(--accent)' }}>What I use it for</td>
            <td>
              Async agentic tasks (Codex runs background jobs while I code), boilerplate, test
              generation, documentation — not vibe coding. I review all output before committing.
            </td>
          </tr>
          <tr>
            <td style={{ color: 'var(--accent)' }}>Data privacy</td>
            <td>
              We're on a business license. Code submitted to the API is not used for training.
              I don't send secrets or credentials through the tool.
            </td>
          </tr>
          <tr>
            <td style={{ color: 'var(--warn)' }}>Tipping point ask</td>
            <td>
              If I ever ask to upgrade to a higher tier (€95–100/month), I still only need to
              save <strong>{beUpgrade}</strong>/month to break even. The financial risk to the
              company remains negligible.
            </td>
          </tr>
          <tr>
            <td style={{ color: 'var(--danger)' }}>What NOT to ask for now</td>
            <td>
              ChatGPT Pro at €190/month needs <strong>{bePro}</strong>/month saved to justify —
              that's still very low, but hold off until you have 3 months of tracked output to
              demonstrate the gain credibly.
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
