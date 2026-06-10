import type { ReactNode } from "react";

/* Inline icons (currentColor so the parent controls colour). Lucide-style paths,
   matching the existing inline-SVG pattern in Services.tsx. */
const iconProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const ActivityIcon = (
  <svg {...iconProps}>
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

const LinkIcon = (
  <svg {...iconProps}>
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const LayersIcon = (
  <svg {...iconProps}>
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const UsersIcon = (
  <svg {...iconProps}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const CompassIcon = (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

const BriefcaseIcon = (
  <svg {...iconProps}>
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const BarChartIcon = (
  <svg {...iconProps}>
    <line x1="12" y1="20" x2="12" y2="10" />
    <line x1="18" y1="20" x2="18" y2="4" />
    <line x1="6" y1="20" x2="6" y2="16" />
  </svg>
);

export interface Service {
  slug: string;
  name: string;
  oneLiner: string;
  forLine: string;
  problem: string;
  approach: string;
  deliverables: string[];
  howWeWork: string;
  credibility: string[];
  priceTimeline: string;
  lead: string;
  icon: ReactNode;
}

export const flagships: Service[] = [
  {
    slug: "metadata-health-check",
    name: "Metadata Infrastructure Health Check",
    oneLiner:
      "Measure metadata quality, improve identifier integrity, review crosswalk use cases, then fix the catalogues in bulk, not one record at a time.",
    forLine: "For organisations unsure whether their metadata is fit for purpose.",
    problem:
      "Catalogues accumulate inconsistencies faster than they can be cleaned, and the true cost of fixing them as a whole stays hidden. Without a sense of scale or a clear picture of the gaps, the work can't be scoped — and each unaddressed issue makes the next harder to find, while the backlog quietly outpaces the cleanup.",
    approach:
      "We run a structured assessment of the metadata and the systems that produce it, measuring quality, identifier integrity, and crosswalks to standards such as DataCite, DCAT, and schema.org. The gaps are ranked, and the output is a prioritised remediation roadmap. Wherever the fixes can be scripted, we execute them in bulk rather than leaving them as recommendations.",
    deliverables: [
      "Bulk correction scripts, normalisation, identifier reconciliation, vocabulary alignment",
      "Schema extensions aligned to target standards",
      "Application profiles and crosswalks for specific exchange partners",
      "Curation passes on prioritised subsets",
      "Continuous quality monitoring",
    ],
    howWeWork:
      "The Basic package delivers the assessment and the remediation roadmap. The Advanced package builds on that with a full interoperability audit, a strategy proposal, and a follow-up before-and-after comparison — so the improvement is not just delivered but measurable.",
    credibility: ["Pfam / InterPro curation at EMBL-EBI", "SciLifeLab Data Centre metadata programme"],
    priceTimeline: "Lead: Sara. Indicative: Basic 6 to 10 weeks; Advanced 12 to 20 weeks. From €10k.",
    lead: "Sara",
    icon: ActivityIcon,
  },
  {
    slug: "pid-strategy",
    name: "PID Strategy & Implementation",
    oneLiner:
      "From first identifier decisions through minting integration to coverage reporting — DOI, ORCID, ROR, IGSN, Handle, ARK.",
    forLine: "For organisations rolling out DOIs, ORCIDs, RORs, or other PIDs.",
    problem:
      "Identifiers fail in characteristic ways: minted with nowhere to live, collected at sign-up but never reaching the catalogue, issued without consistent metadata travelling alongside. The result is infrastructure that looks like it works — until something tries to resolve, aggregate, or report against it.",
    approach:
      "We take a persistent identifier strategy from first decisions through to implementation and ongoing measurement, covering the systems that mint, resolve, and govern those identifiers. Selection spans DOI-based registries (DOI, ORCID, ROR, IGSN, RAiD) and non-DOI options (Handle, ePIC, ARK), weighed against sovereignty, cost, and longevity. Wherever the integration can be built rather than recommended, we build it.",
    deliverables: [
      "Scheme selection across centralised and decentralised systems",
      "Repository field extensions for new identifier types",
      "Minting integration with deposit, publishing, and instrument pipelines",
      "Data Type Registry (DTR) and FDO kernel profile build-out",
      "Coverage dashboards and quarterly reporting",
    ],
    howWeWork:
      "The Basic package delivers the strategy, policy, and integration plan. The Advanced package builds on that by wiring minting and supporting components into production — so identifiers don't just exist on paper but flow through the systems that need them.",
    credibility: ["DataCite schema contributor", "RDA “Working with PIDs in Tools” co-chair"],
    priceTimeline:
      "Lead: Joint, Sara and Li. Indicative: Basic 8 to 12 weeks; Advanced 14 to 24 weeks. €20k to €60k.",
    lead: "Joint",
    icon: LinkIcon,
  },
  {
    slug: "knowledge-graph-blueprint",
    name: "Knowledge Graph Blueprint",
    oneLiner:
      "Turn a flat catalogue into a semantic layer that answers connected questions and machines can traverse.",
    forLine: "For organisations building a semantic layer over existing metadata.",
    problem:
      "Flat catalogues store records well and answer connected questions badly. A dataset can't be traced to its authors, the instruments behind it, or related work elsewhere without a model the catalogue doesn't have — and the questions that matter most to researchers are exactly the ones it can't answer.",
    approach:
      "We design the graph around the entities and relationships that matter, select or author the ontologies to fit, and wire records to identifiers — internal or external, including DOIs, Wikidata, ARKs, ORCID, and ROR — so the data answers questions and machines can traverse it. Where the scope allows, we build the graph itself, not just the design for one.",
    deliverables: [
      "Schema and ontology selection, extension, and authoring",
      "Knowledge graph construction from existing sources",
      "ETL pipelines for ingest and continuous synchronisation",
      "Reference implementations and query endpoints (SPARQL, GraphQL, JSON-LD)",
      "Curation and quality monitoring in operation",
    ],
    howWeWork:
      "The Basic package delivers the model and a reference pattern. The Advanced package builds on that by constructing the graph itself — so the semantic layer is not just specified but running. An FDO variant applies the same approach on tighter scope, modelling FAIR Digital Objects as the unit of structure.",
    credibility: [
      "FAIR Digital Objects Forum steering committee",
      "Bioschemas / DataCite schema harmonisation",
    ],
    priceTimeline:
      "Lead: Sara. Indicative: Basic 12 to 20 weeks; Advanced 20 to 32 weeks. €40k to €120k; FDO variant €15k to €30k.",
    lead: "Sara",
    icon: LayersIcon,
  },
  {
    slug: "user-research",
    name: "User Research for Scholarly Tools",
    oneLiner:
      "Find out how researchers actually use your tools, and turn that into concrete interface and workflow fixes.",
    forLine:
      "For repository, ELN, or portal teams who built something and don't know if it works for users.",
    problem:
      "Tools are routinely shipped without evidence that they support the work they are meant to support. Deposit forms get abandoned, fields get skipped or filled with values that pass validation without being correct — and by the time the data reaches the catalogue, the decisions that shaped its quality have already been made, invisibly, at the point of entry.",
    approach:
      "We gather evidence about how researchers and data professionals actually use scholarly tools — through interviews, usability testing, and workflow mapping — and return it as concrete interface and workflow changes. The focus is the points where data is described, created, or collected: deposit forms, electronic lab notebooks, instrument capture screens. That's where catalogue quality is decided, long before any clean-up team sees the record.",
    deliverables: [
      "Interview programmes, usability testing, and workflow shadowing",
      "Analysis of drop-off, completion rates, and field-level error patterns",
      "UI/UX recommendations as annotated mockups and component specifications",
      "Controlled-vocabulary and terminology-lookup integrations for forms and ELNs",
      "Test plans for measuring change after redesign",
    ],
    howWeWork:
      "The Basic package delivers the research, analysis, and prioritised redesign recommendations. The Advanced package takes the recommendations into implementation, or into a working demonstrator of the redesigned interface — turning findings into something users can actually use.",
    credibility: [
      "CERN Open Data Portal user research",
      "CERN Analysis Preservation information architecture",
    ],
    priceTimeline:
      "Lead: Li, with Sara on metadata capture. Indicative: Basic 6 to 10 weeks; Advanced 12 to 20 weeks. €8k to €25k.",
    lead: "Li",
    icon: UsersIcon,
  },
];

export interface Retainer {
  slug: string;
  name: string;
  oneLiner: string;
  forLine: string;
  problem: string;
  deliverables: string[];
  howWeWork: string;
  timeline: string;
  lead: string;
  icon: ReactNode;
}

export const retainers: Retainer[] = [
  {
    slug: "strategic-advisory",
    name: "Strategic Advisory & Roadmapping",
    oneLiner:
      "Infrastructure strategy and grant-writing support as an extension of your team — from call analysis to the full technical narrative and budget.",
    forLine:
      "Research organisations, infrastructures, and funders who need infrastructure strategy and grant-writing support but don't have a dedicated grants office or in-house technical leadership.",
    problem:
      "Most research groups and small-to-medium infrastructures have strong domain expertise but limited bandwidth for the strategy work that wins grants. When a funding call opens, the scramble begins: who can draft the technical narrative, how does this project connect to the group's existing work, and who owns the week-by-week progress once the proposal goes in. The result is proposals that read as wishlists rather than credible programmes — ambitions without the roadmap to back them.",
    deliverables: [
      "Review your group's current work, infrastructure, and direction to surface where a funded project would genuinely advance things",
      "Map your strengths and gaps against the call text, identifying the angles that make a competitive proposal versus one that reads as filler",
      "Draft the technical narrative, work plan, consortium structure, and budget justification, iterating with your team until the proposal reflects how you actually work",
      "Where you already have a project running, provide the skeleton of a monitoring and reporting framework so the grant can show impact from year one",
    ],
    howWeWork:
      "This is where the “translation layer” matters most. Grant proposals fail when the technical vision is internally consistent but opaque to the funder's review panel, or when they describe the right goals without the operational detail that makes them credible. We sit in the middle: Li brings the programme design and funder-awareness and Sara brings the semantic architecture depth to make the technical narrative precise.",
    timeline:
      "€2–5k/month as a retainer, or scoped per engagement for discrete proposal-writing. We usually start with a 2-hour scoping session to decide which model fits.",
    lead: "Joint",
    icon: CompassIcon,
  },
  {
    slug: "grant-programme-office",
    name: "Consortium & Grant Programme Office",
    oneLiner:
      "The operational spine for a funded project — deliverable tracking, partner coordination, and funder reporting, reporting to the PI.",
    forLine:
      "Investigators and consortium coordinators who are running a funded project and need operational management: reporting, deliverable tracking, partner coordination, without hiring a dedicated programme manager.",
    problem:
      "Research grants are won on scientific vision, but they're executed on operational discipline. The PI who wrote the proposal becomes the person chasing overdue deliverables, reconciling partner budgets, and writing interim reports to the funder, work that pulls them away from the research the grant was meant to support. In multi-partner consortia this compounds: someone needs to hold the project's timeline, flag dependencies between work packages, and make sure the final report doesn't get written in a panic the night before the deadline.",
    deliverables: [
      "Deliverable tracking and milestone management against the grant agreement, with monthly status summaries for the PI",
      "Partner coordination: scheduling, progress check-ins, dependency resolution between work packages",
      "Interim and final report drafting against funder templates, pulling evidence of progress from the project's own records rather than starting from a blank page",
      "Budget-light oversight: reconciling actuals against the approved budget, flagging under- or overspend before it becomes a problem",
      "Risk log maintenance and escalation, so issues surface while there's still time to act",
    ],
    howWeWork:
      "This is pure operations, not strategy, and we're explicit about that. Li's programme management experience of leading a 7-partner DataCite grant with deliverables to the Wellcome Trust and Templeton Foundation means the reporting, budgeting, and timeline discipline is already field-tested. What makes it work is consistency: we use the same systems your partners already have (shared drives, Slack, project trackers), not a new toolchain they have to learn. The goal is for the PI to see a clean status dashboard once a month and trust that everything between those updates is being handled.",
    timeline:
      "€3–8k/month, typically 6–24 months aligned to the grant cycle. Price depends on project complexity and partner count. We always start with a handover phase to absorb the grant agreement, the existing partner setup, and any reporting deadlines already on the calendar.",
    lead: "Li",
    icon: BriefcaseIcon,
  },
  {
    slug: "pid-adoption-monitoring",
    name: "PID Adoption Monitoring & Impact",
    oneLiner:
      "A monitoring pipeline that answers one question: are your PIDs actually being adopted, and where does the bottleneck sit?",
    forLine:
      "Organisations that have invested in persistent identifiers, i.e. DOIs, ORCIDs, RORs, RAiDs, and need to measure whether they're actually being used, spot where adoption stalls, and report progress over time.",
    problem:
      "Implementing PIDs is one thing; getting people to use them is another. Many organisations complete an integration project: DOIs minted at deposit, ORCIDs linked to author records, RORs on institutional profiles, only to discover a year later that coverage has plateaued or that identifiers in the repository aren't being cited by the community they were meant to serve. Without measurement, nobody knows whether adoption is succeeding, stalling, or failing, and without evidence it's impossible to argue for the next investment.",
    deliverables: [
      "An initial audit of your current PID implementation: what identifiers exist, where they're recorded, how long they've been running, and what the coverage looks like at the level of individual records",
      "A monitoring data pipeline that's lightweight, automated, built to run on a schedule you own, that captures coverage, resolution rates, citation-linked usage, and any drift between the identifiers assigned and those actually resolvable",
      "A baseline report with visualised coverage broken down by identifier type, collection, or workflow step, so you can see the shape of the problem before deciding what to fix",
      "Impact reports that track trends, flag regressions, and include a brief narrative interpretation (not just charts): which metrics improved, which ones didn't, and what the data suggests about why",
      "A handover package so a non-technical team member can maintain and extend the pipeline without Semantify running it forever",
    ],
    howWeWork:
      "Monitoring is the “adopt” phase of our three-act structure, it only makes sense if you've already done the design and build work, and most of our clients come to this retainer after completing a PID implementation with us or elsewhere. Li's research background gave her a methodology for diagnosing adoption failures that goes beyond what any dashboard alone can show. The pipeline surfaces what happened; Li's analysis interprets why.",
    timeline:
      "€2–5k/month as a retainer, including the initial audit and pipeline setup. We can also scope the initial audit as a standalone engagement (4–6 weeks, scoped) with the monitoring retainer as a follow-on. Each quarterly report adds 2–3 weeks of analysis and writing at the standard retainer rate.",
    lead: "Joint",
    icon: BarChartIcon,
  },
];

export function getRetainer(slug: string): Retainer | undefined {
  return retainers.find((r) => r.slug === slug);
}

export const footerServices: string[] = [
  "Training & workshops",
  "Policy & governance drafting",
  "Data curation & AI readiness",
  "Developer experience & implementation support",
  "Analytics & impact reporting on PID-rich metadata",
  "RDM assessments, ELN/LIMS selection advice",
];

export function getService(slug: string): Service | undefined {
  return flagships.find((s) => s.slug === slug);
}
