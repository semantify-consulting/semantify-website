const collaborators = [
  { name: "DataCite", href: "https://datacite.org", logo: "/logos/datacite.png" },
  { name: "CERN", href: "https://home.cern", note: "alumni", logo: "/logos/cern.png" },
  { name: "EMBL-EBI", href: "https://www.ebi.ac.uk", note: "alumni", logo: "/logos/embl-ebi.png" },
  { name: "FDO Forum", href: "https://fairdo.org", logo: "/logos/fdo-forum.png" },
  { name: "RDA", href: "https://rd-alliance.org", logo: "/logos/rda.png" },
  { name: "FORCE11", href: "https://force11.org", logo: "/logos/force11.png" },
  { name: "EOSC", href: "https://eosc.eu", logo: "/logos/eosc.png" },
  { name: "NASA TOPS", href: "https://science.nasa.gov/open-science", logo: "/logos/nasa-tops.png" },
  { name: "FAIRPoints", href: "https://fairpoints.org", logo: "/logos/fairpoints.png" },
];

type Collaborator = (typeof collaborators)[number];

function LogoItem({ c, duplicate }: { c: Collaborator; duplicate?: boolean }) {
  // note is folded into the accessible/fallback label so the visual strip stays clean
  const label = "note" in c && c.note ? `${c.name} (${c.note})` : c.name;
  return (
    <a
      href={c.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      aria-hidden={duplicate || undefined}
      tabIndex={duplicate ? -1 : undefined}
      className={`shrink-0 flex items-center px-8 font-body text-sm font-medium text-muted grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition${duplicate ? " marquee-dup" : ""}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={c.logo} alt={label} className="h-8 w-auto object-contain" />
    </a>
  );
}

export default function TrustStrip() {
  return (
    <section className="flex flex-col items-center gap-6 px-6 md:px-20 py-10 md:py-12 border-b border-[#E8E7E3]">
      <p className="font-body text-[12px] font-medium tracking-[0.12em] uppercase text-muted">
        Past and present collaborators
      </p>
      <div className="marquee-viewport w-full">
        <div className="marquee-track">
          {collaborators.map((c) => (
            <LogoItem key={c.name} c={c} />
          ))}
          {/* duplicate copy creates the seamless infinite loop; hidden from a11y + reduced-motion */}
          {collaborators.map((c) => (
            <LogoItem key={`dup-${c.name}`} c={c} duplicate />
          ))}
        </div>
      </div>
    </section>
  );
}
