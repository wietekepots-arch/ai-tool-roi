import { useROI } from "./useROI";
import Header from "./components/Header";
import Controls from "./components/Controls";
import MetricsRow from "./components/MetricsRow";
import ResearchTable from "./components/ResearchTable";
import CostTable from "./components/CostTable";
import KeyFindings from "./components/KeyFindings";
import ToolComparisonTable from "./components/ToolComparisonTable";
import Verdict from "./components/Verdict";
import Footer from "./components/Footer";

export default function App() {
  const roi = useROI();

  return (
    <main className="page-shell">
      <Header />

      <section id="why" className="intro-section">
        <h2>Why Run This Experiment Now?</h2>
        <p>
          AI developer tooling is moving fast. New models, new agents, new
          pricing, and new limits show up constantly. What looked like the best
          setup last month can already be outdated.
        </p>
        <p>
          This page tracks what actually helps in day-to-day development and
          what only looks good in demos. The goal is to build a practical,
          repeatable workflow we can trust for real delivery.
        </p>

        <div className="intro-grid">
          <article className="intro-card">
            <h3>Benefits We Expect</h3>
            <ul>
              <li>
                Less time on boilerplate, debugging loops, and repetitive
                refactors.
              </li>
              <li>
                Faster first drafts for tests, documentation, and implementation
                options.
              </li>
              <li>
                Better focus by delegating background tasks to async agents.
              </li>
              <li>Higher throughput without lowering code review standards.</li>
            </ul>
          </article>

          <article className="intro-card">
            <h3>Current Issues We See</h3>
            <ul>
              <li>
                Tool pricing and quotas change quickly and are hard to forecast.
              </li>
              <li>
                Model quality is inconsistent across task types and repo
                maturity.
              </li>
              <li>IDE-specific features create lock-in and migration risk.</li>
              <li>
                Teams need a clear way to separate hype from measurable value.
              </li>
              <li>
                A developer using AI tools full-day can exhaust a 300-request
                monthly allowance within a single working day, leaving the rest
                of the month without premium model access.
              </li>
            </ul>
          </article>
        </div>

        <div className="note">
          <strong>How we use AI in daily development:</strong> We treat AI as a
          copilot, not an autopilot. We use it for drafting, exploration, and
          automation, then validate outputs through normal engineering review
          and testing.
        </div>
      </section>

      <section id="landscape" className="chapter">
        <h2>Current Tools, Evidence, and Trade-offs</h2>
        <p className="chapter-lead">
          This section combines hands-on findings with research evidence to show
          where current tooling supports daily development and where risks
          appear.
        </p>

        <KeyFindings />
        <ToolComparisonTable />
        <ResearchTable />
        <CostTable tiers={roi.tiers} />
      </section>

      <section id="baseline" className="chapter">
        <h2>Baseline: Value and ROI</h2>
        <p className="chapter-lead">
          Start with your own rate, available hours, and a conservative
          productivity gain to anchor the experiment in realistic numbers.
        </p>

        <Controls
          rate={roi.rate}
          setRate={roi.setRate}
          monthlyHours={roi.monthlyHours}
          setMH={roi.setMH}
          gain={roi.gain}
          setGain={roi.setGain}
        />

        <MetricsRow
          rate={roi.rate}
          hoursSaved={roi.hoursSaved}
          valueSaved={roi.valueSaved}
          roi={roi.roi}
        />

        <div className="note" style={{ marginBottom: 0 }}>
          <strong>How to read this:</strong> "Value Saved / Month" is what your
          time is worth to the business at your rate. Even at a conservative
          independent-research estimate, most tool tiers break even quickly.
        </div>
      </section>

      <Verdict />

      <Footer />
    </main>
  );
}
