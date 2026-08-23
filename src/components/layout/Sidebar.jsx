import { NavLink } from "react-router-dom";
import {
  LayoutDashboard, CalendarDays, Megaphone, PenSquare, Mail,
  AtSign, FolderKanban, BarChart3, Bell, Users, Settings, Diamond,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { Avatar } from "../ui/ui";

const nav = [
  {
    section: null,
    items: [{ to: "/dashboard", label: "Dashboard", icon: LayoutDashboard }],
  },
  {
    section: "Plan & create",
    items: [
      { to: "/content-calendar", label: "Content Calendar", icon: CalendarDays },
      { to: "/campaigns", label: "Campaigns", icon: Megaphone, badge: 12 },
      { to: "/blogs", label: "Blogs", icon: PenSquare },
      { to: "/newsletters", label: "Newsletters", icon: Mail },
      { to: "/social-posts", label: "Social Posts", icon: AtSign },
      { to: "/asset-library", label: "Asset Library", icon: FolderKanban },
    ],
  },
  {
    section: "Insights",
    items: [
      { to: "/analytics", label: "Analytics", icon: BarChart3 },
      { to: "/notifications", label: "Notifications", icon: Bell, badge: 4 },
    ],
  },
  {
    section: "Administration",
    items: [
      { to: "/users-roles", label: "Users & Roles", icon: Users },
      { to: "/system-settings", label: "System Settings", icon: Settings },
    ],
  },
];

export default function Sidebar() {
  const { user } = useAuth();

  return (
    <aside className="flex h-full w-[218px] shrink-0 flex-col bg-ink text-white">
      <div className="flex items-center gap-2 px-5 py-6">
        <Diamond size={16} className="text-brand" fill="currentColor" />
        <span className="font-mono text-[13px] font-semibold tracking-widest">MA PORTAL</span>
      </div>

      <nav className="flex-1 space-y-6 overflow-y-auto px-3 pb-6">
        {nav.map((group, i) => (
          <div key={i}>
            {group.section && (
              <p className="mb-2 px-2 font-mono text-[10px] tracking-widest text-white/35">
                {group.section.toUpperCase()}
              </p>
            )}
            <div className="space-y-0.5">
              {group.items.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-lg px-2.5 py-2 font-mono text-[13px] transition ${
                      isActive ? "bg-brand text-white" : "text-white/70 hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  <span className="flex items-center gap-2.5">
                    <item.icon size={15} strokeWidth={2} />
                    {item.label}
                  </span>
                  {item.badge && (
                    <span className="rounded-full bg-white/10 px-1.5 py-0.5 text-[10px]">{item.badge}</span>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className="flex items-center gap-2.5 border-t border-white/10 px-4 py-4">
        <Avatar initials={user?.name?.split(" ").map((n) => n[0]).join("").slice(0, 2) ?? "U"} />
        <div className="leading-tight">
          <p className="font-sans text-[13px] font-medium">{user?.name ?? "Guest"}</p>
          <p className="font-mono text-[10px] tracking-wide text-white/40">{(user?.role ?? "").toUpperCase()}</p>
        </div>
      </div>
    </aside>
  );
}
