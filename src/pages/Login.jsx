import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Diamond, ArrowRight } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { roles } from "../data/mockData";

const swatches = ["bg-brand", "bg-amber", "bg-mint", "bg-rose", "bg-white/10", "bg-brand", "bg-white/10", "bg-mint"];

export default function Login() {
  const { signIn, loading, error } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("priya.menon@company.com");
  const [password, setPassword] = useState("");
  const [presetRole, setPresetRole] = useState("Administrator");

  const redirectTo = location.state?.from?.pathname || "/dashboard";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn({ email, password: password || "demo", presetRole });
      navigate(redirectTo, { replace: true });
    } catch {
      /* error already surfaced via context */
    }
  };

  return (
    <div className="flex min-h-screen w-full font-sans">
      {/* Left panel */}
      <div className="relative hidden w-1/2 flex-col justify-between overflow-hidden bg-ink px-14 py-14 text-white lg:flex">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(600px circle at 30% 90%, rgba(214,75,98,0.25), transparent 60%), radial-gradient(500px circle at 70% 10%, rgba(84,92,255,0.2), transparent 60%)",
          }}
        />
        <div className="relative z-10 flex items-center gap-2">
          <Diamond size={16} className="text-brand" fill="currentColor" />
          <span className="font-mono text-[13px] tracking-widest">MA PORTAL</span>
        </div>

        <div className="relative z-10 max-w-md">
          <h1 className="font-serif text-4xl font-semibold leading-tight">
            One desk for every campaign, post, blog and send.
          </h1>
          <div className="mt-8 flex gap-2">
            {swatches.map((c, i) => (
              <span key={i} className={`h-9 w-9 rounded-md ${c}`} />
            ))}
          </div>
        </div>

        <p className="relative z-10 max-w-sm font-sans text-sm text-white/60">
          Plan campaigns, generate AI-assisted content, schedule newsletters and social
          posts, and track performance — all from a single, role-secured workspace.
        </p>
      </div>

      {/* Right panel */}
      <div className="flex w-full flex-1 items-center justify-center bg-cream px-6 py-14 lg:w-1/2">
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <p className="eyebrow mb-2">Sign in · JWT secured</p>
          <h2 className="font-serif text-3xl font-semibold text-ink">Welcome back</h2>
          <p className="mt-1.5 mb-8 text-sm text-slate-muted">
            Enter your credentials to access your workspace.
          </p>

          <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-wide text-slate-muted">
            Email address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-5 w-full rounded-lg border border-cream-line bg-cream px-3.5 py-2.5 font-sans text-sm text-ink focus:border-brand focus:outline-none"
            placeholder="priya.menon@company.com"
          />

          <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-wide text-slate-muted">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-5 w-full rounded-lg border border-cream-line bg-cream px-3.5 py-2.5 font-sans text-sm text-ink focus:border-brand focus:outline-none"
            placeholder="••••••••"
          />

          <p className="mb-2 font-mono text-[11px] uppercase tracking-wide text-slate-muted">
            Preview as role (demo only)
          </p>
          <div className="mb-6 flex flex-wrap gap-2">
            {roles.map((r) => (
              <button
                type="button"
                key={r.roleId}
                onClick={() => setPresetRole(r.roleName)}
                className={`rounded-full px-3 py-1.5 font-mono text-[11px] transition ${
                  presetRole === r.roleName
                    ? "bg-brand text-white"
                    : "bg-brand-soft text-brand-dark hover:bg-brand-soft/70"
                }`}
              >
                {r.roleName}
              </button>
            ))}
          </div>

          {error && <p className="mb-4 rounded-lg bg-rose-soft px-3 py-2 text-sm text-rose">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-ink py-3 font-sans text-sm font-medium text-white transition hover:bg-ink-soft disabled:opacity-60"
          >
            {loading ? "Signing in\u2026" : "Sign in"} <ArrowRight size={15} />
          </button>

          <div className="mt-5 flex justify-between text-xs text-slate-muted">
            <a href="#" className="hover:text-ink">Forgot password?</a>
            <a href="#" className="hover:text-ink">Need access? Contact your admin</a>
          </div>
        </form>
      </div>
    </div>
  );
}
