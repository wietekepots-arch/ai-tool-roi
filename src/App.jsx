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
        <h2>Waarom dit experiment nu draaien?</h2>
        <p>
          AI-tooling voor developers verandert snel. Nieuwe modellen, nieuwe
          agents, nieuwe prijzen en nieuwe limieten verschijnen voortdurend. Wat
          vorige maand nog de beste setup leek, kan nu al verouderd zijn.
        </p>
        <p>
          Deze pagina volgt wat echt helpt in dagelijkse development en wat
          alleen goed oogt in demo's. Het doel is een praktische, herhaalbare
          workflow op te bouwen waarop we kunnen vertrouwen voor echte delivery.
        </p>

        <div className="intro-grid">
          <article className="intro-card">
            <h3>Voordelen die we verwachten</h3>
            <ul>
              <li>
                Minder tijd kwijt aan boilerplate, debug-loops en repetitieve
                refactors.
              </li>
              <li>
                Snellere eerste versies van tests, documentatie en
                implementatie-opties.
              </li>
              <li>
                Meer focus door achtergrondtaken uit te besteden aan async
                agents.
              </li>
              <li>Hogere throughput zonder lagere code review-standaarden.</li>
            </ul>
          </article>

          <article className="intro-card">
            <h3>Problemen die we nu zien</h3>
            <ul>
              <li>
                Toolprijzen en quota veranderen snel en zijn lastig te
                voorspellen.
              </li>
              <li>
                Modelkwaliteit is niet consistent tussen taaktypen en de
                volwassenheid van een repo.
              </li>
              <li>
                IDE-specifieke features veroorzaken lock-in en migratierisico.
              </li>
              <li>
                Teams hebben een duidelijke manier nodig om hype van meetbare
                waarde te scheiden.
              </li>
              <li>
                Een developer die AI-tools de hele dag gebruikt, kan een
                maandelijkse limiet van 300 requests binnen een werkdag
                opgebruiken, waardoor de rest van de maand geen premium
                modeltoegang meer overblijft.
              </li>
            </ul>
          </article>
        </div>

        <div className="note">
          <strong>Hoe we AI in dagelijkse development gebruiken:</strong> We
          behandelen AI als copiloot, niet als autopiloot. We gebruiken het voor
          eerste versies, verkenning en automatisering, en valideren de output
          daarna via normale engineering review en tests.
        </div>
      </section>

      <section id="landscape" className="chapter">
        <h2>Huidige tools, bewijs en afwegingen</h2>
        <p className="chapter-lead">
          Praktische observaties uit gewone codingdagen — wat delivery
          versnelde, wat frictie veroorzaakte en hoe elke tool in de workflow
          past — gecombineerd met onderzoek naar waar tooling dagelijkse
          development ondersteunt en waar risico's ontstaan.
        </p>

        <KeyFindings />
        <ToolComparisonTable />

        <section id="baseline">
          <h2>Basislijn: waarde en ROI</h2>
          <p className="chapter-lead">
            Begin met je eigen tarief, beschikbare uren en een conservatieve
            productiviteitswinst om het experiment te verankeren in realistische
            cijfers.
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

          <ResearchTable />
        </section>

        <CostTable tiers={roi.tiers} />
      </section>

      <Verdict />

      <Footer />
    </main>
  );
}
