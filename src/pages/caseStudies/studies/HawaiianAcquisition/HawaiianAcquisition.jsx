import CaseStudyLayout from '../../CaseStudyLayout'
import './HawaiianAcquisition.css'

const TITLE_LINES = [
  { text: 'Designing the' },
  { text: 'check-in search API for' },
  { text: 'Alaska\'s acquisition of' },
  { text: 'Hawaiian Airlines.', italic: true },
]

const META = [
  { key: 'Role',       val: 'Designer + implementer' },
  { key: 'Scope',      val: 'About a month' },
  { key: 'Stack',      val: 'Go · gRPC · Node.js BFF · Vue' },
  { key: 'Constraint', val: 'Hard cutover, broken lower envs' },
  { key: 'Outcome',    val: 'Zero-downtime merger cutover' },
]

const NEXT = {
  label: 'Up next · Case study no. 02',
  title: 'Diagnosing a misclassified 404 in the <span class="it">Same Day Change endpoint.</span>',
  href: '/case-studies/sdc-eligibility',
  num: '02',
}

function SearchDiagram() {
  return (
    <svg className="ha-diagram" width="100%" viewBox="0 0 680 660" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </marker>
      </defs>

      <g className="ha-node ha-gray">
        <rect x="220" y="20" width="240" height="44" rx="8" strokeWidth="0.5"/>
        <text className="ha-th" x="340" y="38" textAnchor="middle" dominantBaseline="central">Guest enters reservation</text>
        <text className="ha-ts" x="340" y="56" textAnchor="middle" dominantBaseline="central">Locator (6 chars) or ticket number</text>
      </g>

      <line x1="340" y1="64" x2="340" y2="100" className="ha-arr" markerEnd="url(#arrow)"/>

      <g className="ha-node ha-gray">
        <rect x="220" y="100" width="240" height="44" rx="8" strokeWidth="0.5"/>
        <text className="ha-th" x="340" y="118" textAnchor="middle" dominantBaseline="central">Search Sabre</text>
        <text className="ha-ts" x="340" y="136" textAnchor="middle" dominantBaseline="central">Standard Alaska reservation lookup</text>
      </g>

      <text className="ha-ts" x="510" y="128" textAnchor="start">Found</text>
      <path d="M460 122 L540 122 L540 600 L500 600" className="ha-arr" markerEnd="url(#arrow)" fill="none"/>

      <text className="ha-ts" x="348" y="170" textAnchor="start">Not found</text>
      <line x1="340" y1="144" x2="340" y2="200" className="ha-arr" markerEnd="url(#arrow)"/>

      <g className="ha-node ha-teal">
        <rect x="180" y="200" width="320" height="44" rx="8" strokeWidth="0.5"/>
        <text className="ha-th" x="340" y="218" textAnchor="middle" dominantBaseline="central">Flag: search HA migrated PNRs?</text>
        <text className="ha-ts" x="340" y="236" textAnchor="middle" dominantBaseline="central">Phase 2, env var controlled</text>
      </g>

      <text className="ha-ts" x="108" y="272" textAnchor="middle">Enabled</text>
      <line x1="180" y1="222" x2="110" y2="290" className="ha-arr" markerEnd="url(#arrow)"/>

      <text className="ha-ts" x="410" y="272" textAnchor="start">Disabled</text>
      <line x1="380" y1="244" x2="380" y2="310" className="ha-arr" markerEnd="url(#arrow)"/>

      <g className="ha-node ha-teal">
        <rect x="20" y="290" width="180" height="56" rx="8" strokeWidth="0.5"/>
        <text className="ha-th" x="110" y="308" textAnchor="middle" dominantBaseline="central">Search Sabre</text>
        <text className="ha-ts" x="110" y="326" textAnchor="middle" dominantBaseline="central">IsMigrated=true filter</text>
      </g>

      <text className="ha-ts" x="26" y="375" textAnchor="start">Found</text>
      <path d="M110 346 L110 600 L260 600" className="ha-arr" markerEnd="url(#arrow)" fill="none"/>

      <text className="ha-ts" x="210" y="362" textAnchor="start">Not found</text>
      <path d="M200 318 L380 318" className="ha-arr" markerEnd="url(#arrow)" fill="none"/>

      <g className="ha-node ha-coral">
        <rect x="220" y="310" width="320" height="44" rx="8" strokeWidth="0.5"/>
        <text className="ha-th" x="380" y="328" textAnchor="middle" dominantBaseline="central">Flag: search HA legacy system?</text>
        <text className="ha-ts" x="380" y="346" textAnchor="middle" dominantBaseline="central">Phase 1, env var controlled</text>
      </g>

      <text className="ha-ts" x="565" y="338" textAnchor="start">Disabled</text>
      <line x1="540" y1="332" x2="560" y2="332" className="ha-arr" markerEnd="url(#arrow)"/>

      <text className="ha-ts" x="388" y="382" textAnchor="start">Enabled</text>
      <line x1="380" y1="354" x2="380" y2="410" className="ha-arr" markerEnd="url(#arrow)"/>

      <g className="ha-node ha-coral">
        <rect x="220" y="410" width="320" height="44" rx="8" strokeWidth="0.5"/>
        <text className="ha-th" x="380" y="428" textAnchor="middle" dominantBaseline="central">Last name present in request?</text>
        <text className="ha-ts" x="380" y="446" textAnchor="middle" dominantBaseline="central">HA API requires last name</text>
      </g>

      <text className="ha-ts" x="565" y="438" textAnchor="start">No</text>
      <line x1="540" y1="432" x2="560" y2="432" className="ha-arr" markerEnd="url(#arrow)"/>
      <text className="ha-ts" x="564" y="452" textAnchor="start">Fail silent</text>

      <text className="ha-ts" x="388" y="480" textAnchor="start">Yes</text>
      <line x1="380" y1="454" x2="380" y2="500" className="ha-arr" markerEnd="url(#arrow)"/>

      <g className="ha-node ha-coral">
        <rect x="220" y="500" width="320" height="56" rx="8" strokeWidth="0.5"/>
        <text className="ha-th" x="380" y="520" textAnchor="middle" dominantBaseline="central">Call HA Reservations API</text>
        <text className="ha-ts" x="380" y="538" textAnchor="middle" dominantBaseline="central">Amadeus PNRs, last name lookup</text>
      </g>

      <line x1="380" y1="556" x2="380" y2="600" className="ha-arr" markerEnd="url(#arrow)"/>

      <g className="ha-node ha-gray">
        <rect x="220" y="600" width="240" height="44" rx="8" strokeWidth="0.5"/>
        <text className="ha-th" x="340" y="622" textAnchor="middle" dominantBaseline="central">Return results to client</text>
      </g>

      <rect x="20" y="620" width="12" height="12" rx="2" fill="#1D9E75" opacity="0.7"/>
      <text className="ha-ts" x="38" y="630" fill="currentColor">Phase 2 (migrated PNRs)</text>
      <rect x="20" y="638" width="12" height="12" rx="2" fill="#D85A30" opacity="0.7"/>
      <text className="ha-ts" x="38" y="648" fill="currentColor">Phase 1 (HA legacy)</text>
    </svg>
  )
}

export default function HawaiianAcquisition() {
  return (
    <CaseStudyLayout
      number="01"
      eyebrow="Case study · No. 01"
      titleLines={TITLE_LINES}
      subtitle="How I designed a two-layer feature flag strategy and phased reservation search system to support a hard cutover merger — with no downtime and no guest-facing disruption."
      meta={META}
      nextStudy={NEXT}
    >

      <h2 className="cs-h2 reveal">The <span className="it">situation.</span></h2>
      <p className="cs-p reveal">When Alaska Airlines acquired Hawaiian Airlines, every HA guest with an existing booking still needed to check in. At the moment of the merger cutover, those reservations could live in one of two systems: some had already been migrated into Sabre, Alaska's reservation platform, while others still lived in Hawaiian's legacy system backed by Amadeus PNRs.</p>
      <p className="cs-p reveal">The check-in platform needed to find a guest's reservation regardless of where it lived, correctly and immediately from the moment the merger went live. Before this work, HA guests searching on Alaska's check-in platform hit a dead end and were told to check in at the airport.</p>

      <div className="cs-callout reveal">
        <p>There was a compounding constraint: <strong>lower environments had no connectivity between Alaska and Hawaiian systems.</strong> End-to-end integration testing the normal way wasn't possible. Any solution had to be testable in production against internal users only.</p>
      </div>

      <h2 className="cs-h2 reveal">The <span className="it">constraints.</span></h2>
      <ol className="cs-decisions reveal">
        <li><strong>Broken lower environments.</strong> Alaska and Hawaiian systems had no cross-connectivity in staging or QA. The only way to test end-to-end was in production, scoped to internal users via browser cookie.</li>
        <li><strong>A hard legal cutover, not a phased migration.</strong> There was no option to drain traffic gradually. The flip had to happen at a specific legal moment, and it had to work immediately.</li>
        <li><strong>Backward compatibility.</strong> Switching from departure city to last name as the secondary identifier couldn't break standard Alaska check-in flows. Existing callers needed zero changes.</li>
        <li><strong>Reversibility.</strong> If something went wrong on cutover day, rollback had to be fast — no redeploy, no manual intervention.</li>
        <li><strong>Cross-team coordination.</strong> The frontend form, BFF parameter contract, and backend search logic all had to change in lockstep.</li>
      </ol>

      <h2 className="cs-h2 reveal">The <span className="it">approach.</span></h2>

      <h3 className="cs-h3 reveal">Frontend change: departure city to last name</h3>
      <p className="cs-p reveal">The existing check-in lookup page asked guests for their departure city as a secondary identifier. The HA legacy API only accepted last name, not departure city. The frontend form, the BFF parameter contract, and the backend search logic all needed to change together.</p>
      <p className="cs-p reveal">To test safely given the environment limitations, I added an Optimizely feature flag controlling the frontend input switch. The flag audience was scoped to internal users only, identified by a specific cookie set in the browser. No guests ever saw the last name field mid-build. Once internal testing passed, the flag was opened for the full cutover.</p>

      <h3 className="cs-h3 reveal">Two layers of feature flags</h3>
      <div className="cs-cards reveal">
        <div className="cs-card">
          <div className="cs-card-l">Frontend</div>
          <div className="cs-card-t">Optimizely</div>
          <div className="cs-card-d">Controlled the departure city → last name switch on the lookup page. Scoped to internal users via browser cookie. The only practical way to test end-to-end given unusable lower environments.</div>
        </div>
        <div className="cs-card">
          <div className="cs-card-l">Backend</div>
          <div className="cs-card-t">Environment variables</div>
          <div className="cs-card-d">Two independent flags controlling which HA search paths were active. Chosen over a runtime flag service for speed: a hard cutover with a defined go-live moment didn't need per-user rollout granularity.</div>
        </div>
      </div>

      <h3 className="cs-h3 reveal">Search flow architecture</h3>
      <p className="cs-p reveal">The diagram below shows how the check-in search API routes a reservation lookup, with the two feature-flag-controlled paths highlighted by phase.</p>

      <div className="cs-diagram reveal">
        <SearchDiagram />
        <p className="cs-diagram-cap">Fig. 01 — Request path through the two-phase search service</p>
      </div>

      <h3 className="cs-h3 reveal">The two-phase search rollout</h3>
      <div className="cs-phase reveal">
        <div className="cs-phase-l">Phase 1 · HA legacy</div>
        <div>
          <div className="cs-phase-t">HA legacy reservations: find and redirect to online check-in.</div>
          <div className="cs-phase-d">As part of the acquisition, Alaska was given access to the HA Reservations API, enabling lookups against Hawaiian's Amadeus PNRs for the first time. My job was to integrate that API into Alaska's check-in search correctly: designing the fallback logic, the parameter contract, and the client signal that redirected guests to Hawaiian's own check-in flow to complete the process. Guests who previously hit a "check in at the airport" dead end now had a real path forward, while full PSS migration was still underway.</div>
        </div>
      </div>
      <div className="cs-phase reveal">
        <div className="cs-phase-l">Phase 2 · Migrated PNRs</div>
        <div>
          <div className="cs-phase-t">Migrated PNRs: search within Sabre.</div>
          <div className="cs-phase-d">As HA reservations migrated into Sabre, a second search path became necessary. If a standard Sabre lookup returned no results, the system made an additional call filtered by <strong>IsMigrated=true</strong>, targeting reservations that originated in Amadeus but had moved over. Migrated HA guests could then check in natively through Alaska's platform with no redirect.</div>
        </div>
      </div>

      <div className="cs-callout reveal">
        <p><strong>Looking ahead:</strong> once the full PSS cutover is complete and all HA reservations have migrated, the plan is to disable the legacy HA Reservations API call entirely. It's an expensive external call, and keeping it active post-migration adds unnecessary latency for every guest who falls into the fallback path. The env var flag makes that a one-line config change with no deployment required.</p>
      </div>

      <h2 className="cs-h2 reveal">Backward <span className="it">compatibility.</span></h2>
      <p className="cs-p reveal">Switching from departure city to last name had to be handled carefully, since changing the contract globally would have broken standard Alaska check-in flows. The solution: treat last name as a conditionally-used parameter. The HA legacy API call is only attempted when last name is present in the request. If it's absent, that branch is skipped entirely, with no error surfaced and no change required from existing callers.</p>

      <h2 className="cs-h2 reveal">Decisions worth <span className="it">naming.</span></h2>
      <ol className="cs-decisions reveal">
        <li><strong>Optimizely with a cookie-based internal audience.</strong> The only practical way to test end-to-end given broken lower environments. Scoping the flag to an internal cookie meant production traffic was the test environment, but no guest was ever exposed mid-build.</li>
        <li><strong>Two independent backend flags.</strong> The migrated and legacy HA paths could be enabled separately, and the legacy path can be cleanly disabled once PSS cutover is complete — with no deployment required.</li>
        <li><strong>Phase 1 redirect to HA online check-in.</strong> Replaced a "check in at the airport" dead end with a real path forward for guests, while full PSS migration was still underway.</li>
        <li><strong>Fail silent when last name is absent.</strong> Preserving the existing search contract with no caller updates required.</li>
        <li><strong>Priority-ordered search with early returns.</strong> HA fallback paths only run when Sabre returns nothing, keeping latency low for the Alaska majority.</li>
      </ol>

      <h2 className="cs-h2 reveal">The <span className="it">outcome.</span></h2>

      <div className="cs-highlight reveal">
        <span className="stat">0</span>
        <span className="lab"><strong>Guest-facing incidents</strong> on cutover day. Hawaiian PNRs began resolving through Alaska's check-in surface from the moment the flags flipped — airport agents and kiosks kept working without interruption.</span>
      </div>
      <div className="cs-highlight reveal">
        <span className="stat">~&nbsp;60s</span>
        <span className="lab"><strong>Rollback budget.</strong> A bad result on cutover morning could have been reverted by toggling a single env var — no deploy, no agent intervention.</span>
      </div>

      <p className="cs-p reveal" style={{ marginTop: '2rem' }}>The search surface stayed boring on cutover day, which was the goal. The two-phase flag structure has since become the pattern for how the team approaches cross-system reservation lookups — including for partnerships and code-shares that pre-date the merger.</p>

      <hr className="cs-divider" />

      <div className="cs-tag-row reveal">
        {['Go','gRPC','Node.js BFF','Vue','Optimizely','Sabre','Amadeus PNRs','Kubernetes','Azure','ArgoCD'].map(t => (
          <span key={t} className="cs-tag">{t}</span>
        ))}
      </div>

    </CaseStudyLayout>
  )
}
