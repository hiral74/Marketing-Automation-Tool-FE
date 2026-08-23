import { users, roles } from "../data/mockData";

const USE_MOCK = import.meta.env.VITE_USE_MOCK !== "false";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

const roleName = (roleId) => roles.find((r) => r.roleId === roleId)?.roleName ?? "Viewer";

function mockLogin({ email, password, presetRole }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = presetRole
        ? users.find((u) => roleName(u.roleId) === presetRole) ?? users[0]
        : users.find((u) => u.email.toLowerCase() === String(email).toLowerCase());

      if (!user || (!presetRole && !password)) {
        reject({ status: 401, message: "Invalid email or password." });
        return;
      }

      resolve({
        token: `mock-jwt.${btoa(user.email)}.${Date.now()}`,
        user: {
          id: user.userId,
          name: user.name,
          email: user.email,
          role: roleName(user.roleId),
        },
      });
    }, 450);
  });
}

export async function login({ email, password, presetRole }) {
  if (USE_MOCK) return mockLogin({ email, password, presetRole });

  const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  if (!res.ok) throw { status: res.status, message: data.message || "Login failed." };
  return data; // { token, user: { id, name, email, role } }
}

export function authHeader(token) {
  return token ? { Authorization: `Bearer ${token}` } : {};
}
