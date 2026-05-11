import CaseStudyLayout from '../../CaseStudyLayout'
import './HawaiianAcquisition.css'

const TITLE_LINES = [
  { text: 'Designing the' },
  { text: 'check-in search API for' },
  { text: 'Alaska\'s acquisition of' },
  { text: 'Hawaiian Airlines.', italic: true },
]

const META = [
  { key: 'Role',    val: 'Tech lead — backend' },
  { key: 'Scope',   val: '~ One month, four phases' },
  { key: 'Stack',   val: 'Go · gRPC · Node.js BFF · Optimizely' },
  { key: 'Surface', val: 'Airport check-in & mobile app' },
  { key: 'Outcome', val: 'Zero-downtime merger cutover' },
]

const NEXT = {
  label: 'Up next · Case study no. 02',
  title: 'Diagnosing a misclassified 404 in the <span class="it">Same Day Change endpoint.</span>',
  href: '/case-studies/sdc-eligibility',
  num: '02',
}

function SearchDiagram() {
  return (
    <svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%' }}>
      <defs>
        <marker id="ha-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="#2F4A37"/>
        </marker>
      </defs>
      <g fontFamily="DM Mono, monospace" fontSize="11" fill="#1A2018">
        {/* Entry */}
        <rect x="10" y="125" width="120" height="50" rx="2" fill="#0E1410"/>
        <text x="70" y="148" textAnchor="middle" fill="#EDE7DC" fontSize="11">KIOSK · APP</text>
        <text x="70" y="162" textAnchor="middle" fill="#7E9C7A" fontSize="9">PNR + last name</text>
        <line x1="130" y1="150" x2="170" y2="150" stroke="#2F4A37" strokeWidth="1.4" markerEnd="url(#ha-arrow)"/>
        {/* BFF */}
        <rect x="170" y="125" width="120" height="50" rx="2" fill="#EDE7DC" stroke="#1A2018" strokeWidth="1"/>
        <text x="230" y="148" textAnchor="middle" fontSize="11">Node.js BFF</text>
        <text x="230" y="162" textAnchor="middle" fontSize="9" fill="#6E6557">unified search</text>
        <line x1="290" y1="150" x2="330" y2="150" stroke="#2F4A37" strokeWidth="1.4" markerEnd="url(#ha-arrow)"/>
        {/* Search service */}
        <rect x="330" y="105" width="140" height="90" rx="2" fill="#1F2D24"/>
        <text x="400" y="130" textAnchor="middle" fill="#EDE7DC" fontSize="11">SEARCH SERVICE</text>
        <text x="400" y="146" textAnchor="middle" fill="#7E9C7A" fontSize="9">Go · gRPC</text>
        <text x="400" y="170" textAnchor="middle" fill="#EDE7DC" fontSize="9">4-phase routing</text>
        <text x="400" y="184" textAnchor="middle" fill="#7E9C7A" fontSize="9">+ Optimizely flags</text>
        {/* Phase fan-out */}
        <line x1="470" y1="135" x2="540" y2="60"  stroke="#2F4A37" strokeWidth="1.2" markerEnd="url(#ha-arrow)"/>
        <line x1="470" y1="150" x2="540" y2="130" stroke="#2F4A37" strokeWidth="1.2" markerEnd="url(#ha-arrow)"/>
        <line x1="470" y1="160" x2="540" y2="200" stroke="#2F4A37" strokeWidth="1.2" strokeDasharray="4 3" markerEnd="url(#ha-arrow)"/>
        <line x1="470" y1="175" x2="540" y2="270" stroke="#2F4A37" strokeWidth="1.2" strokeDasharray="2 4" markerEnd="url(#ha-arrow)"/>
        {/* Phase boxes */}
        <rect x="540" y="38"  width="220" height="44" rx="2" fill="#F4EFE5" stroke="#1A2018"/>
        <text x="552" y="56"  fontSize="9" fill="#2F4A37">PHASE 1 · NATIVE</text>
        <text x="552" y="72"  fontSize="11">Alaska reservation system</text>
        <rect x="540" y="105" width="220" height="44" rx="2" fill="#F4EFE5" stroke="#1A2018"/>
        <text x="552" y="123" fontSize="9" fill="#2F4A37">PHASE 2 · CODE-SHARE</text>
        <text x="552" y="139" fontSize="11">Partner-operated</text>
        <rect x="540" y="172" width="220" height="44" rx="2" fill="#1A2018" stroke="#7E9C7A"/>
        <text x="552" y="190" fontSize="9" fill="#7E9C7A">PHASE 3 · GATED</text>
        <text x="552" y="206" fontSize="11" fill="#EDE7DC">Hawaiian reservation system</text>
        <rect x="540" y="240" width="220" height="44" rx="2" fill="#F4EFE5" stroke="#1A2018"/>
        <text x="552" y="258" fontSize="9" fill="#2F4A37">PHASE 4 · MISS</text>
        <text x="552" y="274" fontSize="11">Typed not-found response</text>
        {/* Flag annotation */}
        <line x1="780" y1="194" x2="900" y2="194" stroke="#7E9C7A" strokeDasharray="3 3" strokeWidth="1"/>
        <text x="908" y="190" fontSize="9" fill="#2F4A37">CAPABILITY FLAG</text>
        <text x="908" y="202" fontSize="9" fill="#2F4A37">+ ROUTING FLAG</text>
      </g>
    </svg>
  )
}

export default function HawaiianAcquisition() {
  return (
    <CaseStudyLayout
      number="01"
      eyebrow="Case study · No. 01"
      titleLines={TITLE_LINES}
      subtitle="A two-layer feature flag strategy and a four-phase reservation lookup system that supported a hard-cutover airline merger — with no downtime, no guest-facing disruption, and a single-moment switchover the day the deal closed."
      meta={META}
      nextStudy={NEXT}
    >

      <h2 className="cs-h2 reveal">The <span className="it">situation.</span></h2>
      <p className="cs-p reveal">In late 2024, Alaska Airlines completed its acquisition of Hawaiian Airlines. From a guest's perspective, the merger had a single visible moment: the day Alaska assumed Hawaiian's operating certificate, every Hawaiian reservation effectively became an Alaska reservation. Internally, that switchover meant <strong>two reservation systems became one</strong> — but the cutover had to happen without any guest noticing.</p>
      <p className="cs-p reveal">My team owned the search service that powers <strong>airport check-in</strong> and the mobile app's <strong>"find my trip"</strong> flow. Every kiosk lookup, every agent search at the counter, every "Manage Trip" tap — all of it routed through us. We had to keep that surface working flawlessly while the system underneath was being rewired.</p>

      <div className="cs-callout reveal">
        <p>The core constraint: <strong>this was not a gradual migration</strong>. There was a single legal moment when Hawaiian PNRs became Alaska's responsibility. Either we were ready that morning, or guests at the airport would see errors at the busiest part of their day.</p>
      </div>

      <h2 className="cs-h2 reveal">The <span className="it">constraints.</span></h2>
      <ol className="cs-decisions reveal">
        <li><strong>No downtime.</strong> Check-in is a 24/7 surface. Every minute the search API is unavailable, agents fall back to manual workflows that don't scale.</li>
        <li><strong>No guest-facing disruption.</strong> A guest who booked through Hawaiian's site three months ago expects their record locator to keep working — even though the underlying system has changed.</li>
        <li><strong>A hard legal cutover, not a phased migration.</strong> We could not "drain traffic" to the new system over weeks. The flip had to happen at a specific moment.</li>
        <li><strong>Reversibility.</strong> If something went wrong on day one, we needed to roll back — fast — without redeploying.</li>
        <li><strong>Coordination across teams.</strong> Changes in our service had to land in lockstep with changes in upstream reservation systems and downstream check-in surfaces.</li>
      </ol>

      <h2 className="cs-h2 reveal">The <span className="it">approach.</span></h2>
      <p className="cs-p reveal">I designed the rollout around <strong>two layered feature flags</strong> and a <strong>four-phase reservation search</strong>. The flags decoupled <em>"can we look up Hawaiian PNRs?"</em> from <em>"should we look up Hawaiian PNRs by default?"</em> — which is the distinction that made the cutover safely reversible.</p>

      <h3 className="cs-h3 reveal">Two layers of feature flags</h3>
      <div className="cs-cards reveal">
        <div className="cs-card">
          <div className="cs-card-l">Layer 1 · Capability flag</div>
          <div className="cs-card-t"><code>hawaiian_search_enabled</code></div>
          <div className="cs-card-d">Controlled whether the service was <strong>capable</strong> of looking up Hawaiian reservations at all. Turned on early, tested with internal traffic, and stayed on through the cutover. This let us rehearse without committing.</div>
        </div>
        <div className="cs-card">
          <div className="cs-card-l">Layer 2 · Routing flag</div>
          <div className="cs-card-t"><code>hawaiian_search_default</code></div>
          <div className="cs-card-d">Controlled whether Hawaiian was searched <strong>by default</strong> when no carrier was specified. This is the flag that flipped on cutover day. If anything went wrong, flipping just this flag — without touching capability — restored prior behavior in seconds.</div>
        </div>
      </div>

      <div className="cs-callout reveal">
        <p>The instinct on a project like this is to ship one big flag — <code>merger_complete</code> — and flip it on the day. <strong>I argued for two.</strong> One flag conflates "is this code path live" with "is it the default path," which means rolling back forces you to also roll back the capability — and that's the part that's hardest to verify works under load.</p>
      </div>

      <h3 className="cs-h3 reveal">Four-phase search algorithm</h3>
      <p className="cs-p reveal">When a guest enters a confirmation code at a kiosk, we don't know which carrier issued it. The search has to find the reservation regardless of where it lives. I broke the lookup into four ordered phases, each falling through to the next on miss:</p>

      <div className="cs-phase reveal">
        <div className="cs-phase-l">Phase 1 · Native</div>
        <div>
          <div className="cs-phase-t">Search Alaska's reservation system first.</div>
          <div className="cs-phase-d">99% of traffic resolves here. Cheapest, fastest, no cross-system call.</div>
        </div>
      </div>
      <div className="cs-phase reveal">
        <div className="cs-phase-l">Phase 2 · Code-share</div>
        <div>
          <div className="cs-phase-t">Try Alaska as a marketing carrier on a partner's metal.</div>
          <div className="cs-phase-d">Catches guests who booked an Alaska code on a Hawaiian-operated flight before the merger.</div>
        </div>
      </div>
      <div className="cs-phase reveal">
        <div className="cs-phase-l">Phase 3 · Hawaiian native (gated)</div>
        <div>
          <div className="cs-phase-t">Search Hawaiian's reservation system directly.</div>
          <div className="cs-phase-d">Gated by both feature flags. The expensive call — only invoked if Alaska-side has no record. <strong>This is the lookup that came online at cutover.</strong></div>
        </div>
      </div>
      <div className="cs-phase reveal">
        <div className="cs-phase-l">Phase 4 · Surface a clean miss</div>
        <div>
          <div className="cs-phase-t">Return a typed "not found" — never a 500.</div>
          <div className="cs-phase-d">A miss is a normal outcome (guests mistype codes constantly). The agent UI handles it gracefully; the kiosk prompts for re-entry.</div>
        </div>
      </div>

      <div className="cs-diagram reveal">
        <SearchDiagram />
        <p className="cs-diagram-cap">Fig. 01 — Request path through the four-phase search service</p>
      </div>

      <h2 className="cs-h2 reveal">Decisions worth <span className="it">naming.</span></h2>
      <ol className="cs-decisions reveal">
        <li><strong>Two flags, not one.</strong> Capability and routing are different questions, and merging them makes the rollback path slower than the failure mode it's meant to protect against.</li>
        <li><strong>Order phases by cost, not by carrier.</strong> The merger framing pulled toward "Alaska first, Hawaiian second" — but the right ordering was about <em>where the record most likely lives</em>, which kept Alaska first and pushed code-share lookups in front of cross-system calls.</li>
        <li><strong>Treat "not found" as a typed result.</strong> Most engineers reach for a 404. But a missing reservation is a <em>normal</em> outcome of search, not an exception. We returned a structured <code>NoMatch</code> with a reason code so the BFF could render the right UI without parsing HTTP semantics.</li>
        <li><strong>Rehearse the cutover, twice.</strong> Once in staging with synthetic Hawaiian PNRs, once in production with capability on but routing off. The rehearsal is what bought confidence; the actual flip on cutover day was a non-event.</li>
      </ol>

      <h2 className="cs-h2 reveal">The <span className="it">outcome.</span></h2>

      <div className="cs-highlight reveal">
        <span className="stat">0</span>
        <span className="lab"><strong>Guest-facing incidents</strong> on cutover day or in the week following. Hawaiian PNRs began resolving through Alaska's check-in surface the moment the routing flag flipped.</span>
      </div>
      <div className="cs-highlight reveal">
        <span className="stat">~&nbsp;60s</span>
        <span className="lab"><strong>Rollback budget.</strong> A bad result on cutover morning could have been reverted by toggling a single Optimizely flag — no deploy, no agent intervention.</span>
      </div>

      <p className="cs-p reveal" style={{ marginTop: '2rem' }}>The search surface stayed boring on cutover day, which was the goal. Internally, the four-phase structure has since become the template for how the team thinks about cross-system reservation lookups — including for the partnerships and code-shares that pre-date the merger.</p>

      <h2 className="cs-h2 reveal">What I'd <span className="it">take with me.</span></h2>
      <p className="cs-p reveal">The interesting part of this project wasn't the code — it was the <strong>framing of the rollback path</strong>. Most rollout designs optimize for the success case. The thing that made this one work was thinking, very specifically, about the failure mode I was most afraid of (a 5am pager on cutover day) and designing two flags whose only job was to make that failure recoverable in under a minute.</p>
      <p className="cs-p reveal">It's a small architectural choice — two booleans instead of one. But the value it produced was almost entirely about <strong>peace of mind</strong>: the team could ship the code weeks ahead, rehearse the flip, and treat cutover day as a calm operational task rather than a crisis to survive.</p>

      <hr className="cs-divider" />

      <div className="cs-tag-row reveal">
        {['Go','gRPC','Node.js BFF','Optimizely','Feature flags','Backend architecture','Migration'].map(t => (
          <span key={t} className="cs-tag">{t}</span>
        ))}
      </div>

    </CaseStudyLayout>
  )
}
