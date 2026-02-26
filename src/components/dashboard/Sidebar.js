"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import useAutoCollapse from "../../hooks/useAutoCollapse";
import LogoutModal from "./LogoutModal";

export default function Sidebar({ menu = [] }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useAutoCollapse(1400);
  const [showLogout, setShowLogout] = useState(false);

  // ✅ active route checker
  const isActiveRoute = (item) => {
    if (pathname === item.href) return true;

    if (item.childRoutes?.includes(pathname)) {
      return true;
    }

    return false;
  };

  return (
    <aside className={`juggling-sidebar ${collapsed ? "is-collapsed" : ""}`}>
      {/* Logo */}
      <div className="juggling-logo">
        <Link href="/">
          <Image
            src="/assets/image/logo-juggling.svg"
            alt="Logo"
            width={60}
            height={60}
          />
        </Link>
      </div>

      {/* Menu */}
      <ul className="juggling-menu">
        {menu.map((item) => {
          const active = isActiveRoute(item);

          return (
            <li key={item.name} className={active ? "active" : ""}>
              <Link href={item.href}>
                <Image
                  src={active ? item.activeIcon : item.icon}
                  alt={item.name}
                  width={22}
                  height={22}
                />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Logout */}
      <button className="juggling-logout" onClick={() => setShowLogout(true)}>
        <Image
          src="/assets/image/logout-icon.svg"
          alt="Logout"
          width={18}
          height={18}
        />
        {!collapsed && <span>Log out</span>}
      </button>

      <LogoutModal open={showLogout} onClose={() => setShowLogout(false)} />

      {/* Toggle */}
      <button
        className="juggling-sidebar-toggle"
        onClick={() => setCollapsed(!collapsed)}>
        ☰
      </button>
    </aside>
  );
}
