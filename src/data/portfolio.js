// ─── PORTFOLIO DATA ───────────────────────────────────────────────────────────
// Update this file to change any content on the site.
// No need to touch any component files.

export const meta = {
  name: 'Cynthia Rico Cook',
  title: 'Senior Software Engineer',
  email: 'ricocynthia5@gmail.com',
  linkedin: 'https://linkedin.com/in/cynthia-rico-cook-a4b3aa148',
  location: 'Minneapolis, MN',
  year: 2026,
}

export const hero = {
  eyebrow: 'Senior Software Engineer',
  headline: ['Cynthia', 'Rico Cook'],
  subtitle:
    'I build the things people use every single day — from check-in flows that move hundreds of thousands of travelers, to apps rooted in the healing gifts of the natural world.',
  quote:
    '"I love learning about all the business rules and solving the complex problems that come with them."',
  quoteCaption: 'Full Stack · Domain Expert · Product Minded',
}

export const about = {
  cards: [
    { label: 'Currently at', value: 'Alaska Airlines — Senior Software Engineer' },
    { label: 'Based in', value: 'Minneapolis, MN — open to remote only' },
    {
      label: 'What I value',
      value: ['End-to-end ownership', 'Clear technical communication', 'Mentorship & team growth', 'Translating product ↔ engineering'],
      isList: true,
    },
    {
      label: 'Beyond the keyboard',
      value: 'Foraging wild plants & mushrooms in Minnesota. Growing my own garden. Blending herbal teas and tinctures. Certified Integrative Nutrition Health Coach.',
    },
  ],
}

export const experience = [
  {
    dates: '2022 — Present',
    company: 'Alaska Airlines',
    title: 'Senior Software Engineer',
    description:
      'Helped build and launch a modern online check-in platform replacing a legacy system — now the system every single Alaska guest passes through. I\'ve contributed to some of the most complex features on the platform and gone deep into how the airline industry actually works.',
    highlights: [
      'Led the Hawaiian Airlines acquisition search API: feature-flagged detection of HA vs. migrated reservations, enabling a seamless cutover the moment the merger went live',
      'Designed group reservation check-in end-to-end — passenger-level authorization scoped by last name, across both migrated and legacy reservation formats',
      'Built international document verification with Jumio, enabling full self-service and reducing calls and airport queue pressure',
      'Engineered lap infant check-in with FAA oxygen-mask capacity rules enforced at the reservation level — read the actual FAA policy docs and translated them into Go validations',
      'Improved international check-in success rate by 0.6% through production log analysis',
      'Mentored a 2024 summer intern and helped onboard incoming engineers to the platform',
    ],
    tags: ['Vue', 'TypeScript', 'React', 'Node.js BFF', 'Go', 'gRPC', 'Kubernetes', 'Docker', 'Azure', 'ArgoCD', 'Sumo Logic'],
  },
  {
    dates: 'Jan 2020 — 2022',
    company: 'Four51 → Sitecore',
    title: 'Full Stack Developer',
    description:
      'Built full-stack e-commerce and internal tooling for Winmark Corporation — Play It Again Sports, Once Upon A Child, Plato\'s Closet, and Music Go Round — across a shared Angular and C# codebase. Four51 was acquired by Sitecore in March 2021.',
    highlights: [
      'Built public-facing storefronts and internal tools for all four Winmark brands',
      'Built a reporting tool letting store managers pull sales data across any date range',
      'Contributed to a custom CMS for job applications',
    ],
    tags: ['Angular', 'C#', 'TypeScript', 'Node.js', 'OrderCloud'],
  },
  {
    dates: 'Jun — Aug 2019',
    company: 'Four51',
    title: 'Software Engineering Intern',
    description:
      'Interned at Four51 while finishing my CS degree at Augsburg. Got my first real exposure to building e-commerce products on the OrderCloud platform — and was hired full-time upon graduation.',
    highlights: [],
    tags: ['JavaScript', 'React', 'OrderCloud'],
  },
]

export const projects = [
  {
    name: 'Forage & Heal',
    description:
      'A searchable reference app for wild plants and medicinal mushrooms found in Minnesota. Search by name or healing property, filter by category, and tap any card for full identification and safety details.',
    tags: ['React', 'JavaScript', 'GitHub Pages'],
    github: 'https://github.com/ricocynthia/forage-and-heal',
    live: 'https://ricocynthia.github.io/forage-and-heal/',
    color: 'moss',
  },
  {
    name: 'Botanica API',
    description:
      'The backend powering Forage & Heal. A Go API built with gRPC and a REST wrapper using the BFF pattern I use daily at Alaska Airlines. Serves herbal remedy recipes from my personal wellness practice.',
    tags: ['Go', 'gRPC', 'Protocol Buffers', 'Railway'],
    github: 'https://github.com/ricocynthia/botanica',
    live: 'https://botanica-production.up.railway.app',
    color: 'golden',
  },
]

export const skills = [
  { label: 'Languages', items: ['TypeScript', 'JavaScript', 'Go', 'C#'] },
  { label: 'Frontend', items: ['Vue.js', 'React', 'Angular', 'Component-based UI'] },
  { label: 'Backend & APIs', items: ['Node.js (BFF)', 'gRPC', 'REST API design', 'Microservices'] },
  { label: 'Infrastructure', items: ['Kubernetes', 'Docker', 'Microsoft Azure', 'ArgoCD · CI/CD'] },
  { label: 'Observability', items: ['Sumo Logic', 'Production debugging', 'On-call', 'System design'] },
  { label: 'Collaboration', items: ['Technical design docs', 'Mentorship', 'Cross-team alignment', 'GitHub Copilot'] },
]

export const beyond = {
  book: {
    title: "Nature's Cookbook — Acknowledging The Gifts of Nature Through Cooking, Gardening & Healing",
    description: "Co-authored as part of CEED's educational curriculum. The research behind this book became the foundation for Forage & Heal.",
    url: 'https://ceed.org/resource/natures-cookbook/#_',
  },
}

export const contact = {
  intro:
    "I'm open to senior engineering roles — especially teams building products with complex real-world business rules where the hard part isn't just the code, it's deeply understanding how the business actually works. Remote only.",
}
