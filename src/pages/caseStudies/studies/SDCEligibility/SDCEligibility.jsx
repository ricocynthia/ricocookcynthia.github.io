import CaseStudyLayout from '../../CaseStudyLayout'
import './SDCEligibility.css'

const TITLE_LINES = [
  { text: 'Diagnosing a' },
  { text: 'misclassified 404 in the' },
  { text: 'Same Day Change', italic: true },
  { text: 'eligibility endpoint.', italic: true },
]

const META = [
  { key: 'Role',    val: 'Investigator + solution author' },
  { key: 'Scope',   val: 'A few days' },
  { key: 'Stack',   val: 'Node.js BFF · Quantum Metric' },
  { key: 'Type',    val: 'Bug discovery + handoff' },
  { key: 'Outcome', val: 'Correct HTTP semantics, clean monitoring' },
]

function ResponseDiagram() {
  return (
    <svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%' }}>
      <defs>
        <marker id="sdc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="#2F4A37"/>
        </marker>
        <marker id="sdc-arrow-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="#7A4628"/>
        </marker>
      </defs>
      <g fontFamily="DM Mono, monospace" fontSize="11" fill="#1A2018">
        {/* Client */}
        <rect x="10" y="115" width="130" height="50" rx="2" fill="#EDE7DC" stroke="#1A2018" strokeWidth="1"/>
        <text x="75" y="137" textAnchor="middle" fontSize="11">BFF endpoint</text>
        <text x="75" y="152" textAnchor="middle" fontSize="9" fill="#6E6557">GET /sdc/eligible</text>

        <line x1="140" y1="140" x2="200" y2="140" stroke="#2F4A37" strokeWidth="1.4" markerEnd="url(#sdc-arrow)"/>

        {/* Internal API */}
        <rect x="200" y="115" width="150" height="50" rx="2" fill="#1F2D24"/>
        <text x="275" y="137" textAnchor="middle" fill="#EDE7DC" fontSize="11">SDC Eligible API</text>
        <text x="275" y="152" textAnchor="middle" fill="#7E9C7A" fontSize="9">Internal AS endpoint</text>

        {/* eligible: true path */}
        <line x1="350" y1="130" x2="490" y2="80"  stroke="#2F4A37" strokeWidth="1.2" markerEnd="url(#sdc-arrow)"/>
        <text x="380" y="100" fontSize="9" fill="#2F4A37">eligible: true</text>

        {/* eligible: false — before path */}
        <line x1="350" y1="150" x2="490" y2="200" stroke="#7A4628" strokeWidth="1.2" strokeDasharray="4 3" markerEnd="url(#sdc-arrow-red)"/>
        <text x="358" y="185" fontSize="9" fill="#7A4628">eligible: false</text>

        {/* Good result box */}
        <rect x="490" y="55"  width="180" height="50" rx="2" fill="#F4EFE5" stroke="#1A2018" strokeWidth="1"/>
        <text x="502" y="75"  fontSize="9" fill="#2F4A37">CORRECT PATH</text>
        <text x="502" y="91"  fontSize="11">200 + payload</text>

        {/* Before box: 404 */}
        <rect x="490" y="175" width="180" height="50" rx="2" fill="#1A2018" stroke="#7A4628" strokeWidth="1"/>
        <text x="502" y="195" fontSize="9" fill="#7A4628">BEFORE (WRONG)</text>
        <text x="502" y="211" fontSize="11" fill="#EDE7DC">404 Not Found</text>

        {/* Arrow to fix */}
        <line x1="670" y1="200" x2="730" y2="200" stroke="#7A4628" strokeWidth="1.2" strokeDasharray="3 3" markerEnd="url(#sdc-arrow-red)"/>

        {/* After box: 200 */}
        <rect x="730" y="175" width="220" height="50" rx="2" fill="#1F2D24" stroke="#7E9C7A" strokeWidth="1"/>
        <text x="742" y="195" fontSize="9" fill="#7E9C7A">AFTER (CORRECT)</text>
        <text x="742" y="211" fontSize="11" fill="#EDE7DC">200 + eligible: false</text>
      </g>
    </svg>
  )
}

export default function SDCEligibility() {
  return (
    <CaseStudyLayout
      number="02"
      eyebrow="Case study · No. 02"
      titleLines={TITLE_LINES}
      subtitle="How a spike in 404 errors turned out to be correct business logic incorrectly expressed as an HTTP error — and how I traced it, reframed it for stakeholders, and handed it off with a clean fix."
      meta={META}
      nextStudy={null}
    >

      <h2 className="cs-h2 reveal">The <span className="it">situation.</span></h2>
      <p className="cs-p reveal">The Quantum Metric team flagged a spike in 404 responses from our Same Day Change (SDC) eligibility endpoint. SDC lets guests change their flight on the same day of travel — the endpoint tells the frontend whether a given guest's reservation qualifies. At first glance, the spike looked like a broken endpoint.</p>
      <p className="cs-p reveal">My EM dropped the ADO item in my queue. What I found was that the endpoint wasn't broken at all. The spike tracked almost exactly with increased traffic. A lot of those guests simply weren't eligible for SDC, and the BFF was returning a 404 for them every time.</p>

      <div className="cs-callout reveal">
        <p>The endpoint was calling an internal Alaska API that returned a successful response with <strong>eligible: false</strong>. Instead of passing that through as a 200, the BFF was throwing a 404. Non-eligibility was being treated as an error condition when it was just a normal business outcome.</p>
        <p>Importantly, this did not affect the guest experience. When the 404 came back, the frontend simply didn't show the Same Day Change button. The impact was entirely behind the scenes: misleading monitoring signals and a false picture of endpoint health.</p>
      </div>

      <h2 className="cs-h2 reveal">The <span className="it">constraints.</span></h2>
      <ol className="cs-decisions reveal">
        <li><strong>No regression on the happy path.</strong> Guests who <em>were</em> eligible for SDC had to keep seeing the button. Any fix touching the response-mapping logic needed to leave the positive case intact.</li>
        <li><strong>Correct HTTP semantics.</strong> The fix needed to express the real meaning: a successful call that determined ineligibility is a 200, not a 404.</li>
        <li><strong>Clean monitoring going forward.</strong> Monitoring tools treat 4xx responses as signals of something going wrong. Fixing the status code would immediately clean up the noise in Quantum Metric.</li>
        <li><strong>No ownership of the original code.</strong> The engineer who built this feature had left the team. The fix needed to be clear enough to hand off with no back-and-forth.</li>
      </ol>

      <h2 className="cs-h2 reveal">The <span className="it">approach.</span></h2>
      <p className="cs-p reveal">The QM team shared session recordings that made the 404s visible. I reproduced the issue in QA: hit the endpoint for an ineligible PNR, got a 404 back. That was enough to know something was off.</p>
      <p className="cs-p reveal">From there I went straight to the data gatherer in the BFF code. The downstream API was returning a 200 with an eligibility payload. But when that payload indicated <em>not eligible</em>, the gatherer was treating it as a failure and throwing a 404 instead of returning the result as-is. The API call itself was working — the problem was entirely in how we were interpreting its response.</p>
      <p className="cs-p reveal">This feature had been gated behind an Optimizely toggle since it was built about eight months prior, so it's possible the behavior had been there the whole time and just hadn't been visible at scale until traffic picked up.</p>

      <div className="cs-diagram reveal">
        <ResponseDiagram />
        <p className="cs-diagram-cap">Fig. 01 — BFF response mapping before and after the fix</p>
      </div>

      <h2 className="cs-h2 reveal">Decisions worth <span className="it">naming.</span></h2>
      <ol className="cs-decisions reveal">
        <li><strong>Reproduced in QA before drawing conclusions.</strong> Session recordings alone weren't enough. I needed to confirm the behavior myself before writing anything up.</li>
        <li><strong>Read the code, not just the logs.</strong> The root cause wasn't visible in Quantum Metric. It required going into the gatherer and following the response-handling logic.</li>
        <li><strong>Reframed the narrative early.</strong> Communicating "logic bug, not broken endpoint" to the PM and EM before the fix was scoped prevented unnecessary urgency and kept scope accurate.</li>
        <li><strong>Documented everything in ADO.</strong> Findings, root cause, and proposed fix all in one place made the handoff to the implementing engineer straightforward — no back-and-forth needed.</li>
      </ol>

      <h2 className="cs-h2 reveal">The <span className="it">outcome.</span></h2>

      <div className="cs-highlight reveal">
        <span className="stat">0</span>
        <span className="lab"><strong>Guest-facing impact.</strong> The 404 was invisible to guests — the frontend already hid the SDC button on non-200 responses. The fix cleaned up monitoring without changing any user-visible behavior.</span>
      </div>
      <div className="cs-highlight reveal">
        <span className="stat">1&nbsp;line</span>
        <span className="lab"><strong>Core fix.</strong> Change the response-mapping in the gatherer to return 200 with the eligibility payload when the downstream API indicates non-eligibility. No architectural change required.</span>
      </div>

      <p className="cs-p reveal" style={{ marginTop: '2rem' }}>With my workload already full, I routed the implementation to one of our newer engineers. The ADO item had everything they needed — root cause, reproduction steps, proposed fix — so the handoff required no back-and-forth.</p>

      <h2 className="cs-h2 reveal">What I'd <span className="it">take with me.</span></h2>
      <p className="cs-p reveal">A 404 should mean "this resource doesn't exist," not "this guest isn't eligible." <strong>Eligibility is a business outcome, not an error state.</strong> Getting that distinction right matters both for frontend consumers who parse status codes and for monitoring tools that treat 4xx responses as signals of something going wrong.</p>
      <p className="cs-p reveal">The broader principle: when a spike in errors lands in your queue, the first question isn't "what broke?" — it's "is this actually an error, or is it a normal outcome being mislabeled?" The answer shapes everything: the urgency, the fix, the conversation with stakeholders.</p>

      <hr className="cs-divider" />

      <div className="cs-tag-row reveal">
        {['Node.js BFF','Quantum Metric','Same Day Change','API design','Debugging','HTTP semantics'].map(t => (
          <span key={t} className="cs-tag">{t}</span>
        ))}
      </div>

    </CaseStudyLayout>
  )
}
