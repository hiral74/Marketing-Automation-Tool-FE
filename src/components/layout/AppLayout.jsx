import { Outlet } from "react-router-dom";
import { Search, Sparkles, RotateCcw } from "lucide-react";
import Sidebar from "./Sidebar";

export default function AppLayout() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-cream">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center gap-3 border-b border-cream-line px-6 py-3.5">
          <div className="flex flex-1 items-center gap-2 rounded-lg border border-cream-line bg-white px-3 py-2 max-w-xl">
            <Search size={15} className="text-slate-muted" />
            <input
              placeholder="Search campaigns, blogs, posts, assets..."
              className="w-full bg-transparent font-mono text-[13px] text-ink placeholder:text-slate-muted focus:outline-none"
            />
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button className="rounded-lg border border-cream-line bg-white p-2 text-amber hover:bg-black/[0.03]">
              <Sparkles size={16} />
            </button>
            <button className="rounded-lg border border-cream-line bg-white p-2 text-ink hover:bg-black/[0.03]">
              <RotateCcw size={15} />
            </button>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto px-8 py-7">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
