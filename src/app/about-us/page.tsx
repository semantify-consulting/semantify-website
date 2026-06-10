import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Semantify — About Sara El-Gebali & Xiaoli Chen",
  description:
    "Semantify helps research organizations, repositories, and funders design metadata and PID systems that interoperate — and make sure they get adopted. Meet the founders.",
};

interface Section {
  label: string;
  items: string[];
}

type SocialKind = "orcid" | "github" | "bluesky";

interface Social {
  kind: SocialKind;
  url: string;
}

interface Founder {
  name: string;
  role: string;
  bio: string;
  location?: string;
  image: string;
  imagePosition?: string;
  sections: Section[];
  depthLabel: string;
  depth: string[];
  site: string;
  siteLabel: string;
  socials: Social[];
}

const founders: Founder[] = [
  {
    name: "Sara El-Gebali",
    role: "Semantic infrastructure architect",
    bio: "Semantic infrastructure architect with hands-on production curation experience at EMBL-EBI (Pfam / InterPro), now a DataCite Metadata Specialist driving FAIR Digital Object work and Bioschemas / DataCite schema harmonisation.",
    location: "Based in Stockholm, Sweden",
    image: "/founders/sara.jpg",
    imagePosition: "50% 35%",
    sections: [
      {
        label: "Current",
        items: [
          "Metadata Specialist, DataCite (2023–present)",
          "Steering Committee, FAIR Digital Objects Forum",
          "Co-founder, FAIRPoints; founder, OpenCIDER",
          "RDA / EOSC Future Life Sciences Ambassador",
          "Governance Committee, Open Life Science",
        ],
      },
      {
        label: "Past",
        items: [
          "Project Leader, Metadata & Curation — SciLifeLab Data Centre / DDLS",
          "Head of Research Data Management — MDC Berlin",
          "Scientific Database Curator — EMBL-EBI (Pfam, InterPro)",
          "Scientific Data Editor — EMBO (SourceData)",
          "PhD Biochemistry & Molecular Biology, University of Bern; MSc Queen Mary University of London; BSc Lund",
        ],
      },
      {
        label: "Training & advocacy",
        items: [
          "Open Data module lead — NASA TOPS Open Science 101",
          "Carpentries certified instructor",
          "Keynote, BOSC 2023; speaker, FOSDEM 2023",
          "Featured: FAIRDataPodcast, RSEng Dev Stories",
        ],
      },
      {
        label: "Recognition",
        items: [
          "Wellcome Genome Campus Award for Best Practice in Equality and Diversity (2019)",
          "eLife Innovation Leaders 2020 mentee",
        ],
      },
      {
        label: "Representative publications",
        items: [
          "The Pfam protein families database in 2019 — Nucleic Acids Research",
          "InterPro in 2019 / 2017 — Nucleic Acids Research",
          "SourceData: a semantic platform for curating and searching figures — Nature Methods",
          "Ten simple rules for pushing boundaries of inclusion at academic events — PLOS Comp. Biol., 2024",
          "Harmonizing Metadata Across Disciplines — Bioschemas and the DataCite Metadata Schema — DataCite blog, 2024",
        ],
      },
    ],
    depthLabel: "Technical depth",
    depth: [
      "RDF",
      "RDFS",
      "OWL",
      "SKOS",
      "SPARQL",
      "JSON-LD",
      "Bioschemas profiles (Sample, BioSample)",
      "DataCite linked-data schema",
      "Controlled vocabularies & terminology services",
      "Scientific curation at scale",
      "API-based metadata quality analytics (DataCite, Crossref)",
      "Python",
      "ElasticSearch / Kibana",
      "Git / GitLab",
      "Protégé",
      "Professional Scrum Product Owner",
    ],
    site: "https://selgebali.netlify.app/",
    siteLabel: "selgebali.netlify.app",
    socials: [
      { kind: "orcid", url: "https://orcid.org/0000-0003-1378-5495" },
      { kind: "github", url: "https://github.com/selgebali" },
      { kind: "bluesky", url: "https://bsky.app/profile/yalahowy.bsky.social" },
    ],
  },
  {
    name: "Xiaoli (Li) Chen",
    role: "Research infrastructure strategist",
    bio: "Research infrastructure strategist who leads DataCite's Templeton-funded FAIR Workflows programme across seven international partners, with a research career rooted in user studies of CERN's open-data and analysis-preservation services.",
    location: "Based in Edinburgh, UK",
    image: "/founders/xiaoli.jpg",
    imagePosition: "50% 30%",
    sections: [
      {
        label: "Current",
        items: [
          "FAIR Workflows Project Lead, DataCite (Templeton WCF-funded, 3 years, 7 partners, 38 outputs)",
          "Co-chair, RDA “Working with PIDs in Tools” Interest Group",
        ],
      },
      {
        label: "Past",
        items: [
          "Co-chair, DataCite APAC Expert Group",
          "Doctoral researcher / data-management collaborator at CERN Scientific Information Service — communications and engagement lead on the EC THOR PID project; user research and information architecture on the CERN Open Data Portal and CERN Analysis Preservation",
          "DataCite schema contributor — Award and Preregistration resource types; CSTR as alternative PID",
          "FORCE11 summer school instructor (PIDs, RDM)",
          "PhD Information Studies, University of Sheffield iSchool (data reuse practices among high-energy physicists, based at CERN); MS, Syracuse iSchool; BA, Beijing Institute of Clothing Technology",
        ],
      },
      {
        label: "Representative publications",
        items: [
          "Chen, X., Dallmeier-Tiessen, S. et al. Open is not enough. Nature Physics 15, 113–119 (2019)",
          "Chen, X., Dallmeier-Tiessen, S. et al. CERN Analysis Preservation: A Novel Digital Library Service. TPDL 2016",
          "Guide for funders to support FAIR workflows & enable research tracking. Zenodo, 2023 (DataCite × Crossref × ORCID)",
          "The Role of Funders in Building a Robust and Trustworthy Output Tracking Mechanism Using PIDs and Open Metadata. Zenodo, 2023",
        ],
      },
    ],
    depthLabel: "Methods depth",
    depth: [
      "Qualitative user research (semi-structured interviews, contextual inquiry)",
      "Usability evaluation of scholarly tools",
      "Information architecture",
      "Stakeholder mapping",
      "Multi-partner programme leadership",
      "Funder engagement & guidance authoring",
      "Adoption strategy & change management",
      "Cross-organisational coordination (DataCite × Crossref × ORCID × MPI)",
      "Library & information science methodology",
      "APAC ecosystem access (CNIC, ARDC, China research-data community)",
    ],
    site: "https://xchen101.github.io",
    siteLabel: "xchen101.github.io",
    socials: [
      { kind: "orcid", url: "https://orcid.org/0000-0003-0207-2705" },
      { kind: "github", url: "https://github.com/xchen101" },
      { kind: "bluesky", url: "https://bsky.app/profile/xiaolichen.bsky.social" },
    ],
  },
];

const SOCIAL_LABEL: Record<SocialKind, string> = {
  orcid: "ORCID",
  github: "GitHub",
  bluesky: "Bluesky",
};

function SocialIcon({ kind }: { kind: SocialKind }) {
  switch (kind) {
    case "orcid":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.713 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z" />
        </svg>
      );
    case "github":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      );
    case "bluesky":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z" />
        </svg>
      );
  }
}

function SocialLinks({ founder }: { founder: Founder }) {
  return (
    <div className="flex items-center gap-4">
      {founder.socials.map((s) => (
        <a
          key={s.kind}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${founder.name} on ${SOCIAL_LABEL[s.kind]}`}
          title={SOCIAL_LABEL[s.kind]}
          className="text-muted hover:text-blue transition-colors"
        >
          <SocialIcon kind={s.kind} />
        </a>
      ))}
    </div>
  );
}

function FounderSection({ section }: { section: Section }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-body text-[12px] font-medium tracking-[0.1em] uppercase text-muted">
        {section.label}
      </p>
      <ul className="flex flex-col gap-1.5">
        {section.items.map((item) => (
          <li key={item} className="flex gap-3 font-body text-[15px] text-dark leading-6">
            <span className="text-yellow font-bold shrink-0">—</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AboutUsPage() {
  return (
    <main>
      {/* Header */}
      <section className="flex flex-col items-center gap-5 px-6 md:px-20 pt-16 md:pt-24 pb-10 md:pb-12 bg-offwhite text-center">
        <p className="font-body text-[13px] font-medium tracking-[0.12em] uppercase text-blue">
          Who We Are
        </p>
        <h1 className="font-display text-[34px] md:text-[52px] font-bold text-dark tracking-[-0.02em] leading-[40px] md:leading-[58px] max-w-[820px]">
          About us
        </h1>
        <p className="font-body text-[17px] md:text-lg text-light-muted leading-7 md:leading-8 max-w-[720px]">
          Semantify helps research organizations, repositories, and funders design
          metadata and PID systems that interoperate — and make sure they get adopted.
          Sara El-Gebali brings semantic architecture from EMBO, EMBL-EBI, SciLifeLab
          and DataCite. Xiaoli Chen brings programme leadership from CERN, DataCite,
          FORCE11 and RDA. We work remotely, globally.
        </p>
      </section>

      {/* Founders */}
      <div className="flex flex-col">
        {founders.map((f, idx) => (
          <section
            key={f.name}
            className={`px-6 md:px-20 py-16 md:py-20 ${idx % 2 === 1 ? "bg-offwhite" : ""}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 lg:gap-16 max-w-[1100px] mx-auto">
              {/* Left rail */}
              <div className="flex flex-col gap-5 lg:sticky lg:top-10 h-fit">
                <div className="relative w-28 h-28 rounded-full overflow-hidden border border-[#E8E7E3] bg-white shrink-0">
                  <Image
                    src={f.image}
                    alt={f.name}
                    fill
                    sizes="112px"
                    className="object-cover"
                    style={{ objectPosition: f.imagePosition ?? "50% 50%" }}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="font-display text-[26px] md:text-[30px] font-bold text-dark tracking-tight leading-8">
                    {f.name}
                  </h2>
                  <p className="font-body text-[15px] font-medium text-blue">{f.role}</p>
                  {f.location ? (
                    <p className="font-body text-sm text-muted">{f.location}</p>
                  ) : null}
                </div>
                <div className="flex flex-col gap-3">
                  <a
                    href={f.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm font-medium text-blue hover:underline w-fit"
                  >
                    {f.siteLabel} →
                  </a>
                  <SocialLinks founder={f} />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-8">
                <p className="font-body text-[17px] text-light-muted leading-8">{f.bio}</p>
                {f.sections.map((s) => (
                  <FounderSection key={s.label} section={s} />
                ))}

                <div className="flex flex-col gap-3">
                  <p className="font-body text-[12px] font-medium tracking-[0.1em] uppercase text-muted">
                    {f.depthLabel}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {f.depth.map((d) => (
                      <span
                        key={d}
                        className="font-body text-[13px] text-dark bg-white border border-[#E8E7E3] rounded-full px-3 py-1"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="flex flex-col items-center gap-6 px-6 md:px-20 py-16 md:py-24 bg-blue text-center">
        <h2 className="font-display text-3xl md:text-[40px] font-bold text-white tracking-tight leading-[38px] md:leading-[48px] max-w-[640px]">
          Want to work with us?
        </h2>
        <a
          href="mailto:hello@semantify.co"
          className="flex items-center justify-center px-9 py-[18px] bg-yellow rounded-lg font-body text-base font-semibold text-dark hover:bg-yellow/90 transition-colors"
        >
          hello@semantify.co
        </a>
      </section>
    </main>
  );
}
