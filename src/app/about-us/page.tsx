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
  },
];

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
                <div className="flex flex-col gap-2">
                  <a
                    href={f.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm font-medium text-blue hover:underline w-fit"
                  >
                    {f.siteLabel} →
                  </a>
                  {/* TODO: add LinkedIn and ORCID links once provided (LinkedIn + ORCID for both; site for Sara per spec). */}
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
