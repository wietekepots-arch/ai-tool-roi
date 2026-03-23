import { fmt, fmtHrs } from '../useROI'

export default function MetricsRow({ rate, hoursSaved, valueSaved, roi }) {
  return (
    <div className="metrics-row">
      <Metric label="Jouw uurtarief"       value={`€${rate}`}              sub="per gedeclareerd uur" />
      <Metric label="Bespaarde uren / maand"  value={fmtHrs(hoursSaved)}   sub="bij de gekozen winst %" />
      <Metric label="Bespaarde waarde / maand" value={fmt(valueSaved)}     sub="tegen jouw uurtarief" />
      <Metric label="ROI vs tool van €30/mnd" value={`${Math.round(roi)}×`} sub="rendement op kosten" />
    </div>
  )
}

function Metric({ label, value, sub }) {
  return (
    <div className="metric">
      <div className="metric-label">{label}</div>
      <div className="metric-value">{value}</div>
      <div className="metric-sub">{sub}</div>
    </div>
  )
}
