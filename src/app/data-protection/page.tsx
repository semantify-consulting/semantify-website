import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Semantify — Data Protection & Privacy Policy",
  description:
    "How Semantify collects, uses, stores, and protects personal data, and the rights you have under the GDPR and UK Data Protection Act 2018.",
};

export default function DataProtectionPage() {
  return (
    <main className="px-6 md:px-20 py-14 md:py-20">
      <article className="max-w-[760px] mx-auto flex flex-col gap-5 prose-policy">
        <header className="flex flex-col gap-3 mb-2">
          <p className="font-body text-[13px] font-medium tracking-[0.12em] uppercase text-blue">
            Legal
          </p>
          <h1 className="font-display text-[32px] md:text-[44px] font-bold text-dark tracking-[-0.02em] leading-[38px] md:leading-[50px]">
            Data Protection &amp; Privacy Policy
          </h1>
          <p className="font-body text-sm text-muted">Last updated: June 2026</p>
        </header>

        <H2>Introduction</H2>
        <P>
          Semantify (also referred to as &ldquo;we&rdquo; or &ldquo;us&rdquo;) is a
          scholarly infrastructure consultancy. We design semantic and PID
          infrastructure, build the systems, and make sure the people using them adopt
          them. We take your privacy seriously and are committed to protecting any
          personal information collected or received from you.
        </P>
        <P>
          When you submit information to us, it is kept confidential and used only to
          support our activities — including the delivery of client projects, business
          development, and communication about our work. The{" "}
          <A href="https://eur-lex.europa.eu/eli/reg/2016/679/oj">
            General Data Protection Regulation (GDPR)
          </A>{" "}
          and, in the UK context, the{" "}
          <A href="https://www.legislation.gov.uk/ukpga/2018/12/contents">
            Data Protection Act (DPA) 2018
          </A>{" "}
          allow us to process your data where:
        </P>
        <UL
          items={[
            "it is necessary for the performance of a contract to which you are party;",
            "it is necessary in order to take steps at your request prior to entering into a contract;",
            "you have given explicit consent;",
            "it is necessary for the purposes of our legitimate interests (e.g. business development) and your interests do not override those interests.",
          ]}
        />
        <P>
          For the purposes of this policy, the GDPR and the UK DPA 2018 have the same
          implications for the types of processing carried out by Semantify.
        </P>
        <P>
          This Policy sets out the basis on which any personal data we collect from you,
          or that you provide to us, will be processed. We are committed to processing
          data lawfully, fairly and transparently, to retain data only until it is
          necessary, and to protect it from unauthorised use.
        </P>
        <P>
          Please read the following carefully to understand our views and practices
          regarding your personal data and how we will treat it.
        </P>

        <H2>Definitions</H2>
        <P>
          <B>&ldquo;Personal Data&rdquo;:</B> Any information related to an identified or
          identifiable natural person (&lsquo;data subject&rsquo;); an identifiable
          natural person is one who can be identified, directly or indirectly, in
          particular by reference to an identifier such as name, an identification
          number, location data, an online identifier or to one or more factors specific
          to the physical, physiological, genetic, mental, economic, cultural or social
          identity of that natural person.
        </P>
        <P>
          <B>&ldquo;Data Controller&rdquo;:</B> The natural or legal person, public
          authority, agency or any other body which alone, or jointly with others,
          determines the purposes and means for the processing of Personal Data.
        </P>
        <P>
          <B>&ldquo;Data Processor&rdquo;:</B> A natural or legal person, public
          authority, agency or other body which processes Personal Data on behalf of the
          Controller.
        </P>
        <P>
          <B>&ldquo;Data Protection Legislation&rdquo;:</B> The General Data Protection
          Regulation (GDPR) and, in the UK context, the Data Protection Act (DPA) 2018,
          and any laws which implement, replace, extend, re-enact, consolidate or amend
          any of the foregoing.
        </P>
        <P>
          <B>&ldquo;Special Category Data&rdquo;:</B> Personal data that requires more
          protection due to its sensitive nature. According to the UK GDPR, this includes
          personal data revealing racial or ethnic origin, political opinions, religious
          or philosophical beliefs, trade union membership, genetic data, biometric data
          (when used for identification purposes), data concerning health, data
          concerning a person&rsquo;s sex life, and data concerning a person&rsquo;s
          sexual orientation.
        </P>

        <H2>General Principles</H2>
        <OL
          items={[
            <>
              <B>With respect to client projects</B>, Semantify only collects personal
              data necessary to provide consulting services. We store personal data only
              insofar as required to deliver our services and seek informed consent from
              data subjects prior to collecting personal information. Where we conduct
              interviews or user research (e.g. as part of our User Research for Scholarly
              Tools service), we adhere to the{" "}
              <A href="https://www.mrs.org.uk/standards/code-of-conduct">
                MRS Code of Conduct
              </A>
              . For the purposes of the GDPR, Semantify is a data controller and
              processor. Where a client engages us to conduct research on their behalf,
              the client typically remains the data controller and we act as data
              processor under a Data Processing Agreement.
            </>,
            <>
              <B>With respect to our other activities</B> — business development,
              marketing, and communication — we collect personal data necessary to
              conduct and grow our business. All personal information gathered for these
              purposes is held only after seeking consent from the data owner. We do not
              need consent to process data when we are fulfilling a legal obligation.
            </>,
            <>
              Semantify is committed to honesty and transparency: we will communicate what
              personal information we collect and how this will be used in a simple,
              direct manner.
            </>,
          ]}
        />

        <H2>Business activities where we collect personal data</H2>
        <P>
          Semantify may collect personal data when undertaking activities related to the
          provision of its services.
        </P>
        <H3>Client engagement and project delivery</H3>
        <P>
          In the course of client projects — such as PID strategy, metadata health
          checks, knowledge graph blueprints, and adoption monitoring — we may collect
          contact details (names, email addresses, affiliations, job titles) of
          stakeholders identified by our clients or through publicly available sources. We
          collect only the minimum necessary personal data for the purpose of the
          engagement.
        </P>
        <H3>Interviews and user research</H3>
        <P>
          When conducting user research or stakeholder interviews as part of a project
          (e.g. for user research studies, adoption diagnostics, or requirements
          gathering), we ask participants to identify themselves, state the purpose of the
          interaction, and explain how the interview will be conducted (including whether
          it will be recorded or notes taken). Interviewees may remain anonymous where
          appropriate.
        </P>
        <P>
          Prior to interviews, we provide information on the research being conducted and,
          where relevant, an agenda or list of questions.
        </P>
        <P>
          Where interviews are recorded, recordings are deleted within 12 months of the
          end of the project. Interview recordings are shared with clients only where
          explicit consent has been provided by the participant.
        </P>
        <H3>Website enquiries</H3>
        <P>
          We collect personal data from visitors who use our website contact form or
          email to submit queries. This includes the visitor&rsquo;s name and email
          address, as well as any other information they choose to provide. We use this
          data solely to respond to the query and do not share it with third parties
          unless we have consent or are required by law.
        </P>
        <H3>Mailing list and marketing communications</H3>
        <P>
          Semantify may collect personal data from individuals who choose to join our
          mailing list. This typically includes your name, email address, and optionally
          your organisation. We send occasional updates about our work and services only
          where you have provided explicit consent.
        </P>
        <P>
          You can withdraw your consent or unsubscribe at any time by contacting us or
          using the unsubscribe link in any email we send.
        </P>
        <P>
          We use a third-party email service provider to manage subscriptions and send
          messages; they act as a data processor on our behalf. Appropriate safeguards are
          in place to protect your information, including Standard Contractual Clauses
          where data is transferred outside the UK or European Economic Area.
        </P>

        <H2>Business activities where we collect special category data</H2>
        <P>
          Semantify does not routinely collect special category data. In rare cases where
          our user research or client work involves sensitive topics, we may gather such
          data only where it is necessary to fulfil the research objectives and with
          explicit consent. Any such data is anonymised or deleted as soon as it is no
          longer needed.
        </P>

        <H2>Obtaining consent</H2>
        <P>
          Before asking you to share personally identifiable data, we seek your consent —
          verbally for interviews (logged in our notes or transcript) or via a consent
          form for surveys and other data collection. You may withdraw your consent or
          restrict data processing at any time by contacting us.
        </P>

        <H2>The information we collect</H2>
        <P>
          When we collect personal data, it is normally used to deliver our services,
          improve our offerings, or produce reports and recommendations. We may collect:
        </P>
        <UL
          items={[
            "Contact details (name, email address, affiliation, job title)",
            "Information relevant to the project (stakeholder mappings, research participant input)",
            "Opinions, experiences, and feedback related to our work",
          ]}
        />
        <P>
          When we wish to quote you verbatim in a report, we will inform you and seek your
          consent.
        </P>

        <H2>How we use the information</H2>
        <P>
          Our findings are typically reported to the client who commissioned the work,
          normally in anonymised form. In the rare cases where personal information must be
          shared with a client, we seek explicit consent beforehand.
        </P>
        <P>
          Where findings are released publicly, we ensure that any personally identifiable
          information is removed unless explicit consent has been given for attribution.
        </P>

        <H2>Sharing information</H2>
        <P>
          We will not share personal information with any third-party organisation unless:
        </P>
        <UL
          items={[
            "we are obliged to do so by contract or by law;",
            "the disclosure is necessary for purposes of national security, taxation, or criminal investigation;",
            "we have your explicit consent.",
          ]}
        />
        <P>
          Semantify occasionally works with associates or subcontractors to deliver
          projects. When this happens, they are engaged under contract as data processors
          and are obliged to comply with GDPR requirements. Their access to project data is
          terminated within a reasonable period after the project ends.
        </P>
        <P>
          We use third-party service providers for our business operations — including
          document collaboration, email, and cloud storage. Where information is shared
          with these providers, we ensure appropriate Data Processing Agreements are in
          place and that personal data is not used for AI training purposes unless
          explicitly permitted.
        </P>

        <H2>Security of information and data storage</H2>
        <P>All information is handled and managed in compliance with the GDPR.</P>
        <P>
          Our primary tools include Google Workspace (Docs, Sheets, Drive) and Notion for
          project collaboration. Access to all accounts is protected by strong passwords
          and, where available, two-factor authentication.
        </P>
        <UL
          items={[
            <>
              Google Workspace data is stored on Google&rsquo;s cloud infrastructure, which
              is certified under the{" "}
              <A href="https://www.dataprivacyframework.gov/">
                EU-US Data Privacy Framework
              </A>{" "}
              and complies with UK GDPR requirements via{" "}
              <A href="https://cloud.google.com/terms/data-processing-terms">
                Google&rsquo;s Data Processing Amendment
              </A>
              .
            </>,
            "Notion stores data on cloud infrastructure (AWS) with appropriate safeguards; a Data Processing Agreement is in place with Notion.",
            "Any survey data (collected via Google Forms, Typeform, or similar) is stored on the respective provider's cloud infrastructure with GDPR-compliant safeguards.",
          ]}
        />
        <P>
          Access to personal data is limited to the Semantify founders and, where
          relevant, project associates bound by contract. We do not maintain paper records
          containing personal data.
        </P>

        <H2>Data retention</H2>
        <P>
          We do not keep personal data longer than necessary to fulfil our legal or
          contractual obligations. This means:
        </P>
        <UL
          items={[
            "Project data containing personal information is deleted or fully anonymised within 24 months of the project's conclusion, unless otherwise agreed with the client.",
            "Mailing list data is retained until you unsubscribe or we cease sending communications.",
            "Contact details collected via website enquiries are retained for the duration of the correspondence and deleted once the matter is resolved.",
            "Where the lawful basis is contractual, data is deleted once the objectives stated in the contract have been achieved.",
          ]}
        />
        <P>
          We may retain anonymised data indefinitely for research and reference purposes —
          this does not constitute Personal Data as the data subjects can no longer be
          identified.
        </P>
        <P>We do not retain paper files.</P>

        <H2>Cross-border processing</H2>
        <P>
          In all cases where we collect and/or process data arising from more than one
          country, the lead supervisory authority for the purposes of the GDPR shall be
          the United Kingdom&rsquo;s Information Commissioner&rsquo;s Office (ICO).
          Cross-border processing of personal data will be agreed in relevant contracts
          and when seeking consent from project participants.
        </P>

        <H2>Data Protection Officer</H2>
        <P>
          Semantify does not have a Data Protection Officer. Article 37 of the GDPR details
          the cases where one is needed, and Semantify does not fit within those cases: we
          do not carry out systematic monitoring of data subjects on a large scale, nor do
          we process special categories of data on a large scale. The founders oversee data
          protection compliance jointly.
        </P>

        <H2>Your legal rights</H2>
        <P>
          Under the GDPR, you have the following rights with respect to your personal data:
        </P>
        <UL
          items={[
            <>
              <B>Right of access</B> — You may request access to any personal data we hold
              about you (Subject Access Request). Please email your request to{" "}
              <A href="mailto:li@semantify.co">li@semantify.co</A>.
            </>,
            <>
              <B>Right to rectification</B> — You may ask us to correct inaccurate or
              incomplete data.
            </>,
            <>
              <B>Right to erasure</B> — You may request the deletion of your personal data.
            </>,
            <>
              <B>Right to restrict processing</B> — You may ask us to limit how we use your
              data.
            </>,
            <>
              <B>Right to data portability</B> — You may request a copy of your data in a
              commonly used, machine-readable format.
            </>,
            <>
              <B>Right to object</B> — You may object to processing for direct marketing
              purposes at any time.
            </>,
          ]}
        />
        <P>
          To exercise any of these rights, contact us at{" "}
          <A href="mailto:li@semantify.co">li@semantify.co</A>. We will respond within 30
          days. For complex requests, we may take up to an additional two months and will
          inform you if so.
        </P>
        <P>
          If you are dissatisfied with our response, you have the right to lodge a complaint
          with the Information Commissioner&rsquo;s Office (ICO):{" "}
          <A href="https://ico.org.uk">https://ico.org.uk</A>.
        </P>

        <H2>Data breaches and information security incident procedure</H2>
        <P>
          We recognise that breaches can occur despite best efforts. Most of the digital
          systems we use (Google Workspace, Notion) are responsible for ensuring suitable
          security measures; however, Semantify is committed to:
        </P>
        <UL
          items={[
            "containing any breach and managing related risks;",
            "determining whether control actions are needed;",
            "assessing whether we have a responsibility to notify the ICO and affected individuals; and",
            "evaluating lessons learned.",
          ]}
        />
        <P>
          Incidents are defined by the GDPR as &ldquo;a breach of security leading to the
          accidental or unlawful destruction, loss, alteration, unauthorised disclosure of,
          or access to, personal data transmitted, stored or otherwise processed.&rdquo; We
          consider:
        </P>
        <OL
          items={[
            <>
              <B>Confidentiality breach</B> — unauthorised or accidental disclosure of, or
              access to, personal data.
            </>,
            <>
              <B>Availability breach</B> — accidental or unauthorised loss of access to, or
              destruction of, personal data.
            </>,
            <>
              <B>Integrity breach</B> — unauthorised or accidental alteration of personal
              data.
            </>,
          ]}
        />
        <P>
          When an incident is identified, the affected founder is notified and the issue
          addressed as a priority. Risk is assessed based on the type, sensitivity, and
          volume of data involved, and the likely consequences for affected individuals.
          Where the risk to individuals is high, the ICO and affected data subjects are
          notified as required by the GDPR.
        </P>

        <H2>Amendments</H2>
        <P>
          This Policy may be updated from time to time. Any changes will be reflected on
          the Semantify website. We encourage you to review this page periodically. This
          policy was last updated in June 2026.
        </P>

        <H2>Contact</H2>
        <P>
          <B>Semantify</B>
          <br />
          Edinburgh, UK / Gothenburg, Sweden
        </P>
        <UL
          items={[
            <>
              <B>Sara El-Gebali:</B>{" "}
              <A href="mailto:sara@semantify.co">sara@semantify.co</A>
            </>,
            <>
              <B>Xiaoli Chen (Li):</B>{" "}
              <A href="mailto:li@semantify.co">li@semantify.co</A>
            </>,
          ]}
        />
        <P className="text-muted italic">
          Semantify is a consulting partnership. Questions, concerns, or requests regarding
          this policy should be directed to{" "}
          <A href="mailto:li@semantify.co">li@semantify.co</A>.
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

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-display text-base md:text-lg font-semibold text-dark mt-2">
      {children}
    </h3>
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

function OL({ items }: { items: React.ReactNode[] }) {
  return (
    <ol className="flex flex-col gap-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 font-body text-[15px] text-light-muted leading-7">
          <span className="text-blue font-semibold shrink-0">{i + 1}.</span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}
