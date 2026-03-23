import { PRESETS } from '../useROI'

export default function Controls({ rate, setRate, monthlyHours, setMH, gain, setGain }) {
  return (
    <section>
      <h2>Pas je cijfers aan</h2>
      <div className="assumptions">
        <p className="assumptions-hint">Pas dit aan op jouw situatie; alle cijfers verversen direct.</p>

        <div className="rate-presets">
          <span className="presets-label">Snel kiezen:</span>
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
            label="Jouw uurtarief (€)"
            min={40} max={175} step={5}
            value={rate}
            onChange={v => setRate(v)}
            display={`EUR ${rate} / uur`}
          />
          <SliderItem
            label="Declarabele uren / maand"
            min={100} max={184} step={4}
            value={monthlyHours}
            onChange={v => setMH(v)}
            display={`${monthlyHours} uur`}
          />
          <SliderItem
            label="Productiviteitswinst (%)"
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
