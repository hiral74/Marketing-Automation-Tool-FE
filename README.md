## Marketing Automation Portal — Frontend

React + Vite + Tailwind CSS frontend for the Marketing Automation Portal.


## Stack

- **React 19 + Vite** — app shell and build tooling
- **React Router** — client-side routing, one route per FR (functional requirement)
- **Tailwind CSS** — styling, with design tokens (colors/fonts) lifted from the Figma file
- **Recharts** — the bar chart on the Analytics page
- **lucide-react** — icon set

## http://localhost:5173


## Project structure

src/
  lib/api.js                Auth API client (contract-matched, mock/real toggle)
  context/AuthContext.jsx   JWT + user/role session state
  data/mockData.js          Mock records shaped after the ER diagram entities
  components/
    layout/Sidebar.jsx      Left nav — matches FR list & icons from the design
    layout/AppLayout.jsx    Shell: sidebar + topbar + routed page content
    ui/ui.jsx                Shared primitives: Card, Badge, Button, StatCard...
    ProtectedRoute.jsx       Redirects to /login when there's no session
  pages/
    Login.jsx                FR-01 — role-based sign-in
    Dashboard.jsx             FR-12 — admin/marketing dashboard
    ContentCalendar.jsx       FR-04 — social content calendar
    Campaigns.jsx             FR-03 — campaign management
    Blogs.jsx                 FR-05 — blog management
    Newsletters.jsx           FR-06 — newsletter scheduling
    SocialPosts.jsx           FR-07/08 — LinkedIn & Instagram management
    AssetLibrary.jsx          FR-09 — digital asset management
    Analytics.jsx             FR-10 — campaign analytics dashboard
    Notifications.jsx         FR-11 — notification management
    UsersRoles.jsx             FR-02 — user management & RBAC
    SystemSettings.jsx        System configuration & audit log

Every page currently reads from `src/data/mockData.js`. 
Swap those imports for real fetch/query calls once your endpoints exist — the component code and layout won't need to change.

