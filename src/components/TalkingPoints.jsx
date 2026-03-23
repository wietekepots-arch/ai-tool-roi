import { fmt, fmtHrs, beHrs, COSTS } from '../useROI'

export default function TalkingPoints({ rate, monthlyHours, hoursSaved, valueSaved, roi }) {
  const beRange   = `${beHrs(COSTS.codex.eur, rate)}–${beHrs(COSTS.cursor.eur, rate)}`
  const beUpgrade = `~${beHrs(COSTS.copilotEnterprise.eur, rate)}`
  const bePro     = `~${beHrs(COSTS.chatgptPro.eur, rate)}`

  return (
    <section>
      <h2>Gesprekspunten voor je manager</h2>
      <table>
        <thead>
          <tr><th>Punt</th><th>Wat je kunt zeggen</th></tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ width: 180, color: 'var(--accent)' }}>De rekensom</td>
            <td>
              Bij <strong>EUR {rate}/uur</strong> kost de tool <strong>{beRange}</strong> per maand
              om quitte te draaien. Dat verdien ik al terug voor 09:00 op de eerste werkdag.
              Er is financieel gezien geen realistisch scenario waarin dit een slechte uitgave is.
            </td>
          </tr>
          <tr>
            <td style={{ color: 'var(--accent)' }}>Conservatieve inschatting</td>
            <td>
              Met het meest conservatieve onafhankelijke onderzoek (15% winst bij {monthlyHours} uur/maand)
              win ik ongeveer <strong>{fmtHrs(hoursSaved)}/maand</strong> terug. Dat is{' '}
              <strong>{fmt(valueSaved)}</strong> waard tegen mijn tarief. ROI versus toolkosten:{' '}
              <strong>{Math.round(roi)}×</strong>.
            </td>
          </tr>
          <tr>
            <td style={{ color: 'var(--accent)' }}>Waar ik het voor gebruik</td>
            <td>
              Async agenttaken (Codex draait achtergrondwerk terwijl ik codeer), boilerplate,
              testgeneratie en documentatie; niet voor blind vibe coden. Ik review alle output
              voordat ik commit.
            </td>
          </tr>
          <tr>
            <td style={{ color: 'var(--accent)' }}>Dataprivacy</td>
            <td>
              We zitten op een zakelijke licentie. Code die naar de API wordt gestuurd, wordt
              niet gebruikt voor training. Ik stuur geen secrets of credentials door de tool.
            </td>
          </tr>
          <tr>
            <td style={{ color: 'var(--warn)' }}>Upgradeverzoek</td>
            <td>
              Als ik ooit vraag om te upgraden naar een hogere tier (EUR 95-100/maand), hoef ik
              nog steeds maar <strong>{beUpgrade}</strong>/maand te besparen om quitte te draaien.
              Het financiele risico voor het bedrijf blijft verwaarloosbaar.
            </td>
          </tr>
          <tr>
            <td style={{ color: 'var(--danger)' }}>Waar ik nu NIET om zou vragen</td>
            <td>
              ChatGPT Pro voor EUR 190/maand vraagt <strong>{bePro}</strong>/maand aan besparing
              om te rechtvaardigen. Dat is nog steeds weinig, maar wacht daarmee tot je drie
              maanden aan gemeten output hebt om de winst geloofwaardig te onderbouwen.
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
