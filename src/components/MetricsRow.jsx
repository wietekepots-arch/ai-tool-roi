import { fmt, fmtHrs } from '../useROI'

export default function MetricsRow({ rate, hoursSaved, valueSaved, roi }) {
  return (
    <div className="metrics-row">
      <Metric label="Your Hourly Rate"     value={`€${rate}`}              sub="per hour billed" />
      <Metric label="Hours Saved / Month"  value={fmtHrs(hoursSaved)}      sub="at selected gain %" />
      <Metric label="Value Saved / Month"  value={fmt(valueSaved)}         sub="at your hourly rate" />
      <Metric label="ROI vs €30/mo tool"   value={`${Math.round(roi)}×`}   sub="return on spend" />
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
