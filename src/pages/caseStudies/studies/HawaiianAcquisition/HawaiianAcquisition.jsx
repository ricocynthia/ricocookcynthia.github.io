import CaseStudyLayout from '../../CaseStudyLayout'
import './HawaiianAcquisition.css'

const meta = [
  { label: 'Role', value: 'Designer + implementer' },
  { label: 'Timeline', value: 'About a month' },
  { label: 'Stack', value: 'Go, gRPC, Node.js BFF, Vue' },
  { label: 'Constraint', value: 'Hard cutover, broken lower envs' },
]

const tags = ['Go', 'gRPC', 'Node.js BFF', 'Vue', 'Optimizely', 'Sabre', 'Amadeus PNRs', 'Kubernetes', 'Azure', 'ArgoCD']

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
      title="Designing the Check-in Search API for Alaska Airlines' Hawaiian Airlines Acquisition"
      subtitle="How I designed a two-layer feature flag strategy and phased reservation search system to support a hard cutover merger, with no downtime and no guest-facing disruption."
      meta={meta}
    >
      <h2 className="cs-section-h">The problem</h2>
      <p className="cs-body">When Alaska Airlines acquired Hawaiian Airlines, every HA guest with an existing booking still needed to check in. At the moment of the merger cutover, those reservations could live in one of two systems: some had already been migrated into Sabre, Alaska's reservation platform, while others still lived in Hawaiian's legacy system backed by Amadeus PNRs.</p>
      <p className="cs-body">The check-in platform needed to find a guest's reservation regardless of where it lived, correctly and immediately from the moment the merger went live. Before this work, HA guests searching on Alaska's check-in platform hit a dead end and were told to check in at the airport.</p>

      <div className="cs-callout">
        <p>There was a compounding constraint: lower environments had no connectivity between Alaska and Hawaiian systems. End-to-end integration testing the normal way wasn't possible. <strong>Any solution had to be testable in production against internal users only.</strong></p>
      </div>

      <h2 className="cs-section-h">Frontend change: departure city to last name</h2>
      <p className="cs-body">The existing check-in lookup page asked guests for their departure city as a secondary identifier. The HA legacy API only accepted last name, not departure city. The frontend form, the BFF parameter contract, and the backend search logic all needed to change together.</p>
      <p className="cs-body">To test safely given the environment limitations, I added an Optimizely feature flag controlling the frontend input switch. The flag audience was scoped to internal users only, identified by a specific cookie set in the browser. No guests ever saw the last name field mid-build. Once internal testing passed, the flag was opened for the full cutover.</p>

      <hr className="cs-divider" />

      <h2 className="cs-section-h">Flag architecture: two layers, two purposes</h2>
      <div className="ha-flag-row">
        <div className="ha-flag-card">
          <p className="ha-flag-label">Frontend</p>
          <p className="ha-flag-title">Optimizely</p>
          <p className="ha-flag-body">Controlled the departure city to last name switch on the lookup page. Scoped to internal users via browser cookie. The only practical way to test end-to-end given unusable lower environments.</p>
        </div>
        <div className="ha-flag-card">
          <p className="ha-flag-label">Backend</p>
          <p className="ha-flag-title">Environment variables</p>
          <p className="ha-flag-body">Two independent flags controlling which HA search paths were active. Chosen over a runtime flag service for speed: a hard cutover with a defined go-live moment didn't need per-user rollout granularity.</p>
        </div>
      </div>

      <hr className="cs-divider" />

      <h2 className="cs-section-h">Search flow architecture</h2>
      <p className="cs-body">The diagram below shows how the check-in search API routes a reservation lookup, with the two feature-flag-controlled paths highlighted by phase.</p>
      <div className="ha-diagram-wrap">
        <SearchDiagram />
      </div>

      <hr className="cs-divider" />

      <h2 className="cs-section-h">The two-phase search rollout</h2>

      <div className="cs-phase-card">
        <p className="cs-phase-label">Phase 1</p>
        <p className="cs-phase-title">HA legacy reservations: find and redirect to online check-in</p>
        <p className="cs-phase-body">As part of the acquisition, Alaska was given access to the HA Reservations API, enabling lookups against Hawaiian's Amadeus PNRs for the first time. My job was to integrate that API into Alaska's check-in search correctly: designing the fallback logic, the parameter contract, and the client signal that redirected guests to Hawaiian's own check-in flow to complete the process. Guests who previously hit a "check in at the airport" dead end now had a real path forward, while full PSS migration was still underway.</p>
      </div>

      <div className="cs-phase-card">
        <p className="cs-phase-label">Phase 2</p>
        <p className="cs-phase-title">Migrated PNRs: search within Sabre</p>
        <p className="cs-phase-body">As HA reservations migrated into Sabre, a second search path became necessary. If a standard Sabre lookup returned no results, the system made an additional call filtered by <strong>IsMigrated=true</strong>, targeting reservations that originated in Amadeus but had moved over. Migrated HA guests could then check in natively through Alaska's platform with no redirect.</p>
      </div>

      <div className="cs-callout">
        <p><strong>Looking ahead:</strong> once the full PSS cutover is complete and all HA reservations have migrated, the plan is to disable the legacy HA Reservations API call entirely. It's an expensive external call, and keeping it active post-migration adds unnecessary latency for every guest who falls into the fallback path. The env var flag makes that a one-line config change with no deployment required.</p>
      </div>

      <h2 className="cs-section-h">Backward compatibility</h2>
      <p className="cs-body">Switching from departure city to last name had to be handled carefully, since changing the contract globally would have broken standard Alaska check-in flows. The solution: treat last name as a conditionally-used parameter. The HA legacy API call is only attempted when last name is present in the request. If it's absent, that branch is skipped entirely, with no error surfaced and no change required from existing callers.</p>

      <h2 className="cs-section-h">Key decisions</h2>
      <ol className="cs-decision-list">
        <li>Optimizely with a cookie-based internal audience: the only practical way to test end-to-end given broken lower environments.</li>
        <li>Two independent backend flags: migrated and legacy HA paths could be enabled separately, and the legacy path can be cleanly disabled once PSS cutover is complete.</li>
        <li>Phase 1 redirect to HA online check-in: replaced a "check in at the airport" dead end with a real path forward for guests.</li>
        <li>Fail silent when last name is absent: preserving the existing search contract with no caller updates required.</li>
        <li>Priority-ordered search with early returns: HA fallback paths only run when Sabre returns nothing, keeping latency low for the Alaska majority.</li>
      </ol>

      <hr className="cs-divider" />

      <h2 className="cs-section-h">Stack</h2>
      <div className="cs-tag-row">
        {tags.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
    </CaseStudyLayout>
  )
}