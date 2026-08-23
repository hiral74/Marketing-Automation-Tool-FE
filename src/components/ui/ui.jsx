

const tintMap = {
  brand: "bg-brand-soft text-brand-dark",
  mint: "bg-mint-soft text-mint",
  amber: "bg-amber-soft text-amber",
  rose: "bg-rose-soft text-rose",
  gray: "bg-black/5 text-slate-muted",
  ink: "bg-ink text-white",
};

export function Badge({ tint = "gray", children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-mono text-[11px] leading-none ${tintMap[tint]} ${className}`}
    >
      {children}
    </span>
  );
}

export function Card({ children, className = "", ...rest }) {
  return (
    <div className={`rounded-xl2 border border-cream-line bg-cream-card ${className}`} {...rest}>
      {children}
    </div>
  );
}

export function PrimaryButton({ children, className = "", ...rest }) {
  return (
    <button
      className={`inline-flex items-center gap-1.5 rounded-lg bg-brand px-4 py-2 font-sans text-sm font-medium text-white transition hover:bg-brand-dark disabled:opacity-50 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({ children, className = "", ...rest }) {
  return (
    <button
      className={`inline-flex items-center gap-1.5 rounded-lg border border-cream-line bg-white px-4 py-2 font-sans text-sm font-medium text-ink transition hover:bg-black/[0.03] ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export function PageHeader({ eyebrow, title, action }) {
  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
      <div>
        <p className="eyebrow mb-1">{eyebrow}</p>
        <h1 className="font-serif text-3xl font-semibold text-ink">{title}</h1>
      </div>
      {action}
    </div>
  );
}

export function StatCard({ label, value, delta, deltaTint = "mint" }) {
  return (
    <Card className="p-5">
      <p className="section-label mb-3">{label}</p>
      <p className="font-serif text-3xl font-semibold text-ink">{value}</p>
      {delta && (
        <span className={`mt-3 inline-block rounded-full px-2 py-0.5 font-mono text-[11px] ${tintMap[deltaTint]}`}>
          {delta}
        </span>
      )}
    </Card>
  );
}

export function Avatar({ initials, className = "" }) {
  const palette = ["bg-brand", "bg-rose", "bg-mint", "bg-amber"];
  const idx = (initials?.charCodeAt(0) ?? 0) % palette.length;
  return (
    <span
      className={`inline-flex h-7 w-7 items-center justify-center rounded-full ${palette[idx]} font-mono text-[11px] font-semibold text-white ${className}`}
    >
      {initials}
    </span>
  );
}
