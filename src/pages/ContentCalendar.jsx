import { useState } from "react";
import { PageHeader, PrimaryButton, SecondaryButton } from "../components/ui/ui";
import { calendarEvents } from "../data/mockData";

const filters = ["All", "Campaigns", "Blog", "Newsletter", "Social"];
const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const tintBg = { brand: "bg-brand-soft text-brand-dark", amber: "bg-amber-soft text-amber", mint: "bg-mint-soft text-mint", rose: "bg-rose-soft text-rose" };

// August 2026 starts on a Saturday
const firstWeekdayIndex = 5; // Mon=0 ... Sat=5
const daysInMonth = 31;

export default function ContentCalendar() {
  const [active, setActive] = useState("All");
  const cells = Array.from({ length: firstWeekdayIndex }, () => null).concat(
    Array.from({ length: daysInMonth }, (_, i) => i + 1)
  );
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <div>
      <PageHeader
        eyebrow="FR-04 · Social Media Content Calendar"
        title="Content Calendar"
        action={
          <div className="flex gap-2">
            <SecondaryButton>Month ▾</SecondaryButton>
            <PrimaryButton>+ Schedule Post</PrimaryButton>
          </div>
        }
      />

      <div className="mb-4 flex gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`rounded-full px-3.5 py-1.5 font-mono text-[12px] transition ${
              active === f ? "bg-ink text-white" : "border border-cream-line bg-white text-slate-muted hover:text-ink"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="overflow-hidden rounded-xl2 border border-cream-line">
        <div className="grid grid-cols-7 bg-ink">
          {weekDays.map((d) => (
            <div key={d} className="py-2.5 text-center font-mono text-[11px] tracking-widest text-white/60">
              {d.toUpperCase()}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {cells.map((day, i) => (
            <div
              key={i}
              className={`min-h-[110px] border-b border-r border-cream-line p-2 last:border-r-0 ${
                day == null ? "bg-cream" : "bg-white"
              }`}
            >
              {day && (
                <>
                  <p className="mb-1.5 font-mono text-[11px] text-slate-muted">AUG {day}</p>
                  <div className="space-y-1">
                    {(calendarEvents[day] ?? []).map((ev, j) => (
                      <div key={j} className={`truncate rounded px-1.5 py-1 font-mono text-[10px] ${tintBg[ev.tint]}`}>
                        {ev.label}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
