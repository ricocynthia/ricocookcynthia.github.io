import CaseStudyLayout from '../../CaseStudyLayout'
import './SDCEligibility.css'

const meta = [
  { label: 'Role', value: 'Investigator + solution author' },
  { label: 'Timeline', value: 'A few days' },
  { label: 'Stack', value: 'Node.js BFF' },
  { label: 'Type', value: 'Bug discovery + handoff' },
]
 
const tags = ['Node.js', 'BFF', 'Quantum Metric', 'Same Day Change', 'API Design']
 
function ResponseDiagram() {
  return (
    <svg width="100%" viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg" style={{ fontFamily: 'inherit' }}>
      <defs>
        <marker id="arrow-sdc" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </marker>
      </defs>
 
      {/* Client */}
      <g>
        <rect x="20" y="20" width="160" height="44" rx="8" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
        <text x="100" y="38" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="600" fill="currentColor">BFF endpoint</text>
        <text x="100" y="56" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="currentColor" opacity="0.6">GET /sdc/eligible</text>
      </g>
 
      {/* Arrow down */}
      <line x1="100" y1="64" x2="100" y2="110" stroke="currentColor" strokeWidth="1" opacity="0.4" markerEnd="url(#arrow-sdc)"/>
 
      {/* Internal AS API */}
      <g>
        <rect x="20" y="110" width="160" height="44" rx="8" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
        <text x="100" y="128" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="600" fill="currentColor">SDC Eligible API</text>
        <text x="100" y="146" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="currentColor" opacity="0.6">Internal AS endpoint</text>
      </g>
 
      {/* Arrow: eligible */}
      <text x="198" y="148" fontSize="10" fill="currentColor" opacity="0.6">eligible: true</text>
      <path d="M180 132 L340 132 L340 210" stroke="currentColor" strokeWidth="1" opacity="0.4" fill="none" markerEnd="url(#arrow-sdc)"/>
 
      {/* Arrow: not eligible (before) */}
      <text x="198" y="182" fontSize="10" fill="#D85A30">eligible: false</text>
      <path d="M180 154 L460 154 L460 210" stroke="#D85A30" strokeWidth="1" fill="none" markerEnd="url(#arrow-sdc)"/>
 
      {/* Before box: 404 */}
      <g>
        <rect x="280" y="210" width="120" height="44" rx="8" fill="none" stroke="#D85A30" strokeWidth="1"/>
        <text x="340" y="228" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="700" fill="#D85A30">404</text>
        <text x="340" y="246" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="#D85A30">Before (wrong)</text>
      </g>
 
      {/* After box: 200 */}
      <g>
        <rect x="400" y="210" width="160" height="44" rx="8" fill="none" stroke="#1D9E75" strokeWidth="1"/>
        <text x="480" y="228" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="700" fill="#1D9E75">200 + eligible: false</text>
        <text x="480" y="246" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="#1D9E75">After (correct)</text>
      </g>
 
      {/* Divider label */}
      <line x1="20" y1="295" x2="660" y2="295" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
      <rect x="20" y="308" width="12" height="12" rx="2" fill="#D85A30" opacity="0.7"/>
      <text x="38" y="317" fontSize="10" fill="currentColor" opacity="0.6">Before: non-eligibility misclassified as error</text>
      <rect x="300" y="308" width="12" height="12" rx="2" fill="#1D9E75" opacity="0.7"/>
      <text x="318" y="317" fontSize="10" fill="currentColor" opacity="0.6">After: 200 with eligibility payload</text>
    </svg>
  )
}
 
export default function SDCEligibility() {
  return (
    <CaseStudyLayout
      title="Diagnosing a Misclassified 404 in the Same Day Change Eligibility Endpoint"
      subtitle="How a spike in 404 errors turned out to be correct business logic incorrectly expressed as an HTTP error, and how I traced it, reframed it for stakeholders, and handed it off for a clean fix."
      meta={meta}
    >
      <h2 className="cs-section-h">The problem</h2>
      <p className="cs-body">The Quantum Metric team flagged a spike in 404 responses from our Same Day Change (SDC) eligibility endpoint. SDC lets guests change their flight on the same day of travel, and the endpoint is responsible for telling the frontend whether a given guest's reservation is eligible. At first glance, the spike looked like a broken endpoint.</p>
      <p className="cs-body">My EM dropped the ADO item in my queue to take a look. What I found was that the endpoint wasn't broken at all. The spike tracked almost exactly with increased traffic. A lot of those guests simply weren't eligible for SDC, and the BFF was returning a 404 for them every time.</p>
 
      <div className="cs-callout">
        <p>The endpoint was calling an internal Alaska API that returned a successful response with <strong>eligible: false</strong>. Instead of passing that through as a 200, the BFF was throwing a 404. Non-eligibility was being treated as an error condition when it was just a normal business outcome.</p>
        <p style={{ marginTop: '0.75rem' }}>Importantly, this did not affect the guest experience. When the 404 came back, the frontend simply didn't show the Same Day Change button. Guests who weren't eligible never saw a broken page or an error. The impact was entirely behind the scenes: misleading monitoring signals and a false picture of endpoint health.</p>
      </div>
 
      <h2 className="cs-section-h">How I traced it</h2>
      <p className="cs-body">The QM team shared session recordings that made the 404s visible. I took those sessions into QA and reproduced the issue myself: hit the endpoint for an ineligible PNR, got a 404 back. That was enough to know something was off.</p>
      <p className="cs-body">From there I went straight to the data gatherer in the BFF code. Reading through the logic, I could see exactly what was happening. The downstream API was returning a 200 with an eligibility payload. But when that payload indicated not eligible, the gatherer was treating it as a failure and throwing a 404 instead of returning the result as-is. The API call itself was working. The problem was entirely in how we were interpreting its response.</p>
      <p className="cs-body">This feature had been gated behind an Optimizely toggle since it was built about eight months ago, so it's possible the behavior had been there the whole time and just hadn't been visible at scale until traffic picked up.</p>
 
      <hr className="cs-divider" />
 
      <h2 className="cs-section-h">Response behavior: before and after</h2>
      <p className="cs-body">The diagram below shows how the BFF was incorrectly mapping non-eligibility to a 404, and what the corrected behavior looks like.</p>
      <div className="sdc-diagram-wrap">
        <ResponseDiagram />
      </div>
 
      <hr className="cs-divider" />
 
      <h2 className="cs-section-h">Reframing it for stakeholders</h2>
      <p className="cs-body">The framing mattered here. The initial concern from QM was that the endpoint was broken and generating errors. That framing would have made this an incident. What was actually happening was a logic bug that misclassified a normal outcome as an HTTP error. The endpoint was functioning, just returning the wrong status code for a valid business case.</p>
      <p className="cs-body">I documented my findings directly in the ADO item, including the root cause, the expected behavior, and the proposed fix. The fix itself is simple: when the downstream API returns a successful response with eligible: false, return a 200 with that payload instead of throwing a 404. No ambiguity in the outcome, just wrong response code.</p>
 
      <h2 className="cs-section-h">Ownership without history</h2>
      <p className="cs-body">The engineer who originally built this feature is no longer on the team. That could have been a reason to deprioritize it or treat it as someone else's problem. It wasn't. It's our product, and when something lands in my queue I treat it as mine regardless of who wrote the original code or how well I know that part of the codebase.</p>
      <p className="cs-body">I didn't have deep context on this feature going in. I learned what I needed to: how the endpoint was structured, what the gatherer was doing, what the downstream API actually returned. That was enough to identify the root cause and write a clear fix proposal. With my workload already full, I routed the implementation to one of our newer engineers. The ADO item had everything they needed, root cause, reproduction steps, proposed fix, so the handoff required no back-and-forth.</p>
 
      <div className="cs-callout">
        <p><strong>The broader takeaway:</strong> a 404 should mean "this resource doesn't exist," not "this guest isn't eligible." Eligibility is a business outcome, not an error state. Getting that distinction right matters both for frontend consumers who parse status codes and for monitoring tools that treat 4xx responses as signals of something going wrong.</p>
      </div>
 
      <h2 className="cs-section-h">Key decisions</h2>
      <ol className="cs-decision-list">
        <li>Reproduced in QA before drawing conclusions: session recordings alone weren't enough. I needed to confirm the behavior myself before writing anything up.</li>
        <li>Read the code, not just the logs: the root cause wasn't visible in Quantum Metric. It required going into the gatherer and following the response handling logic.</li>
        <li>Reframed the narrative early: communicating "logic bug, not broken endpoint" to the PM and EM before the fix was scoped prevented unnecessary urgency and kept the scope accurate.</li>
        <li>Documented everything in ADO: findings, root cause, and proposed fix all in one place made the handoff to the implementing engineer straightforward.</li>
      </ol>
 
      <hr className="cs-divider" />
 
      <h2 className="cs-section-h">Stack</h2>
      <div className="cs-tag-row">
        {tags.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
    </CaseStudyLayout>
  )
}