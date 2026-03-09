import { PRESETS } from '../useROI'

export default function Controls({ rate, setRate, monthlyHours, setMH, gain, setGain }) {
  return (
    <section>
      <h2>Adjust Your Numbers</h2>
      <div className="assumptions">
        <p className="assumptions-hint">Adjust to your situation — all numbers update live.</p>

        <div className="rate-presets">
          <span className="presets-label">Quick set:</span>
          {PRESETS.map(p => (
            <button
              key={p.rate}
              className={`preset-btn${rate === p.rate ? ' active' : ''}`}
              onClick={() => setRate(p.rate)}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="sliders-grid">
          <SliderItem
            label="Your Hourly Rate (€)"
            min={40} max={175} step={5}
            value={rate}
            onChange={v => setRate(v)}
            display={`€${rate} / hr`}
          />
          <SliderItem
            label="Billable Hours / Month"
            min={100} max={184} step={4}
            value={monthlyHours}
            onChange={v => setMH(v)}
            display={`${monthlyHours} hrs`}
          />
          <SliderItem
            label="Productivity Gain (%)"
            min={5} max={40} step={1}
            value={gain}
            onChange={v => setGain(v)}
            display={`${gain}%`}
          />
        </div>
      </div>
    </section>
  )
}

function SliderItem({ label, min, max, step, value, onChange, display }) {
  return (
    <div className="slider-item">
      <label>{label}</label>
      <input
        type="range"
        min={min} max={max} step={step}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
      />
      <div className="slider-val">{display}</div>
    </div>
  )
}
