import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Semantify — Accessibility Statement",
  description:
    "Semantify's commitment to making semantify.co accessible, our conformance with WCAG 2.1 Level AA, and how to report accessibility barriers.",
};

export default function AccessibilityPage() {
  return (
    <main className="px-6 md:px-20 py-14 md:py-20">
      <article className="max-w-[760px] mx-auto flex flex-col gap-5 prose-policy">
        <header className="flex flex-col gap-3 mb-2">
          <p className="font-body text-[13px] font-medium tracking-[0.12em] uppercase text-blue">
            Legal
          </p>
          <h1 className="font-display text-[32px] md:text-[44px] font-bold text-dark tracking-[-0.02em] leading-[38px] md:leading-[50px]">
            Accessibility Statement
          </h1>
          <p className="font-body text-sm text-muted">Effective date: 6 June 2026</p>
        </header>

        <H2>Our commitment</H2>
        <P>
          Semantify Consulting Ltd (SC889124) is committed to making this website
          accessible to as many people as possible, regardless of disability, impairment,
          or the technology they use to browse. We aim to conform with the Web Content
          Accessibility Guidelines (WCAG) 2.1 at Level AA.
        </P>
        <P>
          This statement applies to semantify.co and all subpages hosted on this domain.
        </P>

        <H2>How accessible is this site?</H2>
        <P>We have designed the site with accessibility in mind:</P>
        <UL
          items={[
            "Semantic HTML structure with ARIA landmarks where applicable",
            "Sufficient colour contrast for text and interactive elements",
            "Keyboard-navigable menus and links",
            "Responsive design that works across screen sizes and zoom levels",
            "Alt text on informational images",
            "Plain language throughout",
          ]}
        />
        <P>
          We test the site regularly using automated audits (Lighthouse, axe-core), manual
          keyboard navigation, and screen reader testing (VoiceOver, NVDA).
        </P>

        <H2>Feedback and contact</H2>
        <P>
          If you encounter an accessibility barrier on this site, or if you have
          suggestions for improvement, contact us:
        </P>
        <UL
          items={[
            <>
              <B>Email:</B>{" "}
              <A href="mailto:hello@semantify.co">hello@semantify.co</A>
            </>,
            <>
              <B>Post:</B> 7/11 Breadalbane Street, Edinburgh, Scotland, EH6 5JJ
            </>,
          ]}
        />
        <P>We aim to respond to accessibility queries within 5 working days.</P>

        <H2>Enforcement</H2>
        <P>
          If you are not satisfied with our response, you can contact the Equality Advisory
          and Support Service (EASS) at{" "}
          <A href="https://www.equalityadvisoryservice.com">equalityadvisoryservice.com</A>,
          or the Equality and Human Rights Commission (EHRC) if you are in England,
          Scotland, or Wales.
        </P>

        <H2>Technical information</H2>
        <P>This site is built with Next.js and hosted on Vercel.</P>

        <H2>Review date</H2>
        <P>
          This statement was last reviewed on 6 June 2026. Next review due: 6 June 2027.
        </P>
      </article>
    </main>
  );
}

/* Small prose primitives, kept local to this page. */
function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-xl md:text-2xl font-bold text-dark tracking-tight mt-6">
      {children}
    </h2>
  );
}

function P({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`font-body text-[15px] text-light-muted leading-7 ${className}`}>
      {children}
    </p>
  );
}

function B({ children }: { children: React.ReactNode }) {
  return <span className="font-semibold text-dark">{children}</span>;
}

function A({ href, children }: { href: string; children: React.ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="text-blue hover:underline"
    >
      {children}
    </a>
  );
}

function UL({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 font-body text-[15px] text-light-muted leading-7">
          <span className="text-yellow font-bold shrink-0">—</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
