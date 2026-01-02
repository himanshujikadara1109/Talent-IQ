import { Link, useLocation } from "react-router";
import {
  BookOpenIcon,
  LayoutDashboardIcon,
  SparklesIcon,
} from "lucide-react";
import { UserButton } from "@clerk/clerk-react";

function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 border-b border-primary/20 bg-base-100/70 backdrop-blur-xl shadow-[0_20px_40px_-20px_rgba(0,0,0,0.4)]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* LOGO */}
        <Link
          to="/"
          className="group flex items-center gap-3 perspective-1000"
        >
          <div
            className="
              size-11 rounded-xl
              bg-gradient-to-br from-primary via-secondary to-accent
              flex items-center justify-center
              shadow-xl
              transform transition-all duration-300
              group-hover:rotate-x-6 group-hover:-rotate-y-6
              group-hover:scale-110
              relative overflow-hidden
            "
          >
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 blur-xl transition" />
            <SparklesIcon className="size-6 text-white animate-pulse" />
          </div>

          <div className="flex flex-col leading-tight">
            <span className="text-xl font-black tracking-wider bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Amivue IQ
            </span>
            <span className="text-xs text-base-content/60 font-medium">
              Code Together
            </span>
          </div>
        </Link>

        {/* NAV LINKS */}
        <div className="flex items-center gap-2">
          {/* PROBLEMS */}
          <NavItem
            to="/problems"
            active={isActive("/problems")}
            icon={<BookOpenIcon className="size-4" />}
            label="Problems"
          />

          {/* DASHBOARD */}
          <NavItem
            to="/dashboard"
            active={isActive("/dashboard")}
            icon={<LayoutDashboardIcon className="size-4" />}
            label="Dashboard"
          />

          <div className="ml-4">
            <UserButton />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

/* ---------------------------------- */
/* Reusable 3D Nav Item */
/* ---------------------------------- */
function NavItem({ to, active, icon, label }) {
  return (
    <Link
      to={to}
      className={`
        group relative px-4 py-2.5 rounded-xl
        transition-all duration-300
        perspective-1000
        ${
          active
            ? "bg-primary text-primary-content shadow-lg scale-105"
            : "text-base-content/70 hover:text-base-content"
        }
      `}
    >
      <div
        className={`
          flex items-center gap-2.5
          transform transition-all duration-300
          group-hover:-translate-y-0.5
          group-hover:rotate-x-6
          ${active ? "translate-z-10" : ""}
        `}
      >
        <span className="transition-transform duration-300 group-hover:scale-110">
          {icon}
        </span>
        <span className="font-medium hidden sm:inline">{label}</span>
      </div>

      {/* Glow */}
      <span
        className={`
          pointer-events-none absolute inset-0 rounded-xl
          bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30
          opacity-0 blur-xl transition
          group-hover:opacity-100
        `}
      />
    </Link>
  );
}
