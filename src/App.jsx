import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import AppLayout from "./components/layout/AppLayout";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ContentCalendar from "./pages/ContentCalendar";
import Campaigns from "./pages/Campaigns";
import Blogs from "./pages/Blogs";
import Newsletters from "./pages/Newsletters";
import SocialPosts from "./pages/SocialPosts";
import AssetLibrary from "./pages/AssetLibrary";
import Analytics from "./pages/Analytics";
import Notifications from "./pages/Notifications";
import UsersRoles from "./pages/UsersRoles";
import SystemSettings from "./pages/SystemSettings";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/content-calendar" element={<ContentCalendar />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/newsletters" element={<Newsletters />} />
            <Route path="/social-posts" element={<SocialPosts />} />
            <Route path="/asset-library" element={<AssetLibrary />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/users-roles" element={<UsersRoles />} />
            <Route path="/system-settings" element={<SystemSettings />} />
          </Route>

          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
