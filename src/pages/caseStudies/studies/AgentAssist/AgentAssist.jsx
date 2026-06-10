import CaseStudyLayout from '../../CaseStudyLayout'
import './AgentAssist.css'

const TITLE_LINES = [
  { text: 'Building an AI' },
  { text: 'diagnostic assistant for' },
  { text: 'check-in support.', italic: true },
]

const META = [
  { key: 'Role',       val: 'Designer + builder (solo POC)' },
  { key: 'Scope',      val: 'Proof of concept' },
  { key: 'Stack',      val: 'Node.js · React · Anthropic SDK' },
  { key: 'Type',       val: 'Applied AI · internal tooling' },
  { key: 'Constraint', val: 'Grounded answers only, no guessing' },
]

const NEXT = {
  label: 'Up next · Case study no. 01',
  title: 'Designing the check-in search API for <span class="it">Alaska\'s acquisition of Hawaiian Airlines.</span>',
  href: '/case-studies/hawaiian-acquisition',
  num: '01',
}

function ArchitectureDiagram() {
  return (
    <svg width="100%" viewBox="0 0 680 560" xmlns="http://www.w3.org/2000/svg" style={{ fontFamily: 'inherit' }}>
      <defs>
        <marker id="arrow-aa" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </marker>
      </defs>

      {/* Agent question */}
      <g>
        <rect x="200" y="20" width="280" height="44" rx="8" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
        <text x="340" y="38" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="600" fill="currentColor">Support engineer asks a question</text>
        <text x="340" y="56" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="currentColor" opacity="0.6">"Guest gets error 4xx at seat assignment, why?"</text>
      </g>

      <line x1="340" y1="64" x2="340" y2="104" stroke="currentColor" strokeWidth="1" opacity="0.4" markerEnd="url(#arrow-aa)"/>

      {/* React UI */}
      <g>
        <rect x="230" y="104" width="220" height="44" rx="8" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
        <text x="340" y="122" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="600" fill="currentColor">Chat UI</text>
        <text x="340" y="140" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="currentColor" opacity="0.6">React + Vite, streamed responses</text>
      </g>

      <line x1="340" y1="148" x2="340" y2="188" stroke="currentColor" strokeWidth="1" opacity="0.4" markerEnd="url(#arrow-aa)"/>

      {/* BFF */}
      <g>
        <rect x="200" y="188" width="280" height="56" rx="8" fill="none" stroke="#1D9E75" strokeWidth="1"/>
        <text x="340" y="208" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="600" fill="#1D9E75">Node.js / Express BFF</text>
        <text x="340" y="226" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="currentColor" opacity="0.6">Anthropic SDK · auth via internal Azure AI gateway</text>
      </g>

      <line x1="340" y1="244" x2="340" y2="284" stroke="currentColor" strokeWidth="1" opacity="0.4" markerEnd="url(#arrow-aa)"/>

      {/* Claude */}
      <g>
        <rect x="200" y="284" width="280" height="56" rx="8" fill="none" stroke="#1D9E75" strokeWidth="1"/>
        <text x="340" y="304" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="600" fill="#1D9E75">Claude (Sonnet)</text>
        <text x="340" y="322" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="currentColor" opacity="0.6">System prompt + tool definitions</text>
      </g>

      {/* Tool loop */}
      <path d="M480 300 L560 300 L560 388 L500 388" stroke="#D85A30" strokeWidth="1" fill="none" markerEnd="url(#arrow-aa)"/>
      <path d="M180 388 L120 388 L120 300 L200 300" stroke="#D85A30" strokeWidth="1" fill="none" markerEnd="url(#arrow-aa)"/>
      <text x="568" y="344" fontSize="10" fill="#D85A30">tool call</text>
      <text x="70" y="344" fontSize="10" fill="#D85A30">result</text>

      {/* Knowledge base */}
      <g>
        <rect x="180" y="364" width="320" height="92" rx="8" fill="none" stroke="#D85A30" strokeWidth="1"/>
        <text x="340" y="382" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="600" fill="#D85A30">Curated knowledge base (markdown)</text>
        <text x="340" y="402" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="currentColor" opacity="0.6">Error code reference, compiled from production logs</text>
        <text x="340" y="420" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="currentColor" opacity="0.6">Check-in flow · boarding pass flow · business rules</text>
        <text x="340" y="438" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="currentColor" opacity="0.6">Versioned in the repo, auditable like code</text>
      </g>

      {/* Post-POC */}
      <g opacity="0.55">
        <rect x="180" y="486" width="320" height="44" rx="8" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 4"/>
        <text x="340" y="504" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="600" fill="currentColor">Post-POC: live log query tools</text>
        <text x="340" y="522" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="currentColor" opacity="0.7">Sumo Logic search scoped to a reservation's session</text>
      </g>
      <line x1="340" y1="456" x2="340" y2="482" stroke="currentColor" strokeWidth="1" opacity="0.35" strokeDasharray="5 4" markerEnd="url(#arrow-aa)"/>
    </svg>
  )
}

export default function AgentAssist() {
  return (
    <CaseStudyLayout
      number="03"
      eyebrow="Case study · No. 03"
      titleLines={TITLE_LINES}
      subtitle="How I turned scattered tribal knowledge about check-in failures into a curated, versioned knowledge base, then built a Claude-powered assistant on top of it so support engineers can answer 'why can't this guest check in?' without paging a platform expert."
      meta={META}
      nextStudy={NEXT}
    >

      <h2 className="cs-h2 reveal">The <span className="it">situation.</span></h2>
      <p className="cs-p reveal">When a guest can't check in, the platform usually knows why. A validation rule fired: a travel document is missing, a flight is outside the check-in window, a reservation is in a state that requires an agent. The problem is that the "why" surfaces as an error code, and decoding that error code requires knowledge spread across multiple microservices, the reservation system's own error vocabulary, and the heads of a few long-tenured engineers.</p>
      <p className="cs-p reveal">In practice, that meant diagnostic questions kept landing on the platform team. Support staff and newer engineers could see <em>that</em> a check-in failed, but tracing it to a specific business rule meant either reading service code or asking someone who already knew. The knowledge existed. It just wasn't accessible.</p>

      <div className="cs-callout reveal">
        <p>The interesting constraint wasn't the AI part. It was trust. An assistant that <strong>guesses</strong> at error codes is worse than no assistant, because a confident wrong answer sends a support agent down the wrong path with a guest standing at the counter. Every answer had to be grounded in a source of truth that humans could read and correct.</p>
      </div>

      <h2 className="cs-h2 reveal">Knowledge base <span className="it">first.</span></h2>
      <p className="cs-p reveal">Before writing any application code, I built the thing the assistant would stand on: a small set of curated markdown documents covering the check-in flow, the boarding pass flow, the platform's business rules, and a reference of error codes with their causes and resolutions. The error code reference was compiled the hard way, from production log analysis, mapping the codes that actually occur in the wild to the validation rules that produce them.</p>
      <p className="cs-p reveal">This ordering was deliberate. The documents are valuable on their own: they now double as onboarding material for engineers joining the platform. If the chatbot had died as an experiment, the work would still have paid for itself. And because the knowledge lives as markdown in a repo, it's versioned, reviewable in a PR, and correctable by anyone on the team. No retraining, no re-embedding, no vector database to operate.</p>

      <div className="cs-cards reveal">
        <div className="cs-card">
          <div className="cs-card-l">Why not RAG</div>
          <div className="cs-card-t">Curated docs over a vector store</div>
          <div className="cs-card-d">The domain is narrow and the corpus is small. A handful of well-maintained documents fits comfortably in context via tools, retrieves deterministically, and needs zero new infrastructure. Embeddings earn their complexity at a scale this problem doesn't have.</div>
        </div>
        <div className="cs-card">
          <div className="cs-card-l">Why tool calling</div>
          <div className="cs-card-t">Retrieval the model must show</div>
          <div className="cs-card-d">The model answers by calling tools that return the relevant reference material, so every claim traces to a document the team owns. The tool call is visible in the transcript: you can see exactly what the assistant looked up before it answered.</div>
        </div>
      </div>

      <h2 className="cs-h2 reveal">The <span className="it">architecture.</span></h2>
      <p className="cs-p reveal">The shape mirrors the BFF pattern our guest-facing platform already uses, which kept it familiar to review. A React + Vite chat UI talks to a Node.js/Express BFF. The BFF holds the Anthropic SDK client, authenticates through the company's internal Azure AI gateway so no credentials ever reach the browser, and orchestrates the tool-call loop with Claude.</p>

      <div className="cs-diagram reveal">
        <ArchitectureDiagram />
        <p className="cs-diagram-cap">Fig. 01 · Request flow through the assistant, with the tool-grounded knowledge base and the scoped post-POC log integration</p>
      </div>

      <h2 className="cs-h2 reveal">Scoping the <span className="it">POC honestly.</span></h2>
      <p className="cs-p reveal">The obvious next feature is letting the assistant query production logs directly: give it a reservation's session and let it pull the actual errors that fired, instead of reasoning from a description. I scoped that for after the POC on purpose. Live log access raises real questions about data handling, query cost, and blast radius that deserve their own design conversation, and bolting it on early would have put the whole experiment at risk. The POC's job was to prove the grounded-answer loop works. The dashed box in the diagram is the roadmap, not the demo.</p>

      <h2 className="cs-h2 reveal">Decisions worth <span className="it">naming.</span></h2>
      <ol className="cs-decisions reveal">
        <li><strong>Built the knowledge base before the bot.</strong> The documentation has standalone value as onboarding material, which de-risked the whole project: even a failed POC leaves the team better off.</li>
        <li><strong>Markdown in a repo over a vector database.</strong> Versioned, PR-reviewable, deterministic retrieval, zero new infrastructure. Right-sized for a narrow domain.</li>
        <li><strong>Tool calling as the grounding mechanism.</strong> Answers trace to documents the team owns and can correct. The retrieval step is visible in every transcript.</li>
        <li><strong>Auth through the internal AI gateway.</strong> Credentials and usage stay inside the company's governance boundary, and the browser never touches a key.</li>
        <li><strong>Deferred live log access.</strong> The highest-value feature is also the highest-risk one. Sequencing it after the POC kept the demo shippable and the design conversation honest.</li>
      </ol>

      <h2 className="cs-h2 reveal">Where it <span className="it">stands.</span></h2>

      <div className="cs-highlight reveal">
        <span className="stat">4</span>
        <span className="lab"><strong>Curated reference documents</strong> form the assistant's source of truth: check-in flow, boarding pass flow, business rules, and an error code reference compiled from production log analysis. The same docs now serve as platform onboarding material.</span>
      </div>
      <div className="cs-highlight reveal">
        <span className="stat">0</span>
        <span className="lab"><strong>New infrastructure required.</strong> No vector database, no embedding pipeline, no model hosting. A BFF, a model API behind existing company auth, and markdown files in a repo.</span>
      </div>

      <p className="cs-p reveal" style={{ marginTop: '2rem' }}>The POC works end to end: a support question goes in, the assistant retrieves the relevant reference material through tool calls, and a grounded diagnosis comes back with the business rule that fired and what resolves it. The next phase, scoped and waiting on the team's roadmap, is the live log integration that turns "describe the failure to me" into "give me the confirmation code and I'll look."</p>

      <hr className="cs-divider" />

      <div className="cs-tag-row reveal">
        {['Node.js','Express','React','Vite','Anthropic SDK','Claude','Tool calling','Prompt design','Azure','Sumo Logic'].map(t => (
          <span key={t} className="cs-tag">{t}</span>
        ))}
      </div>

    </CaseStudyLayout>
  )
}
