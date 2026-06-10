import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { posts } from "@/lib/works";

export const metadata: Metadata = {
  title: "Semantify — Latest Thinking & Case Studies",
  description:
    "Case studies and notes on metadata infrastructure, persistent identifiers, knowledge graphs, and getting research data infrastructure actually used.",
};

function formatDate(date: string) {
  const [year, month] = date.split("-");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return month ? `${months[Number(month) - 1]} ${year}` : year;
}

export default function WorksPage() {
  return (
    <main>
      {/* Header */}
      <section className="flex flex-col items-center gap-5 px-6 md:px-20 pt-16 md:pt-24 pb-10 md:pb-12 bg-offwhite text-center">
        <p className="font-body text-[13px] font-medium tracking-[0.12em] uppercase text-blue">
          Works
        </p>
        <h1 className="font-display text-[34px] md:text-[52px] font-bold text-dark tracking-[-0.02em] leading-[40px] md:leading-[58px] max-w-[820px]">
          Latest thinking
        </h1>
        <p className="font-body text-[17px] md:text-lg text-light-muted leading-7 md:leading-8 max-w-[640px]">
          Field notes on the systems we build — what tends to break, and what makes
          infrastructure actually get used.
        </p>
      </section>

      {/* Post list */}
      <section className="px-6 md:px-20 py-16 md:py-24 flex flex-col gap-5 md:gap-6 max-w-[1080px] mx-auto">
        {posts.map((p) => {
          const body = (
            <>
              {p.image && (
                <div className="md:w-[240px] md:shrink-0 md:min-h-[160px] overflow-hidden rounded-lg">
                  <Image
                    src={p.image.src}
                    alt={p.image.alt}
                    width={480}
                    height={320}
                    className="w-full h-[180px] md:h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
              )}
              <div className="flex flex-col gap-3">
                {p.placeholder ? (
                  <span className="self-start font-body text-[11px] font-semibold tracking-[0.08em] uppercase text-blue bg-blue/10 px-2.5 py-1 rounded-full">
                    Coming soon
                  </span>
                ) : (
                  <span className="font-body text-[12px] font-medium tracking-[0.08em] uppercase text-muted">
                    {formatDate(p.date)}
                  </span>
                )}
                <h2 className="font-display text-xl md:text-2xl font-semibold text-dark leading-7">
                  {p.title}
                </h2>
                <p className="font-body text-[15px] text-muted leading-6">{p.excerpt}</p>
                {p.placeholder ? (
                  <span className="font-body text-sm font-medium text-muted">
                    Topic in progress
                  </span>
                ) : (
                  <span className="font-body text-sm font-semibold text-blue group-hover:underline">
                    Read more →
                  </span>
                )}
              </div>
            </>
          );

          const cardClass =
            "flex flex-col md:flex-row gap-5 md:gap-7 p-6 md:p-8 rounded-xl transition-colors";

          return p.placeholder ? (
            <div
              key={p.slug}
              className={`${cardClass} bg-offwhite/60 border border-dashed border-black/10`}
            >
              {body}
            </div>
          ) : (
            <Link
              key={p.slug}
              href={`/works/${p.slug}`}
              className={`group ${cardClass} bg-offwhite hover:bg-[#F1EFE8]`}
            >
              {body}
            </Link>
          );
        })}
      </section>
    </main>
  );
}
