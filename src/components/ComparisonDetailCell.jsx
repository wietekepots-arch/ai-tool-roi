export default function ComparisonDetailCell({ items }) {
  return (
    <div className="comparison-cell-stack">
      {items.filter(Boolean).map((item, index) => (
        <div
          key={`${item.label}-${index}`}
          className={
            item.tone
              ? `comparison-cell-detail ${item.tone}`
              : "comparison-cell-detail"
          }
        >
          <span className="comparison-cell-label">{item.label}</span>
          <span className="comparison-cell-value">{item.value}</span>
        </div>
      ))}
    </div>
  );
}
