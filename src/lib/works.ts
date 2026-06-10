export interface ListItem {
  lead?: string;
  text: string;
}

export type ContentBlock =
  | string
  | { type: "heading"; text: string }
  | { type: "list"; items: ListItem[] }
  | { type: "divider" }
  | { type: "link"; href: string; text: string };

export interface WorkPost {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  excerpt: string;
  image?: {
    src: string;
    alt: string;
    credit?: {
      author: string;
      year: string;
      license: string;
      licenseUrl?: string;
    };
  };
  /** A planned topic, shown on the Works index as "coming soon" with no live article page. */
  placeholder?: boolean;
  content: ContentBlock[];
}

export const posts: WorkPost[] = [
  {
    slug: "scholarly-record-is-infrastructure",
    title: "The Scholarly Record Is Infrastructure. Treat It Like One.",
    subtitle:
      "A case for institutional action on open science, AI readiness, and research sovereignty.",
    date: "2026-06",
    excerpt:
      "Open science is just science done well. Why the institutions that treat metadata, persistent identifiers, and semantic infrastructure as core will be the ones ready for AI and able to keep sovereignty over their research.",
    image: {
      src: "/works/scholarly-record-is-infrastructure.jpg",
      alt: "A lone figure looking out over a city skyline at dusk.",
      credit: {
        author: "Xiaoli Chen",
        year: "2026",
        license: "CC BY 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
      },
    },
    content: [
      { type: "heading", text: "Open science is not a feature. It is a foundation." },
      "Open science gets talked about in many registers as a moral imperative, a funder requirement, a technical standard, a community norm. All of those are true, and that is precisely the point. Open science is communal, political, and technical all at once. It is built by researchers, for researchers, and it only works when institutions commit to it across every dimension, not just policy statements, but infrastructure investment, technical capacity, and sustained resourcing.",
      "Too often, open science is treated as a compliance exercise: tick the box, publish the data management plan, move on. But the institutions that will matter in the next decade are the ones treating open science as core infrastructure: as foundational as the library catalogue or the campus network. That means interoperable metadata, persistent identifiers, semantic layers that make research outputs machine-actionable and discoverable across systems. It means investment in the people and processes on top of the tools, so that those tools are kept honest.",
      "Open science that stands on solid ground is open science that doesn't collapse the moment a vendor changes terms, a funder shifts priorities, or a new technology demands something the old systems can't deliver.",
      { type: "heading", text: "AI doesn't need more data. It needs ground truth." },
      "Every research institution is now fielding questions about AI, from leadership, from researchers, from funders. How do we use it? What do we need? Where do we start?",
      "Here is an uncomfortable answer: most institutions are not ready, and the reason is not that they lack AI tools. It is that their scholarly record — the metadata, the provenance chains, the semantic relationships between outputs — is not yet in a state that can anchor AI applications reliably.",
      "Generative AI is opaque by design. It produces plausible outputs without reliable provenance. The only way to ground AI in research contexts, whether for literature synthesis, research assessment, data discovery, or knowledge graph construction, is to ensure that the scholarly record itself is rich, structured, and trustworthy enough to serve as the corrective force. The scholarly record should be the anchoring layer that determines whether AI outputs can be verified, attributed, and trusted.",
      "Institutions that invest in metadata quality, PID infrastructure, and semantic interoperability now are building the precondition for any credible AI deployment in research, as the good data management processes pay dividends.",
      { type: "heading", text: "The money is not neutral." },
      "Meanwhile, the economics of academic publishing continue to distort the research landscape. The publish-or-perish incentive structure funnels researchers into a system where the volume of outputs matters more than their quality, reproducibility, or openness. Article Processing Charges have turned open access into a revenue extraction mechanism. Researchers pay to publish; institutions pay to read; and the publishers consolidate control over both sides of the transaction.",
      "This is not a natural market. It is an engineered dependency. And the longer institutions remain locked into publisher contracts that bundle access, analytics, and AI tools into opaque mega-deals, the harder it becomes to build independent infrastructure that actually serves the research community.",
      "Facilitating genuine open science, investing in institutional repositories, open metadata infrastructure, and community-governed platforms, despite its ideological apperance, is a practical strategy for giving researchers a viable alternative to a system that increasingly works against them.",
      { type: "heading", text: "So what do you actually do about it?" },
      "This is where it gets concrete. The four dynamics above: open science as infrastructure, AI readiness through metadata, the economics of publishing, and institutional dependency are the same problem viewed from different angles. And they converge on a single practical question: is your organization ready?",
      "That question deserves an honest audit. Not a vendor pitch, not a technology demo, but a clear-eyed assessment of where your institution stands:",
      {
        type: "list",
        items: [
          {
            lead: "Metadata and semantic infrastructure.",
            text: "Is your scholarly record structured, interoperable, and machine-actionable? Or is it a patchwork of free-text fields and broken links?",
          },
          {
            lead: "PID adoption.",
            text: "Are DOIs, ORCIDs, RORs, and other persistent identifiers integrated into your workflows — or bolted on as an afterthought?",
          },
          {
            lead: "AI readiness.",
            text: "Could your metadata anchor a retrieval-augmented generation system today? Could it support research assessment tools that need provenance?",
          },
          {
            lead: "Publisher dependencies.",
            text: "What do your current contracts actually give you control over? What happens to your data, your metadata, your analytics if you walk away?",
          },
          {
            lead: "Community capacity.",
            text: "Do your researchers and data stewards have the skills and support to participate in open infrastructure — or are they left to navigate it alone?",
          },
        ],
      },
      "The institutions that answer these questions now and act on the answers will be the ones that retain sovereignty over their research outputs, serve their communities effectively, and position themselves as credible partners in the emerging AI landscape.",
      "The ones that don't will find themselves paying more, controlling less, and depending on vendors who have no obligation to act in researchers' interests.",
      { type: "divider" },
      "We can help. Semantify works with research institutions to audit, design, and build the semantic infrastructure that makes open science operational and AI deployment credible. From metadata health checks to PID strategy, knowledge graph architecture to interoperability audits. We bring deep domain expertise in scholarly infrastructure and a track record of delivering systems that work and get used.",
      "If any of the above resonates, we'd welcome a conversation.",
      { type: "link", href: "mailto:hello@semantify.co", text: "hello@semantify.co" },
    ],
  },
  {
    slug: "hello-world",
    placeholder: true,
    title: "Introducing Semantify",
    date: "2026-06",
    excerpt:
      "We're a scholarly infrastructure consultancy founded by Sara El-Gebali and Xiaoli Chen — two practitioners who've spent their careers inside the systems we now help others build.",
    content: [
      "We're a scholarly infrastructure consultancy founded by Sara El-Gebali and Xiaoli Chen — two practitioners who've spent their careers inside the systems we now help others build.",
      "Between us we've contributed to DataCite schemas, steered the FAIR Digital Objects Forum, run metadata programmes at EMBL-EBI and SciLifeLab, and studied why researchers do — and don't — reuse the data infrastructure built for them.",
      "Semantify exists to close the gap that we kept running into from the inside: organisations that know what good metadata infrastructure looks like, but lack the bandwidth or the specialised hands to build it, fix it, and get it adopted. That's the work. More soon.",
    ],
  },
  {
    slug: "metadata-debt",
    placeholder: true,
    title: "Metadata Debt: The Hidden Cost of Quick Fixes",
    date: "2026-06",
    excerpt:
      "Every free-text field, every uncrosswalked schema, every identifier that was minted but never linked to anything — that's metadata debt, and it compounds.",
    content: [
      "Every free-text field, every uncrosswalked schema, every identifier that was minted but never linked to anything — that's metadata debt, and it compounds.",
      "Like technical debt, it's invisible until it isn't. A catalogue works fine until a funder asks for a DCAT export, a partner needs a crosswalk, or an AI pipeline trips over inconsistent values that all passed validation. Then the cost of every shortcut comes due at once.",
      "The fix is rarely heroic. It's a structured assessment that measures quality and identifier integrity, a prioritised remediation roadmap, and — crucially — scripts that correct the catalogue in bulk rather than one record at a time. Paying down metadata debt is cheaper than carrying it.",
    ],
  },
  {
    slug: "adoption-is-not-deployment",
    placeholder: true,
    title: "Adoption Is Not Deployment",
    date: "2026-07",
    excerpt:
      "You can deploy a PID system, write a data management plan, and build a knowledge graph — and still fail if nobody uses them. Here's why adoption is a design problem.",
    content: [
      "You can deploy a PID system, write a data management plan, and build a knowledge graph — and still fail if nobody uses them. Here's why adoption is a design problem.",
      "Most infrastructure projects treat the go-live as the finish line. But deployment only changes what's possible; adoption changes what actually happens. The gap between the two is where deposit forms get abandoned, identifiers go uncited, and beautifully modelled graphs sit half-populated.",
      "Adoption is decided at the points where data is described, created, or collected — the deposit form, the lab notebook, the instrument capture screen. Design those well, measure drop-off honestly, and adoption stops being a hope and starts being a metric you can move.",
    ],
  },
];

/** Posts with a live article page (excludes planned "coming soon" placeholders). */
export const publishedPosts = posts.filter((p) => !p.placeholder);

export function getPost(slug: string): WorkPost | undefined {
  return posts.find((p) => p.slug === slug);
}
