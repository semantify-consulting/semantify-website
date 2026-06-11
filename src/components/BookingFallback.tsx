// A visible, non-Google contact path shown alongside the Google Calendar
// booking CTA. Google is fully blocked in mainland China, so the booking link
// can silently fail there; this mailto fallback keeps a working conversion
// path for everyone without any geo-detection or third-party load.
export default function BookingFallback({
  className = "",
}: {
  className?: string;
}) {
  return (
    <p className={`font-body text-[13px] text-muted leading-5 ${className}`}>
      Prefer email?{" "}
      <a
        href="mailto:hello@semantify.co"
        className="text-blue hover:underline"
      >
        hello@semantify.co
      </a>
    </p>
  );
}
