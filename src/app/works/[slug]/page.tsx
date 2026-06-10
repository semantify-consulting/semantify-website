import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { publishedPosts, getPost } from "@/lib/works";

export function generateStaticParams() {
  return publishedPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post not found — Semantify" };
  return {
    title: `Semantify — ${post.title}`,
    description: post.excerpt,
  };
}

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

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post || post.placeholder) notFound();

  return (
    <main>
      <article className="px-6 md:px-20 py-14 md:py-20 max-w-[960px] mx-auto flex flex-col gap-6">
        <Link
          href="/works"
          className="font-body text-sm font-medium text-muted hover:text-blue transition-colors"
        >
          ← All works
        </Link>
        <span className="font-body text-[12px] font-medium tracking-[0.08em] uppercase text-muted">
          {formatDate(post.date)}
        </span>
        <h1 className="font-display text-[30px] md:text-[44px] font-bold text-dark tracking-[-0.02em] leading-[36px] md:leading-[50px]">
          {post.title}
        </h1>
        {post.subtitle && (
          <p className="font-body text-lg md:text-xl text-muted leading-8">
            {post.subtitle}
          </p>
        )}
        {post.image && (
          <figure className="mt-2 flex flex-col gap-2">
            <Image
              src={post.image.src}
              alt={post.image.alt}
              width={1086}
              height={724}
              priority
              className="w-full h-auto rounded-2xl"
            />
            {post.image.credit && (
              <figcaption className="font-body text-[12px] text-muted leading-5">
                Image: {post.image.credit.author}, {post.image.credit.year} ·{" "}
                {post.image.credit.licenseUrl ? (
                  <a
                    href={post.image.credit.licenseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-offset-2 hover:text-blue hover:underline"
                  >
                    {post.image.credit.license}
                  </a>
                ) : (
                  post.image.credit.license
                )}
              </figcaption>
            )}
          </figure>
        )}
        <div className="flex flex-col gap-5 pt-2">
          {post.content.map((block, i) => {
            if (typeof block === "string") {
              return (
                <p
                  key={i}
                  className="font-body text-[17px] text-light-muted leading-8"
                >
                  {block}
                </p>
              );
            }
            if (block.type === "heading") {
              return (
                <h2
                  key={i}
                  className="font-display text-[24px] md:text-[30px] font-bold text-dark tracking-[-0.01em] leading-[32px] md:leading-[38px] pt-5"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === "list") {
              return (
                <ul key={i} className="flex flex-col gap-3">
                  {block.items.map((item, j) => (
                    <li
                      key={j}
                      className="font-body text-[17px] text-light-muted leading-8 flex gap-3"
                    >
                      <span className="text-blue shrink-0" aria-hidden>
                        —
                      </span>
                      <span>
                        {item.lead && (
                          <strong className="font-semibold text-dark">
                            {item.lead}{" "}
                          </strong>
                        )}
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              );
            }
            if (block.type === "divider") {
              return <hr key={i} className="border-t border-black/10 my-4" />;
            }
            if (block.type === "link") {
              return (
                <a
                  key={i}
                  href={block.href}
                  className="font-body text-[17px] font-semibold text-blue hover:underline"
                >
                  {block.text}
                </a>
              );
            }
            return null;
          })}
        </div>
      </article>
    </main>
  );
}
