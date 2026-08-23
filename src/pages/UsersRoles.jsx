import { MoreHorizontal } from "lucide-react";
import { PageHeader, PrimaryButton, Card, Badge, Avatar } from "../components/ui/ui";
import { users, roles } from "../data/mockData";

const statusTint = { Active: "mint", Invited: "gray" };
const roleTint = { Administrator: "ink", "Marketing Manager": "brand", "Content Creator": "amber", Designer: "rose", Viewer: "gray" };
const roleName = (roleId) => roles.find((r) => r.roleId === roleId)?.roleName ?? "Viewer";

export default function UsersRoles() {
  return (
    <div>
      <PageHeader eyebrow="FR-02 · User Management & RBAC" title="Users & Roles" action={<PrimaryButton>+ Invite User</PrimaryButton>} />

      <Card className="overflow-hidden">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-cream-line">
              {["User", "Email", "Role", "Status", "Last Active", ""].map((h) => (
                <th key={h} className="section-label px-5 py-3 font-normal">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.userId} className="border-b border-cream-line last:border-none hover:bg-cream/60">
                <td className="px-5 py-3.5">
                  <span className="flex items-center gap-2.5 font-sans text-sm font-medium text-ink">
                    <Avatar initials={u.initials} /> {u.name}
                  </span>
                </td>
                <td className="px-5 py-3.5 font-mono text-[12px] text-slate-muted">{u.email}</td>
                <td className="px-5 py-3.5">
                  <Badge tint={roleTint[roleName(u.roleId)]}>{roleName(u.roleId).toUpperCase()}</Badge>
                </td>
                <td className="px-5 py-3.5">
                  <Badge tint={statusTint[u.status]}>{u.status}</Badge>
                </td>
                <td className="px-5 py-3.5 font-mono text-[12px] text-slate-muted">{u.lastActiveAt}</td>
                <td className="px-5 py-3.5 text-right">
                  <button className="text-slate-muted hover:text-ink">
                    <MoreHorizontal size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
