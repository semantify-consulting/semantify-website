import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-6 px-6 md:px-20 py-8 md:py-10 border-t border-[#E8E7E3]">
      <div className="flex flex-col items-center gap-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/semantify-wordmark-dark.png" alt="Semantify" className="h-6 w-auto" />
        <span className="font-body text-sm text-[#9A9A9A]">
          Semantic infrastructure consulting for research data ecosystems.
        </span>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-8">
        <Link href="/data-protection" className="font-body text-sm text-muted hover:text-blue transition-colors">Data Protection Policy</Link>
        <Link href="/terms" className="font-body text-sm text-muted hover:text-blue transition-colors">Terms and Conditions</Link>
        <Link href="/accessibility" className="font-body text-sm text-muted hover:text-blue transition-colors">Accessibility Statement</Link>
      </div>
      <div className="flex gap-5 items-center">
        <a href="https://www.linkedin.com/company/semantify-consulting-ltd/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#9A9A9A] hover:text-blue transition-colors">
          {/* LinkedIn */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </a>
        <a href="https://bsky.app/profile/semantify.bsky.social" target="_blank" rel="noopener noreferrer" aria-label="Bluesky" className="text-[#9A9A9A] hover:text-blue transition-colors">
          {/* Bluesky */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z"/></svg>
        </a>
        <a href="https://github.com/semantify-consulting" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-[#9A9A9A] hover:text-blue transition-colors">
          {/* GitHub */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </a>
      </div>
      <p className="font-body text-xs text-[#9A9A9A] text-center max-w-[460px] leading-relaxed">
        Semantify Consulting Ltd, registered in Scotland, No.&nbsp;SC889124.
        Registered office: 7/11 Breadalbane Street, Edinburgh, Scotland, EH6&nbsp;5JJ.
      </p>
    </footer>
  );
}
