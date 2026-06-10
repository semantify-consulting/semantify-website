import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Semantify — Terms & Conditions",
  description:
    "The terms and conditions governing use of the Semantify website, operated by Semantify Consulting Ltd, a company registered in Scotland.",
};

export default function TermsPage() {
  return (
    <main className="px-6 md:px-20 py-14 md:py-20">
      <article className="max-w-[760px] mx-auto flex flex-col gap-5 prose-policy">
        <header className="flex flex-col gap-3 mb-2">
          <p className="font-body text-[13px] font-medium tracking-[0.12em] uppercase text-blue">
            Legal
          </p>
          <h1 className="font-display text-[32px] md:text-[44px] font-bold text-dark tracking-[-0.02em] leading-[38px] md:leading-[50px]">
            Terms and Conditions
          </h1>
          <p className="font-body text-sm text-muted">Effective date: 6 June 2026</p>
        </header>

        <H2>1. About these terms</H2>
        <P>
          These terms and conditions (&ldquo;Terms&rdquo;) apply to your use of the website
          at semantify.co (the &ldquo;Site&rdquo;), operated by Semantify Consulting Ltd
          (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), a company registered in
          Scotland under company number SC889124.
        </P>
        <P>
          Our registered office is 7/11 Breadalbane Street, Edinburgh, Scotland, EH6 5JJ.
        </P>
        <P>
          By using the Site, you agree to these Terms. If you do not agree, do not use the
          Site.
        </P>
        <P>
          These Terms do not govern any consulting services we provide. Client engagements
          are governed by a separate written agreement.
        </P>

        <H2>2. Using the Site</H2>
        <P>You may use the Site for lawful purposes only. You agree not to:</P>
        <UL
          items={[
            "Use the Site in any way that breaches applicable law or regulation",
            "Attempt to gain unauthorised access to the Site or its underlying systems",
            "Introduce malicious or harmful material (viruses, malware, etc.)",
            "Use automated means (scraping, crawling) to extract content without our prior written consent",
            "Use the Site to send unsolicited commercial communications",
          ]}
        />
        <P>We reserve the right to restrict access to the Site at our discretion.</P>

        <H2>3. Intellectual property</H2>
        <P>
          Unless otherwise stated, all content on the Site — including text, graphics,
          logos, code, and design elements — is owned by Semantify Consulting Ltd or
          licensed to us. This content is protected by copyright, trademark, and other
          intellectual property laws.
        </P>
        <P>You may:</P>
        <UL
          items={[
            "View and browse the Site for personal, non-commercial use",
            "Share links to publicly accessible pages on the Site",
          ]}
        />
        <P>You may not:</P>
        <UL
          items={[
            "Reproduce, distribute, or modify Site content without our prior written permission",
            "Use our trademarks, logos, or branding without a written licence",
            "Represent our content as your own",
          ]}
        />
        <P>
          If you wish to reference our materials in a publication or presentation, contact
          us at <A href="mailto:hello@semantify.co">hello@semantify.co</A>.
        </P>

        <H2>4. Disclaimer</H2>
        <P>
          The content on the Site is provided for general information only. It does not
          constitute professional advice (legal, financial, technical, or otherwise). You
          should not rely on Site content to make decisions without seeking appropriate
          professional guidance.
        </P>
        <P>
          We make reasonable efforts to keep the Site accurate and up to date, but we do
          not warrant that the content is complete, accurate, or current. We may change or
          remove content without notice.
        </P>
        <P>
          The Site is provided &ldquo;as is&rdquo; and &ldquo;as available.&rdquo; We do
          not guarantee uninterrupted access or that the Site will be free from errors or
          omissions.
        </P>

        <H2>5. Limitation of liability</H2>
        <P>
          To the fullest extent permitted by law, Semantify Consulting Ltd excludes all
          liability for any loss or damage arising from your use of, or inability to use,
          the Site — including but not limited to:
        </P>
        <UL
          items={[
            "Indirect, consequential, or incidental loss",
            "Loss of data, profits, revenue, business, or opportunity",
            "Loss arising from reliance on Site content",
          ]}
        />
        <P>
          Nothing in these Terms excludes or limits our liability for death or personal
          injury caused by our negligence, fraud or fraudulent misrepresentation, or any
          liability that cannot lawfully be excluded under the law of Scotland.
        </P>

        <H2>6. Links to third-party sites</H2>
        <P>
          The Site may contain links to external websites (e.g. LinkedIn, Bluesky, GitHub,
          and partner organisations). We do not control these sites and are not responsible
          for their content, privacy practices, or availability. Following a link to an
          external site is at your own risk.
        </P>

        <H2>7. Privacy and data protection</H2>
        <P>
          We process personal data in accordance with our{" "}
          <A href="/data-protection">Data Protection Policy</A>.
        </P>

        <H2>8. Changes to these Terms</H2>
        <P>
          We may update these Terms from time to time. The latest version will always be
          available on this page with the effective date noted at the top.
        </P>
        <P>
          If we make material changes, we will post a notice on the Site. Your continued
          use of the Site after changes are posted constitutes acceptance of the revised
          Terms.
        </P>

        <H2>9. Governing law and jurisdiction</H2>
        <P>
          These Terms are governed by the law of Scotland. Any disputes arising from these
          Terms shall be subject to the exclusive jurisdiction of the Scottish courts.
        </P>

        <H2>10. Contact</H2>
        <P>For questions about these Terms, contact us at:</P>
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
